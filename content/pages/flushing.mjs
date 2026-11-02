import { renderNeighbourhoodPage } from "../neighbourhood-template.mjs";

const faq = [
  {
    q: "Is Flushing worth the trip from Manhattan?",
    a: "<p>Yes, if you care about food. The 7 train takes about 35–40 minutes from Times Square, and the reward is the best Chinese food in the city and a vast park at the end of the line.</p>",
  },
  {
    q: "What should I eat in Flushing?",
    a: "<p>Start in the New World Mall food court, then walk Main Street for dumplings, bakeries and Chinese groceries. Regional cooking — Sichuan, Cantonese, northern Chinese — is the point, so order beyond the familiar dishes.</p>",
  },
  {
    q: "How do I get to Flushing?",
    a: "<p>The 7 train runs to Flushing–Main Street, about 35–40 minutes from Times Square. The LIRR from Penn Station is faster but runs less often.</p>",
  },
  {
    q: "Is Flushing Meadows–Corona Park free?",
    a: "<p>Yes. The park is free to walk, and the Unisphere and the US Open grounds are outdoors. The Queens Museum charges admission; check its current hours and price before you go.</p>",
  },
];

export default {
  path: "flushing.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Flushing: The City's Biggest Chinatown",
  description:
    "A guide to Flushing, Queens: the New World Mall food court, Main Street dumplings, Flushing Meadows–Corona Park and how to get there on the 7.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/flushing-main-street.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Flushing: The City's Biggest Chinatown",
      description:
        "A guide to Flushing in Queens, covering its food courts, Main Street, Flushing Meadows–Corona Park and subway access.",
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
      heroImage: "flushing-main-street.webp",
      heroAlt: "A busy commercial street in Flushing, Queens",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "neighbourhoods.html", label: "Neighbourhoods" },
        { href: "flushing.html", label: "Flushing" },
      ],
      eyebrowText: "Queens · Flushing",
      h1: "Flushing: the city's biggest Chinatown",
      lead: "Flushing is the largest Chinese community in New York and one of the best places to eat in the city. Come hungry, bring cash for the small spots, and give yourself an afternoon for the food courts, Main Street and Flushing Meadows–Corona Park.",
      heroMeta: ["Queens", "3–4 hours", "7 · LIRR", "Busiest at lunch and weekends"],
      facts: [
        { label: "Borough", value: "Queens" },
        { label: "Subway", value: "Flushing–Main St (7)" },
        { label: "Best for", value: "Chinese food and the Unisphere" },
        { label: "Time needed", value: "3–4 hours" },
        { label: "When busiest", value: "Weekend lunchtimes" },
      ],
      mapId: "flushing",
      areaName: "Flushing",
      introImage: "times-square-day.webp",
      introImageAlt: "Times Square in daylight, where the 7 train to Flushing begins",
      introEyebrow: "First impressions",
      introTitle: "A food district with a park attached",
      introLead:
        "Flushing's centre is dense, loud and entirely given over to food: basement food courts, bakeries, dumpling shops and restaurants specialising in regional Chinese cooking. The park at its edge is the calm counterweight.",
      introParagraphs: [
        "Start at New World Mall on Main Street, where the basement food court is the single best introduction to the neighbourhood. Order from two or three stalls, share everything, and then walk Main Street for dumplings and bakeries. The 7 train ends here, so you can eat your way back toward Manhattan if you like.",
        "Flushing Meadows–Corona Park is a fifteen-minute walk west: the Unisphere, the Queens Museum and the US Open grounds. It is enormous, free and much emptier than the food streets, which makes it a good way to end an afternoon before the train back.",
      ],
      seeTitle: "What to see beyond the food",
      seeLead: "Flushing is a food district first, but these four make it a proper afternoon.",
      see: [
        { title: "New World Mall food court", text: "The basement food court is the reason many New Yorkers make the trip out here." },
        { title: "Main Street", text: "Bakeries, dumpling shops and Chinese grocers along the 7 train's last stop." },
        { title: "Flushing Meadows–Corona Park", text: "The Unisphere, the Queens Museum and the US Open grounds, all free to walk." },
        { title: "Queens Museum", text: "The borough museum, home to the Panorama of the City of New York. Check its hours before you go." },
      ],
      eatTitle: "Eating in Flushing",
      eatLead: "This is the best-value eating in the city; most meals are cheap and enormous. Prices are a guide.",
      eatRows: [
        ["<strong>New World Mall food court</strong>", "Regional Chinese from a dozen stalls", "budget"],
        ["Main Street dumpling shops", "Dumplings and scallion pancakes", "budget"],
        ["Chinese bakeries", "Egg tarts and milk tea", "budget"],
        ["Neighbourhood restaurants", "Sichuan, Cantonese or northern Chinese", "moderate"],
      ],
      planTitle: "An afternoon in Flushing",
      planLead: "Food first, then the park; the 7 train makes the return easy.",
      planStops: [
        { time: "11:00", title: "Main Street bakeries", text: "Start with egg tarts and milk tea, then walk north toward the food courts." },
        { time: "12:00", title: "New World Mall food court", text: "Order from two or three stalls, share everything and take your time." },
        { time: "14:00", title: "Flushing Meadows–Corona Park", text: "Walk west to the Unisphere and the open lawns; the park is enormous and free." },
        { time: "15:30", title: "Queens Museum", text: "See the Panorama of the City of New York, then walk back toward the train." },
        { time: "17:00", title: "A last plate on Main Street", text: "Dumplings or a bakery stop before the 7 train back to Manhattan." },
      ],
      transit:
        "<p>The <strong>7</strong> train runs to Flushing–Main Street, about 35–40 minutes from Times Square and the simplest route. The <strong>LIRR</strong> from Penn Station is faster but less frequent. Once you arrive, the food streets are within a few blocks of the station, and the park is a 15-minute walk west.</p>",
      bestTime:
        "<p>Weekend lunchtimes are the busiest, when families fill the restaurants and the food court queues grow. A weekday lunch is calmer and just as good. Mornings are quietest, and the park is pleasant in the late afternoon.</p>",
      tips: [
        { icon: "◆", title: "Bring a little cash", text: "Most places take cards, but some small spots are cash-only. Carry $20 and you will not miss a dish." },
        { icon: "◷", title: "Go with an empty stomach and share", text: "Portions are large and the menus reward ordering widely. Two people can eat across three stalls for the price of one Midtown main." },
        { icon: "☂", title: "Check the park before you go", text: "The US Open takes over part of Flushing Meadows in late August and early September. Check access if your visit falls around the tournament." },
      ],
      nearbyTitle: "Nearby and worth your time",
      nearbyLead: "Flushing is the eastern end of the 7 line, with the rest of Queens along the way.",
      nearby: [
        {
          href: "astoria.html",
          image: "queens-astoria.webp",
          alt: "The Manhattan skyline seen from the Astoria waterfront in Queens",
          kicker: "Queens",
          title: "Astoria",
          text: "Greek bakeries, tavernas and a waterfront park, 20 minutes from Midtown.",
          meta: "Neighbourhood",
        },
        {
          href: "jackson-heights.html",
          image: "subway-train.webp",
          alt: "A New York City subway train at a platform",
          kicker: "Queens",
          title: "Jackson Heights",
          text: "Little India and the taqueria corridor, one stop closer to Manhattan on the 7.",
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
      source: "flushing",
      faqTitle: "Flushing questions",
      faq,
      prev: { href: "astoria.html", label: "Astoria" },
      next: { href: "jackson-heights.html", label: "Jackson Heights" },
    }),
};
