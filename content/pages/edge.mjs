import { renderAttractionPage } from "../attraction-template.mjs";

const faqItems = [
  {
    q: "How long should I allow at Edge?",
    a: "<p>Plan 1–1.5 hours. The deck is compact compared with the Empire State or Top of the Rock, so most people see it, photograph it and leave without feeling rushed.</p>",
  },
  {
    q: "Is City Climb included in the Edge ticket?",
    a: "<p>No. City Climb, the walk on the outside of the building, is a separate product from around $185 and needs its own booking. The standard ticket covers the indoor and outdoor decks and the glass floor.</p>",
  },
  {
    q: "Is the glass floor frightening?",
    a: "<p>It is a strange feeling rather than a scary one, and there is a solid floor beside it for anyone who would rather not. Staff keep the flow moving, so you will not be stuck standing on it.</p>",
  },
  {
    q: "When is the best time to visit Edge?",
    a: "<p>The 09:00 opening is the quietest. After 21:00 the skyline is at its best and the deck has thinned out, which makes it the stronger choice for photographs.</p>",
  },
  {
    q: "Does a sightseeing pass cover Edge?",
    a: "<p>Edge appears on CityPASS and on several Go City products, but reservations are required at most sites. Compare the maths on our <a href=\"passes.html\">passes page</a> before you commit.</p>",
  },
];

