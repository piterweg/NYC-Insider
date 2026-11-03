import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "valentines-day-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Valentine's Day in NYC — Free and Paid Ideas",
  description:
    "Valentine's Day in New York: free Central Park walks, sunset skyline decks, ice skating and dinner booking, plus how Restaurant Week can cut the cost.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Valentine's Day in NYC — Free and Paid Ideas",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "Valentine's Day" },
      ],
      heroImage: "central-park-bow-bridge.webp",
      heroAlt: "Bow Bridge in Central Park in winter light",
      eyebrowText: "Seasonal guide · Valentine's Day",
      h1: "Valentine's Day in New York",
      lead: "Valentine's Day falls on a Sunday in 2027, which turns it into a weekend of raised prices and booked-out tables. The good news is that the best parts are free: a cold walk through Central Park, a sunset from a bridge, and one good meal you remembered to reserve.",
      heroMeta: ["14 February 2027, a Sunday", "Central Park walks free", "Skyline decks from $42", "Book dinner weeks ahead"],
      facts: [
        { label: "When", value: "14 February 2027, a Sunday" },
        { label: "Weather", value: "43°F / 28°F average; 10 wet days" },
        { label: "Book by", value: "Restaurants weeks ahead; hotels early" },
        { label: "Free", value: "Central Park, Bow Bridge, Bethesda Terrace, Conservatory Garden" },
        { label: "Skyline decks", value: "Top of the Rock from $42; Empire State from $46; Edge ~$44–69" },
      ],
      introEyebrow: "The short version",
      introTitle: "A cold weekend, planned around one meal",
      introLead:
        "February is normally the cheapest month for hotels, but Valentine's weekend is the exception. Rates rise, restaurants switch to fixed menus, and the skyline decks sell their sunset slots first — so book what needs booking and keep the rest simple.",
      introParagraphs: [
        "The date is 14 February 2027, which is a Sunday. That spreads the celebration across Saturday night and Sunday, concentrating the pressure on restaurants into two evenings. Book weeks ahead, ask whether the menu is fixed and what the cancellation terms are, and expect to pay more than usual. February weather averages 43°F (6°C) by day and 28°F (−2°C) at night, with around 10 wet days, so plan the outdoor part for daylight and keep an indoor option ready.",
        "Restaurant Week usually runs from late January to mid-February, so 14 February can fall inside it — check the official dates at <a href=\"https://www.nyctourism.com/restaurant-week/\" rel=\"nofollow noopener\" target=\"_blank\">NYC Tourism</a>; the window moves each year. When it overlaps, a Restaurant Week table at $30, $45 or $60 can be better value than a one-off Valentine's menu, provided the promotion menu is what you want to eat. The free half of the day is easy: Central Park's Bow Bridge and Bethesda Terrace, the quieter Conservatory Garden, and the Bryant Park rink, where admission is free and skate rental runs from $18.72 to $64.48.",
      ],
      introImage: "soho-street-night.webp",
      introImageAlt: "A cobblestone SoHo street at night with lit shop fronts",
      mapId: "central-park",
      highlightsTitle: "Three ways to spend the day",
      highlightsLead:
        "One free walk, one view and one meal is enough. Pick the view that suits your budget and let the park do the rest.",
      highlights: [
        {
          kicker: "01",
          title: "The free park walk",
          text: "Bow Bridge, Bethesda Terrace and the Conservatory Garden are all free and all at their most atmospheric in cold, clear weather. Go early: the bridge is the park's busiest spot by mid-morning on 14 February.",
        },
        {
          kicker: "02",
          title: "Sunset from above",
          text: "Top of the Rock is from $42, the Empire State Building from $46 and Edge around $44–69. All three are busiest at sunset, so book a timed entry for late afternoon rather than hoping to walk up.",
        },
        {
          kicker: "03",
          title: "Dinner, booked",
          text: "Restaurants run fixed menus and two sittings on 14 February. Book weeks ahead, confirm what the price includes and check whether Restaurant Week is running — its $30, $45 and $60 menus can be the better deal.",
        },
      ],
      planTitle: "Planning the weekend",
      planLead:
        "Decide the budget first, then book in order of scarcity: dinner, any timed skyline entry, then the hotel.",
      planSteps: [
        "Choose the shape of the day: a free park walk plus one paid view, a show and dinner, or a long lunch. Sunday lunch is often easier to book than Saturday dinner.",
        "Book the restaurant weeks ahead and ask directly whether the menu is fixed, whether a deposit is needed and how late you can cancel.",
        "Check the Restaurant Week dates before booking a special menu. If the promotion overlaps 14 February, compare the promotion menu with the Valentine's menu before deciding.",
        "Book any skyline deck for late afternoon, before sunset. If the timed slots are gone, Brooklyn Bridge Park and the Brooklyn Heights Promenade give you the skyline for nothing.",
        "Book the hotel early if you are staying the weekend, and check the total with tax rather than the headline rate.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Dress for real February",
          text: "Expect 43°F (6°C) by day and 28°F (−2°C) at night, with around 10 wet days across the month. A warm coat, gloves and shoes you can walk in matter more than the outfit you planned.",
        },
        {
          icon: "☂",
          title: "Confirm the menu",
          text: "Many restaurants serve a fixed Valentine's menu rather than the normal list. Ask what is included, whether drinks are extra and the cancellation terms before you pay a deposit.",
        },
        {
          icon: "◷",
          title: "Skip the sunset rush",
          text: "The decks are busiest in the hour before sunset. A late-morning slot is quieter, and the view is just as good in clear winter light.",
        },
      ],
      localTitle: "How locals spend it",
      localTips: [
        {
          title: "The park before ten",
          text: "New Yorkers who walk the park on Valentine's Day go early, before the bridge and the terrace fill. A cold, clear morning at Bow Bridge is the quiet version people imagine.",
        },
        {
          title: "Free skyline instead of a ticket",
          text: "Brooklyn Bridge Park and the Brooklyn Heights Promenade give you the Lower Manhattan skyline for nothing, and they are far less crowded than the observation decks on 14 February. Take the subway and walk the waterfront.",
        },
        {
          title: "Celebrate on the 13th or the 15th",
          text: "Plenty of couples who live here mark the occasion a day early or late. Restaurants are calmer, fixed menus disappear and the same table costs less. Keep the 14th for the walk.",
        },
      ],
      localImage: "central-park-nyc.webp",
      localImageAlt: "Bethesda Fountain and its terrace in Central Park",
      relatedTitle: "February and the rest",
      relatedLead: "Valentine's Day sits inside Restaurant Week season, and the February guide covers the whole month.",
      related: [
        {
          href: "nyc-in-february.html",
          image: "central-park-bow-bridge.webp",
          alt: "Bow Bridge in Central Park in winter",
          kicker: "February",
          title: "NYC in February",
          text: "Deep winter, Restaurant Week and the first hints of spring.",
          meta: "Month guide",
        },
        {
          href: "restaurant-week-nyc.html",
          image: "nyc-pizza-slice.webp",
          alt: "A slice of New York pizza on a paper plate",
          kicker: "Jan &amp; Jul",
          title: "NYC Restaurant Week",
          text: "Prix-fixe menus at $30, $45 and $60, twice a year.",
          meta: "Value guide",
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
      faqTitle: "Valentine's Day questions",
      faq: [
        {
          q: "When is Valentine's Day in 2027?",
          a: "<p>14 February 2027 falls on a Sunday. Expect the Saturday and Sunday of that weekend to be the busiest and most expensive of the month, with restaurants running fixed menus and hotels raising rates.</p>",
        },
        {
          q: "What can we do for free on Valentine's Day in New York?",
          a: "<p>Walk Central Park: Bow Bridge, Bethesda Terrace and the Conservatory Garden cost nothing. The Bryant Park rink has free admission with paid skate rental, and Brooklyn Bridge Park or the Staten Island Ferry give you the skyline for free.</p>",
        },
        {
          q: "Is Restaurant Week running on Valentine's Day?",
          a: "<p>It may be. Restaurant Week usually runs from late January to mid-February, and the exact dates move each year. Check the official NYC Tourism page before planning around it, and compare its $30, $45 and $60 menus with any Valentine's menu.</p>",
        },
        {
          q: "Do we need to book restaurants in advance?",
          a: "<p>Yes, weeks ahead. Valentine's Day is one of the busiest restaurant nights, and many places take deposits and run two sittings. Confirm the menu and cancellation terms when you book.</p>",
        },
        {
          q: "Which skyline deck is best for sunset?",
          a: "<p>Top of the Rock is from $42, the Empire State Building from $46 and Edge around $44–69. All three are busiest at sunset, so book a timed entry for late afternoon. For a free alternative, watch the light from Brooklyn Bridge Park.</p>",
        },
      ],
      source: "valentines-day",
      prev: { href: "nyc-in-february.html", label: "NYC in February" },
      next: { href: "restaurant-week-nyc.html", label: "NYC Restaurant Week" },
    }),
};
