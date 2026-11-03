import { renderComparisonPage } from "../comparison-template.mjs";

const faqItems = [
  {
    q: "Which is the best observation deck in New York?",
    a: "<p>For most first trips, Top of the Rock: from $42 it puts the Empire State in the frame and shows Central Park on axis. Choose the Empire State (from $46) for open air, One World Observatory ($51) for the harbour, or Edge and SUMMIT for glass floors and interiors.</p>",
  },
  {
    q: "Which deck has the best view of the Empire State Building?",
    a: "<p>Top of the Rock. The south side of the 70th-floor deck looks directly at the Empire State Building, close enough to fill a phone frame. No other observation deck includes it in the skyline.</p>",
  },
  {
    q: "Which observation deck is cheapest?",
    a: "<p>Top of the Rock is cheapest at from $42, with the Empire State's 86th floor from $46. Edge and SUMMIT overlap that range and One World Observatory is from $51. Prices are dynamic, so compare your exact date.</p>",
  },
  {
    q: "Which deck is least crowded?",
    a: "<p>The first slot after opening or the last hour before closing; sunset is the busiest time at every deck. The Empire State is calmest in the first 30 minutes after opening or after 20:00.</p>",
  },
  {
    q: "Do I need to book observation decks in advance?",
    a: "<p>Yes. All five use timed entry and sunset slots sell out first. Book direct and arrive at the start of your window.</p>",
  },
];

