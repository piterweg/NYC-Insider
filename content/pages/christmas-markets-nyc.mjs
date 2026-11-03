import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "christmas-markets-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Christmas Markets in NYC — Bryant Park Guide",
  description:
    "New York's Christmas markets: Bryant Park Winter Village dates and skating costs, the Rockefeller tree, Fifth Avenue windows and the smaller markets worth a detour.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/fifth-avenue-cab.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Christmas Markets in NYC — Bryant Park Guide",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "Christmas markets" },
      ],
      heroImage: "fifth-avenue-cab.webp",
      heroAlt: "A yellow taxi on Fifth Avenue among Christmas decorations",
      eyebrowText: "Seasonal guide · Christmas markets",
      h1: "Christmas Markets in New York",
      lead: "New York's Christmas markets are small, temporary and mostly free to wander. Bryant Park's Winter Village is the anchor — a rink, a ring of little shops and a location that puts you a short walk from the tree and the Fifth Avenue windows.",
      heroMeta: [
        "Winter Village 28 October 2026–28 February 2027",
        "Shops until 3 January 2027",
        "Rink admission free",
        "Skate rentals $18.72–64.48",
      ],
      facts: [
        { label: "When", value: "28 October 2026–28 February 2027; shops to 3 January 2027" },
        { label: "Where", value: "Bryant Park, behind the New York Public Library" },
        { label: "Cost", value: "Free to browse; rink admission free, rentals $18.72–64.48" },
        { label: "Weather", value: "45°F / 34°F average; 11.4 wet days" },
        { label: "Tree", value: "Rockefeller Center tree lit 2 December 2026" },
      ],
      introEyebrow: "The short version",
      introTitle: "One village, a tree and a street of windows",
      introLead:
        "If you only visit one market, make it Bryant Park. The Winter Village has the useful combination of a free-to-enter rink, a cluster of small shops and a central location, and it stays open long after the Christmas decorations come down.",
      introParagraphs: [
        "The Winter Village runs from 28 October 2026 to 28 February 2027, though the holiday shops close earlier, on 3 January 2027. The rink is the centre of it: admission is free and you pay only for skate rental, which runs from $18.72 to $64.48 depending on what you hire. The shops around the edge are small, mostly independent and best on a weekday morning. Bryant Park publishes the season, rink hours and any booking requirements at <a href=\"https://bryantpark.org/activities/bank-of-america-winter-village-at-bryant-park\" rel=\"nofollow noopener\" target=\"_blank\">bryantpark.org</a>.",
        "From Bryant Park it is a ten-minute walk to the Rockefeller Center tree, lit on 2 December 2026 and on show until about 9 January 2027, and another few minutes to the Fifth Avenue windows. Those three things — market, tree, windows — make a natural half-day. Smaller markets appear around the city from late November, usually around Union Square, Columbus Circle and inside Grand Central Terminal; their dates change each year, so check each venue's official site. Expect some shops and restaurants to close or shorten hours on Christmas Day itself.",
      ],
      introImage: "grand-central.webp",
      introImageAlt: "The main concourse of Grand Central Terminal",
      mapId: "bryant-park",
      highlightsTitle: "Three stops worth the walk",
      highlightsLead:
        "The markets are close together in Midtown, which makes them easy to combine. Do them in this order and you finish at the tree as the lights come on.",
      highlights: [
        {
          kicker: "01",
          title: "Bryant Park Winter Village",
          text: "Open 28 October 2026 to 28 February 2027, with shops only until 3 January. Free to enter, free to skate if you bring your own skates, and skate rental from $18.72. The most reliable place in Midtown to sit down, warm up and eat something.",        },
        {
          kicker: "02",
          title: "The tree and the windows",
          text: "Rockefeller Center's tree is lit on 2 December 2026 and stays up until about 9 January 2027. The Fifth Avenue windows between roughly 49th and 59th Streets are free and best at dusk on a weekday.",
        },
        {
          kicker: "03",
          title: "The smaller markets",
          text: "Union Square, Columbus Circle and Grand Central Terminal usually host their own holiday markets from late November, each with a different mix of craft and food stalls. Dates vary by year and venue, so check the official site before you go.",
        },
      ],
      planTitle: "Planning a market day",
      planLead:
        "The markets reward timing more than planning. Go early, skate before the queues build, and keep the afternoon for the tree and the windows.",
      planSteps: [
        "Start at Bryant Park on a weekday morning, when the shops are quiet and the rink is at its emptiest.",
        "Decide about skating before you arrive. Admission is free and rentals start at $18.72; check the park's site for session times and whether booking is needed.",
        "Walk the shops around the rink, then head north to Rockefeller Center to see the tree, which is lit from 2 December 2026.",
        "Time the Fifth Avenue windows for dusk, walking from around 59th Street south towards 49th. Weekday evenings are far calmer than weekend afternoons.",
        "Keep Christmas Day flexible. Some shops, restaurants and attractions close or shorten hours, so confirm anything you are counting on before building the day around it.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Dress for standing around",
          text: "December averages 45°F (7°C) by day and 34°F (1°C) at night, with 11.4 wet days in December. Warm layers, gloves and waterproof shoes matter more than a heavy coat.",
        },
        {
          icon: "☂",
          title: "Budget for the skate hire",
          text: "Rink admission is free, but rentals run from $18.72 to $64.48 depending on what you hire. Check the current price and session details before you promise anyone a skate.",
        },
        {
          icon: "◷",
          title: "Shop before the shops close",
          text: "Bryant Park's holiday shops close on 3 January 2027, well before the rink does. If you are visiting in the first week of January, expect the market to be winding down even though the ice is still open.",
        },
      ],
      localTitle: "How locals use the markets",
      localTips: [
        {
          title: "Weekday mornings, early December",
          text: "The first two weeks of December are the local sweet spot: everything is open and decorated, but the holiday-week crowds have not arrived. A weekday morning at Bryant Park is the closest the market gets to calm.",
        },
        {
          title: "Skate, then leave",
          text: "New Yorkers treat the rink as a one-hour activity rather than an all-afternoon plan. Skate early, warm up with something hot from the market, and be gone before the afternoon sessions fill.",
        },
        {
          title: "Use the market as a meeting point",
          text: "Bryant Park works well as a base for a December day: meet at the rink, walk to the tree, then continue to the windows or a show. It is central, free to enter and easy to find.",
        },
      ],
      localImage: "soho-street-night.webp",
      localImageAlt: "A cobblestone SoHo street at night with lit shop fronts",
      relatedTitle: "Keep the season going",
      relatedLead: "The markets sit between Christmas and New Year's Eve, and the seasonal calendar covers the rest.",
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
          href: "new-years-eve-nyc.html",
          image: "times-square-night.webp",
          alt: "Times Square's billboards glowing at night",
          kicker: "31 December",
          title: "New Year's Eve in NYC",
          text: "The ball drop, what it asks of you, and the calmer ways to see midnight.",
          meta: "Seasonal guide",
        },
        {
          href: "whats-on.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Calendar",
          title: "What's on in New York",
          text: "All nine seasonal guides and the dates that shape the year.",
          meta: "Hub",
        },
      ],
      faqTitle: "Christmas market questions",
      faq: [
        {
          q: "When is Bryant Park Winter Village open?",
          a: "<p>The Winter Village runs from 28 October 2026 to 28 February 2027. The holiday shops close earlier, on 3 January 2027, while the rink runs through the winter. Check the park's site for current rink hours.</p>",
        },
        {
          q: "Is the Bryant Park rink free?",
          a: "<p>Admission is free; you pay only for skate rental, which runs from $18.72 to $64.48 depending on the hire. Check Bryant Park's site for sessions and booking.</p>",
        },
        {
          q: "Is it free to visit the Christmas markets?",
          a: "<p>Yes. Bryant Park's Winter Village and the city's other holiday markets are free to enter and browse. You pay for food, gifts and skate rental, not admission. Some individual events or performances may be ticketed.</p>",
        },
        {
          q: "When is the Rockefeller Center tree lit?",
          a: "<p>The tree is lit on 2 December 2026 and stays up until about 9 January 2027. The lighting night is extremely crowded; the tree is easier to see on a weekday morning a few days later.</p>",
        },
        {
          q: "What is open on Christmas Day?",
          a: "<p>Some shops, restaurants and attractions close or run shorter hours. Confirm opening hours directly for anything you are counting on, and book the meal rather than improvising.</p>",
        },
      ],
      source: "christmas-markets",
      prev: { href: "christmas-in-nyc.html", label: "Christmas in NYC" },
      next: { href: "new-years-eve-alternatives.html", label: "New Year's Eve alternatives" },
    }),
};
