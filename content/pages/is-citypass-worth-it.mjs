import { renderComparisonPage } from "../comparison-template.mjs";

const faqItems = [
  {
    q: "Is CityPASS worth it in New York?",
    a: "<p>For most first trips that include two observation decks, yes. The Empire State, Top of the Rock, the ferry, AMNH and the 9/11 Museum total at least $165.50 at the gate against $151 with the fee. It is not worth it if your five average under about $30 each, or on a very short trip.</p>",
  },
  {
    q: "Does CityPASS include the Statue of Liberty?",
    a: "<p>Yes — the Statue of Liberty and Ellis Island ferry is one of the ten options, and choosing it uses one of your five entries. Book the ferry time as soon as you have the pass.</p>",
  },
  {
    q: "How long is CityPASS valid?",
    a: "<p>Nine days from first use. All five have to be visited inside that window — comfortable on a five- to seven-day trip, tight on a two-night break.</p>",
  },
  {
    q: "Can two people share one CityPASS?",
    a: "<p>No. CityPASS is sold per person: $149 adult and $129 for ages 6–17, each plus the $2 fee. Under-6 admission varies by attraction, so check the individual site.</p>",
  },
  {
    q: "What if I only want four attractions?",
    a: "<p>CityPASS is a fixed five-entry bundle, so with four sights you are paying for an entry you will not use. Buy individual tickets, or compare the Go City Explorer, which lets you choose two to ten.</p>",
  },
];

