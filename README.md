# NYCTrove

An independent, English-language guide to New York City — itineraries, all five boroughs,
attraction and pass advice, and the practical details that make a trip work.

The site is a **static website**: plain HTML output at the repository root, generated from
small ES modules by a dependency-free Node build script. It is designed to be hosted on
GitHub Pages (or any static host) with no server-side code.

## Pages

| Section | Pages |
| --- | --- |
| Home | `index.html` |
| Itineraries | `itineraries.html`, `1-day-in-nyc.html`, `2-days-in-nyc.html`, `3-days-in-nyc.html`, `4-days-in-nyc.html`, `5-days-in-nyc.html`, `7-days-in-nyc.html` |
| Boroughs | `boroughs.html`, `manhattan.html`, `brooklyn.html`, `queens.html`, `bronx.html`, `staten-island.html` |
| Tickets | `attractions.html`, `passes.html` plus 14 individual attraction guides (Empire State Building, Top of the Rock, Edge, SUMMIT, One World Observatory, Statue of Liberty, 9/11 Memorial, AMNH, MoMA, the Met, Central Park, High Line, Brooklyn Bridge, Grand Central) |
| Trip planning | `plan-your-trip.html`, `getting-around.html`, `budget.html`, `when-to-visit.html`, `where-to-stay.html`, `day-trips.html` (Philadelphia, Washington DC, Boston, Niagara Falls, Hudson Valley), `map.html`, `search.html` |
| Food & journal | `food.html`, `journal.html`, `free-things-to-do-nyc.html`, `sunday-in-brooklyn.html`, `nyc-rainy-day.html` |
| Neighbourhoods | `neighbourhoods.html` plus SoHo, West Village, Harlem, Williamsburg, DUMBO, Astoria, Flushing and Jackson Heights |
| Seasonal | `whats-on.html` plus Thanksgiving, Christmas, New Year's Eve, summer, Halloween, spring, fall, Restaurant Week and the US Open |
| NYC by month | `nyc-in-january.html` … `nyc-in-december.html` (12 long-tail month guides) |
| Trust | `about.html`, `editorial.html` (research process, AI disclosure, corrections), `contact.html`, `privacy.html`, `terms.html`, `credits.html`, `cookie-settings.html`, `404.html` |
| Trust | `about.html`, `contact.html`, `privacy.html`, `terms.html`, `credits.html`, `404.html` |

## Developing

Requirements: Node.js 20+ (no dependencies, no install step).

```bash
node tools/build.mjs      # generate all HTML, sitemap.xml and robots.txt at the repo root
```

Open `index.html` in a browser, or serve the folder with any static server, e.g.:

```bash
npx serve .
```

### How it works

```
content/site.mjs            site config: nav, footer, social links, base URL
content/layout.mjs          HTML shell: <head>, header, mobile nav, footer
content/components.mjs      reusable HTML-component functions
content/borough-template.mjs shared renderer for the five borough pages
content/attraction-template.mjs  shared renderer for individual attraction pages
content/day-trip-template.mjs    shared renderer for day-trip pages
content/seasonal-template.mjs    shared renderer for seasonal guides
content/neighbourhood-template.mjs shared renderer for neighbourhood guides
feed.xml                         generated RSS feed of the top 30 guides
content/map-data.mjs             map points and categories (emitted as JSON at build time)
content/pages/*.mjs         one module per page — the content lives here
assets/css/main.css         the design system (single stylesheet)
assets/js/main.js           shared interactions (nav, reveal, newsletter, back-to-top)
assets/js/passes.js         pass comparison calculator (passes page only)
assets/js/search.js         client-side search (header overlay + search page)
assets/js/map.js            Leaflet map (map page only)
assets/js/weather.js        live weather and NYC local time (Open-Meteo)
assets/js/deck-quiz.js      observation-deck recommender (attractions page)
assets/img/                 photography and brand assets
tools/build.mjs             the builder (also writes sitemap, search index, map data and checks links)
docs/                       editorial facts and authoring guide
```

Each page module exports an object with metadata (`path`, `title`, `description`, …) and a
`render()` function returning the page body as an HTML string. The builder wraps it in the
shared layout, writes the file to the repository root, regenerates `sitemap.xml` and
`robots.txt`, and fails if an internal link points at a page that does not exist.

### Adding a page

1. Copy an existing module in `content/pages/` and edit the content.
2. Give it a unique `path` and add it to the navigation in `content/site.mjs` if needed.
3. Run `node tools/build.mjs`.
4. Add incoming links from other pages so it is reachable (the link check will catch typos).

See `docs/AUTHORING.md` for the component library, CSS classes and editorial rules, and
`docs/NYC-FACTS-2026.md` for the verified facts and prices used across the site.

### Quality checks

```bash
node tools/build.mjs        # also validates internal links
node tools/qa.mjs           # titles, meta descriptions, headings, duplicate ids, alt text, JSON-LD
node tools/qa-browser.mjs   # loads every page in headless Chrome: broken images, JS errors, overflow
node tools/shoot.mjs <file-url> <out.png> [width] [height] [full|fold]   # screenshots for visual review
```

The two browser tools need a local Chrome installation (`CHROME_PATH` overrides the path).

## Editorial standards

- Prices are always written as “from $X” and readers are told to confirm current prices.
- No pay-to-play rankings. Any future affiliate relationship must not change the ranking.
- Photography: original photography plus Creative Commons images from Wikimedia Commons,
  credited on `credits.html`.
- Corrections: `contact.html` (email `hello@nyctrove.com`).

## Deploying

Production runs on **Hostinger** (PHP/HTML plan) at **https://nyctrove.com**; the site is
plain static files, so no PHP or Node runtime is needed on the server.

1. Run `node tools/build.mjs` to regenerate all HTML at the repository root.
2. Upload to the domain's `public_html`: all `*.html` files, `assets/`, `sitemap.xml`,
   `robots.txt` and **`.htaccess`**. Do not upload `content/`, `tools/`, `docs/`,
   `_preview/` or `_deploy/` — only the generated site belongs on the server.
3. `.htaccess` (a visible copy is kept as `deploy.htaccess` for file managers that hide
   dotfiles) handles HTTPS and `www` → non-`www` redirects, the custom 404, compression,
   caching and security headers. Enable "Show hidden files" in Hostinger's File Manager
   after uploading.
4. Purge the Hostinger CDN cache after a deployment, then check the homepage, a missing URL
   (custom 404), `https://www.nyctrove.com` (redirect) and `sitemap.xml`.

`content/site.mjs` → `baseUrl` must match the production domain (`https://nyctrove.com`),
because it drives canonical URLs, Open Graph URLs, the sitemap and `robots.txt`.

GitHub Pages also serves the repository root as a staging copy (a `.nojekyll` file is
included so `content/` and `assets/` are served untouched); its canonical URLs still point
at the production domain.

## Roadmap

- [ ] Connect the newsletter form to a real provider (currently front-end validation only)
- [ ] Add analytics and a cookie notice if required for the chosen provider
- [ ] More neighbourhood guides (Harlem, Jackson Heights, the Rockaways)
- [ ] Seasonal updates: prices, event dates, museum hours
