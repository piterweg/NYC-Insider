import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is May a good time to visit New York?",
    a: "<p>Yes, one of the best. Warm days, cool evenings and long daylight, with humidity still manageable before summer.</p>",
  },
  {
    q: "How warm is New York in May?",
    a: "<p>Average highs are around 72°F (22°C) and lows around 54°F (12°C). Evenings are cool enough for a jacket.</p>",
  },
  {
    q: "What is on in May?",
    a: "<p>Fleet Week is usually late May, though the 2026 edition was replaced by the International Naval Review in July. Check the official site for current dates.</p>",
  },
  {
    q: "Is May busy in New York?",
    a: "<p>Yes. The good weather brings crowds, especially at weekends. Book the big sights ahead and use weekday mornings for the park.</p>",
  },
];

export default {
  path: "nyc-in-may.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in May — Weather, Crowds and What to Do",
  description:
    "May in New York: warm days and long evenings, typical temperatures in °F and °C, rain, Fleet Week, crowds and the best outdoor plan for the month.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-nyc.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in May — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in May: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-may.html", label: "May" },
      ],
      heroImage: "central-park-nyc.webp",
      heroAlt: "Central Park's lawns and trees in New York City",
      eyebrowText: "Month guide",
      h1: "New York in May: the best month for walking",
      lead: "May is one of the two best months to visit: warm without being hot, green in every park, and light until well into the evening. It is busy, but the city is built for it — outdoor tables, long walks and free things to do.",
      heroMeta: ["72°F / 54°F", "Busy", "Best-weather window", "About 14½ hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "72°F / 54°F (22°C / 12°C)" },
        { label: "Rain days", value: "About 11.5 a month" },
        { label: "Crowds", value: "Busy" },
        { label: "What's on", value: "Fleet Week is usually late May; long evenings" },
        { label: "Daylight", value: "About 14½ hours" },
      ],
      introTitle: "Warm days, long evenings, no heat",
      introLead:
        "May gets the weather right: highs in the low 70s, cool evenings and none of the humidity that arrives in June. The city's outdoor life is fully open, from the parks to the waterfront.",
      introParagraphs: [
        "Average highs reach 72°F (22°C) and lows sit around 54°F (12°C), with about fourteen and a half hours of daylight. Rain is still possible, but the wet days are warm and brief compared with spring.",
        "The month is busy with visitors and locals alike, and the parks and waterfronts fill at weekends. Book the big sights ahead, but leave room for the free things: the Staten Island Ferry, the High Line and a long afternoon in Central Park.",
      ],
      introImage: "high-line.webp",
      introImageAlt: "The High Line elevated park in Chelsea",
      monthName: "May",
      weatherTitle: "What May weather feels like",
      weatherLead: "Warm and green, with cool evenings and occasional showers.",
      weatherRows: [
        ["Average high", "72°F (22°C)"],
        ["Average low", "54°F (12°C)"],
        ["Rain days", "About 11.5 a month"],
        ["Daylight", "About 14½ hours"],
        ["What it feels like", "Warm and green, with cool evenings and occasional showers."],
        ["Best use", "Parks, waterfront walks and outdoor dining; museums on wet afternoons."],
      ],
      eventsTitle: "What is on in May",
      eventsLead: "Fleet Week, long evenings and the outdoor season in full swing.",
      events: [
        { when: "Usually late May", title: "Fleet Week", text: "Warships and sailors fill the waterfront. The 2026 edition was replaced by the International Naval Review in July; check the official site for current dates." },
        { when: "All month", title: "The best-weather window", text: "Mid-April to mid-June is one of the year's two best stretches; May is the warmest part of it." },
        { when: "All month", title: "Long evenings", text: "With about fourteen and a half hours of daylight, the city stays usable until well after dinner." },
      ],
      planTitle: "How to spend a May day",
      planLead: "Use the long daylight: park in the morning, waterfront at midday, outdoor dinner in the evening.",
      planCards: [
        { kicker: "Morning", title: "Central Park before the crowds", text: "Enter at 72nd or 86th Street; the park is calm before 10am." },
        { kicker: "Midday", title: "The High Line and Chelsea", text: "Walk south to north and finish at Hudson Yards for lunch." },
        { kicker: "Evening", title: "The waterfront", text: "Brooklyn Bridge Park or the Staten Island Ferry terminal at sunset; the long evenings are the point." },
      ],
      practicalTitle: "May planning notes",
      crowds:
        "May is busy: the weather brings everyone out, and the big sights sell out at weekends. Book observation decks and museums ahead, and use weekday mornings for the park.",
      packing:
        "Light layers, comfortable walking shoes and sunglasses, plus a light jacket for the evening. May days can feel like summer, but evenings stay cool.",
      tips: [
        { icon: "◷", title: "Use the long evenings", text: "With daylight until well past 8pm, save outdoor sights for after dinner when the crowds have thinned." },
        { icon: "◆", title: "Book the decks early", text: "May weekends are the first big test of the year for observation decks; book a fixed slot." },
        { icon: "☂", title: "Check Fleet Week dates", text: "Fleet Week is usually late May, but the 2026 edition was replaced by the International Naval Review in July. Check the official site before planning around it." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in April", href: "nyc-in-april.html", text: "Mild days, blossom and the first outdoor meals of the year." },
        { kicker: "Next month", title: "NYC in June", href: "nyc-in-june.html", text: "The longest evenings, Pride and the first free summer concerts." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-may",
      faq,
      prev: { href: "nyc-in-april.html", label: "NYC in April" },
      next: { href: "nyc-in-june.html", label: "NYC in June" },
    }),
};
