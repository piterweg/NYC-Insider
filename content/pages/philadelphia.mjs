import { renderDayTripPage } from "../day-trip-template.mjs";

export default {
  path: "philadelphia.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Philadelphia Day Trip from New York",
  description:
    "A Philadelphia day trip from New York: Amtrak and NJ Transit options, Independence Hall and Liberty Bell tickets, Reading Terminal Market and a realistic hourly plan.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/philadelphia-skyline.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Philadelphia Day Trip from New York — The Complete Guide",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Philadelphia worth a day trip from New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. It is the easiest day trip out of the city: about an hour and a quarter by Amtrak, a compact and walkable historic core, and a market worth planning lunch around. You can see the essentials and be back in Manhattan the same evening.",
          },
        },
        {
          "@type": "Question",
          name: "Should I take Amtrak or NJ Transit to Philadelphia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Amtrak is faster at about an hour and a quarter and costs around $40–$150 round trip. The NJ Transit Northeast Corridor to Trenton plus the SEPTA Trenton Line takes about two and a quarter hours and costs around $50 round trip, so it is the cheaper option if you have the time.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to book Independence Hall in advance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Independence Hall tours are free but timed, and tickets go quickly in summer and around holidays. Reserve on the National Park Service site before you travel and check current opening hours.",
          },
        },
      ],
    },
  ],
  render: () =>
    renderDayTripPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "day-trips.html", label: "Day Trips" },
        { href: "philadelphia.html", label: "Philadelphia" },
      ],
      heroImage: "philadelphia-skyline.webp",
      heroAlt: "The Philadelphia skyline at sunset, seen from the train across the Schuylkill River",
      eyebrowText: "Day trip · Pennsylvania",
      h1: "Philadelphia in a day",
      lead: "The easiest day out of New York: an hour and a quarter on the train, a flat, walkable historic core and a market worth planning lunch around.",
      heroMeta: ["Amtrak 1 h 05", "One full day", "Walkable centre", "Best Tue–Thu or Sat"],
      facts: [
        { label: "Journey time", value: "1 h 05–1 h 25 by Amtrak; about 2 h 15 via Trenton" },
        { label: "Round trip", value: "$40–$150 by Amtrak; about $50 by NJ Transit + SEPTA" },
        { label: "Time needed", value: "One full day" },
        { label: "Best day", value: "Tuesday–Thursday or Saturday" },
      ],
      introEyebrow: "Why Philadelphia",
      introTitle: "The shortest good day out of New York",
      introLead:
        "Philadelphia is the day trip that does not ask much of you: no early alarm, no overnight bag, no complicated change of trains. The train is quick, the historic sights sit a few blocks from each other, and lunch is a market rather than a decision.",
      introParagraphs: [
        "The old core — Independence National Historical Park, the Liberty Bell and the 18th-century streets around them — is compact and flat. From 30th Street Station you can walk across the Schuylkill and be at Independence Hall within half an hour.",
        "Beyond it, Reading Terminal Market is the best lunch in the city and the Philadelphia Museum of Art gives you the Rocky Steps plus one of America's great collections. The historic core plus one of those is a full, satisfying day.",
      ],
      callouts: [
        {
          icon: "◆",
          title: "Book Independence Hall before you go",
          text: "Tickets are free but timed, and they go quickly in summer and around holidays. Reserve on the National Park Service site and arrive early for security.",
        },
        {
          icon: "◷",
          title: "Two routes, one station",
          text: "Amtrak and the NJ Transit and SEPTA combination both finish at 30th Street Station, so the plan after arrival is identical. Choose on price versus time.",
        },
      ],
      transportTitle: "Getting there: Amtrak or NJ Transit",
      transportLead:
        "Amtrak is faster and more expensive; the NJ Transit and SEPTA combination is slower and roughly half the price. Both end at 30th Street Station.",
      transportCaption: "New York to Philadelphia transport options, fares checked November 2026",
      transportRows: [
        [
          "<strong>Amtrak Northeast Regional</strong>",
          "1 h 05–1 h 25",
          "$40–$150",
          "Direct from Moynihan Train Hall at Penn Station; the fastest option. Fares rise as trains fill, so book ahead for the cheapest seats.",
        ],
        [
          "<strong>Amtrak Night Owl</strong>",
          "1 h 05–1 h 25",
          "from $10 each way",
          "Select departures only; the cheapest published fare on the route. Check current fares and schedules before planning a day around one.",
        ],
        [
          "<strong>NJ Transit + SEPTA</strong>",
          "about 2 h 15",
          "about $50",
          "NJ Transit Northeast Corridor to Trenton (about $18.75), then the SEPTA Trenton Line to 30th Street (about $6–$10). Cheapest, but the connection adds time and a platform change.",
        ],
      ],
      transportNote:
        "Journey times and fares are approximate and were checked in November 2026. Amtrak pricing is dynamic — check current fares and schedules when you book, and allow half an hour at the station.",
      highlightsTitle: "What the day is really about",
      highlightsLead:
        "Five things worth building the day around. You cannot do all of them slowly, so choose the historic core plus one of the museum or market stops.",
      highlights: [
        {
          kicker: "History",
          title: "Independence Hall and the Liberty Bell",
          text: "The two sights everyone comes for, a block apart. Independence Hall is a timed, free tour; the Liberty Bell is a short walk-through with a line that moves quickly.",
        },
        {
          kicker: "Lunch",
          title: "Reading Terminal Market",
          text: "A covered market with dozens of stalls — cheesesteaks, roast pork, pretzels, produce and sweets. Arrive before noon or after two to avoid the worst of the lunch crush.",
        },
        {
          kicker: "Old City",
          title: "The 18th-century streets",
          text: "Elfreth's Alley, Carpenters' Hall, Christ Church and the small streets between them reward a slow walk. This is the part of Philadelphia that feels least like a modern American city.",
        },
        {
          kicker: "Art",
          title: "The Rocky Steps and the Philadelphia Museum of Art",
          text: "The steps are free, and the view down the Benjamin Franklin Parkway is the city's best photograph. The museum itself holds one of the country's strongest collections.",
        },
        {
          kicker: "River",
          title: "Schuylkill River and Rittenhouse",
          text: "Walk back along the river or through Rittenhouse Square for coffee before the train. It is the calmest way to end a day that started in Manhattan.",
        },
      ],
      dayTitle: "A realistic Philadelphia day",
      dayLead:
        "A full day from New York with slack built in for the return train. Times assume an early but not punishing start.",
      dayStops: [
        {
          time: "07:30",
          title: "Train from Penn Station",
          text: "Take an early Amtrak from Moynihan Train Hall; the fastest trains reach 30th Street in about an hour and a quarter. Buy coffee and breakfast before boarding.",
        },
        {
          time: "09:15",
          title: "Walk to the historic core",
          text: "From 30th Street, walk across the Schuylkill or take a short bus to Independence National Historical Park. Travel light — the day is easiest with a small bag.",
        },
        {
          time: "09:45",
          title: "Independence Hall and the Liberty Bell",
          text: "Do the timed Independence Hall tour first, then the Liberty Bell. Both are free; the timed ticket is the only thing that can hold up the rest of the day.",
        },
        {
          time: "12:00",
          title: "Reading Terminal Market",
          text: "Lunch at the stalls, then a walk through Chinatown or back towards Old City. This is also the city's best stop if it rains.",
        },
        {
          time: "14:00",
          title: "Old City or the museum",
          text: "Choose one: Elfreth's Alley and the old streets, or the walk up the Benjamin Franklin Parkway to the Rocky Steps and the Philadelphia Museum of Art.",
        },
        {
          time: "17:30",
          title: "Early dinner, then the train",
          text: "Eat near 30th Street or Rittenhouse Square, then take an evening train back. Check the last sensible departure first.",
        },
      ],
      tips: [
        {
          icon: "◆",
          title: "Reserve the free Independence Hall ticket",
          text: "It costs nothing but needs booking, especially for summer weekends and school holidays. Tickets are released ahead of the date.",
        },
        {
          icon: "◷",
          title: "Do not try to see everything",
          text: "The historic core, the market and one museum is a good day. Adding the houses, the river walk and the museum means walking between things rather than seeing them.",
        },
        {
          icon: "☂",
          title: "Wear shoes you can walk in",
          text: "Downtown Philadelphia is flat and walkable. Expect several miles on foot between the train and the sights.",
        },
      ],
      otherTitle: "Other day trips",
      otherLead: "If Philadelphia sounds too easy, these are the next trips out of the city.",
      otherTrips: [
        {
          href: "washington-dc.html",
          kicker: "Long day",
          title: "Washington, D.C.",
          text: "The Mall, the Capitol and the Smithsonian museums, about three hours away and better with a night.",
        },
        {
          href: "boston.html",
          kicker: "Overnight",
          title: "Boston",
          text: "The Freedom Trail, Beacon Hill and the North End — a city that deserves more than a same-day return.",
        },
        {
          href: "hudson-valley.html",
          kicker: "Day trip",
          title: "Hudson Valley",
          text: "Dia Beacon, Storm King and the river villages, eighty minutes from Grand Central.",
        },
      ],
      source: "philadelphia",
      faq: [
        {
          q: "Is Philadelphia worth a day trip from New York?",
          a: "<p>Yes. It is the easiest day trip out of the city: a short Amtrak ride, a compact and walkable historic core, and a market worth planning lunch around.</p>",
        },
        {
          q: "Should I take Amtrak or NJ Transit?",
          a: "<p>Amtrak is faster at about an hour and a quarter and costs around $40–$150 round trip. The NJ Transit Northeast Corridor to Trenton plus the SEPTA Trenton Line takes about two and a quarter hours and costs around $50 round trip.</p>",
        },
        {
          q: "Do I need to book Independence Hall in advance?",
          a: "<p>Yes. Tours are free but timed, and tickets go quickly in summer and around holidays. Reserve on the National Park Service site before you travel.</p>",
        },
        {
          q: "What is the best day to visit Philadelphia?",
          a: "<p>Tuesday to Thursday for quiet trains and short queues, or Saturday for the market at its best. Check current schedules before booking, since weekend train times differ.</p>",
        },
      ],
      prev: { href: "day-trips.html", label: "All day trips" },
      next: { href: "washington-dc.html", label: "Washington, D.C." },
    }),
};
