import { renderNeighbourhoodPage } from "../neighbourhood-template.mjs";

const faq = [
  {
    q: "Is Astoria worth visiting?",
    a: "<p>Yes, especially if you like food and want a neighbourhood that feels local rather than staged. It is 20 minutes from Midtown and pairs easily with a Manhattan day.</p>",
  },
  {
    q: "How do I get to Astoria?",
    a: "<p>The N/W runs to Astoria–Ditmars Boulevard, and the M/R stops at Steinway Street. From Midtown the trip is about 20 minutes.</p>",
  },
  {
    q: "What food is Astoria known for?",
    a: "<p>Greek food, above all: bakeries, tavernas and grilled seafood, reflecting the neighbourhood's Greek heritage. There is also a strong Egyptian food scene on Steinway Street.</p>",
  },
  {
    q: "What can I do in Astoria besides eat?",
    a: "<p>The Museum of the Moving Image, Astoria Park and the waterfront, and the side streets of low-rise houses. A half-day is enough for two of those plus a meal.</p>",
  },
];

export default {
  path: "astoria.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Astoria: Greek Food and a Queens Evening",
  description:
    "A guide to Astoria, Queens: Greek bakeries and tavernas, the Museum of the Moving Image, Astoria Park and how to get there by subway.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/queens-astoria.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Astoria: Greek Food and a Queens Evening",
      description:
        "A guide to Astoria in Queens, covering Greek food, the Museum of the Moving Image, the waterfront and subway access.",
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
      heroImage: "queens-astoria.webp",
      heroAlt: "The Manhattan skyline seen across the water from Astoria, Queens",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "neighbourhoods.html", label: "Neighbourhoods" },
        { href: "astoria.html", label: "Astoria" },
      ],
      eyebrowText: "Queens · Astoria",
      h1: "Astoria, Queens: Greek food and a local pace",
      lead: "Astoria is where a lot of New Yorkers go for dinner, and it is the easiest part of Queens to like on a first visit: Greek bakeries and tavernas, a film museum, a park with a skyline view, and the N/W train from Midtown.",
      heroMeta: ["Queens", "Half a day", "N/W · M/R", "Busiest at dinner"],
      facts: [
        { label: "Borough", value: "Queens" },
        { label: "Subway", value: "Astoria–Ditmars Blvd (N/W); Steinway St (M/R)" },
        { label: "Best for", value: "Greek food and a local evening" },
        { label: "Time needed", value: "3–4 hours" },
        { label: "When busiest", value: "Weekday evenings and weekend brunch" },
      ],
      mapId: "astoria",
      areaName: "Astoria",
      introImage: "queensboro-bridge-night.webp",
      introImageAlt: "The Queensboro Bridge lit at night over the East River",
      introEyebrow: "First impressions",
      introTitle: "The other side of the river",
      introLead:
        "Astoria sits directly across the East River from the Upper East Side, and the waterfront gives you the Manhattan skyline without the Midtown prices. The neighbourhood is Greek by history, diverse by reality, and serious about food.",
      introParagraphs: [
        "The eating is concentrated around Ditmars Boulevard and 30th Avenue: bakeries in the morning, tavernas at night, and the smell of grilling seafood on summer evenings. Walk the side streets between them; Astoria is low-rise and quiet, and the houses are worth the detour.",
        "For a break from food, the Museum of the Moving Image is one of the best film museums in the city, and Astoria Park has a pool, a waterfront and the Queensboro Bridge overhead. Both are a short walk from the N/W, which makes a half-day easy to plan.",
      ],
      seeTitle: "Streets, parks and a museum",
      seeLead: "Four stops that show you Astoria beyond the restaurant strip.",
      see: [
        { title: "Ditmars Boulevard", text: "The restaurant strip: Greek tavernas, bakeries and the queues that tell you where to eat." },
        { title: "Astoria Park", text: "Waterfront lawns and the pool, with the Queensboro Bridge overhead and the skyline across the river." },
        { title: "Museum of the Moving Image", text: "Film and television history in a purpose-built museum, a short walk from the N/W." },
        { title: "Steinway Street", text: "Little Egypt: Egyptian bakeries, grills and shisha cafés on the blocks around Steinway." },
      ],
      eatTitle: "Eating and drinking in Astoria",
      eatLead: "Greek food is the tradition and the reason to come. Prices are a guide.",
      eatRows: [
        ["<strong>Taverna Kyclades</strong>", "Grilled fish and Greek classics", "moderate"],
        ["Greek bakeries", "Spanakopita, loukoumades and coffee", "budget"],
        ["Steinway Street grills", "Egyptian mixed grill, shared", "moderate"],
        ["Neighbourhood food carts", "A late souvlaki or taco", "budget"],
      ],
      planTitle: "An afternoon and evening in Astoria",
      planLead: "Museum first, food second, waterfront at sunset; the neighbourhood is compact and flat.",
      planStops: [
        { time: "13:00", title: "Museum of the Moving Image", text: "Two hours is enough for the main galleries, and the museum is a short walk from the subway." },
        { time: "15:00", title: "Ditmars Boulevard", text: "Walk the restaurant strip and the side streets behind it, stopping at a bakery." },
        { time: "16:30", title: "Astoria Park", text: "Head to the waterfront for the bridge, the pool and the skyline across the river." },
        { time: "18:30", title: "Sunset", text: "Stay on the waterfront as the light goes; Manhattan puts on its evening face opposite." },
        { time: "19:30", title: "Dinner", text: "A taverna on or near Ditmars, ideally one with a queue of locals rather than tourists." },
      ],
      transit:
        "<p>The <strong>N/W</strong> runs to Astoria–Ditmars Boulevard, about 20 minutes from Midtown, and stops along 31st Street on the way. The <strong>M/R</strong> serve Steinway Street for the Little Egypt blocks. Once you are there, the neighbourhood is flat and walkable; Ditmars, 30th Avenue and the park are within 15 minutes of each other.</p>",
      bestTime:
        "<p>Dinner time is the busiest and the liveliest. Weekday lunch is calm, and the bakeries are best mid-morning. Weekend brunch fills the cafés on Ditmars and 30th Avenue. If you want the waterfront to yourself, go on a weekday evening before the restaurants fill.</p>",
      tips: [
        { icon: "◆", title: "Eat on Ditmars, walk the side streets", text: "The restaurant strip is the draw, but the quiet blocks behind it are where the neighbourhood's character is." },
        { icon: "◷", title: "Go for dinner, not lunch", text: "The tavernas are at their best in the evening. Bakeries and cafés cover the daytime." },
        { icon: "☂", title: "Check the museum's days", text: "The Museum of the Moving Image keeps limited weekly hours. Check before you build the afternoon around it." },
      ],
      nearbyTitle: "Nearby and worth your time",
      nearbyLead: "Astoria is a short ride from the other Queens food districts and 20 minutes from Midtown.",
      nearby: [
        {
          href: "jackson-heights.html",
          image: "subway-train.webp",
          alt: "A New York City subway train at a platform",
          kicker: "Queens",
          title: "Jackson Heights",
          text: "Little India and the taqueria corridor under the 7 train, the city's best food crawl.",
          meta: "Neighbourhood",
        },
        {
          href: "flushing.html",
          image: "queens-astoria.webp",
          alt: "The Manhattan skyline seen across the water from Queens",
          kicker: "Queens",
          title: "Flushing",
          text: "The city's biggest Chinatown and Flushing Meadows–Corona Park.",
          meta: "Neighbourhood",
        },
        {
          href: "queens.html",
          image: "queens-astoria.webp",
          alt: "The Manhattan skyline seen from the Astoria waterfront in Queens",
          kicker: "Borough",
          title: "Queens",
          text: "The full guide to the borough, from Long Island City to the Rockaways.",
          meta: "Borough guide",
        },
      ],
      source: "astoria",
      faqTitle: "Astoria questions",
      faq,
      prev: { href: "dumbo.html", label: "DUMBO" },
      next: { href: "flushing.html", label: "Flushing" },
    }),
};
