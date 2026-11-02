import {
  btn,
  sectionHead,
  pageHero,
  card,
  mediaCard,
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
  path: "day-trips.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Day Trips from New York City Compared",
  description:
    "Six day trips from New York compared: Philadelphia, Washington, Boston, Niagara Falls, the Hudson Valley and Atlantic City, with train times, fares and verdicts.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Day Trips from New York City — Compared",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best day trip from New York City?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Philadelphia. It is the shortest journey of the five main trips — about an hour and a quarter on Amtrak — and the historic sights are compact enough to see in one day. The Hudson Valley is the other genuinely easy day trip, on Metro-North from Grand Central.",
          },
        },
        {
          "@type": "Question",
          name: "Can you visit Washington, D.C. as a day trip from New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is possible, but rushed. Amtrak takes about three hours each way, leaving roughly five or six hours in the city. If you want the Capitol, a museum and the memorials without hurrying, stay a night.",
          },
        },
        {
          "@type": "Question",
          name: "Do you need a car for these day trips?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. All five are reachable by train or bus: Amtrak to Philadelphia, Washington, Boston and Niagara Falls, Metro-North to the Hudson Valley, and an NJ Transit bus to Atlantic City. The only local ride you may need is a taxi or shuttle from Beacon to Storm King Art Center.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("manhattan-skyline.webp"),
  alt: "The Brooklyn Bridge crossing the East River with Lower Manhattan behind it",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "plan-your-trip.html", label: "Plan Your Trip" },
    { href: "day-trips.html", label: "Day Trips" },
  ],
  eyebrowText: "Day trips",
  title: "Day trips from New York",
  lead: "Six trips, one rule: the good ones are under two hours each way. Here is what each costs, how long it really takes, and which deserve a night away instead of a return ticket.",
  meta: metaItems("6 trips compared", "Train-first", "Fares checked November 2026", "Day trip or overnight"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Start here")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Two hours is the line</h2>
        <p class="lead">A day trip works when the journey is under about two hours each way. Between two and four hours it becomes a long day with an early start. Beyond four hours you are not taking a day trip any more — you are taking an overnight and calling it one.</p>
        <p class="muted">That single rule sorts this list quickly. Philadelphia and the Hudson Valley are easy days out that leave you an evening in New York. Washington is possible if you leave early and accept that you will see a fraction of it. Boston, Niagara Falls and Atlantic City are better with a night — Niagara Falls needs one, since the train runs once a day.</p>
        <p class="muted">Fares below are adult round trips checked on 2 November 2026. Amtrak prices are dynamic and rise as trains fill, so book ahead where you can and treat every figure as an estimate.</p>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "The cheapest fares go first",
          text: "Amtrak sells in buckets: the lowest fares on a given train disappear first, and walk-up prices can be several times the advance price. For Philadelphia, the NJ Transit and SEPTA combination is slower but far cheaper.",
        })}
        ${callout({
          icon: "◷",
          title: "Count the hours you get there",
          text: "A three-hour train each way leaves five or six usable hours in a city, minus the walk from the station. Plan Washington and Boston around what you can genuinely see, not around what is on the map.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The comparison",
      title: "Six trips, in one glance",
      lead: "Journey times and round-trip fares are for the fastest sensible option. Verdicts assume you are leaving after breakfast and want to be back the same night.",
    })}
    ${table({
      caption: "Comparison of day trips from New York City with journey times, round-trip fares, verdicts and best days",
      head: ["Trip", "Journey", "Round trip", "Day-trip verdict", "Best day"],
      rows: [
        [
          '<a href="philadelphia.html"><strong>Philadelphia</strong></a>',
          "Amtrak 1 h 05–1 h 25; NJ Transit + SEPTA about 2 h 15",
          "$40–$150 by Amtrak; about $50 by NJ Transit + SEPTA",
          "Yes — easy",
          "Tue–Thu or Sat",
        ],
        [
          '<a href="washington-dc.html"><strong>Washington, D.C.</strong></a>',
          "Amtrak 2 h 50–3 h 20; Acela 2 h 45",
          "$80–$250; Acela $200–$400",
          "Possible but rushed — overnight better",
          "Weekday",
        ],
        [
          '<a href="boston.html"><strong>Boston</strong></a>',
          "Amtrak 3 h 40–4 h 15; Acela 3 h 30",
          "$80–$250",
          "Not really — about eight hours of travel",
          "Fri–Sun",
        ],
        [
          '<a href="niagara-falls.html"><strong>Niagara Falls</strong></a>',
          "Amtrak Maple Leaf about 9 h, once daily",
          "$140–$300",
          "No — overnight required",
          "Summer and early autumn",
        ],
        [
          '<a href="hudson-valley.html"><strong>Hudson Valley</strong></a>',
          "Metro-North to Beacon 1 h 20–1 h 30",
          "About $35–$55; check current fares",
          "Yes — easy",
          "Weekday or Saturday",
        ],
        [
          "<strong>Atlantic City</strong><br><span class=\"muted\">long-day option</span>",
          "NJ Transit bus 2 h 20–2 h 45",
          "About $40–$45",
          "A long day — overnight better",
          "Weekday",
        ],
      ],
    })}
    <p class="small muted" style="margin-top:1rem">Atlantic City by rail requires a transfer in Philadelphia, which makes the bus the sensible option from New York. Round-trip figures are approximate adult fares and do not include local transport at the other end — check current fares and schedules before you book.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The guides",
      title: "The five trips worth planning",
      lead: "Each guide has the transport options, a realistic hourly plan, the sights that justify the journey and the best day to go.",
      action: btn({ href: "philadelphia.html", label: "Start with Philadelphia", variant: "outline" }),
    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "philadelphia.html",
        image: img("philadelphia-skyline.webp"),
        alt: "The Philadelphia skyline at sunset, seen from the train across the Schuylkill River",
        kicker: "Day trip",
        title: "Philadelphia",
        text: "Independence Hall, the Liberty Bell, Reading Terminal Market and the Rocky Steps — the easiest day out of New York.",
        meta: "Amtrak 1 h 05 · from $40 round trip",
      })}
      ${mediaCard({
        href: "washington-dc.html",
        image: img("washington-capitol.webp"),
        alt: "The United States Capitol on a clear day",
        kicker: "Long day or overnight",
        title: "Washington, D.C.",
        text: "The National Mall, the Capitol, the Smithsonian museums and Georgetown. See it in a day, or see it properly with a night.",
        meta: "Amtrak 2 h 50 · from $80 round trip",
      })}
      ${mediaCard({
        href: "boston.html",
        image: img("boston-skyline.webp"),
        alt: "The Boston skyline at dusk, reflected in the Charles River",
        kicker: "Overnight",
        title: "Boston",
        text: "The Freedom Trail, Beacon Hill, the Public Garden and the North End, best done without a return ticket the same night.",
        meta: "Amtrak 3 h 40 · from $80 round trip",
      })}
      ${mediaCard({
        href: "niagara-falls.html",
        image: img("niagara-falls.webp"),
        alt: "The American Falls and Horseshoe Falls at Niagara, with a tour boat on the river",
        kicker: "Overnight",
        title: "Niagara Falls",
        text: "The falls, Maid of the Mist and the Canadian side, nine hours and one train a day from Penn Station.",
        meta: "Amtrak 9 h · from $140 round trip",
      })}
      ${mediaCard({
        href: "hudson-valley.html",
        image: img("hudson-valley.webp"),
        alt: "Trees reflected in a pond in the Hudson Valley",
        kicker: "Day trip",
        title: "Hudson Valley",
        text: "Dia Beacon, Storm King Art Center and the riverside villages, eighty minutes from Grand Central.",
        meta: "Metro-North 1 h 20 · about $35–$55 round trip",
      })}
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Booking",
          title: "Four ways to leave the city",
          lead: "Almost every trip on this page is a train, a bus or a combination of the two. None needs a car.",
        })}
        ${table({
          caption: "Where to catch each service from New York",
          head: ["Service", "Leaves from", "Use it for"],
          rows: [
            ["<strong>Amtrak</strong>", "Moynihan Train Hall at Penn Station", "Philadelphia, Washington, Boston, Niagara Falls"],
            ["<strong>NJ Transit + SEPTA</strong>", "Penn Station, then Trenton", "The cheap route to Philadelphia"],
            ["<strong>Metro-North Hudson Line</strong>", "Grand Central Terminal", "Beacon, Cold Spring and the Hudson Valley"],
            ["<strong>NJ Transit bus</strong>", "Port Authority Bus Terminal", "Atlantic City"],
          ],
        })}
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Book Amtrak early, not on the day",
          text: "Advance fares are materially lower on all four Amtrak routes, and the cheapest buckets sell out first. Check current fares and schedules when your dates are fixed rather than assuming the price you saw last month still exists.",
          dark: true,
        })}
        ${callout({
          icon: "◷",
          title: "Metro-North needs no reservation",
          text: "Hudson Line trains run through the day and you can turn up and buy a ticket. Peak and off-peak fares differ, so check the current timetable before choosing a departure.",
          dark: true,
        })}
        ${callout({
          icon: "☂",
          title: "Leave the return train some slack",
          text: "Build in half an hour at the station, especially at Penn Station and Union Station. Missing the last sensible train turns a day trip into an unplanned overnight.",
          dark: true,
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Day-trip questions", lead: "" })}
    ${faq([
      {
        q: "What is the best day trip from New York?",
        a: "<p>Philadelphia, for the combination of a short journey, a walkable historic core and good food. Our <a href=\"philadelphia.html\">Philadelphia guide</a> plans the day around Independence Hall, the Liberty Bell and Reading Terminal Market.</p>",
      },
      {
        q: "Can you visit Washington, D.C. in a day?",
        a: "<p>Yes, but you will be choosing between the Capitol, one or two Smithsonian museums and the memorials — not all of them. Amtrak takes about three hours each way, so an overnight is the better version of this trip. See the <a href=\"washington-dc.html\">Washington guide</a> for both plans.</p>",
      },
      {
        q: "Is Boston a day trip from New York?",
        a: "<p>Not really. The fastest trains are around three and a half hours, so a day trip means eight hours of travel for a few hours in the city. Go for a night or two — the <a href=\"boston.html\">Boston guide</a> covers what to do with a weekend.</p>",
      },
      {
        q: "Do I need a car for any of these trips?",
        a: "<p>No. Every trip here works on public transport. The one local gap is Storm King Art Center, which is a short taxi or seasonal shuttle ride from Beacon station — check current options before you go.</p>",
      },
      {
        q: "Which trip is best in winter?",
        a: "<p>Philadelphia and Washington, where the sights are compact and often indoors. Niagara Falls is at its best in summer and early autumn, and Storm King is a seasonal attraction, so check opening dates before planning a Hudson Valley day in the colder months.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "A day out, once a week",
      text: "New York and the places within a train ride of it: what is worth the fare this month.",
      source: "day-trips",
    })}
  </div>
</section>

${pageNav({ prev: { href: "where-to-stay.html", label: "Where to stay" }, next: { href: "philadelphia.html", label: "Philadelphia" } })}
`,
};
