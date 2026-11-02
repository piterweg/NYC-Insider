import { renderNeighbourhoodPage } from "../neighbourhood-template.mjs";

const faq = [
  {
    q: "Is SoHo worth visiting?",
    a: "<p>Yes, if you like architecture or shopping — ideally both. The cast-iron facades on Greene, Prince and Broome are the reason to come, and the district is compact enough to cover properly in half a day.</p>",
  },
  {
    q: "When is SoHo quietest?",
    a: "<p>Weekday mornings are calmest. Saturday and Sunday afternoons are the busiest, when the shops draw a crowd and the pavements between them fill up.</p>",
  },
  {
    q: "What is SoHo known for?",
    a: "<p>Cast-iron architecture, cobblestone streets, converted warehouses and global retail. It is also one of the best areas in Manhattan for a slow architectural walk.</p>",
  },
  {
    q: "Can I walk from SoHo to the West Village?",
    a: "<p>Yes. It is a 15 to 20 minute walk west, and the two neighbourhoods pair naturally for a single afternoon. See the <a href=\"west-village.html\">West Village guide</a>.</p>",
  },
];

export default {
  path: "soho.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "SoHo: Cast Iron, Cobblestones and Shopping",
  description:
    "A local guide to SoHo, Manhattan: the cast-iron streets worth walking, where to eat between shops, a half-day plan and how to get there by subway.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/soho-street-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "SoHo: Cast Iron, Cobblestones and Shopping",
      description:
        "A walkable guide to SoHo in Manhattan, covering the cast-iron streets, where to eat, a half-day plan and subway access.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a.replace(/<[^>]+>/g, "") },
      })),
    },
  ],
  render: () =>
    renderNeighbourhoodPage({
      heroImage: "soho-street-night.webp",
      heroAlt: "A SoHo street at night with lit shopfronts",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "neighbourhoods.html", label: "Neighbourhoods" },
        { href: "soho.html", label: "SoHo" },
      ],
      eyebrowText: "Manhattan · SoHo",
      h1: "SoHo, on foot and without a shopping list",
      lead: "SoHo is the city's best lesson in cast-iron architecture and its most concentrated shopping district. It is also small enough to walk in half a day, provided you look up rather than at the windows.",
      heroMeta: ["Manhattan", "Half a day", "N/R/W · C/E", "Busiest at weekends"],
      facts: [
        { label: "Borough", value: "Manhattan" },
        { label: "Subway", value: "Prince St (N/R/W); Spring St (C/E)" },
        { label: "Best for", value: "Cast-iron architecture and shopping" },
        { label: "Time needed", value: "3–4 hours" },
        { label: "When busiest", value: "Weekend afternoons" },
      ],
      mapId: "soho",
      areaName: "SoHo",
      introImage: "fifth-avenue-cab.webp",
      introImageAlt: "A yellow taxi on a Manhattan avenue near SoHo's shopping streets",
      introEyebrow: "First impressions",
      introTitle: "Cast iron, cobblestones and the art of looking up",
      introLead:
        "SoHo — south of Houston Street — is a grid of about a dozen blocks, and almost every building on Greene, Prince and Broome wears a cast-iron facade made to imitate stone. That repetition, in different colours, is what makes the streets photogenic.",
      introParagraphs: [
        "Walk it as a loop rather than a shopping trip: start at Houston and Broadway, go east on Prince Street, turn south down Greene to Broome, then west toward Broadway again. That takes an hour if you are quick and a whole afternoon if you stop for coffee, which you should.",
        "The shops are the obvious draw, global brands fitted into the old warehouse spaces, but the quieter blocks toward the edges have the better streets. In the evening the crowds thin and the buildings are easier to see; it is also when the side-street restaurants fill up, so book if you want a table.",
      ],
      seeTitle: "The streets worth walking",
      seeLead: "SoHo is a dozen blocks; these four carry most of the character.",
      see: [
        {
          title: "Greene Street",
          text: "The best single street for cast-iron facades. Walk it between Houston and Canal and keep looking up at the upper floors.",
        },
        {
          title: "Prince Street",
          text: "The spine of SoHo shopping, with the pizza queue and the cobblestones that photograph best after rain.",
        },
        {
          title: "Broome Street",
          text: "Quieter than Prince with the same architecture, and better odds of an empty pavement on a Saturday.",
        },
        {
          title: "Wooster Street",
          text: "Galleries, antiques and the blocks that still feel most like the old warehouse district.",
        },
      ],
      eatTitle: "Eating in and around SoHo",
      eatLead: "The food is better on the side streets than on Broadway. Prices are a guide; they change.",
      eatRows: [
        ["<strong>Prince Street Pizza</strong>", "Pepperoni square", "~$5.50"],
        ["<strong>Balthazar</strong>", "French bistro classics, brunch or dinner", "sit-down prices"],
        ["SoHo cafés", "Coffee and a pastry between shops", "~$4–8"],
        ["Street carts on Broadway", "A cheap lunch while you walk", "$12–18"],
      ],
      planTitle: "A half-day in SoHo",
      planLead: "An easy loop that starts early, ends with dinner and never walks the same street twice.",
      planStops: [
        { time: "09:30", title: "Coffee on the west side", text: "Start near Broadway before the shops open, when the streets are still quiet and the delivery vans have not arrived." },
        { time: "10:30", title: "Prince Street to Greene Street", text: "Walk east and look up at the cast-iron facades, then turn south and loop the side streets toward Broome." },
        { time: "12:30", title: "Lunch", text: "A slice at Prince Street Pizza or a proper sit-down lunch at Balthazar. Avoid noon at the weekend." },
        { time: "14:00", title: "Galleries and side streets", text: "The western blocks around Wooster are the calmest; the galleries there are small and usually free." },
        { time: "17:00", title: "Stay for the evening", text: "The shopping crowd leaves, the light improves and the restaurants start setting up. Walk west to the Village or stay for dinner." },
      ],
      transit:
        "<p>Two stations do most of the work: <strong>Prince Street</strong> (N/R/W) puts you in the middle of the shopping, and <strong>Spring Street</strong> (C/E) is two blocks west. From Midtown, take the N/R/W or the E; from Brooklyn, the F or the R. The neighbourhood is flat and small, so once you are here you will walk.</p>",
      bestTime:
        "<p>Weekday mornings are the calmest. Saturday and Sunday afternoons are the busiest, when the pavements are narrow and the shops draw a crowd. Go before 10am on a Sunday for empty streets, or on a weekday if you actually want to shop.</p>",
      tips: [
        { icon: "◷", title: "Look up, not in the windows", text: "The shops are interchangeable; the buildings are not. The upper floors are the reason SoHo is worth a detour." },
        { icon: "◆", title: "Walk in a loop, not a line", text: "Broadway and Prince are the busiest axes. Turn onto Greene, Wooster or Broome and the crowd thins immediately." },
        { icon: "☂", title: "After rain is the best light", text: "The cobblestones reflect the shop lights and the cast iron darkens. It is the most photogenic half-hour in the area." },
      ],
      nearbyTitle: "Nearby and worth your time",
      nearbyLead: "SoHo sits between the Village and the Lower East Side, so it is easy to continue on foot.",
      nearby: [
        {
          href: "west-village.html",
          image: "fifth-avenue-cab.webp",
          alt: "A yellow taxi on a Manhattan avenue",
          kicker: "Manhattan",
          title: "West Village",
          text: "Fifteen minutes west: brownstones, jazz and much quieter streets.",
          meta: "Neighbourhood",
        },
        {
          href: "manhattan.html",
          image: "manhattan-skyline-night.webp",
          alt: "Lower Manhattan and the Brooklyn Bridge lit at night",
          kicker: "Borough",
          title: "Manhattan",
          text: "The full guide to the island, from Midtown to Museum Mile.",
          meta: "Borough guide",
        },
        {
          href: "neighbourhoods.html",
          image: "skyline-window-view.webp",
          alt: "The Manhattan skyline seen through a tall window",
          kicker: "All guides",
          title: "All neighbourhoods",
          text: "The other seven areas worth a morning, and how to choose between them.",
          meta: "Hub",
        },
      ],
      source: "soho",
      faqTitle: "SoHo questions",
      faq,
      prev: { href: "neighbourhoods.html", label: "All neighbourhoods" },
      next: { href: "west-village.html", label: "West Village" },
    }),
};
