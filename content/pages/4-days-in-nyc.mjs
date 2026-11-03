import { renderItineraryPage } from "../itinerary-template.mjs";

const faqItems = [
  {
    q: "Is four days enough for New York?",
    a: "<p>Four days covers the icons, one big museum, the Statue of Liberty and a Brooklyn day. Not the Bronx, Queens or a day trip.</p>",
  },
  {
    q: "What should I cut if I only have three days?",
    a: "<p>Cut the Brooklyn day. Days one to three are the classic Manhattan plan and work alone; the <a href=\"3-days-in-nyc.html\">3-day itinerary</a> runs in the same order.</p>",
  },
  {
    q: "Should I move hotels for the Brooklyn day?",
    a: "<p>No. Brooklyn is 10–20 minutes from Lower Manhattan on the subway, and changing hotels costs more time than the trip saves.</p>",
  },
  {
    q: "Is a sightseeing pass worth it for four days?",
    a: "<p>Only if your shortlist reaches five paid attractions. CityPASS is $149 for five from ten; this plan pays for four or five. See the <a href=\"passes.html\">pass comparison</a>.</p>",
  },
  {
    q: "What if it rains during the trip?",
    a: "<p>Swap the Brooklyn day with day three and put the Met, MoMA or AMNH on the wet day. The bridge is still walkable in rain.</p>",
  },
];

