import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "christmas-in-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Christmas in NYC — Lights, Markets and Tree",
  description:
    "Christmas in New York: the Rockefeller tree, Fifth Avenue windows, Bryant Park Winter Village and how to handle the busiest weeks of the year without wasting them.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/fifth-avenue-cab.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Christmas in NYC — Lights, Markets and Tree",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "Christmas" },
      ],
      heroImage: "fifth-avenue-cab.webp",
      heroAlt: "A yellow taxi on Fifth Avenue among Christmas decorations",
      eyebrowText: "Seasonal guide · Christmas",
      h1: "Christmas in New York",
      lead: "New York does Christmas better than almost anywhere, and it charges for it — in hotel rates and in crowds. The trick is to go early in December, see the three things that matter at calm hours, and let the rest of the city happen around them.",
      heroMeta: [
        "Tree lit 2 December 2026",
        "Winter Village to 28 February 2027",
        "December averages 45°F / 34°F",
        "Book four to six months ahead",
      ],
      facts: [
        { label: "When", value: "Tree lit 2 December 2026, up to about 9 January 2027" },
        { label: "Weather", value: "45°F / 34°F average; 11.4 wet days" },
        { label: "Book by", value: "Four to six months ahead" },
        { label: "Best for", value: "Atmosphere, windows and shows" },
        { label: "Crowds", value: "Heaviest from 26 December to 1 January" },
      ],
      introEyebrow: "The short version",
      introTitle: "Three things worth the crowd",
      introLead:
        "The Rockefeller Center tree, the Fifth Avenue windows and the Bryant Park Winter Village carry most of the season. Almost everything else is a variation on those three, which is useful: see them properly and the rest of the city is a bonus rather than a checklist.",
      introParagraphs: [
        "The tree is lit on 2 December 2026 and stays up until about 9 January 2027, on Rockefeller Plaza. The lighting itself is a crowded evening event, but the tree is better a few days later — early morning, before the plaza fills, is the closest thing to having it to yourself. The rink below is small and popular, and skating is a separate booking. The organiser lists the season at <a href=\"https://www.rockefellercenter.com/\" rel=\"nofollow noopener\" target=\"_blank\">Rockefeller Center</a>.",
        "The Fifth Avenue windows are free and run from the department stores around 49th to 59th Streets. Walk them at dusk, when the lights are on and the crowds are thinning, rather than on a weekend afternoon. Bryant Park's Winter Village, open from 28 October 2026 to 28 February 2027, adds a free-admission rink, paid skate rental and a cluster of small shops; it is the most useful thing in Midtown when you need a break from the street. Details are on <a href=\"https://bryantpark.org/activities/bank-of-america-winter-village-at-bryant-park\" rel=\"nofollow noopener\" target=\"_blank\">Bryant Park's site</a>.",
      ],
      introImage: "manhattan-skyline-night.webp",
      introImageAlt: "Manhattan skyline at night with city lights reflected in the river",
      mapId: "bryant-park",
      highlightsTitle: "The three anchors",
      highlightsLead:
        "If you only do three Christmas things in New York, do these — and do them outside the busiest hours.",
      highlights: [
        {
          kicker: "01",
          title: "The tree at Rockefeller Center",
          text: "Lit on 2 December 2026 and on show until about 9 January 2027. Free to see. The lighting night is a crush; a weekday morning a few days later gives you the plaza almost to yourself.",
        },
        {
          kicker: "02",
          title: "The Fifth Avenue windows",
          text: "Free, elaborate and best at dusk. Walk from around 59th Street south toward 49th, cross to the park side when it gets busy, and do not expect to move quickly on a weekend.",
        },
        {
          kicker: "03",
          title: "Bryant Park Winter Village",
          text: "Open 28 October 2026 to 28 February 2027, with a free-admission skating rink, paid rentals and small shops. The most reliable place in Midtown to sit down, eat something and warm up.",
        },
      ],
      planTitle: "A Christmas week that works",
      planLead:
        "Book the room and the evening entertainment first, then choose two mornings for the outdoor sights. December rewards an early start more than any other month.",
      planSteps: [
        "Book accommodation four to six months ahead, especially if you want Christmas week itself. The last week of December is the most expensive and the busiest; the first two weeks are far easier.",
        "See the Rockefeller Center tree on a weekday morning, before 9am if you can. The tree is lit from 2 December 2026, so any day after that works.",
        "Skate at Bryant Park on a weekday morning rather than at night. Admission is free and skate rental is paid; a weekday session avoids the evening queues.",
        "Walk the Fifth Avenue windows at dusk, starting near 59th Street and heading south. Do this on a weekday if possible and keep it to an hour.",
        "Book one evening show — a Broadway production or the Rockettes at Radio City — and one good dinner. Those are the two bookings that turn a cold week into a holiday.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Cold is the point, but be ready",
          text: "December averages 45°F by day and 34°F at night, with 11.4 wet days across the month. A proper coat, gloves and a hat matter more than the photographs.",
        },
        {
          icon: "☂",
          title: "The lighting night is a spectacle, not a shortcut",
          text: "2 December draws enormous crowds around Rockefeller Plaza. If you want to be there, arrive early and expect to stand; if you want to see the tree, wait a few days and go at breakfast time.",
        },
        {
          icon: "◷",
          title: "Check holiday hours",
          text: "Some restaurants and attractions close or shorten hours on Christmas Day itself. Confirm anything that matters directly, and book Christmas lunch or dinner in advance if it is part of the plan.",
        },
      ],
      localTitle: "How locals do December",
      localTips: [
        {
          title: "Save Christmas week for the locals",
          text: "Many New Yorkers leave between 24 December and 2 January, which is exactly when visitors arrive. The upside is calmer neighbourhood restaurants and bars; the downside is that the big sights are at their worst.",
        },
        {
          title: "Go to Dyker Heights for lights",
          text: "The residential light displays in Dyker Heights, Brooklyn, are a genuine local tradition and free to walk. Go after dark on a weeknight, take the subway to Bay Ridge Avenue or 79th Street, and expect other people doing exactly the same thing.",
        },
        {
          title: "Shop the Winter Village on a weekday",
          text: "The Bryant Park shops are small and the rink is popular. A weekday before noon is the only time it feels like a market rather than a queue, and the surrounding park is pleasant even in the cold.",
        },
      ],
      localImage: "grand-central.webp",
      localImageAlt: "The main concourse of Grand Central Terminal",
      relatedTitle: "Keep the season going",
      relatedLead: "New Year's Eve follows immediately, and the seasonal calendar covers the rest of the year.",
      related: [
        {
          href: "new-years-eve-nyc.html",
          image: "times-square-night.webp",
          alt: "Times Square billboards glowing at night",
          kicker: "31 December",
          title: "New Year's Eve in NYC",
          text: "The ball drop, what it costs you in hours, and the calmer alternatives.",
          meta: "8 min read",
        },
        {
          href: "whats-on.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Calendar",
          title: "What's on in New York",
          text: "The six seasonal guides and the dates that shape the year.",
          meta: "Hub",
        },
        {
          href: "free-things-to-do-nyc.html",
          image: "manhattan-skyline.webp",
          alt: "Lower Manhattan and the Brooklyn Bridge across the East River",
          kicker: "Budget",
          title: "Free things to do in NYC",
          text: "Windows, parks, ferries and museum hours that cost nothing.",
          meta: "Free guide",
        },
      ],
      faqTitle: "Christmas questions",
      faq: [
        {
          q: "When is the Rockefeller Center tree lit in 2026?",
          a: "<p>The tree is lit on 2 December 2026 and stays up until about 9 January 2027. It is free to see, and the plaza is busiest on the lighting night and through the final week of December.</p>",
        },
        {
          q: "Is ice skating at Bryant Park free?",
          a: "<p>Rink admission is free; skate rental is paid. The Winter Village runs from 28 October 2026 to 28 February 2027. A weekday morning session is the calmest way to skate.</p>",
        },
        {
          q: "When is the best time to visit New York for Christmas?",
          a: "<p>The first two weeks of December. Everything is open and decorated, hotel rates are lower than Christmas week, and the crowds are noticeably thinner. The tree is lit on 2 December, so early December visits need to start after that date to see it.</p>",
        },
        {
          q: "What is open on Christmas Day?",
          a: "<p>Some restaurants and attractions open with reduced hours, and many close. Plan the day around a booked meal and a walk rather than a major sight, and confirm opening hours for anything you are counting on.</p>",
        },
        {
          q: "Do I need to book shows in advance?",
          a: "<p>Yes for the Christmas period. Broadway and the Rockettes sell heavily through December. Book ahead for the dates that matter, or use same-day discount options such as TKTS.</p>",
        },
      ],
      source: "christmas",
      prev: { href: "thanksgiving-nyc.html", label: "Thanksgiving in NYC" },
      next: { href: "new-years-eve-nyc.html", label: "New Year's Eve in NYC" },
    }),
};
