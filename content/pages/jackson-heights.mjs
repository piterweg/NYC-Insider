import { renderNeighbourhoodPage } from "../neighbourhood-template.mjs";

const faq = [
  {
    q: "Is Jackson Heights worth visiting for food?",
    a: "<p>Yes. The blocks around 74th Street and Roosevelt Avenue are the best food crawl in New York for the money, with South Asian and Latin American cooking within a few minutes of each other.</p>",
  },
  {
    q: "How do I get to Jackson Heights?",
    a: "<p>The 7, E, F, M and R all stop at Jackson Heights–Roosevelt Avenue. The trip from Midtown is about 25–30 minutes.</p>",
  },
  {
    q: "What should I order in Jackson Heights?",
    a: "<p>Start with an Indian thali or dosa on 74th Street, then tacos on Roosevelt Avenue, then something from a Tibetan or Colombian counter. Order what the next table is having.</p>",
  },
  {
    q: "How long do I need in Jackson Heights?",
    a: "<p>Two to three hours is plenty for the food streets and a walk through the garden apartment blocks. It is an easy half-day combined with Flushing or Astoria.</p>",
  },
];

export default {
  path: "jackson-heights.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Jackson Heights: A Food Crawl in Queens",
  description:
    "A guide to Jackson Heights, Queens: Little India on 74th Street, the Roosevelt Avenue taquerias, the garden blocks and how to get there.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/subway-train.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Jackson Heights: A Food Crawl in Queens",
      description:
        "A guide to Jackson Heights in Queens, covering Little India, Roosevelt Avenue food, the historic garden blocks and subway access.",
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
      heroImage: "subway-train.webp",
      heroAlt: "A New York City subway train at a platform",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "neighbourhoods.html", label: "Neighbourhoods" },
        { href: "jackson-heights.html", label: "Jackson Heights" },
      ],
      eyebrowText: "Queens · Jackson Heights",
      h1: "Jackson Heights, block by block",
      lead: "Jackson Heights is one of the most linguistically diverse places on earth, and it eats like it. The blocks around 74th Street and Roosevelt Avenue are the best food crawl in New York, and the garden apartment blocks behind them are quietly beautiful.",
      heroMeta: ["Queens", "2–3 hours", "7/E/F/M/R", "Busiest at lunchtime"],
      facts: [
        { label: "Borough", value: "Queens" },
        { label: "Subway", value: "Jackson Hts–Roosevelt Av (7/E/F/M/R)" },
        { label: "Best for", value: "South Asian and Latin American food" },
        { label: "Time needed", value: "2–3 hours" },
        { label: "When busiest", value: "Weekend afternoons" },
      ],
      mapId: "jackson-heights",
      areaName: "Jackson Heights",
      introImage: "queens-astoria.webp",
      introImageAlt: "The Manhattan skyline seen across the water from Queens",
      introEyebrow: "First impressions",
      introTitle: "The most diverse few blocks in the city",
      introLead:
        "Little India runs along 74th Street, Latin American food runs along Roosevelt Avenue under the 7 train, and the two meet at a single intersection. You can eat three cuisines in an hour without leaving a block.",
      introParagraphs: [
        "Start on 74th Street between Roosevelt and 37th Avenue: sari shops, spice markets, sweet shops and the restaurants above them. Then walk west along Roosevelt Avenue, where the taquerias, bakeries and juice carts take over. The rule is simple: eat where the queue is local.",
        "Behind the avenues the neighbourhood changes. The garden apartment blocks around 35th Avenue were built as a planned suburb and are among the nicest residential streets in Queens. Walk them after lunch, when the food has settled and the light is going.",
      ],
      seeTitle: "Streets worth walking",
      seeLead: "Jackson Heights is small; these four blocks cover it.",
      see: [
        { title: "74th Street", text: "Little India: spice shops, sweet shops and restaurants stacked above the street." },
        { title: "Roosevelt Avenue", text: "The taqueria corridor beneath the 7 train; join the busiest cart or counter." },
        { title: "The garden apartment blocks", text: "The quiet historic district north of the avenues, with private gardens and brick courtyards." },
        { title: "Travers Park", text: "The neighbourhood's main park, with a playground and a weekend greenmarket." },
      ],
      eatTitle: "The food crawl",
      eatLead: "This is the cheapest and most varied eating in the city. Prices are a guide.",
      eatRows: [
        ["74th Street restaurants", "Indian thali or dosa", "budget"],
        ["Roosevelt Avenue taquerias", "Tacos and tortas", "budget"],
        ["Tibetan momo shops", "Steamed or fried momos", "budget"],
        ["Colombian bakeries", "Pan de bono and coffee", "budget"],
      ],
      planTitle: "A food crawl in Jackson Heights",
      planLead: "One street at a time, sharing as you go, then a walk to let it settle.",
      planStops: [
        { time: "11:00", title: "74th Street", text: "Walk the spice and sweet shops first, then choose a restaurant for an early lunch." },
        { time: "12:00", title: "Lunch on 74th Street", text: "An Indian thali or a dosa; order widely and share." },
        { time: "13:30", title: "Roosevelt Avenue", text: "Tacos, tortas and bakeries under the 7 train; join the queue that looks most local." },
        { time: "15:00", title: "The garden blocks", text: "Walk north into the quiet historic district, where the brick apartments and gardens begin." },
        { time: "16:00", title: "Travers Park", text: "Finish in the park, then walk back to the station for the train into Manhattan or on to Flushing." },
      ],
      transit:
        "<p>The <strong>7, E, F, M and R</strong> all stop at Jackson Heights–Roosevelt Avenue, about 25–30 minutes from Midtown. The 7 runs above Roosevelt Avenue, which makes the food crawl easy to follow on foot. The neighbourhood is flat and the blocks are short; you will not need a bus.</p>",
      bestTime:
        "<p>Weekend afternoons are the busiest and most atmospheric, when the food streets fill with families. A weekday lunch is calmer and easier for ordering. Evenings are lively but some smaller shops close earlier than you might expect.</p>",
      tips: [
        { icon: "◆", title: "Follow the local queue", text: "In Jackson Heights the busiest counter is almost always the right one. Menus are available in English enough to order." },
        { icon: "◷", title: "Share and move on", text: "The point is to eat across several kitchens. Order one dish at each stop rather than a full meal in the first place you like." },
        { icon: "☂", title: "Carry cash", text: "Some small spots are cash-only. A $20 note covers several stops on the crawl." },
      ],
      nearbyTitle: "Nearby and worth your time",
      nearbyLead: "Jackson Heights sits between Astoria and Flushing on the 7 line, so it is easy to combine.",
      nearby: [
        {
          href: "flushing.html",
          image: "queens-astoria.webp",
          alt: "The Manhattan skyline seen across the water from Queens",
          kicker: "Queens",
          title: "Flushing",
          text: "The 7 train's last stop: the city's biggest Chinatown and a vast park.",
          meta: "Neighbourhood",
        },
        {
          href: "astoria.html",
          image: "queens-astoria.webp",
          alt: "The Manhattan skyline seen from the Astoria waterfront in Queens",
          kicker: "Queens",
          title: "Astoria",
          text: "Greek tavernas, bakeries and a waterfront park 20 minutes from Midtown.",
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
      source: "jackson-heights",
      faqTitle: "Jackson Heights questions",
      faq,
      prev: { href: "flushing.html", label: "Flushing" },
      next: { href: "neighbourhoods.html", label: "All neighbourhoods" },
    }),
};
