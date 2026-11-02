import {
  btn,
  sectionHead,
  pageHero,
  day,
  callout,
  table,
  faq,
  newsletter,
  pageNav,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "sunday-in-brooklyn.html",
  navSection: "journal",
  bodyClass: "page-inner",
  title: "A Sunday in Brooklyn — One-Day Itinerary",
  description:
    "A one-day Brooklyn itinerary for a Sunday: Brooklyn Heights Promenade, DUMBO, lunch in Williamsburg or Park Slope, Prospect Park and an evening skyline walk.",
  priority: "0.7",
  changefreq: "monthly",
  ogType: "article",
  ogImage: "assets/img/brooklyn-bridge-sunset.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "A Sunday in Brooklyn — One-Day Itinerary",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
      inLanguage: "en",
    },
  ],
  render: () => `
${pageHero({
  image: img("brooklyn-bridge-sunset.webp"),
  alt: "The Brooklyn Bridge at sunset with the Manhattan skyline behind it",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "journal.html", label: "Journal" },
    { href: "sunday-in-brooklyn.html", label: "A Sunday in Brooklyn" },
  ],
  eyebrowText: "Journal · Itinerary",
  title: "A Sunday in Brooklyn",
  lead: "One day on the other side of the river, paced like a Sunday rather than a sightseeing sprint: a waterfront walk, a long lunch, a park afternoon and the skyline at dusk.",
  meta: metaItems("One day", "Brooklyn", "Verified November 2026"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why Brooklyn on a Sunday")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">The borough at its best</h2>
        <p class="lead">Manhattan is a city of appointments. Brooklyn on a Sunday is a city of walks, brunch and the unhurried business of being outside.</p>
        <p class="muted">This plan starts early because the two best views — the Promenade and the DUMBO waterfront — are quiet before 10am and crowded after it. It ends with dinner and a last look at the skyline, which is the correct way to finish a day in Brooklyn. Everything is reachable on the subway, and the whole loop costs one fare each way.</p>
        <div class="stats" style="margin-top:2rem">
          <div class="stat"><strong>4</strong><span>neighbourhoods</span></div>
          <div class="stat"><strong>~6</strong><span>hours outdoors</span></div>
          <div class="stat"><strong>1</strong><span>day of walking</span></div>
        </div>
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("brooklyn-bridge-park.webp")}" alt="A tower of the Brooklyn Bridge seen from Brooklyn Bridge Park" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The plan",
      title: "Sunday, hour by hour",
      lead: "Nothing here needs a ticket. Book dinner if you want a particular restaurant; everything else can be decided on the day.",
    })}
    <div class="day-plan">
      ${day({
        number: "01",
        label: "Morning · 9am",
        title: "Brooklyn Heights Promenade and DUMBO",
        text: "Start above the water and walk down to it. This is the best free view in the city and the reason to set an alarm on a Sunday.",
        stops: [
          { what: "Brooklyn Heights Promenade", where: "enter from Montague Street or Clark Street; the skyline view runs the length of the railing" },
          { what: "Walk down to DUMBO", where: "through the brownstone side streets, then under the bridge to Washington Street" },
          { what: "The Washington Street view", where: "the bridge frames the Empire State Building between two warehouses — go before the queue forms" },
          { what: "Brooklyn Bridge Park", where: "Pebble Beach and the piers; sit for 20 minutes rather than photographing everything" },
          { what: "Coffee and a pastry", where: "somewhere in DUMBO or on the walk back up to the Heights" },
        ],
      })}
      ${day({
        number: "02",
        label: "Midday · 12pm",
        title: "Lunch in Williamsburg or Park Slope",
        text: "Cross the borough by subway for lunch. Williamsburg is the waterfront-and-food choice; Park Slope is the brownstones-and-family one. Pick whichever mood you are in.",
        stops: [
          { what: "Williamsburg option", where: "Bedford Avenue, Domino Park and the waterfront; walk the block between lunch and the river" },
          { what: "Park Slope option", where: "Fifth and Seventh Avenues; the weekend greenmarket at Grand Army Plaza is a good first stop" },
          { what: "The meal itself", where: "a neighbourhood restaurant rather than a destination; expect a queue at the popular brunch places between 11am and 1pm" },
          { what: "A doughnut detour", where: "Peter Pan Donuts in Greenpoint if you are already north — about $5 and worth the walk" },
        ],
      })}
      ${day({
        number: "03",
        label: "Afternoon · 2.30pm",
        title: "Prospect Park or the Brooklyn Museum",
        text: "One green space and one collection, next to each other. Choose the park on a sunny day, the museum on a cold or wet one — or do a short version of both.",
        stops: [
          { what: "Prospect Park", where: "the Long Meadow, the boathouse and the lake; enter from Grand Army Plaza or 15th Street–Prospect Park" },
          { what: "Brooklyn Museum", where: "suggested admission rather than a fixed ticket; free First Saturday evenings once a month" },
          { what: "Walk back through Park Slope", where: "brownstones, cafés and a slow half-hour towards dinner" },
        ],
      })}
      ${day({
        number: "04",
        label: "Evening · 6pm",
        title: "Dinner and the skyline one last time",
        text: "Finish near the water. The Promenade at dusk is the whole city lit up across the river, and it costs nothing.",
        stops: [
          { what: "Dinner", where: "book a neighbourhood restaurant in Brooklyn Heights, DUMBO or Park Slope — the good ones fill up on Sundays" },
          { what: "Dusk on the Promenade", where: "the last light behind the skyline is the photograph everyone comes home with" },
          { what: "Ferry or subway home", where: "the ferry from Fulton Ferry costs $5 and turns the journey into the best harbour ride in the city" },
        ],
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__body" data-reveal>
        ${eyebrow("Getting there")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">How to get to Brooklyn</h2>
        <p class="lead">Brooklyn is 10–20 minutes from Lower Manhattan on the subway. Do not take a taxi across the bridge on a Sunday afternoon unless you enjoy traffic.</p>
        <p class="muted">The subway fare is $3.00 and OMNY fare capping applies: 12 fares in any rolling seven days and the rest are free, which matters if you are in the city for a week. Tap the same card or phone every time. The walk over the Brooklyn Bridge is free and takes about 30 minutes, but it is a different day out — see the free things guide.</p>
        ${table({
          caption: "Subway routes for the Sunday Brooklyn itinerary",
          head: ["Area", "Best station", "Lines"],
          rows: [
            ["Brooklyn Heights", "Clark Street or Borough Hall", "2 / 3 / 4 / 5 / R"],
            ["DUMBO", "High Street", "A / C"],
            ["Williamsburg", "Bedford Avenue", "L"],
            ["Park Slope", "7th Avenue or Grand Army Plaza", "B / Q / 2 / 3"],
            ["Prospect Park", "15th Street–Prospect Park", "F / G"],
            ["Brooklyn Museum", "Eastern Parkway–Brooklyn Museum", "2 / 3 / 4"],
          ],
        })}
        <p class="muted" style="margin-top:1.2rem">All of these stations are within a few minutes' walk of the plan. If you are coming from Midtown, allow 25–35 minutes door to door; from Lower Manhattan, 10–15.</p>
        ${callout({
          icon: "☂",
          title: "If it rains",
          text: "Swap the Promenade for the Brooklyn Museum and the Brooklyn Public Library at Grand Army Plaza, and take the subway rather than walking between neighbourhoods. The DUMBO waterfront is still worth 15 minutes in a drizzle — the bridge view is better in flat grey light — but skip Brooklyn Bridge Park's open piers. Museums and food halls are the reliable wet-weather anchors.",
        })}
      </div>
      <div class="split__media">
        <img src="${img("brooklyn-bridge-sunset.webp")}" alt="Sunset over the Brooklyn Bridge" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Sunday in Brooklyn questions", lead: "" })}
    ${faq([
      {
        q: "Is one day enough for Brooklyn?",
        a: "<p>For a first visit, yes — this plan covers the waterfront, one neighbourhood and the park. Brooklyn is the largest of the five boroughs and has enough for a week, but one well-paced Sunday is a good introduction.</p>",
      },
      {
        q: "Is the Brooklyn Bridge walk part of this itinerary?",
        a: "<p>It can be, but it is a different start. If you want to walk the bridge, start in Manhattan before 9am and join this plan at the Brooklyn Heights Promenade. The walk is free and takes about 30 minutes.</p>",
      },
      {
        q: "What does a Sunday in Brooklyn cost?",
        a: "<p>Two subway fares at $3 each, lunch around $15–25, dinner for two mid-range around $120–180 pre-tax, and a museum ticket if you choose it. The walks, the park and the Promenade are free, so the day can be done cheaply or comfortably.</p>",
      },
      {
        q: "Is Brooklyn family-friendly?",
        a: "<p>Very. Brooklyn Bridge Park has playgrounds and free public toilets, Prospect Park has space to run, and the museum is manageable with children. The Promenade is pushchair-friendly; the DUMBO cobbles are not.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "The Sunday plan, in your inbox",
      text: "One short New York email a week: a walk worth taking, a table worth booking and what is on this weekend.",
      source: "sunday-brooklyn",
    })}
  </div>
</section>

${pageNav({
  prev: { href: "free-things-to-do-nyc.html", label: "Free things to do" },
  next: { href: "nyc-rainy-day.html", label: "New York on a rainy day" },
})}
`,
};
