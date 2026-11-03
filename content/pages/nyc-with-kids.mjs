import { renderItineraryPage } from "../itinerary-template.mjs";

const faqItems = [
  {
    q: "What ages is this itinerary for?",
    a: "<p>Roughly 4 to 12. Toddlers: one anchor a day. Teenagers: add a museum or a Broadway matinee.</p>",
  },
  {
    q: "Is the Statue of Liberty worth it with young children?",
    a: "<p>Take the first ferry, do Liberty Island and skip Ellis — two to three hours. The free Staten Island Ferry passes the statue in 25 minutes each way.</p>",
  },
  {
    q: "Do children need their own tickets?",
    a: "<p>Yes. CityPASS is $129 for children aged 6–17 and the Statue ferry child fare is $16.50. AMNH is $28 for adults, and NY, NJ and CT residents pay what they wish.</p>",
  },
  {
    q: "Is the subway pushchair-friendly?",
    a: "<p>Only about 150 of 472 stations are step-free; Grand Central, Times Square–42 St and Fulton Street are among them, and all buses are accessible. Check the MTA map.</p>",
  },
  {
    q: "What if it rains?",
    a: "<p>Swap the park for the museum or Grand Central, both indoors. The ferries run in most weather.</p>",
  },
];

export default {
  path: "nyc-with-kids.html",
  navSection: "itineraries",
  bodyClass: "page-inner",
  title: "NYC with Kids — A 3-Day Family Itinerary",
  description:
    "New York with children, paced around their energy: the natural history museum, Central Park playgrounds, a shortened Statue ferry and Brooklyn Bridge Park.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-nyc.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC with Kids — A 3-Day Family Itinerary",
      description:
        "A three-day New York City itinerary for families with children: one anchor a day, parks and boats, early dinners and realistic pacing.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderItineraryPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "itineraries.html", label: "Itineraries" },
        { href: "nyc-with-kids.html", label: "NYC with kids" },
      ],
      heroImage: "central-park-nyc.webp",
      heroAlt:
        "Bethesda Fountain and the terrace in Central Park on a summer day, with rowboats on the lake behind",
      eyebrowText: "Itinerary · 3 days · Family",
      h1: "New York with children",
      lead: "One big thing a day, a park after lunch and an early dinner. Three days paced so the city is a treat rather than a test of stamina.",
      heroMeta: ["3 days", "Ages 4–12", "5 stops a day", "Rest windows built in"],
      facts: [
        { label: "Days", value: "3 days, 4–5 hours of activity a day" },
        { label: "Pace", value: "Slow: one anchor a day, rest after lunch" },
        { label: "Best for", value: "Ages 4–12; trim it for toddlers and teenagers" },
        { label: "Transport", value: "Subway $3.00; about 150 of 472 stations are step-free" },
        { label: "Child tickets", value: "CityPASS child $129; Statue ferry child $16.50" },
      ],
      introEyebrow: "The shape of the trip",
      introTitle: "One big thing a day, and a park after lunch",
      introLead:
        "Children do not want more New York than adults do; they want it in smaller pieces. Each day has one anchor, one park or boat, and an early dinner.",
      introParagraphs: [
        "Museums and ferries in the morning, when patience is highest; playgrounds and boats after lunch; early evenings.",
        "With a toddler, cut the second stop each day and keep the park. With teenagers, add a second museum or a Broadway matinee.",
      ],
      stats: [
        { value: "3", label: "days" },
        { value: "5", label: "stops a day" },
        { value: "2", label: "parks" },
        { value: "0", label: "hotel moves" },
      ],
      introImage: "amnh-facade.webp",
      introImageAlt:
        "The metallic sphere of the Hayden Planetarium inside the Rose Center at the American Museum of Natural History",
      planTitle: "Three family days",
      planLead:
        "One morning anchor and an afternoon outdoors, all on the subway. Nothing needs a taxi.",
      days: [
        {
          number: "01",
          label: "Midtown",
          title: "Arrive gently, leave early",
          text: "Keep the first day small: one station, one square and an early night.",
          stops: [
            {
              what: "Grand Central Terminal",
              where: "Free; the ceiling is the attraction. Try the whispering gallery, then leave before the 17:00 rush. See the <a href=\"grand-central.html\">guide</a>.",
            },
            {
              what: "Lunch in Midtown",
              where: "The food concourse under Grand Central or a deli nearby, around $10–18.",
            },
            {
              what: "Bryant Park and the library",
              where: "Free. A lawn to run on, the library lions next door, and a good first stop.",
            },
            {
              what: "Times Square at dusk",
              where: "Fifteen minutes, holding hands, then leave. Better in the dark, worse the longer you stay.",
            },
            {
              what: "Early dinner and an early night",
              where: "Eat at 17:30 near the hotel. Jet lag and small children are a bad combination.",
            },
          ],
        },
        {
          number: "02",
          label: "Upper West Side",
          title: "Dinosaurs, then a playground",
          text: "The museum day. Go at opening, spend the afternoon in the park and stop before everyone is tired.",
          stops: [
            {
              what: "American Museum of Natural History",
              where: "Opens at 10:00 daily. $28 adult or $43 with one exhibition; NY, NJ and CT residents pay what they wish. Start with the dinosaurs — <a href=\"amnh.html\">AMNH guide</a>.",
            },
            {
              what: "Lunch on the Upper West Side",
              where: "Bagels or deli, around $10–15, then a proper sit-down.",
            },
            {
              what: "Central Park playgrounds",
              where: "Free. Enter at 81st Street beside the museum; Heckscher Playground is at the south end — <a href=\"central-park.html\">park guide</a>.",
            },
            {
              what: "Central Park Zoo (optional)",
              where: "A small zoo with a separate ticket, worth an hour or two while energy lasts.",
            },
            {
              what: "Early dinner and rest",
              where: "Back at the hotel by 18:00. Tomorrow is the busy day.",
            },
          ],
        },
        {
          number: "03",
          label: "Harbour &amp; Brooklyn",
          title: "One ferry, one park, one bridge",
          text: "The biggest day, and the one to book first: first ferry, skip Ellis, finish in Brooklyn.",
          stops: [
            {
              what: "Statue City Cruises ferry",
              where: "Book the first boat on the <a href=\"https://statuecitycruises.com/\" rel=\"nofollow noopener\" target=\"_blank\">official site</a>; adults from $25.50, children from $16.50. Liberty Island only, no Ellis — two to three hours. <a href=\"statue-of-liberty.html\">Full guide</a>.",
            },
            {
              what: "Lunch near the Seaport",
              where: "Fulton Street or the Seaport, five minutes from the ferry. The <a href=\"9-11-memorial.html\">9/11 Memorial</a> plaza is nearby and free; suit older children.",
            },
            {
              what: "Brooklyn Bridge Park",
              where: "Free. Subway to High Street for lawns, piers and playgrounds, with the <a href=\"brooklyn-bridge.html\">bridge</a> overhead.",
            },
            {
              what: "Jane's Carousel",
              where: "In DUMBO under the bridge: a restored carousel with ticketed rides. Check opening days first.",
            },
            {
              what: "DUMBO dinner and early night",
              where: "Pizza near the bridge, then the subway home. In summer, Coney Island's beach is a half-day swap for the park.",
            },
          ],
        },
      ],
      stayTitle: "One base for three nights",
      stayLead:
        "Do not move hotels with children. The Upper West Side suits the museum; Midtown everything else.",
      stayCaption: "Family-friendly bases for a three-day trip",
      stayRows: [
        ["<strong>Upper West Side</strong>", "AMNH and Central Park on the doorstep", "20 minutes from Midtown; quiet evenings"],
        ["<strong>Midtown</strong>", "Walk to Grand Central and Bryant Park", "Noisy and busy at night"],
        ["<strong>Lower Manhattan</strong>", "Near the ferry, the memorial and the bridge", "Dead evenings; few family restaurants"],
      ],
      budgetTitle: "What it costs",
      budgetLead:
        "Prices from November 2026, per person. Child fares apply to specific ages — check each operator.",
      budgetCaption: "Approximate family costs for the three-day plan",
      budgetRows: [
        ["AMNH", "$28 adult; $43 with one exhibition", "NY, NJ and CT residents pay what they wish"],
        ["Statue ferry", "$25.50 adult; $16.50 child; $22.50 senior", "Pedestal or crown +$0.30; official operator only"],
        ["CityPASS (optional)", "$149 adult; $129 child", "Only worth it if you will use five attractions"],
        ["Subway", "$3.00 a ride", "About 150 of 472 stations are step-free; all buses are accessible"],
        ["Food", "Bagel $4.50–7; slice $4–5.50", "Sit-down dinner for two $120–180 before tax"],
        ["Free hours", "Central Park, Grand Central, Staten Island Ferry", "The cheapest hours are often the best"],
      ],
      bookingTitle: "Book these before you fly",
      bookingText:
        "The first Statue ferry, a timed AMNH entry and, if you want one, a matinee. Everything else can move by two hours.",
      tipsTitle: "What makes or breaks the trip",
      tips: [
        {
          title: "One anchor, then a park",
          text: "Museums in the morning, parks after lunch. Plan a rest window instead of a second sight.",
        },
        {
          title: "Skip Ellis Island on the statue day",
          text: "Liberty Island alone keeps the trip to two or three hours, not four to five. The official operator is the only way to land.",
        },
        {
          title: "Use the free boats and parks",
          text: "The Staten Island Ferry is free, every 30 minutes or so, 25 minutes each way, stroller-friendly, and gives you the statue view without a queue.",
        },
        {
          title: "Eat early and carry snacks",
          text: "Children crash at 16:00, not at dinner. Eat at 17:30, carry snacks, and treat Times Square as a 15-minute stop.",
        },
      ],
      tipsImage: "staten-island-ferry.webp",
      tipsImageAlt: "The Staten Island Ferry at St. George with the Manhattan skyline behind it",
      otherTitle: "Different pace, different length",
      otherLead:
        "Older children or more days? These plans keep the same logic with more in them.",
      otherPlans: [
        {
          href: "3-days-in-nyc.html",
          kicker: "3 days",
          title: "Three days at adult pace",
          text: "The same length, a later finish and a Broadway evening.",
        },
        {
          href: "5-days-in-nyc.html",
          kicker: "5 days",
          title: "Five days in NYC",
          text: "Two extra days for a second museum and a slower Brooklyn morning.",
        },
        {
          href: "1-day-in-nyc.html",
          kicker: "1 day",
          title: "One day in New York",
          text: "A single-day version if the family trip is part of a longer stay.",
        },
      ],
      source: "nyc-with-kids",
      faqTitle: "Family trip questions",
      faq: faqItems,
      prev: { href: "3-days-in-nyc.html", label: "3 days in NYC" },
      next: { href: "5-days-in-nyc.html", label: "5 days in NYC" },
    }),
};
