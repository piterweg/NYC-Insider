/**
 * Content hash for cache-busting static assets.
 *
 * Hostinger's CDN caches CSS/JS for days, so every build must reference a new
 * URL; otherwise returning visitors (and the CDN edge) can keep an old file
 * after a deployment. Appending `?v=<hash>` makes each release unique.
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = [
  "assets/css/main.css",
  "assets/js/main.js",
  "assets/js/passes.js",
  "assets/js/search.js",
  "assets/js/map.js",
  "assets/js/weather.js",
  "assets/js/deck-quiz.js",
];

const hash = createHash("sha1");
for (const file of files) {
  hash.update(readFileSync(path.join(root, file)));
}

export const assetVersion = hash.digest("hex").slice(0, 10);
