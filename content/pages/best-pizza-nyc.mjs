import {
  btn,
  sectionHead,
  pageHero,
  mediaCard,
  card,
  callout,
  table,
  faq,
  newsletter,
  ctaBand,
  pageNav,
  img,
  metaItems,
  eyebrow,
  verifiedNote,
} from "../components.mjs";

export default {
  path: "best-pizza-nyc.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Best Pizza in NYC — Where to Eat It",
  description:
    "The best pizza in New York: how the slice, square and coal-fired styles differ, nine places worth the trip, what to order and how to eat it like a local.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/nyc-pizza-slice.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Best Pizza in NYC — Where to Eat It",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a pizza slice cost in New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A plain slice generally costs $4 to $5.50, and a whole 18-inch pie runs about $28 to $38. Prices vary by neighbourhood and shop.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a slice and a square?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A slice is cut from a large thin round pie and eaten folded. A square, or Sicilian, is baked in a rectangular pan with a thicker base, often with the sauce on top.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("nyc-pizza-slice.webp"),
  alt: "A New York-style pizza slice on a paper plate",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "boroughs.html", label: "Boroughs" },
    { href: "best-pizza-nyc.html", label: "Best pizza" },
  ],
  eyebrowText: "Food &amp; drink · Boroughs",
  title: "The best pizza in New York",
  lead: "New York did not invent pizza, but it turned it into a daily habit: a slice on a paper plate, eaten standing up, for less than the price of a coffee. Here is how the styles differ and how to order without looking like a visitor.",
  meta: metaItems("9 places", "Slice $4–5.50", "All five boroughs"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why it is its own thing")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">A city built on the slice</h2>
        <p class="lead">Pizza in New York is less a cuisine than a format: big, thin, foldable and sold by the slice at almost any hour.</p>
        <p class="muted">The city's pizzerias fall into a few families — the neighbourhood slice counter, the Sicilian square, the coal-fired institution and the wood-fired Neapolitan newcomer — and each has its own rules. What they share is scale: a whole 18-inch pie usually costs $28–38, a plain slice $4–5.50, which is why pizza became the city's default lunch.</p>
        <p class="muted">Geography matters too. The famous places are scattered across Manhattan, Brooklyn and Queens, and eating very well without leaving Manhattan is easy — but the pilgrimage is the point.</p>
        ${verifiedNote({ date: "2 November 2026" })}
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("soho-street-night.webp")}" alt="A SoHo street at night, with cast-iron buildings and shop windows lit up" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Know what you are ordering",
      title: "The four styles",
      lead: "Names on menus are not consistent. What matters is the shape, the oven and the way it is served.",
    })}
    <div class="grid grid--4">
      ${card({
        kicker: "The default",
        title: "The slice",
        text: "Large, thin and wide, cut from a round pie and sold by the piece. Folded lengthways and eaten on the move; $4–5.50.",
      })}
      ${card({
        kicker: "Thick and rectangular",
        title: "Square / Sicilian",
        text: "Baked in a rectangular pan, with a thick, airy base and crisp bottom. Often the sauce goes on top of the cheese.",
      })}
      ${card({
        kicker: "Blistered and thin",
        title: "Coal-fired",
        text: "Very thin, charred at the edges and baked fast at high heat. Usually a whole pie, and usually worth the queue.",
      })}
      ${card({
        kicker: "Soft and puffed",
        title: "Neapolitan",
        text: "Wood-fired, softer and wetter in the centre, with a puffed rim. Whole pies only, ideally with a knife and fork.",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Where to eat",
      title: "Nine places worth planning around",
      lead: "A mix of counter stools, old institutions and one-off destinations. No ranking — pizza arguments are endless, and these are all good at what they do.",
    })}    ${table({
      caption: "Nine well-known pizzerias in New York with what to order and a price band",
      head: ["Place", "Neighbourhood", "What to order", "Price"],
      rows: [
        ["<strong>Joe's Pizza</strong>", "Greenwich Village, Manhattan", "A plain slice, eaten standing up", "slice from ~$4.50"],
        ["<strong>Prince Street Pizza</strong>", "SoHo, Manhattan", "Pepperoni square", "square from ~$5.50"],
        ["<strong>Juliana's Pizza</strong>", "DUMBO, Brooklyn", "Coal-fired whole pie, classic or white", "moderate"],
        ["<strong>Grimaldi's Pizzeria</strong>", "DUMBO, Brooklyn", "Coal-fired whole pie under the bridge", "moderate"],
        ["<strong>L&amp;B Spumoni Gardens</strong>", "Bensonhurst, Brooklyn", "Sicilian square with sauce on top, then spumoni", "budget"],
        ["<strong>Roberta's</strong>", "Bushwick, Brooklyn", "Wood-fired pie, eaten in the garden", "moderate"],
        ["<strong>Paulie Gee's</strong>", "Greenpoint, Brooklyn", "Wood-fired pie; the Slice Shop for a slice", "moderate"],
        ["<strong>Lombardi's</strong>", "Little Italy / SoHo, Manhattan", "Coal-fired pie from one of the city's oldest pizzerias", "moderate"],
        ["<strong>Di Fara Pizza</strong>", "Midwood, Brooklyn", "Square or round pie, with a long wait", "moderate"],
      ],
    })}
    ${callout({
      icon: "$",
      title: "Two prices, one warning",
      text: "The slice and pie prices are typical 2026 figures; the bands are honest ranges, not quotes. Menus move, and a wood-fired pie is a different purchase from a counter slice. Confirm at the door.",
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__body" data-reveal>
        ${eyebrow("How to order")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Order like a local</h2>
        <p class="lead">There is no secret handshake, but there is a rhythm. These five habits will get you a better slice and a shorter wait.</p>
        <ul class="feature-list" style="margin-top:2rem">
          <li>
            <span class="feature-list__num">01</span>
            <div>
              <h4>Order at the counter, not the table</h4>
              <p>At a slice shop you queue, order and carry your own food. Table service means a whole-pie restaurant — slower, and a different experience.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">02</span>
            <div>
              <h4>Ask for a fresh slice if you want it hot</h4>
              <p>A "regular" slice comes from a pie already on the counter and gets reheated. If you want one straight from the oven, ask for a fresh slice.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">03</span>
            <div>
              <h4>Fold it lengthways</h4>
              <p>The fold keeps the cheese on and lets you eat with one hand. If the slice collapses, it needed another minute.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">04</span>
            <div>
              <h4>Put your name down for a whole pie</h4>
              <p>Coal-fired and wood-fired places take no reservations; expect 20–40 minutes at peak times. Give a name, take a walk, come back when they call it.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">05</span>
            <div>
              <h4>Tip the counter, not the table</h4>
              <p>A dollar or two in the jar is normal at a slice counter. At a sit-down pizzeria, tip 18–22% like any other restaurant.</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="split__media">
        <img src="${img("nyc-pizza-slice.webp")}" alt="A slice of New York pizza on a paper plate, ready to be folded" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "By neighbourhood",
      title: "Where to go, depending on where you are",
      lead: "You never need to cross the city for a good slice. Match the area to the style and save the long ride for the places that deserve it.",
    })}
    ${table({
      caption: "Pizza by neighbourhood in New York City",
      head: ["Area", "Best for", "Where to go", "Subway"],
      rows: [
        ["Greenwich Village", "A quick, classic slice", "Joe's Pizza", "A / C / E, 1"],
        ["SoHo and Little Italy", "Squares and old-school pies", "Prince Street Pizza, Lombardi's", "R / W, C / E"],
        ["DUMBO, Brooklyn", "Coal-fired whole pies and the bridge view", "Juliana's, Grimaldi's", "A / C, F"],
        ["Bushwick, Brooklyn", "Wood-fired pies and a garden", "Roberta's", "L"],
        ["Greenpoint, Brooklyn", "Wood-fired pies and a slice shop", "Paulie Gee's", "G"],
        ["Bensonhurst, Brooklyn", "Sicilian squares with sauce on top", "L&amp;B Spumoni Gardens", "D"],
        ["Midwood, Brooklyn", "A pilgrimage and a long wait", "Di Fara Pizza", "B / Q"],
      ],
    })}
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Pizza questions, answered", lead: "" })}
    ${faq([
      {
        q: "Is New York pizza really better than pizza elsewhere?",
        a: "<p>It is different rather than objectively better. The slice format — large, thin, foldable and cheap — makes everyday pizza possible in a way most cities cannot match, and the best coal-fired and wood-fired places are world-class.</p>",
      },
      {
        q: "How much should I pay for a slice?",
        a: "<p>A plain slice is typically $4–5.50 in 2026, and a whole 18-inch pie $28–38. A specialty square or a wood-fired pie costs more. Anything far above that pays for the address.</p>",
      },
      {
        q: "What is the difference between a slice and a square?",
        a: "<p>A slice is cut from a large thin round pie and folded. A square, or Sicilian, is baked in a rectangular pan with a thicker base, often with the sauce over the cheese.</p>",
      },
      {
        q: "Do I need to book a table?",
        a: "<p>Slice counters and most pizzerias are walk-in only. The coal-fired and wood-fired destinations do not take reservations either; you queue and wait 20–40 minutes at busy times. Going off-peak is the only real trick.</p>",
      },
      {
        q: "Which pizza place is closest to the tourist sights?",
        a: "<p>Joe's in Greenwich Village is a short walk from Washington Square Park, and Prince Street Pizza is in the middle of SoHo. For the Brooklyn Bridge, Juliana's and Grimaldi's are both in DUMBO.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Keep eating",
      title: "Where to go next",
      lead: "Pizza is one chapter. The rest of the city's food is just as specific, and just as cheap if you know where to look.",
    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "food.html",
        image: img("nyc-bagel-cream-cheese.webp"),
        alt: "A New York bagel spread with cream cheese",
        kicker: "Food &amp; drink",
        title: "What to eat in New York",
        text: "Bagels, pastrami, tacos and dumplings — the prices, the institutions and the neighbourhoods.",
        meta: "Full food guide",
      })}
      ${mediaCard({
        href: "brooklyn.html",
        image: img("brooklyn-bridge-park.webp"),
        alt: "The Brooklyn Bridge seen from Brooklyn Bridge Park",
        kicker: "Borough",
        title: "Brooklyn",
        text: "DUMBO, Williamsburg and Bushwick — the borough with the strongest pizza reputation.",
        meta: "Borough guide",
      })}
      ${mediaCard({
        href: "queens.html",
        image: img("queens-astoria.webp"),
        alt: "The Manhattan skyline seen from Astoria, Queens",
        kicker: "Borough",
        title: "Queens",
        text: "The city's most diverse food borough, from Flushing to Jackson Heights.",
        meta: "Borough guide",
      })}
    </div>
    <p class="muted" style="margin-top:1.6rem">Two neighbourhood guides pair well: <a href="soho.html">SoHo</a> for Prince Street and Lombardi's, and <a href="williamsburg.html">Williamsburg</a> for the Brooklyn pizza belt.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "One good New York food tip a week",
      text: "Join the list for a short weekly email on what is worth eating, which queues are worth joining, and what has just opened.",
      source: "best-pizza",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Build a food day around the city",
  text: "Pizza in the afternoon, a market in the morning and a proper dinner at night — the city rewards eating on the move.",
  actions: `${btn({ href: "food.html", label: "Read the food guide" })}${btn({
    href: "boroughs.html",
    label: "Explore the boroughs",
    variant: "outline",
  })}`,
})}

${pageNav({
  prev: { href: "food.html", label: "Food &amp; drink" },
  next: { href: "brooklyn.html", label: "Brooklyn" },
})}
`,
};
