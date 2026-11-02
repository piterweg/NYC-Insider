import { renderDayTripPage } from "../day-trip-template.mjs";

export default {
  path: "washington-dc.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Washington, D.C. Day Trip from New York",
  description:
    "A Washington, D.C. day trip from New York: Amtrak and Acela times, Capitol tour booking, Smithsonian museums, the National Mall and whether to stay overnight.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/washington-capitol.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Washington, D.C. Day Trip from New York — The Complete Guide",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can you visit Washington, D.C. as a day trip from New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is possible but rushed. Amtrak takes about three hours each way, leaving roughly five or six hours in the city. To see the Capitol, a museum and the memorials without hurrying, stay a night.",
          },
        },
        {
          "@type": "Question",
          name: "What is free to see in Washington, D.C.?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Smithsonian museums and the monuments and memorials on the National Mall are free. The Capitol is also free to visit, but the tour needs to be booked in advance.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to book the Capitol tour?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Capitol is free to visit but the tour should be reserved in advance rather than arranged on the day. Check current booking arrangements and security requirements before you travel.",
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
        { href: "washington-dc.html", label: "Washington, D.C." },
      ],
      heroImage: "washington-capitol.webp",
      heroAlt: "The United States Capitol on a clear day, seen across its lawn",
      eyebrowText: "Day trip · Washington, D.C.",
      h1: "Washington, D.C. in a day",
      lead: "Three hours down the Northeast Corridor, and a city that arranges its best free sights in a straight line. The honest answer is that it can be done in a day — but a night turns a sprint into a visit.",
      heroMeta: ["Amtrak 2 h 50", "Long day or overnight", "Free museums", "Best on a weekday"],
      facts: [
        { label: "Journey time", value: "2 h 50–3 h 20 on Amtrak; 2 h 45 on Acela" },
        { label: "Round trip", value: "$80–$250 by Amtrak; $200–$400 by Acela" },
        { label: "Time needed", value: "One very long day, or one night" },
        { label: "Best day", value: "A weekday" },
        { label: "Book ahead", value: "Capitol tour, booked in advance" },
      ],
      introEyebrow: "The honest answer",
      introTitle: "Possible in a day, better with a night",
      introLead:
        "Washington rewards a plan more than any other city on this list. The Mall is long, the museums are enormous, and the one thing you cannot skip — the Capitol — needs booking. Add six hours of train travel and the day becomes an exercise in choosing.",
      introParagraphs: [
        "If you go for a single day, choose one Smithsonian museum and one end of the Mall. The Capitol sits at the east end; the Lincoln Memorial and the Reflecting Pool at the west, with several miles of walking between them.",
        "With one night you can arrive late morning, walk the Mall in the afternoon and see the memorials at dusk, then do the Capitol and a second museum the next morning. That is the version most people remember — and almost everything, including the Smithsonian and the Capitol tour, is free.",
      ],
      callouts: [
        {
          icon: "◆",
          title: "Reserve the Capitol before you book the train",
          text: "The Capitol tour is free but has to be arranged in advance, and your slot can shape the whole day. Book it first, then choose a train.",
        },
        {
          icon: "◷",
          title: "One museum is the right number",
          text: "The Smithsonian is not one museum but a row of them, each the size of a department store. Pick one — Air and Space or Natural History — and give it two hours.",
        },
      ],
      transportTitle: "Getting there: Amtrak or Acela",
      transportLead:
        "Both leave from Moynihan Train Hall at Penn Station and arrive at Union Station, which is on the edge of the Mall — you walk out of the train and into the city.",
      transportCaption: "New York to Washington, D.C. transport options, fares checked November 2026",
      transportRows: [
        [
          "<strong>Amtrak Northeast Regional</strong>",
          "2 h 50–3 h 20",
          "$80–$250",
          "The workhorse service, with more departures and cheaper advance fares than Acela. Book early; the lowest buckets sell out first.",
        ],
        [
          "<strong>Amtrak Acela</strong>",
          "2 h 45",
          "$200–$400",
          "The fastest train, with fewer stops. Worth the extra fare if you are going for a single day and every hour in the city counts.",
        ],
      ],
      transportNote:
        "Journey times and fares are approximate and were checked in November 2026. Amtrak prices are dynamic — check current fares and schedules before booking, and allow time for security screening at Union Station.",
      highlightsTitle: "What the day is really about",
      highlightsLead:
        "Washington is a walking city built around one long green corridor. These five are the core of it.",
      highlights: [
        {
          kicker: "The Mall",
          title: "The National Mall and its memorials",
          text: "The long lawn from the Capitol to the Lincoln Memorial, with the Washington Monument in the middle. It is free, open air and best walked early or late rather than at midday.",
        },
        {
          kicker: "Capitol",
          title: "The United States Capitol",
          text: "The one interior you should book. A tour covers the rotunda and the history of the building; security screening takes time, so arrive before your slot rather than exactly on it.",
        },
        {
          kicker: "Museums",
          title: "The Smithsonian",
          text: "Free museums, each large enough to absorb a half-day. Air and Space and Natural History are the most popular; the American History and African American History museums are just as good and usually calmer.",
        },
        {
          kicker: "West end",
          title: "The Lincoln Memorial and Reflecting Pool",
          text: "The most photogenic spot in the city, and the view back towards the Capitol is the one to wait for. Go near dusk when the crowds thin and the light softens.",
        },
        {
          kicker: "Georgetown",
          title: "Georgetown in the evening",
          text: "Historic streets, the C&O Canal and more places to eat than the Mall area. It is the sensible place to spend the hours before an evening train.",
        },
      ],
      dayTitle: "A realistic Washington day",
      dayLead:
        "The single-day version, with an early start and an evening return. Times are indicative — check current train schedules and your Capitol slot before committing.",
      dayStops: [
        {
          time: "06:30",
          title: "Train from Penn Station",
          text: "Take the earliest sensible Amtrak from Moynihan Train Hall. The journey is around three hours, so breakfast on the train is the efficient move.",
        },
        {
          time: "10:00",
          title: "Arrive Union Station",
          text: "Walk out and on to the Mall. Travel light — there are few places to put a bag down later in the day.",
        },
        {
          time: "10:30",
          title: "One Smithsonian museum",
          text: "Air and Space is closest to Union Station and the obvious first stop. Two hours is enough to see it properly without reading every label.",
        },
        {
          time: "13:00",
          title: "Lunch near the Mall",
          text: "Museum cafés are convenient rather than memorable; Union Station has more choice. Then walk west towards the Capitol for your tour.",
        },
        {
          time: "14:30",
          title: "Capitol tour",
          text: "Your booked slot. Allow 15 minutes for security, and keep the rest of the afternoon loose in case the tour runs long.",
        },
        {
          time: "16:00",
          title: "Mall walk, dinner and the train",
          text: "Walk the length of the Mall to the Lincoln Memorial, then head to Georgetown for an early dinner before an evening train back to New York.",
        },
      ],
      tips: [
        {
          icon: "◆",
          title: "Book the Capitol first",
          text: "It shapes everything else. Once you have a slot, choose the train around it — not the other way round.",
        },
        {
          icon: "◷",
          title: "Overnight if you can",
          text: "One night gives you two half-days instead of one sprint, and lets you see the memorials at dusk. It genuinely changes the trip.",
        },
        {
          icon: "☂",
          title: "The Mall is longer than it looks",
          text: "Distances between the Capitol and the Lincoln Memorial are deceiving on a map. Wear comfortable shoes, allow time, and use the Metro for longer hops.",
        },
      ],
      otherTitle: "Other day trips",
      otherLead: "Three more trips on the same corridor, or one that leaves the city behind entirely.",
      otherTrips: [
        {
          href: "philadelphia.html",
          kicker: "Day trip",
          title: "Philadelphia",
          text: "Independence Hall, the Liberty Bell and Reading Terminal Market, an easy day on a much shorter train.",
        },
        {
          href: "boston.html",
          kicker: "Overnight",
          title: "Boston",
          text: "The Freedom Trail, Beacon Hill and the North End, four hours further up the same line.",
        },
        {
          href: "niagara-falls.html",
          kicker: "Overnight",
          title: "Niagara Falls",
          text: "The falls and Maid of the Mist, nine hours from Penn Station on a train that runs once a day.",
        },
      ],
      source: "washington-dc",
      faq: [
        {
          q: "Can you visit Washington, D.C. in a day?",
          a: "<p>Yes, but you will be choosing. Amtrak takes about three hours each way, which leaves five or six hours in the city. One museum, the Capitol and a walk along the Mall is realistic.</p>",
        },
        {
          q: "What is free in Washington, D.C.?",
          a: "<p>The Smithsonian museums, the monuments and the memorials on the National Mall are all free. The Capitol is free too, but the tour has to be reserved. Budget mainly for the train, food and a hotel.</p>",
        },
        {
          q: "Do I need to book the Capitol tour?",
          a: "<p>Yes. It is free but should be arranged in advance rather than on the day. Check the current booking process and security requirements before you travel.</p>",
        },
        {
          q: "What is the best day to go to Washington?",
          a: "<p>A weekday. The Amtrak trains are quieter and the museums are calmer. Check current fares and schedules before booking, since weekend timetables differ.</p>",
        },
      ],
      prev: { href: "philadelphia.html", label: "Philadelphia" },
      next: { href: "boston.html", label: "Boston" },
    }),
};
