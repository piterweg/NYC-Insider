import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is February a good month to visit New York?",
    a: "<p>Yes for value and quiet, if you can handle the cold. It is one of the cheapest months for hotels and among the quietest for museums, with Restaurant Week running until mid-February.</p>",
  },
  {
    q: "How cold is New York in February?",
    a: "<p>Average highs are around 43°F (6°C) and lows around 28°F (−2°C). Cold snaps can be much colder; pack for wind and possible snow.</p>",
  },
  {
    q: "What is on in February?",
    a: "<p>Restaurant Week runs until mid-February, Bryant Park's Winter Village stays open to 28 February, and the museums are quiet all month.</p>",
  },
  {
    q: "Does it snow in February?",
    a: "<p>It can, and February often brings the winter's coldest snaps, but heavy snow is not guaranteed. Waterproof boots are more useful than a snow forecast.</p>",
  },
];

export default {
  path: "nyc-in-february.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in February — Weather, Crowds and What to Do",
  description:
    "February in New York: the coldest weeks, typical temperatures in °F and °C, rain and daylight, quiet museums, Restaurant Week and what to pack.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in February — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in February: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-february.html", label: "February" },
      ],
      heroImage: "central-park-bow-bridge.webp",
      heroAlt: "Bow Bridge in Central Park on a clear winter day",
      eyebrowText: "Month guide",
      h1: "New York in February: the quiet cold",
      lead: "February is one of the coldest months in New York and one of the quietest. It is also the best-value window of the winter: low hotel rates, easy museum entry and the last two weeks of Restaurant Week.",
      heroMeta: ["43°F / 28°F", "Deep winter", "Restaurant Week", "About 10½ hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "43°F / 28°F (6°C / −2°C)" },
        { label: "Rain days", value: "About 10 a month" },
        { label: "Crowds", value: "Quiet" },
        { label: "What's on", value: "Restaurant Week to mid-February; Winter Village to 28 February" },
        { label: "Daylight", value: "About 10½ hours" },
      ],
      introTitle: "Deep winter, without the crowds",
      introLead:
        "February is winter at its most serious: short days, cold winds and the occasional snowstorm. It is also the cheapest and quietest month of the year, and the museums are blissful.",
      introParagraphs: [
        "Average highs sit around 43°F (6°C) with lows near 28°F (−2°C), and February often brings the coldest snaps of the year. Daylight is up to about ten and a half hours by month's end, so there is noticeably more usable afternoon than in January.",
        "The holiday visitors are long gone, Restaurant Week runs until mid-February, and the last weeks of the month are some of the best-value weeks in the city. If you want the Met or MoMA without a queue, this is the moment.",
      ],
      introImage: "central-park-nyc.webp",
      introImageAlt: "Central Park's lawns and trees in New York City",
      monthName: "February",
      weatherTitle: "What February weather feels like",
      weatherLead: "Cold, often windy and occasionally snowy; the coldest snaps of winter tend to land this month.",
      weatherRows: [
        ["Average high", "43°F (6°C)"],
        ["Average low", "28°F (−2°C)"],
        ["Rain days", "About 10 a month"],
        ["Daylight", "About 10½ hours"],
        ["What it feels like", "Cold, often windy and occasionally snowy, with short days that lengthen noticeably by month's end."],
        ["Snow", "Possible, but heavy snow is not guaranteed."],
      ],
      eventsTitle: "What is on in February",
      eventsLead: "A quiet month with Restaurant Week and the last weeks of the winter season.",
      events: [
        { when: "Until mid-February", title: "NYC Restaurant Week", text: "Prix-fixe menus at $30, $45 and $60. Reserve early; the good dinner tables go first." },
        { when: "Until 28 February", title: "Bryant Park Winter Village", text: "The skating rink and market close for the season at the end of the month. Rink admission is free; skate rental is paid." },
        { when: "All month", title: "The quietest museums", text: "February is one of the two quietest months for museums and galleries; the first hour after opening is almost empty." },
      ],
      planTitle: "How to spend a February day",
      planLead: "Lean into the cold: museums in the morning, a short walk at midday, a long dinner in the evening.",
      planCards: [
        { kicker: "Morning", title: "A museum without a queue", text: "February is the best month for the big museums. Go at opening and have the rooms nearly to yourself." },
        { kicker: "Midday", title: "A brisk park walk", text: "Central Park in the low light is beautiful; keep to the south end and the paths around Bethesda." },
        { kicker: "Evening", title: "An early dinner", text: "Restaurant Week menus and a warm bistro. Book ahead for the final week of the month." },
      ],
      practicalTitle: "February planning notes",
      crowds:
        "February is quiet almost everywhere, which makes it the best month for anyone who hates queues. Hotel rates are at their lowest of the year, and the only busy period is the Restaurant Week rush for dinner reservations.",
      packing:
        "Bring the warmest coat you own, plus a hat, gloves, a scarf and thermal layers. Waterproof boots with grip are essential for slush, and a light sweater is useful because museums and restaurants are heavily heated.",
      tips: [
        { icon: "◆", title: "Book the cold-weather sights", text: "Museums, Broadway and long lunches are best in February precisely because everyone else is staying home." },
        { icon: "◷", title: "Watch for the coldest snap", text: "February can produce single-digit wind-chill days. Check the forecast and keep an indoor plan in reserve." },
        { icon: "☂", title: "Take the long view on daylight", text: "Days lengthen noticeably by the end of the month, so late-February afternoons are good for walking." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in January", href: "nyc-in-january.html", text: "The quietest month, with the cheapest rooms and Restaurant Week beginning." },
        { kicker: "Next month", title: "NYC in March", href: "nyc-in-march.html", text: "Temperatures climb and the city starts to thaw." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-february",
      faq,
      prev: { href: "nyc-in-january.html", label: "NYC in January" },
      next: { href: "nyc-in-march.html", label: "NYC in March" },
    }),
};
