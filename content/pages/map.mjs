import { sectionHead, pageHero, callout, btn, img, metaItems, eyebrow } from "../components.mjs";
import { assetVersion } from "../version.mjs";
import { mapCategories } from "../map-data.mjs";
import { readFileSync } from "node:fs";

const attractionsMapSvg = readFileSync(
  new URL("../../assets/img/nyc-attractions-map.svg", import.meta.url),
  "utf8"
).replace(/^<\?xml[^>]*>\s*/, "");

const hoodsMapSvg = readFileSync(
  new URL("../../assets/img/nyc-neighbourhoods.svg", import.meta.url),
  "utf8"
).replace(/^<\?xml[^>]*>\s*/, "");

const attractionLegend = [
  ["statue-of-liberty.html", "Statue of Liberty"],
  ["9-11-memorial.html", "9/11 Memorial & Museum"],
  ["one-world-observatory.html", "One World Observatory"],
  ["brooklyn-bridge.html", "Brooklyn Bridge walkway"],
  ["high-line.html", "The High Line"],
  ["edge.html", "Edge at Hudson Yards"],
  ["empire-state-building.html", "Empire State Building"],
  ["grand-central.html", "Grand Central Terminal"],
  ["summit-one-vanderbilt.html", "SUMMIT One Vanderbilt"],
  ["top-of-the-rock.html", "Top of the Rock"],
  ["moma.html", "MoMA"],
  ["central-park.html", "Central Park"],
  ["met-museum.html", "The Met"],
  ["amnh.html", "American Museum of Natural History"],
];

export default {
  path: "map.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Interactive NYC Map — Attractions, Food and Neighbourhoods",
  description:
    "An interactive map of New York City: observation decks, museums, parks, the best cheap food and the neighbourhoods worth walking — filter by category and plan a route.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/midtown-aerial-night.webp",
  headExtra: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css" />',
  scripts: `<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js"></script><script src="assets/js/map.js?v=${assetVersion}"></script>`,
  render: () => `
${pageHero({
  image: img("midtown-aerial-night.webp"),
  alt: "Aerial view of Midtown Manhattan at night",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "plan-your-trip.html", label: "Plan" },
    { href: "map.html", label: "Map" },
  ],
  eyebrowText: "Map",
  title: "The whole city, on one map",
  lead: "Every attraction in our guides, the cheap food worth crossing town for, the parks and the neighbourhoods — plotted so you can see what clusters together before you commit to a day.",
  meta: metaItems("60+ pins", "Filter by category", "Click any pin for the guide"),
})}

<section class="section section--tight">
  <div class="container container--wide">
    <div class="map-shell">
      <div>
        <div id="nyc-map" role="application" aria-label="Interactive map of New York City points of interest"></div>
      </div>
      <aside class="map-side">
        <div class="map-filters" role="group" aria-label="Filter map points">
          <button class="map-filter" type="button" data-map-filter="all" aria-pressed="true">Everything</button>
          ${mapCategories
            .map((category) => `<button class="map-filter" type="button" data-map-filter="${category.id}" aria-pressed="false">${category.label}</button>`)
            .join("")}
        </div>
        <ul class="map-list" data-map-list aria-label="Points on the map"></ul>
        <p class="small muted" style="margin:0">Pins are approximate. Tap a pin for a one-line description and a link to the full guide.</p>
      </aside>
    </div>
  </div>
</section>

<section class="section" id="attractions-map">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Static map",
      title: "The fourteen headline sights, numbered",
      lead: "A tile-free version of the same city — the numbers match the list below. Useful on a weak connection, or when you want to print the plan.",
    })}
    <div class="borough-map-wrap borough-map-wrap--wide">
      ${attractionsMapSvg}
    </div>
    <ol class="static-map-legend static-map-legend--attractions">
      ${attractionLegend.map(([href, name], i) => `<li><a href="${href}"><span class="legend-num">${i + 1}</span>${name}</a></li>`).join("")}
    </ol>
    <p class="small muted" style="text-align:center;margin-top:1rem">Borough boundaries: NYC Open Data. Pins are approximate — the guides list exact entrances and subway exits.</p>
  </div>
</section>

<section class="section bg-paper-2" id="neighbourhood-map">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Static map",
      title: "Nine neighbourhoods, without the tiles",
      lead: "The same nine areas as the neighbourhoods hub, on one clickable map.",
      action: `<a class="link-arrow" href="neighbourhoods.html">Open the neighbourhood guides</a>`,
    })}
    <div class="borough-map-wrap borough-map-wrap--wide">
      ${hoodsMapSvg}
    </div>
    <p class="small muted" style="text-align:center;margin-top:1rem">Borough boundaries: NYC Open Data. Dot positions are approximate.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "How to use it",
          title: "Plan by cluster, not by list",
          lead: "New York looks small on a map and takes longer than you think. The winning move is one neighbourhood per half-day.",
        })}
        <div class="prose">
          <p>Use the filters to hide categories you do not care about. Pick two or three pins that sit close together, then check the nearest subway station in the guide for that place — all of our attraction pages list it under the quick facts at the top.</p>
          <p>Three clusters that work especially well: <strong>Lower Manhattan</strong> (9/11 Memorial, One World Observatory, the Statue ferry, the Brooklyn Bridge), <strong>Midtown</strong> (the Empire State, Top of the Rock, MoMA, Times Square) and <strong>Brooklyn north</strong> (DUMBO, Brooklyn Bridge Park, Williamsburg).</p>
          <p>Food pins are the cheap, well-known spots from our <a href="food.html">food guide</a> — useful as anchor points when you are deciding which neighbourhood to walk next.</p>
        </div>
        <div style="margin-top:1.6rem">
          ${btn({ href: "itineraries.html", label: "See the day-by-day itineraries" })}
        </div>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "The map does not do routing",
          text: "It is a planning aid, not a navigation app. For live directions use Citymapper or Google Maps; both handle subway disruptions better than any static map.",
        })}
        ${callout({
          icon: "◷",
          title: "Walking times are longer than they look",
          text: "Allow 15–20 minutes per avenue block cluster in Midtown, and remember that the subway is often faster than walking between 14th and 59th Streets during the day.",
        })}
        ${callout({
          icon: "☂",
          title: "Rain changes the plan",
          text: "If it pours, head for a cluster with an indoor anchor — the Met and Central Park, MoMA and Midtown, or the 9/11 Museum and Lower Manhattan.",
        })}
        ${callout({
          icon: "◆",
          title: "Want the five-borough view?",
          text: "The <a href=\"boroughs.html\">borough guide</a> opens with a clickable map of Manhattan, Brooklyn, Queens, the Bronx and Staten Island.",
        })}
      </div>
    </div>
  </div>
</section>
`,
};
