import { renderAttractionPage } from "../attraction-template.mjs";

const faqItems = [
  {
    q: "Do I need to book the Empire State Building in advance?",
    a: "<p>Yes. Entry is timed, and sunset slots sell out first, often days ahead. Book on the official site and arrive at the start of your window rather than an hour early.</p>",
  },
  {
    q: "Is the 102nd floor worth the extra?",
    a: "<p>If you want more height and a quieter, glassed-in room, yes. For most people the open-air terrace on 86 is the better experience. The add-on costs extra and adds roughly 45–60 minutes, including a second lift.</p>",
  },
  {
    q: "How long should I allow for a visit?",
    a: "<p>Plan 1.5–2.5 hours on the 86th floor including security and the lifts, then add 45–60 minutes if you are also going to the 102nd.</p>",
  },
  {
    q: "Does a CityPASS or Go City pass cover it?",
    a: "<p>The 86th floor is included in CityPASS and in several Go City products, but reservations are required at most sites. Run the numbers on our <a href=\"passes.html\">pass comparison</a> before you buy either.</p>",
  },
  {
    q: "When is the Empire State Building quietest?",
    a: "<p>The first 30 minutes after opening and after 20:00. Sunset is the busiest slot of the day, so if that is the light you want, book well ahead.</p>",
  },
];

