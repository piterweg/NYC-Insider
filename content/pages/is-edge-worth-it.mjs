import { renderComparisonPage } from "../comparison-template.mjs";

const faqItems = [
  {
    q: "Is Edge worth it in New York?",
    a: "<p>Yes, if you want the outdoor cantilever and the glass floor — a combination no other deck offers — and you are happy paying around $44–69 for a 1–1.5 hour visit. No, if the photograph you want includes the Empire State or Central Park: Top of the Rock (from $42) and the Empire State (from $46) frame those better.</p>",
  },
  {
    q: "How high is Edge?",
    a: "<p>Edge sits on the 100th floor of 30 Hudson Yards, 345 m (1,131 ft) above the street on Manhattan's West Side. The ticket covers the indoor section, the outdoor deck and the glass floor panel.</p>",
  },
  {
    q: "Is City Climb included in the Edge ticket?",
    a: "<p>No. City Climb, the guided walk on the outside of the building, is a separate product from around $185 and needs its own booking. The standard Edge ticket covers the indoor and outdoor decks and the glass floor.</p>",
  },
  {
    q: "How long does a visit to Edge take?",
    a: "<p>Plan 1–1.5 hours. The deck is compact compared with the Empire State or Top of the Rock. The 09:00 opening is quietest; after 21:00 the skyline is at its best and the deck has usually thinned out.</p>",
  },
  {
    q: "Does CityPASS or Go City cover Edge?",
    a: "<p>Edge is one of the ten CityPASS options and appears in several Go City products, but reservations are required at most sites. Compare the maths on our <a href=\"passes.html\">pass comparison</a> before buying a pass you may not use.</p>",
  },
];

