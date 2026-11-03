import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "new-years-eve-alternatives.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "New Year's Eve Alternatives in New York",
  description:
    "New Year's Eve in New York without the Times Square crush: restaurant tables, Broadway and comedy shows, Brooklyn viewpoints and midnight events, with booking advice.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/times-square-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "New Year's Eve Alternatives in New York",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "New Year's Eve alternatives" },
      ],
      heroImage: "times-square-night.webp",
      heroAlt: "Times Square's billboards glowing above the street at night",
      eyebrowText: "Seasonal guide · New Year's Eve",
      h1: "New Year's Eve Alternatives",
      lead: "Times Square is the famous way to see midnight in New York, not the only one. A booked table, a show, a comedy club or a Brooklyn waterfront give you the same countdown without the six hours of standing — and in most cases you need to decide weeks, not hours, in advance.",
      heroMeta: ["31 December", "Ball drop free, no tickets", "Arrive early afternoon for Times Square", "Book alternatives ahead"],
      facts: [
        { label: "When", value: "31 December; midnight countdown" },
        { label: "Ball drop", value: "Free; arrive early afternoon; security screening" },
        { label: "Weather", value: "45°F / 34°F average; 11.4 wet days" },
        { label: "Broadway", value: "Average paid ticket $131.09 in 2025–26; TKTS up to 50% off" },
        { label: "Booking", value: "Fixed-menu dinners and shows fill weeks ahead" },
      ],
      introEyebrow: "The short version",
      introTitle: "Choose the midnight you actually want",
      introLead:
        "The alternatives fall into three groups: eat and drink somewhere booked, watch a show, or find a free view and count down outside. Each costs a different amount of money, comfort and advance planning, and none of them involves standing in a viewing pen for six hours.",
      introParagraphs: [
        "Restaurants are the most popular alternative. Most places that open on 31 December serve a fixed menu rather than the normal à la carte list, often with two sittings and a prepaid deposit; the details vary by venue, so read the terms when you book. Broadway theatres vary too — some shows perform on 31 December, some do not, and schedules are published by the productions rather than the city. TKTS sells same-day seats at up to 50% off; hours are published at <a href=\"https://www.tdf.org/discount-ticket-programs/tkts-by-tdf/tkts-live/\" rel=\"nofollow noopener\" target=\"_blank\">tdf.org</a>. Comedy clubs sell tickets in advance for special New Year's Eve line-ups; check each venue.",
        "For a free alternative, the Brooklyn waterfront is the obvious choice. Brooklyn Bridge Park and the DUMBO shoreline look straight back at Lower Manhattan, and you do not need a ticket to stand there — though you should expect crowds, cold and limited toilets. Midnight runs and fireworks are organised separately each year and are often announced only in December; check the official organiser's site before planning around one. Whatever you choose, plan the journey home before midnight: the subway runs around the clock, but stations near big events are busy and some entrances close.",
      ],
      introImage: "manhattan-skyline-night.webp",
      introImageAlt: "Lower Manhattan's towers lit at night across the East River",
      mapId: "brooklyn-bridge",
      highlightsTitle: "Three ways to avoid the pens",
      highlightsLead:
        "Booked, seated or free — pick one and commit early. The one thing all three share is that leaving the planning to 31 December rarely works well.",
      highlights: [
        {
          kicker: "01",
          title: "A restaurant table",
          text: "Fixed menus, two sittings and prepaid deposits are normal on 31 December. Book weeks ahead, read the cancellation terms and confirm what the price includes before you pay.",
        },
        {
          kicker: "02",
          title: "A show or a comedy club",
          text: "Some Broadway shows perform on New Year's Eve, and comedy clubs run special line-ups. Schedules and tickets come from the venue; TKTS can help with same-day seats at up to 50% off.",
        },
        {
          kicker: "03",
          title: "A Brooklyn viewpoint",
          text: "Brooklyn Bridge Park and the DUMBO waterfront are free, open and give you the skyline at midnight. Expect cold, crowds and no official event unless one is announced — and check before you rely on fireworks.",
        },
      ],
      planTitle: "Planning the night",
      planLead:
        "Decide what you are willing to spend and how long you are willing to stand, then book what matches.",
      planSteps: [
        "Choose your format: dinner, show, comedy, free viewpoint or a house party. Each has a different booking deadline, and the seated options sell out first.",
        "Book the table or tickets as early as you can. Fixed-menu dinners and New Year's Eve performances are usually prepaid and non-refundable.",
        "Read the small print before paying: sitting times, what the price includes, cancellation terms and whether the venue expects you to stay until midnight.",
        "Check show times before booking. Some performances finish early enough to reach a viewpoint by midnight; others run through the countdown.",
        "Plan your route home. The subway runs 24 hours, but expect crowds and street closures around Times Square and the waterfront, and allow extra time.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Book in November, not December",
          text: "New Year's Eve tables, shows and comedy tickets are sold months ahead. Waiting until the week before leaves you with the expensive seats or the walk-in queue.",
        },
        {
          icon: "☂",
          title: "Dress for a long night",
          text: "Expect temperatures around 45°F (7°C) by day and 34°F (1°C) at night, with 11.4 wet days in December. A viewpoint or a queue outdoors needs a proper coat, hat and gloves.",
        },
        {
          icon: "◷",
          title: "Check before relying on fireworks",
          text: "Midnight fireworks and organised runs are announced separately each year. Check the official organiser's site in December rather than assuming last year's event is happening.",
        },
      ],
      localTitle: "How locals spend 31 December",
      localTips: [
        {
          title: "Book early, eat late",
          text: "New Yorkers who go out tend to book a table for the second sitting and stay put. It is warmer, cheaper than a bar crawl and you keep your seat at midnight.",
        },
        {
          title: "The waterfront is the free seat",
          text: "Brooklyn Bridge Park and the DUMBO shoreline are the local answer to a free midnight view: skyline, river and no ticket. Go early, bring something warm to sit on and expect a crowd by 11pm.",
        },
        {
          title: "Or stay in",
          text: "Plenty of people who live here watch the ball drop on television and go out on 1 January instead. New Year's Day is quiet in the morning, the parks are empty and restaurants are easier to book.",
        },
      ],
      localImage: "brooklyn-bridge-sunset.webp",
      localImageAlt: "The Brooklyn Bridge silhouetted against a sunset over the East River",
      relatedTitle: "Before and after midnight",
      relatedLead: "The ball drop itself, the Christmas season and the full calendar are all one click away.",
      related: [
        {
          href: "new-years-eve-nyc.html",
          image: "times-square-night.webp",
          alt: "Times Square's billboards glowing at night",
          kicker: "31 December",
          title: "New Year's Eve in NYC",
          text: "How the ball drop works, how early to arrive and what security means.",
          meta: "Seasonal guide",
        },
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
          href: "whats-on.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Calendar",
          title: "What's on in New York",
          text: "All nine seasonal guides and the dates that shape the year.",
          meta: "Hub",
        },
      ],
      faqTitle: "New Year's Eve alternative questions",
      faq: [
        {
          q: "Do I need tickets for the Times Square ball drop?",
          a: "<p>No. The ball drop is free and unticketed, with first-come entry to the viewing areas. Arrive in the early afternoon, expect security screening and plan to stand for hours in the cold.</p>",
        },
        {
          q: "What are the best alternatives to Times Square on New Year's Eve?",
          a: "<p>A booked restaurant, a Broadway or comedy show, a Brooklyn viewpoint or a private party. Seated options need booking weeks ahead; free viewpoints need warm clothes and an early arrival.</p>",
        },
        {
          q: "Is Broadway open on New Year's Eve?",
          a: "<p>Some productions perform on 31 December and some do not. Schedules are published by the individual shows. TKTS sells discounted same-day seats; hours are on TDF's site.</p>",
        },
        {
          q: "Where can I see fireworks in New York on New Year's Eve?",
          a: "<p>Fireworks and midnight events change from year to year. Check the official organiser before planning around one. The Brooklyn waterfront is the reliable free skyline view, with or without fireworks.</p>",
        },
        {
          q: "How do I get home after midnight?",
          a: "<p>The subway runs 24 hours, but stations near Times Square and the waterfront are busy and some entrances close. Decide your route beforehand, allow extra time and expect to walk a few blocks to a train.</p>",
        },
      ],
      source: "new-years-eve-alternatives",
      prev: { href: "new-years-eve-nyc.html", label: "New Year's Eve in NYC" },
      next: { href: "whats-on.html", label: "What's on in New York" },
    }),
};
