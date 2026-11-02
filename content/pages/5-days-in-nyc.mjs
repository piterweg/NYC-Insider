import {
  btn,
  sectionHead,
  pageHero,
  day,
  callout,
  card,
  table,
  faq,
  newsletter,
  pageNav,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "5-days-in-nyc.html",
  navSection: "itineraries",
  bodyClass: "page-inner",
  title: "5 Days in NYC — The Complete First-Timer Itinerary",
  description:
    "A five-day New York City itinerary for a first visit: the icons, museums, a full Brooklyn day and a proper night out — sequenced to minimise travel time.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/times-square-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "5 Days in NYC — The Complete First-Timer Itinerary",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () => `
${pageHero({
  image: img("times-square-night.webp"),
  alt: "Times Square's neon billboards at night",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "itineraries.html", label: "Itineraries" },
    { href: "5-days-in-nyc.html", label: "5 days" },
  ],
  eyebrowText: "Itinerary · 5 days",
  title: "Five days in New York",
  lead: "The plan we recommend to almost everyone: five days is long enough for the headline sights, two museums, a full Brooklyn day and one evening you will talk about for years — without sprinting.",
  meta: metaItems("5 days", "Balanced pace", "Public transport", "First visit"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why five days")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">The sweet spot for a first trip</h2>
        <p class="lead">Three days forces choices. Seven days tempts you into day trips. Five days is the length where New York stops being a checklist and starts being a city you get to know.</p>
        <p class="muted">The structure: two Manhattan days, one museum-and-park day, one Brooklyn day and a final day for whatever the trip has made you curious about. You will walk a lot — plan for comfortable shoes and one slower morning.</p>
        <div class="stats" style="margin-top:2rem">
          <div class="stat"><strong>5</strong><span>days</span></div>
          <div class="stat"><strong>2</strong><span>museums</span></div>
          <div class="stat"><strong>1</strong><span>Brooklyn day</span></div>
          <div class="stat"><strong>1</strong><span>free morning</span></div>
        </div>
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("fifth-avenue-cab.webp")}" alt="A yellow cab crossing a Manhattan avenue" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The plan",
      title: "Five days, day by day",
      lead: "Book the observation deck, the Statue of Liberty ferry, one museum slot and one Broadway show before you arrive. Everything else stays flexible.",
    })}
    <div class="day-plan">
      ${day({
        number: "01",
        label: "Midtown",
        title: "Arrive and go straight up",
        text: "Settle in, then get a skyline view while you still have energy. Evening in Times Square or the Theatre District.",
        stops: [
          { what: "Hotel check-in and bags", where: "if the room is not ready, use luggage storage" },
          { what: "Top of the Rock or Empire State Building", where: "choose based on what you want to see: the Empire State from above, or the view that includes it" },
          { what: "Lunch near Rockefeller Center", where: "a deli or the food hall rather than a tourist-menu restaurant" },
          { what: "Times Square at dusk", where: "walk it, then leave — 15 minutes is genuinely enough" },
          { what: "Broadway show", where: "book in advance or try TKTS at Duffy Square" },
        ],
      })}
      ${day({
        number: "02",
        label: "Harbour",
        title: "Statue of Liberty, Lower Manhattan and the bridge",
        text: "The big sightseeing day. Start early, because the ferry queue is the one line you cannot avoid.",
        stops: [
          { what: "Statue City Cruises ferry", where: "first departure from Battery Park; Liberty Island and Ellis Island" },
          { what: "Lunch at the Seaport", where: "the Tin Building or Pier 17 — sit outside if it is sunny" },
          { what: "9/11 Memorial &amp; Museum", where: "plaza free, museum roughly two hours" },
          { what: "Brooklyn Bridge walk", where: "Manhattan to Brooklyn, ideally late afternoon" },
          { what: "DUMBO and Brooklyn Bridge Park", where: "the Washington Street view, then pizza or dinner" },
        ],
      })}
      ${day({
        number: "03",
        label: "Park &amp; museum",
        title: "Central Park, The Met and the Upper East Side",
        text: "A slower, indoor-outdoor day. Do the museum first if it is hot, the park first if it is not.",
        stops: [
          { what: "Central Park loop", where: "The Mall, Bethesda Terrace, Bow Bridge, the Ramble" },
          { what: "The Met", where: "three hours on the highlights; pay-what-you-wish applies to New York residents only" },
          { what: "Lunch", where: "Upper East Side cafés or the museum's own café for speed" },
          { what: "Fifth Avenue and the Upper West Side", where: "walk south, cross to Central Park West, end near Lincoln Square" },
          { what: "Dinner", where: "Upper West Side or a return to the Village" },
        ],
      })}
      ${day({
        number: "04",
        label: "Brooklyn",
        title: "A full Brooklyn day",
        text: "Cross the river and stay there. Brooklyn is where the food, the brownstones and the best waterfront are.",
        stops: [
          { what: "Brooklyn Heights Promenade", where: "morning skyline walk, then down to DUMBO" },
          { what: "Williamsburg", where: "Bedford Avenue, the waterfront, vintage shops" },
          { what: "Lunch", where: "a neighbourhood spot in Williamsburg or Greenpoint" },
          { what: "Prospect Park or the Brooklyn Museum", where: "pick based on weather" },
          { what: "Dinner", where: "Park Slope or return to Manhattan via the subway" },
        ],
      })}
      ${day({
        number: "05",
        label: "Downtown",
        title: "SoHo, the Village, High Line — and a last night",
        text: "Use the final day for the downtown streets rather than another big-ticket sight. Finish with the meal you have been saving for.",
        stops: [
          { what: "SoHo and Nolita", where: "cast-iron streets, independent shops, coffee" },
          { what: "Greenwich Village", where: "Washington Square Park, MacDougal Street, a slice" },
          { what: "High Line and Chelsea Market", where: "walk the park south to north or the reverse" },
          { what: "Madison Square Park &amp; Flatiron", where: "sunset from the park, the Flatiron photo" },
          { what: "Final dinner", where: "book it — no last-night gambles" },
        ],
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Costs",
          title: "What five days costs on this plan",
          lead: "Excluding flights and accommodation. Attraction prices are adult rates; book online where it is cheaper.",
        })}
        ${table({
          caption: "Estimated attraction and transport costs for the five-day itinerary",
          head: ["Item", "Approx. cost", "Notes"],
          rows: [
            ["Observation deck", "$42–47", "Top of the Rock or Empire State Building"],
            ["Statue of Liberty ferry", "$25.50", "Statue City Cruises, book ahead"],
            ["9/11 Museum", "$24–36", "Memorial plaza free"],
            ["The Met", "$30", "Pay-what-you-wish for NY residents"],
            ["Broadway show", "$90–180", "TKTS or rush can cut this"],
            ["Subway", "$30–35", "OMNY fare cap $35 per 7 days"],
            ["<strong>Total (sights + transit)</strong>", "<strong>$230–320</strong>", "Plus food and hotel"],
          ],
        })}
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Do not over-plan day 5",
          text: "By day five you will have discovered something you want to return to. Keep the last afternoon deliberately open — that is where the best memories of a first New York trip usually come from.",
        })}
        ${callout({
          icon: "☂",
          title: "Rain plan",
          text: "Swap Central Park for the American Museum of Natural History on day 3 and move the High Line to day 5 morning. Both are free of fixed reservations.",
        })}
        ${callout({
          icon: "◷",
          title: "Book early, in this order",
          text: "Broadway (best seats go first), Statue of Liberty ferry, observation deck, The Met. Everything else can be decided the night before.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Five-day trip questions", lead: "" })}
    ${faq([
      { q: "Is five days enough to see Brooklyn and Manhattan?", a: "<p>Yes. This plan gives Brooklyn a full day and Manhattan three and a half. Queens and the Bronx need a longer trip or a second visit — see the <a href=\"7-days-in-nyc.html\">7-day plan</a>.</p>" },
      { q: "Should I buy a sightseeing pass for five days?", a: "<p>Maybe. On this plan you pay for five attractions, which is where CityPASS starts to make sense; an all-inclusive pass only wins if you add more sights. Run the numbers on our <a href=\"passes.html\">pass comparison</a>.</p>" },
      { q: "How much walking is this?", a: "<p>Expect 12,000–18,000 steps on full days. The park and Brooklyn days are the longest. Comfortable shoes matter more than any other packing decision.</p>" },
      { q: "Where should I stay for five days?", a: "<p>Midtown for convenience, the Village or SoHo for atmosphere, the Upper West Side for a calmer base with good food. All three work with this plan.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "Get the five-day plan as a PDF", text: "One email with the printable itinerary and a short weekly note on what is worth knowing in New York.", source: "5-days" })}
  </div>
</section>

${pageNav({ prev: { href: "3-days-in-nyc.html", label: "3 days in NYC" }, next: { href: "7-days-in-nyc.html", label: "7 days in NYC" } })}
`,
};
