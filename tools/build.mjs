#!/usr/bin/env node
/**
 * Static site builder for NYCTrove.
 *
 * Usage:
 *   node tools/build.mjs
 *
 * Reads every module in content/pages/, wraps it in the shared layout and
 * writes the generated HTML to the repository root. Also regenerates
 * sitemap.xml and reports broken internal links.
 */
import { readdir, writeFile, readFile, mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

import { site } from "../content/site.mjs";
import { renderPage } from "../content/layout.mjs";
import { mapPoints, mapCategories } from "../content/map-data.mjs";

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
const bodies = new Map();
for (const page of pages) {
  const body = await page.render({ site });
  bodies.set(page.path, body);
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

// ---------------------------------------------------------------------------
// RSS feed for the main guides
// ---------------------------------------------------------------------------
const escapeXml = (value) =>
  String(value).replace(/[<>&"']/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" }[char]));
const feedPages = [...publicPages]
  .sort((a, b) => Number(b.priority || 0.7) - Number(a.priority || 0.7))
  .slice(0, 30);
const feedDate = new Date().toUTCString();
const feedItems = feedPages
  .map((p) => {
    const link = `${site.baseUrl}/${p.path === "index.html" ? "" : p.path}`;
    return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${feedDate}</pubDate>
      <description>${escapeXml(p.description)}</description>
    </item>`;
  })
  .join("\n");
const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)} — New York City guides</title>
    <link>${site.baseUrl}/</link>
    <description>${escapeXml(site.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${feedDate}</lastBuildDate>
    <atom:link href="${site.baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
${feedItems}
  </channel>
</rss>
`;
await writeFile(path.join(root, "feed.xml"), feed, "utf8");

// ---------------------------------------------------------------------------
// Client-side data: search index and map points
// ---------------------------------------------------------------------------
const stripHtml = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

const searchIndex = pages
  .filter((p) => !p.noindex)
  .map((p) => ({
    path: p.path,
    title: p.fullTitle ? p.title : `${p.title} | ${site.name}`,
    description: p.description,
    section: p.navSection || "",
    text: stripHtml(bodies.get(p.path) || "").slice(0, 900),
  }));

await mkdir(path.join(root, "assets", "data"), { recursive: true });
await writeFile(
  path.join(root, "assets", "data", "search-index.json"),
  JSON.stringify(searchIndex),
  "utf8"
);
await writeFile(
  path.join(root, "assets", "data", "map-points.json"),
  JSON.stringify({ categories: mapCategories, points: mapPoints }),
  "utf8"
);

// Internal link check
const problems = [];
for (const page of pages) {
  const html = await readFile(path.join(root, page.path), "utf8");
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:|#|javascript:)/.test(href)) continue;
    const target = href.split("#")[0].split("?")[0];
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
