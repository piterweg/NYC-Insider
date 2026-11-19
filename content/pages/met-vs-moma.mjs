import { pageHero, sectionHead, table, callout, faq, newsletter, pageNav, img, metaItems, eyebrow, btn } from "../components.mjs";

export default {
  path: "met-vs-moma.html",
  navSection: "things-to-do",
  bodyClass: "page-inner",
  title: "The Met vs MoMA: Which Museum Should You Visit?",
  description:
    "The Met or MoMA? Both cost $30, but they offer very different days. Compare collection, scale, time needed and which one suits a short New York trip.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/met-museum.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "The Met vs MoMA: which museum should you visit?",
      description: "A practical comparison of the Metropolitan Museum of Art and MoMA for a New York trip.",
      author: { "@type": "Organization", name: "NYCTrove" },
      datePublished: "2026-11-19",
      dateModified: "2026-11-19",
    },
  ],
  render: () => `
${pageHero({
  image: img("met-museum.webp"),
  alt: "The Metropolitan Museum of Art on Fifth Avenue",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "attractions.html", label: "Attractions" },
    { href: "met-vs-moma.html", label: "Met vs MoMA" },
  ],
  eyebrowText: "Museums",
  title: "The Met or MoMA?",
  lead: "Both cost about $30 for an adult ticket. The choice is not about price — it is about whether you want five thousand years of art or the last century of it.",
  meta: metaItems("$30 each", "Half-day vs full-day", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Side by side", title: "Two very different museums", lead: "Prices are adult general admission, checked November 2026." })}
    ${table({
      caption: "The Met vs MoMA",
      head: ["", "The Met", "MoMA"],
      rows: [
        ["Adult admission", "$30", "$30"],
        ["Collection", "5,000 years, global", "Modern and contemporary, 1880s onward"],
        ["Size", "Huge — pick two or three wings", "Manageable in three to four hours"],
        ["Time needed", "Half a day to a full day", "Three to four hours"],
        ["Location", "Fifth Avenue at 82nd Street", "53rd Street, Midtown"],
        ["Best for", "Ancient Egypt, European painting, American art", "Van Gogh, Warhol, design and photography"],
        ["Free entry", "Pay-what-you-wish for NY residents", "Under-16s free"],
      ],
    })}
    <p class="small muted" style="margin-top:1rem">Hours and admission rules change; check each museum's site for the day you visit.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Choose", title: "Pick by the day you want", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "Choose the Met if…", text: "You want the big, once-in-a-lifetime museum day: Egyptian temple, European masters, roof views and a walk in Central Park afterwards.", dark: false })}
      ${callout({ icon: "◆", title: "Choose MoMA if…", text: "You have half a day and want modern art without museum fatigue: Van Gogh, Warhol, photography and design in a compact building.", dark: false })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Practical", title: "What to know before you go", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>Do not try to “do” the Met in two hours</h4><p>It is one of the largest museums in the world. Pick two or three wings and accept that you will not see everything.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>Book timed entry</h4><p>Both museums use timed tickets at busy periods. Book the first slot of the day for quieter galleries.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>Check what is closed</h4><p>Galleries rotate and some wings close for construction. Check the current closures before buying a ticket.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>Combine with the neighbourhood</h4><p>The Met pairs with Central Park; MoMA pairs with Midtown and Rockefeller Center.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Met vs MoMA questions", lead: "" })}
    ${faq([
      { q: "Is the Met or MoMA better for a first trip?", a: "<p>The Met for scale and range; MoMA if you have half a day and prefer modern art. First-time visitors often choose the Met.</p>" },
      { q: "Can I do both in one day?", a: "<p>You can, but it is a long day. Two or three hours at each is a taster, not a proper visit.</p>" },
      { q: "Which is cheaper?", a: "<p>Both are $30 for adults. The Met has pay-what-you-wish admission for New York residents; MoMA is free for under-16s.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One useful New York email a week", text: "Museum openings, closures and the odd quiet hour worth planning around.", source: "met-vs-moma" })}
  </div>
</section>

${pageNav({ prev: { href: "attractions.html", label: "Attractions" }, next: { href: "moma.html", label: "MoMA guide" } })}
`,
};
