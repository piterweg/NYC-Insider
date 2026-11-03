import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "nyc-in-winter.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC in Winter — Weather, Crowds and What to Do",
  description:
    "What winter in New York is really like: December to February temperatures, rain and snow, crowds, Restaurant Week, ice rinks and how to plan around the cold.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/fifth-avenue-cab.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC in Winter — Weather, Crowds and What to Do",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "NYC in winter" },
      ],
      heroImage: "fifth-avenue-cab.webp",
      heroAlt: "A yellow taxi on Fifth Avenue in cold winter light",
      eyebrowText: "Seasonal guide · Winter",
      h1: "New York in Winter",
      lead: "Winter in New York is three seasons in one: the holiday weeks, the quiet cold of January and the deep winter of February. Prices, queues and light change dramatically across the three months, so the month you pick matters more than the coat you bring.",
      heroMeta: ["December–February", "39°F / 28°F in January", "January is the cheapest month", "Rink rentals from $18.72"],
      facts: [
        { label: "Weather", value: "Dec 45/34, Jan 39/28, Feb 43/28 (°F)" },
        { label: "Rain & snow", value: "About 11 wet days a month; snow possible, not guaranteed" },
        { label: "Crowds", value: "Holiday crowds into early January, then quiet" },
        { label: "What's on", value: "Tree to about 9 January; Restaurant Week late January–mid February" },
        { label: "Budget", value: "January is the cheapest hotel month; Broadway averages $131.09" },
      ],
      introEyebrow: "The short version",
      introTitle: "Cold, quiet and cheaper than you expect",
      introLead:
        "January and February are the cheapest and calmest months in New York. The museums empty out, restaurant tables open up and hotel rates fall — the trade-off is short daylight, cold wind and the occasional snow day.",
      introParagraphs: [
        "The numbers are steady rather than brutal. December averages 45°F (7°C) by day and 34°F (1°C) at night, January 39°F (4°C) and 28°F (−2°C), and February 43°F (6°C) and 28°F (−2°C), with roughly 11 wet days a month. Snow is possible but not guaranteed, and the wind between buildings makes the cold feel sharper. Days are short, so plan outdoor sights for the middle of the day and museums for the rest.",
        "What is on changes across the season. The Rockefeller Center tree stays up until about 9 January 2027, the <a href=\"https://bryantpark.org/activities/bank-of-america-winter-village-at-bryant-park\" rel=\"nofollow noopener\" target=\"_blank\">Bryant Park Winter Village</a> runs to 28 February 2027 with free rink admission and skate rentals from $18.72 to $64.48, and <a href=\"https://www.nyctourism.com/restaurant-week/\" rel=\"nofollow noopener\" target=\"_blank\">Restaurant Week</a> arrives in late January to mid-February with prix-fixe menus at $30, $45 and $60. The Wollman Rink in Central Park is ticketed, so check prices and sessions before choosing where to skate. School holidays are the busiest weeks outside the holiday season.",
      ],
      introImage: "manhattan-skyline-night.webp",
      introImageAlt: "Lower Manhattan's towers lit at night across the East River",
      mapId: "central-park",
      highlightsTitle: "Three versions of winter",
      highlightsLead:
        "The holiday weeks, the quiet middle and the deep cold each suit a different kind of trip. Pick the one you are actually travelling in.",
      highlights: [
        {
          kicker: "01",
          title: "The holiday tail",
          text: "The tree is up until about 9 January 2027, the Bryant Park Winter Village runs to 28 February, and the Fifth Avenue windows stay dressed into early January. Expect the highest prices and biggest crowds until the first week is over.",
        },
        {
          kicker: "02",
          title: "Quiet January",
          text: "After the first week, January is the cheapest hotel month and the calmest time to see the big museums. Restaurant Week starts in late January with prix-fixe menus at $30, $45 and $60, and good tables are bookable again.",
        },
        {
          kicker: "03",
          title: "Winter walks and free things",
          text: "Central Park in snow, the free Staten Island Ferry and the pay-what-you-wish windows for New York residents at the Met and AMNH cost little or nothing. Broadway averages $131.09 a ticket, with TKTS up to 50% off.",
        },
      ],
      planTitle: "Planning a winter trip",
      planLead:
        "Choose the month first, then book the indoor things. Winter rewards a trip built around two museums, one long dinner and one outdoor walk in the middle of the day.",
      planSteps: [
        "Pick your month. Early December for atmosphere, January for value and quiet, February for Restaurant Week's final weeks and empty museums.",
        "Book the indoor anchors — a museum slot, a Broadway show or a Restaurant Week table — before you travel; they make a cold day work.",
        "Plan outdoor time for roughly 10am to 3pm, when the light and temperature peak. Central Park, the High Line and the Brooklyn Bridge are quieter in low winter light.",
        "Decide about skating in advance. Bryant Park's rink has free admission and rentals from $18.72; Wollman Rink is ticketed and needs its own booking.",
        "Check the week-of forecast and keep one flexible day; snow can close or delay things.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Boots beat coats",
          text: "Slush and ice are the real hazard, not the cold. Waterproof boots with grip matter more than a heavier coat, and a hat and gloves make more difference than an extra layer.",
        },
        {
          icon: "☂",
          title: "Snow is not guaranteed",
          text: "Winter can be grey and dry for weeks. Check the forecast in the days before you travel, and treat a snowy morning as a bonus rather than a plan.",
        },
        {
          icon: "◷",
          title: "Museums have closed days",
          text: "The Met is closed on Wednesdays, so plan museum days around opening hours. Most big museums are calmest in the first hour.",
        },
      ],
      localTitle: "How locals spend the winter",
      localTips: [
        {
          title: "January is for restaurants",
          text: "Once the holidays are over, New Yorkers reclaim their city. The restaurant you could not book in December is available in January, and Restaurant Week gives you a reason to try somewhere new.",
        },
        {
          title: "The museum in the morning, the park at midday",
          text: "The local winter rhythm is indoor in the morning, outdoors around noon and indoors again by dark. The Met, MoMA and AMNH are calmest early, and Central Park is best in the low early-afternoon sun.",
        },
        {
          title: "The ferry is free and emptier",
          text: "The Staten Island Ferry runs 24 hours, costs nothing and gives you the best free view of the harbour and the Statue of Liberty. Winter is when the deck is quiet, so dress for the wind and take the round trip.",
        },
      ],
      localImage: "grand-central.webp",
      localImageAlt: "The main concourse of Grand Central Terminal",
      relatedTitle: "Winter and the months around it",
      relatedLead: "Christmas, January and February each have their own guide, and the calendar covers the whole year.",
      related: [
        {
          href: "christmas-in-nyc.html",
          image: "fifth-avenue-cab.webp",
          alt: "A yellow taxi on Fifth Avenue in winter",
          kicker: "December",
          title: "Christmas in NYC",
          text: "Tree, windows, skating and the quiet weeks either side of the holiday.",
          meta: "Seasonal guide",
        },
        {
          href: "nyc-in-january.html",
          image: "manhattan-skyline-night.webp",
          alt: "Lower Manhattan's towers lit at night across the East River",
          kicker: "January",
          title: "NYC in January",
          text: "The coldest, cheapest, quietest month, and why that can be an advantage.",
          meta: "Month guide",
        },
        {
          href: "nyc-in-february.html",
          image: "central-park-bow-bridge.webp",
          alt: "Bow Bridge in Central Park in winter",
          kicker: "February",
          title: "NYC in February",
          text: "Deep winter, Restaurant Week's last weeks and the first hints of spring.",
          meta: "Month guide",
        },
      ],
      faqTitle: "Winter questions",
      faq: [
        {
          q: "How cold does New York get in winter?",
          a: "<p>December averages 45°F (7°C) by day and 34°F (1°C) at night, January 39°F (4°C) and 28°F (−2°C), and February 43°F (6°C) and 28°F (−2°C). Wind makes it feel colder. These are the Central Park averages used across this guide.</p>",
        },
        {
          q: "Does it snow in New York in winter?",
          a: "<p>Sometimes, but heavy snow is not guaranteed. January and February are the likeliest months. Snow days are beautiful in Central Park and disruptive on the roads; waterproof boots with grip matter more than a deep-snow forecast.</p>",
        },
        {
          q: "Is winter a good time to visit New York?",
          a: "<p>Yes, if you want lower prices and thinner crowds. December has the holiday atmosphere; January is the cheapest and quietest; February is cold but calm. Bring a proper coat, plan around short daylight and book the indoor things.</p>",
        },
        {
          q: "What is there to do in New York in winter?",
          a: "<p>Museums, Broadway, Restaurant Week and ice skating, plus winter walks in Central Park and the free Staten Island Ferry. The Rockefeller tree is up until about 9 January 2027, and Bryant Park Winter Village runs to 28 February 2027.</p>",
        },
        {
          q: "How can I save money in New York in winter?",
          a: "<p>Travel in January or February, when hotel rates are at their lowest and the queues are short. Restaurant Week runs in late January to mid-February with menus at $30, $45 and $60, and free options such as the ferry, Central Park and resident pay-what-you-wish museum windows cost little.</p>",
        },
      ],
      source: "nyc-in-winter",
      prev: { href: "whats-on.html", label: "What's on in New York" },
      next: { href: "christmas-in-nyc.html", label: "Christmas in NYC" },
    }),
};
