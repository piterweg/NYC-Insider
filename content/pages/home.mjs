import {
  btn,
  sectionHead,
  heroHome,
  mediaCard,
  card,
  boroughTile,
  callout,
  newsletter,
  ctaBand,
  img,
  metaItems,
  arrow,
  eyebrow,
} from "../components.mjs";
import { assetVersion } from "../version.mjs";
import { readFileSync } from "node:fs";

const attractionsMapSvg = readFileSync(
  new URL("../../assets/img/nyc-attractions-map-zoom.svg", import.meta.url),
  "utf8"
).replace(/^<\?xml[^>]*>\s*/, "");

const hoodsMapSvg = readFileSync(
  new URL("../../assets/img/nyc-neighbourhoods-numbered.svg", import.meta.url),
  "utf8"
).replace(/^<\?xml[^>]*>\s*/, "");

export default {
  path: "index.html",
  navSection: "home",
  bodyClass: "page-home",
  title: "NYCTrove — The Independent Guide to New York City",
  fullTitle: true,
  description:
    "Plan a better New York City trip: day-by-day itineraries, guides to all five boroughs, honest advice on passes and tickets, and the practical details that make the city easy.",
  priority: "1.0",
  changefreq: "weekly",
  ogImage: "assets/img/manhattan-skyline-dusk.webp",
  scripts: `<script src="assets/js/weather.js?v=${assetVersion}" defer></script>`,
  render: () => `
${heroHome({
  image: img("manhattan-skyline-dusk.webp"),
  alt: "The Manhattan skyline at dusk, seen across the East River",
  eyebrowText: "The independent guide to New York City",
  title: `New York, <em>without the tourist traps.</em>`,
  lead: "Five boroughs, 8.5 million neighbours and about a thousand ways to get it wrong. We live here. These are the itineraries, neighbourhoods and small practical details that make a New York trip feel effortless.",
  actions: `${btn({ href: "itineraries.html", label: "Browse itineraries" })}${btn({
    href: "boroughs.html",
    label: "Meet the five boroughs",
    variant: "ghost",
  })}`,
  meta: metaItems(
    "<strong>5</strong> borough guides",
    "<strong>20+</strong> in-depth guides",
    "<strong>Updated</strong> November 2026",
    "<strong>0</strong> pay-to-play rankings"
  ),
})}

<section class="section bg-paper-2">
  <div class="container">
    <div class="home-map-block">
      <div class="borough-map-wrap">
        ${hoodsMapSvg}
      </div>
      <div>
        ${eyebrow("Start with the map")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Nine neighbourhoods, one map</h2>
        <p class="lead">New York is a city of villages. Click a number to open the guide for that neighbourhood — one is enough for a day, and no two feel like the same place.</p>
        <ol class="static-map-legend home-map-legend">
          ${[
            ["soho.html", "SoHo"],
            ["west-village.html", "West Village"],
            ["harlem.html", "Harlem"],
            ["upper-west-side.html", "Upper West Side"],
            ["williamsburg.html", "Williamsburg"],
            ["dumbo.html", "DUMBO"],
            ["astoria.html", "Astoria"],
            ["flushing.html", "Flushing"],
            ["jackson-heights.html", "Jackson Heights"],
          ].map(([href, name], i) => `<li><a href="${href}"><span class="legend-num">${i + 1}</span>${name}</a></li>`).join("")}
        </ol>
        <div class="split__actions" style="margin-top:1.4rem">
          ${btn({ href: "neighbourhoods.html", label: "All neighbourhood guides" })}
          <a class="link-arrow" href="boroughs.html" style="margin-left:1rem">Or start with the five boroughs</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Start here",
      title: "What kind of New York are you after?",
      lead: "Every trip has a different shape. Pick the plan that matches your time and appetite, then steal the parts you like.",
      action: btn({ href: "itineraries.html", label: "All itineraries", variant: "outline" }),
    })}
    <div class="grid grid--3">
      ${card({
        kicker: "01 — First time",
        title: `<a href="5-days-in-nyc.html">Five days, the icons done properly</a>`,
        text: "Empire State Building, Central Park, the Brooklyn Bridge at sunrise and one very good Broadway night — sequenced so you are not crossing the city twice a day.",
        foot: `<a class="link-arrow" href="5-days-in-nyc.html">See the 5-day plan</a>`,
      })}
      ${card({
        kicker: "02 — Long weekend",
        title: `<a href="3-days-in-nyc.html">Three days, zero wasted hours</a>`,
        text: "For a first flying visit: one skyline morning, one neighbourhood afternoon, one night out. Works with a Friday-to-Sunday schedule.",
        foot: `<a class="link-arrow" href="3-days-in-nyc.html">See the 3-day plan</a>`,
      })}
      ${card({
        kicker: "03 — Returning",
        title: `<a href="7-days-in-nyc.html">Seven days, beyond Midtown</a>`,
        text: "Queens food crawls, the Bronx, Staten Island by ferry and the parts of Manhattan that locals actually use. Give the city the whole week.",
        foot: `<a class="link-arrow" href="7-days-in-nyc.html">See the 7-day plan</a>`,
      })}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="split">
      <div class="split__media">
        <img src="${img("nyc-aerial-sunset.webp")}" alt="Midtown Manhattan seen from above at sunset" width="1000" height="1250" loading="lazy" />
      </div>
      <div class="split__body" data-reveal>
        ${eyebrow("Who we are")}
        <h2>We are not a booking site. That is the point.</h2>
        <p class="lead">NYCTrove is written by people who live in and around New York, for people who want to understand it — not just tick it off.</p>
        <p class="muted">There is no secret layer to New York that only insiders can access. There is only knowing which entrance to use, which hour to visit, which ticket is a genuinely bad deal and which neighbourhood rewards a second stop. That is what we write about.</p>
        <p class="muted">When we recommend a pass, a tour or a restaurant, we say why — and we say what it is not good for. If we ever earn a commission from a link, it never decides the ranking.</p>
        <div class="split__actions">
          <a class="link-arrow" href="about.html">How this guide works</a>
        </div>
        <div class="stats" style="margin-top:2.4rem">
          <div class="stat"><strong>5</strong><span>boroughs covered</span></div>
          <div class="stat"><strong>472</strong><span>subway stations</span></div>
          <div class="stat"><strong>24h</strong><span>city that never stops</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Curated itineraries",
      title: "Plans you can actually follow",
      lead: "Real days, with travel time and opening hours built in. No ten-stop marathons, no restaurant recommendations that closed in 2019.",
      action: btn({ href: "itineraries.html", label: "Compare all three", variant: "outline" }),
    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "3-days-in-nyc.html",
        image: img("fifth-avenue-cab.webp"),
        alt: "A yellow cab crossing a Manhattan avenue lined with office towers",
        kicker: "Short break",
        title: "3 days in NYC",
        text: "The essential first taste: skyline, park, one neighbourhood and a show.",
        meta: "3 days · easy pace",
      })}
      ${mediaCard({
        href: "5-days-in-nyc.html",
        image: img("broadway-theatre-night.webp"),
        alt: "A Broadway theatre marquee glowing at night in the Theatre District",
        kicker: "Most popular",
        title: "5 days in NYC",
        text: "The full first-timer itinerary, with a morning in Brooklyn and a proper museum day.",
        meta: "5 days · balanced pace",
      })}
      ${mediaCard({
        href: "7-days-in-nyc.html",
        image: img("brooklyn-bridge-sunset.webp"),
        alt: "The Brooklyn Bridge at sunset seen from the waterfront",
        kicker: "Deep dive",
        title: "7 days in NYC",
        text: "Seven days means outer boroughs, real neighbourhoods and room to wander.",
        meta: "7 days · flexible pace",
      })}
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Five boroughs, five different cities",
      title: "New York is not Manhattan",
      lead: "Manhattan gets the postcards. But Queens is the most linguistically diverse place on earth, Brooklyn has the best food, and the Bronx is rewriting its own story. Start with the right borough for your interests.",
      action: `<a class="link-arrow" href="boroughs.html">All borough guides</a><br><a class="link-arrow" href="neighbourhoods.html">Neighbourhood guides</a>`,
    })}
    <div class="grid grid--3">
      ${boroughTile({
        href: "manhattan.html",
        image: img("manhattan-skyline.webp"),
        alt: "The Brooklyn Bridge and Lower Manhattan skyline in daylight",
        name: "Manhattan",
        text: "The icon factory — and the neighbourhoods behind it",
      })}
      ${boroughTile({
        href: "brooklyn.html",
        image: img("brooklyn-bridge-park.webp"),
        alt: "The Brooklyn Bridge tower seen from Brooklyn Bridge Park",
        name: "Brooklyn",
        text: "Waterfront, brownstones, and the city's best kitchens",
      })}
      ${boroughTile({
        href: "queens.html",
        image: img("queens-astoria.webp"),
        alt: "The Manhattan skyline seen across the water from Astoria, Queens",
        name: "Queens",
        text: "The most diverse food scene in the United States",
      })}
      ${boroughTile({
        href: "bronx.html",
        image: img("bronx-yankee-stadium.webp"),
        alt: "Inside Yankee Stadium in the Bronx on a game day",
        name: "The Bronx",
        text: "Yankee Stadium, the zoo, Arthur Avenue and real history",
      })}
      ${boroughTile({
        href: "staten-island.html",
        image: img("staten-island-ferry.webp"),
        alt: "The Staten Island Ferry at St. George with the Manhattan skyline behind",
        name: "Staten Island",
        text: "A free ferry, green space and the city at its calmest",
      })}
      <a class="borough-tile" href="food.html" style="background:linear-gradient(145deg,#1c232b,#0b0d10);min-height:260px">
        <div>
          <h3 style="color:var(--brass)">Food &amp; drink</h3>
          <p>Bagels, pizza, pastrami and where to find them</p>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="home-map-block home-map-block--teaser">
      <div class="borough-map-wrap">
        ${attractionsMapSvg}
      </div>
      <div>
        ${eyebrow("Plan the sights")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Fourteen headline sights, one map</h2>
        <p class="lead">Statue of Liberty, Empire State, the Met, the High Line and the rest — numbered so you can see what clusters together before you book anything.</p>
        <div class="split__actions">
          ${btn({ href: "map.html#attractions-map", label: "See the numbered map" })}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The practical stuff",
      title: "The details that decide your trip",
      lead: "Tickets, transit, money and timing. Get these right and you spend your holiday in New York instead of in a queue.",
    })}
    <div class="grid grid--4 grid--auto">
      ${card({
        kicker: "Transit",
        title: `<a href="getting-around.html">Subway, airports &amp; OMNY</a>`,
        text: "Fares, the AirTrain, which airport transfer is worth it, and how to pay without a MetroCard.",
      })}
      ${card({
        kicker: "Tickets",
        title: `<a href="passes.html">Which NYC pass is worth it</a>`,
        text: "CityPASS, Go City and New York Pass compared — with the maths for a 3, 5 and 7 day trip.",
      })}
      ${card({
        kicker: "Money",
        title: `<a href="budget.html">What a trip really costs</a>`,
        text: "Hotel, food, transport and attraction budgets for three travel styles, updated for 2026.",
      })}
      ${card({
        kicker: "Timing",
        title: `<a href="when-to-visit.html">When to come to New York</a>`,
        text: "Month-by-month weather, crowds, prices and the events worth planning a trip around.",
      })}
      ${card({
        kicker: "Sleep",
        title: `<a href="where-to-stay.html">Where to stay</a>`,
        text: "Neighbourhood by neighbourhood: who each area suits, price bands and subway lines.",
      })}
      ${card({
        kicker: "Explore",
        title: `<a href="map.html">The interactive map</a>`,
        text: "Attractions, cheap food and neighbourhoods on one map, filterable in a click.",
      })}
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <div class="grid grid--2" style="align-items:stretch;gap:1.2rem">
      <div class="widget" data-weather>
        <div>
          <span class="widget__label">New York right now</span>
          <p class="widget__value" data-weather-temp>—°F</p>
          <p class="widget__meta"><span data-weather-desc>Loading live forecast…</span> · <span data-nyc-time>—</span></p>
        </div>
        <div>
          <span class="widget__label">Next few days</span>
          <div class="widget__days" data-weather-days></div>
          <p class="widget__meta">Live forecast from Open-Meteo · <a href="when-to-visit.html">month-by-month guide</a></p>
        </div>
      </div>
      <div class="widget" style="grid-template-columns:1fr">
        <div>
          <span class="widget__label">Find your way around</span>
          <p class="widget__meta" style="margin-top:.6rem">Sixty-odd pins for attractions, cheap food, parks and neighbourhoods — or search the whole guide.</p>
          <div class="hero__actions" style="margin-top:.9rem">
            ${btn({ href: "map.html", label: "Open the map", size: "sm" })}
            ${btn({ href: "search.html", label: "Search", size: "sm", variant: "outline" })}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:stretch;gap:clamp(1.5rem,4vw,3.5rem)">
      <div data-reveal>
        ${eyebrow("Passes, honestly")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Do not buy a sightseeing pass before you read this.</h2>
        <p class="lead" style="margin-top:1.1rem">The big three passes are not interchangeable. CityPASS suits a short first trip. Go City's Explorer Pass wins when you want three or four big-ticket sights. The all-inclusive passes only pay off if you genuinely want to be out sightseeing every day.</p>
        <p class="muted" style="margin-top:1rem">Our comparison breaks down real 2026 prices, what is actually included, and the break-even point for each pass — plus a calculator that tells you which one wins for your trip.</p>
        <div class="split__actions">
          ${btn({ href: "passes.html", label: "Compare the passes" })}
        </div>
      </div>
      <div>${callout({
        icon: "◆",
        title: "Insider tip",
        text: "Buy timed-entry tickets directly from the attraction's own website whenever you can. Third-party resellers charge a booking fee and cannot move your slot if it rains.",
        dark: false,
      })}
      ${callout({
        icon: "★",
        title: "Free and always worth it",
        text: "The Staten Island Ferry, the High Line, Brooklyn Bridge Park, Grand Central's concourse, and the free museum hours listed in our budget guide. No ticket, no queue, no catch.",
      })}</div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "What's on",
      title: "Time your trip around the calendar",
      lead: "Thanksgiving, Christmas, New Year's Eve, summer and the US Open each change what New York feels like — and what you need to book.",
      action: `<a class="link-arrow" href="whats-on.html">All seasonal guides</a>`,
    })}
    <div class="grid grid--3">
      ${mediaCard({ href: "thanksgiving-nyc.html", image: img("central-park-bow-bridge.webp"), alt: "Bow Bridge in Central Park in autumn", kicker: "November", title: "Thanksgiving in NYC", text: "The parade, the feast and what closes.", meta: "Seasonal guide" })}
      ${mediaCard({ href: "christmas-in-nyc.html", image: img("fifth-avenue-cab.webp"), alt: "A yellow cab on Fifth Avenue in Midtown", kicker: "December", title: "Christmas in New York", text: "Tree, windows, markets and the crowd strategy.", meta: "Seasonal guide" })}
      ${mediaCard({ href: "new-years-eve-nyc.html", image: img("times-square-night.webp"), alt: "Times Square lit up at night", kicker: "31 December", title: "New Year's Eve in NYC", text: "The ball drop and the calmer alternatives.", meta: "Seasonal guide" })}
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The journal",
      title: "Long reads from the city",
      lead: "Neighbourhood deep dives, food maps and the arguments we have about the best way to see New York.",
      action: `<a class="link-arrow" href="journal.html">All stories</a>`,
    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "free-things-to-do-nyc.html",
        image: img("high-line.webp"),
        alt: "People relaxing on the High Line elevated park in Manhattan",
        kicker: "Free NYC",
        title: "Twelve genuinely free things to do in New York",
        text: "The Staten Island Ferry, museum free windows and the parks that cost nothing — with the practical catch for each.",
        meta: "12 min read",
      })}
      ${mediaCard({
        href: "food.html",
        image: img("nyc-pizza-slice.webp"),
        alt: "Two slices of New York-style pizza on paper plates",
        kicker: "Food",
        title: "The five foods you need to eat in New York",
        text: "A bagel, a slice, pastrami, a dosa in Queens, and one Italian-American classic. Where to go for each.",
        meta: "9 min read",
      })}
      ${mediaCard({
        href: "sunday-in-brooklyn.html",
        image: img("brooklyn-bridge-park.webp"),
        alt: "The Brooklyn Bridge tower seen from Brooklyn Bridge Park",
        kicker: "Boroughs",
        title: "A perfect Sunday in Brooklyn, morning to evening",
        text: "Promenade, DUMBO, Prospect Park and dinner in Park Slope — the borough at its most local.",
        meta: "6 min read",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "One useful New York email a week",
      text: "New guides, price changes worth knowing about, and the occasional neighbourhood tip you will not find on a booking site.",
      source: "home",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Start with a plan",
  title: "Pick a length. We will do the sequencing.",
  text: "Three budgets, three trip lengths, and one rule: you should come home having seen a neighbourhood, not just an observation deck.",
  actions: `${btn({ href: "itineraries.html", label: "See all itineraries" })}${btn({
    href: "plan-your-trip.html",
    label: "Plan from scratch",
    variant: "outline",
  })}`,
})}
`,
};