export default {
  path: "best-observation-deck-nyc.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Best Observation Deck in NYC — 5 Decks Compared",
  description:
    "The best observation deck in New York for your trip: Empire State Building, Top of the Rock, Edge, SUMMIT and One World Observatory compared on views, prices and timing.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Best Observation Deck in NYC — 5 Decks Compared",
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
      heroImage: "manhattan-skyline-night.webp",
      heroAlt: "Manhattan's skyline glowing at night across the East River",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "best-observation-deck-nyc.html", label: "Best observation deck" },
      ],
      eyebrowText: "Observation decks",
      h1: "The best observation deck in New York",
      lead: "Five decks, five different versions of the same city, and headline prices within about $10 of each other. Here is which one to choose for the trip you are actually taking.",
      heroMeta: ["5 decks compared", "From $42 to $51", "Open daily", "Prices checked November 2026"],
      verdictTitle: "The short answer",
      verdict:
        "For most first trips the best single deck is Top of the Rock (from $42): it puts the Empire State in the frame and gives you Central Park on axis. Choose the Empire State Building (from $46) for the open-air terrace, One World Observatory ($51) for the harbour, Edge (around $44–69) for the glass floor, or SUMMIT (around $44–62) for the most photogenic interior.",
      facts: [
        { label: "Best first deck", value: "Top of the Rock — from $42, Empire State in frame" },
        { label: "Open air", value: "Empire State Building 86th floor — from $46" },
        { label: "Harbour view", value: "One World Observatory — from $51" },
        { label: "Most photogenic", value: "SUMMIT One Vanderbilt — around $44–62" },
        { label: "Book", value: "One deck is enough; sunset slots sell out first" },
      ],
      flip: true,
      introEyebrow: "The five decks",
      introTitle: "Five decks, five different cities",
      introLead:
        "All five are good. What changes is the angle, the building you are standing on and what ends up in your photographs.",
      introParagraphs: [
        "Top of the Rock and the Empire State face each other across Midtown. From Rockefeller Center you see the Empire State; from the Empire State you see everything except itself, from an open-air terrace. Edge sits west at Hudson Yards with a glass floor, SUMMIT turns the trip into a mirrored art installation above Grand Central, and One World Observatory looks south over the harbour and the Statue of Liberty.",
        "Height is not the deciding factor. The tallest deck is not automatically the best view, because the tallest building is usually the one you cannot see. Decide what you want in the frame, then book the deck that provides it — and book one, not three.",
      ],
      introImage: "skyline-window-view.webp",
      introImageAlt: "Midtown Manhattan and the Empire State Building seen through a high window",
      tableTitle: "The five decks compared",
      tableLead:
        "Prices are adult “from” rates checked in November 2026. Edge and SUMMIT are date-priced bands; the others rise at sunset and on peak dates.",
      tableCaption: "Comparison of New York City observation decks: views, prices, timing and which trip each suits",
      tableHead: ["Deck", "What you see", "Price from", "Best time", "Choose it if"],
      tableRows: [
        [
          "<strong>Empire State Building</strong>",
          "Midtown, Central Park and both rivers — not the Empire State itself",
          "from $46",
          "First hour after opening, or after 20:00",
          "You want the open-air terrace",
        ],
        [
          "<strong>Top of the Rock</strong>",
          "The Empire State in the frame, the park on axis and both rivers",
          "from $42",
          "08:00 opening, or 22:00–23:00",
          "You want the best all-round photograph",
        ],
        [
          "<strong>Edge</strong>",
          "Hudson Yards, the High Line and the West Side, with a glass floor below",
          "around $44–69",
          "09:00 opening, or after 21:00",
          "You want a glass floor and an outdoor cantilever",
        ],
        [
          "<strong>SUMMIT One Vanderbilt</strong>",
          "Midtown, the Chrysler Building and mirrored rooms",
          "around $44–62",
          "First slot, or after 19:30",
          "You want the most photogenic interior",
        ],
        [
          "<strong>One World Observatory</strong>",
          "Lower Manhattan, the harbour, the bridges and the Statue of Liberty",
          "from $51",
          "09:00–10:00, or after 19:00",
          "Your trip is centred on Lower Manhattan",
        ],
      ],
      chooseTitle: "Choose by the trip, not the deck",
      chooseLead: "Each of these is the right answer for a different itinerary.",
      choices: [
        {
          kicker: "Best first deck",
          title: "One ticket, first trip",
          text: "Take Top of the Rock from $42. You get the skyline photograph everyone recognises, Central Park running north and both rivers at the edges. Book a late-afternoon slot into dusk, and accept that sunset is the busiest hour.",
        },
        {
          kicker: "Lower Manhattan",
          title: "Harbour, bridges and the Statue",
          text: "One World Observatory, from $51, is the deck for the harbour and the Statue of Liberty. Pair it with the 9/11 Memorial &amp; Museum, a short walk away. Go in the morning for the clearest light.",
        },
        {
          kicker: "Photographers",
          title: "Glass floors and mirror rooms",
          text: "Edge and SUMMIT are the two most photogenic decks. Choose Edge for the outdoor cantilever and glass floor over Hudson Yards, SUMMIT for the mirrored installations above Grand Central. Both are date-priced, so check your day.",
        },
      ],
      moneyTitle: "What the five decks cost and how to book",
      moneyText:
        "Prices are dynamic. Adult admission runs from $42 at Top of the Rock to $51 at One World Observatory, with Edge around $44–69 and SUMMIT around $44–62. Sunset slots and holiday dates sit at the top of those ranges. The 102nd floor, The Beam and SKYLIFT, and SUMMIT's glass elevator are paid extras.",
      bookingText:
        "Book direct with each operator, not through resellers. Every deck uses timed entry and sunset slots go first. A CityPASS covers the Empire State's 86th floor, Top of the Rock and Edge among its ten options — if you already plan two decks, the pass can be cheaper; test that on our <a href=\"passes.html\">pass comparison</a>.",
      official: {
        url: "https://www.rockefellercenter.com/attractions/top-of-the-rock-observation-deck/",
        label: "Top of the Rock — official tickets",
      },
      tips: [
        {
          icon: "★",
          title: "Book one deck, not three",
          text: "The most common first-trip mistake is paying for three skyline views. Pick the frame you want and spend the difference on a better meal or a second show.",
        },
        {
          icon: "☂",
          title: "Weather matters more than the deck",
          text: "Haze flattens the view from any height. If the forecast is murky, move the deck to your clearest day rather than paying for a grey rectangle.",
        },
        {
          icon: "◷",
          title: "Opening and closing are the calm hours",
          text: "The first slot and the last hour are the quietest at every deck. Sunset is the crush — book it days ahead if that is the light you want.",
        },
      ],
      relatedTitle: "The full guides",
      relatedLead: "Tickets, timing and entrances for the decks worth your time.",
      related: [
        {
          href: "empire-state-building.html",
          image: "esb-exterior.webp",
          alt: "The Empire State Building rising above Midtown Manhattan",
          kicker: "Observation deck",
          title: "Empire State Building",
          text: "The open-air 86th floor, the 102nd-floor add-on and the right entrance.",
          meta: "From $46",
        },
        {
          href: "top-of-the-rock.html",
          image: "skyline-window-view.webp",
          alt: "Midtown Manhattan seen through a high window at Top of the Rock",
          kicker: "Observation deck",
          title: "Top of the Rock",
          text: "Three levels, The Beam and SKYLIFT, and the quietest hours.",
          meta: "From $42",
        },
        {
          href: "one-world-observatory.html",
          image: "one-wtc.webp",
          alt: "One World Trade Center rising above Lower Manhattan",
          kicker: "Observation deck",
          title: "One World Observatory",
          text: "The harbour view, security times and how to pair it with the 9/11 Museum.",
          meta: "From $51",
        },
      ],
      source: "best-observation-deck",
      faqTitle: "Observation deck questions",
      faq: faqItems,
      prev: { href: "attractions.html", label: "Things to do" },
      next: { href: "empire-state-building-vs-top-of-the-rock.html", label: "Empire State vs Top of the Rock" },
    }),
};
