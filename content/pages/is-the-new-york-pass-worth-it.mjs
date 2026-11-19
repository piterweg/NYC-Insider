import { pageHero, sectionHead, table, callout, faq, newsletter, pageNav, img, metaItems, btn } from "../components.mjs";

export default {
  path: "is-the-new-york-pass-worth-it.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Is the New York Pass Worth It? What the Name Means",
  description:
    "New York Pass is the old name for Go City's All-Inclusive pass. Compare CityPASS, Explorer, Essentials and All-Inclusive prices and when each pays off.",
  priority: "0.85",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Is the New York Pass worth it?",
      description: "A guide to the New York pass names, current prices and the break-even for each product.",
      author: { "@type": "Organization", name: "NYCTrove" },
      datePublished: "2026-11-19",
      dateModified: "2026-11-19",
    },
  ],
  render: () => `
${pageHero({
  image: img("manhattan-skyline-night.webp"),
  alt: "The Manhattan skyline at night",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "passes.html", label: "Passes" },
    { href: "is-the-new-york-pass-worth-it.html", label: "Is it worth it?" },
  ],
  eyebrowText: "Passes",
  title: "Is the New York Pass worth it?",
  lead: "First, the name: “New York Pass” is the old brand for what Go City now sells as its All-Inclusive pass. The current choice is between CityPASS, Go City Explorer, Essentials and All-Inclusive.",
  meta: metaItems("CityPASS $151", "Explorer from $89", "All-Inclusive from $169", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The names", title: "What you are actually buying", lead: "Prices are adult starting prices, checked November 2026." })}
    ${table({
      caption: "New York pass products",
      head: ["Product", "From", "How it works", "Best for"],
      rows: [
        ["CityPASS", "$149 + $2", "5 attractions from 10, 9 days", "Five expensive sights"],
        ["Go City Explorer", "$89", "2–10 attraction choices", "Three or four paid sights"],
        ["Go City Essentials", "$99", "1 observation deck + 2 attractions", "A deck and two museums"],
        ["Go City All-Inclusive", "$169", "1–10 consecutive days, unlimited entry", "Heavy sightseeing days"],
      ],
    })}
    <p class="small muted" style="margin-top:1rem">The old “New York Pass” product is no longer sold under that name; Go City's All-Inclusive is its successor. Check the operator before buying — inclusions and prices change.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Break-even", title: "The only question that matters", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "CityPASS wins for five", text: "Five expensive sights — Empire State, Top of the Rock, Edge, the 9/11 Museum and the Statue ferry — cost about $181 at the gate; CityPASS is about $151.", dark: false })}
      ${callout({ icon: "◆", title: "All-Inclusive needs a busy day", text: "At $169 for one day, the all-inclusive pass only makes sense if you would genuinely pay for several sights that day. Most visitors do not.", dark: false })}
    </div>
    <p style="margin-top:1.2rem"><a class="btn" href="passes.html#calculator">Run your own list</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Practical", title: "How to decide in five minutes", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>Write down the paid sights</h4><p>Only the ones you would visit without a pass. Free sights do not count towards the break-even.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>Add their gate prices</h4><p>Use our <a href="nyc-attraction-price-index.html">checked price data</a> for New York attractions, then compare with each pass price.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>Check the number of days</h4><p>An all-inclusive pass rewards two or more paid sights a day. If you plan one big sight per day, a fixed bundle is usually better.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>Do not buy before the list</h4><p>Buying a pass first and “using it up” is how people end up paying for attractions they never wanted.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "New York Pass questions", lead: "" })}
    ${faq([
      { q: "Does the New York Pass still exist?", a: "<p>Not as a separate product. Go City now sells the All-Inclusive pass, which is the successor to the old New York Pass brand.</p>" },
      { q: "Is it worth it for three days?", a: "<p>Only if you would visit at least two paid attractions per day. For one or two big sights a day, CityPASS or Explorer usually wins.</p>" },
      { q: "Is CityPASS better?", a: "<p>For five expensive attractions, usually yes. For three or four sights, Explorer can be cheaper. Run the numbers on your list.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One useful New York email a week", text: "Pass price changes and the occasional break-even worth knowing.", source: "is-new-york-pass-worth-it" })}
  </div>
</section>

${pageNav({ prev: { href: "passes.html", label: "Passes compared" }, next: { href: "passes.html#calculator", label: "Calculator" } })}
`,
};
