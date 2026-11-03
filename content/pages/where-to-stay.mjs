import {
  sectionHead,
  pageHero,
  card,
  callout,
  table,
  faq,
  newsletter,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "where-to-stay.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Where to Stay in NYC — Areas Compared",
  description:
    "Where to stay in New York City: eleven neighbourhoods compared by nightly price, subway access and who each one suits, plus hotel tax and booking advice.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Where to Stay in New York City — Eleven Areas Compared",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which New York neighbourhood is best for a first visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Midtown is the simplest base for a first trip because most of the headline sights and theatres are within walking distance. The Upper West Side is calmer and better value; Greenwich Village and SoHo suit people who care more about food and evenings than about being close to the icons.",
          },
        },
        {
          "@type": "Question",
          name: "How much is hotel tax in New York City?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Expect roughly 14.75% hotel tax plus $3.50 per night on top of the quoted room rate. Ask for the all-in total, including any compulsory facility fee, before you compare two hotels.",
          },
        },
        {
          "@type": "Question",
          name: "Is it cheaper to stay in Brooklyn or New Jersey?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually yes. Downtown Brooklyn, Williamsburg, Long Island City and Jersey City often cost less per night than Midtown and are 10–30 minutes away by subway or PATH. Check how late the trains run before you commit, especially for PATH.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "A person looking out over the Manhattan skyline through a floor-to-ceiling window at night",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "plan-your-trip.html", label: "Plan Your Trip" },
    { href: "where-to-stay.html", label: "Where to Stay" },
  ],
  eyebrowText: "Where to stay",
  title: "Where to stay in New York",
  lead: "The right base is not the best hotel in the city — it is the one that puts your evenings within a short ride of your bed. Here are eleven areas compared honestly, what the tax really adds, and how to book without overpaying.",
  meta: metaItems("11 areas compared", "Prices before tax", "Subway-first advice", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("How to choose")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Choose the line before the hotel</h2>
        <p class="lead">Start with the two or three places you will actually spend your evenings, then find a station on a line that reaches them. In New York the address matters less than the journey from it.</p>
        <p class="muted">A first trip usually wants Midtown for convenience, or the Upper West Side for calm and park mornings. A second trip can trade a little travel time for better food, bigger rooms and lower rates in Brooklyn, Queens or Jersey City. Every figure below is a 2026 planning band for a double room, before tax.</p>
        <div class="stats" style="margin-top:2rem">
          <div class="stat"><strong>11</strong><span>areas compared</span></div>
          <div class="stat"><strong>14.75%</strong><span>hotel tax</span></div>
          <div class="stat"><strong>$3.50</strong><span>per night fee</span></div>
          <div class="stat"><strong>10–30</strong><span>minutes to Midtown</span></div>
        </div>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "The rule that saves trips",
          text: "Pick a hotel within a five-minute walk of a station on a line you will use twice a day. A plain building in the right place beats a beautiful one further out.",
        })}
        ${callout({
          icon: "☂",
          title: "Noise is the variable nobody checks",
          text: "Midtown, SoHo and Williamsburg are lively at night. If you sleep lightly, ask for a room away from the street and read reviews that mention noise.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The comparison",
      title: "Eleven places to sleep, honestly compared",
      lead: "Price bands are per night before tax, shown as budget / mid-range / upscale. Subway lines are the ones nearest the hotels, not every line in the area.",
    })}
    ${table({
      caption: "Comparison of New York City neighbourhoods to stay in, with price bands and subway access",
      head: ["Area", "Suits", "Pros and cons", "Per night, before tax", "Subway"],
      rows: [
        [
          '<a href="manhattan.html"><strong>Midtown</strong></a>',
          "First visits, theatre, short trips",
          "Walk to the icons; Penn and Grand Central are here. Crowds and tourist-priced restaurants.",
          "$180–260<br>/ $300–450<br>/ $500–900",
          "B/D/F/M/N/Q/R/W at 34–42 St; 1/2/3, A/C/E at Penn; 4/5/6 at Grand Central",
        ],
        [
          '<a href="manhattan.html"><strong>Lower Manhattan / FiDi</strong></a>',
          "Sightseeing south, business, architecture",
          "9/11 Memorial, Statue ferry and Brooklyn Bridge on foot. Quiet evenings and weekends.",
          "$170–250<br>/ $280–400<br>/ $450–700",
          "1/2/3/4/5/A/C/E/J/Z/R/W at Fulton–Wall St",
        ],
        [
          '<a href="manhattan.html"><strong>SoHo / Nolita</strong></a>',
          "Shoppers, design-lovers, couples",
          "Best dining and shopping cluster. Expensive, loud at weekends, few direct lines.",
          "$250–350<br>/ $400–600<br>/ $700–1,200",
          "N/Q/R/W at Prince St; C/E and 6 at Spring St",
        ],
        [
          '<a href="manhattan.html"><strong>Greenwich Village / West Village</strong></a>',
          "Food, nightlife, longer stays",
          "Walkable, charming, great places to eat. Boutique hotels only, pricey and noisy.",
          "$220–320<br>/ $350–500<br>/ $550–900",
          "A/C/E/B/D/F/M at W 4 St; 1 at Christopher St; L at 6 Av",
        ],
        [
          '<a href="manhattan.html"><strong>Upper West Side</strong></a>',
          "Families, museum-goers, calm",
          "AMNH, Central Park and a real neighbourhood. Twenty minutes or more to Midtown.",
          "$180–260<br>/ $280–400<br>/ $450–700",
          "1/2/3 at 72–96 St; B/C at 72–86 St",
        ],
        [
          '<a href="manhattan.html"><strong>Upper East Side</strong></a>',
          "Museums, quiet, classic New York",
          "Met, Guggenheim and Central Park within a walk. Limited nightlife, some very expensive blocks.",
          "$200–280<br>/ $300–450<br>/ $500–900",
          "4/5/6 at 77–96 St; Q at 72–96 St",
        ],
        [
          '<a href="manhattan.html"><strong>Harlem</strong></a>',
          "Budget, culture, live music",
          "Cheapest Manhattan base, great food, Apollo and jazz. Longer commute, patchier blocks at night.",
          "$140–200<br>/ $200–300<br>/ $300–450",
          "2/3 at 110–135 St; A/B/C/D at 125 St; 4/5/6 at 125 St",
        ],
        [
          '<a href="brooklyn.html"><strong>Downtown Brooklyn</strong></a>',
          "Budget, families, repeat visitors",
          "Ten minutes to Manhattan and good value. Less New York feel, construction on several blocks.",
          "$150–220<br>/ $220–320<br>/ $350–500",
          "A/C/F/R at Jay St–MetroTech; 2/3/4/5 at Borough Hall",
        ],
        [
          '<a href="brooklyn.html"><strong>Williamsburg</strong></a>',
          "Twenties and thirties, nightlife, food",
          "Best bar and restaurant scene outside Manhattan. L train patchy at weekends, loud streets.",
          "$180–260<br>/ $280–400<br>/ $450–700",
          "L at Bedford Av; J/M/Z at Marcy Av",
        ],
        [
          '<a href="queens.html"><strong>Long Island City</strong></a>',
          "Budget, skyline views, quick Midtown",
          "One stop to Grand Central and the best value. Industrial blocks, very few sights.",
          "$150–220<br>/ $220–320<br>/ $350–500",
          "7 at Court Sq; E/M at Court Sq–23 St; G at 21 St",
        ],
        [
          "<strong>Jersey City (PATH)</strong>",
          "Budget, families, Manhattan commuters",
          "Fifteen minutes to the World Trade Center or 33rd Street, new hotels. PATH stops overnight.",
          "$150–220<br>/ $220–320<br>/ $350–500",
          "PATH at Journal Square, Newport or Exchange Pl",
        ],
      ],
    })}
    <div class="split" style="margin-top:clamp(2rem,5vw,3.5rem)">
      <div class="split__body">
        <h3>What the tax adds</h3>
        <p>New York adds roughly <strong>14.75% hotel tax plus $3.50 per night</strong> on top of the quoted rate, so a $400 room is closer to $462 before you tip a porter. Ask for the all-in total — room, tax, occupancy fee and any facility fee — before comparing two hotels.</p>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "The same room, three prices",
          text: "The hotel's own site, a booking site and a package can all quote different totals for the same night. Compare the final number, including tax and fees.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Booking",
      title: "How to book a New York hotel",
      lead: "The rate is only half the decision. These are the things that change what you actually pay and how well you sleep.",
    })}
    <div class="grid grid--3">
      ${card({
        kicker: "Direct or agent",
        title: "Book direct when the rate matches",
        text: "Hotel websites usually match the large booking sites and are easier to change if a flight moves. Compare on an agent site, then check the same dates on the hotel's own site and take the better cancellation terms.",
      })}
      ${card({
        kicker: "Cancellation",
        title: "Read the cut-off date",
        text: "Flexible rates cost a little more and are worth it in New York, where plans change. Note the exact date and hour you can cancel by — some are 72 hours, some three days before arrival.",
      })}
      ${card({
        kicker: "Room size",
        title: "Expect a small room",
        text: "New York hotel rooms are small, and “queen” describes the bed rather than the space. Check the floor plan and whether the window opens.",
      })}
      ${card({
        kicker: "Fees",
        title: "Watch for facility fees",
        text: "Some hotels add a nightly resort, destination or facility fee for the gym, Wi-Fi or a bar credit. It is not covered by the tax line, so ask what is compulsory before you book.",
      })}
      ${card({
        kicker: "Location",
        title: "Location beats facilities",
        text: "A rooftop pool matters less than the walk to the subway. Check the nearest station and which lines serve it, then count the stops to the places you will visit.",
      })}
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Where to stay — common questions", lead: "" })}
    ${faq([
      {
        q: "Which area is best for a first visit?",
        a: "<p>Midtown, unless noise and crowds bother you. It is the only area where the Empire State Building, Times Square, Bryant Park, Grand Central and the theatres are all within a walk. The Upper West Side is the calmer alternative, with the park and the American Museum of Natural History on the doorstep.</p>",
      },
      {
        q: "Is Brooklyn a good base for a first trip?",
        a: "<p>It can be. Downtown Brooklyn is around ten minutes from Lower Manhattan on several lines, and Williamsburg has the best food and nightlife of any outer-borough base. You trade some convenience for space and value — see the <a href=\"brooklyn.html\">Brooklyn guide</a>.</p>",
      },
      {
        q: "Is Jersey City cheaper, and what is the catch?",
        a: "<p>Usually cheaper, with newer hotels and a fast PATH ride to the World Trade Center or 33rd Street. The catch is that PATH stops overnight, so a late evening means a taxi.</p>",
      },
      {
        q: "How much is hotel tax, and what else is added?",
        a: "<p>Roughly 14.75% hotel tax plus $3.50 per night, on top of the quoted rate, and some hotels add a compulsory facility fee as well. See the <a href=\"budget.html\">budget guide</a> for the rest of the picture.</p>",
      },
      {
        q: "Should I tip hotel staff?",
        a: "<p>Yes, modestly. Around $2–5 per bag for the porter and $3–5 per night for housekeeping is the local norm. Doormen and concierges are tipped for a specific service, not routinely.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "One borough in detail",
      title: "Where to stay in Brooklyn",
      lead: "Better value, better food and 10–20 minutes from Manhattan — the full area-by-area guide.",
      action: `<a class="link-arrow" href="where-to-stay-brooklyn.html">Read the Brooklyn guide</a>`,
    })}
    <div class="card" style="max-width:720px">
      <span class="card__kicker">Accommodation</span>
      <h3><a href="where-to-stay-brooklyn.html">Where to stay in Brooklyn</a></h3>
      <p>Downtown Brooklyn, Brooklyn Heights, DUMBO, Williamsburg and more: who each area suits, price bands, subway lines and the hotel tax maths.</p>
      <div class="card__foot"><a class="link-arrow" href="where-to-stay-brooklyn.html">Read the guide</a></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Where to stay, when it matters",
      text: "Hotel areas, honest rate advice and one useful New York email a week. No spam, ever.",
      source: "where-to-stay",
    })}
  </div>
</section>

`,
};
