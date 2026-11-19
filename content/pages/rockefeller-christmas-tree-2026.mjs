import { pageHero, sectionHead, table, callout, faq, newsletter, pageNav, img, metaItems, btn } from "../components.mjs";

export default {
  path: "rockefeller-christmas-tree-2026.html",
  navSection: "whats-on",
  bodyClass: "page-inner",
  title: "Rockefeller Christmas Tree 2026: Dates and Tips",
  description:
    "The 2026 Rockefeller tree is a 76-foot Norway spruce from West Edmeston, lit on 2 December and on view through mid-January 2027. Visiting tips and timings.",
  priority: "0.85",
  changefreq: "weekly",
  ogImage: "assets/img/christmas-gifts-snow.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Rockefeller Christmas Tree 2026: dates and visiting tips",
      description: "Dates, location and practical advice for the 2026 Rockefeller Center Christmas Tree.",
      author: { "@type": "Organization", name: "NYCTrove" },
      datePublished: "2026-11-19",
      dateModified: "2026-11-19",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When is the Rockefeller Christmas Tree lit in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 2026 tree is illuminated on Wednesday 2 December 2026, during the annual lighting ceremony, and remains on view through mid-January 2027.",
          },
        },
        {
          "@type": "Question",
          name: "How tall is the 2026 Rockefeller Christmas Tree?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 2026 tree is a 76-foot Norway spruce from West Edmeston, New York, decorated with more than 50,000 multicoloured LED lights and a Swarovski star.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("christmas-gifts-snow.webp"),
  alt: "Holiday lights and snow in New York at Christmas",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "whats-on.html", label: "What's on" },
    { href: "rockefeller-christmas-tree-2026.html", label: "Rockefeller tree 2026" },
  ],
  eyebrowText: "Christmas 2026",
  title: "The Rockefeller Christmas Tree, 2026",
  lead: "A 76-foot Norway spruce from West Edmeston, New York; lit on Wednesday 2 December and on view through mid-January 2027. Here is how to see it without wasting an evening in a crowd.",
  meta: metaItems("76 ft", "Lit 2 Dec 2026", "Through mid-January", "Free to view"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Tree</span><span class="fact__value">76-ft Norway spruce</span></div>
      <div class="fact"><span class="fact__label">From</span><span class="fact__value">West Edmeston, NY</span></div>
      <div class="fact"><span class="fact__label">Lighting</span><span class="fact__value">Wed 2 December</span></div>
      <div class="fact"><span class="fact__label">On view</span><span class="fact__value">Through mid-January 2027</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "The details", title: "What is confirmed for 2026", lead: "Facts checked against Rockefeller Center's official tree page on 19 November 2026." })}
    ${table({
      caption: "Rockefeller Center Christmas Tree 2026",
      head: ["Detail", "What we know"],
      rows: [
        ["Tree", "76-foot Norway spruce"],
        ["Origin", "West Edmeston, New York"],
        ["Arrival", "7 November 2026"],
        ["Lighting ceremony", "Wednesday 2 December 2026, 7–10 p.m."],
        ["Lights", "More than 50,000 multicoloured LED lights"],
        ["Topper", "Swarovski star"],
        ["On view", "Through mid-January 2027"],
        ["Cost to see", "Free from the plaza and The Rink"],
      ],
    })}
    <p class="small muted" style="margin-top:1rem">Source: <a href="https://www.rockefellercenter.com/holidays/rockefeller-center-christmas-tree/" rel="nofollow noopener" target="_blank">Rockefeller Center official tree page</a>, checked 19 November 2026. Visiting hours and the exact removal date can change — confirm before travelling.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Visiting", title: "How to see it without the crush", lead: "" })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "Go early or late", text: "The plaza is busiest from late afternoon to evening. Early morning is calmer; late evening after the theatre crowds is also better.", dark: false })}
      ${callout({ icon: "◆", title: "Skip the lighting ceremony", text: "The 2 December ceremony draws huge crowds and road closures. See the tree the next day instead — it stays up for weeks.", dark: false })}
    </div>
    <ul class="feature-list" style="margin-top:1.4rem">
      <li><span class="feature-list__num">01</span><div><h4>View from the plaza, not just the street</h4><p>The tree is best from inside Rockefeller Plaza and from The Rink. Fifth Avenue gives you the crowd, not the view.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>Skating is separate</h4><p>The Rink requires a timed ticket and is not included with tree viewing. Book ahead for December dates.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>Top of the Rock is optional</h4><p>A Holiday Top of the Rock ticket combines the observation deck with tree access, from about $49. The tree itself is free.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>Expect security and crowds</h4><p>Bag checks and barriers are normal in December. Leave extra time and avoid the immediate post-ceremony evening.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Rockefeller tree questions", lead: "" })}
    ${faq([
      { q: "When is the 2026 Rockefeller tree lit?", a: "<p>Wednesday 2 December 2026, during the evening lighting ceremony. The tree remains on view through mid-January 2027.</p>" },
      { q: "Is it free to see the tree?", a: "<p>Yes. Viewing from the plaza and The Rink is free; skating and Top of the Rock tickets are separate.</p>" },
      { q: "Where is the tree from?", a: "<p>The 2026 tree is a 76-foot Norway spruce from West Edmeston, New York.</p>" },
      { q: "When is the best time to visit?", a: "<p>Early morning or late evening on a weekday, after the lighting ceremony and before the Christmas week peak.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One useful New York email a week", text: "Seasonal dates, closures and the things worth booking before they sell out.", source: "rockefeller-tree-2026" })}
  </div>
</section>

${pageNav({ prev: { href: "christmas-in-nyc.html", label: "Christmas in NYC" }, next: { href: "new-years-eve-nyc.html", label: "New Year's Eve" } })}
`,
};
