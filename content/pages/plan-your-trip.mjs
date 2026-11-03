import {
  btn,
  sectionHead,
  pageHero,
  mediaCard,
  callout,
  table,
  faq,
  newsletter,
  ctaBand,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "plan-your-trip.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Plan Your Trip to New York City",
  description:
    "How to plan a New York City trip: how long to stay, what to book and when, where to stay by area, a realistic budget snapshot and airport arrival basics.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline-night.webp",
  breadcrumbs: [
    { href: "index.html", label: "Home" },
    { href: "plan-your-trip.html", label: "Plan Your Trip" },
  ],
  render: () => `
${pageHero({
  image: img("manhattan-skyline-night.webp"),
  alt: "The Manhattan skyline lit up at night, seen across the water",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "plan-your-trip.html", label: "Plan Your Trip" },
  ],
  eyebrowText: "Plan your trip",
  title: "Build a New York trip that works",
  lead: "The order you book things, the area you sleep in and the pace you accept decide more about a New York trip than any list of sights. Here is how to put the pieces together before you spend anything.",
  meta: metaItems("Booking order", "Where to stay", "Budget snapshot", "Airport basics"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Start with length")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">How long to stay</h2>
        <p class="lead">Three days is a long weekend: two Manhattan sightseeing days and one neighbourhood or Brooklyn morning. Five days is the length we recommend to almost everyone — enough for the icon sights, two museums, a full Brooklyn day and one proper night out.</p>
        <p class="muted">Seven days adds Queens food, the Bronx, Staten Island and a slow morning or two. The mistake to avoid is adding days without adding area: with three days, do not try to see all five boroughs; with seven, you can.</p>
        <div class="stats" style="margin-top:2rem">
          <div class="stat"><strong>3</strong><span>days · the icons</span></div>
          <div class="stat"><strong>5</strong><span>days · the full first trip</span></div>
          <div class="stat"><strong>7</strong><span>days · all five boroughs</span></div>
        </div>
        <div class="split__actions">
          ${btn({ href: "itineraries.html", label: "Compare the itineraries" })}
        </div>
      </div>
      <div class="split__media">
        <img src="${img("skyline-window-view.webp")}" alt="The Manhattan skyline seen from a hotel window at dusk" width="1000" height="750" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Booking order",
      title: "What to book, and when",
      lead: "Most of a New York trip can be decided at the last minute. Four things cannot. Work down this list in order.",
    })}
    ${table({
      caption: "Recommended booking order for a New York City trip",
      head: ["When", "Book", "Why it matters"],
      rows: [
        [
          "<strong>When dates are fixed</strong>",
          "Flights, then the hotel",
          "For Thanksgiving, Christmas and New Year, start four to six months ahead; the cheapest rooms and sensible flight times go first.",
        ],
        [
          "<strong>8–12 weeks before</strong>",
          "Broadway tickets",
          "Popular shows and weekend performances sell first. Same-day TKTS and rush tickets are a useful fallback, not a plan for a specific night.",
        ],
        [
          "<strong>2–4 weeks before</strong>",
          "Timed sights and sunset slots",
          "Observation decks, the Statue of Liberty ferry and any timed exhibition. Late-afternoon and sunset slots are the ones that disappear first.",
        ],
        [
          "<strong>1–2 weeks before</strong>",
          "The dinners that matter",
          "One or two reservations via Resy or OpenTable. Leave the other evenings open.",
        ],
        [
          "<strong>Same day</strong>",
          "TKTS, ferries, Citi Bike",
          "No booking needed. TKTS sells same-day Broadway seats at up to 50% off, and the Staten Island Ferry, Citi Bike and the subway are all walk-up.",
        ],
      ],
    })}
    ${callout({
      icon: "◷",
      title: "Book the area, not just the hotel",
      text: "A hotel is only as useful as the subway line nearest its door. Ten minutes from a station you need beats a nicer building twenty-five minutes from one. Read recent reviews for noise before comparing prices.",
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Where to stay",
      title: "Four bases, honestly compared",
      lead: "There is no single best neighbourhood — only the best one for your trip. These four cover most visits.",
    })}
    ${table({
      caption: "Comparison of New York neighbourhoods to stay in",
      head: ["Area", "What it feels like", "Best for", "Trade-offs"],
      rows: [
        [
          '<a href="manhattan.html"><strong>Midtown</strong></a>',
          "Icons, theatre, Grand Central and the most hotel choice in the city",
          "First visits, short trips, theatre nights",
          "Crowds and traffic by day; tourist-priced restaurants. The quietest blocks are east of Fifth Avenue.",
        ],
        [
          '<a href="manhattan.html"><strong>Greenwich Village &amp; SoHo</strong></a>',
          "Brownstones, jazz, cast-iron streets, independent shops",
          "Food, nightlife and walking downtown",
          "Smaller rooms and fewer big hotels; weekend nights can be loud.",
        ],
        [
          '<a href="manhattan.html"><strong>Upper West Side</strong></a>',
          "Central Park, the American Museum of Natural History, Lincoln Center, neighbourhood restaurants",
          "Families, calm evenings, park mornings",
          "Fifteen to twenty-five minutes from the downtown sights; fewer late-night options.",
        ],
        [
          '<a href="brooklyn.html"><strong>Brooklyn</strong></a>',
          "Space, food, waterfront and a slower pace — Brooklyn Heights, DUMBO, Williamsburg and Park Slope all differ",
          "Second visits, longer stays, better value",
          "Twenty to thirty-five minutes into Midtown. Check which line you are on before you book.",
        ],
      ],
    })}
    <div class="split" style="margin-top:clamp(2rem,5vw,4rem)">
      <div class="split__body">
        <h3>What a room costs, and what the tax adds</h3>
        <p>Quoted nightly rates move constantly with demand. As a rough guide, dorm beds run from around $60–120 a night, budget hotel rooms from around $180–280, mid-range rooms from around $300–500 and upscale rooms from around $600–1,200. All of these are before tax.</p>
        <p class="muted">New York adds roughly 14.75% hotel tax plus $3.50 per night, so a $400 room costs closer to $462. Confirm the all-in figure before you commit.</p>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Stay near a line you will use",
          text: "For a first trip that usually means the B, D, F, M, N, Q, R or W through Midtown, or the 1, 2, 3 on the west side. For Brooklyn, the A, C, F, 2, 3, 4, 5 and L cover most of the places you will want.",
        })}
        ${callout({
          icon: "☂",
          title: "Read the fine print",
          text: "Some cheaper rooms share a bathroom or sit above a bar. Neither is a problem if you know in advance. Filter by what you actually need rather than by star rating.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Budget snapshot",
          title: "What a day costs, before the hotel",
          lead: "Daily spending per person, excluding accommodation. Planning bands, not quotes; prices change.",
        })}
        ${table({
          caption: "Daily budget bands per person excluding accommodation",
          head: ["Style", "Per person, per day", "What it buys"],
          rows: [
            ["Budget", "$130–200", "Casual food, one paid sight, subway and the occasional coffee"],
            ["Mid-range", "$350–550", "Sit-down dinners, two sights a day, a show fund and a taxi when it rains"],
            ["Upscale", "$800–1,300+", "Fine dining, private tours, taxis and a better room than you planned"],
          ],
        })}
        <p class="muted" style="margin-top:1.2rem">Hotels sit on top of these figures. See the <a href="budget.html">budget guide</a> for the full breakdown, including taxes, tipping and a worked five-day example for two people.</p>
        ${btn({ href: "budget.html", label: "Open the budget guide", variant: "outline" })}
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "The three costs that decide everything",
          text: "Accommodation, food and tickets. Transport is cheap by international standards — around $36 a week per person on the subway — so do not let a $15 cab ride dominate your planning.",
        })}
        ${callout({
          icon: "☂",
          title: "Shoulder season is the discount",
          text: "Late January and early February are the cheapest weeks of the year for rooms and the quietest for museums. November, early December and the second half of April are the value sweet spots for weather versus price.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Sample trip shapes",
      title: "Three plans to steal from",
      lead: "Each plan is a day-by-day sequence with a reason for the order. Use one whole, or lift single days into your own trip.",
      action: btn({ href: "itineraries.html", label: "All itineraries", variant: "outline" }),
    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "3-days-in-nyc.html",
        image: img("fifth-avenue-cab.webp"),
        alt: "A yellow taxi on a Manhattan avenue",
        kicker: "Long weekend",
        title: "3 days in NYC",
        text: "Skyline, park, one neighbourhood and a Broadway night — nothing wasted on transit.",
        meta: "3 days · 4–6 stops a day",
      })}
      ${mediaCard({
        href: "5-days-in-nyc.html",
        image: img("times-square-night.webp"),
        alt: "Times Square at night",
        kicker: "Most popular",
        title: "5 days in NYC",
        text: "The complete first-timer trip: museums, a Brooklyn morning and one night out.",
        meta: "5 days · balanced pace",
      })}
      ${mediaCard({
        href: "7-days-in-nyc.html",
        image: img("brooklyn-bridge-sunset.webp"),
        alt: "The Brooklyn Bridge at sunset",
        kicker: "One week",
        title: "7 days in NYC",
        text: "All five boroughs, a Queens food crawl and the luxury of a slow morning.",
        meta: "7 days · flexible pace",
      })}
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Arriving",
      title: "Airport basics, in one glance",
      lead: "All three airports are manageable on public transport. Full details are in the getting-around guide.",
    })}
    ${table({
      caption: "Quick comparison of airport transfers to Manhattan",
      head: ["Airport", "Cheapest way in", "Time", "When to take a cab"],
      rows: [
        [
          '<a href="getting-around.html"><strong>JFK</strong></a>',
          "AirTrain + E subway, $11.75",
          "50–60 min",
          "Late arrival, heavy bags or three or more people — the flat fare is $70 plus tolls and tip",
        ],
        [
          '<a href="getting-around.html"><strong>LGA</strong></a>',
          "Free Q70 bus + subway, $3.00",
          "45–60 min",
          "Metered cab is around $35–55 plus extras, and often faster",
        ],
        [
          '<a href="getting-around.html"><strong>EWR</strong></a>',
          "AirTrain + NJ Transit, around $20–25",
          "30–45 min",
          "When the rail connection is disrupted; the Coach USA bus is around $18",
        ],
      ],
    })}
    <div style="margin-top:2rem">${btn({ href: "getting-around.html", label: "How to get around New York" })}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Planning questions we get a lot", lead: "" })}
    ${faq([
      {
        q: "How far ahead should I book a New York trip?",
        a: "<p>Book flights and the hotel as soon as your dates are fixed, and four to six months ahead for Thanksgiving, Christmas or New Year. Broadway and timed sights can wait until eight to twelve weeks out. Restaurant reservations open two to four weeks ahead for most places.</p>",
      },
      {
        q: "Should I stay in Manhattan or Brooklyn?",
        a: "<p>Manhattan is simpler for a first trip, especially Midtown or the Upper West Side. Brooklyn offers more space and better food for the money, at the cost of twenty to thirty-five minutes on the subway.</p>",
      },
      {
        q: "How much will the whole trip cost?",
        a: "<p>Use the daily bands above and add your hotel, flights and one or two big tickets. A mid-range five-day trip for two people, excluding flights, typically lands around $5,500–6,000 including a mid-range hotel and its tax.</p>",
      },
      {
        q: "Do I need to book restaurants?",
        a: "<p>Only the one or two dinners that would genuinely disappoint you if you missed them. Everything else is easier to decide the day before, and New York's best meals are often the ones you did not plan.</p>",
      },
      {
        q: "Is a sightseeing pass worth it?",
        a: "<p>It depends on how many paid attractions you will actually visit. Five or more in a short trip is where a pass starts to win; two or three is usually cheaper bought separately.</p>",
      },
      {
        q: "What should I do on arrival day?",
        a: "<p>Keep it light. Check in, leave the bags, walk your neighbourhood and eat somewhere close. Save the first big sight for the first full day, when a delayed flight can no longer break the plan.</p>",
      },
    ])}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Go deeper",
      title: "The guides that do the detail",
      lead: "Once the framework is set, these are the pages that answer the specific questions — where to sleep, what to book, and what is worth a day out of the city.",
    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "where-to-stay.html",
        image: img("skyline-window-view.webp"),
        alt: "The Manhattan skyline seen through a hotel window at night",
        kicker: "Accommodation",
        title: "Where to stay in NYC",
        text: "Eleven bases compared: who each area suits, price bands, subway lines and the hotel-tax surprise.",
        meta: "10 min read",
      })}
      ${mediaCard({
        href: "day-trips.html",
        image: img("philadelphia-skyline.webp"),
        alt: "The Philadelphia skyline seen from the Amtrak approach",
        kicker: "Out of town",
        title: "Day trips from New York",
        text: "Philadelphia, Washington, Boston, Niagara Falls and the Hudson Valley — with honest verdicts on what fits in a day.",
        meta: "5 guides",
      })}
      ${mediaCard({
        href: "map.html",
        image: img("midtown-aerial-night.webp"),
        alt: "Aerial view of Midtown Manhattan at night",
        kicker: "Planning tool",
        title: "The interactive map",
        text: "Every attraction, cheap food spot and neighbourhood on one map, filterable by category.",
        meta: "60+ pins",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Getting here",
      title: "Choose the right airport",
      lead: "The airport you fly into changes your transfer cost and your first hour in the city.",
      action: `<a class="link-arrow" href="which-nyc-airport.html">Compare the airports</a>`,
    })}
    <div class="grid grid--2">
      ${mediaCard({ href: "which-nyc-airport.html", image: img("skyline-window-view.webp"), alt: "The Manhattan skyline seen through a window", kicker: "Arrivals", title: "JFK vs Newark vs LaGuardia", text: "Transfer costs, times and which airport suits which hotel.", meta: "Practical guide" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "The planning checklist, by email",
      text: "Join the list and we will send the one-page booking checklist, plus one useful New York email a week.",
      source: "plan-your-trip",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Get the practical details right",
  text: "Transit, money and timing — the three things that decide whether a good plan actually works on the ground.",
  actions: `${btn({ href: "getting-around.html", label: "Getting around" })}${btn({
    href: "budget.html",
    label: "Budget guide",
    variant: "outline",
  })}`,
})}
`,
};
