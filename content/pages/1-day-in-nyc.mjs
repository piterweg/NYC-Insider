import { renderItineraryPage } from "../itinerary-template.mjs";

const faqItems = [
  {
    q: "Can I see the Statue of Liberty in a single day?",
    a: "<p>The official ferry to Liberty and Ellis Island takes four to five hours including security, which is most of a one-day trip. If the statue is the point, make it the whole day; if you want the view, ride the free Staten Island Ferry.</p>",
  },
  {
    q: "Is one day enough for the Empire State Building and Times Square?",
    a: "<p>Yes, if the skyline is in the morning and Times Square after dark. This plan uses Top of the Rock because it opens at 08:00, but the Empire State Building works if you start at 10:00.</p>",
  },
  {
    q: "Should I buy a sightseeing pass for one day?",
    a: "<p>Usually not. The cheapest pass is a multi-choice product from $89, and this plan pays for one deck and one museum at most. Buy the tickets you actually want; see the <a href=\"passes.html\">pass comparison</a>.</p>",
  },
  {
    q: "What happens if it rains?",
    a: "<p>Swap the bridge for the 9/11 Museum or MoMA, both indoor. The decks still work unless visibility closes in, and the ferry runs in most weather.</p>",
  },
  {
    q: "Where should I start the day?",
    a: "<p>Top of the Rock at 08:00 if you can. The first slot is the quietest and gives you the Empire State Building in morning light.</p>",
  },
];

