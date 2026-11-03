import {
  btn,
  sectionHead,
  pageHero,
  mediaCard,
  card,
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
  path: "itineraries.html",
  navSection: "itineraries",
  bodyClass: "page-inner",
  title: "New York City Itineraries — 3, 5 and 7 Day Plans",
  description:
    "Day-by-day New York City itineraries for 3, 5 and 7 day trips: what to see, in what order, how long it takes and where to eat between stops.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/broadway-theatre-night.webp",
  breadcrumbs: [
    { href: "index.html", label: "Home" },
    { href: "itineraries.html", label: "Itineraries" },
  ],
  render: () => `
${pageHero({
  image: img("broadway-theatre-night.webp"),
  alt: "A Broadway theatre marquee lit up at night in New York's Theatre District",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "itineraries.html", label: "Itineraries" },
  ],
  eyebrowText: "Itineraries",
  title: "Plans that respect your time",
  lead: "Three days, five days or a full week — these are realistic New York itineraries with travel time built in, one big thing per half-day, and enough slack to actually enjoy the city.",
  meta: metaItems("1 to 7 day plans", "Public transport only", "Verified November 2026"),
})}

<section class="section">
  <div class="container">
    <div class="grid grid--3">
      ${mediaCard({
        href: "1-day-in-nyc.html",
        image: img("fifth-avenue-cab.webp"),
        alt: "A yellow cab on a Manhattan avenue",
        kicker: "One day",
        title: "1 day in NYC",
        text: "A single-day loop through the icons, without crossing town twice.",
        meta: "1 day · packed",
      })}
      ${mediaCard({
        href: "2-days-in-nyc.html",
        image: img("times-square-night.webp"),
        alt: "Times Square at night",
        kicker: "Two days",
        title: "2 days in NYC",
        text: "One uptown day, one harbour day — the shortest trip that still feels complete.",
        meta: "2 days · brisk",
      })}
      ${mediaCard({
        href: "4-days-in-nyc.html",
        image: img("central-park-nyc.webp"),
        alt: "Bethesda Fountain in Central Park",
        kicker: "Four days",
        title: "4 days in NYC",
        text: "The 3-day plan with a full Brooklyn day added in.",
        meta: "4 days · balanced",
      })}
      ${mediaCard({
        href: "nyc-with-kids.html",
        image: img("central-park-nyc.webp"),
        alt: "Bethesda Fountain in Central Park",
        kicker: "Family",
        title: "NYC with kids",
        text: "A three-day family plan with one anchor a day, rest windows and early dinners.",
        meta: "3 days · family pace",
      })}
      ${mediaCard({
        href: "3-days-in-nyc.html",
        image: img("fifth-avenue-cab.webp"),
        alt: "A yellow taxi on a Manhattan avenue",
        kicker: "Long weekend",
        title: "3 days in NYC",
        text: "A first flying visit: skyline, park, one neighbourhood and a Broadway night. Nothing wasted on transit.",
        meta: "3 days · 4–6 stops a day",
      })}
      ${mediaCard({
        href: "5-days-in-nyc.html",
        image: img("times-square-night.webp"),
        alt: "Times Square at night",
        kicker: "Most popular",
        title: "5 days in NYC",
        text: "The complete first-timer trip, with a Brooklyn morning, a proper museum day and one night out.",
        meta: "5 days · balanced pace",
      })}
      ${mediaCard({
        href: "7-days-in-nyc.html",
        image: img("brooklyn-bridge-sunset.webp"),
        alt: "The Brooklyn Bridge at sunset",
        kicker: "One week",
        title: "7 days in NYC",
        text: "Seven days buys you the outer boroughs, neighbourhood time and the luxury of a slow morning.",
        meta: "7 days · flexible pace",
      })}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Choose your length",
      title: "The honest comparison",
      lead: "More days does not automatically mean more sights — it means less rushing. Here is how the three plans differ.",
    })}
    ${table({
      caption: "Comparison of the three NYC itineraries",
      head: ["Plan", "Best for", "Pace", "Must-sees", "What you will skip"],
      rows: [
        [
          '<a href="1-day-in-nyc.html"><strong>1 day</strong></a>',
          "A long layover or one free day",
          "Packed",
          "Midtown icons, Central Park edge, one skyline deck",
          "Brooklyn, museums, the harbours",
        ],
        [
          '<a href="2-days-in-nyc.html"><strong>2 days</strong></a>',
          "A weekend, or two free days",
          "Brisk",
          "One uptown day (park, Met, Midtown) and one harbour day (Statue ferry, 9/11, Brooklyn Bridge)",
          "Outer boroughs, a full museum day",
        ],
        [
          '<a href="4-days-in-nyc.html"><strong>4 days</strong></a>',
          "A short break with breathing room",
          "Balanced",
          "Everything in the 3-day plan plus a full Brooklyn day",
          "Queens, the Bronx, day trips",
        ],
        [
          '<a href="3-days-in-nyc.html"><strong>3 days</strong></a>',
          "First visit, short break",
          "Busy but doable",
          "Empire State Building, Central Park, Lower Manhattan, Brooklyn Bridge, one show",
          "Museums, outer boroughs, day trips",
        ],
        [
          '<a href="5-days-in-nyc.html"><strong>5 days</strong></a>',
          "First visit, realistic bucket list",
          "Balanced",
          "Everything in the 3-day plan plus The Met, SoHo &amp; the Village, High Line, Brooklyn neighbourhoods",
          "Queens, the Bronx, Staten Island",
        ],
        [
          '<a href="7-days-in-nyc.html"><strong>7 days</strong></a>',
          "Second visit or slow travel",
          "Flexible",
          "Everything in the 5-day plan plus Queens food, the Bronx, Staten Island ferry and a buffer day",
          "Day trips to Philadelphia or Boston — those need their own trip",
        ],
      ],
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("How we plan")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Four rules behind every plan</h2>
        <ul class="feature-list" style="margin-top:2rem">
          <li>
            <span class="feature-list__num">01</span>
            <div>
              <h4>One area per half-day</h4>
              <p>New York looks small on a map and is enormous in practice. Clustering stops by neighbourhood saves you hours on the subway.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">02</span>
            <div>
              <h4>Book the big things first</h4>
              <p>Observation decks, the Statue of Liberty and Broadway are the three fixed points. Everything else can move around them.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">03</span>
            <div>
              <h4>Protect one meal a day</h4>
              <p>Plan breakfast or lunch properly and leave dinner loose. The best New York meals are rarely the ones you booked a month ahead.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">04</span>
            <div>
              <h4>Walk more than you ride in Manhattan</h4>
              <p>Above 59th Street, walking the grid is usually faster than going underground. Below it, the subway is your friend.</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        ${callout({
          icon: "◷",
          title: "Leave the first hour empty",
          text: "Jet lag, a hotel queue, a wrong turn out of Penn Station — something always eats the first morning. Our plans start with a soft stop so a late start does not break the day.",
        })}
        ${callout({
          icon: "☂",
          title: "Have a rain plan",
          text: "New York rain is heavy and short. Keep one indoor anchor per day — a museum, a market, a food hall — so a wet afternoon does not ruin anything.",
        })}
        ${callout({
          icon: "◆",
          title: "Check opening days",
          text: "The Met closes on some Mondays, MoMA is open daily, the Statue of Liberty ferries sell out, and Broadway plays dark on different nights. Our pages note the usual schedules — always confirm before booking.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Plan by length",
      title: "Start with the days you have",
      lead: "Each plan is written as a day-by-day sequence with a reason for the order. Use them whole, or steal single days.",
      center: false,
    })}
    <div class="grid grid--3">
      ${card({
        kicker: "1 day",
        title: `<a href="1-day-in-nyc.html">The single day</a>`,
        text: "The icons in one loop, with the order that avoids backtracking.",
        foot: `<a class="link-arrow" href="1-day-in-nyc.html">Open the plan</a>`,
      })}
      ${card({
        kicker: "2 days",
        title: `<a href="2-days-in-nyc.html">The weekend</a>`,
        text: "Uptown and the harbour, split so both days work on foot and subway.",
        foot: `<a class="link-arrow" href="2-days-in-nyc.html">Open the plan</a>`,
      })}
      ${card({
        kicker: "4 days",
        title: `<a href="4-days-in-nyc.html">The short break</a>`,
        text: "Three days of Manhattan plus a proper Brooklyn day.",
        foot: `<a class="link-arrow" href="4-days-in-nyc.html">Open the plan</a>`,
      })}
      ${card({
        kicker: "3 days",
        title: `<a href="3-days-in-nyc.html">The short break</a>`,
        text: "Two big sightseeing days and one neighbourhood day. Add a show on night two.",
        foot: `<a class="link-arrow" href="3-days-in-nyc.html">Open the plan</a>`,
      })}
      ${card({
        kicker: "5 days",
        title: `<a href="5-days-in-nyc.html">The complete first trip</a>`,
        text: "Five days is the sweet spot: enough for the icons, museums and one full Brooklyn day.",
        foot: `<a class="link-arrow" href="5-days-in-nyc.html">Open the plan</a>`,
      })}
      ${card({
        kicker: "7 days",
        title: `<a href="7-days-in-nyc.html">The full week</a>`,
        text: "All five boroughs, a food crawl in Queens, and a spare day for whatever you fall in love with.",
        foot: `<a class="link-arrow" href="7-days-in-nyc.html">Open the plan</a>`,
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Questions",
      title: "Itinerary questions we get a lot",
      lead: "",
    })}
    ${faq([
      {
        q: "Is three days enough for New York?",
        a: "<p>Three full days is enough to see the headline sights without feeling rushed, as long as you pick one area per half-day. You will not do the museums and the outer boroughs, and you should not try.</p>",
      },
      {
        q: "Should I book Broadway tickets in advance?",
        a: "<p>For a specific show or a weekend, yes — two to three weeks ahead is sensible. For midweek flexibility, TKTS same-day discounts or the show's own rush lottery are often cheaper.</p>",
      },
      {
        q: "Where should I stay for a first trip?",
        a: "<p>Midtown is convenient and anonymous; the Village, SoHo and the Upper West Side have more character and better food. Anywhere within a five-minute walk of a subway line works. Avoid hotels that are only near a far-flung station.</p>",
      },
      {
        q: "Do these itineraries work with kids?",
        a: "<p>Yes, with cuts. The 5-day plan minus one museum day and with an earlier dinner works well. The Staten Island Ferry, Central Park playgrounds and the American Museum of Natural History are the reliable wins.</p>",
      },
      {
        q: "What if it rains?",
        a: "<p>Swap the outdoor block for a museum, a market or a food hall. The plan pages suggest a wet-weather alternative for each day.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Get the printable version",
      text: "Join the list and we will send the one-page PDF of all three itineraries, plus one useful New York email a week.",
      source: "itineraries",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Read the practical guide before you book anything",
  text: "Tickets, transit, timing and money — the four things that decide whether a good itinerary actually works.",
  actions: `${btn({ href: "plan-your-trip.html", label: "Plan your trip" })}${btn({
    href: "passes.html",
    label: "Compare passes",
    variant: "outline",
  })}`,
})}
`,
};
