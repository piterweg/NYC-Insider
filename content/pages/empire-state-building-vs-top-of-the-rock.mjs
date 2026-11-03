import { renderComparisonPage } from "../comparison-template.mjs";

const faqItems = [
  {
    q: "Empire State Building or Top of the Rock — which is better?",
    a: "<p>They answer different questions. Top of the Rock puts the Empire State in your photograph; the Empire State gives you everything except the building itself, from an open-air terrace.</p>",
  },
  {
    q: "How much do the two decks cost?",
    a: "<p>Top of the Rock timed admission is from $42, and the Empire State's 86th floor is from $46, with peak dates around $57. Prices are dynamic, so sunset slots and weekends cost more.</p>",
  },
  {
    q: "Can I visit both decks in one day?",
    a: "<p>You can, but it is a long day. If you want both, do the Empire State in the morning and Top of the Rock in the late afternoon so the light changes between visits. Allow two hours at each.</p>",
  },
  {
    q: "Where is the Empire State Building in the Top of the Rock view?",
    a: "<p>Directly south. The 70th-floor deck looks down Fifth Avenue towards the Empire State, which is why the south side is the most crowded part of the roof at dusk.</p>",
  },
  {
    q: "Does CityPASS cover both decks?",
    a: "<p>Yes. The Empire State's 86th floor and Top of the Rock are both among the ten CityPASS options. Reservations are required at most sites — see our <a href=\"is-citypass-worth-it.html\">CityPASS guide</a> for the break-even maths.</p>",
  },
];