export default {
  path: "is-citypass-worth-it.html",
  navSection: "passes",
  bodyClass: "page-inner",
  title: "Is CityPASS Worth It? The Break-Even Maths",
  description:
    "Is CityPASS worth it in New York? We run the break-even maths at 2026 prices: $149 for five attractions, real gate prices, and the trips where the pass wins or loses.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Is CityPASS Worth It? The Break-Even Maths",
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
      heroAlt: "The Manhattan skyline seen through a high window",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "passes.html", label: "Passes" },
        { href: "is-citypass-worth-it.html", label: "Is CityPASS worth it?" },
      ],
      eyebrowText: "Passes and tickets",
      h1: "Is CityPASS worth it?",
      lead: "Five attractions for one price, valid nine days. The pass is simple; the question is whether your five would cost more at the gate. Here is the arithmetic with real 2026 prices.",
      heroMeta: ["$149 adult · $129 child", "5 attractions from 10", "Valid 9 days", "Prices checked November 2026"],
      verdictTitle: "The short answer",
      verdict:
        "CityPASS is worth it for most first trips that include two observation decks: the Empire State ($46), Top of the Rock ($42), the Statue ferry ($25.50), AMNH ($28) and the 9/11 Museum (from $24) come to at least $165.50 at the gate, against $149 plus a $2 fee. It stops making sense when your five average under about $30 each, or if you will not use all five entries inside nine days.",
      facts: [
        { label: "Price", value: "$149 adult / $129 child 6–17, plus a $2 fee" },
        { label: "What you get", value: "5 attractions chosen from a list of 10" },
        { label: "Validity", value: "9 days from first use; all five entries must be used" },
        { label: "Reservations", value: "Required at most sites — buy, then book a time" },
        { label: "Break-even", value: "Five attractions averaging more than about $30 each" },
      ],
      introEyebrow: "The break-even question",
      introTitle: "Five entries, one price",
      introLead:
        "CityPASS is the simplest pass in New York: pay once, choose five attractions from a list of ten, and use them within nine days.",
      introParagraphs: [
        "The list covers the Empire State's 86th floor, Top of the Rock, Edge, the American Museum of Natural History, the 9/11 Memorial &amp; Museum, the Statue of Liberty ferry, the Guggenheim, the Whitney, Circle Line and the Intrepid. The decks and the harbour ferry are the expensive entries; the museums are cheaper.",
        "That split decides the maths. Two decks, the ferry, AMNH at $28 and the 9/11 Museum from $24 come to at least $165.50 separately — at least $14.50 more than the pass with its fee. Swap the museums for cheaper included entries and the advantage thins; a list averaging under about $30 a sight is where the pass stops paying.",
      ],
      introImage: "manhattan-skyline.webp",
      introImageAlt: "Lower Manhattan and the Brooklyn Bridge seen from the waterfront",
      tableTitle: "Break-even by average gate price",
      tableLead:
        "The pass costs $149 for five entries plus a $2 fee — about $151, or just over $30 per sight. Gate prices below are adult “from” rates checked in November 2026; prices are dynamic, so treat these as examples.",
      tableCaption: "CityPASS break-even table by the average gate price of five attractions",
      tableHead: ["Average gate price of your five", "Gate total", "CityPASS total", "Result"],
      tableRows: [
        ["$25", "$125", "About $151", "Pass about $26 behind"],
        ["$28", "$140", "About $151", "Pass about $11 behind"],
        ["$30", "$150", "About $151", "Roughly level"],
        ["$35", "$175", "About $151", "Pass about $24 ahead"],
        ["$42", "$210", "About $151", "Pass about $59 ahead"],
      ],
      chooseTitle: "When the pass wins and when it loses",
      chooseLead: "Match the pass to the five you would actually pay for separately.",
      choices: [
        {
          kicker: "Worth it",
          title: "Two decks, the ferry, or the 9/11 Museum",
          text: "A first trip with the Empire State, Top of the Rock, the Statue ferry, AMNH and the 9/11 Museum totals at least $165.50 at the gate — at least $14.50 more than the pass with its fee. Five full-price sights is where CityPASS starts to earn its place.",
        },
        {
          kicker: "Skip it",
          title: "A museum-only or slow trip",
          text: "If the five would be the cheaper included entries, averaging under about $30 each, the gate total falls below the pass. The same applies if you cannot fit five entries into nine days, or prefer one museum done properly to five in a blur.",
        },
        {
          kicker: "Alternative",
          title: "A list that keeps changing",
          text: "If you are not sure which five you will visit, the Go City Explorer lets you pick two to ten attractions over 30 days after activation. It usually beats CityPASS once you pass five entries — compare both on our <a href=\"passes.html\">passes page</a>.",
        },
      ],
      moneyTitle: "The maths behind the pass",
      moneyText:
        "CityPASS costs $149 for five entries — about $29.80 per attraction before the $2 fee, and just over $30 with it. Any five sights averaging more than roughly $30 make the pass worthwhile; five below that do not. Our rough pass comparison uses a $45 average per paid attraction, but the first-trip list above averages about $33 a sight.",
      bookingText:
        "Buy on the official CityPASS site, then reserve each attraction — most sites require it and sunset deck slots go first. Validity starts at first use, not purchase, so activate it on the morning of your first attraction.",
      official: {
        url: "https://www.citypass.com",
        label: "CityPASS — official site",
      },
      tips: [
        {
          icon: "◆",
          title: "Spend your five on the expensive entries",
          text: "The two decks and the Statue ferry carry the value. Fill the remaining entries with the 9/11 Museum or a museum you would have paid for anyway.",
        },
        {
          icon: "◷",
          title: "Reserve all five at once",
          text: "A pass buys entry, not a time. Book the decks and the ferry in the same sitting as buying the pass, or you may not get the slots you want.",
        },
        {
          icon: "★",
          title: "Watch the nine-day clock",
          text: "Validity starts at first use. Five entries in nine days is comfortable on a normal trip and impossible on a two-night break — in that case, buy tickets individually.",
        },
      ],
      relatedTitle: "Keep reading",
      relatedLead: "The full pass comparison, the attraction prices and the deck shortlist.",
      related: [
        {
          href: "passes.html",
          image: "manhattan-skyline-night.webp",
          alt: "The Manhattan skyline above the East River at night",
          kicker: "Passes",
          title: "NYC passes compared",
          text: "CityPASS, Go City and New York Pass side by side, with a trip calculator.",
          meta: "5 passes compared",
        },
        {
          href: "attractions.html",
          image: "manhattan-skyline.webp",
          alt: "Lower Manhattan skyline seen from the Brooklyn Bridge",
          kicker: "Plan",
          title: "All New York attractions",
          text: "Current admission prices, booking order and the free alternatives.",
          meta: "Prices checked November 2026",
        },
        {
          href: "best-observation-deck-nyc.html",
          image: "skyline-window-view.webp",
          alt: "Midtown Manhattan seen through a high window",
          kicker: "Comparison",
          title: "Best observation deck in NYC",
          text: "Which of the five decks to spend your CityPASS entries on.",
          meta: "5 decks compared",
        },
      ],
      source: "is-citypass-worth-it",
      faqTitle: "CityPASS questions",
      faq: faqItems,
      prev: { href: "passes.html", label: "Compare passes" },
      next: { href: "best-observation-deck-nyc.html", label: "Best observation deck" },
    }),
};
