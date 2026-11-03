import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is December a good time to visit New York?",
    a: "<p>Yes for atmosphere: the tree, the lights and the Winter Village. It is also the busiest and most expensive month, so book hotels, shows and restaurants early.</p>",
  },
  {
    q: "How cold is New York in December?",
    a: "<p>Average highs are around 45°F (7°C) and lows around 34°F (1°C). Snow is possible but not guaranteed.</p>",
  },
  {
    q: "When is the Rockefeller tree lit?",
    a: "<p>The 2026 tree is lit on 2 December and stays up until about 9 January 2027. The lighting night itself is extremely crowded.</p>",
  },
  {
    q: "What is on in December?",
    a: "<p>The Rockefeller tree, Bryant Park Winter Village and Times Square New Year's Eve on 31 December.</p>",
  },
];

export default {
  path: "nyc-in-december.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in December — Weather, Crowds and What to Do",
  description:
    "December in New York: holiday lights and crowds, the Rockefeller tree, typical temperatures in °F and °C and what to book early for the festive season.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/times-square-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in December — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in December: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-december.html", label: "December" },
      ],
      heroImage: "times-square-night.webp",
      heroAlt: "Times Square at night with its billboards lit",
      eyebrowText: "Month guide",
      h1: "New York in December: lights, crowds and the tree",
      lead: "December is the most atmospheric month in New York and the busiest. The tree at Rockefeller Center, the shop windows and Bryant Park's Winter Village draw the biggest crowds of the year; the reward is a city that behaves as if the holidays matter.",
      heroMeta: ["45°F / 34°F", "Very busy", "Holiday season", "About 9¼ hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "45°F / 34°F (7°C / 1°C)" },
        { label: "Rain days", value: "About 11.5 a month" },
        { label: "Crowds", value: "Very busy, especially the last two weeks" },
        { label: "What's on", value: "Rockefeller tree from 2 December 2026; New Year's Eve on 31 December" },
        { label: "Daylight", value: "About 9¼ hours" },
      ],
      introTitle: "The city at its most theatrical",
      introLead:
        "December is cold, dark and deliberately dressed up. The holiday lights start early, the shop windows are the year's best and the skating rinks are full; the trade-off is the highest hotel rates and the longest queues.",
      introParagraphs: [
        "Average highs sit around 45°F (7°C) with lows near 34°F (1°C), and daylight is only about nine and a quarter hours. Snow is possible but not guaranteed; the cold is the reliable part.",
        "The Rockefeller tree is lit on 2 December 2026 and stays up until about 9 January 2027. Early December is atmospheric and slightly less crowded than the final week; the last two weeks of the month are the peak for both crowds and prices.",
      ],
      introImage: "grand-central.webp",
      introImageAlt: "The main concourse of Grand Central Terminal",
      monthName: "December",
      weatherTitle: "What December weather feels like",
      weatherLead: "Cold and dark, with the holiday lights making the short days feel deliberate.",
      weatherRows: [
        ["Average high", "45°F (7°C)"],
        ["Average low", "34°F (1°C)"],
        ["Rain days", "About 11.5 a month"],
        ["Daylight", "About 9¼ hours"],
        ["What it feels like", "Cold and dark, with holiday lights making the short days feel deliberate."],
        ["Best use", "Holiday lights, shop windows, skating and long indoor afternoons."],
      ],
      eventsTitle: "What is on in December",
      eventsLead: "The tree, the markets and New Year's Eve.",
      events: [
        { when: "2 December 2026", title: "Rockefeller Center tree lighting", text: "The tree is lit on 2 December and stays up until about 9 January 2027. Free, and very crowded on the night itself." },
        { when: "28 October 2026–28 February 2027", title: "Bryant Park Winter Village", text: "The skating rink and holiday market are open through the season; rink admission is free, skate rental is paid." },
        { when: "31 December", title: "Times Square New Year's Eve", text: "The ball drop at midnight is free but means arriving in the early afternoon and passing security screening." },
        { when: "All month", title: "Holiday windows and lights", text: "The shop windows and the lights along the main shopping streets are the reason many people come in December." },
      ],
      planTitle: "How to spend a December day",
      planLead: "See the lights in the morning light, keep the afternoon warm and book the evening well ahead.",
      planCards: [
        { kicker: "Morning", title: "The tree before the crowds", text: "Rockefeller Center is calmest early; the tree and the skating rink are best before 10am." },
        { kicker: "Midday", title: "Bryant Park and the shops", text: "Skate or browse the Winter Village, then walk the shop windows along Fifth Avenue." },
        { kicker: "Evening", title: "A show or a long dinner", text: "Broadway and the holiday restaurants are at their busiest; book well ahead." },
      ],
      practicalTitle: "December planning notes",
      crowds:
        "December is the busiest month of the year, especially the last two weeks. Hotel rates peak, the tree and the shop windows are packed, and restaurants need booking well ahead.",
      packing:
        "A proper winter coat, hat, gloves, scarf and warm waterproof boots. The cold is real and you will be standing outside to look at lights; hand warmers and a thermos are not overkill.",
      tips: [
        { icon: "◆", title: "Come in early December", text: "The first ten days give you the full holiday atmosphere with slightly fewer people than the final fortnight." },
        { icon: "◷", title: "Book everything", text: "Hotels, Broadway and the good restaurants sell out early in December; book well ahead." },
        { icon: "☂", title: "See the tree early in the day", text: "Rockefeller Center is calmest before 10am; the evening crowds are heavy throughout the month." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in November", href: "nyc-in-november.html", text: "The marathon, Thanksgiving and the last of the foliage." },
        { kicker: "Next month", title: "NYC in January", href: "nyc-in-january.html", text: "The quietest month, with the cheapest rooms and Restaurant Week." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-december",
      faq,
      prev: { href: "nyc-in-november.html", label: "NYC in November" },
      next: { href: "nyc-in-january.html", label: "NYC in January" },
    }),
};
