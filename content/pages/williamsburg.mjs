import { renderNeighbourhoodPage } from "../neighbourhood-template.mjs";

const faq = [
  {
    q: "Is Williamsburg worth visiting on a short trip?",
    a: "<p>Yes, if you want the Brooklyn waterfront and a sense of how young New York lives. Combine it with DUMBO or a bridge walk rather than making it the only Brooklyn stop.</p>",
  },
  {
    q: "How do I get to Williamsburg?",
    a: "<p>The L train to Bedford Avenue is the classic route, about 10 minutes from Union Square. The J/M/Z stop at Marcy Avenue, and the NYC Ferry connects the Williamsburg waterfront to Manhattan.</p>",
  },
  {
    q: "When is Williamsburg busiest?",
    a: "<p>Saturday afternoons and evenings are the busiest, especially when the waterfront market is running. Weekday mornings are much calmer and better for walking.</p>",
  },
  {
    q: "Where is the best skyline view in Williamsburg?",
    a: "<p>The waterfront parks, from Domino Park south to the ferry stop, give you the Manhattan skyline directly across the river. It is best at sunset and free.</p>",
  },
];

export default {
  path: "williamsburg.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Williamsburg: Waterfront, Food and Nightlife",
  description:
    "A guide to Williamsburg, Brooklyn: the waterfront skyline, Bedford Avenue, the Saturday food market, where to eat and how to get there.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/williamsburg-brooklyn.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Williamsburg: Waterfront, Food and Nightlife",
      description:
        "A guide to Williamsburg in Brooklyn, covering the waterfront, Bedford Avenue, food, nightlife and subway and ferry access.",
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
      heroImage: "williamsburg-brooklyn.webp",
      heroAlt: "The Williamsburg waterfront with Manhattan across the East River",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "neighbourhoods.html", label: "Neighbourhoods" },
        { href: "williamsburg.html", label: "Williamsburg" },
      ],
      eyebrowText: "Brooklyn · Williamsburg",
      h1: "Williamsburg, where Brooklyn looks at Manhattan",
      lead: "Williamsburg is Brooklyn's most talked-about neighbourhood and its most misunderstood. Behind the brunch queues there is a waterfront with the best skyline view in the city, a Saturday food market and streets that are pleasant on a weekday morning.",
      heroMeta: ["Brooklyn", "Half a day into evening", "L · J/M/Z · Ferry", "Busiest at weekends"],
      facts: [
        { label: "Borough", value: "Brooklyn" },
        { label: "Subway", value: "Bedford Av (L); Marcy Av (J/M/Z)" },
        { label: "Best for", value: "Brunch, bars and the waterfront" },
        { label: "Time needed", value: "3–5 hours" },
        { label: "When busiest", value: "Saturday afternoons and evenings" },
      ],
      mapId: "williamsburg",
      areaName: "Williamsburg",
      introImage: "skyline-window-view.webp",
      introImageAlt: "The Manhattan skyline seen through a tall window, across the East River",
      introEyebrow: "First impressions",
      introTitle: "Waterfront views and a very good Saturday",
      introLead:
        "The neighbourhood runs along the East River north of the Williamsburg Bridge, and the waterfront is the reason to come: a park with lawns, a ferry stop and a skyline view that costs nothing.",
      introParagraphs: [
        "Start at Bedford Avenue and walk west to the river, then north along the waterfront to Domino Park. The walk takes half an hour; the view takes longer. On a Saturday in summer, Smorgasburg at Marsha P. Johnson State Park turns the waterfront into the city's best open-air lunch.",
        "The bars and restaurants run along Bedford and the side streets toward the bridge. It is a young, loud neighbourhood at night and a quiet one before noon; both versions are worth seeing, but not on the same visit if you want to eat well without queuing.",
      ],
      seeTitle: "The streets and waterfront worth walking",
      seeLead: "Williamsburg is at its best on the river and on the side streets behind Bedford.",
      see: [
        { title: "The waterfront and Domino Park", text: "Lawns, a riverside walk and the old refinery cranes, with Manhattan directly opposite." },
        { title: "Bedford Avenue", text: "The neighbourhood's main street: shops, cafés and the permanent queue for brunch." },
        { title: "Marsha P. Johnson State Park", text: "The waterfront park that hosts Smorgasburg on Saturdays in summer, with the skyline behind it." },
        { title: "The Williamsburg Bridge", text: "Walk or cycle across to Manhattan; the pedestrian path gives you a skyline view the whole way." },
      ],
      eatTitle: "Eating and drinking in Williamsburg",
      eatLead: "The neighbourhood is known for brunch, pizza and a famous steakhouse. Prices are a guide.",
      eatRows: [
        ["<strong>Peter Luger</strong>", "Dry-aged porterhouse for two", "~$150+ for two"],
        ["<strong>Smorgasburg</strong>", "Whatever looks best from a dozen stalls", "pay per stall"],
        ["Bedford Avenue cafés", "Brunch, coffee and pastries", "mid-range"],
        ["Neighbourhood pizzerias", "A slice on the walk back to the train", "~$5"],
      ],
      planTitle: "A Saturday in Williamsburg",
      planLead: "Bedford first, then the river, then the bridge or a long lunch.",
      planStops: [
        { time: "10:00", title: "Bedford Avenue", text: "Coffee and a walk along the main street before the brunch queues form." },
        { time: "11:30", title: "The waterfront", text: "Walk west and north to Domino Park for the skyline and the cranes." },
        { time: "12:30", title: "Smorgasburg", text: "On a Saturday in summer, eat your way through the stalls at the waterfront park." },
        { time: "15:00", title: "The Williamsburg Bridge", text: "Walk off lunch with the crossing into Manhattan, or stay and explore the side streets." },
        { time: "18:00", title: "Sunset and dinner", text: "The waterfront is best at sunset; afterwards, the restaurants along Bedford and the side streets." },
      ],
      transit:
        "<p>The <strong>L</strong> to Bedford Avenue is the classic route, about 10 minutes from Union Square. The <strong>J/M/Z</strong> stop at Marcy Avenue, a 10-minute walk south of Bedford. The <strong>NYC Ferry</strong> ($5 one-way) connects the Williamsburg waterfront to Manhattan and is the nicest way over on a fine day. Note that the L has frequent weekend work; check the MTA before you rely on it.</p>",
      bestTime:
        "<p>Weekday mornings are calm and best for walking. Saturday is the day to come for the market and the waterfront, though it is also the busiest. Evenings are for bars and restaurants; if you want a quiet dinner, book or eat early.</p>",
      tips: [
        { icon: "◆", title: "Walk the waterfront, not just Bedford", text: "Bedford is the shopping street. The river path and Domino Park are the reason to stay longer than brunch." },
        { icon: "◷", title: "Weekday for a calm visit", text: "If you want the neighbourhood without the queues, come Tuesday to Thursday; the difference is considerable." },
        { icon: "☂", title: "Check the L train", text: "Weekend closures and diversions are common on the L. Have a plan B via the J/M/Z or the ferry." },
      ],
      nearbyTitle: "Nearby and worth your time",
      nearbyLead: "Williamsburg sits north of DUMBO and the bridge, so it is easy to combine the two.",
      nearby: [
        {
          href: "dumbo.html",
          image: "brooklyn-bridge-park.webp",
          alt: "A Brooklyn Bridge tower seen from Brooklyn Bridge Park",
          kicker: "Brooklyn",
          title: "DUMBO",
          text: "The cobbled blocks between the bridges, with the classic skyline view.",
          meta: "Neighbourhood",
        },
        {
          href: "brooklyn.html",
          image: "brooklyn-bridge-sunset.webp",
          alt: "The Brooklyn Bridge at sunset",
          kicker: "Borough",
          title: "Brooklyn",
          text: "The full guide to the borough, from the bridge to Coney Island.",
          meta: "Borough guide",
        },
        {
          href: "neighbourhoods.html",
          image: "soho-street-night.webp",
          alt: "A SoHo street at night with lit shopfronts",
          kicker: "All guides",
          title: "All neighbourhoods",
          text: "The other seven areas worth a morning, and how to choose between them.",
          meta: "Hub",
        },
      ],
      source: "williamsburg",
      faqTitle: "Williamsburg questions",
      faq,
      prev: { href: "harlem.html", label: "Harlem" },
      next: { href: "dumbo.html", label: "DUMBO" },
    }),
};
