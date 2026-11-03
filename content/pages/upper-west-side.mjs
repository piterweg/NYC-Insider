import { renderNeighbourhoodPage } from "../neighbourhood-template.mjs";

const faq = [
  {
    q: "Is the Upper West Side good for families?",
    a: "<p>Yes. It is the most family-friendly part of Manhattan: the natural history museum, Central Park's playgrounds, Riverside Park and streets that are easy with a stroller. The Upper East Side is quieter in the evening, but the west side is easier with children.</p>",
  },
  {
    q: "How much does the American Museum of Natural History cost?",
    a: "<p>General admission is from $28, or from $43 with one ticketed exhibition. Residents of New York, New Jersey and Connecticut can pay what they wish at the desk with ID, and the Hayden Planetarium's Space Show is a paid add-on. Prices change, so confirm before booking.</p>",
  },
  {
    q: "How do I get to the Upper West Side?",
    a: "<p>The 1, 2 and 3 stop at 72nd Street; the 1 also stops at 79th and 86th, and the B/C at 81st Street and 86th. The B/C station at 81st Street opens directly into the natural history museum.</p>",
  },
  {
    q: "Upper West Side or Upper East Side?",
    a: "<p>Choose the west side for the natural history museum, Central Park's playgrounds and the Hudson; choose the east side for the Met and Museum Mile. Both are residential and calm in the evenings.</p>",
  },
  {
    q: "Where should I eat on the Upper West Side?",
    a: "<p>Zabar's for bagels and smoked fish, Tom's Restaurant for diner food, Levain Bakery for the chocolate-chip cookie, and Columbus Avenue for neighbourhood restaurants. It is a local dining scene rather than a destination one.</p>",
  },
];

