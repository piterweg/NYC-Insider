import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is October a good time to visit New York?",
    a: "<p>Yes. Cool, dry walking weather and the start of the foliage season, with fewer crowds than summer.</p>",
  },
  {
    q: "When is fall foliage in New York?",
    a: "<p>Usually from late October, peaking in early to mid-November. The exact timing shifts with the weather, so check the park's updates before planning around it.</p>",
  },
  {
    q: "How cold is New York in October?",
    a: "<p>Average highs are around 64°F (18°C) and lows around 52°F (11°C), with colder evenings later in the month.</p>",
  },
  {
    q: "What is on in October?",
    a: "<p>Foliage season and the opening of Bryant Park's Winter Village on 28 October 2026.</p>",
  },
];

export default {
  path: "nyc-in-october.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in October — Weather, Crowds and What to Do",
  description:
    "October in New York: crisp walking weather and fall foliage, typical temperatures in °F and °C, moderate crowds and what to book ahead of your trip.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in October — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in October: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-october.html", label: "October" },
      ],
      heroImage: "central-park-bow-bridge.webp",
      heroAlt: "Bow Bridge in Central Park",
      eyebrowText: "Month guide",
      h1: "New York in October: foliage and crisp air",
      lead: "October is autumn at its best: highs in the mid-60s, low humidity and the park turning colour towards the end of the month. It is a good month for walking, with summer crowds gone and the holiday season not yet arrived.",
      heroMeta: ["64°F / 52°F", "Moderate crowds", "Fall foliage", "About 11 hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "64°F / 52°F (18°C / 11°C)" },
        { label: "Rain days", value: "About 9.5 a month" },
        { label: "Crowds", value: "Moderate" },
        { label: "What's on", value: "Fall foliage; Bryant Park Winter Village opens 28 October 2026" },
        { label: "Daylight", value: "About 11 hours" },
      ],
      introTitle: "The month the park turns",
      introLead:
        "October is the most comfortable month for walking: cool enough for a coat, warm enough for a long afternoon, and dry more often than not. The foliage is the headline, but the whole city is at an easy pace.",
      introParagraphs: [
        "Average highs reach 64°F (18°C) with lows around 52°F (11°C), and daylight drops to about eleven hours. The first half of the month often feels like a mild September; the second half brings the colour and the cold evenings.",
        "Foliage peaks between late October and mid-November, and Bryant Park's Winter Village opens on 28 October 2026 — the skating rink's admission is free, with rentals paid. It is a good month to combine long walks with the museums as the weather turns.",
      ],
      introImage: "fifth-avenue-cab.webp",
      introImageAlt: "A yellow taxi on Fifth Avenue in Manhattan",
      monthName: "October",
      weatherTitle: "What October weather feels like",
      weatherLead: "Crisp and dry, with cool evenings and the first cold mornings.",
      weatherRows: [
        ["Average high", "64°F (18°C)"],
        ["Average low", "52°F (11°C)"],
        ["Rain days", "About 9.5 a month"],
        ["Daylight", "About 11 hours"],
        ["What it feels like", "Crisp and dry, with cool evenings and the first cold mornings."],
        ["Best use", "Park and waterfront walks; museums on the cooler days."],
      ],
      eventsTitle: "What is on in October",
      eventsLead: "Foliage season and the first holiday market of the year.",
      events: [
        { when: "Late October to mid-November", title: "Fall foliage", text: "The park turns colour from late October; the peak is usually early to mid-November. Weekday mornings are calmest." },
        { when: "From 28 October 2026", title: "Bryant Park Winter Village", text: "The skating rink and market open for the season; rink admission is free, skate rental is paid." },
        { when: "All month", title: "Long walking weather", text: "October is one of the best months for the bridge walk, the High Line and the neighbourhoods; book outdoor tables while you can." },
      ],
      planTitle: "How to spend an October day",
      planLead: "Walk in the morning, museum at midday and an early dinner as the evenings turn cold.",
      planCards: [
        { kicker: "Morning", title: "A park walk", text: "Start at 72nd Street and walk north; the light and the colour are best before the afternoon crowds." },
        { kicker: "Midday", title: "A museum", text: "As the weather cools, the big museums become the natural midday stop." },
        { kicker: "Evening", title: "An early dinner", text: "The evenings are cold but the restaurants are less busy than in summer; book a neighbourhood table." },
      ],
      practicalTitle: "October planning notes",
      crowds:
        "Crowds are moderate: summer is over and the holiday season has not started, except for the Winter Village opening and the first foliage weekends. Weekdays are calm everywhere.",
      packing:
        "A warm jacket or coat, layers and closed shoes for wet leaves. An umbrella is worth carrying; October rain is less frequent but the streets get slippery.",
      tips: [
        { icon: "◷", title: "Time the foliage", text: "Peak colour usually arrives in early to mid-November. Late October is early but quieter; check the park's foliage updates." },
        { icon: "◆", title: "Use the last warm days", text: "The first half of October is often mild enough for outdoor dining and long walks; make the most of it." },
        { icon: "☂", title: "Book the Winter Village early", text: "The rink and market get busy as the season opens; go on a weekday." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in September", href: "nyc-in-september.html", text: "Warm days, the fewest rain days and thinner crowds." },
        { kicker: "Next month", title: "NYC in November", href: "nyc-in-november.html", text: "The marathon, Thanksgiving and the last of the foliage." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-october",
      faq,
      prev: { href: "nyc-in-september.html", label: "NYC in September" },
      next: { href: "nyc-in-november.html", label: "NYC in November" },
    }),
};
