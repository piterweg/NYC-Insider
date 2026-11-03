import { renderMonthPage } from "../month-template.mjs";

const faq = [
  {
    q: "Is January a good time to visit New York?",
    a: "<p>Yes, if you want low prices and no queues and can handle the cold. After the first week it is the quietest month, with the cheapest hotel rates and easy museum entry.</p>",
  },
  {
    q: "How cold is New York in January?",
    a: "<p>Average highs are around 39°F (4°C) and lows around 28°F (−2°C). Wind makes it feel colder, and snow is possible but not guaranteed. A proper coat, hat and gloves are essential.</p>",
  },
  {
    q: "What is there to do in January?",
    a: "<p>Museums, Broadway, Restaurant Week and long indoor lunches. Central Park and the High Line are quiet and beautiful in the low light if you dress for the cold.</p>",
  },
  {
    q: "Does it snow in January?",
    a: "<p>Sometimes, but heavy snow is not guaranteed. January is one of the likeliest months for it; waterproof boots are more useful than waiting for a snow day.</p>",
  },
];

export default {
  path: "nyc-in-january.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in January — Weather, Crowds and What to Do",
  description:
    "What January in New York is really like: typical temperatures in °F and °C, rain and daylight, crowd levels, Restaurant Week and how to pack for the cold.",
  priority: "0.7",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in January — Weather, Crowds and What to Do",
      description:
        "A guide to visiting New York City in January: weather, crowds, events and practical planning.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderMonthPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "when-to-visit.html", label: "When to Visit" },
        { href: "nyc-in-january.html", label: "January" },
      ],
      heroImage: "manhattan-skyline-night.webp",
      heroAlt: "Lower Manhattan and the Brooklyn Bridge lit at night",
      eyebrowText: "Month guide",
      h1: "New York in January: cold, quiet and cheaper",
      lead: "January is one of the two quietest months in New York and the cheapest for hotels, but it is also the coldest. If you can accept short daylight and a proper coat, you get the museums, restaurants and neighbourhoods without the queues.",
      heroMeta: ["39°F / 28°F", "Quiet month", "Restaurant Week", "About 9½ hours of daylight"],
      facts: [
        { label: "Typical high / low", value: "39°F / 28°F (4°C / −2°C)" },
        { label: "Rain days", value: "About 11 a month" },
        { label: "Crowds", value: "Quiet, except the first few days of the year" },
        { label: "What's on", value: "Restaurant Week; the holiday season winds down" },
        { label: "Daylight", value: "About 9½ hours" },
      ],
      introTitle: "The city at its quietest",
      introLead:
        "January strips New York back to its residents. The holiday crowds have gone, the museums are calm and the restaurant reservation you could not get in December is suddenly available.",
      introParagraphs: [
        "The cold is real but manageable: average highs sit around 39°F (4°C) and lows around 28°F (−2°C), and the wind between the buildings makes it feel colder. Days are short, so plan outdoor sights for the middle of the day and save museums for the morning and late afternoon.",
        "The first week is the exception: the Rockefeller Center tree stays lit into early January and the holiday visitors linger. After that the city empties, hotel rates drop and Restaurant Week arrives in the second half of the month.",
      ],
      introImage: "fifth-avenue-cab.webp",
      introImageAlt: "A yellow taxi on Fifth Avenue in Manhattan",
      monthName: "January",
      weatherTitle: "What January weather feels like",
      weatherLead: "Cold, often windy and darker than you expect; snow is possible but not guaranteed.",
      weatherRows: [
        ["Average high", "39°F (4°C)"],
        ["Average low", "28°F (−2°C)"],
        ["Rain days", "About 11 a month"],
        ["Daylight", "About 9½ hours"],
        ["What it feels like", "Cold and windy, with short days and occasional snow; layers matter more than one heavy coat."],
        ["Best use", "Museums, galleries, Broadway and long indoor lunches."],
      ],
      eventsTitle: "What is on in January",
      eventsLead: "The month is defined by the holidays ending and Restaurant Week beginning.",
      events: [
        { when: "Until about 9 January", title: "The Rockefeller Center tree", text: "The tree stays lit into the first week of January. Go early in the day; the evening crowds are heavy until the season ends." },
        { when: "Late January", title: "NYC Restaurant Week", text: "Prix-fixe menus at $30, $45 and $60 at restaurants across the city. Book as soon as reservations open." },
        { when: "All month", title: "The cheapest Broadway", text: "January and February are the cheapest months for Broadway, and midweek performances are the best value. TKTS sells same-day seats at up to half price." },
      ],
      planTitle: "How to spend a January day",
      planLead: "Stay warm by moving between indoors and outdoors rather than committing to one or the other.",
      planCards: [
        { kicker: "Morning", title: "A museum at opening", text: "The Met, MoMA or AMNH are calmest in the first hour. January is the easiest month to see them without a crowd." },
        { kicker: "Midday", title: "A park walk in the light", text: "Use the middle of the day for Central Park or the High Line; the low sun is at its warmest and the paths are quiet." },
        { kicker: "Evening", title: "A long dinner", text: "Restaurant Week menus, a neighbourhood bistro or a Broadway show; the city is at its most comfortable indoors in January." },
      ],
      practicalTitle: "January planning notes",
      crowds:
        "Crowds are lowest after the first week, which makes January a good month for museums, restaurants and anything you would otherwise queue for. Hotel rates are at their cheapest, though the first few days of the month still carry holiday pricing.",
      packing:
        "Pack a proper insulated coat, a hat, gloves and a scarf, plus warm layers you can remove indoors. Waterproof boots with grip are worth the luggage space for snow and slush; museums are heavily heated, so a light sweater works better than a heavy one.",
      tips: [
        { icon: "◷", title: "Plan around the light", text: "With about nine and a half hours of daylight, outdoor sights are best between 10am and 3pm. Save museums for the darker edges of the day." },
        { icon: "◆", title: "Book Restaurant Week early", text: "The good tables are taken within days of reservations opening. Have a shortlist of three restaurants and book the moment they open." },
        { icon: "☂", title: "Snow is not guaranteed", text: "January can be grey and dry as often as snowy. Check the forecast before packing, and bring boots for slush rather than deep snow." },
      ],
      otherMonths: [
        { kicker: "Previous month", title: "NYC in December", href: "nyc-in-december.html", text: "Holiday lights, the tree and the busiest weeks of the winter." },
        { kicker: "Next month", title: "NYC in February", href: "nyc-in-february.html", text: "The coldest weeks, quiet museums and Restaurant Week's final days." },
        { kicker: "All months", title: "When to visit New York", href: "when-to-visit.html", text: "Weather averages, events and holiday trade-offs across the year." },
      ],
      source: "nyc-in-january",
      faq,
      prev: { href: "nyc-in-december.html", label: "NYC in December" },
      next: { href: "nyc-in-february.html", label: "NYC in February" },
    }),
};
