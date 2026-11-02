# NYC Insider

An independent, English-language guide to New York City — itineraries, all five boroughs,
attraction and pass advice, and the practical details that make a trip work.

The site is a **static website**: plain HTML output at the repository root, generated from
small ES modules by a dependency-free Node build script. It is designed to be hosted on
GitHub Pages (or any static host) with no server-side code.

## Pages

| Section | Pages |
| --- | --- |
| Home | `index.html` |
| Itineraries | `itineraries.html`, `3-days-in-nyc.html`, `5-days-in-nyc.html`, `7-days-in-nyc.html` |
| Boroughs | `boroughs.html`, `manhattan.html`, `brooklyn.html`, `queens.html`, `bronx.html`, `staten-island.html` |
| Tickets | `attractions.html`, `passes.html` |
| Trip planning | `plan-your-trip.html`, `getting-around.html`, `budget.html`, `when-to-visit.html` |
| Food & journal | `food.html`, `journal.html`, `free-things-to-do-nyc.html`, `sunday-in-brooklyn.html`, `nyc-rainy-day.html` |
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
content/pages/*.mjs         one module per page — the content lives here
assets/css/main.css         the design system (single stylesheet)
assets/js/main.js           shared interactions (nav, reveal, newsletter, back-to-top)
assets/js/passes.js         pass comparison calculator (passes page only)
assets/img/                 photography and brand assets
tools/build.mjs             the builder (also checks internal links)
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
- Corrections: `contact.html` (email `hello@nycinsider.com`).

## Deploying

GitHub Pages serves the repository root as-is (a `.nojekyll` file is included so the
`content/` and `assets/` folders are served untouched). Set the production domain in
`content/site.mjs` → `baseUrl` before publishing so canonical URLs and the sitemap are
correct. If the site moves to a custom domain, update that value and rebuild.

## Roadmap

- [ ] Connect the newsletter form to a real provider (currently front-end validation only)
- [ ] Add analytics and a cookie notice if required for the chosen provider
- [ ] More neighbourhood guides (Harlem, Jackson Heights, the Rockaways)
- [ ] Seasonal updates: prices, event dates, museum hours
