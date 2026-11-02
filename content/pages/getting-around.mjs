import {
  btn,
  sectionHead,
  pageHero,
  card,
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
  path: "getting-around.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Getting Around New York City — Airports, Subway, Taxis",
  description:
    "How to get around New York City: JFK, LGA and EWR transfers, subway fares and OMNY fare capping, taxis, PATH, ferries, Citi Bike and step-free access.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/subway-train.webp",
  breadcrumbs: [
    { href: "index.html", label: "Home" },
    { href: "getting-around.html", label: "Getting Around" },
  ],
  render: () => `
${pageHero({
  image: img("subway-train.webp"),
  alt: "A New York City subway train arriving at a platform",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "getting-around.html", label: "Getting Around" },
  ],
  eyebrowText: "Getting around",
  title: "How New York actually moves",
  lead: "New York is a walking city with a very good train set underneath it. Once you understand the airport transfer, the fare cap and when a taxi is worth it, the city becomes much smaller.",  meta: metaItems("Airports", "Subway &amp; OMNY", "Taxis &amp; ferries", "Accessibility"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "From the airport",
      title: "JFK, LGA and EWR to Manhattan",
      lead: "None of the three airports has a one-seat train to Midtown, but all are straightforward. Costs are one-way per person.",
    })}
    ${table({
      caption: "Airport transfer options and costs to Manhattan",
      head: ["Airport", "Option", "Cost", "Time", "Notes"],
      rows: [
        [
          "<strong>JFK</strong>",
          "AirTrain + E subway",
          "$11.75",
          "50–60 min",
          "Cheapest reliable route. AirTrain is $8.75, the subway fare $3.00; runs 24/7.",
        ],
        [
          "<strong>JFK</strong>",
          "AirTrain + LIRR",
          "$14 off-peak / $16 peak",
          "30–40 min",
          "Fastest to Penn Station; check the timetable first.",
        ],
        [
          "<strong>JFK</strong>",
          "Yellow cab",
          "$70 flat + tolls and tip",
          "45–75 min",
          "Around $90–110 all in. No surge pricing; join the taxi rank outside arrivals.",
        ],
        [
          "<strong>LGA</strong>",
          "Free Q70 bus + subway",
          "$3.00",
          "45–60 min",
          "No rail link. The bus is free; you pay only the subway fare.",
        ],
        [
          "<strong>LGA</strong>",
          "Metered cab",
          "Around $35–55 + extras",
          "25–45 min",
          "Often the fastest option once you are in the cab.",
        ],
        [
          "<strong>EWR</strong>",
          "AirTrain + NJ Transit",
          "Around $20–25",
          "30–45 min",
          "Runs to Penn Station; the most predictable route from Newark.",
        ],
        [
          "<strong>EWR</strong>",
          "Coach USA bus",
          "Around $18",
          "40–60 min",
          "To Port Authority; useful if the rail connection is disrupted.",
        ],
      ],
    })}
    ${callout({
      icon: "◷",
      title: "Allow more time than you think",
      text: "The transfer is rarely the problem; traffic on the last two miles is. For a flight, leave three hours for an international departure and two for domestic, plus the transfer time.",
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Subway &amp; OMNY")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">The subway, and how to pay for it</h2>
        <p class="lead">The subway runs 24 hours a day and reaches everywhere a visitor is likely to go. It is also the cheapest part of a New York trip by a wide margin.</p>
        <p>The base fare is <strong>$3.00</strong> for the subway and local buses (from 4 January 2026), with a reduced fare of $1.50 for eligible riders; express buses cost $7.25. Pay by tapping a contactless card, phone or watch on the turnstile reader, or use an OMNY card ($1 introductory fee) from a vending machine.</p>
        <p class="muted">Fare capping is the part most visitors miss. Tap the same card every time and after 12 fares in any rolling seven days, further rides are free — about <strong>$36 a week</strong>, or $67 including express buses; the reduced-fare cap is $17.50. MetroCard sales and refills ended on 1 January 2026, and existing cards are accepted into 2026 only until the MTA announces a cut-off. Do not plan around buying one.</p>
      </div>
      <div>
        ${table({
          caption: "New York subway and OMNY fares from January 2026",
          head: ["Fare", "Price", "Notes"],
          rows: [
            ["Subway and local bus", "$3.00", "Reduced fare $1.50"],
            ["Express bus", "$7.25", "Capped separately"],
            ["OMNY single-ride ticket", "$3.50", "2-hour validity, no subway-to-bus transfer"],
            ["Weekly fare cap", "Around $36", "12 fares in a rolling 7 days, then free"],
            ["Cap including express bus", "$67", "Same card or device throughout"],
            ["OMNY card", "$1 introductory fee", "Load at station vending machines"],
          ],
        })}
      </div>
    </div>
    <div class="grid grid--2" style="margin-top:clamp(2rem,5vw,3.5rem);align-items:start">
      <div>
        <h3 style="margin-bottom:1rem">Tapping in, step by step</h3>
        <ul class="feature-list">
          <li><span class="feature-list__num">01</span><div><h4>Use one card per rider</h4><p>Each person taps their own card or device. One card cannot tap two people through, and sharing breaks the fare cap.</p></div></li>
          <li><span class="feature-list__num">02</span><div><h4>Tap, wait for the green light</h4><p>Hold the card flat on the reader on top of the turnstile until it beeps and shows green, then push through.</p></div></li>
          <li><span class="feature-list__num">03</span><div><h4>Tap on buses at the front</h4><p>Board at the front and tap the reader beside the driver.</p></div></li>
          <li><span class="feature-list__num">04</span><div><h4>Keep the same card all week</h4><p>The cap follows the card, not the person or the trip.</p></div></li>
        </ul>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Which card is cheapest?",
          text: "A contactless bank card usually avoids foreign transaction fees and hits the weekly cap automatically. Some prepaid travel cards charge per tap, so check first.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__body" data-reveal>
        ${eyebrow("Taxis &amp; rideshare")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">When a cab is worth it</h2>
        <p>Yellow cabs are metered, plentiful in Midtown and easy to flag. From JFK the fare is a flat <strong>$70</strong> plus tolls and tip — around $90–110 in total. From LaGuardia a metered cab is around $35–55 plus extras; tips run 15–20%.</p>
        <p class="muted">Congestion pricing adds $0.75 to each yellow-cab trip and $1.50 to each rideshare trip that enters Manhattan south of 60th Street. Rideshare prices surge; a yellow cab does not, so when the app quotes double, walk to the nearest rank. Late at night a cab is often the sensible choice for a group.</p>
        <p class="muted">Use the Curb app to order a yellow cab, or Uber and Lyft for rideshare. At airports, follow signs to the designated pickup area rather than accepting a ride from someone who approaches you inside the terminal.</p>
        <div class="split__actions">
          ${btn({ href: "budget.html", label: "What transport costs", variant: "outline" })}
        </div>
      </div>
      <div class="split__media">
        <img src="${img("fifth-avenue-cab.webp")}" alt="A yellow taxi driving along a Manhattan avenue" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Across the water",
      title: "PATH, ferries and Citi Bike",
      lead: "Three alternatives that are sometimes faster than the subway and always more interesting.",
    })}
    <div class="grid grid--3">
      ${card({
        kicker: "New Jersey",
        title: "PATH",
        text: "A separate train system linking Lower Manhattan and Midtown with Hoboken, Jersey City and Newark. The fare is $3.25 from 4 May 2026, or $3.10 a ride in a 10-trip bundle. It does not accept OMNY.",
        foot: '<span class="link-arrow">Check the PATH app for service changes</span>',      })}
      ${card({
        kicker: "Ferries",
        title: "Staten Island and NYC Ferry",
        text: "The Staten Island Ferry is free, runs 24 hours and takes about 25 minutes each way, roughly every 30 minutes — and gives you the best free view of the Statue of Liberty. NYC Ferry costs $5.00 one way (from 19 October 2026) and runs along the East River to Brooklyn, Queens and the Bronx.",
        foot: '<a class="link-arrow" href="staten-island.html">Explore Staten Island</a>',
      })}
      ${card({
        kicker: "Bikes",
        title: "Citi Bike",
        text: "A docked bike share across Manhattan, Brooklyn and Queens. A single ride is $4.99 per 30 minutes, a day pass $25, an annual membership $239. Use the app to find a dock, and allow extra time at waterfront stations in the evening.",
        foot: '<span class="link-arrow">Helmets are not provided</span>',
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Accessibility",
          title: "Step-free travel takes planning",
          lead: "Only about 150 of the subway's 472 stations are step-free. Buses are the reliable alternative — every one is wheelchair-accessible.",
        })}
        <p class="muted">Step-free stations include Times Square–42 Street, Grand Central, Fulton Street, Atlantic Avenue–Barclays Center, Flushing–Main Street, 161 Street–Yankee Stadium and Coney Island–Stillwell Avenue. For anything else, plan the route in the MTA app, which shows step-free paths and live lift status, and be ready to switch to a bus if a lift is out.</p>
        <p class="muted">Allow extra time and check the lift status on the morning you travel. Access-A-Ride paratransit serves eligible riders but must be arranged in advance.</p>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Ask for help",
          text: "Station agents can open the wide gate and direct you to the lift; bus drivers lower the ramp. New Yorkers are used to giving directions.",
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
          eyebrowText: "Apps and street sense",
          title: "What to install before you land",
          lead: "A handful of apps covers almost everything, and much of the city has free WiFi.",
        })}
        <ul class="feature-list">
          <li><span class="feature-list__num">01</span><div><h4>MTA and Citymapper</h4><p>Live subway status, service changes and step-free routes; Citymapper is better for walking and transit directions.</p></div></li>
          <li><span class="feature-list__num">02</span><div><h4>Transit and NYC Ferry</h4><p>Real-time arrivals for subway, bus and ferry. The NYC Ferry app includes timetables and tickets.</p></div></li>
          <li><span class="feature-list__num">03</span><div><h4>TKTS, TodayTix, Resy and OpenTable</h4><p>Same-day theatre seats, restaurant reservations and last-minute tables.</p></div></li>
          <li><span class="feature-list__num">04</span><div><h4>Curb, Uber and Lyft</h4><p>Order a yellow cab or a rideshare.</p></div></li>
        </ul>
        <p class="muted" style="margin-top:1.2rem">LinkNYC kiosks provide free WiFi on many streets, and there is free WiFi on subway platforms and in public libraries.</p>
      </div>
      <div>
        ${callout({
          icon: "☂",
          title: "Safety at night",
          text: "New York is statistically one of the safest large cities in the United States. Keep your phone out of sight on crowded platforms, watch for pickpockets in Times Square and on packed trains, and ignore anyone selling Statue of Liberty tickets on the street.",
        })}
        ${callout({
          icon: "◆",
          title: "Late-night rules of thumb",
          text: "Stick to busy, lit streets, wait near other people, and use a cab if you are unsure of the route. 911 is for emergencies; 311 for everything else.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Getting-around questions", lead: "" })}
    ${faq([
      {
        q: "Can I use a contactless bank card on the subway?",
        a: "<p>Yes. Tap a contactless credit or debit card, phone or watch at any turnstile. Use the same one all week to reach the fare cap. Check whether your bank charges foreign transaction fees, as a few percent per tap adds up.</p>",
      },
      {
        q: "Do I still need a MetroCard?",
        a: "<p>No. Sales and refills ended on 1 January 2026; existing cards are accepted into 2026 only until the MTA announces a cut-off. Use contactless payment or an OMNY card.</p>",
      },
      {
        q: "What is the cheapest way from JFK to Manhattan?",
        a: "<p>AirTrain plus the E subway: $11.75 in total and 50–60 minutes to Midtown. For Penn Station, AirTrain plus the LIRR is faster at $14 off-peak and $16 peak.</p>",
      },
      {
        q: "How do I get to Staten Island?",
        a: "<p>The Staten Island Ferry from Whitehall Terminal in Lower Manhattan is free, runs 24 hours and takes about 25 minutes each way, roughly every 30 minutes.</p>",
      },
    ])}
  </div>
</section>
<section class="section">
  <div class="container">
    ${newsletter({
      title: "Transit changes, without the noise",
      text: "Join the list for a short weekly note on what is actually changing in New York — closures, new fares, and the things worth knowing before you arrive.",
      source: "getting-around",
    })}
  </div>
</section>

${pageNav({
  prev: { href: "plan-your-trip.html", label: "Plan your trip" },
  next: { href: "budget.html", label: "Budget guide" },
})}
`,
};
