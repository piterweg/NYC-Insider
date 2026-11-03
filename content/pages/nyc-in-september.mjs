import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is September the best month to visit New York?",
    a: "<p>Many would say yes: warm days, cool evenings, the fewest rain days of any month and smaller crowds after mid-month.</p>",
  },
  {
    q: "How warm is New York in September?",
    a: "<p>Average highs are around 77°F (25°C) and lows around 63°F (17°C), with lower humidity than July and August.</p>",
  },
  {
    q: "When is the US Open?",
    a: "<p>It normally finishes in the first half of September; the 2026 edition runs 30 August–13 September. Check the official site for current dates.</p>",
  },
  {
    q: "Is September busy in New York?",
    a: "<p>The first half is busy with the US Open and late-summer visitors; from mid-month the city becomes noticeably calmer.</p>",
  },
];

export default {
  path: "nyc-in-september.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in September — Weather, Crowds and What to Do",
  description:
    "September in New York: warm days and the year's fewest rain days, typical temperatures in °F and °C, the US Open and thinner crowds after mid-month.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in September — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in September: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-september.html", label: "September" },
      ],
      heroImage: "central-park-bow-bridge.webp",
      heroAlt: "Bow Bridge in Central Park",
      eyebrowText: "Month guide",
      h1: "New York in September: the best month of the year",
      lead: "September is the safest answer to when to visit New York: warm days, cool evenings, the lowest rain count of the year and the summer crowds heading home. It is also when the US Open finishes in Queens.",
      heroMeta: ["77°F / 63°F", "Busy early, calmer late", "Driest month", "About 12½ hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "77°F / 63°F (25°C / 17°C)" },
        { label: "Rain days", value: "About 9, the driest month" },
        { label: "Crowds", value: "Busy early, calmer later" },
        { label: "What's on", value: "The US Open in early September; the best-weather window" },
        { label: "Daylight", value: "About 12½ hours" },
      ],
      introTitle: "Summer without the heat",
      introLead:
        "September keeps the warmth but loses the humidity and the crowds. Days are still in the mid-70s, evenings are cool enough for a jacket, and the light softens into the best walking weather of the year.",
      introParagraphs: [
        "Average highs reach 77°F (25°C) with lows around 63°F (17°C), and the month averages fewer wet days than any other. Daylight is about twelve and a half hours, and the parks and waterfronts are at their most comfortable.",
        "The first week still belongs to the US Open in Queens, and the start of the school year marks the point when the city exhales. From mid-September the museums, restaurants and neighbourhoods are easier, which makes it the best all-round month for a first trip.",
      ],
      introImage: "central-park-nyc.webp",
      introImageAlt: "Central Park's lawns and trees in New York City",
      monthName: "September",
      weatherTitle: "What September weather feels like",
      weatherLead: "Warm days, cool evenings and lower humidity than midsummer.",
      weatherRows: [
        ["Average high", "77°F (25°C)"],
        ["Average low", "63°F (17°C)"],
        ["Rain days", "About 9, the fewest of any month"],
        ["Daylight", "About 12½ hours"],
        ["What it feels like", "Warm days, cool evenings and lower humidity than midsummer."],
        ["Best use", "Everything outdoors: parks, waterfronts and long neighbourhood walks."],
      ],
      eventsTitle: "What is on in September",
      eventsLead: "The US Open finishes, and the city enters its best-weather window.",
      events: [
        { when: "Early September", title: "The US Open", text: "The tennis finishes at Flushing Meadows in the first half of the month (2026: 30 August–13 September); check the official site for current dates." },
        { when: "September to early October", title: "The best-weather window", text: "This is the second of the year's two best stretches; book the outdoor sights and restaurant terraces." },
        { when: "From mid-September", title: "The city calms down", text: "Once the school year starts, the summer crowds thin and museums and restaurants become easier to book." },
      ],
      planTitle: "How to spend a September day",
      planLead: "This is the month for long walks: park, waterfront and a late outdoor dinner.",
      planCards: [
        { kicker: "Morning", title: "Central Park", text: "The park at its best: warm but not hot, with the first hints of autumn colour." },
        { kicker: "Midday", title: "The High Line or a waterfront", text: "September is the month for long outdoor walks; the High Line and Brooklyn Bridge Park are at their best." },
        { kicker: "Evening", title: "Outdoor dinner", text: "Terrace season is still open and the evenings are cool and comfortable." },
      ],
      practicalTitle: "September planning notes",
      crowds:
        "September starts busy with the US Open and the last of the summer visitors, then calms noticeably from mid-month. The later weeks are one of the best combinations of good weather and manageable crowds in the year.",
      packing:
        "Light layers, comfortable walking shoes and a light jacket for the evening. September can still deliver a hot afternoon, so keep a summer layer too.",
      tips: [
        { icon: "◷", title: "Aim for the second half", text: "If you can choose your dates, mid to late September gives the best weather with far fewer people." },
        { icon: "◆", title: "Book the outdoor sights", text: "This is the best month for the High Line, the bridge walk and the waterfront; timed tickets for decks are still worth booking." },
        { icon: "☂", title: "Do not write off the US Open", text: "The tournament ends in the first half of September; if tennis is the reason for the trip, plan the first week." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in August", href: "nyc-in-august.html", text: "The US Open arrives and the last of the summer heat." },
        { kicker: "Next month", title: "NYC in October", href: "nyc-in-october.html", text: "Crisp walking weather and the start of the foliage season." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-september",
      faq,
      prev: { href: "nyc-in-august.html", label: "NYC in August" },
      next: { href: "nyc-in-october.html", label: "NYC in October" },
    }),
};