export default {
  path: "upper-west-side.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Upper West Side: Museums, Parks and Zabar's",
  description:
    "A local guide to Manhattan's Upper West Side: AMNH and the Hayden Planetarium, Central Park's west side, Riverside Park, where to eat and how to get there.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/amnh-facade.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Upper West Side: Museums, Parks and Zabar's",
      description:
        "A guide to Manhattan's Upper West Side, covering the American Museum of Natural History, Central Park's west side, Riverside Park, food and subway access.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderNeighbourhoodPage({
      heroImage: "amnh-facade.webp",
      heroAlt: "The American Museum of Natural History on Central Park West",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "neighbourhoods.html", label: "Neighbourhoods" },
        { href: "upper-west-side.html", label: "Upper West Side" },
      ],
      eyebrowText: "Manhattan · Upper West Side",
      h1: "The Upper West Side, from museum to river",
      lead: "The Upper West Side is where New Yorkers go to live rather than to sightsee, which is exactly why it works as a visitor: a world-class museum, the quiet west side of Central Park, the Hudson at the end of the street and a Broadway full of delis and diners.",
      heroMeta: ["Manhattan", "Half a day", "1/2/3 · B/C", "Family-friendly"],
      facts: [
        { label: "Borough", value: "Manhattan" },
        { label: "Subway", value: "72 St (1/2/3); 81 St and 86 St (B/C)" },
        { label: "Best for", value: "Museums, parks and family days" },
        { label: "Time needed", value: "Half a day, or a full one with AMNH" },
        { label: "When busiest", value: "Weekends, especially at the museum" },
      ],
      mapId: "upper-west-side",
      areaName: "Manhattan's Upper West Side",
      introImage: "central-park-nyc.webp",
      introImageAlt: "Central Park's lawns and trees on Manhattan's west side",
      introEyebrow: "First impressions",
      introTitle: "A residential neighbourhood with a world-class museum",
      introLead:
        "The Upper West Side runs from Columbus Circle up to 110th Street, between Central Park and the Hudson. It is dense, leafy and domestic, and its pace is set by schools, dog walkers and the museum.",
      introParagraphs: [
        "The spine is Broadway, which cuts diagonally across the grid and carries most of the neighbourhood's food and shops; Columbus and Amsterdam Avenues run parallel with the restaurants and cafés. The park is on one side, the river on the other, and almost everything you want is within a 20-minute walk.",
        "It is also the most family-friendly part of Manhattan. Central Park's west side has playgrounds and ball fields, the museum is built for children and the streets are stroller-friendly by Manhattan standards. If you are choosing between the Upper East and Upper West Sides with children, this is the easier one.",
      ],
      seeTitle: "The essentials",
      seeLead: "Three places explain most of why people come, and all three are within walking distance.",
      see: [
        {
          title: "The American Museum of Natural History",
          text: "The museum anchors the neighbourhood: dinosaur halls, the blue whale, the Rose Center and the Hayden Planetarium. General admission is from $28, or from $43 with one ticketed exhibition. <a href=\"https://www.amnh.org/plan-your-visit\" rel=\"nofollow noopener\" target=\"_blank\">Plan your visit at amnh.org</a>.",
        },
        {
          title: "Central Park from the west side",
          text: "Enter at 72nd or 86th Street for Strawberry Fields, the Lake and the paths around Bethesda. Heckscher playground, further south, is the big one for children. The park is free; <a href=\"https://www.centralparknyc.org/visit\" rel=\"nofollow noopener\" target=\"_blank\">check hours and entrances</a>.",
        },
        {
          title: "Riverside Park and Columbia",
          text: "The Hudson waterfront path is the neighbourhood's quiet edge, best at sunset. North along Broadway, Columbia University's campus sits in Morningside Heights, a few stops on the 1 or a long walk.",
        },
      ],
      eatTitle: "Where to eat on the Upper West Side",
      eatLead:
        "The neighbourhood is strong on delis, bakeries and neighbourhood restaurants rather than destination dining. Prices are a guide and change.",
      eatRows: [
        ["<strong>Zabar's</strong>", "Bagels, smoked fish and coffee from the Broadway institution", "bagel ~$5.50; lox bagel $16–22"],
        ["<strong>Tom's Restaurant</strong>", "Diner breakfast or a burger", "budget"],
        ["<strong>Levain Bakery</strong>", "The chocolate-chip cookie", "budget"],
        ["Columbus Avenue restaurants", "Neighbourhood Italian, Japanese and Mexican", "mid-range"],
        ["Broadway food shops", "A picnic for Central Park", "budget"],
      ],
      planTitle: "A day on the Upper West Side",
      planLead: "Museum first, park in the afternoon, river at sunset; the whole day is walkable.",
      planStops: [
        { time: "09:30", title: "AMNH at opening", text: "Use the 81st Street entrance, where the B/C station opens into the museum, and go straight to the dinosaurs before the halls fill." },
        { time: "12:00", title: "Lunch near the museum", text: "Zabar's for a bagel and coffee, or a diner lunch on Broadway; both are a short walk west." },
        { time: "13:30", title: "Central Park's west side", text: "Walk east into the park for Strawberry Fields and the Lake; Heckscher playground for children is further south." },
        { time: "16:00", title: "Riverside Park", text: "Head west to the Hudson for the waterfront path and the sunset over New Jersey." },
        { time: "18:30", title: "Dinner or a show", text: "Columbus Avenue for a neighbourhood dinner, or the Beacon Theatre on Broadway at 74th Street for a concert." },
      ],
      transit:
        "<p><strong>72nd Street</strong> is the main station, served by the 1, 2 and 3. The <strong>1</strong> also stops at 79th and 86th Streets, and the <strong>B/C</strong> at 81st–Museum of Natural History and 86th. The B/C station at 81st opens directly into the museum. From Midtown the ride is 10–15 minutes, and the neighbourhood is flat and easy to walk.</p>",
      bestTime:
        "<p>Weekday mornings are the calmest, especially at the museum; weekends and rainy days are the busiest. The park is best early and the river at sunset. The museum is open daily from 10am to 5.30pm and closes on Thanksgiving and 25 December.</p>",
      tips: [
        {
          icon: "◆",
          title: "Use the 81st Street entrance",
          text: "The B/C station opens into the museum, which saves the queue at Central Park West. Arrive at opening to see the dinosaurs before the school groups.",
        },
        {
          icon: "◷",
          title: "Book museum tickets ahead",
          text: "AMNH uses timed entry. General admission is from $28, or from $43 with one ticketed exhibition; residents of New York, New Jersey and Connecticut can pay what they wish with ID.",
        },
        {
          icon: "★",
          title: "Save the river for sunset",
          text: "Riverside Park faces west, so the end of the day is the neighbourhood's best free show. Walk down to the water from 72nd or 79th Street.",
        },
      ],
      nearbyTitle: "Nearby and worth your time",
      nearbyLead: "The Upper West Side sits between the park and the river, with the rest of Manhattan a short subway ride away.",
      nearby: [
        {
          href: "amnh.html",
          image: "amnh-facade.webp",
          alt: "The American Museum of Natural History on Central Park West",
          kicker: "Attraction",
          title: "American Museum of Natural History",
          text: "The full guide: tickets, entrances, timings and the add-ons worth paying for.",
          meta: "Upper West Side",
        },
        {
          href: "central-park.html",
          image: "central-park-bow-bridge.webp",
          alt: "Bow Bridge in Central Park",
          kicker: "Attraction",
          title: "Central Park",
          text: "Plan for 843 free acres, from the Mall to the Ramble.",
          meta: "Free",
        },
        {
          href: "manhattan.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Borough",
          title: "Manhattan",
          text: "The island guide: Midtown, the Village, Museum Mile and where to stay.",
          meta: "Borough guide",
        },
      ],
      source: "upper-west-side",
      faqTitle: "Upper West Side questions",
      faq,
      prev: { href: "west-village.html", label: "West Village" },
      next: { href: "harlem.html", label: "Harlem" },
    }),
};
