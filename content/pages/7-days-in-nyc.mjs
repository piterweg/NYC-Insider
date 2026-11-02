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
  path: "7-days-in-nyc.html",
  navSection: "itineraries",
  bodyClass: "page-inner",
  title: "7 Days in NYC — The Full Week Itinerary",
  description:
    "A seven-day New York City itinerary that goes beyond Midtown: Queens food crawls, the Bronx, the Staten Island Ferry and Brooklyn neighbourhoods.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-sunset.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "7 Days in NYC — The Full Week Itinerary",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () => `
${pageHero({
  image: img("brooklyn-bridge-sunset.webp"),
  alt: "The Brooklyn Bridge at sunset seen from the waterfront",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "itineraries.html", label: "Itineraries" },
    { href: "7-days-in-nyc.html", label: "7 days" },
  ],
  eyebrowText: "Itinerary · 7 days",
  title: "Seven days in New York",
  lead: "A week is what it takes to stop seeing New York as a set of landmarks. This plan does the icons properly, then spends three days in the boroughs most visitors never reach — with a spare day for whatever the city makes you curious about.",
  meta: metaItems("7 days", "All five boroughs", "Public transport", "One free day"),
})}

<section class="section">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__media">
        <img src="${img("queensboro-bridge-night.webp")}" alt="The Queensboro Bridge lit at night over the East River" width="1000" height="1250" loading="lazy" />
      </div>
      <div class="split__body" data-reveal>
        ${eyebrow("Why a week changes the trip")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">The boroughs are the point</h2>
        <p class="lead">Most one-week New York itineraries are five days of Manhattan with two day trips bolted on. This one is different: the first five days cover the city's headline sights, and the last two take you to Queens, the Bronx and Staten Island — the places that explain how New York actually works.</p>
        <p class="muted">You will still climb an observation deck and see a show. You will also eat your way down Roosevelt Avenue, stand on the Grand Concourse, and take the best free boat ride in the United States. The pace is deliberately uneven: two big days, one slow day, then repeat.</p>
        <div class="stats" style="margin-top:2rem">
          <div class="stat"><strong>5</strong><span>boroughs</span></div>
          <div class="stat"><strong>2</strong><span>museums</span></div>
          <div class="stat"><strong>1</strong><span>free day</span></div>
          <div class="stat"><strong>0</strong><span>rental cars</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The plan",
      title: "Seven days, day by day",
      lead: "Days 1–5 follow the 5-day itinerary. Days 6 and 7 are the ones that make a week worthwhile — keep them flexible and check opening days before you travel.",
    })}
    <div class="day-plan">
      ${day({
        number: "01",
        label: "Midtown",
        title: "Arrive and take the skyline in",
        text: "Settle in, then go up while the light is good. Evening in the Theatre District.",
        stops: [
          { what: "Top of the Rock or Empire State Building", where: "book a late-afternoon slot" },
          { what: "Bryant Park &amp; Grand Central", where: "walk through the concourse at rush hour" },
          { what: "Times Square at dusk", where: "15 minutes, then leave" },
          { what: "Broadway show", where: "book ahead; Thursday is a good night" },
        ],
      })}
      ${day({
        number: "02",
        label: "Harbour",
        title: "Statue of Liberty and Lower Manhattan",
        text: "The one morning that must start early — the first Statue City Cruises ferry.",
        stops: [
          { what: "Statue of Liberty &amp; Ellis Island", where: "first ferry from Battery Park" },
          { what: "Lunch at the Seaport", where: "Tin Building or Pier 17" },
          { what: "9/11 Memorial &amp; Museum", where: "plaza free; museum ~2 hours" },
          { what: "Wall Street &amp; Stone Street", where: "short walking loop" },
          { what: "Brooklyn Bridge at sunset", where: "walk into DUMBO, eat there" },
        ],
      })}
      ${day({
        number: "03",
        label: "Park &amp; museum",
        title: "Central Park, The Met and the Upper East Side",
        text: "The Met is closed on Wednesdays — put this day on any other weekday.",
        stops: [
          { what: "Central Park", where: "The Mall → Bethesda Terrace → Bow Bridge" },
          { what: "The Met", where: "three hours on the highlights" },
          { what: "Fifth Avenue &amp; Museum Mile", where: "Guggenheim exterior, Conservatory Garden" },
          { what: "Dinner on the Upper West Side", where: "Amsterdam Avenue or Columbus" },
        ],
      })}
      ${day({
        number: "04",
        label: "Brooklyn",
        title: "A full Brooklyn day",
        text: "One borough, one direction: north Brooklyn in the morning, Prospect Park in the afternoon.",
        stops: [
          { what: "Brooklyn Heights Promenade", where: "morning skyline walk" },
          { what: "DUMBO", where: "Washington Street view, Brooklyn Bridge Park" },
          { what: "Williamsburg", where: "Domino Park, Bedford Avenue, lunch" },
          { what: "Prospect Park", where: "Long Meadow and the Botanic Garden" },
          { what: "Dinner in Park Slope", where: "Fifth Avenue" },
        ],
      })}
      ${day({
        number: "05",
        label: "Downtown",
        title: "SoHo, the Village and the High Line",
        text: "The downtown day. Walk more than you ride, and keep the evening free for a return visit.",
        stops: [
          { what: "SoHo &amp; Nolita", where: "Greene Street, Prince Street, coffee" },
          { what: "Greenwich Village", where: "Washington Square, Bleecker Street" },
          { what: "High Line", where: "enter at Gansevoort or 23rd Street" },
          { what: "Chelsea Market", where: "lunch or early dinner" },
          { what: "Madison Square Park", where: "sunset and the Flatiron photo" },
        ],
      })}
      ${day({
        number: "06",
        label: "Queens",
        title: "The most diverse food day in America",
        text: "No observation decks today. The 7 train is the itinerary: Long Island City, Jackson Heights, Flushing.",
        stops: [
          { what: "Gantry Plaza State Park", where: "Long Island City waterfront, morning skyline" },
          { what: "MoMA PS1 or the Noguchi Museum", where: "pick one — PS1 is closed some weekdays" },
          { what: "Jackson Heights", where: "Little India on 74th Street, lunch on Roosevelt Avenue" },
          { what: "Flushing", where: "New World Mall food court, Main Street" },
          { what: "Flushing Meadows–Corona Park", where: "the Unisphere and the Queens Museum" },
        ],
      })}
      ${day({
        number: "07",
        label: "Bronx &amp; Staten Island",
        title: "The other New York",
        text: "A long but memorable final day. Start north, finish on the water, and keep the evening loose.",
        stops: [
          { what: "Yankee Stadium area", where: "161 St–Yankee Stadium; the stadium tour if there is no game" },
          { what: "Bronx Zoo or the NY Botanical Garden", where: "allow 2–3 hours" },
          { what: "Arthur Avenue", where: "lunch at the retail market, Mike's Deli, Zero Otto Nove" },
          { what: "Staten Island Ferry", where: "free, from Whitehall Terminal, 25 minutes each way" },
          { what: "Snug Harbor", where: "Chinese Scholar's Garden and the grounds, if time allows" },
          { what: "Last dinner", where: "back in Manhattan — book it" },
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
          title: "What the week costs",
          lead: "Excluding flights and hotel. Adult prices; booking direct is usually cheapest.",
        })}
        ${table({
          caption: "Estimated attractions and transport costs for the seven-day itinerary",
          head: ["Item", "Approx. cost", "Notes"],
          rows: [
            ["Observation deck (×2)", "$84–94", "Pick two different views"],
            ["Statue of Liberty ferry", "$25.50", "Book ahead"],
            ["9/11 Museum", "$24–36", "Plaza free"],
            ["The Met", "$30", "Closed Wednesdays"],
            ["Museum in Queens", "$0–15", "Bronx Museum is free"],
            ["Broadway show", "$90–180", "TKTS or rush can cut this"],
            ["Subway", "$30–36", "12 fares then free on OMNY"],
            ["<strong>Total (sights + transit)</strong>", "<strong>$300–400</strong>", "Plus food and hotel"],
          ],
        })}
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Keep day 7 flexible",
          text: "The Bronx and Staten Island day is long. If you are flagging, choose one: the zoo and Arthur Avenue, or the ferry and Snug Harbor. Both are excellent; neither is worth a forced march.",
        })}
        ${callout({
          icon: "☂",
          title: "Rain plan",
          text: "On a wet day, swap Central Park for AMNH, the High Line for a museum, and the zoo for the Bronx Museum of the Arts (free, Wednesday–Sunday). Keep the ferry — it runs in rain and the harbour is dramatic.",
        })}
        ${callout({
          icon: "◷",
          title: "Book in this order",
          text: "Broadway, Statue of Liberty ferry, two observation decks, The Met. Everything else can be decided the day before. The Queens and Bronx days need no reservations at all.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "One-week trip questions", lead: "" })}
    ${faq([
      { q: "Is seven days too long for a first visit?", a: "<p>No — it is the first length that lets you slow down. If you only want the icons, the <a href=\"5-days-in-nyc.html\">5-day plan</a> is enough. Seven days is for people who want to understand the city.</p>" },
      { q: "Do I need a car for Queens and the Bronx?", a: "<p>No. The 7 train, the D and 4, and the Staten Island Ferry cover everything on this plan. Driving in New York is a separate hobby.</p>" },
      { q: "Should I buy a seven-day sightseeing pass?", a: "<p>Probably not on this plan. You pay for six or seven attractions over the week, which is the break-even zone — CityPASS plus a couple of single tickets usually beats an all-inclusive pass. See <a href=\"passes.html\">the pass comparison</a>.</p>" },
      { q: "What about day trips to Philadelphia or Boston?", a: "<p>Not on this itinerary. Both are full days on the train and deserve their own trips. A week in New York is better spent in New York.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "The full week, on one page", text: "We will email the printable seven-day plan plus our Queens and Bronx add-ons.", source: "7-days" })}
  </div>
</section>

${pageNav({ prev: { href: "5-days-in-nyc.html", label: "5 days in NYC" }, next: { href: "boroughs.html", label: "The five boroughs" } })}
`,
};