export default {
  path: "empire-state-building.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Empire State Building: Tickets and Tips",
  description:
    "The Empire State Building, planned properly: 86th and 102nd floor tickets from $46, the quietest hours, security rules and the right 34th Street entrance.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/esb-exterior.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Empire State Building",
      description:
        "Art Deco skyscraper in Midtown Manhattan with open-air 86th-floor and enclosed 102nd-floor observatories.",
      url: "https://nyctrove.com/empire-state-building.html",
      image: "https://nyctrove.com/assets/img/esb-exterior.webp",
      touristType: "Observation deck",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a.replace(/<[^>]+>/g, "") },
      })),
    },
  ],
  render: () =>
    renderAttractionPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "empire-state-building.html", label: "Empire State Building" },
      ],
      heroImage: "esb-exterior.webp",
      heroAlt: "The Empire State Building rising above the streets of Midtown Manhattan",
      eyebrowText: "Observation deck",
      h1: "Empire State Building",
      lead: "The city's most recognisable address, with an open-air terrace on the 86th floor and a view that stops just short of including itself. Book it for the hour you actually want, not for the day.",
      heroMeta: ["86th and 102nd floors", "From $46", "Open daily", "Midtown"],
      facts: [
        { label: "Tickets", value: "86th floor from $46; peak dates around $57" },
        { label: "Hours", value: "10:00–22:00 most weekdays; 09:00 on peak dates, last entry 21:00" },
        { label: "Time needed", value: "1.5–2.5 hours; add 45–60 minutes for the 102nd" },
        { label: "Best time", value: "First hour after opening, or after 20:00" },
        { label: "Nearest subway", value: "34 St–Herald Sq (B/D/F/M/N/Q/R/W); 34 St–Penn Station (1/2/3, A/C/E)" },
        { label: "Entrance", value: "20 W 34th Street, between Fifth and Sixth" },
      ],
      introImage: "fifth-avenue-cab.webp",
      introImageAlt: "A yellow cab heading down Fifth Avenue with Manhattan buildings behind it",
      mapId: "empire-state-building",
      introEyebrow: "The visit",
      introTitle: "An Art Deco landmark that still works for a living",
      introLead:
        "The Empire State Building is both a monument and an office block. You enter through a lobby of grey marble and brass, ride a lift that has been carrying visitors since 1931, and step out onto a terrace above Midtown.",
      introParagraphs: [
        "The 86th floor is the one to book. It is outdoors, with a low parapet and an uninterrupted sweep from the Hudson to the East River; Central Park sits to the north like a long green mat. What you will not see is the building itself, which is why so many people pair this visit with Top of the Rock.",
        "The 102nd floor is a separate, enclosed room reached by a second lift, higher and quieter, with glass on all sides. It is a paid add-on rather than a secret, and it adds roughly 45 to 60 minutes to the visit. Decide before you buy: the extra height is real, but the open air of 86 is what most people remember.",
      ],
      reasonsTitle: "Why this deck, and not another",
      reasonsLead: "Five observation decks compete for the same ticket. Here is what the Empire State does better than the rest.",
      reasons: [
        {
          title: "The terrace is genuinely open air",
          text: "There is no glass between you and the wind. The 86th-floor walkway wraps around the building, so you can move from the Hudson side to the East River side without coming back inside.",
        },
        {
          title: "It explains the shape of Manhattan",
          text: "From 86 floors up you can read the grid at a glance: the avenues running north, the cross streets, the two rivers pinning the island. It is the clearest lesson in New York geography you will get.",
        },
        {
          title: "It works after dark",
          text: "The building stays open late. After 20:00 the office towers are lit floor by floor, the rivers go black and the streets below turn orange. The last entry is 21:00, so a late slot still gives you time.",
        },
      ],
      bookingTitle: "Tickets, security and the right entrance",
      bookingLead: "Book a timed slot, arrive at its start, and treat the entrance like an airport.",
      bookingSteps: [
        "Book on the <strong>official Empire State Building site</strong>. Timed entry is standard, and sunset slots sell out first, often days ahead.",
        "Choose the 86th floor, then decide whether to add the <strong>102nd-floor</strong> ticket. It is a separate lift and a separate queue at the top.",
        "Enter at <strong>20 W 34th Street</strong>, between Fifth and Sixth. The grand Fifth Avenue lobby is not the observatory entrance.",
        "Arrive at the start of your window and allow 20–30 minutes for airport-style security before the lifts.",
        "If you want to skip the main ticket-holder queue, the <strong>Express Pass</strong> does exactly that; it does not skip security.",
      ],
      bookingNote:
        "Hours shift with the season and school holidays: the building opens at 10:00 on most winter weekdays, at 09:00 on peak dates, and the last entry is 21:00. Check the official site for current hours before you fix a slot.",
      official: {
        title: "Empire State Building — official tickets",
        text: "The building's own ticket page sells the 86th floor, the 102nd-floor add-on, the Express Pass and combination tickets. Prices move with the date and time you choose, so the calendar in the checkout is the real price.",
        url: "https://www.esbnyc.com/buy-tickets",
        cta: "Book on esbnyc.com",
        note: "Official seller. We take no commission on this link.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Enter on 34th Street",
          text: "The observatory entrance is at 20 W 34th Street, not the Fifth Avenue lobby. The queue starts outside, so in winter dress for standing in it.",
        },
        {
          title: "Buy the 102nd floor only if you want it",
          text: "The upper deck is glassed in and feels like a room with a view, not a terrace. If the forecast is murky you are paying for height rather than atmosphere.",
        },
        {
          title: "Use the Express Pass at the right hour",
          text: "It skips the main queue, not security. At midday on a weekend it earns its money; at 09:00 or after 20:00 the ordinary queue is short enough.",
        },
        {
          title: "Leave the tripod behind",
          text: "Security is airport-style: no tripods, no glass, and large bags are searched or refused. A phone and a small camera are fine.",
        },
      ],
      tipsImage: "fifth-avenue-cab.webp",
      tipsImageAlt: "A yellow taxi on Fifth Avenue below the Empire State Building",
      nearby: [
        {
          href: "top-of-the-rock.html",
          image: "skyline-window-view.webp",
          alt: "The Empire State Building seen through a high window at Top of the Rock",
          kicker: "Observation deck",
          title: "Top of the Rock",
          text: "The deck that puts the Empire State in your photographs. Book a late-afternoon slot for the best light.",
          meta: "From $42",
        },
        {
          href: "edge.html",
          image: "edge-hudson-yards.webp",
          alt: "Edge observation deck at Hudson Yards with the city beyond",
          kicker: "Observation deck",
          title: "Edge at Hudson Yards",
          text: "A cantilevered outdoor deck with a glass floor on the West Side, best at golden hour.",
          meta: "Around $44–69",
        },
        {
          href: "attractions.html",
          image: "manhattan-skyline.webp",
          alt: "Lower Manhattan skyline seen from the Brooklyn Bridge",
          kicker: "Plan",
          title: "All New York attractions",
          text: "The full shortlist with prices, booking order and the free alternatives worth knowing.",
          meta: "Prices checked November 2026",
        },
      ],
      source: "empire-state-building",
      faqTitle: "Empire State Building questions",
      faq: faqItems,
      prev: { href: "attractions.html", label: "All attractions" },
      next: { href: "top-of-the-rock.html", label: "Top of the Rock" },
    }),
};
