#!/usr/bin/env node
/**
 * Lightweight QA pass over the generated HTML.
 * Usage: node tools/qa.mjs
 */
import { readdir, readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const entries = await readdir(root, { withFileTypes: true });
const pages = entries.filter((e) => e.isFile() && e.name.endsWith(".html")).map((e) => e.name);

const issues = [];
const add = (page, message) => issues.push(`${page}: ${message}`);

for (const page of pages) {
  const html = await readFile(path.join(root, page), "utf8");

  // Basic sanity
  if (/undefined|NaN|\[object Object\]/.test(html)) add(page, "contains undefined/NaN/[object Object]");
  if (/href="#"(?![^>]*data-)/.test(html)) add(page, 'contains placeholder href="#"');
  if (!/<title>[^<]{5,}<\/title>/.test(html)) add(page, "missing or empty <title>");
  if (!/<meta name="description" content="[^"]{40,}"/.test(html)) add(page, "missing or short meta description");
  if (!/<link rel="canonical" href="[^"]+"/.test(html)) add(page, "missing canonical link");
  if (!/<meta property="og:image"/.test(html)) add(page, "missing og:image");

  // One h1
  const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
  if (h1s !== 1) add(page, `has ${h1s} <h1> elements (expected 1)`);

  // Duplicate ids
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) add(page, `duplicate id(s): ${[...new Set(dupes)].join(", ")}`);

  // Images: alt + file existence
  for (const m of html.matchAll(/<img\b([^>]*)>/g)) {
    const attrs = m[1];
    if (!/\salt="[^"]*"/.test(attrs)) add(page, "image without alt attribute");
    const src = attrs.match(/\ssrc="([^"]+)"/)?.[1];
    if (src && !/^https?:/.test(src)) {
      try {
        await stat(path.join(root, src));
      } catch {
        add(page, `missing image file: ${src}`);
      }
    }
  }

  // Local links existence (excluding anchors and known non-pages)
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|#|javascript:)/.test(href)) continue;
    const target = href.split("#")[0];
    if (!target) continue;
    try {
      await stat(path.join(root, target));
    } catch {
      add(page, `broken local link: ${href}`);
    }
  }

  // JSON-LD validity
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch {
      add(page, "invalid JSON-LD");
    }
  }

  // Title / description length guidance
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] || "";
  if (title.length > 70) add(page, `title is ${title.length} chars (aim <= 70)`);
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] || "";
  if (desc.length < 110 || desc.length > 175) add(page, `description is ${desc.length} chars (aim 110–175)`);
}

if (issues.length) {
  console.log(`QA: ${issues.length} issue(s)\n`);
  for (const issue of issues) console.log("  • " + issue);
  process.exitCode = 1;
} else {
  console.log(`QA: ${pages.length} pages clean`);
}
