import { pageHero, sectionHead, table, callout, faq, newsletter, ctaBand, btn, img, metaItems } from "../components.mjs";

export default {
  path: "editorial.html",
  navSection: "home",
  bodyClass: "page-inner",
  title: "Editorial Standards and How We Research",
  description:
    "How NYCTrove is produced: our research process, how we check prices and opening hours, corrections policy, funding and disclosure, and the date each guide was last verified.",
  priority: "0.4",
  changefreq: "yearly",
  ogImage: "assets/img/grand-central.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "NYCTrove editorial standards",
      url: "https://nyctrove.com/editorial.html",
      description: "How NYCTrove researches, checks and corrects its New York City guides.",
    },
  ],
  render: () => `
${pageHero({
  image: img("grand-central.webp"),
  alt: "The main concourse of Grand Central Terminal in New York",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "editorial.html", label: "Editorial standards" },
  ],
  eyebrowText: "Editorial standards",
  title: "How this guide is made",
  lead: "Who writes NYCTrove, how we research a page, how often prices and hours are checked, and what happens when we get something wrong.",
  meta: metaItems("Independent guide", "Sources checked 2 November 2026", "Corrections welcome"),
})}

<section class="section">
  <div class="container container--narrow">
    <div class="prose">
      <h2>Who produces NYCTrove</h2>
      <p>NYCTrove is produced by a small editorial team that lives in and around New York, with contributors who travel to the city regularly from Europe. We are not a booking agency, a hotel group or a tourism board, and no attraction pays to appear in a guide.</p>
      <p>We do not publish invented names, credentials or photographs of staff. If you need to know who is responsible for a page, email us and we will tell you.</p>

      <h2>How a page gets written</h2>
      <p>Every guide starts with the practical question a traveller will actually ask — what does it cost, when is it open, how long does it take, which entrance do I use, what do I book first. We then work through:</p>
      <ul>
        <li><strong>Official sources first.</strong> Operator websites, transport authorities, museum and park pages, and official ticketing systems. Third-party resellers are treated as leads, not facts.</li>
        <li><strong>Cross-checking.</strong> Prices and opening hours are compared across at least two independent sources before publication. Where a figure changes by date or season, the page says so.</li>
        <li><strong>On-the-ground context.</strong> Neighbourhood and itinerary advice is built from repeated visits: which blocks are pleasant at 8am, where the queues form, which station exit is closest.</li>
        <li><strong>Editing.</strong> Pages are edited for structure and tone, then read once more against the checklist above before they go live.</li>
      </ul>

      <h2>Tools and AI disclosure</h2>
      <p>We use software — including AI-assisted research and drafting tools — to gather source material and produce first drafts quickly. A human editor reviews every page, checks the facts against the sources above and is responsible for what is published. We would rather say this plainly than pretend otherwise.</p>

      <h2>What "checked" means</h2>
      <p>Guides carry a checked date, usually at the top of the page. It means the prices, hours and transport details on that page were compared with official sources on that date. It does not mean the attraction will not change its hours tomorrow, which is why every guide tells you to confirm before booking.</p>
      <p>We re-check the highest-traffic pages seasonally — before the summer rush and before the holiday season — and any page that receives several corrections sooner.</p>

      <h2>Independence and funding</h2>
      <p>The guide is free to read. It is funded by advertising and, in the future, by affiliate commissions on some outbound links. Commercial relationships never decide what appears in a guide, the order of a ranking, or the verdict in a comparison. Where a link is an affiliate link it is labelled, and our <a href="terms.html">terms</a> and <a href="privacy.html">privacy policy</a> explain how that works.</p>
      <p>We do not accept payment for coverage, and we do not allow partners to review pages before publication.</p>

      <h2>Corrections</h2>
      <p>If something is out of date or wrong, tell us. Include the page address and the source you are using, and we will check it. Corrections are made as soon as they are confirmed, and material changes are noted in the update log below.</p>
      <p>Email <a href="mailto:hello@nyctrove.com">hello@nyctrove.com</a> with the subject "Correction", or use the <a href="contact.html">contact page</a>.</p>
    </div>

    <div style="margin-top:2rem">
      ${callout({
        icon: "◆",
        title: "What we will never do",
        text: "Invent a price, hide that a place is closed, recommend a ticket seller who is not authorised, or rank a business higher because it pays us. Those are the four rules everything else follows from.",
      })}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container container--narrow">
    ${sectionHead({
      eyebrowText: "Update log",
      title: "What changed, and when",
      lead: "A short record of substantive updates. Typo fixes are not listed.",
    })}
    ${table({
      caption: "NYCTrove update log",
      head: ["Date", "Change"],
      rows: [
        ["<strong>2 Nov 2026</strong>", "Full price, hours and transport check across all guides ahead of publication; 67 pages published, including 14 attraction guides, 8 neighbourhood guides and 6 seasonal guides."],
        ["<strong>2 Nov 2026</strong>", "Added editorial standards, fact-check markers on guides and a public update log."],
      ],
    })}
    <p class="small muted" style="margin-top:1rem">This log starts with the current build. Earlier drafts and images are preserved in the repository history.</p>
  </div>
</section>

<section class="section">
  <div class="container container--narrow">
    ${sectionHead({ eyebrowText: "Questions", title: "Editorial questions", lead: "" })}
    ${faq([
      { q: "Do you accept free trips or tickets?", a: "<p>Occasionally we accept press access to visit an attraction for review. It never guarantees coverage, and we say when access was provided free of charge. We do not accept payment for placement.</p>" },
      { q: "Are affiliate links marked?", a: "<p>Yes. Where a link could earn us a commission it is labelled in the surrounding text, and our <a href=\"terms.html\">terms</a> explain the arrangement. It never decides what we recommend.</p>" },
      { q: "How can I report an error?", a: "<p>Email <a href=\"mailto:hello@nyctrove.com\">hello@nyctrove.com</a> with the page address and what is wrong. We aim to reply within a few working days.</p>" },
      { q: "Can I reuse your text or photos?", a: "<p>Our text and original photography are copyrighted. Wikimedia photographs are credited individually on the <a href=\"credits.html\">credits page</a> and can be reused under their own licences. For anything else, ask us.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "The editorial email",
      text: "One short weekly note on what changed in New York and which guides were updated.",
      source: "editorial",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Trust",
  title: "Something looks wrong on this site?",
  text: "Tell us the page and the source you are using. Corrections are checked and published quickly.",
  actions: `${btn({ href: "contact.html", label: "Report a correction" })}${btn({ href: "about.html", label: "About NYCTrove", variant: "outline" })}`,
})}
`,
};