export default {
  path: "1-day-in-nyc.html",
  navSection: "itineraries",
  bodyClass: "page-inner",
  title: "1 Day in NYC: The Best One-Day Itinerary",
  description:
    "One perfect day in New York: a Midtown skyline morning, a free harbour crossing and the Brooklyn Bridge, then Times Square after dark — with timings and prices.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/fifth-avenue-cab.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "One Day in New York: A Realistic One-Day Itinerary",
      description:
        "A single-day New York itinerary with timings, prices and the two bookings to make before you travel.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderItineraryPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "itineraries.html", label: "Itineraries" },
        { href: "1-day-in-nyc.html", label: "1 day" },
      ],
      heroImage: "fifth-avenue-cab.webp",
      heroAlt: "A yellow cab on a Manhattan avenue between tall buildings",
      eyebrowText: "Itinerary · 1 day",
      h1: "One perfect day in New York",
      lead: "Skyline first, harbour in the middle, Midtown after dark. Six stops on one north–south line, no wasted crossings, and only two things that need booking.",
      heroMeta: ["1 day", "6 stops", "Subway and walking", "Best for short stays"],
      facts: [
        { label: "Days", value: "1 full day, about 10–12 hours" },
        { label: "Pace", value: "Fast but walkable; one area per half-day" },
        { label: "Best for", value: "Layovers, a single free day, a first taste of the city" },
        { label: "Transport", value: "Subway $3.00 a ride; most of the day on foot" },
        { label: "Book first", value: "One observation deck, plus a show if you want one" },
      ],
      introEyebrow: "The shape of the day",
      introTitle: "Midtown morning, harbour afternoon, Midtown night",
      introLead:
        "One day means choosing. This route takes the skyline early, drops south for the harbour and the bridge, then returns to Midtown for the evening.",
      introParagraphs: [
        "Order matters: decks are quietest at opening, the harbour is a half-day in itself, and Times Square belongs after dark.",
        "If you land that morning, start at Bryant Park and cut the deck. If you fly out in the evening, finish after the bridge. Every stop sits on one spine, so trimming it does not break it.",
      ],
      stats: [
        { value: "6", label: "stops" },
        { value: "1", label: "borough" },
        { value: "2", label: "river crossings on foot" },
        { value: "10h", label: "on the move" },
      ],
      introImage: "broadway-theatre-night.webp",
      introImageAlt: "A Broadway theatre marquee lit at night in the Theatre District",
      planTitle: "The one-day plan",
      planLead:
        "Timings assume a Midtown or Lower Manhattan base. Shift the start if your flight lands late; the stops hold their order either way.",
      days: [
        {
          number: "01",
          label: "Manhattan",
          title: "One day, north to south and back",
          text: "Direction is the only rule: skyline in the morning, harbour in the afternoon, Midtown again in the evening.",
          stops: [
            {
              what: "Top of the Rock, 08:00",
              where: "<a href=\"top-of-the-rock.html\">Top of the Rock</a> opens at 08:00, the quietest slot of the day. From $42, with the Empire State Building in every photograph.",
            },
            {
              what: "Fifth Avenue and Grand Central",
              where: "Walk south past St Patrick's Cathedral to Bryant Park and the public library, then into <a href=\"grand-central.html\">Grand Central</a>. All free.",
            },
            {
              what: "Lunch in Midtown East",
              where: "A deli or a bagel counter, not a restaurant with photographs on the menu. Around $10–15.",
            },
            {
              what: "9/11 Memorial plaza",
              where: "Subway to Fulton Street. The <a href=\"9-11-memorial.html\">memorial</a> plaza is free and takes 20–30 minutes; the museum needs a timed ticket from $24.",
            },
            {
              what: "Staten Island Ferry",
              where: "Free, every 30 minutes or so, 25 minutes each way — and the best free view of the <a href=\"statue-of-liberty.html\">Statue of Liberty</a>. Skip the island ferry today; it needs four to five hours.",
            },
            {
              what: "Brooklyn Bridge and dinner",
              where: "Walk the <a href=\"brooklyn-bridge.html\">bridge</a> towards Brooklyn in the late afternoon, then eat in the Seaport or the Village and finish in Times Square after dark.",
            },
          ],
        },
      ],
      stayTitle: "Where to stay for one day",
      stayLead:
        "With one day, the base decides how much you see. Stay on the 4/5/6 or the N/Q/R/W and this plan stays easy.",
      stayCaption: "Neighbourhoods that work for a one-day visit",
      stayRows: [
        ["<strong>Midtown</strong>", "Walking distance to the first and last stops", "Anonymous, and priced for people who will never return"],
        ["<strong>Lower Manhattan</strong>", "Beside the ferry, memorial and bridge", "Quiet in the evening; you travel back for the show"],
        ["<strong>SoHo or the Village</strong>", "Best food and evening atmosphere", "A short subway ride from the morning start"],
      ],
      budgetTitle: "What one day costs",
      budgetLead:
        "Prices from November 2026. The day works without the show, and cheaper again without the deck.",
      budgetCaption: "Approximate per-person costs for the one-day plan",
      budgetRows: [
        ["Observation deck", "from $42–46", "Top of the Rock from $42; Empire State from $46"],
        ["Staten Island Ferry", "Free", "25 minutes each way, no ticket"],
        ["9/11 Museum (optional)", "from $24", "The plaza is always free"],
        ["Subway", "$3.00 a ride", "Fares cap at 12 in a rolling week, about $36"],
        ["Food", "$10–15 lunch; $25–40 dinner", "More for a booked restaurant"],
        ["Broadway (optional)", "average $131.09", "TKTS same-day seats are up to 50% off"],
      ],
      bookingTitle: "Book these before you travel",
      bookingText:
        "Two things fix the day: the deck slot and, if you want it, a show. Book the deck for opening and the show for the evening, then leave the middle of the day free.",
      tipsTitle: "What makes or breaks a one-day trip",
      tips: [
        {
          title: "Start at the deck that opens first",
          text: "Top of the Rock opens at 08:00; the Empire State Building opens at 10:00 on most winter weekdays. An early start buys a quiet view and a calmer Midtown.",
        },
        {
          title: "Do not attempt the Statue of Liberty today",
          text: "The official ferry and two islands take four to five hours. On a single day, take the free Staten Island Ferry for the view.",
        },
        {
          title: "Walk the bridge in the right direction",
          text: "Manhattan to Brooklyn in the late afternoon gives you the skyline behind you. Take the A or C back from High Street rather than walking it twice.",
        },
        {
          title: "Leave the evening loose",
          text: "Do not book an 18:00 dinner if you want the bridge at sunset. Eat when you get back and let Times Square happen after.",
        },
      ],
      tipsImage: "times-square-night.webp",
      tipsImageAlt: "Times Square at night, its billboards lighting the street below",
      otherTitle: "Need more than a day?",
      otherLead:
        "Every plan keeps the same shape — one area per half-day, bookings clustered — with more of the city in it.",
      otherPlans: [
        {
          href: "2-days-in-nyc.html",
          kicker: "2 days",
          title: "Two days in NYC",
          text: "Midtown and uptown on day one, the harbour and Lower Manhattan on day two.",
        },
        {
          href: "3-days-in-nyc.html",
          kicker: "3 days",
          title: "Three days in NYC",
          text: "The short break: two sightseeing days and one park-and-neighbourhood day.",
        },
        {
          href: "5-days-in-nyc.html",
          kicker: "5 days",
          title: "Five days in NYC",
          text: "The complete first-timer trip, with a full Brooklyn morning and a museum day.",
        },
      ],
      source: "1-day",
      faqTitle: "One-day trip questions",
      faq: faqItems,
      prev: { href: "itineraries.html", label: "All itineraries" },
      next: { href: "2-days-in-nyc.html", label: "2 days in NYC" },
    }),
};
