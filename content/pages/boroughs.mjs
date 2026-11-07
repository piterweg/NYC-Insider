import {
  btn,
  sectionHead,
  pageHero,
  photoCard,
  table,
  callout,
  faq,
  newsletter,
  ctaBand,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";
import { readFileSync } from "node:fs";

const boroughMapSvg = readFileSync(
  new URL("../../assets/img/nyc-boroughs.svg", import.meta.url),
  "utf8"
).replace(/^<\?xml[^>]*>\s*/, "");

export default {
  path: "boroughs.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "The Five Boroughs of New York City — A Local Guide",
  description:
    "Guides to all five New York City boroughs: Manhattan, Brooklyn, Queens, the Bronx and Staten Island — what each is really like, what to do and where to eat.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-park.webp",
  render: () => `
${pageHero({
  image: img("brooklyn-bridge-park.webp"),
  alt: "The Brooklyn Bridge tower seen from Brooklyn Bridge Park on a clear day",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "boroughs.html", label: "Boroughs" },
  ],
  eyebrowText: "Boroughs",
  title: "Five boroughs, five different cities",
  lead: "Manhattan is the postcard. Brooklyn is the culture. Queens is the food. The Bronx is the history. Staten Island is the breathing space. Here is how to choose where to spend your time — and why it is worth crossing the river at least once.",
  meta: metaItems("5 borough guides", "62 neighbourhoods", "All reachable by subway or ferry"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The map",
      title: "Five boroughs, one map",
      lead: "Click a borough to open its guide. Hover to highlight it — on a phone, use the list below the map.",
    })}
    <div class="borough-map-wrap">
      ${boroughMapSvg}
    </div>
    <div class="borough-map-legend" aria-label="Borough guides">
      <a href="manhattan.html">Manhattan</a>
      <a href="brooklyn.html">Brooklyn</a>
      <a href="queens.html">Queens</a>
      <a href="bronx.html">The Bronx</a>
      <a href="staten-island.html">Staten Island</a>
    </div>
    <p class="small muted" style="text-align:center;margin-top:1rem">Borough boundaries: NYC Open Data. Map drawn for this guide — not to navigation scale.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The five",
      title: "Which borough is for you?",
      lead: "Every borough has a different rhythm. Match it to the kind of trip you want, not to a checklist.",
      action: btn({ href: "plan-your-trip.html", label: "Plan the whole trip", variant: "outline" }),
    })}
    <div class="grid grid--2">
      ${photoCard({
        href: "manhattan.html",
        image: img("manhattan-skyline.webp"),
        alt: "The Brooklyn Bridge and Lower Manhattan skyline in daylight",
        tag: "Borough 01",
        title: "Manhattan",
        text: "The icons, the museums and the neighbourhoods behind them. Start here, then get out.",
      })}
      ${photoCard({
        href: "brooklyn.html",
        image: img("brooklyn-bridge-skyline.webp"),
        alt: "The Brooklyn Bridge and Manhattan skyline at night",
        tag: "Borough 02",
        title: "Brooklyn",
        text: "Waterfront parks, brownstone streets and the best restaurant scene in the city.",
      })}
      ${photoCard({
        href: "queens.html",
        image: img("queens-astoria.webp"),
        alt: "The Manhattan skyline seen across the water from Astoria, Queens",
        tag: "Borough 03",
        title: "Queens",
        text: "The most linguistically diverse place on earth — and the best food crawl in New York.",
      })}
      ${photoCard({
        href: "bronx.html",
        image: img("bronx-yankee-stadium.webp"),
        alt: "Inside Yankee Stadium in the Bronx on a game day",
        tag: "Borough 04",
        title: "The Bronx",
        text: "Yankee Stadium, the zoo, Arthur Avenue and a borough rewriting its own story.",
      })}
      ${photoCard({
        href: "staten-island.html",
        image: img("staten-island-ferry.webp"),
        alt: "The Staten Island Ferry at St. George Terminal with the Manhattan skyline behind",
        tag: "Borough 05",
        title: "Staten Island",
        text: "A free ferry, 83 acres of cultural campus, and the city at its quietest.",
      })}
      ${photoCard({
        href: "food.html",
        image: img("nyc-pizza-slice.webp"),
        alt: "Two slices of New York-style pizza on paper plates",
        tag: "Cross-borough",
        title: "Food &amp; drink",
        text: "Bagels, pizza, pastrami and the neighbourhoods where each one is best.",
      })}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "At a glance",
      title: "The honest comparison",
      lead: "If you only have time for one borough outside Manhattan, use this table.",
    })}
    ${table({
      caption: "Comparison of the five New York City boroughs",
      head: ["Borough", "Best for", "Time needed", "Don't miss", "Getting there"],
      rows: [
        [
          '<a href="manhattan.html"><strong>Manhattan</strong></a>',
          "First visit, museums, theatre",
          "2–4 days",
          "Central Park, the Met, skyline decks, Lower Manhattan",
          "Every subway line",
        ],
        [
          '<a href="brooklyn.html"><strong>Brooklyn</strong></a>',
          "Food, waterfront, neighbourhoods",
          "1–2 days",
          "Brooklyn Bridge walk, DUMBO, Williamsburg, Prospect Park",
          "A/C/F/2/3/4/5/L",
        ],
        [
          '<a href="queens.html"><strong>Queens</strong></a>',
          "Food crawls, diversity, art",
          "Half–full day",
          "Jackson Heights, Flushing, Gantry Plaza, MoMA PS1",
          "7/E/F/M/R/N/W",
        ],
        [
          '<a href="bronx.html"><strong>The Bronx</strong></a>',
          "Baseball, zoo, real Little Italy",
          "Half–full day",
          "Yankee Stadium, Bronx Zoo, Arthur Avenue",
          "4/B/D, Metro-North",
        ],
        [
          '<a href="staten-island.html"><strong>Staten Island</strong></a>',
          "A slow half-day, harbour views",
          "Half day",
          "The free ferry, Snug Harbor, St. George",
          "Free ferry from Whitehall",
        ],
      ],
    })}
    <div style="margin-top:1.6rem">
      ${btn({ href: "attractions.html", label: "See the top attractions first", variant: "outline" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("How to travel between them")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Crossing the river is easier than you think</h2>
        <p class="lead">People treat Brooklyn and Queens like day trips. They are 10–25 minutes from Midtown on the subway, and the ferry is often faster and always more pleasant.</p>
        <p class="muted">The subway runs 24 hours. The Staten Island Ferry is free and runs all night. The Hudson and East River ferries cost $5 but give you the skyline from the water. Taxis between boroughs are expensive because of tunnel tolls and congestion pricing — use the subway instead.</p>
        <div class="split__actions">
          ${btn({ href: "getting-around.html", label: "Getting around NYC" })}
        </div>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "The best free skyline view",
          text: "The Staten Island Ferry. Twenty-five minutes each way, no ticket, and it passes the Statue of Liberty. Take it at sunset and come back on the next boat.",
        })}
        ${callout({
          icon: "⌁",
          title: "The best food crawl",
          text: "The 7 train through Queens: lunch in Jackson Heights, then continue to Flushing for the food court at New World Mall. Bring an appetite and no plans.",
        })}
        ${callout({
          icon: "☂",
          title: "A wet-weather borough day",
          text: "Brooklyn Museum and the Brooklyn Botanic Garden are next to each other; MoMA PS1 and the Noguchi Museum work in the rain; the Bronx Museum is free and indoors.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Borough questions", lead: "" })}
    ${faq([
      { q: "Is it safe to visit all five boroughs?", a: "<p>Yes — New York is statistically one of the safest large cities in the United States. Use normal city sense: keep phones out of sight on crowded trains, avoid deserted blocks late at night, and use licensed taxis. The tourist-heavy streets in Manhattan are where pickpockets actually work.</p>" },
      { q: "How long does it take to get from Manhattan to Brooklyn?", a: "<p>Ten to twenty-five minutes by subway depending on where you start and finish. The L from Union Square to Williamsburg is two stops; the 4/5 to Bowling Green plus a walk gets you to the Brooklyn Bridge.</p>" },
      { q: "Can I do Queens and the Bronx in one day?", a: "<p>You can, but you should not. Each deserves half a day minimum; the food alone in Queens is a reason to stay longer. Our <a href=\"7-days-in-nyc.html\">7-day itinerary</a> gives them separate days.</p>" },
      { q: "Which borough has the best food?", a: "<p>Queens for variety and value, Brooklyn for restaurants and bakeries, Manhattan for fine dining, the Bronx for Italian-American and Arthur Avenue. The honest answer: eat in all of them — see our <a href=\"food.html\">food guide</a>.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "Borough by borough, in your inbox", text: "One New York email a week: neighbourhood guides, new openings, and what is worth your time.", source: "boroughs" })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Build a trip around one borough at a time",
  text: "Our itineraries cluster each day by area, so you spend your time in New York rather than travelling across it.",
  actions: `${btn({ href: "itineraries.html", label: "See the itineraries" })}${btn({
    href: "food.html",
    label: "Eat your way around",
    variant: "outline",
  })}`,
})}
`,
};
