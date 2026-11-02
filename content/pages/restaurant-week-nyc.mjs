import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "restaurant-week-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "NYC Restaurant Week — How It Works",
  description:
    "NYC Restaurant Week explained: the two annual windows, the $30, $45 and $60 prix-fixe tiers, how to book, and when the promotion is actually good value.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/nyc-pizza-slice.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC Restaurant Week — How It Works",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "Restaurant Week" },
      ],
      heroImage: "nyc-pizza-slice.webp",
      heroAlt: "A slice of New York pizza on a paper plate",
      eyebrowText: "Seasonal guide · Restaurant Week",
      h1: "NYC Restaurant Week",
      lead: "Twice a year, a long list of New York restaurants offers a fixed-price menu at one of three set prices. It is a genuine way to eat well for less — and a marketing event that rewards reading the menu before you book. Here is how to use it.",
      heroMeta: [
        "Late January–mid February",
        "Mid-July–mid August",
        "Prix-fixe $30 / $45 / $60",
        "2027 dates TBA",
      ],
      facts: [
        { label: "When", value: "Late January–mid February; mid-July–mid August" },
        { label: "2027 dates", value: "TBA — check the official site" },
        { label: "Price", value: "Prix-fixe $30, $45 or $60 per person" },
        { label: "Best for", value: "Trying a restaurant above your usual budget" },
        { label: "Booking", value: "Reservations open ahead; book as soon as you can" },
      ],
      introEyebrow: "The short version",
      introTitle: "A fixed price, a shorter menu",
      introLead:
        "Restaurant Week is a prix-fixe promotion: participating restaurants offer a limited menu at one of three set prices. What you save depends entirely on what the restaurant would charge for the same dishes outside the promotion.",
      introParagraphs: [
        "The scheme runs twice a year, in late January to mid-February and mid-July to mid-August, usually for about four weeks and sometimes extended. Menus are priced at $30, $45 or $60 per person, typically with lunch at the lower end and dinner at the higher end. The exact 2027 dates are still to be announced; the current list of participating restaurants and dates is published by <a href=\"https://www.nyctourism.com/restaurant-week/\" rel=\"nofollow noopener\" target=\"_blank\">NYC Tourism</a>, and it changes each season.",
        "The important caveat is that not every restaurant participates, and not every participating restaurant is a bargain. A $60 dinner at a place whose normal main courses start at $28 is decent value; the same $60 at a restaurant with $22 mains is not. Tax (8.875%) and a tip of 18–22% are on top of the advertised price, and drinks are almost always extra. Read the sample menu, compare it to the regular menu, and book a table you would actually want outside the promotion.",
      ],
      introImage: "soho-street-night.webp",
      introImageAlt: "A cobblestone SoHo street at night with lit shop windows",
      highlightsTitle: "How to read the offer",
      highlightsLead:
        "Three price tiers, two seasons, and a list that changes every time. The differences between them are where the value sits.",
      highlights: [
        {
          kicker: "01",
          title: "The three tiers",
          text: "Menus are priced at $30, $45 or $60 per person. Lunch is usually at the lower tiers and dinner at the higher ones, though the structure varies by restaurant. The price is per person, before tax, tip and drinks.",
        },
        {
          kicker: "02",
          title: "Lunch is the real value",
          text: "A $30 or $45 lunch at a restaurant whose dinner mains cost more is the best use of the promotion. Portions are usually the same; the menu is simply shorter and the room is quieter.",
        },
        {
          kicker: "03",
          title: "The list changes",
          text: "Participants vary between the winter and summer editions, and some restaurants run their own extended offers. Always check the current official list rather than relying on last season's favourites.",
        },
      ],
      planTitle: "Getting a table worth having",
      planLead:
        "The promotion is only as good as the booking. Do these five things in order and you will eat better than most people who hear about Restaurant Week on the day it starts.",
      planSteps: [
        "Check the official list when it is published and shortlist three or four restaurants in neighbourhoods you actually want to visit.",
        "Read each sample menu against the regular menu. If the promotion menu is mostly dishes you would not order, pick somewhere else.",
        "Book as soon as reservations open. Popular restaurants fill within days, and the best lunch slots go first.",
        "Choose lunch over dinner where you can. The lower tiers are the biggest saving, and the room is calmer.",
        "Confirm the details when you book: the price per person, whether the whole table must take the menu, and whether tax, tip and drinks are extra.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Budget for the extras",
          text: "The $30, $45 or $60 price is before 8.875% sales tax and a tip of 18–22%. Two people at the $60 tier can easily spend over $180 all-in once drinks are included.",
        },
        {
          icon: "☂",
          title: "Check the whole table rule",
          text: "Many restaurants require everyone at the table to order the Restaurant Week menu. If one of you wants the regular menu, ask before booking.",
        },
        {
          icon: "◷",
          title: "Do not save it for the last weekend",
          text: "The final days of each edition are the hardest to book and the most rushed in the kitchen. Aim for the first ten days or a weekday in the middle.",
        },
      ],
      localTitle: "How locals use it",
      localTips: [
        {
          title: "Book the expensive room at lunch",
          text: "The classic local move is a long weekday lunch at a restaurant that would be a splurge at dinner. You get the room, the service and usually the same kitchen, at the lowest tier of the promotion.",
        },
        {
          title: "Use it to test a neighbourhood",
          text: "Restaurant Week is a good excuse to eat somewhere you have been meaning to try: a steakhouse, a seafood room, a hotel dining room. If you like it, you will come back at full price; if you do not, you have spent $45 rather than $150 finding out.",
        },
        {
          title: "Then go back to the pizza",
          text: "New York's everyday food is the reason people move here. Use the promotion for one or two special meals and spend the rest of the week on slices, bagels and dumplings, which remain the best value in the city.",
        },
      ],
      localImage: "nyc-bagel-cream-cheese.webp",
      localImageAlt: "A bagel with cream cheese from a New York bagel shop",
      relatedTitle: "Eat well either way",
      relatedLead: "The food guide covers the everyday places, and the calendar shows the other value seasons.",
      related: [
        {
          href: "food.html",
          image: "nyc-pizza-slice.webp",
          alt: "A slice of New York pizza on a paper plate",
          kicker: "Food",
          title: "Where to eat in New York",
          text: "Iconic dishes, affordable spots and the neighbourhoods worth eating in.",
          meta: "Food guide",
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
          href: "budget.html",
          image: "nyc-bagel.webp",
          alt: "A New York bagel shop storefront",
          kicker: "Planning",
          title: "New York on a budget",
          text: "Daily costs, cheap eats and the savings that actually add up.",
          meta: "Budget guide",
        },
      ],
      faqTitle: "Restaurant Week questions",
      faq: [
        {
          q: "When is NYC Restaurant Week?",
          a: "<p>It runs twice a year: late January to mid-February and mid-July to mid-August, usually for around four weeks. The exact 2027 dates are TBA, so check the official NYC Tourism page for the current dates and list.</p>",
        },
        {
          q: "How much does Restaurant Week cost?",
          a: "<p>Menus are priced at $30, $45 or $60 per person, before tax, tip and drinks. Lunch is usually at the lower tiers and dinner at the higher ones, though each restaurant sets its own structure.</p>",
        },
        {
          q: "Do I need a reservation?",
          a: "<p>Yes, for almost any restaurant worth going to. Bookings open ahead of each edition and popular tables fill quickly. Walk-ins are possible at quieter places but not a plan to rely on.</p>",
        },
        {
          q: "Is Restaurant Week good value?",
          a: "<p>Sometimes. Compare the promotion menu with the regular menu: if the dishes you want would normally cost more than the fixed price, it is a good deal. If the menu is built from cheaper items, you may not save much.</p>",
        },
        {
          q: "Which restaurants take part?",
          a: "<p>The list changes for each edition and ranges from neighbourhood bistros to high-end dining rooms. Check the official list published by NYC Tourism when each edition is announced, and book from that list rather than from memory.</p>",
        },
      ],
      source: "restaurant-week",
      prev: { href: "new-years-eve-nyc.html", label: "New Year's Eve in NYC" },
      next: { href: "summer-in-nyc.html", label: "Summer in NYC" },
    }),
};