export default {
  path: "4-days-in-nyc.html",
  navSection: "itineraries",
  bodyClass: "page-inner",
  title: "4 Days in NYC: A Four-Day Itinerary",
  description:
    "Four days in New York: the three-day essentials — skyline, harbour, Central Park and the Met — plus a full Brooklyn day, with timings, prices and booking order.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-nyc.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "4 Days in NYC: A Four-Day Itinerary",
      description:
        "A four-day New York City itinerary: three Manhattan days plus a full Brooklyn day, with prices, timings and the order to book in.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderItineraryPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "itineraries.html", label: "Itineraries" },
        { href: "4-days-in-nyc.html", label: "4 days" },
      ],
      heroImage: "central-park-nyc.webp",
      heroAlt:
        "Bethesda Fountain and the terrace in Central Park on a summer day, with rowboats on the lake behind",
      eyebrowText: "Itinerary · 4 days",
      h1: "Four days in New York",
      lead: "Three Manhattan days at a calmer pace, then a full day across the river. Four days is where a trip stops being a checklist and starts to feel like a visit.",
      heroMeta: ["4 days", "2 boroughs", "16 stops", "One Brooklyn day"],
      facts: [
        { label: "Days", value: "4 full days" },
        { label: "Pace", value: "Balanced; one area per half-day, one museum" },
        { label: "Best for", value: "A first visit with room to breathe" },
        { label: "Transport", value: "Subway $3.00 a ride, one ferry, plenty of walking" },
        { label: "Book first", value: "Statue ferry, one observation deck, one show" },
      ],
      introEyebrow: "The shape of the trip",
      introTitle: "Three days of icons, one day in Brooklyn",
      introLead:
        "The first three days take the classic Manhattan plan at a gentler speed: skyline, harbour, park and one museum. The fourth crosses the river.",
      introParagraphs: [
        "The extra day is best spent in Brooklyn: DUMBO, the waterfront and Williamsburg give you the skyline from the other side.",
        "Keep one hotel for all four nights. Brooklyn is 10–20 minutes from Lower Manhattan by subway.",
      ],
      stats: [
        { value: "4", label: "days" },
        { value: "2", label: "boroughs" },
        { value: "16", label: "stops" },
        { value: "1", label: "Brooklyn day" },
      ],
      introImage: "brooklyn-bridge-park.webp",
      introImageAlt:
        "The Brooklyn Bridge tower seen from Brooklyn Bridge Park, with Manhattan buildings through the cables",
      planTitle: "Four days, day by day",
      planLead:
        "Days one to three are Manhattan and work from any Midtown or Lower Manhattan base. Day four is Brooklyn from the first stop to dinner.",
      days: [
        {
          number: "01",
          label: "Midtown",
          title: "Arrive, go up, come down to earth",
          text: "Keep the arrival day light: one skyline, one walk, one dinner — nothing that cannot move.",
          stops: [
            {
              what: "Empire State Building",
              where: "The <a href=\"empire-state-building.html\">86th floor</a> from $46; it opens at 10:00 on most winter weekdays and the first slot skips the queue.",
            },
            {
              what: "Bryant Park and Grand Central",
              where: "Free. Walk south past the library and Bryant Park, then under <a href=\"grand-central.html\">Grand Central</a>'s ceiling.",
            },
            {
              what: "Lunch in Midtown East",
              where: "A deli or bagel counter around $10–18; faster than the restaurants on the squares.",
            },
            {
              what: "Times Square at dusk",
              where: "Fifteen minutes of billboards, then dinner or a show. Same-day TKTS seats run up to 50% off.",
            },
          ],
        },
        {
          number: "02",
          label: "Harbour &amp; downtown",
          title: "Statue, memorial and the bridge",
          text: "The busiest day, but tight: buy the ferry ticket ahead and be at Battery Park before 09:00.",
          stops: [
            {
              what: "Statue City Cruises ferry",
              where: "From Battery Park to Liberty and Ellis Island. <a href=\"statue-of-liberty.html\">Official tickets</a> from $25.50; allow four to five hours.",
            },
            {
              what: "Lunch near the Seaport",
              where: "Fulton Street or the Seaport, five minutes from the ferry terminal.",
            },
            {
              what: "9/11 Memorial and Museum",
              where: "The plaza is free. The <a href=\"9-11-memorial.html\">museum</a> is timed from $24 and takes 45–90 minutes; closed most Tuesdays.",
            },
            {
              what: "Brooklyn Bridge and dinner",
              where: "Walk the <a href=\"brooklyn-bridge.html\">bridge</a> at golden hour, 30–40 minutes each way, then eat in the Village or Seaport.",
            },
          ],
        },
        {
          number: "03",
          label: "Uptown",
          title: "Central Park, the Met and a neighbourhood",
          text: "One museum and one long park walk, then a downtown neighbourhood — you finish near good food either way.",
          stops: [
            {
              what: "Central Park",
              where: "Enter at 72nd Street and walk the Mall to Bethesda Terrace and the Bow Bridge. Free.",
            },
            {
              what: "The Met",
              where: "Two to three hours on the highlights. $30, and <a href=\"met-museum.html\">closed Wednesdays</a> — check the day before.",
            },
            {
              what: "The High Line or a neighbourhood",
              where: "Pick one: the <a href=\"high-line.html\">High Line</a> and Chelsea Market, or SoHo and Greenwich Village on foot.",
            },
            {
              what: "Final Manhattan dinner",
              where: "Book it with the show. The last night is the one people leave to chance.",
            },
          ],
        },
        {
          number: "04",
          label: "Brooklyn",
          title: "The other side of the river",
          text: "Subway to High Street and stay in Brooklyn all day. No Manhattan stops — that is the point.",
          stops: [
            {
              what: "DUMBO and Washington Street",
              where: "The bridge framed between the warehouses, early, before the photograph queue builds.",
            },
            {
              what: "Brooklyn Bridge Park and the promenade",
              where: "Lawns, piers and the best skyline view from Brooklyn, then the Heights walk. Free.",
            },
            {
              what: "Lunch in Williamsburg",
              where: "Bedford Avenue for pizza, bagels or something newer, then the waterfront.",
            },
            {
              what: "Domino Park and dinner",
              where: "The old sugar refinery site, with the skyline across the river. Eat in Williamsburg.",
            },
          ],
        },
      ],
      stayTitle: "Four days, one base",
      stayLead:
        "Do not move hotels for Brooklyn; the subway makes the river small.",
      stayCaption: "Neighbourhoods that work for a four-day visit",
      stayRows: [
        ["<strong>Midtown</strong>", "Walk to day one; easy subway everywhere", "Anonymous evenings; tourist restaurants"],
        ["<strong>Lower Manhattan</strong>", "Beside the ferry, memorial and bridge", "Quiet at night; fewer cheap eats"],
        ["<strong>SoHo or the Village</strong>", "Best food and atmosphere for four evenings", "A short ride to the morning starts"],
        ["<strong>Downtown Brooklyn</strong>", "Good value; ten minutes from Lower Manhattan", "Less of a holiday feel; construction"],
      ],
      budgetTitle: "What four days cost",
      budgetLead:
        "Prices from November 2026, per person. The fixed bookings are the deck, the ferry and the show.",
      budgetCaption: "Approximate per-person costs for the four-day plan",
      budgetRows: [
        ["Observation deck", "from $42–46", "Top of the Rock $42; Empire State $46"],
        ["Statue ferry", "from $25.50", "Pedestal or crown +$0.30; crown needs its own booking"],
        ["Museums", "$28–30 each", "Met $30; MoMA $30; AMNH $28; 9/11 from $24"],
        ["Subway", "$3.00 a ride", "About $9 a day; capped at 12 fares, about $36"],
        ["Food", "$10–18 lunch; $25–40 dinner", "More for a booked restaurant"],
        ["Broadway (optional)", "average $131.09", "TKTS same-day seats up to 50% off"],
      ],
      bookingTitle: "Book the fixed points first",
      bookingText:
        "Book the ferry, one deck and the show, in that order. The Met closes on Wednesdays — check before you assign day three.",
      tipsTitle: "What makes or breaks four days",
      tips: [
        {
          title: "Give Brooklyn its own day",
          text: "DUMBO, the waterfront and Williamsburg deserve more than an afternoon bolted onto the harbour day.",
        },
        {
          title: "Book only the fixed points",
          text: "Four days tempts people into booking everything. Book the ferry, one deck and one show; leave the rest open.",
        },
        {
          title: "Use the last day as a buffer",
          text: "If the weather turns, swap the Brooklyn day with day three. Both flex except for the Met's Wednesday closure.",
        },
        {
          title: "Keep one hotel",
          text: "Changing hotels costs half a day in packing and trains. A Manhattan base holds for all four nights.",
        },
      ],
      tipsImage: "brooklyn-bridge-skyline.webp",
      tipsImageAlt: "The Brooklyn Bridge and the Lower Manhattan skyline on a bright day",
      otherTitle: "More or fewer days?",
      otherLead:
        "Each plan keeps the same logic — one area per half-day, the fixed bookings first — with a different amount of time.",
      otherPlans: [
        {
          href: "2-days-in-nyc.html",
          kicker: "2 days",
          title: "Two days in NYC",
          text: "The short version: Midtown and uptown, then the harbour.",
        },
        {
          href: "3-days-in-nyc.html",
          kicker: "3 days",
          title: "Three days in NYC",
          text: "The first three days of this plan without the Brooklyn day.",
        },
        {
          href: "5-days-in-nyc.html",
          kicker: "5 days",
          title: "Five days in NYC",
          text: "Four days plus a Brooklyn neighbourhood day and the outer boroughs.",
        },
      ],
      source: "4-days",
      faqTitle: "Four-day trip questions",
      faq: faqItems,
      prev: { href: "3-days-in-nyc.html", label: "3 days in NYC" },
      next: { href: "5-days-in-nyc.html", label: "5 days in NYC" },
    }),
};
