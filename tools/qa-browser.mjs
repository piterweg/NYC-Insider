#!/usr/bin/env node
/**
 * Browser QA: loads every generated page in headless Chrome and reports
 * broken images and JavaScript exceptions.
 * Usage: CHROME_PATH=... node tools/qa-browser.mjs
 */
import { spawn } from "node:child_process";
import { readdir, mkdtemp, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BASE = process.env.BASE_URL || "";
const chrome = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const port = 9500 + Math.floor(Math.random() * 300);
const userDir = await mkdtemp(path.join(os.tmpdir(), "nyc-qa-"));

const proc = spawn(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
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
  for (let i = 0; i < 80; i++) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const page = targets.find((t) => t.type === "page");
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error("Chrome did not start");
}

const ws = new WebSocket(await getWs());
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve, { once: true });
  ws.addEventListener("error", reject, { once: true });
});

let id = 0;
const pending = new Map();
const events = [];
ws.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(msg.error.message));
    else resolve(msg.result);
  } else if (msg.method === "Runtime.exceptionThrown") {
    events.push(`JS exception: ${msg.params.exceptionDetails.text}`);
  } else if (msg.method === "Log.entryAdded" && msg.params.entry.level === "error") {
    events.push(`Console: ${msg.params.entry.text}`);
  }
});
function send(method, params = {}) {
  const msgId = ++id;
  return new Promise((resolve, reject) => {
    pending.set(msgId, { resolve, reject });
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });
}

await send("Page.enable");
await send("Runtime.enable");
await send("Log.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });

const pages = (await readdir(root)).filter((f) => f.endsWith(".html")).sort();
const problems = [];

for (const page of pages) {
  events.length = 0;
  const target = BASE ? `${BASE.replace(/\/$/, "")}/${page}` : pathToFileURL(path.join(root, page)).href;
  await send("Page.navigate", { url: target });
  await sleep(1100);
  const result = await send("Runtime.evaluate", {
    expression: `(() => {
      const broken = Array.from(document.images).filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.getAttribute("src"));
      const notLoaded = Array.from(document.images).filter((i) => !i.complete).length;
      const overflow = document.documentElement.scrollWidth > window.innerWidth + 1;
      const emptyLinks = Array.from(document.querySelectorAll('a[href="#"]')).filter((a) => !a.closest(".leaflet-control")).length;
      return JSON.stringify({ broken, notLoaded, overflow, emptyLinks, title: document.title });
    })()`,
    returnByValue: true,
  });
  const info = JSON.parse(result.result.value);
  if (info.broken.length) problems.push(`${page}: broken images ${info.broken.join(", ")}`);
  if (info.overflow) problems.push(`${page}: horizontal overflow`);
  if (info.emptyLinks) problems.push(`${page}: ${info.emptyLinks} empty href="#")`);
  if (events.length) problems.push(`${page}: ${events.slice(0, 3).join(" | ")}`);
}

console.log(problems.length ? `Browser QA: ${problems.length} problem(s)` : `Browser QA: ${pages.length} pages OK`);
for (const p of problems) console.log("  • " + p);

ws.close();
proc.kill();
await sleep(300);
await rm(userDir, { recursive: true, force: true }).catch(() => {});
