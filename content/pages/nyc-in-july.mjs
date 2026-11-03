import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is July a good time to visit New York?",
    a: "<p>If you can handle heat and humidity, yes: long evenings, free concerts and a lively city. If heat bothers you, May or September are better choices.</p>",
  },
  {
    q: "How hot is New York in July?",
    a: "<p>Average highs are around 84°F (29°C) and lows around 70°F (21°C), with humidity that makes it feel hotter. Afternoon storms are common.</p>",
  },
  {
    q: "What is on in July?",
    a: "<p>Restaurant Week from mid-July to mid-August and free summer concerts across the parks. The 2026 International Naval Review ran 3–7 July; check the official site for future dates.</p>",
  },
  {
    q: "Does it rain in July?",
    a: "<p>About ten or eleven wet days, mostly as short afternoon storms that pass within an hour or two.</p>",
  },
];

export default {
  path: "nyc-in-july.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in July — Weather, Crowds and What to Do",
  description:
    "July in New York: heat, humidity and afternoon storms, typical temperatures in °F and °C, free concerts, Restaurant Week and how to stay cool.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/high-line.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in July — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in July: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-july.html", label: "July" },
      ],
      heroImage: "high-line.webp",
      heroAlt: "The High Line elevated park in Chelsea",
      eyebrowText: "Month guide",
      h1: "New York in July: heat, storms and long evenings",
      lead: "July is hot and humid, with highs around 84°F and afternoon storms that pass quickly. The city responds by moving outside in the evening: free concerts, waterfront parks and a restaurant scene that spills onto the pavement.",
      heroMeta: ["84°F / 70°F", "Hottest month", "Free concerts", "About 14¾ hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "84°F / 70°F (29°C / 21°C)" },
        { label: "Rain days", value: "About 10.5 a month" },
        { label: "Crowds", value: "Very busy" },
        { label: "What's on", value: "Restaurant Week from mid-July; free summer concerts" },
        { label: "Daylight", value: "About 14¾ hours" },
      ],
      introTitle: "Hot days, loud nights",
      introLead:
        "July is the hottest month in New York, and the humidity is what people remember. The trick is to plan the day around the heat: mornings outdoors, afternoons indoors or in the shade, evenings out.",
      introParagraphs: [
        "Average highs reach 84°F (29°C) and lows around 70°F (21°C), with about fourteen and three-quarter hours of daylight. Afternoon thunderstorms are common and usually brief, cooling the streets for the evening.",
        "Restaurant Week starts in mid-July, running into mid-August, and the free summer concerts are in full swing. The parks and waterfronts are busy at weekends, but weekdays are easier and the long evenings are the best part of the month.",
      ],
      introImage: "brooklyn-bridge-sunset.webp",
      introImageAlt: "The Brooklyn Bridge at sunset",
      monthName: "July",
      weatherTitle: "What July weather feels like",
      weatherLead: "Hot and humid, with afternoon storms and warm, sticky evenings.",
      weatherRows: [
        ["Average high", "84°F (29°C)"],
        ["Average low", "70°F (21°C)"],
        ["Rain days", "About 10.5 a month"],
        ["Daylight", "About 14¾ hours"],
        ["What it feels like", "Hot and humid, with afternoon storms and warm, sticky evenings."],
        ["Best use", "Early-morning walks, air-conditioned museums and waterfront evenings."],
      ],
      eventsTitle: "What is on in July",
      eventsLead: "Restaurant Week, free concerts and the height of the summer season.",
      events: [
        { when: "Mid-July to mid-August", title: "NYC Restaurant Week", text: "Prix-fixe menus at $30, $45 and $60 across the city; book as soon as reservations open." },
        { when: "All month", title: "Free summer concerts", text: "SummerStage, BRIC Celebrate Brooklyn! and Lincoln Center Summer for the City continue through the summer; check each programme." },
        { when: "All month", title: "The waterfront at night", text: "The long evenings make the rivers the best place to be after 7pm, with free skyline views." },
      ],
      planTitle: "How to spend a July day",
      planLead: "Beat the heat by starting early and staying out late, with an indoor middle to the day.",
      planCards: [
        { kicker: "Morning", title: "Walk before the heat", text: "Start by 8am for the park or the High Line; by midday the pavements are hot and the shade is crowded." },
        { kicker: "Afternoon", title: "Indoors or on the water", text: "Pick a museum, or take the free Staten Island Ferry for the harbour breeze. Afternoon storms are a good excuse for a long lunch." },
        { kicker: "Evening", title: "A free concert", text: "The free summer programme is the heart of a July evening; bring water and a blanket." },
      ],
      practicalTitle: "July planning notes",
      crowds:
        "July is very busy, with summer holidays in full swing. The big sights sell out, the parks are crowded at weekends and the waterfront is busiest at sunset.",
      packing:
        "Light, loose clothing, sunscreen, a hat and a refillable water bottle. A light rain jacket for afternoon storms, and comfortable shoes for walking on hot pavements.",
      tips: [
        { icon: "◷", title: "Do the outdoor sights early", text: "The city is at its hottest from 2pm to 5pm; do the walking before noon and save the museums for the afternoon." },
        { icon: "◆", title: "Carry water and use the shade", text: "There are fountains and refill stations in the big parks. Museums and libraries, with free WiFi and air conditioning, are good midday refuges." },
        { icon: "☂", title: "Watch the storm forecast", text: "July storms are short but intense. If thunder starts, move indoors rather than waiting it out under a tree." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in June", href: "nyc-in-june.html", text: "The longest evenings, Pride and the first free concerts." },
        { kicker: "Next month", title: "NYC in August", href: "nyc-in-august.html", text: "The US Open arrives and summer begins to wind down." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-july",
      faq,
      prev: { href: "nyc-in-june.html", label: "NYC in June" },
      next: { href: "nyc-in-august.html", label: "NYC in August" },
    }),
};
