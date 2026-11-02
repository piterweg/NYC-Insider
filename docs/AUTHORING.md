# Authoring guide — NYC Insider

Read this before writing any page. It describes the file contract, the component helpers,
the CSS classes you may use and the editorial rules.

## Stack

Static site, no framework. Node builds the final HTML from ES modules:

```
content/site.mjs          site config (nav, footer, meta) — do NOT edit
content/layout.mjs        <head>, header, footer shell — do NOT edit
content/components.mjs    helper functions that return HTML strings — do NOT edit
content/pages/*.mjs       one module per page — THIS is what you write
assets/css/main.css       design system — do NOT edit
assets/js/main.js         shared interactions — do NOT edit
tools/build.mjs           builder: wraps each page, writes root HTML, sitemap, link check
```

Build: `node tools/build.mjs` (use the bundled node path from your environment).
Generated HTML is written to the repository root (index.html, passes.html, …). Generated
files are disposable — never edit them by hand. You may run the build to validate your
pages; ignore the generated output files.

## Page module contract

```js
import { btn, sectionHead, pageHero, img, metaItems, eyebrow, /* … */ } from "../components.mjs";

export default {
  path: "passes.html",          // output file, unique
  navSection: "passes",         // home | itineraries | boroughs | attractions | passes | plan | journal
  bodyClass: "page-inner",      // use "page-inner" on every page that is NOT index.html
  title: "NYC Passes Compared", // <title> without the site suffix
  description: "…",             // 120–160 chars, no quotes
  priority: "0.8",              // sitemap priority
  changefreq: "monthly",
  ogImage: "assets/img/….webp", // optional, defaults to og image
  jsonLd: [ /* optional schema.org objects, e.g. Article / FAQPage */ ],
  render: () => `…HTML string…`,
};
```

`render()` gets no arguments; import `site` from `../site.mjs` only if you truly need it.
Everything the page shows goes inside the returned string; the layout adds header/footer.

## Components available (import from `../components.mjs`)

| Helper | Purpose |
| --- | --- |
| `btn({href,label,variant,size,block,attrs})` | Buttons. variant: `""` (gold), `ghost`, `outline`, `dark`; size: `sm`, `lg` |
| `eyebrow(text)` | Small uppercase label |
| `sectionHead({eyebrowText,title,lead,action,center})` | Standard section heading |
| `heroHome({...})` | Home hero only |
| `pageHero({image,alt,crumbs,eyebrowText,title,lead,meta,modifiers})` | Inner-page hero with dark photo background |
| `breadcrumbs(items,dark)` | `[{href,label}]` |
| `photoCard({href,image,alt,tag,title,text,tall})` | Large image card |
| `mediaCard({href,image,alt,kicker,title,text,meta})` | Image-top card for grids |
| `card({kicker,title,text,foot,hover})` | Paper card |
| `boroughTile({href,image,alt,name,text})` | Overlay tile |
| `callout({icon,title,text,dark})` | Tip/warning box |
| `passCard({...})` | Pass comparison card |
| `day({number,label,title,text,stops})` | Itinerary day block; stops = strings or `{what,where}` |
| `faq([{q,a}])` | Accessible accordion (a may contain HTML) |
| `table({caption,head,rows,className})` | Data table; rows are arrays of HTML strings |
| `newsletter({title,text,source})` | Newsletter band (already used on most pages) |
| `ctaBand({eyebrowText,title,text,actions})` | Closing call to action |
| `pageNav({prev,next})` | Previous/next links at the bottom |
| `img("file.webp")` | `assets/img/<file>` path |
| `metaItems(...)` | Hero meta row |
| `arrow` | Inline arrow SVG |

Import only what you use; the build throws if a helper is undefined.

## Available images (in `assets/img/`)

Night / cinematic set (original site photos):
`times-square-night.webp`, `queensboro-bridge-night.webp`, `brooklyn-bridge-sunset.webp`,
`brooklyn-bridge-skyline.webp`, `manhattan-skyline-night.webp`, `fifth-avenue-cab.webp`,
`broadway-theatre-night.webp`, `soho-street-night.webp`, `skyline-window-view.webp`,
`midtown-aerial-night.webp`.

