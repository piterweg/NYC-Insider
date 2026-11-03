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
  path: "best-bagels-nyc.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Best Bagels in New York City",
  description:
    "The best bagels in New York: how a New York bagel is made, nine places to eat one, what to order, price bands and how to order without a tourist's hesitation.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/nyc-bagel.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Best Bagels in New York City",
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
          name: "What makes a New York bagel different?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is hand-rolled, boiled before it is baked, and dense and chewy rather than fluffy. The boil sets the crust and gives the bagel its chew.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a bagel cost in New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A bagel with cream cheese is typically $4.50 to $7, with the classic around $5.50. A bagel with lox is a different order and usually costs $16 to $22.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("nyc-bagel.webp"),
  alt: "The storefront of a New York bagel shop",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "boroughs.html", label: "Boroughs" },
    { href: "best-bagels-nyc.html", label: "Best bagels" },
  ],
  eyebrowText: "Food &amp; drink · Boroughs",
  title: "The best bagels in New York",
  lead: "A New York bagel is breakfast, a hangover cure and a civic argument in one. Here is how it is made, where to eat the best ones and how to order without hesitating at the counter.",
  meta: metaItems("9 places", "Bagel $4.50–7", "Lox bagel $16–22"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why the fuss")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">A breakfast with a standard</h2>
        <p class="lead">The bagel is the one food New Yorkers will argue about before they have had coffee. It is also the cheapest way to eat like a local.</p>
        <p class="muted">A bagel with cream cheese costs $4.50–7, with the classic around $5.50. Add coffee at $3.50–5 and breakfast is done for under $10. A bagel with lox is a different and more expensive order — $16–22 — and worth doing once, at a proper fish counter rather than a chain.</p>
        <p class="muted">The difference between a good bagel and a bad one is mostly technique, and mostly invisible until you bite it: a thin, blistered crust and a dense, chewy crumb. Once you have had a good one, the supermarket version stops counting.</p>
        ${verifiedNote({ date: "2 November 2026" })}
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("fifth-avenue-cab.webp")}" alt="A yellow taxi driving along a Manhattan avenue" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "What makes it a New York bagel",
      title: "Four things that matter",
      lead: "The recipe is short. The technique is not, which is why the best shops are still family operations.",
    })}
    <div class="grid grid--2">
      ${card({
        kicker: "Step one",
        title: "Boiled before baked",
        text: "The dough is shaped, rested and dropped into boiling water before it goes into the oven. The boil sets the crust, gives the bagel its shine and creates the chew.",
      })}
      ${card({
        kicker: "The shape",
        title: "Hand-rolled and dense",
        text: "A proper bagel is rolled by hand and baked to a compact, heavy ring — not a soft bread roll with a hole. If it squashes flat when you press it, it is not the real thing.",
      })}
      ${card({
        kicker: "The topping",
        title: "The schmear",
        text: "Cream cheese is spread generously, by the ounce, not scraped on. Scallion, vegetable and lox spreads are all standard; butter is a legitimate alternative.",
      })}
      ${card({
        kicker: "The upgrade",
        title: "The fish counter",
        text: "Lox, whitefish and sable turn a cheap breakfast into a $16–22 order. That is a different meal, eaten slowly, and worth it at least once.",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Where to eat",
      title: "Nine places worth the detour",
      lead: "A mix of counters, appetizing shops and neighbourhood institutions. Prices are banded — only the bagel with cream cheese has a hard verified figure.",
    })}
    ${table({
      caption: "Nine well-known bagel places in New York with what to order and a price band",
      head: ["Place", "Neighbourhood", "What to order", "Price"],
      rows: [
        ["<strong>Ess-a-Bagel</strong>", "Midtown East / Flatiron", "Bagel with cream cheese", "$6–8"],
        ["<strong>Russ &amp; Daughters</strong>", "Lower East Side", "Bagel with lox at the counter", "premium (lox bagel $16–22)"],
        ["<strong>Absolute Bagels</strong>", "Upper West Side", "A warm bagel with cream cheese", "budget"],
        ["<strong>Zabar's</strong>", "Upper West Side", "Bagel and smoked fish from the appetizing counter", "moderate"],
        ["<strong>Kossar's Bagels &amp; Bialys</strong>", "Lower East Side", "A bagel and a bialy", "budget"],
        ["<strong>Tompkins Square Bagels</strong>", "East Village", "A bagel sandwich, made to order", "budget–moderate"],
        ["<strong>Apollo Bagels</strong>", "East Village", "A bagel sandwich", "budget–moderate"],
        ["<strong>Murray's Bagels</strong>", "Greenwich Village", "Bagel with a generous schmear", "budget"],
        ["<strong>Bagel Hole</strong>", "Park Slope, Brooklyn", "An old-school bagel, no fuss", "budget"],
      ],
    })}
    ${callout({
      icon: "$",
      title: "Bands, not promises",
      text: "Budget means a bagel with cream cheese stays under about $10, moderate means a filled bagel sandwich, and premium means a lox or fish-counter order at $16–22. Prices move; confirm at the counter.",
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__body" data-reveal>
        ${eyebrow("At the counter")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">How to order</h2>
        <p class="lead">Bagel shops run on speed and shorthand. Five phrases and habits will get you through the queue.</p>
        <ul class="feature-list" style="margin-top:2rem">
          <li>
            <span class="feature-list__num">01</span>
            <div>
              <h4>Learn the word "schmear"</h4>
              <p>Cream cheese. "A bagel with a schmear" is a bagel with cream cheese. If you want it hollowed out to hold more filling, ask for it scooped.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">02</span>
            <div>
              <h4>Say whether you want it toasted</h4>
              <p>Bagels are served untoasted by default. If you want it toasted, say so when you order — not after it has been cut.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">03</span>
            <div>
              <h4>Order at the counter and step aside</h4>
              <p>Queue, order, pay, then move down to collect. Standing at the register to decide holds up the whole line, which is the one thing locals mind.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">04</span>
            <div>
              <h4>Expect lox to come from the fish counter</h4>
              <p>At an appetizing shop, the bagel and the fish are separate purchases. Order the bagel, then point at the fish you want and let them weigh it.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">05</span>
            <div>
              <h4>Eat it while it is warm</h4>
              <p>A bagel is at its best within the first 20 minutes. If you are taking it away, skip the toaster and get it fresh.</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="split__media">
        <img src="${img("nyc-bagel-cream-cheese.webp")}" alt="A sesame bagel split open and spread with cream cheese" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "By neighbourhood",
      title: "Where to go, depending on where you are",
      lead: "Bagel shops are dense enough that you rarely need to cross the city. These are the reliable names by area.",
    })}
    ${table({
      caption: "Bagel places by neighbourhood in New York City",
      head: ["Area", "Best for", "Where to go", "Subway"],
      rows: [
        ["Midtown East / Flatiron", "A classic bagel breakfast", "Ess-a-Bagel", "6"],
        ["Lower East Side", "Bagel with lox, old-school", "Russ &amp; Daughters, Kossar's", "F / J / M / Z"],
        ["Upper West Side", "Warm bagels and appetizing", "Absolute Bagels, Zabar's", "1 / B / C"],
        ["East Village", "Bagel sandwiches", "Tompkins Square Bagels, Apollo Bagels", "L"],
        ["Greenwich Village", "A generous schmear", "Murray's Bagels", "A / C / E, 1"],
        ["Park Slope, Brooklyn", "An old-school neighbourhood bagel", "Bagel Hole", "B / Q"],
      ],
    })}
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Bagel questions, answered", lead: "" })}
    ${faq([
      {
        q: "What makes a New York bagel different?",
        a: "<p>It is hand-rolled, boiled before it is baked, and baked to a dense, chewy ring. The boil sets the crust and gives the chew; the water is debated, but the technique is not.</p>",
      },
      {
        q: "How much does a bagel cost?",
        a: "<p>A bagel with cream cheese is $4.50–7, with the classic around $5.50. A bagel with lox is $16–22. Coffee is $3.50–5, so a bagel breakfast is usually under $10.</p>",
      },
      {
        q: "Is a bagel served toasted?",
        a: "<p>Not by default. Ask if you want it toasted when you order. Many purists would rather have it fresh and untoasted, straight from the shop.</p>",
      },
      {
        q: "What is a schmear?",
        a: "<p>Cream cheese — and a generous spread of it. &quot;Scooped&quot; means the bagel has been hollowed out, usually to make room for more filling.</p>",
      },
      {
        q: "Where can I get a good bagel near Times Square?",
        a: "<p>Ess-a-Bagel's Midtown East and Flatiron shops are the reliable nearby choice. For the full experience, go to an appetizing shop on the Lower East Side instead.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Keep eating",
      title: "Where to go next",
      lead: "Bagels are one chapter of the city's food story. These guides cover the rest.",
    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "food.html",
        image: img("nyc-pizza-slice.webp"),
        alt: "A New York pizza slice on a paper plate",
        kicker: "Food &amp; drink",
        title: "What to eat in New York",
        text: "Bagels, pastrami, tacos and dumplings — prices, institutions and neighbourhoods.",
        meta: "Full food guide",
      })}
      ${mediaCard({
        href: "best-pizza-nyc.html",
        image: img("nyc-pizza-slice.webp"),
        alt: "A slice of New York pizza",
        kicker: "Food &amp; drink",
        title: "The best pizza in New York",
        text: "Nine pizzerias worth the trip, the four styles and how to order like a local.",
        meta: "Pizza guide",
      })}
      ${mediaCard({
        href: "budget.html",
        image: img("fifth-avenue-cab.webp"),
        alt: "A yellow cab on a Manhattan avenue",
        kicker: "Planning",
        title: "The New York budget guide",
        text: "Daily costs, hotel bands and the money-saving tactics that actually work.",
        meta: "Budget guide",
      })}
    </div>
    <p class="muted" style="margin-top:1.6rem">More by area: <a href="manhattan.html">Manhattan</a> for the East Village and Upper West Side shops, and <a href="neighbourhoods.html">the neighbourhood guides</a> for what to do afterwards.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "One good New York food tip a week",
      text: "Join the list for a short weekly email on what is worth eating, which queues are worth joining and where the prices have not yet gone silly.",
      source: "best-bagels",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Start the day the New York way",
  text: "A bagel is the cheapest good breakfast in the city. Pair it with a walk and you have a morning for under $10.",
  actions: `${btn({ href: "food.html", label: "Read the food guide" })}${btn({
    href: "cheap-eats-nyc.html",
    label: "More cheap eats",
    variant: "outline",
  })}`,
})}

${pageNav({
  prev: { href: "cheap-eats-nyc.html", label: "Cheap eats in NYC" },
  next: { href: "food.html", label: "Food &amp; drink" },
})}
`,
};
