import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "thanksgiving-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Thanksgiving in NYC — Parade Guide 2026",
  description:
    "Thanksgiving in New York: watching the Macy's parade on Central Park West, booking the meal, and what the rest of the holiday week is actually like.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Thanksgiving in NYC — Parade Guide 2026",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "Thanksgiving" },
      ],
      heroImage: "central-park-bow-bridge.webp",
      heroAlt: "Bow Bridge in Central Park on a clear autumn morning",
      eyebrowText: "Seasonal guide · Thanksgiving",
      h1: "Thanksgiving in New York",
      lead: "One parade in the morning, one long meal in the afternoon, and a city that quietly turns toward Christmas by the weekend. Thanksgiving is the most manageable of New York's big holidays, provided you plan two things and leave the rest loose.",
      heroMeta: ["26 November 2026", "Parade 8:30am–noon", "Free to watch", "Book the meal early"],
      facts: [
        { label: "When", value: "26 November 2026, the 100th edition" },
        { label: "Weather", value: "54°F / 41°F average; 9.2 wet days" },
        { label: "Book by", value: "Four to six months ahead" },
        { label: "Best for", value: "Families and first visits" },
        { label: "Crowds", value: "Extreme at the parade and in Midtown" },
      ],
      introEyebrow: "The short version",
      introTitle: "A holiday you can actually plan",
      introLead:
        "The Thanksgiving Day Parade is free, unticketed and over by noon. Everything after that is a meal and a walk, which makes this one of the few New York holidays where a loose plan works better than a tight one.",
      introParagraphs: [
        "The parade runs from Central Park West and 77th Street down to Herald Square, starting at 8:30am and finishing around noon. It is the 100th edition in 2026, so expect the route to be busier than usual and the television coverage to lean nostalgic. If you want to be at the front, you need to be on Central Park West well before the start; if you simply want to see it, the upper stretch of the route is calmer than the Herald Square finish. The full route and any changes are published by the organiser at <a href=\"https://www.nyctourism.com/events/macys-thanksgiving-day-parade/\" rel=\"nofollow noopener\" target=\"_blank\">NYC Tourism</a>.",
        "The rest of the day belongs to food. Most sit-down restaurants serve a fixed Thanksgiving menu, and the good ones book out weeks in advance; a few close entirely. Book as soon as you know your dates, confirm the restaurant is open on the day itself, and expect holiday pricing rather than the normal menu. If you are staying in an apartment, a supermarket meal or a neighbourhood diner is a perfectly New York alternative. By Friday the Christmas windows are up, the Bryant Park Winter Village is open, and the city has moved on.",
      ],
      introImage: "fifth-avenue-cab.webp",
      introImageAlt: "A yellow taxi on Fifth Avenue in autumn light",
      mapId: "central-park",
      highlightsTitle: "Three parts to the day",
      highlightsLead:
        "Think of Thanksgiving as a morning event and an afternoon meal, with the city's Christmas season starting quietly around the edges.",
      highlights: [
        {
          kicker: "01",
          title: "The parade",
          text: "Balloons, marching bands and floats from Central Park West and 77th Street to Herald Square, 8:30am to noon. Free, no tickets, and best seen before the route reaches Midtown. Security screening applies, so travel light.",
        },
        {
          kicker: "02",
          title: "The meal",
          text: "Roast turkey and the traditional sides are served as fixed menus in most sit-down restaurants. Book weeks ahead, confirm the restaurant is open on the day, and expect a limited menu rather than the usual one.",
        },
        {
          kicker: "03",
          title: "The weekend after",
          text: "Christmas arrives immediately. Shop windows are dressed, the Bryant Park Winter Village is in full swing, and the Rockefeller Center tree is lit on 2 December 2026. Friday is busy; Saturday and Sunday are easier.",
        },
      ],
      planTitle: "A calm Thanksgiving Day",
      planLead:
        "Two bookings — your viewing spot and your meal — decide how the day feels. Everything else can be decided on the morning.",
      planSteps: [
        "Pick your stretch of Central Park West and arrive well before 8:30am. The southern end of the route is the busiest; the northern stretch near the start is calmer and easier to leave.",
        "Watch until the parade passes, then walk away from Midtown rather than with the crowd. The Upper West Side and the park are quiet by noon.",
        "Book a Thanksgiving lunch or dinner in advance and confirm the restaurant is open that day. Ask whether service is a fixed menu and what it costs per person.",
        "Leave the afternoon open for Central Park, a museum that stays open, or a first look at the Christmas windows on Fifth Avenue.",
        "If you are still in town at the weekend, save Friday for the shops and take Saturday or Sunday for the tree at Rockefeller Center, which is less frantic before the lighting.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Dress for standing",
          text: "Late November averages 54°F by day and 41°F at night, with wind along the park. Wear layers, gloves and shoes you can stand in for two hours.",
        },
        {
          icon: "☂",
          title: "Travel light",
          text: "The parade route has security screening and no bag storage. A small bag, a phone and a MetroCard-free OMNY tap are all you need.",
        },
        {
          icon: "◷",
          title: "Confirm rather than assume",
          text: "Some restaurants and attractions close or run shorter hours on Thanksgiving Day. If the meal or a museum matters, check directly before you build the day around it.",
        },
      ],
      localTitle: "How New Yorkers spend it",
      localTips: [
        {
          title: "Watch once, then stay home",
          text: "For most people who live here, the parade is something you do once — early, wrapped up, and from the park side — and then watch on television in later years. Treat it as a spectacle rather than a tradition you have to repeat.",
        },
        {
          title: "Walk the route after noon",
          text: "Once the last band has passed, Central Park West empties quickly. The same streets that were impassable at 9am are a pleasant walk by 1pm, and the park itself is at its quietest of the week.",
        },
        {
          title: "Start Christmas in the last week of November",
          text: "The Bryant Park Winter Village opened on 28 October 2026 and runs to 28 February 2027. Locals shop it on weekday mornings, before the holiday crowds arrive and while the rink is still empty.",
        },
      ],
      localImage: "manhattan-skyline-night.webp",
      localImageAlt: "Lower Manhattan lit up at night across the East River",
      relatedTitle: "Where to go next",
      relatedLead: "The holiday week runs straight into Christmas, and the seasonal calendar has the rest of the year.",
      related: [
        {
          href: "christmas-in-nyc.html",
          image: "fifth-avenue-cab.webp",
          alt: "A yellow taxi on Fifth Avenue in winter",
          kicker: "December",
          title: "Christmas in New York",
          text: "Tree, windows, skating and the quiet weeks either side of the holiday.",
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
          href: "when-to-visit.html",
          image: "central-park-bow-bridge.webp",
          alt: "Bow Bridge in Central Park",
          kicker: "Planning",
          title: "When to visit New York",
          text: "Weather by month, holiday trade-offs and what to pack.",
          meta: "Weather guide",
        },
      ],
      faqTitle: "Thanksgiving questions",
      faq: [
        {
          q: "Do I need tickets for the Macy's Thanksgiving Day Parade?",
          a: "<p>No. The parade is free and unticketed, and the route along Central Park West and Sixth Avenue is open to anyone. Arrive early, expect security screening and keep bags small. The 2026 edition is on 26 November and runs from 8:30am to noon.</p>",
        },
        {
          q: "Where is the best place to watch?",
          a: "<p>Central Park West near the start of the route is calmer and easier to leave than Herald Square, where the parade finishes and the crowds are densest. Anywhere along the route gives you a view; the trade-off is between an earlier start and a shorter walk afterwards.</p>",
        },
        {
          q: "Is anything open on Thanksgiving Day?",
          a: "<p>Some restaurants and attractions open with shorter hours, and a few close entirely. Book the meal in advance and confirm opening hours directly if a museum or observation deck is part of your plan. Christmas windows and the Bryant Park Winter Village are already open.</p>",
        },
        {
          q: "How far ahead should I book?",
          a: "<p>For Thanksgiving week, start looking four to six months ahead. Hotels and the better restaurant tables go first, and flights into New York rise steadily from September. The meal is the booking that matters most.</p>",
        },
        {
          q: "What is the weather like?",
          a: "<p>November averages 54°F (12°C) by day and 41°F (5°C) at night, with around 9.2 wet days across the month. It can be crisp and sunny or raw and damp — layers, a warm hat and a waterproof outer layer cover both.</p>",
        },
      ],
      source: "thanksgiving",
      prev: { href: "whats-on.html", label: "What's on in New York" },
      next: { href: "christmas-in-nyc.html", label: "Christmas in NYC" },
    }),
};
