import { renderItineraryPage } from "../itinerary-template.mjs";

const faqItems = [
  {
    q: "Is two days enough for New York?",
    a: "<p>It is enough for the headline sights: one skyline, one museum or park, the Statue of Liberty, the 9/11 Memorial and the Brooklyn Bridge. It is not enough for the outer boroughs.</p>",
  },
  {
    q: "Which observation deck should I choose?",
    a: "<p>Top of the Rock if you want the Empire State in your photographs; the Empire State for the classic open-air terrace. One deck is enough for two days — see the <a href=\"attractions.html\">comparison</a>.</p>",
  },
  {
    q: "Can I do the Statue of Liberty and the 9/11 Memorial in one day?",
    a: "<p>Yes, the natural pairing. Take the first ferry and you are back around lunchtime, then walk the memorial in the afternoon and the bridge before dusk.</p>",
  },
  {
    q: "Is a sightseeing pass worth it for two days?",
    a: "<p>Only if you are packing in four or more paid attractions. The cheapest multi-choice pass starts at $89, and this plan pays for two or three. Run the numbers on the <a href=\"passes.html\">pass comparison</a>.</p>",
  },
  {
    q: "Where should I stay for two days?",
    a: "<p>Midtown to walk to day one; Lower Manhattan if the harbour is the priority. Neither is worth changing hotels for on a two-night stay.</p>",
  },
];

