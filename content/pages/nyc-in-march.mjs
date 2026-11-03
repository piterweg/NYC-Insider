import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is March a good time to visit New York?",
    a: "<p>Yes if you want moderate crowds and lower prices than spring and summer. The weather is changeable, so pack layers and keep one indoor plan for each day.</p>",
  },
  {
    q: "How warm is New York in March?",
    a: "<p>Average highs are around 50°F (10°C) and lows around 36°F (2°C), with big swings from day to day. Mild afternoons become more common later in the month.</p>",
  },
  {
    q: "Does it rain in March?",
    a: "<p>Yes, about eleven wet days on average. A compact umbrella and a waterproof jacket are worth carrying.</p>",
  },
  {
    q: "What is on in March?",
    a: "<p>There are no major festivals. The month is best for museums, longer days and the first park afternoons of the year.</p>",
  },
];

export default {
  path: "nyc-in-march.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in March — Weather, Crowds and What to Do",
  description:
    "March in New York: temperatures climbing into the low 50s, typical highs and lows in °F and °C, rain, longer days and how to plan around changeable weather.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in March — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in March: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-march.html", label: "March" },
      ],
      heroImage: "central-park-bow-bridge.webp",
      heroAlt: "Bow Bridge in Central Park",
      eyebrowText: "Month guide",
      h1: "New York in March: the city starts to thaw",
      lead: "March is a transition month: cold mornings, occasional warm afternoons and a city that is visibly waking up. Temperatures climb into the low 50s, the days lengthen and the tourist crowds are still modest.",
      heroMeta: ["50°F / 36°F", "Moderate crowds", "Changeable", "About 11¾ hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "50°F / 36°F (10°C / 2°C)" },
        { label: "Rain days", value: "About 11 a month" },
        { label: "Crowds", value: "Moderate" },
        { label: "What's on", value: "Longer days and the first park afternoons" },
        { label: "Daylight", value: "About 11¾ hours" },
      ],
      introTitle: "Cold mornings, longer afternoons",
      introLead:
        "March is the least predictable month of the year: one day is a coat-and-scarf day, the next is warm enough for a park bench. The city is still quiet, and the light is finally coming back.",
      introParagraphs: [
        "Average highs reach 50°F (10°C) and lows sit around 36°F (2°C), but the averages hide the swings. Daylight stretches to almost twelve hours by the end of the month, and the parks start to show early green.",
        "There are no major festivals in March, which makes it a good month for the sights you would otherwise queue for: the Met, the High Line on a mild day and the quieter neighbourhoods. It is also a calmer month before the spring and summer crowds arrive.",
      ],
      introImage: "fifth-avenue-cab.webp",
      introImageAlt: "A yellow taxi on Fifth Avenue in Manhattan",
      monthName: "March",
      weatherTitle: "What March weather feels like",
      weatherLead: "Changeable: cold mornings, mild afternoons and a mix of sun and rain.",
      weatherRows: [
        ["Average high", "50°F (10°C)"],
        ["Average low", "36°F (2°C)"],
        ["Rain days", "About 11 a month"],
        ["Daylight", "About 11¾ hours"],
        ["What it feels like", "Changeable, with cold mornings, mild afternoons and a mix of sun and rain."],
        ["Best use", "Museums and indoor sights on wet days; parks when the sun appears."],
      ],
      eventsTitle: "What is on in March",
      eventsLead: "A quiet month defined by the change of season rather than a calendar of events.",
      events: [
        { when: "All month", title: "The parks wake up", text: "Early blossom and longer days make this the first month for a proper park walk. Central Park is quiet on weekday mornings." },
        { when: "All month", title: "Museum season", text: "With no major festivals, March is one of the easiest months to see the big museums without a timed-entry scramble." },
        { when: "Late March", title: "The light returns", text: "Daylight reaches almost twelve hours, and evenings become usable again for the first time since autumn." },
      ],
      planTitle: "How to spend a March day",
      planLead: "Keep the plan flexible: one indoor and one outdoor option, decided by the morning forecast.",
      planCards: [
        { kicker: "Morning", title: "A museum at opening", text: "Cold mornings are made for the Met or MoMA; both are calm in March." },
        { kicker: "Midday", title: "The park on a mild day", text: "If the sun is out, walk the Mall to Bethesda Terrace; if not, switch to an indoor plan." },
        { kicker: "Evening", title: "A neighbourhood dinner", text: "March is quiet enough to walk into most restaurants without a booking, except at the weekend." },
      ],
      practicalTitle: "March planning notes",
      crowds:
        "Crowds are moderate: more than January and February, fewer than April and May. Weekends are busier, especially if the weather is good, and the first warm Saturday brings everyone outside.",
      packing:
        "Pack layers rather than a single heavy coat: a waterproof jacket, a sweater and an umbrella cover both the cold mornings and the mild afternoons. Comfortable waterproof shoes are worthwhile because March rain is common.",
      tips: [
        { icon: "◷", title: "Check the forecast daily", text: "March swings hard. Build a flexible plan with one indoor and one outdoor option for each day." },
        { icon: "◆", title: "Use the quiet before spring break", text: "The early weeks of March are still calm; late March and April bring school-holiday crowds." },
        { icon: "☂", title: "Carry layers, not a winter coat", text: "A waterproof shell over a sweater handles both the cold starts and the warm afternoons better than one heavy coat." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in February", href: "nyc-in-february.html", text: "The coldest weeks, quiet museums and Restaurant Week's final days." },
        { kicker: "Next month", title: "NYC in April", href: "nyc-in-april.html", text: "Mild days, blossom in the park and longer evenings." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-march",
      faq,
      prev: { href: "nyc-in-february.html", label: "NYC in February" },
      next: { href: "nyc-in-april.html", label: "NYC in April" },
    }),
};
