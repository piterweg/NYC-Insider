import {
  btn,
  sectionHead,
  pageHero,
  card,
  callout,
  table,
  faq,
  newsletter,
  ctaBand,
  pageNav,
  img,
  metaItems,
  eyebrow,
  verifiedNote,
} from "../components.mjs";

const officialLink = (href, label) =>
  `<a href="${href}" rel="nofollow noopener" target="_blank">${label}</a>`;

export default {
  path: "which-nyc-airport.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "JFK vs Newark vs LaGuardia: Which NYC Airport?",
  description:
    "How New York's three airports compare: distance to Midtown, airlines, AirTrain and subway costs, taxi times and which one to choose for your trip.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "JFK vs Newark vs LaGuardia: Which New York Airport Should You Fly Into?",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which New York airport is closest to Manhattan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LaGuardia is the closest, roughly 8 miles (13 km) east of Midtown. JFK is about 15 miles (24 km) southeast and Newark is about 16 miles (26 km) southwest, across the Hudson in New Jersey.",
          },
        },
        {
          "@type": "Question",
          name: "Which airport is cheapest to reach Manhattan from?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LaGuardia, on public transport: the Q70 bus is free and the subway fare is $3.00. JFK costs $11.75 by AirTrain and subway, and Newark costs around $20–25 by AirTrain and NJ Transit.",
          },
        },
        {
          "@type": "Question",
          name: "Can I fly into LaGuardia from Europe or Asia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not on long-haul intercontinental flights. For Europe, Asia and most other long-haul routes, use JFK or Newark. LaGuardia handles domestic and short-haul flights.",
          },
        },
        {
          "@type": "Question",
          name: "Which airport is best for a late-night arrival?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "JFK is usually the most forgiving. Its AirTrain runs 24 hours, the subway runs overnight, and there is a staffed taxi rank. Newark and LaGuardia transfers thin out overnight, so budget for a cab or pre-booked rideshare.",
          },
        },
        {
          "@type": "Question",
          name: "Should I fly into Newark if I am staying in Manhattan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can work well, especially for Penn Station, the west side and Lower Manhattan. AirTrain plus NJ Transit reaches Penn Station in about 30–45 minutes for around $20–25. Check the overnight service before booking a very late flight.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen from a hotel window at dusk",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "plan-your-trip.html", label: "Plan Your Trip" },
    { href: "which-nyc-airport.html", label: "Which Airport" },
  ],
  eyebrowText: "Airports",
  title: "Which New York airport should you fly into?",
  lead: "JFK, Newark and LaGuardia all work, but they are not interchangeable. The right choice depends on where you sleep, when you land and what you will spend on the transfer.",
  meta: metaItems("3 airports compared", "Transfer costs checked", "Times to Midtown", "November 2026"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("The short answer")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Start with your hotel, not the airport</h2>
        <p class="lead">For most first trips, take the flight that suits your dates and budget into any of the three. Midtown is served from all of them, and journey time matters less than where you sleep.</p>
        <p class="muted">If you have a choice: JFK for long-haul and late arrivals, Newark for United and the west side, LaGuardia for domestic flights and Midtown.</p>
      </div>
      <div class="split__media">
        <img src="${img("times-square-day.webp")}" alt="Times Square in daylight, with billboards and crowds of pedestrians" width="1000" height="688" loading="lazy" />
      </div>
    </div>
    ${verifiedNote({ scope: "Transfer fares, journey times and airport options" })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The comparison",
      title: "JFK, Newark and LaGuardia, side by side",
      lead: "Distances are approximate; times are typical and move with traffic.",
    })}
    ${table({
      caption: "Comparison of New York's three airports: distance, airlines, public transport, taxis and best use",
      head: ["Airport", "Distance to Midtown", "Main airlines", "Public transport and cost", "Taxi or rideshare", "Best for"],
      rows: [
        [
          "<strong>JFK</strong>",
          "About 15 mi (24 km) southeast",
          "Long-haul carriers, Delta, JetBlue, American",
          "AirTrain + E subway $11.75, 50–60 min. AirTrain + LIRR $14 off-peak / $16 peak, 30–40 min. AirTrain runs 24 hours.",
          "Yellow cab $70 flat plus tolls and tip (around $90–110), 45–75 min",
          "Long-haul flights and late arrivals",
        ],
        [
          "<strong>Newark (EWR)</strong>",
          "About 16 mi (26 km) southwest, in New Jersey",
          "United's hub plus international carriers",
          "AirTrain + NJ Transit around $20–25 to Penn Station, 30–45 min. Coach USA bus around $18.",
          "Metered cab or rideshare — confirm the fare first",
          "United flights and the west side",
        ],
        [
          "<strong>LaGuardia (LGA)</strong>",
          "About 8 mi (13 km) east",
          "Domestic and short-haul: Delta and American",
          "Free Q70 bus + subway $3.00, 45–60 min. No rail link.",
          "Metered cab around $35–55 plus extras, 25–45 min",
          "Domestic flights and a Midtown hotel",
        ],
      ],
    })}
    <p class="muted" style="margin-top:1.2rem">Fares are one-way per person and change; check current fares. Times assume normal traffic.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "How to choose",
      title: "Four decisions that settle it",
      lead: "Weigh these in order. The first that matters to you usually decides it.",
    })}
    <div class="grid grid--2">
      ${card({
        kicker: "Lowest transfer cost",
        title: "LaGuardia wins on paper",
        text: "The Q70 bus is free and the subway is $3.00. JFK is $11.75 by AirTrain and subway; Newark around $20–25. The gap matters for a family.",
      })}
      ${card({
        kicker: "Time to Midtown",
        title: "LaGuardia by cab, JFK by LIRR",
        text: "A LaGuardia cab is typically 25–45 minutes. JFK's AirTrain plus LIRR reaches Penn Station in 30–40 minutes; Newark's rail link takes 30–45. All are slower at rush hour.",
      })}
      ${card({
        kicker: "Long-haul flights",
        title: "JFK or Newark",
        text: "For Europe, Asia and other long-haul routes, choose JFK or Newark. LaGuardia handles domestic and short-haul flights.",
      })}
      ${card({
        kicker: "Late or early flights",
        title: "JFK is the most forgiving",
        text: "The JFK AirTrain runs 24 hours and the subway runs overnight. Newark and LaGuardia transfers thin out overnight, so plan a cab or pre-booked rideshare.",
      })}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Step by step",
      title: "How to get from each airport to Manhattan",
      lead: "Use the transfer that matches your budget and luggage. Pay contactless on the subway and buses.",
    })}
    <div class="prose">
      <h3>JFK — AirTrain, subway or the LIRR</h3>
      <ol>
        <li>Follow the AirTrain signs from your terminal. The AirTrain is $8.75 and connects all terminals with Jamaica and Howard Beach.</li>
        <li>Get off at Jamaica for the E, J and Z subway lines and the LIRR, or at Howard Beach for the A train.</li>
        <li>From Jamaica, take the E into Midtown: the $3.00 subway fare makes the total $11.75, and the journey takes 50–60 minutes.</li>
        <li>For Penn Station, take the LIRR instead: AirTrain and LIRR together cost $14 off-peak and $16 at peak, in 30–40 minutes.</li>
      </ol>

      <h3>Newark — AirTrain and NJ Transit</h3>
      <ol>
        <li>Take the AirTrain from your terminal to Newark Airport station.</li>
        <li>Continue on NJ Transit to New York Penn Station. AirTrain and train together cost around $20–25 and take 30–45 minutes.</li>
        <li>The Coach USA bus is an alternative at around $18, useful when the rail line is disrupted.</li>
        <li>Check the timetable before a late arrival: service thins out overnight.</li>
      </ol>

      <h3>LaGuardia — free bus, then subway</h3>
      <ol>
        <li>There is no rail link. Take the free Q70 bus from outside the terminal.</li>
        <li>The Q70 connects with the subway in Jackson Heights, where several lines continue into Manhattan.</li>
        <li>Pay the $3.00 subway fare with a contactless card or phone; the bus itself is free. Allow 45–60 minutes.</li>
        <li>A metered cab is around $35–55 plus tolls and tip and takes 25–45 minutes.</li>
      </ol>
      <p class="small muted">Official information: ${officialLink("https://www.jfkairport.com/", "JFK")}, ${officialLink("https://www.newarkairport.com/", "Newark")}, ${officialLink("https://www.laguardiaairport.com/", "LaGuardia")}, ${officialLink("https://www.mta.info/fares-tolls", "MTA fares")}, ${officialLink("https://www.mta.info/agency/long-island-rail-road", "LIRR")} and ${officialLink("https://www.njtransit.com/", "NJ Transit")}.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Timing",
          title: "Late landings and early departures",
          lead: "The transfer is the part most likely to go wrong when trains are quiet or roads are empty.",
        })}
        <p class="muted">JFK is easiest after midnight: the AirTrain and subway run all night, though some lines run less often. At Newark, NJ Transit and the Coach USA bus thin out overnight; at LaGuardia the Q70 is the only public option, so take a cab late at night.</p>
        <p class="muted">For an early flight, work back from the airline's check-in cut-off, not the departure time. Pre-book a cab if the first train leaves too little margin.</p>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "One flat fare worth knowing",
          text: "JFK's yellow cab is $70 to Manhattan plus tolls and tip — the only published flat fare of the three. It can be good value for two or more people with luggage.",
        })}
        ${callout({
          icon: "☂",
          title: "Luggage and strollers",
          text: "All three airports have lifts, but the subway does not: only about 150 of 472 stations are step-free, so check the MTA accessible list before choosing a route. Every bus is wheelchair-accessible and has stroller room. Hotel bell desks often hold bags free if you land before check-in.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Airport questions", lead: "" })}
    ${faq([
      {
        q: "Which New York airport is closest to Manhattan?",
        a: "<p>LaGuardia, at roughly 8 miles (13 km) east of Midtown. JFK is about 15 miles (24 km) southeast and Newark about 16 miles (26 km) southwest, across the Hudson.</p>",
      },
      {
        q: "Which airport is cheapest to reach Manhattan from?",
        a: "<p>LaGuardia: the Q70 bus is free and the subway is $3.00. JFK is $11.75 by AirTrain and subway; Newark around $20–25 by AirTrain and NJ Transit.</p>",
      },
      {
        q: "Can I fly into LaGuardia from Europe or Asia?",
        a: "<p>Not on long-haul intercontinental flights. For Europe, Asia and other long-haul routes, use JFK or Newark; LaGuardia is domestic and short-haul.</p>",
      },
      {
        q: "Which airport is best for a late-night arrival?",
        a: "<p>JFK is usually the most forgiving: the AirTrain runs 24 hours, the subway runs overnight and there is a staffed taxi rank. Newark and LaGuardia transfers thin out overnight.</p>",
      },
      {
        q: "Should I fly into Newark if I am staying in Manhattan?",
        a: "<p>It can work well, especially for Penn Station and the west side: AirTrain plus NJ Transit reaches Penn in 30–45 minutes for around $20–25. Check overnight service before a late flight.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Keep going",
      title: "Where to next",
      lead: "Once the airport is settled, these pages answer the next questions.",
    })}
    <div class="grid grid--4">
      ${card({
        kicker: "Transit",
        title: '<a href="getting-around.html">Getting around New York</a>',
        text: "Subway fares, OMNY capping, taxis, PATH, ferries and step-free travel in one place.",
        foot: '<a class="link-arrow" href="getting-around.html">Read the guide</a>',
      })}
      ${card({
        kicker: "Accommodation",
        title: '<a href="where-to-stay.html">Where to stay in NYC</a>',
        text: "Eleven areas compared by price, subway access and who each one suits.",
        foot: '<a class="link-arrow" href="where-to-stay.html">Compare areas</a>',
      })}
      ${card({
        kicker: "Planning",
        title: '<a href="plan-your-trip.html">Plan your trip</a>',
        text: "Booking order, how long to stay and the framework for the visit.",
        foot: '<a class="link-arrow" href="plan-your-trip.html">Start planning</a>',
      })}
      ${card({
        kicker: "Money",
        title: '<a href="budget.html">Budget guide</a>',
        text: "Daily bands, hotel taxes, tipping and a worked five-day example.",
        foot: '<a class="link-arrow" href="budget.html">See the numbers</a>',
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Land, then get moving",
      text: "Join for a weekly note on New York transport, fares and practical advice.",
      source: "which-nyc-airport",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Sort the transfer before you book the flight",
  text: "A cheap fare can cost more once the transfer is added. Compare the whole journey, not the ticket.",
  actions: `${btn({ href: "getting-around.html", label: "Getting around" })}${btn({
    href: "plan-your-trip.html",
    label: "Plan your trip",
    variant: "outline",
  })}`,
})}

${pageNav({
  prev: { href: "plan-your-trip.html", label: "Plan your trip" },
  next: { href: "getting-around.html", label: "Getting around" },
})}
`,
};