export default {
  path: "2-days-in-nyc.html",
  navSection: "itineraries",
  bodyClass: "page-inner",
  title: "2 Days in NYC: A Two-Day Itinerary",
  description:
    "Two full days in New York, split cleanly: Midtown and the park on day one, the harbour, the 9/11 Memorial and the Brooklyn Bridge on day two — with prices and timing.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/times-square-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "2 Days in NYC: A Two-Day Itinerary",
      description:
        "A two-day New York City plan splitting Midtown and uptown from the harbour, with prices, timings and the order to book in.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderItineraryPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "itineraries.html", label: "Itineraries" },
        { href: "2-days-in-nyc.html", label: "2 days" },
      ],
      heroImage: "times-square-night.webp",
      heroAlt: "Times Square at night, its billboards lighting the street below",
      eyebrowText: "Itinerary · 2 days",
      h1: "Two days in New York",
      lead: "One day uptown, one day at the harbour. Two days covers the icons if you resist crossing town twice — and both days end somewhere worth eating.",
      heroMeta: ["2 days", "2 boroughs", "10 stops", "One ferry"],
      facts: [
        { label: "Days", value: "2 full days" },
        { label: "Pace", value: "Busy but doable; one museum maximum" },
        { label: "Best for", value: "Weekend breaks and first visits" },
        { label: "Transport", value: "Subway $3.00 a ride, one ferry, plenty of walking" },
        { label: "Book first", value: "Statue ferry, one observation deck, one museum" },
      ],
      introEyebrow: "The shape of the trip",
      introTitle: "Midtown and uptown, then the harbour",
      introLead:
        "The mistake on a two-day trip is treating Manhattan as one list. Split it in half and each day stays walkable: Midtown and the Upper East Side on day one, Lower Manhattan and the water on day two.",
      introParagraphs: [
        "Day one is the postcard: a skyline deck, the Midtown streets and one museum or an afternoon in Central Park, then a show after dark. Day two is the harbour: the Statue ferry first thing, the memorial after lunch and the bridge in the late light.",
        "Both days finish near good food and neither needs a taxi. Book the ferry and one deck before you travel; everything else can move by an hour.",
      ],
      stats: [
        { value: "2", label: "days" },
        { value: "2", label: "boroughs" },
        { value: "10", label: "stops" },
        { value: "1", label: "ferry crossing" },
      ],
      introImage: "manhattan-skyline.webp",
      introImageAlt: "Lower Manhattan and the Brooklyn Bridge seen from the water on a clear day",
      planTitle: "Two days, day by day",
      planLead:
        "The plan assumes a Midtown base on night one. If you stay downtown, swap the days — the ferry is easier first thing from Battery Park.",
      days: [
        {
          number: "01",
          label: "Midtown &amp; uptown",
          title: "The skyline, the park and a show",
          text: "Start with the view while the city is quiet, then the park or a museum — one, not both — and a show after dark.",
          stops: [
            {
              what: "Empire State Building, 10:00",
              where: "The <a href=\"empire-state-building.html\">86th floor</a> from $46. It opens at 10:00 on most winter weekdays; the first slot skips the queue.",
            },
            {
              what: "Bryant Park and Grand Central",
              where: "Free. Walk south past the library and Bryant Park, then stand under <a href=\"grand-central.html\">Grand Central</a>'s ceiling.",
            },
            {
              what: "Lunch near Grand Central",
              where: "The concourse under the terminal or a deli on Lexington, around $10–18.",
            },
            {
              what: "The Met or Central Park",
              where: "Pick one. <a href=\"met-museum.html\">The Met</a> is $30 and closed Wednesdays; the <a href=\"central-park.html\">park</a> is free.",
            },
            {
              what: "Times Square and a show",
              where: "Come back after dark for 15 minutes of billboards, then a show. TKTS same-day seats run up to 50% off.",
            },
          ],
        },
        {
          number: "02",
          label: "Harbour &amp; downtown",
          title: "Statue, memorial and the bridge",
          text: "The harbour day. Buy the ferry ticket ahead, be at Battery Park before 09:00, and keep the afternoon for Lower Manhattan.",
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
              where: "The plaza is free. The <a href=\"9-11-memorial.html\">museum</a> is timed from $24, takes 45–90 minutes and closes most Tuesdays.",
            },
            {
              what: "Brooklyn Bridge at golden hour",
              where: "Walk the <a href=\"brooklyn-bridge.html\">bridge</a> from Manhattan, 30–40 minutes each way, then take the subway back.",
            },
            {
              what: "Dinner in Brooklyn or the Seaport",
              where: "Stay in DUMBO for pizza, or cross back to the Seaport. Do not book it.",
            },
          ],
        },
      ],
      stayTitle: "Two days, one base",
      stayLead:
        "Do not change hotels on a two-night stay. Pick the side of town your first morning starts in.",
      stayCaption: "Neighbourhoods that work for a two-day visit",
      stayRows: [
        ["<strong>Midtown</strong>", "Walk to day one; easy subway to the ferry", "Tourist restaurants and anonymous evenings"],
        ["<strong>Lower Manhattan</strong>", "Beside the ferry, memorial and bridge", "Quiet at night, fewer cheap eats"],
        ["<strong>SoHo or the Village</strong>", "Best food and atmosphere after both days", "Longer rides to the morning start"],
      ],
      budgetTitle: "What two days cost",
      budgetLead:
        "Prices from November 2026, per person. The deck and the ferry are the big lines.",
      budgetCaption: "Approximate per-person costs for the two-day plan",
      budgetRows: [
        ["Observation deck", "from $42–46", "Top of the Rock from $42; Empire State from $46"],
        ["Statue ferry", "from $25.50", "Pedestal or crown adds $0.30; crown needs its own reservation"],
        ["Museums", "$30 Met; 9/11 from $24", "The 9/11 plaza is free; the Met closes Wednesdays"],
        ["Subway", "$3.00 a ride", "About $6–9 a day; fares cap at 12 in a rolling week"],
        ["Food", "$10–18 lunch; $25–40 dinner", "More for a booked restaurant"],
        ["Broadway (optional)", "average $131.09", "TKTS same-day seats up to 50% off"],
      ],
      bookingTitle: "Book these before you travel",
      bookingText:
        "The Statue ferry first, then one observation deck, then a show if you want one. The Met does not sell out — it just closes on Wednesdays.",
      tipsTitle: "What makes or breaks two days",
      tips: [
        {
          title: "One deck is enough",
          text: "Two skyline tickets cost nearly $100 for the same city from a slightly different angle. Pick one and spend the difference on dinner.",
        },
        {
          title: "Buy the ferry ticket first",
          text: "First departures sell out, and Statue City Cruises is the only official operator. Ignore anyone selling near Battery Park.",
        },
        {
          title: "Match the museum to the day",
          text: "The Met closes Wednesdays, MoMA opens late on Fridays, AMNH is daily from $28. Check the day before you commit.",
        },
        {
          title: "Keep day two south",
          text: "The ferry, the memorial and the bridge are within walking distance of each other. Adding anything uptown is how people end up seeing the inside of the subway.",
        },
      ],
      tipsImage: "manhattan-skyline-night.webp",
      tipsImageAlt: "The Manhattan skyline at night, seen across the river",
      otherTitle: "Not quite the right length?",
      otherLead:
        "Each plan keeps the same logic — one area per half-day, the fixed bookings first — with a different amount of time.",
      otherPlans: [
        {
          href: "1-day-in-nyc.html",
          kicker: "1 day",
          title: "One perfect day",
          text: "A single-day loop: skyline, harbour and Midtown after dark.",
        },
        {
          href: "3-days-in-nyc.html",
          kicker: "3 days",
          title: "Three days in NYC",
          text: "The short break, with a third day for the park and a neighbourhood.",
        },
        {
          href: "5-days-in-nyc.html",
          kicker: "5 days",
          title: "Five days in NYC",
          text: "The complete first-timer trip, adding Brooklyn and a museum day.",
        },
      ],
      source: "2-days",
      faqTitle: "Two-day trip questions",
      faq: faqItems,
      prev: { href: "1-day-in-nyc.html", label: "1 day in NYC" },
      next: { href: "3-days-in-nyc.html", label: "3 days in NYC" },
    }),
};
