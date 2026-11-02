import { renderNeighbourhoodPage } from "../neighbourhood-template.mjs";

const faq = [
  {
    q: "How long do you need in DUMBO?",
    a: "<p>Two to three hours covers the streets, Brooklyn Bridge Park and the Washington Street view. Add the bridge walk or a walk along the waterfront and it becomes half a day.</p>",
  },
  {
    q: "What is the famous DUMBO photo?",
    a: "<p>The view down Washington Street, where the Manhattan Bridge frames the Empire State Building in the gap between the bridge towers. It is best early, before the queue forms.</p>",
  },
  {
    q: "How do I get to DUMBO?",
    a: "<p>The A/C stops at High Street and the F at York Street, both a few minutes from the waterfront. The NYC Ferry also stops at DUMBO, which is the nicest approach.</p>",
  },
  {
    q: "Is DUMBO good for families?",
    a: "<p>Yes. Brooklyn Bridge Park has lawns, playgrounds and Jane's Carousel, and the streets are short enough for children to walk. The bridge walk is the bigger outing.</p>",
  },
];

export default {
  path: "dumbo.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "DUMBO: Bridge Views and Cobblestones",
  description:
    "A guide to DUMBO, Brooklyn: the Washington Street bridge view, Brooklyn Bridge Park, where to eat and a two-hour walking plan.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/dumbo-brooklyn.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "DUMBO: Bridge Views and Cobblestones",
      description:
        "A guide to DUMBO in Brooklyn, covering the famous bridge view, Brooklyn Bridge Park, food and a short walking plan.",
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
      heroImage: "dumbo-brooklyn.webp",
      heroAlt: "Brooklyn Bridge Park lawn with the Manhattan skyline behind",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "neighbourhoods.html", label: "Neighbourhoods" },
        { href: "dumbo.html", label: "DUMBO" },
      ],
      eyebrowText: "Brooklyn · DUMBO",
      h1: "DUMBO: two bridges, one perfect view",
      lead: "DUMBO is four blocks of cobblestones between the Brooklyn and Manhattan bridges, and it contains the most photographed view in Brooklyn. It is small, scenic and best done on foot in two or three hours.",
      heroMeta: ["Brooklyn", "2–3 hours", "A/C · F · Ferry", "Busiest from late morning"],
      facts: [
        { label: "Borough", value: "Brooklyn" },
        { label: "Subway", value: "High St (A/C); York St (F)" },
        { label: "Best for", value: "Bridge views and photography" },
        { label: "Time needed", value: "2–3 hours" },
        { label: "When busiest", value: "Weekends from late morning" },
      ],
      mapId: "dumbo",
      areaName: "DUMBO",
      introImage: "brooklyn-bridge-sunset.webp",
      introImageAlt: "The Brooklyn Bridge at sunset, seen from Brooklyn Bridge Park",
      introEyebrow: "First impressions",
      introTitle: "The view that made the neighbourhood",
      introLead:
        "DUMBO stands for Down Under the Manhattan Bridge Overpass, and the name is the geography: the streets sit in the gap between two bridges, with the river on one side and old warehouses on the other.",
      introParagraphs: [
        "The famous photograph is at the end of Washington Street, where the Manhattan Bridge frames the Empire State Building down the block. Go early, before the queue forms at mid-morning, then walk to Brooklyn Bridge Park for the view back at Lower Manhattan.",
        "The neighbourhood itself is tiny: a few cobbled streets, converted warehouses, a carousel and the park. That is enough for half a day, especially if you continue along the waterfront to Brooklyn Heights or walk the bridge into Manhattan.",
      ],
      seeTitle: "What to see in four blocks",
      seeLead: "DUMBO is small; these four fill it properly.",
      see: [
        { title: "Washington Street", text: "The bridge-framed view down the block toward the Empire State Building. Arrive before 9am if you want a clear shot." },
        { title: "Brooklyn Bridge Park", text: "Waterfront lawns, Pebble Beach and the best skyline panorama in Brooklyn." },
        { title: "Jane's Carousel", text: "A restored carousel in a glass pavilion beside the river, in the park's northern section." },
        { title: "The blocks under the Manhattan Bridge", text: "Cobbled streets and converted warehouses where the old industrial neighbourhood is easiest to read." },
      ],
      eatTitle: "Eating in DUMBO",
      eatLead: "The neighbourhood is small and the queues are real; eat early or eat elsewhere. Prices are a guide.",
      eatRows: [
        ["<strong>Juliana's Pizza</strong>", "Coal-fired pizza, a DUMBO institution", "moderate"],
        ["<strong>Time Out Market</strong>", "Pick from a dozen kitchens under one roof", "varies"],
        ["Old Fulton Street restaurants", "A sit-down lunch with the bridge in view", "mid-range"],
        ["Brooklyn Bridge Park kiosks", "Coffee and a snack by the water", "budget"],
      ],
      planTitle: "Two hours in DUMBO",
      planLead: "Do the photograph first, then the park, then lunch; the neighbourhood is small enough to walk twice.",
      planStops: [
        { time: "08:30", title: "Washington Street", text: "The famous bridge view is best before 9am, when the light is clean and there is no queue." },
        { time: "09:30", title: "Brooklyn Bridge Park", text: "Walk down to the waterfront and along the lawns, looking back at Lower Manhattan." },
        { time: "11:00", title: "Jane's Carousel and the waterfront", text: "Ride the carousel or simply sit by the river, then walk the cobbled streets under the bridge." },
        { time: "12:30", title: "Lunch", text: "Pizza at Juliana's or the market; expect a wait at weekends." },
        { time: "14:00", title: "Onward", text: "Walk the bridge into Manhattan or follow the waterfront south to Brooklyn Heights." },
      ],
      transit:
        "<p>The <strong>A/C</strong> stop at High Street and the <strong>F</strong> at York Street are both a few minutes from the waterfront. The <strong>NYC Ferry</strong> ($5 one-way) stops at DUMBO, which is the nicest way in from Manhattan. The neighbourhood is compact and cobbled, so bring comfortable shoes rather than a car.</p>",
      bestTime:
        "<p>Early morning is the best time: the Washington Street view is empty, the park is quiet and the light is good. Weekends from late morning are the busiest. A weekday evening is also lovely, when the day-trippers have gone and the waterfront is calm.</p>",
      tips: [
        { icon: "◷", title: "Arrive before 9am", text: "The Washington Street view attracts a queue by mid-morning. Before 9am you can take your time and still have the street to yourself." },
        { icon: "◆", title: "Do not plan a whole day", text: "DUMBO is two to three hours. Combine it with Brooklyn Heights or the bridge walk rather than stretching it." },
        { icon: "☂", title: "Cobblestones and rain", text: "The streets are uneven and get slippery in the wet. Wear shoes with grip, and plan the park or the market for the worst of the weather." },
      ],
      nearbyTitle: "Nearby and worth your time",
      nearbyLead: "DUMBO is the start of the Brooklyn waterfront, so keep walking south or across the bridge.",
      nearby: [
        {
          href: "brooklyn-bridge.html",
          image: "brooklyn-bridge-park.webp",
          alt: "A Brooklyn Bridge tower seen from Brooklyn Bridge Park",
          kicker: "On the doorstep",
          title: "Brooklyn Bridge walk",
          text: "The crossing into Manhattan starts here, and is best before 8am.",
          meta: "Attraction",
        },
        {
          href: "williamsburg.html",
          image: "brooklyn-bridge-skyline.webp",
          alt: "The Manhattan skyline and the Brooklyn Bridge at dusk",
          kicker: "Brooklyn",
          title: "Williamsburg",
          text: "Up the waterfront: brunch, bars and another skyline view.",
          meta: "Neighbourhood",
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
      source: "dumbo",
      faqTitle: "DUMBO questions",
      faq,
      prev: { href: "williamsburg.html", label: "Williamsburg" },
      next: { href: "astoria.html", label: "Astoria" },
    }),
};