export default {
  path: "empire-state-building-vs-top-of-the-rock.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Empire State Building vs Top of the Rock",
  description:
    "Empire State Building or Top of the Rock? A direct comparison of view, queues, ticket prices and the best time to go, with a clear verdict for each kind of trip.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Empire State Building vs Top of the Rock",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
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
    renderComparisonPage({
      heroImage: "skyline-window-view.webp",
      heroAlt: "The Empire State Building and Midtown Manhattan seen through a high window",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "empire-state-building-vs-top-of-the-rock.html", label: "Empire State vs Top of the Rock" },
      ],
      eyebrowText: "Observation deck comparison",
      h1: "Empire State Building or Top of the Rock?",
      lead: "Two Midtown decks, one skyline, and a decision that comes down to what you want in the frame. Here is how they compare on view, cost, queues and the best time to go.",
      heroMeta: ["From $46 vs from $42", "86th floor vs floors 67–70", "Both open daily", "Prices checked November 2026"],
      verdictTitle: "The short answer",
      verdict:
        "Choose Top of the Rock (from $42) if you want the Empire State Building in your photograph and the park on axis. Choose the Empire State Building (from $46) if you want the open-air terrace and the experience of standing on the building itself. For most first trips, Top of the Rock is the more complete picture; the Empire State is the more memorable place to be.",
      facts: [
        { label: "Top of the Rock", value: "Timed admission from $42; peak around $60" },
        { label: "Empire State", value: "86th floor from $46; peak around $57; 102nd floor is a paid add-on" },
        { label: "The view", value: "Top of the Rock includes the Empire State; the Empire State does not include itself" },
        { label: "Best time", value: "First hour after opening, or late evening at either deck" },
        { label: "Time needed", value: "Top of the Rock 1.5–2 hours; Empire State 1.5–2.5 hours, plus 45–60 minutes for 102" },
      ],
      introEyebrow: "What is being compared",
      introTitle: "The same skyline from opposite directions",
      introLead:
        "Both decks sit within a 20-minute walk of each other in Midtown and charge similar prices. What separates them is the angle.",
      introParagraphs: [
        "The 86th floor is an open-air terrace that circles the building, with Manhattan's grid laid out from the Hudson to the East River. The 102nd floor is a separate, glassed-in room reached by a second lift; it costs extra and adds 45–60 minutes.",
        "Top of the Rock spreads across floors 67, 69 and 70 at Rockefeller Center. The top deck looks south directly at the Empire State Building, close enough to fill a phone frame. It is the view most New York skyline photographs are actually taken from.",
      ],
      introImage: "manhattan-skyline-night.webp",
      introImageAlt: "Lower Manhattan and the Brooklyn Bridge lit up at night across the water",
      tableTitle: "View, cost and timing, side by side",
      tableLead:
        "Prices are adult “from” rates checked in November 2026 and rise at weekends, on holidays and for sunset slots.",
      tableCaption: "Comparison of the Empire State Building and Top of the Rock observation decks",
      tableHead: ["", "Empire State Building", "Top of the Rock"],
      tableRows: [
        [
          "<strong>Price from</strong>",
          "From $46 on the 86th floor; peak around $57",
          "From $42 timed admission; peak around $60",
        ],
        [
          "<strong>What you see</strong>",
          "Midtown, Central Park and both rivers — not the Empire State itself",
          "The Empire State Building in the frame, Central Park and both rivers",
        ],
        [
          "<strong>The deck</strong>",
          "Open-air terrace on 86; glassed-in 102nd floor add-on",
          "Indoor and outdoor levels on 67, 69 and 70",
        ],
        [
          "<strong>Best time</strong>",
          "First hour after opening, or after 20:00",
          "08:00 opening, or after 22:00",
        ],
        [
          "<strong>Time needed</strong>",
          "1.5–2.5 hours; add 45–60 minutes for the 102nd",
          "1.5–2 hours across the three levels",
        ],
        [
          "<strong>Queues</strong>",
          "Airport-style security; calmest in the first 30 minutes or after 20:00",
          "Bag scan; calmest at 08:00 or 22:00–23:00",
        ],
        [
          "<strong>Choose it if</strong>",
          "You want open air and the building itself",
          "You want the classic photograph",
        ],
      ],
      chooseTitle: "Which one fits your trip",
      chooseLead: "The honest answer depends on what you would regret missing.",
      choices: [
        {
          kicker: "Choose the Empire State",
          title: "You want to be on the building",
          text: "The 86th-floor terrace is the most atmospheric deck in the city: wind, open air and the grid below. Book the first hour after opening or after 20:00, and skip the 102nd floor unless you want the extra height rather than the atmosphere.",
        },
        {
          kicker: "Choose Top of the Rock",
          title: "You want the photograph",
          text: "From $42, the top deck frames the Empire State exactly as you have seen it on a thousand postcards, with Central Park running north. A late-afternoon slot that carries you into dusk is the one to book — and the reason this deck fills first.",
        },
        {
          kicker: "Choose both",
          title: "You want both experiences",
          text: "If the budget allows two decks, do the Empire State in daylight and Top of the Rock at sunset on different days. It is the only way to see the skyline from both sides, and the two tickets cost roughly $88 at the gate before peak pricing.",
        },
      ],
      moneyTitle: "What each ticket costs — and how to book",
      moneyText:
        "Prices are dynamic: from $46 at the Empire State and from $42 at Top of the Rock on standard dates, with sunset slots and weekend dates higher. The 102nd floor, The Beam and SKYLIFT are paid extras rather than included upgrades.",
      bookingText:
        "Book direct with each operator. Both use timed entry and sunset slots sell out first. A CityPASS covers both decks among its ten options, but only makes sense with five attractions you genuinely want; run that maths on our <a href=\"passes.html\">pass comparison</a> first.",
      official: {
        url: "https://www.rockefellercenter.com/attractions/top-of-the-rock-observation-deck/",
        label: "Top of the Rock — official tickets",
      },
      tips: [
        {
          icon: "◷",
          title: "Sunset is a different ticket",
          text: "Every deck sells sunset at a premium and fills it first. If that is the light you want, book days ahead rather than deciding on the day.",
        },
        {
          icon: "◆",
          title: "The 102nd floor is not the same view",
          text: "It is higher but enclosed. The open air on 86 is the reason to choose this building; add the upper floor only if you have the time and the budget.",
        },
        {
          icon: "★",
          title: "Use the right entrance",
          text: "The Empire State observatory entrance is at 20 W 34th Street, not the Fifth Avenue lobby. At Rockefeller Center, enter through the concourse at 50th Street.",
        },
      ],
      relatedTitle: "Keep planning",
      relatedLead: "The full guides to both decks, plus the wider comparison.",
      related: [
        {
          href: "empire-state-building.html",
          image: "esb-exterior.webp",
          alt: "The Empire State Building rising above the streets of Midtown Manhattan",
          kicker: "Observation deck",
          title: "Empire State Building",
          text: "Tickets, the 86th and 102nd floors, security rules and the right 34th Street entrance.",
          meta: "From $46",
        },
        {
          href: "top-of-the-rock.html",
          image: "skyline-window-view.webp",
          alt: "Midtown Manhattan seen through a high window at Top of the Rock",
          kicker: "Observation deck",
          title: "Top of the Rock",
          text: "The three levels, The Beam and SKYLIFT add-ons, and the quietest hours.",
          meta: "From $42",
        },
        {
          href: "best-observation-deck-nyc.html",
          image: "manhattan-skyline-night.webp",
          alt: "The Manhattan skyline glowing at night",
          kicker: "Comparison",
          title: "Best observation deck in NYC",
          text: "All five decks compared, with a verdict for each kind of trip.",
          meta: "5 decks compared",
        },
      ],
      source: "esb-vs-top-of-the-rock",
      faqTitle: "Empire State vs Top of the Rock questions",
      faq: faqItems,
      prev: { href: "attractions.html", label: "Things to do" },
      next: { href: "best-observation-deck-nyc.html", label: "Best observation deck" },
    }),
};