export default {
  path: "is-edge-worth-it.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Is Edge Worth It? Honest Verdict and Alternatives",
  description:
    "Is Edge at Hudson Yards worth it? A straight verdict on the glass floor, the outdoor deck and the $44–69 ticket, plus how it compares with four other decks.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/edge-hudson-yards.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Is Edge Worth It? Honest Verdict and Alternatives",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () =>
    renderComparisonPage({
      heroImage: "edge-hudson-yards.webp",
      heroAlt: "Edge observation deck at Hudson Yards with the Manhattan skyline beyond",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "is-edge-worth-it.html", label: "Is Edge worth it?" },
      ],
      eyebrowText: "Observation deck verdict",
      h1: "Is Edge worth it?",
      lead: "Edge sells one thing better than any other New York deck: the feeling of standing outside a hundred floors up, with a glass floor under your feet. Whether that is worth the ticket depends on what you want from a skyline view.",
      heroMeta: ["Around $44–69", "100th floor · 345 m", "Hudson Yards", "Prices checked November 2026"],
      verdictTitle: "The short answer",
      verdict:
        "Edge is worth it if you want the outdoor cantilever and the glass floor — a combination no other deck offers — and you are happy paying around $44–69 for a 1–1.5 hour visit. It is not worth it if you want the classic Empire State or Central Park view: Top of the Rock (from $42) and the Empire State (from $46) do those better for less.",
      facts: [
        { label: "Price", value: "Around $44–69 adult, depending on date and time" },
        { label: "Height", value: "345 m (1,131 ft) — 100th floor of 30 Hudson Yards" },
        { label: "Location", value: "Hudson Yards, West Side; 34 St–Hudson Yards (7)" },
        { label: "Time needed", value: "1–1.5 hours" },
        { label: "Best time", value: "09:00 opening, or after 21:00 for the night skyline" },
      ],
      introEyebrow: "What Edge actually is",
      introTitle: "The deck that puts you outside",
      introLead:
        "Edge is a triangular platform extending from the 100th floor of 30 Hudson Yards, on Manhattan's West Side. Part of it is indoors behind glass; the part that matters is outside, in the weather.",
      introParagraphs: [
        "The outdoor deck has a glass floor panel in the middle and a low barrier at the edge, so the view is not just the skyline but the drop below it: the Hudson, the New Jersey shoreline, the High Line, the rail yards and the long run of Lower Manhattan down to the harbour. It is a side of the city the Midtown decks cannot show you.",
        "It is also a compact visit. The deck is smaller than the Empire State or Top of the Rock, so 1–1.5 hours covers it comfortably. Take the 7 train to 34 St–Hudson Yards; an escalator from the station brings you to the entrance.",
      ],
      introImage: "skyline-window-view.webp",
      introImageAlt: "The Manhattan skyline seen through a high window",
      tableTitle: "How Edge compares with the other decks",
      tableLead:
        "Prices are adult “from” rates checked in November 2026, and they rise at weekends, on holidays and for sunset slots.",
      tableCaption: "Comparison of Edge at Hudson Yards with four other New York observation decks",
      tableHead: ["Deck", "Price from", "What you see", "Quietest", "Best for"],
      tableRows: [
        [
          "<strong>Edge</strong>",
          "around $44–69",
          "Hudson Yards, the High Line, the Hudson and Lower Manhattan",
          "09:00, or after 21:00",
          "The outdoor cantilever and glass floor",
        ],
        [
          "<strong>Empire State Building</strong>",
          "from $46",
          "Midtown, Central Park and both rivers — not the Empire State itself",
          "First 30 minutes, or after 20:00",
          "The open-air terrace on the building",
        ],
        [
          "<strong>Top of the Rock</strong>",
          "from $42",
          "The Empire State in the frame and the park on axis",
          "08:00, or 22:00–23:00",
          "The classic skyline photograph",
        ],
        [
          "<strong>SUMMIT One Vanderbilt</strong>",
          "around $44–62",
          "Midtown, the Chrysler Building and mirrored rooms",
          "First slot, or after 19:30",
          "The most photogenic interior",
        ],
        [
          "<strong>One World Observatory</strong>",
          "from $51",
          "Lower Manhattan, the harbour and the Statue of Liberty",
          "09:00–10:00, or after 19:00",
          "Lower Manhattan and the harbour",
        ],
      ],
      chooseTitle: "Choose Edge, or choose something else",
      chooseLead: "Two honest cases, plus the one where Edge is the obvious extra.",
      choices: [
        {
          kicker: "Choose Edge",
          title: "You want to stand outside",
          text: "The cantilever and the glass floor are the reason to pay. Book 09:00 if you want space, or after 21:00 for the lit skyline. Allow 1–1.5 hours.",
        },
        {
          kicker: "Skip Edge",
          title: "You want the postcard view",
          text: "If the photograph you have in mind includes the Empire State Building or Central Park, Top of the Rock (from $42) frames it better and costs less. For the open-air classic, the Empire State Building's 86th floor is from $46.",
        },
        {
          kicker: "Add it on",
          title: "You are already at Hudson Yards",
          text: "Edge pairs naturally with the High Line and Hudson Yards: walk the park to 30th Street, ride up, then walk back through Chelsea. It fits a West Side afternoon rather than a dedicated trip.",
        },
      ],
      moneyTitle: "What Edge costs and how to book",
      moneyText:
        "Edge is date-priced. Expect around $44–69 for general admission, with weekday mornings at the bottom and weekend or sunset slots at the top. The standard ticket covers the indoor and outdoor decks and the glass floor; City Climb is a separate product from around $185.",
      bookingText:
        "Book direct with Edge at edgenyc.com — resale markup on this deck is common, and the official calendar is the only place to see the real price for your date. Timed entry is standard. Edge is also one of the ten CityPASS options, so if you are already buying a pass, price that against a single ticket on our <a href=\"passes.html\">passes comparison</a>.",
      official: {
        url: "https://www.edgenyc.com/",
        label: "Edge — official tickets",
      },
      tips: [
        {
          icon: "◆",
          title: "City Climb is not the deck",
          text: "It is a separate guided walk on the outside of the tower, from around $185, and needs its own booking. If you want the deck, buy the deck.",
        },
        {
          icon: "◷",
          title: "Go late for the light",
          text: "After 21:00 the deck is quieter and the skyline is at its best. The glass floor photographs well at night, when the streets below are lit.",
        },
        {
          icon: "☂",
          title: "Dress for the weather",
          text: "The outdoor platform is exposed. Wind and rain make it uncomfortable, and the deck is more memorable when you are not holding your coat closed.",
        },
      ],
      relatedTitle: "Keep planning",
      relatedLead: "The full Edge guide, the deck comparison and the obvious alternative.",
      related: [
        {
          href: "edge.html",
          image: "edge-hudson-yards.webp",
          alt: "Edge observation deck at Hudson Yards with the city beyond",
          kicker: "Observation deck",
          title: "Edge at Hudson Yards",
          text: "The full guide: tickets, City Climb, hours and how to get there.",
          meta: "Around $44–69",
        },
        {
          href: "best-observation-deck-nyc.html",
          image: "manhattan-skyline-night.webp",
          alt: "Manhattan's skyline glowing at night",
          kicker: "Comparison",
          title: "Best observation deck in NYC",
          text: "All five decks compared, with a verdict for each kind of trip.",
          meta: "5 decks compared",
        },
        {
          href: "top-of-the-rock.html",
          image: "skyline-window-view.webp",
          alt: "Midtown Manhattan seen through a high window at Top of the Rock",
          kicker: "Observation deck",
          title: "Top of the Rock",
          text: "The deck that frames the Empire State Building. The photograph Edge cannot take.",
          meta: "From $42",
        },
      ],
      source: "is-edge-worth-it",
      faqTitle: "Edge questions",
      faq: faqItems,
      prev: { href: "edge.html", label: "Edge at Hudson Yards" },
      next: { href: "best-observation-deck-nyc.html", label: "Best observation deck" },
    }),
};
