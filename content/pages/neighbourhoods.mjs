import {
  btn,
  sectionHead,
  pageHero,
  mediaCard,
  card,
  table,
  faq,
  newsletter,
  ctaBand,
  pageNav,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";
import { readFileSync } from "node:fs";

const hoodMapSvg = readFileSync(
  new URL("../../assets/img/nyc-neighbourhoods.svg", import.meta.url),
  "utf8"
).replace(/^<\?xml[^>]*>\s*/, "");

const faqItems = [
  {
    q: "How many neighbourhoods can I see in one day?",
    a: "<p>One, or two if they are adjacent. SoHo and the West Village pair naturally, as do DUMBO and Brooklyn Heights. The Queens food districts deserve their own half-day each.</p>",
  },
  {
    q: "Which neighbourhood should a first-timer pick?",
    a: "<p>SoHo or the West Village if you only have an afternoon in Manhattan. Williamsburg or DUMBO if you want the skyline from Brooklyn. Jackson Heights if food is the main reason you came.</p>",
  },
  {
    q: "Do I need a guide to walk these areas?",
    a: "<p>No. All nine are compact, walkable and well served by subway. A short list of streets and one restaurant is enough planning.</p>",
  },
  {
    q: "Are these neighbourhoods safe?",
    a: "<p>Yes. These are busy residential and commercial areas. As anywhere in New York, use city sense at night, keep to well-lit main streets and watch for pickpockets on crowded trains.</p>",
  },
];

export default {
  path: "neighbourhoods.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "New York Neighbourhoods to Walk and Eat In",
  description:
    "Nine New York neighbourhoods worth planning a morning around, with what each is best for, how long to allow and the subway that gets you there.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/soho-street-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "New York Neighbourhoods to Walk and Eat In",
      description:
        "A guide to nine walkable New York neighbourhoods in Manhattan, Brooklyn and Queens, with what each is best for and how to get there.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a.replace(/<[^>]+>/g, ""),
        },
      })),
    },
  ],
  render: () => `
${pageHero({
  image: img("soho-street-night.webp"),
  alt: "A SoHo street at night with lit shopfronts",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "boroughs.html", label: "Boroughs" },
    { href: "neighbourhoods.html", label: "Neighbourhoods" },
  ],
  eyebrowText: "Neighbourhoods",
  title: "Nine neighbourhoods, nine different cities",
  lead: "New York is a city of villages, and the fastest way to like it is to stop sightseeing and start walking one. These nine are worth a morning, an afternoon or a whole evening, and no two feel like the same place.",
  meta: metaItems("9 guides", "Manhattan, Brooklyn and Queens", "Subway-first", "Half a day each"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The map",
      title: "Nine neighbourhoods, one map",
      lead: "Click a dot to open the guide. They are spread across Manhattan, Brooklyn and Queens — the closest pairs are a 15-minute walk apart.",
    })}
    <div class="borough-map-wrap borough-map-wrap--wide">
      ${hoodMapSvg}
    </div>
    <p class="small muted" style="text-align:center;margin-top:1rem">Borough boundaries: NYC Open Data. Dot positions are approximate — use the guides for exact addresses and subway exits.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("How to use this guide")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">One neighbourhood a day is enough</h2>
        <p class="lead">The most common mistake in New York is trying to see the city rather than a part of it. These nine areas are between 20 and 40 minutes apart by subway, but each has its own centre, its own food and its own pace.</p>
        <p class="muted">Pick one for the morning and one for the evening, and let the walking between them be the plan. Every guide below has the same shape: what to see, where to eat, a suggested half-day and the practical details for getting there.</p>
        <p class="muted">If you are building an itinerary, pair SoHo with the West Village, DUMBO with Brooklyn Heights, and give Astoria, Flushing or Jackson Heights a proper afternoon rather than squeezing two of them into one meal.</p>
      </div>
      <div class="split__media">
        <img src="${img("skyline-window-view.webp")}" alt="The Manhattan skyline seen through a tall window" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The nine",
      title: "Where to start",
      lead: "Each of these has a full guide with streets, food, a half-day plan and transit.",
    })}
    <div class="grid grid--3">
      ${[
        {
          href: "soho.html",
          image: "soho-street-night.webp",
          alt: "A SoHo street at night with lit shopfronts",
          kicker: "Manhattan",
          title: "SoHo",
          text: "Cast-iron architecture, cobblestones and the city's densest shopping. Half a day, best on a weekday.",
          meta: "Half a day",
        },
        {
          href: "west-village.html",
          image: "west-village.webp",
          alt: "A brownstone doorway in the West Village",
          kicker: "Manhattan",
          title: "West Village",
          text: "Brownstones, cafés, jazz basements and streets that ignore the grid. An afternoon into evening.",
          meta: "Half a day",
        },
        {
          href: "harlem.html",
          image: "harlem-apollo.webp",
          alt: "The Apollo Theater marquee in Harlem",
          kicker: "Manhattan",
          title: "Harlem",
          text: "The Apollo, 125th Street, soul food and Black cultural history. Uptown and unhurried.",
          meta: "Half a day",
        },
        {
          href: "williamsburg.html",
          image: "williamsburg-brooklyn.webp",
          alt: "The Williamsburg waterfront with Manhattan across the river",
          kicker: "Brooklyn",
          title: "Williamsburg",
          text: "Waterfront views, Saturday food stalls, brunch queues and a loud, young nightlife.",
          meta: "Half a day",
        },
        {
          href: "dumbo.html",
          image: "dumbo-brooklyn.webp",
          alt: "Brooklyn Bridge Park lawn with the Manhattan skyline",
          kicker: "Brooklyn",
          title: "DUMBO",
          text: "Four cobbled blocks between two bridges, with the most photographed view in Brooklyn.",
          meta: "2–3 hours",
        },
        {
          href: "astoria.html",
          image: "astoria-queens.webp",
          alt: "Astoria Park and the Hell Gate bridges",
          kicker: "Queens",
          title: "Astoria",
          text: "Greek bakeries and tavernas, a film museum and a waterfront park with the skyline opposite.",
          meta: "Half a day",
        },
        {
          href: "flushing.html",
          image: "flushing-main-street.webp",
          alt: "A busy street in Flushing, Queens",
          kicker: "Queens",
          title: "Flushing",
          text: "The city's biggest Chinatown: basement food courts, Main Street bakeries and a vast park.",
          meta: "3–4 hours",
        },
        {
          href: "jackson-heights.html",
          image: "jackson-heights-queens.webp",
          alt: "An apartment corner in Jackson Heights, Queens",
          kicker: "Queens",
          title: "Jackson Heights",
          text: "Little India, a taqueria corridor under the 7 train and quiet garden apartment blocks.",
          meta: "2–3 hours",
        },
        {
          href: "upper-west-side.html",
          image: "amnh-facade.webp",
          alt: "The American Museum of Natural History on the Upper West Side",
          kicker: "Manhattan",
          title: "Upper West Side",
          text: "The Natural History museum, the park's west side and Zabar's.",
          meta: "Half a day",
        },
      ]
        .map((n) => mediaCard({ ...n, image: img(n.image) }))
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Choosing",
      title: "How to choose between them",
      lead: "All eight repay a walk. The table is for deciding which one gets your limited morning.",
    })}
    ${table({
      caption: "New York neighbourhoods compared by best use, atmosphere, time needed and subway",
      head: ["Neighbourhood", "Best for", "Vibe", "Time needed", "Subway"],
      rows: [
        [
          "<strong>SoHo</strong>",
          "Architecture and shopping",
          "Busy, photogenic, commercial",
          "3–4 hours",
          "Prince St (N/R/W); Spring St (C/E)",
        ],
        [
          "<strong>West Village</strong>",
          "Cafés, jazz and wandering",
          "Village calm, low-rise, crooked streets",
          "3–4 hours or an evening",
          "W 4 St (A/C/E/B/D/F/M)",
        ],
        [
          "<strong>Harlem</strong>",
          "Music, soul food and history",
          "Residential, proud, unhurried",
          "3–4 hours",
          "125 St (2/3; A/B/C/D)",
        ],
        [
          "<strong>Williamsburg</strong>",
          "Brunch, bars and the waterfront",
          "Young, loud, riverside",
          "3–5 hours",
          "Bedford Av (L)",
        ],
        [
          "<strong>DUMBO</strong>",
          "Bridge views and photography",
          "Small, scenic, cobbled",
          "2–3 hours",
          "High St (A/C); York St (F)",
        ],
        [
          "<strong>Astoria</strong>",
          "Greek food and a local evening",
          "Low-key, residential, hungry",
          "3–4 hours",
          "Astoria–Ditmars Blvd (N/W)",
        ],
        [
          "<strong>Flushing</strong>",
          "Chinese food and the Unisphere",
          "Dense, busy, brilliant for lunch",
          "3–4 hours",
          "Flushing–Main St (7)",
        ],
        [
          "<strong>Jackson Heights</strong>",
          "South Asian and Latin American food",
          "Working neighbourhood, food-first",
          "2–3 hours",
          "Jackson Hts–Roosevelt Av (7/E/F/M/R)",
        ],
      ],
    })}
    <p class="muted" style="margin-top:1.2rem">A word on timing: the Manhattan neighbourhoods are busiest at weekends, the Queens food districts at weekend lunch, and the Brooklyn waterfront whenever the sun is out. Weekday mornings are almost always the calmest.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "By borough",
      title: "Start with a borough",
      lead: "If you would rather plan by area than by neighbourhood, begin with the borough guide.",
    })}
    <div class="grid grid--3">
      ${card({
        kicker: "Borough guide",
        title: "Manhattan",
        text: "Midtown, Lower Manhattan, SoHo, the Village, the Upper East and West Sides and Harlem.",
        foot: '<a class="link-arrow" href="manhattan.html">Open the Manhattan guide</a>',
      })}
      ${card({
        kicker: "Borough guide",
        title: "Brooklyn",
        text: "Williamsburg, DUMBO, Brooklyn Heights, Park Slope, Bushwick and Coney Island.",
        foot: '<a class="link-arrow" href="brooklyn.html">Open the Brooklyn guide</a>',
      })}
      ${card({
        kicker: "Borough guide",
        title: "Queens",
        text: "Astoria, Long Island City, Jackson Heights, Flushing, Forest Hills and the Rockaways.",
        foot: '<a class="link-arrow" href="queens.html">Open the Queens guide</a>',
      })}
      ${card({
        kicker: "Borough guide",
        title: "The Bronx",
        text: "Yankee Stadium, the Grand Concourse, the Bronx Zoo and Arthur Avenue.",
        foot: '<a class="link-arrow" href="bronx.html">Open the Bronx guide</a>',
      })}
      ${card({
        kicker: "Borough guide",
        title: "Staten Island",
        text: "The free ferry, St. George, Snug Harbor and the best view of the Statue of Liberty.",
        foot: '<a class="link-arrow" href="staten-island.html">Open the Staten Island guide</a>',
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Neighbourhood questions", lead: "" })}
    ${faq(faqItems)}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Neighbourhood notes, weekly",
      text: "New openings, quiet corners and the streets worth a detour — one useful New York email a week.",
      source: "neighbourhoods",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Build a day around one neighbourhood",
  text: "Pick your area, add one meal and one walk, and let the rest of the day happen. Our itineraries show how these pieces fit into three, five or seven days.",
  actions: `${btn({ href: "3-days-in-nyc.html", label: "Three-day itinerary" })}${btn({
    href: "food.html",
    label: "Where to eat",
    variant: "outline",
  })}`,
})}

${pageNav({
  prev: { href: "boroughs.html", label: "All boroughs" },
  next: { href: "food.html", label: "Where to eat" },
})}
`,
};
