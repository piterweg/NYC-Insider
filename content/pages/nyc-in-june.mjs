import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is June a good time to visit New York?",
    a: "<p>Yes, if you like long evenings and outdoor events. It is warm rather than brutally hot, though humidity starts to build towards the end of the month.</p>",
  },
  {
    q: "How hot is New York in June?",
    a: "<p>Average highs are around 81°F (27°C) and lows around 64°F (18°C), with humidity starting to rise. Evenings are comfortable.</p>",
  },
  {
    q: "What is on in June?",
    a: "<p>Pride on the last Sunday of the month, the Tribeca Festival (3–12 June 2027) and the start of the free summer concert season.</p>",
  },
  {
    q: "Does it rain in June?",
    a: "<p>About eleven wet days on average, often as short afternoon storms. An umbrella is worth carrying.</p>",
  },
];

export default {
  path: "nyc-in-june.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in June — Weather, Crowds and What to Do",
  description:
    "June in New York: warm days and the longest evenings, typical temperatures in °F and °C, Pride, free concerts, rain and how to plan around the heat.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-sunset.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in June — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in June: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-june.html", label: "June" },
      ],
      heroImage: "brooklyn-bridge-sunset.webp",
      heroAlt: "The Brooklyn Bridge at sunset",
      eyebrowText: "Month guide",
      h1: "New York in June: long light and free concerts",
      lead: "June is the start of summer: warm days, long evenings and the first free outdoor concerts. It is busy, but also the month when the city's calendar opens up — Pride, Tribeca and outdoor stages.",
      heroMeta: ["81°F / 64°F", "Very busy", "Pride and free concerts", "About 15 hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "81°F / 64°F (27°C / 18°C)" },
        { label: "Rain days", value: "About 11 a month" },
        { label: "Crowds", value: "Very busy" },
        { label: "What's on", value: "Pride, Tribeca Festival and free summer concerts" },
        { label: "Daylight", value: "About 15 hours" },
      ],
      introTitle: "The longest days of the year",
      introLead:
        "June gives New York its latest sunsets and its biggest outdoor calendar. The heat has not yet become the story, which makes it one of the better summer months for walking.",
      introParagraphs: [
        "Average highs sit around 81°F (27°C) with lows near 64°F (18°C); humidity starts to build but the evenings stay comfortable. Daylight peaks at about fifteen hours around the solstice, so the city stays light until after 8pm.",
        "The month's calendar is the draw: Pride at the end of June, the Tribeca Festival in early June and free concerts across the parks. Book the big sights early and plan outdoor time for the mornings.",
      ],
      introImage: "high-line.webp",
      introImageAlt: "The High Line elevated park in Chelsea",
      monthName: "June",
      weatherTitle: "What June weather feels like",
      weatherLead: "Warm to hot, with humid afternoons and long, comfortable evenings.",
      weatherRows: [
        ["Average high", "81°F (27°C)"],
        ["Average low", "64°F (18°C)"],
        ["Rain days", "About 11 a month"],
        ["Daylight", "About 15 hours"],
        ["What it feels like", "Warm to hot, with humid afternoons and long, comfortable evenings."],
        ["Best use", "Parks and waterfronts in the morning; free concerts and outdoor dining at night."],
      ],
      eventsTitle: "What is on in June",
      eventsLead: "Pride, the film festival and the start of the free summer concerts.",
      events: [
        { when: "3–12 June 2027", title: "Tribeca Festival", text: "Film, talks and events across Lower Manhattan. The next edition is in June 2027; check the festival's site for the current programme." },
        { when: "Last Sunday of June", title: "Pride", text: "The march and street celebrations draw huge crowds; plan transport accordingly and expect road closures." },
        { when: "June–August", title: "Free summer concerts", text: "SummerStage, BRIC Celebrate Brooklyn! and Lincoln Center Summer for the City run free outdoor shows; check each programme for dates." },
      ],
      planTitle: "How to spend a June day",
      planLead: "Start early, rest in the heat of the afternoon and go back out for the long evening.",
      planCards: [
        { kicker: "Morning", title: "The park before the heat", text: "Outdoor sights are much more pleasant before noon; Central Park at 8am is a different city." },
        { kicker: "Afternoon", title: "A museum or the waterfront", text: "The High Line and Brooklyn Bridge Park are best in the morning; the afternoon is for air conditioning." },
        { kicker: "Evening", title: "A free concert", text: "Check the free summer programme and bring a blanket; most shows start in the early evening." },
      ],
      practicalTitle: "June planning notes",
      crowds:
        "June is very busy, with summer holidays beginning and Pride drawing a huge weekend crowd. Book hotels and the big sights early, and expect the parks and waterfronts to be full at weekends.",
      packing:
        "Light, breathable clothing, sunscreen and a refillable water bottle, plus a light layer for air-conditioned museums. Comfortable shoes for long walks and an umbrella for the odd summer shower.",
      tips: [
        { icon: "◷", title: "Use the mornings", text: "Heat and humidity build through the day. Outdoor sights are far more pleasant before noon." },
        { icon: "◆", title: "Plan around Pride", text: "The last Sunday of June brings road closures and packed trains in Lower Manhattan; check routes before travelling." },
        { icon: "☂", title: "Book free concerts", text: "Some free summer shows need a reservation even though they cost nothing; check the programme in advance." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in May", href: "nyc-in-may.html", text: "Warm days, long evenings and the best walking weather of the spring." },
        { kicker: "Next month", title: "NYC in July", href: "nyc-in-july.html", text: "Heat, afternoon storms and the heart of the free concert season." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-june",
      faq,
      prev: { href: "nyc-in-may.html", label: "NYC in May" },
      next: { href: "nyc-in-july.html", label: "NYC in July" },
    }),
};
