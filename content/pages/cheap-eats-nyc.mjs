import {
  btn,
  sectionHead,
  pageHero,
  mediaCard,
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
  path: "cheap-eats-nyc.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Cheap Eats in NYC — Good Food Under $10",
  description:
    "Where to eat well for under $10 in New York: slices, bagels, dumplings, tacos, falafel and hot dogs, ten reliable cheap spots and how locals keep the bill down.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/nyc-pizza-slice.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Cheap Eats in NYC — Good Food Under $10",
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
          name: "Can you eat cheaply in New York City?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A bagel breakfast, a slice or taco lunch and a casual dinner costs roughly $45 to $70 a day. The slice, the bagel and the dumpling are the city's cheapest reliable meals.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cheapest meal in New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A plain pizza slice at $4 to $5.50, a bagel with cream cheese at $4.50 to $7, or eight dumplings for about $7. Coffee is $3.50 to $5.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("nyc-pizza-slice.webp"),
  alt: "A New York pizza slice on a paper plate",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "boroughs.html", label: "Boroughs" },
    { href: "cheap-eats-nyc.html", label: "Cheap eats" },
  ],
  eyebrowText: "Food &amp; drink · Boroughs",
  title: "Cheap eats in New York",
  lead: "You do not need to spend much to eat well here. The city's cheapest food is also its most characteristic: a slice, a bagel, a plate of dumplings, a taco eaten standing up.",
  meta: metaItems("Under $10", "10 reliable spots", "All five boroughs"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Start here")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">What $10 still buys</h2>
        <p class="lead">New York is expensive, but cheap food never disappeared. It moved to the counter, the cart and the bakery — and it is often better than the restaurant two doors down.</p>
        <p class="muted">The trick is to eat what the city eats every day rather than what it serves visitors. A plain slice is $4–5.50, a bagel with cream cheese $4.50–7, eight dumplings about $7. Add coffee at $3.50–5 and you can have a good day's eating for the price of one mid-range main course.</p>
        <p class="muted">Prices below are typical 2026 figures and exclude the 8.875% sales tax. They are a guide, not a quote — menus move, and portions vary by neighbourhood.</p>
        ${verifiedNote({ date: "2 November 2026" })}
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("soho-street-night.webp")}" alt="A SoHo street at night, with lit shop windows and cast-iron buildings" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The price list",
      title: "What still costs under $10",
      lead: "Eight orders that stay cheap, and where to find the canonical version of each.",
    })}
    ${table({
      caption: "Typical 2026 prices for cheap New York foods",
      head: ["Order", "Typical price", "Where to find it"],
      rows: [
        ["Plain pizza slice", "$4–5.50", "Joe's Pizza, Greenwich Village"],
        ["Bagel with cream cheese", "$4.50–7 (classic about $5.50)", "Ess-a-Bagel, Midtown East and Flatiron"],
        ["Dumplings", "about $7 for eight", "Vanessa's Dumpling House, Lower East Side and Chinatown"],
        ["Halal cart", "a platter is $12–15; a sandwich is the under-$10 order", "The Halal Guys, W 53rd &amp; 6th, and carts citywide"],
        ["Taco", "$5–6 each", "Los Tacos No. 1, Chelsea Market and Times Square"],
        ["Banh mi", "budget — usually under $10", "Bakery counters in Chinatown and the Lower East Side"],
        ["Falafel sandwich", "$7–9", "Mamoun's Falafel, Greenwich Village"],
        ["Hot dog", "about $8 for the Recession Special (two dogs and a drink)", "Gray's Papaya, Upper West Side"],
      ],
    })}
    ${callout({
      icon: "%",
      title: "Tax and tip change the total",
      text: "Sales tax is 8.875% and is added at the register. At a counter, tipping is optional and a dollar or two in the jar is plenty; at a sit-down restaurant, expect 18–22%.",
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The shortlist",
      title: "Ten cheap spots that earn their queue",
      lead: "Long-running, well-known places rather than discoveries: reliable, fast and priced for people who live here. Not every one is strictly under $10 — the two noodles-and-rice platters run higher — but all are cheap for what they are.",
    })}
    ${table({
      caption: "Ten well-known cheap places to eat in New York City",
      head: ["Place", "Neighbourhood", "Order this", "Typical price"],
      rows: [
        ["<strong>Joe's Pizza</strong>", "Greenwich Village", "A plain slice", "from ~$4.50"],
        ["<strong>Prince Street Pizza</strong>", "SoHo", "Pepperoni square", "from ~$5.50"],
        ["<strong>Ess-a-Bagel</strong>", "Midtown East / Flatiron", "Bagel with cream cheese", "$6–8"],
        ["<strong>Los Tacos No. 1</strong>", "Chelsea Market &amp; Times Square", "Two tacos", "$5–6 each"],
        ["<strong>Vanessa's Dumpling House</strong>", "Lower East Side / Chinatown", "Eight dumplings", "about $7"],
        ["<strong>Mamoun's Falafel</strong>", "Greenwich Village", "Falafel sandwich", "$7–9"],
        ["<strong>Gray's Papaya</strong>", "Upper West Side", "Recession Special: two dogs and a drink", "about $8"],
        ["<strong>Peter Pan Donuts</strong>", "Greenpoint, Brooklyn", "Doughnuts", "about $5"],
        ["<strong>Xi'an Famous Foods</strong>", "Several locations", "Cumin-lamb hand-pulled noodles", "$12–15"],
        ["<strong>The Halal Guys</strong>", "W 53rd &amp; 6th", "Chicken or gyro platter", "$12–15"],
      ],
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__body" data-reveal>
        ${eyebrow("How to do it")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Eat cheaply like a local</h2>
        <p class="lead">Five habits that keep a food day under budget without making it feel like a compromise.</p>
        <ul class="feature-list" style="margin-top:2rem">
          <li>
            <span class="feature-list__num">01</span>
            <div>
              <h4>Make lunch the main meal</h4>
              <p>Counters and neighbourhood restaurants charge less at midday, and many run a lunch special. Eat properly at 1pm and keep dinner light.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">02</span>
            <div>
              <h4>Eat where people work and live</h4>
              <p>Midtown office blocks at lunchtime, outer-borough high streets at any time. Prices fall as soon as you leave the tourist axis.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">03</span>
            <div>
              <h4>Order by the piece, not the combo</h4>
              <p>A slice, two tacos, eight dumplings, a falafel sandwich. The piecemeal order is usually the cheapest and the freshest.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">04</span>
            <div>
              <h4>Drink tap water</h4>
              <p>New York's tap water is free and good. A $5 soft drink or bottled water is the easiest way to double the cost of lunch.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">05</span>
            <div>
              <h4>Carry some cash</h4>
              <p>Most places take cards, but a few old-school counters and market stalls still prefer cash. Twenty dollars is enough for a day of eating.</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="split__media">
        <img src="${img("nyc-bagel.webp")}" alt="A New York bagel shop storefront" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "By neighbourhood",
      title: "Where to head for a cheap meal",
      lead: "You never need to cross the city for a good cheap lunch. Pick the area you are already in.",
    })}
    ${table({
      caption: "Cheap eats by neighbourhood in New York City",
      head: ["Area", "What to eat", "Where"],
      rows: [
        ["Greenwich Village", "Slice and falafel", "Joe's Pizza, Mamoun's Falafel"],
        ["SoHo", "Pepperoni square", "Prince Street Pizza"],
        ["Lower East Side / Chinatown", "Dumplings", "Vanessa's Dumpling House"],
        ["Midtown", "Tacos and halal", "Los Tacos No. 1, The Halal Guys"],
        ["Upper West Side", "Hot dogs", "Gray's Papaya"],
        ["Greenpoint, Brooklyn", "Doughnuts", "Peter Pan Donuts"],
        ["Queens", "Noodles, dumplings and street food", "Flushing and Jackson Heights"],
      ],
    })}
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Cheap eats, answered", lead: "" })}
    ${faq([
      {
        q: "Can you eat cheaply in New York City?",
        a: '<p>Yes. A bagel breakfast, a slice or taco lunch and a casual dinner costs roughly $45–70 a day. That is food only; our <a href="budget.html">budget guide</a> puts a whole budget day at $130–200 including transport and one paid attraction.</p>',
      },
      {
        q: "What is the cheapest meal in New York?",
        a: "<p>A plain slice ($4–5.50), a bagel with cream cheese ($4.50–7) or eight dumplings (about $7). Coffee is $3.50–5, so breakfast can cost less than $10.</p>",
      },
      {
        q: "Do cheap places take cards?",
        a: "<p>Most do, including the counter spots on this page. A few old-school places are cash-first, so carry $20–40 rather than relying entirely on your phone.</p>",
      },
      {
        q: "Is street food safe to eat?",
        a: "<p>New York's food carts are regulated and busy, and turnover keeps the food fresh. Choose the cart with a queue at lunchtime. Avoid anything that has clearly been sitting out.</p>",
      },
      {
        q: "Where can I eat cheaply near Times Square?",
        a: "<p>Los Tacos No. 1 has a Times Square branch with tacos at $5–6 each, and The Halal Guys cart at 53rd and Sixth is a few blocks away. Both are far cheaper than the restaurants on the square itself.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Keep eating",
      title: "Where to go next",
      lead: "Cheap food is one half of the picture. These guides cover the rest of it.",
    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "food.html",
        image: img("nyc-bagel-cream-cheese.webp"),
        alt: "A New York bagel spread with cream cheese",
        kicker: "Food &amp; drink",
        title: "What to eat in New York",
        text: "Bagels, pastrami, tacos and dumplings — prices, institutions and neighbourhoods.",
        meta: "Full food guide",
      })}
      ${mediaCard({
        href: "best-pizza-nyc.html",
        image: img("nyc-pizza-slice.webp"),
        alt: "A New York pizza slice on a paper plate",
        kicker: "Food &amp; drink",
        title: "The best pizza in New York",
        text: "Nine pizzerias worth the trip, the four styles and how to order like a local.",
        meta: "Pizza guide",
      })}
      ${mediaCard({
        href: "budget.html",
        image: img("fifth-avenue-cab.webp"),
        alt: "A yellow taxi on a Manhattan avenue",
        kicker: "Planning",
        title: "The New York budget guide",
        text: "Daily costs, hotel bands and the money-saving tactics that actually work.",
        meta: "Budget guide",
      })}
    </div>
    <p class="muted" style="margin-top:1.6rem">More by area: <a href="west-village.html">West Village</a> for slices, falafel and café lunches, and <a href="neighbourhoods.html">the neighbourhood guides</a> for where to walk it off.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "One good New York food tip a week",
      text: "Join the list for a short weekly email on what is worth eating, which queues are worth joining and where the prices have not yet gone silly.",
      source: "cheap-eats",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Eat well without blowing the budget",
  text: "Cheap food is a planning decision as much as a menu one. Work out the daily numbers before you arrive.",
  actions: `${btn({ href: "budget.html", label: "Read the budget guide" })}${btn({
    href: "best-bagels-nyc.html",
    label: "Best bagels in NYC",
    variant: "outline",
  })}`,
})}

${pageNav({
  prev: { href: "best-pizza-nyc.html", label: "Best pizza in NYC" },
  next: { href: "best-bagels-nyc.html", label: "Best bagels in NYC" },
})}
`,
};