Daylight set (Wikimedia Commons, CC BY / CC BY-SA / CC0 — attribution lives on
`credits.html`, which the Lead writes; you do not need to add credits inline):
`manhattan-skyline.webp` (Brooklyn Bridge + Lower Manhattan),
`brooklyn-bridge-park.webp` (bridge tower from DUMBO),
`queens-astoria.webp` (Manhattan skyline seen from Astoria),
`bronx-yankee-stadium.webp` (Yankee Stadium interior),
`staten-island-ferry.webp` (ferry at St. George with skyline),
`central-park-bow-bridge.webp`, `statue-of-liberty.webp`, `times-square-day.webp`,
`broadway-marquee.webp` (Broadway street sign + billboards, daytime),
`subway-train.webp`, `nyc-bagel.webp` (Ess-a-Bagel storefront),
`nyc-bagel-cream-cheese.webp`, `nyc-pizza-slice.webp`, `high-line.webp`, `grand-central.webp`.

Brand: `brand-logo-white.svg`, `brand-logo-black.svg`.
If a page needs a subject we do not have, use the closest image above and note the gap in
your final message — do not reference files that do not exist.

## CSS classes you can rely on

Layout: `.section`, `.section--tight`, `.bg-paper-2`, `.bg-ink`, `.container`,
`.container--narrow`, `.grid .grid--2/--3/--4/--auto`, `.split` (`.split--reverse`,
`.split__media`, `.split__media--wide`, `.split__body`, `.split__actions`),
`.section-head`, `.stats/.stat`, `.feature-list`, `.lead`, `.muted`, `.small`.

Content: `.prose` (long-form article body: h2/h3/p/ul/blockquote/a/strong all styled),
`.callout`, `.table-wrap` + `table.data` (via `table()`), `.pass-grid`, `.pass-card`,
`.calculator`, `.field`, `.checklist`, `.check`, `.faq`, `.day-plan`, `.day`, `.timeline`,
`.toc`, `.pullquote`, `.page-nav`, `.cta-band`, `.newsletter`, `.photo-card`, `.media-card`,
`.card`, `.borough-tile`, `.link-arrow`, `.btn`.

Use `.prose` for long article text; it caps line length at 72ch.

## Editorial rules

1. **English, British-neutral spelling is fine but be consistent** (we use "neighbourhood",
   "colour", "centre"; avoid American/British mixing in the same page).
2. **Second person, calm, specific.** No hype, no "hidden gem", no exclamation marks.
   Write like a well-travelled friend, not a marketing team.
3. **Every claim must be supportable.** Use facts from `docs/NYC-FACTS-2026.md`.
   Prices: always "from $X" / "around $X" and mention prices change.
4. **Do not invent restaurants, hotels or tours.** Only places listed in the facts file or
   that are unambiguously famous and verifiable. If unsure, describe the category instead.
5. **Link only to pages that exist** (see list below). No `href="#"` placeholders except
   inside `#`-anchors on the same page. The build fails on unknown internal links.
6. **Accessibility:** every `<img>` needs meaningful `alt`; decorative images use `alt=""`.
   Use proper heading order (one h1 in the hero, then h2/h3). Never use colour alone to
   convey meaning. Keep tables with a caption via the helper.
7. **No inline styles** except trivial spacing/alignment already used in examples.
8. **Each page:** page hero → 3–6 substantial sections → one newsletter band OR ctaBand →
   `pageNav` where it makes sense. Aim for 900–1,500 words of visible copy per page.
9. `bodyClass: "page-inner"` on all pages except index.html.
10. Sitemap priority: hub/home 0.9–1.0, articles 0.7–0.8, legal 0.3.

## Existing pages (link targets)

`index.html`, `itineraries.html`, `3-days-in-nyc.html`, `5-days-in-nyc.html`,
`7-days-in-nyc.html`, `boroughs.html`, `manhattan.html`, `brooklyn.html`, `queens.html`,
`bronx.html`, `staten-island.html`, `attractions.html`, `passes.html`,
`plan-your-trip.html`, `getting-around.html`, `budget.html`, `when-to-visit.html`,
`food.html`, `journal.html`, `free-things-to-do-nyc.html`, `sunday-in-brooklyn.html`,
`nyc-rainy-day.html`, `about.html`, `contact.html`, `privacy.html`, `terms.html`,
`404.html`.

## Example

Read `content/pages/itineraries.mjs` and `content/pages/5-days-in-nyc.html` module
(`content/pages/5-days-in-nyc.mjs`) before writing. Match their structure and tone.
