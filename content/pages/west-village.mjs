import { renderNeighbourhoodPage } from "../neighbourhood-template.mjs";

const faq = [
  {
    q: "Is the West Village the same as Greenwich Village?",
    a: "<p>The West Village is the western part of Greenwich Village, between Sixth Avenue and the Hudson River, below 14th Street. It is the quieter, more residential half and the one most visitors picture.</p>",
  },
  {
    q: "When is the best time to visit the West Village?",
    a: "<p>Weekday mornings are calm and good for walking. Late afternoon into early evening is the liveliest, when the cafés fill and the bars open; weekend evenings are the busiest.</p>",
  },
  {
    q: "Is the West Village expensive?",
    a: "<p>The cafés and restaurants are not cheap, but you can eat well for less: a slice at Joe's Pizza is about $4.50 and a falafel sandwich at Mamoun's is around $7–9. Walking and window-shopping cost nothing.</p>",
  },
  {
    q: "Where do I start a walk in the West Village?",
    a: "<p>Washington Square Park is the natural start. From there, walk west down MacDougal and Bleecker, then into the quiet blocks around Perry and Charles Streets before finishing at the river.</p>",
  },
];

export default {
  path: "west-village.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "West Village: Brownstones, Cafés and Jazz",
  description:
    "A guide to Manhattan's West Village: the streets to walk, where to eat and listen to jazz, a half-day plan and the subway stops that get you there.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/west-village.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "West Village: Brownstones, Cafés and Jazz",
      description:
        "A walkable guide to the West Village in Manhattan, covering streets, food, jazz, a half-day plan and subway access.",
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
      heroImage: "west-village.webp",
      heroAlt: "A brownstone doorway and steps in the West Village",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "neighbourhoods.html", label: "Neighbourhoods" },
        { href: "west-village.html", label: "West Village" },
      ],
      eyebrowText: "Manhattan · West Village",
      h1: "The West Village, slowly",
      lead: "The West Village is the part of Manhattan that still feels like a village: narrow streets that ignore the grid, brownstones, jazz basements and a café on almost every corner. It rewards walking without a destination.",
      heroMeta: ["Manhattan", "Half a day into evening", "A/C/E · B/D/F/M", "Best on a weekday"],
      facts: [
        { label: "Borough", value: "Manhattan" },
        { label: "Subway", value: "W 4 St–Washington Sq (A/C/E/B/D/F/M); Christopher St (1)" },
        { label: "Best for", value: "Brownstones, cafés and jazz" },
        { label: "Time needed", value: "3–4 hours, or an evening" },
        { label: "When busiest", value: "Weekend afternoons and evenings" },
      ],
      mapId: "greenwich-village",
      areaName: "the West Village",
      introImage: "fifth-avenue-cab.webp",
      introImageAlt: "A yellow taxi on a Manhattan avenue at street level",
      introEyebrow: "First impressions",
      introTitle: "A neighbourhood that ignores the grid",
      introLead:
        "Below 14th Street the grid gives up and the streets go their own way, which is why the Village feels different from the rest of Manhattan. The West Village is the western half, between Sixth Avenue and the river, and it is the half to walk.",
      introParagraphs: [
        "Start at Washington Square Park and walk west: down MacDougal, across Bleecker, then into the quiet blocks around Perry and Charles Streets. The streets bend, the buildings are low, and after ten minutes you will have lost your sense of direction, which is the point.",
        "The jazz clubs and small bars are the evening draw; the daytime draw is simply the walking. Weekday mornings are calm enough to hear birds, and the West Village is at its best in the late afternoon, when the light comes down the cross streets and people start sitting outside.",
      ],
      seeTitle: "The streets worth walking",
      seeLead: "Four places that explain why people pay so much to live here.",
      see: [
        { title: "Washington Square Park", text: "The arch, the chess tables and the buskers: the Village's front room and the natural place to start a walk." },
        { title: "Bleecker Street", text: "Cafés, record shops and the stretch everyone pictures when they picture the Village. Quieter west of Seventh Avenue." },
        { title: "Perry and Charles Streets", text: "Low brick houses and quiet pavements. These are the blocks most visitors miss and locals protect." },
        { title: "Hudson River Park", text: "At the western edge, the waterfront path and the sunset over New Jersey. A good place to end an afternoon." },
      ],
      eatTitle: "Eating and drinking",
      eatLead: "The Village is a café neighbourhood first and a restaurant one second. Prices are a guide.",
      eatRows: [
        ["<strong>Joe's Pizza</strong>", "A plain slice, eaten standing", "~$4.50"],
        ["<strong>Mamoun's Falafel</strong>", "Falafel sandwich", "$7–9"],
        ["<strong>Carbone</strong>", "Red-sauce Italian, booked well ahead", "splurge"],
        ["Village cafés", "Coffee and a pastry between walks", "~$5–8"],
      ],
      planTitle: "An afternoon into evening",
      planLead: "Walk first, eat second, then find music. The Village is small enough that no plan needs to be strict.",
      planStops: [
        { time: "10:00", title: "Washington Square Park", text: "Start under the arch, watch the chess players and take MacDougal Street south." },
        { time: "11:30", title: "Bleecker Street", text: "Coffee and a browse east to west, then turn into the side streets around Perry and Charles." },
        { time: "13:00", title: "Lunch", text: "A slice at Joe's or a falafel at Mamoun's; both are cheap and both are institutions." },
        { time: "15:00", title: "Hudson River Park", text: "Walk west to the water and follow the path north or south for the skyline and the sunset." },
        { time: "18:30", title: "Dinner and jazz", text: "Eat early or book ahead, then find a basement club. Music usually starts later than you think." },
      ],
      transit:
        "<p><strong>West 4th Street–Washington Square</strong> is the main station, served by the A/C/E and B/D/F/M. The <strong>1</strong> stops at Christopher Street, and the <strong>L</strong> at Sixth Avenue. From Midtown, the F or the A is usually quickest; the neighbourhood is flat and easy to walk once you are there.</p>",
      bestTime:
        "<p>Weekday mornings are calm and the best time for a long walk. Late afternoon into early evening is when the neighbourhood is at its most alive. Weekend evenings are the busiest, and the narrow pavements around Bleecker fill up quickly.</p>",
      tips: [
        { icon: "◆", title: "Walk west, not north", text: "The good blocks are between Sixth Avenue and the river, below 14th Street. North of the park the crowds and the chains begin." },
        { icon: "◷", title: "Eat early or book ahead", text: "The small dining rooms fill quickly. Walk in at 5.30pm or reserve a table a week ahead." },
        { icon: "☂", title: "Look for the basements", text: "The jazz clubs are small and easy to miss from the street. Music starts later in the evening, so check times before you build the night around one." },
      ],
      nearbyTitle: "Nearby and worth your time",
      nearbyLead: "The Village sits between SoHo, Chelsea and the High Line, so you can keep walking.",
      nearby: [
        {
          href: "soho.html",
          image: "soho-street-night.webp",
          alt: "A SoHo street at night with lit shopfronts",
          kicker: "Manhattan",
          title: "SoHo",
          text: "Twenty minutes east: cast-iron architecture and the city's densest shopping.",
          meta: "Neighbourhood",
        },
        {
          href: "manhattan.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Borough",
          title: "Manhattan",
          text: "The full guide to the island, with where to stay and what to book.",
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
      source: "west-village",
      faqTitle: "West Village questions",
      faq,
      prev: { href: "soho.html", label: "SoHo" },
      next: { href: "harlem.html", label: "Harlem" },
    }),
};