export default {
  path: "edge.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Edge at Hudson Yards: Tickets and Tips",
  description:
    "Edge at Hudson Yards: outdoor sky deck and glass floor on the 100th floor, tickets around $44–69, the quiet hours, City Climb and how to buy direct.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/edge-hudson-yards.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Edge at Hudson Yards",
      description:
        "Outdoor observation deck with a glass floor on the 100th floor of 30 Hudson Yards, on Manhattan's West Side.",
      url: "https://nyctrove.com/edge.html",
      image: "https://nyctrove.com/assets/img/edge-hudson-yards.webp",
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
        { href: "edge.html", label: "Edge at Hudson Yards" },
      ],
      heroImage: "edge-hudson-yards.webp",
      heroAlt: "Edge observation deck at Hudson Yards with the Manhattan skyline beyond",
      eyebrowText: "Observation deck",
      h1: "Edge at Hudson Yards",
      lead: "The newest of the big decks, and the only one where you can stand outside with nothing between you and the city. The glass floor is the gimmick; the West Side view is the reason to go.",
      heroMeta: ["100th floor", "Outdoor deck", "Around $44–69", "Hudson Yards"],
      facts: [
        { label: "Tickets", value: "Around $44–69, depending on date and time" },
        { label: "Hours", value: "Daily from around 09:00; closing varies by season — check the official site for current hours" },
        { label: "Time needed", value: "1–1.5 hours" },
        { label: "Best time", value: "09:00 opening, or after 21:00 for the night skyline" },
        { label: "Nearest subway", value: "34 St–Hudson Yards (7), with a direct escalator from the station" },
        { label: "Extra", value: "City Climb is a separate product from around $185" },
      ],
      introImage: "midtown-aerial-night.webp",
      introImageAlt: "Midtown Manhattan seen from above at night, with lit towers and avenues",
      mapId: "edge",
      introEyebrow: "The visit",
      introTitle: "A sky deck that puts you outside",
      introLead:
        "Most observation decks are glass boxes with a view. Edge is a platform that extends out from the 100th floor of 30 Hudson Yards, so you step into the air on the west side of Manhattan with the Hudson below you.",
      introParagraphs: [
        "The indoor section has the same view through floor-to-ceiling glass, plus the bar and the transition between the two. The outdoor deck is the point: a triangular platform with a glass floor panel in the middle and a low barrier at the edge. It is exposed, so check the wind before you dress for it.",
        "The view looks south and west. You get the Hudson, the New Jersey shoreline, the High Line and the rail yards below, and then the long run of Lower Manhattan down to the harbour. It is a side of the city the Midtown decks do not show you.",
      ],
      reasonsTitle: "Why choose Edge over the other decks",
      reasonsLead: "Each deck shows a different city. This one shows you the working west side.",
      reasons: [
        {
          title: "You are genuinely outside",
          text: "The platform is open to the weather, not sealed behind glass, which means photographs without reflections and a view that includes the sound of the street far below.",
        },
        {
          title: "The glass floor",
          text: "A panel in the deck lets you look straight down to the rail yards and streets a hundred floors below. It is the one thing here that no Midtown deck can match, and it is included in the standard ticket.",
        },
        {
          title: "A different skyline",
          text: "From the West Side you see the Hudson, New Jersey and the length of Lower Manhattan rather than the Empire State and Central Park. It is the best view in the city for the harbour and the bridges.",
        },
      ],
      bookingTitle: "Tickets, City Climb and getting there",
      bookingLead: "Two products are sold here, and only one of them is the observation deck.",
      bookingSteps: [
        "Book <strong>direct with Edge</strong>. Resale markup on this deck is common, and the official calendar is the only place to see the real date price.",
        "Choose a <strong>timed slot</strong>. General admission covers the indoor deck, the outdoor deck and the glass floor.",
        "Decide whether you also want <strong>City Climb</strong>, the walk on the outside of the building. It is around $185, a separate booking and not part of the standard ticket.",
        "Take the <strong>7 train to 34 St–Hudson Yards</strong>; a direct escalator from the station brings you up to the deck's entrance level.",
        "Allow <strong>1–1.5 hours</strong>. Bags are allowed but must be carried, and tripods are not permitted on the deck.",
      ],
      bookingNote:
        "The deck opens around 09:00 and closes around 23:00, with later hours on some Friday and Saturday nights in summer. Those times are seasonal, so check the official site for current hours before you build an evening around the view.",
      official: {
        title: "Edge — official tickets",
        text: "Edge sells general admission, City Climb and combination tickets on its own site. The price moves with the date and the time of day, and weekend and sunset slots cost more than a weekday morning.",
        url: "https://www.edgenyc.com/",
        cta: "Book on edgenyc.com",
        note: "Official seller. We take no commission on this link.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "City Climb is not the deck",
          text: "It is a separate guided walk on the outside of the tower, from around $185, and it needs its own booking. If you want the deck, buy the deck.",
        },
        {
          title: "Buy direct",
          text: "Edge is one of the decks where third-party resale prices run well above the official rate. Check edgenyc.com before you pay anyone else.",
        },
        {
          title: "Keep your hands free",
          text: "Bags are permitted but have to be carried, and tripods are not allowed outside. A wrist strap on your phone is a sensible idea on the open platform.",
        },
        {
          title: "Go late for the night view",
          text: "After 21:00 the deck is quieter and the skyline is at its best. The champagne bar on the deck is walk-in, so you can wait out the last of the daylight with a drink.",
        },
      ],
      tipsImage: "midtown-aerial-night.webp",
      tipsImageAlt: "Manhattan at night seen from a high vantage point, looking north over Midtown",
      nearby: [
        {
          href: "top-of-the-rock.html",
          image: "skyline-window-view.webp",
          alt: "The Empire State Building seen through a high window",
          kicker: "Observation deck",
          title: "Top of the Rock",
          text: "The Midtown view with the Empire State Building in it. The obvious second deck if you are collecting views.",
          meta: "From $42",
        },
        {
          href: "summit-one-vanderbilt.html",
          image: "summit-vanderbilt.webp",
          alt: "SUMMIT One Vanderbilt tower above Grand Central Terminal",
          kicker: "Observation deck",
          title: "SUMMIT One Vanderbilt",
          text: "Mirrors, glass and art above Grand Central. The most photogenic interior in the city.",
          meta: "Around $44–62",
        },
        {
          href: "attractions.html",
          image: "manhattan-skyline.webp",
          alt: "Lower Manhattan skyline seen from the Brooklyn Bridge",
          kicker: "Plan",
          title: "All New York attractions",
          text: "Every deck compared, with prices and the booking order that works.",
          meta: "Prices checked November 2026",
        },
      ],
      source: "edge",
      faqTitle: "Edge questions",
      faq: faqItems,
      prev: { href: "top-of-the-rock.html", label: "Top of the Rock" },
      next: { href: "summit-one-vanderbilt.html", label: "SUMMIT One Vanderbilt" },
    }),
};
