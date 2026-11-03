import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is August a good time to visit New York?",
    a: "<p>It is hot and busy, but it is also when the US Open arrives and the summer calendar is still full. Plan around the heat and book ahead.</p>",
  },
  {
    q: "How hot is New York in August?",
    a: "<p>Average highs are around 84°F (29°C) and lows around 68°F (20°C), with high humidity and occasional afternoon storms.</p>",
  },
  {
    q: "When is the US Open?",
    a: "<p>The tournament typically starts in the last week of August; the 2026 edition runs 30 August–13 September. Check the official site for current dates and tickets.</p>",
  },
  {
    q: "What is on in August?",
    a: "<p>The US Open from late August, the final weeks of Restaurant Week and the summer concert season.</p>",
  },
];

export default {
  path: "nyc-in-august.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in August — Weather, Crowds and What to Do",
  description:
    "August in New York: hot, humid and busy, with typical temperatures in °F and °C, the US Open, afternoon storms and the best ways to stay cool.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-sunset.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in August — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in August: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-august.html", label: "August" },
      ],
      heroImage: "brooklyn-bridge-sunset.webp",
      heroAlt: "The Brooklyn Bridge at sunset",
      eyebrowText: "Month guide",
      h1: "New York in August: the US Open and the last of summer",
      lead: "August is the last full month of summer and one of the busiest: hot days, warm evenings and the US Open arriving at Flushing Meadows. Plan outdoor time for the morning and keep an indoor option for the afternoon.",
      heroMeta: ["84°F / 68°F", "Very busy", "US Open", "About 13¾ hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "84°F / 68°F (29°C / 20°C)" },
        { label: "Rain days", value: "About 10 a month" },
        { label: "Crowds", value: "Very busy" },
        { label: "What's on", value: "The US Open from late August; Restaurant Week to mid-August" },
        { label: "Daylight", value: "About 13¾ hours" },
      ],
      introTitle: "High summer, with a tennis tournament attached",
      introLead:
        "August keeps July's heat but begins to lose its light. The month's identity is the US Open, which fills Queens in the final week, and the slow shift toward the calmer days of September.",
      introParagraphs: [
        "Average highs sit around 84°F (29°C) with lows near 68°F (20°C). Daylight is down to about thirteen and three-quarter hours by the end of the month, and the first hints of an easier season appear in the evenings.",
        "The US Open starts in the last week of August at Flushing Meadows, and Restaurant Week runs until mid-August. If tennis is not your reason, use the month for early-morning park walks, the waterfront and the museums at their coolest.",
      ],
      introImage: "manhattan-skyline.webp",
      introImageAlt: "Lower Manhattan and the Brooklyn Bridge seen across the East River",
      monthName: "August",
      weatherTitle: "What August weather feels like",
      weatherLead: "Hot and humid, with warm evenings and occasional afternoon storms.",
      weatherRows: [
        ["Average high", "84°F (29°C)"],
        ["Average low", "68°F (20°C)"],
        ["Rain days", "About 10 a month"],
        ["Daylight", "About 13¾ hours"],
        ["What it feels like", "Hot and humid, with warm evenings and occasional afternoon storms."],
        ["Best use", "Early outdoor mornings and indoor afternoons; Flushing for the tennis."],
      ],
      eventsTitle: "What is on in August",
      eventsLead: "The US Open arrives and the summer programme begins to wind down.",
      events: [
        { when: "From late August", title: "The US Open", text: "The tennis arrives at Flushing Meadows in the final week of the month (2026: 30 August–13 September). Grounds passes are the affordable way in; check the official site for current dates." },
        { when: "Until mid-August", title: "Restaurant Week", text: "The summer edition of prix-fixe menus runs into mid-August." },
        { when: "All month", title: "Free summer concerts", text: "The summer concert season runs through August; check the programmes for the final shows." },
      ],
      planTitle: "How to spend an August day",
      planLead: "Early outdoors, indoors in the heat of the day, then out again for the warm evening.",
      planCards: [
        { kicker: "Morning", title: "A park walk early", text: "Start by 8am; the park is cool and quiet before the day heats up." },
        { kicker: "Afternoon", title: "Indoors", text: "Museums, the library or a long lunch; the hottest hours are best spent inside." },
        { kicker: "Evening", title: "Queens or the waterfront", text: "Take the 7 train to Flushing for the tennis, or head to Brooklyn Bridge Park for the sunset." },
      ],
      practicalTitle: "August planning notes",
      crowds:
        "August is very busy, with summer holidays continuing and the US Open adding a specific surge in Queens. Book hotels early and expect the big sights to be at capacity.",
      packing:
        "Light summer clothing, sunscreen, a hat and a water bottle, plus a light layer for air conditioning. A small umbrella for afternoon storms.",
      tips: [
        { icon: "◆", title: "Plan around the Open", text: "If you are visiting Queens in the final week, expect the 7 train and Flushing to be busier; book tennis tickets ahead." },
        { icon: "◷", title: "Use the mornings", text: "Start early; the heat peaks in mid-afternoon and the parks are busiest then." },
        { icon: "☂", title: "Watch for the turn", text: "The last week of August begins the slow shift toward autumn, with cooler evenings and shorter days." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in July", href: "nyc-in-july.html", text: "The hottest weeks, afternoon storms and the free concert season." },
        { kicker: "Next month", title: "NYC in September", href: "nyc-in-september.html", text: "Warm days, the fewest rain days and thinner crowds." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-august",
      faq,
      prev: { href: "nyc-in-july.html", label: "NYC in July" },
      next: { href: "nyc-in-september.html", label: "NYC in September" },
    }),
};
