#!/usr/bin/env node
/**
 * Screenshot helper using Chrome DevTools Protocol.
 * Usage: node tools/shoot.mjs <url> <out.png> [width] [height] [full|fold]
 *
 * Requires a Chrome binary. Launch Chrome separately or let this script do it:
 *   CHROME_PATH="C:\Program Files\Google\Chrome\Application\chrome.exe" node tools/shoot.mjs ...
 */
import { spawn } from "node:child_process";
import { writeFile, mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const chrome = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const [url, out, w = "1440", h = "1000", mode = "full"] = process.argv.slice(2);
const width = Number(w);
const height = Number(h);
const port = 9333 + Math.floor(Math.random() * 200);
const userDir = await mkdtemp(path.join(os.tmpdir(), "nyc-shoot-"));

const proc = spawn(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDir}`,
    "about:blank",
  ],
  { stdio: "ignore" }
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getWs() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await res.json();
      const page = targets.find((t) => t.type === "page");
      if (page && page.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
      // Open a fresh tab if Chrome only exposed the browser target.
      await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" }).catch(() => {});
    } catch {
      // Chrome not ready yet
    }
    await sleep(250);
  }
  throw new Error("Chrome did not start");
}

let id = 0;
function send(ws, method, params = {}) {
  return new Promise((resolve, reject) => {
    const msgId = ++id;
    const onMessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === msgId) {
        ws.removeEventListener("message", onMessage);
        if (msg.error) reject(new Error(`${method}: ${msg.error.message}`));
        else resolve(msg.result);
      }
    };
    ws.addEventListener("message", onMessage);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });
}

const wsUrl = await getWs();
const ws = new WebSocket(wsUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve, { once: true });
  ws.addEventListener("error", reject, { once: true });
});

await send(ws, "Page.enable");
await send(ws, "Emulation.setDeviceMetricsOverride", {
  width,
  height,
  deviceScaleFactor: 1,
  mobile: width < 600,
});
await send(ws, "Page.navigate", { url });
await sleep(1800);
// Scroll to the bottom once so lazy-loaded images resolve, then back to the top.
await send(ws, "Runtime.evaluate", {
  expression: "window.scrollTo(0, document.body.scrollHeight);",
});
await sleep(900);
await send(ws, "Runtime.evaluate", { expression: "window.scrollTo(0, 0);" });
await sleep(600);

const metrics = await send(ws, "Page.getLayoutMetrics");
if (process.env.CLICK) {
  await send(ws, "Runtime.evaluate", {
    expression: `document.querySelector(${JSON.stringify(process.env.CLICK)})?.click();`,
  });
  await sleep(900);
}
// Force every image to load (lazy images below the fold otherwise stay blank in
// full-page captures). Also report any image that fails to decode.
const imgReport = await send(ws, "Runtime.evaluate", {
  expression: `(async () => {
    document.querySelectorAll("img").forEach((i) => { i.loading = "eager"; });
    await new Promise((resolve) => {
      let pending = 0;
      document.querySelectorAll("img").forEach((img) => {
        if (img.complete) return;
        pending++;
        img.addEventListener("load", () => { if (--pending === 0) resolve(); }, { once: true });
        img.addEventListener("error", () => { if (--pending === 0) resolve(); }, { once: true });
      });
      if (pending === 0) resolve();
      setTimeout(resolve, 6000);
    });
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    const broken = Array.from(document.images)
      .filter((img) => img.naturalWidth === 0)
      .map((img) => img.currentSrc || img.src);
    return JSON.stringify({ total: document.images.length, broken });
  })()`,
  awaitPromise: true,
  returnByValue: true,
});
const report = JSON.parse(imgReport.result.value || "{}");
if (report.broken && report.broken.length) {
  console.log(`  ⚠ ${report.broken.length} broken image(s): ${report.broken.slice(0, 5).join(", ")}`);
}
await sleep(400);

const content = metrics.cssContentSize || metrics.contentSize;
const clip =
  mode === "fold"
    ? { x: 0, y: 0, width, height, scale: 1 }
    : { x: 0, y: 0, width, height: Math.min(content.height, 16000), scale: 1 };

const shot = await send(ws, "Page.captureScreenshot", {
  format: "png",
  captureBeyondViewport: true,
  clip,
});
await writeFile(out, Buffer.from(shot.data, "base64"));
console.log(`${out} (${width}x${clip.height})`);

ws.close();
proc.kill();
await sleep(400);
await rm(userDir, { recursive: true, force: true }).catch(() => {});
