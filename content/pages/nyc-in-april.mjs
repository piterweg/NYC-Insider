import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is April a good time to visit New York?",
    a: "<p>Yes: mild days, blossom and longer evenings. It is busy at weekends, so book the big sights and restaurants ahead of time.</p>",
  },
  {
    q: "How warm is New York in April?",
    a: "<p>Average highs are around 63°F (17°C) and lows around 45°F (7°C). Evenings are cool, so bring a jacket.</p>",
  },
  {
    q: "When is blossom in Central Park?",
    a: "<p>Late April is the usual peak. The exact week shifts with the weather, so check the park's updates before planning a trip around it.</p>",
  },
  {
    q: "Does it rain in April?",
    a: "<p>About eleven wet days on average, often as short showers. A compact umbrella and a light waterproof layer are enough.</p>",
  },
];

export default {
  path: "nyc-in-april.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in April — Weather, Crowds and What to Do",
  description:
    "April in New York: mild days and blossom, typical temperatures in °F and °C, rain days, crowd levels and the outdoor sights worth booking ahead.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-nyc.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in April — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in April: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-april.html", label: "April" },
      ],
      heroImage: "central-park-nyc.webp",
      heroAlt: "Central Park's lawns and trees in spring",
      eyebrowText: "Month guide",
      h1: "New York in April: blossom and longer days",
      lead: "April is when New York becomes an outdoor city again. Highs reach the low 60s, the park fills with blossom and the first warm days bring everyone outside; it is also one of the better-value months before summer pricing arrives.",
      heroMeta: ["63°F / 45°F", "Busy", "Blossom", "About 13¼ hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "63°F / 45°F (17°C / 7°C)" },
        { label: "Rain days", value: "About 11 a month" },
        { label: "Crowds", value: "Busy, especially at weekends" },
        { label: "What's on", value: "Blossom in the parks; the best-weather window opens" },
        { label: "Daylight", value: "About 13¼ hours" },
      ],
      introTitle: "The month the parks reopen",
      introLead:
        "April is the first month that reliably feels like spring. The city's outdoor life restarts: park benches, café tables, long walks, and light that lasts well into the evening.",
      introParagraphs: [
        "Average highs climb to 63°F (17°C) with lows around 45°F (7°C), and daylight reaches about thirteen hours. Rain is still common, but the wet days are warmer than in March, and the parks are at their freshest.",
        "Blossom is the reason many people book April: the park fills with it late in the month, and the High Line and the waterfront are at their best. It is a busy month, so book the big sights and the good restaurants ahead.",
      ],
      introImage: "central-park-bow-bridge.webp",
      introImageAlt: "Bow Bridge in Central Park",
      monthName: "April",
      weatherTitle: "What April weather feels like",
      weatherLead: "Mild and often sunny, with cool mornings and occasional rain.",
      weatherRows: [
        ["Average high", "63°F (17°C)"],
        ["Average low", "45°F (7°C)"],
        ["Rain days", "About 11 a month"],
        ["Daylight", "About 13¼ hours"],
        ["What it feels like", "Mild and often sunny, with cool mornings and occasional rain."],
        ["Best use", "Parks, the High Line and outdoor meals; museums on the wet days."],
      ],
      eventsTitle: "What is on in April",
      eventsLead: "Blossom season and the start of the year's best weather window.",
      events: [
        { when: "Late April", title: "Blossom in the parks", text: "Central Park fills with blossom late in the month. Weekday mornings are the quietest time to see it." },
        { when: "All month", title: "The best-weather window opens", text: "Mid-April to mid-June is the first of the year's two best stretches for walking and outdoor sights." },
        { when: "All month", title: "Restaurant terraces return", text: "Outdoor tables reopen across the city; book ahead for the first warm weekends." },
      ],
      planTitle: "How to spend an April day",
      planLead: "Use the mild weather: park in the morning, markets and galleries at midday, an outdoor table in the evening.",
      planCards: [
        { kicker: "Morning", title: "Central Park in blossom", text: "Enter at 72nd Street and walk the Mall to Bethesda Terrace and the Bow Bridge." },
        { kicker: "Midday", title: "The High Line or the waterfront", text: "Both are at their best in April; finish with lunch in Chelsea or the West Village." },
        { kicker: "Evening", title: "Outdoor dinner", text: "Book a terrace table; April evenings are cool but usable with a jacket." },
      ],
      practicalTitle: "April planning notes",
      crowds:
        "April is busy, especially at weekends when the first warm days arrive. The big museums and the park are the pinch points; go early or late and book restaurants ahead.",
      packing:
        "Pack layers, a light waterproof jacket and comfortable walking shoes. A warm layer for the evening matters, because April afternoons can be mild while the evening drops into the 40s.",
      tips: [
        { icon: "◆", title: "Book the big sights ahead", text: "April is busy; timed tickets for the big museums and observation decks are worth arranging before you travel." },
        { icon: "◷", title: "Go early for blossom", text: "The park is calmest before 10am. Weekends in blossom season are genuinely crowded." },
        { icon: "☂", title: "Keep an indoor option", text: "April showers are real. Keep one museum or market planned for each day as a fallback." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in March", href: "nyc-in-march.html", text: "Cold mornings, longer days and the first park afternoons." },
        { kicker: "Next month", title: "NYC in May", href: "nyc-in-may.html", text: "Warm days, long evenings and the best walking weather of the spring." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-april",
      faq,
      prev: { href: "nyc-in-march.html", label: "NYC in March" },
      next: { href: "nyc-in-may.html", label: "NYC in May" },
    }),
};
