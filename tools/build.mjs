#!/usr/bin/env node
/**
 * Static site builder for NYC Insider.
 *
 * Usage:
 *   node tools/build.mjs
 *
 * Reads every module in content/pages/, wraps it in the shared layout and
 * writes the generated HTML to the repository root. Also regenerates
 * sitemap.xml and reports broken internal links.
 */
import { readdir, writeFile, readFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

import { site } from "../content/site.mjs";
import { renderPage } from "../content/layout.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pagesDir = path.join(root, "content", "pages");

const files = (await readdir(pagesDir)).filter((f) => f.endsWith(".mjs")).sort();

const pages = [];
for (const file of files) {
  const mod = await import(pathToFileURL(path.join(pagesDir, file)).href);
  const page = mod.default;
  if (!page || !page.path) {
    console.warn(`⚠  ${file}: no default page export, skipped`);
    continue;
  }
  page.sourceFile = file;
  pages.push(page);
}

// Duplicate path guard
const seen = new Map();
for (const page of pages) {
  if (seen.has(page.path)) {
    throw new Error(`Duplicate page path "${page.path}" in ${seen.get(page.path)} and ${page.sourceFile}`);
  }
  seen.set(page.path, page.sourceFile);
}

// Render
let written = 0;
const known = new Set(pages.map((p) => p.path));
for (const page of pages) {
  const body = await page.render({ site });
  const html = renderPage({ page, body });
  await writeFile(path.join(root, page.path), html, "utf8");
  written++;
}

// sitemap.xml
const publicPages = pages.filter((p) => !p.noindex && p.path !== "404.html");
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicPages
  .map(
    (p) => `  <url>
    <loc>${site.baseUrl}/${p.path === "index.html" ? "" : p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq || "monthly"}</changefreq>
    <priority>${p.priority || "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
await writeFile(path.join(root, "sitemap.xml"), sitemap, "utf8");

// robots.txt
await writeFile(
  path.join(root, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${site.baseUrl}/sitemap.xml\n`,
  "utf8"
);

// Internal link check
const problems = [];
for (const page of pages) {
  const html = await readFile(path.join(root, page.path), "utf8");
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:|#|javascript:)/.test(href)) continue;
    const target = href.split("#")[0];
    if (!target) continue;
    if (target.startsWith("assets/") || target.endsWith(".xml") || target.endsWith(".txt")) continue;
    if (known.has(target)) continue;
    try {
      await readFile(path.join(root, target));
      continue;
    } catch {
      problems.push(`${page.path} → ${href}`);
    }
  }
}

console.log(`✓ Built ${written} pages in ${path.relative(process.cwd(), root) || "."}`);
if (problems.length) {
  console.warn(`\n⚠  ${problems.length} internal link(s) point to unknown pages:`);
  for (const p of problems) console.warn(`   - ${p}`);
  process.exitCode = 1;
}
