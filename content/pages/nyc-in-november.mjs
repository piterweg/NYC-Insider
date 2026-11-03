import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is November a good time to visit New York?",
    a: "<p>Yes, especially the first half: foliage, moderate crowds and lower prices than December. Thanksgiving week is much busier and more expensive.</p>",
  },
  {
    q: "How cold is New York in November?",
    a: "<p>Average highs are around 54°F (12°C) and lows around 41°F (5°C); it gets colder through the month.</p>",
  },
  {
    q: "What is on in November?",
    a: "<p>The NYC Marathon on 1 November 2026, the last of the fall foliage and Macy's Thanksgiving Day Parade on 26 November 2026.</p>",
  },
  {
    q: "When is the Thanksgiving parade?",
    a: "<p>26 November 2026, 8:30am–noon, from Central Park West and 77th Street to Herald Square. It is free to watch.</p>",
  },
];

export default {
  path: "nyc-in-november.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in November — Weather, Crowds and What to Do",
  description:
    "November in New York: cold, crisp days, the marathon and Thanksgiving parade, typical temperatures in °F and °C and the holiday crowds arriving.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in November — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in November: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-november.html", label: "November" },
      ],
      heroImage: "central-park-bow-bridge.webp",
      heroAlt: "Bow Bridge in Central Park",
      eyebrowText: "Month guide",
      h1: "New York in November: the parade and the marathon",
      lead: "November is the hinge between autumn and the holidays: foliage peaks early, the marathon takes over the first Sunday and the Thanksgiving parade closes the month. It gets cold, but the city is at its most festive.",
      heroMeta: ["54°F / 41°F", "Moderate until Thanksgiving", "Parade and marathon", "About 9¾ hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "54°F / 41°F (12°C / 5°C)" },
        { label: "Rain days", value: "About 9 a month" },
        { label: "Crowds", value: "Moderate, then very busy at Thanksgiving" },
        { label: "What's on", value: "NYC Marathon 1 November; Thanksgiving parade 26 November 2026" },
        { label: "Daylight", value: "About 9¾ hours" },
      ],
      introTitle: "The last of the colour, then the holidays",
      introLead:
        "November begins with leaves and ends with a parade. Temperatures fall through the month, the daylight shortens quickly and the holiday season arrives in the final week.",
      introParagraphs: [
        "Average highs reach 54°F (12°C) with lows around 41°F (5°C). Daylight drops to about nine and three-quarter hours, and the cold becomes the thing you plan around rather than the heat.",
        "The first Sunday belongs to the New York City Marathon, which closes streets across all five boroughs. Thanksgiving week brings the parade and the first holiday crowds; if you want the atmosphere without the peak prices, go in the first half of the month.",
      ],
      introImage: "manhattan-skyline-night.webp",
      introImageAlt: "Lower Manhattan and the Brooklyn Bridge lit at night",
      monthName: "November",
      weatherTitle: "What November weather feels like",
      weatherLead: "Crisp and cold, with short days and the first real winter chill.",
      weatherRows: [
        ["Average high", "54°F (12°C)"],
        ["Average low", "41°F (5°C)"],
        ["Rain days", "About 9 a month"],
        ["Daylight", "About 9¾ hours"],
        ["What it feels like", "Crisp and cold, with short days and the first real winter chill."],
        ["Best use", "Museums, the last foliage walks and the holiday lights at the end of the month."],
      ],
      eventsTitle: "What is on in November",
      eventsLead: "A marathon, the last foliage and the Thanksgiving parade.",
      events: [
        { when: "1 November 2026", title: "New York City Marathon", text: "The race closes streets across all five boroughs for most of the day. Check the route if you are sightseeing." },
        { when: "26 November 2026", title: "Macy's Thanksgiving Day Parade", text: "The 100th edition runs 8:30am–noon from Central Park West and 77th Street to Herald Square. Free to watch." },
        { when: "Late October to mid-November", title: "Fall foliage", text: "The last weeks of colour; the peak is usually early to mid-November." },
        { when: "Late November", title: "The holiday season begins", text: "The Winter Village is open and the holiday crowds build through the final week; hotel rates rise with them." },
      ],
      planTitle: "How to spend a November day",
      planLead: "Cold mornings are for museums, the last bright afternoons for walks, and the evenings for long dinners.",
      planCards: [
        { kicker: "Morning", title: "A museum morning", text: "November is quiet until Thanksgiving week, and the big museums are comfortable on a cold day." },
        { kicker: "Midday", title: "The last foliage walk", text: "If the leaves are still on, the park is the place; otherwise walk the High Line before the cold sets in." },
        { kicker: "Evening", title: "A warm table", text: "November evenings are for long dinners and the holiday lights going up along the shopping streets." },
      ],
      practicalTitle: "November planning notes",
      crowds:
        "Crowds are moderate for the first three weeks, then very busy for Thanksgiving week. Hotel rates peak around the holiday, and both the marathon and the parade close roads.",
      packing:
        "A proper winter coat, hat, gloves and scarf by the end of the month, with layers for the milder first half. Waterproof shoes for wet leaves and cold rain.",
      tips: [
        { icon: "◆", title: "Book Thanksgiving early", text: "Thanksgiving week is one of the busiest travel periods of the year; hotel rates peak and the best rooms go first." },
        { icon: "◷", title: "Check the marathon route", text: "The first Sunday closes streets in all five boroughs for most of the day; plan around it if you are sightseeing." },
        { icon: "☂", title: "Go early in the month", text: "The first half of November is quiet, cold but manageable, and the foliage may still be at its peak." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in October", href: "nyc-in-october.html", text: "Crisp walking weather and the start of the foliage season." },
        { kicker: "Next month", title: "NYC in December", href: "nyc-in-december.html", text: "Holiday lights, the Rockefeller tree and the busiest weeks of the year." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-november",
      faq,
      prev: { href: "nyc-in-october.html", label: "NYC in October" },
      next: { href: "nyc-in-december.html", label: "NYC in December" },
    }),
};
