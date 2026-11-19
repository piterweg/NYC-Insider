import { pageHero, sectionHead, table, callout, faq, newsletter, pageNav, img, metaItems, btn } from "../components.mjs";

export default {
  path: "staten-island-ferry-guide.html",
  navSection: "things-to-do",
  bodyClass: "page-inner",
  title: "Staten Island Ferry Guide: Free Views of the Statue",
  description:
    "How to ride the Staten Island Ferry for free: terminals, timetable, the best side for Statue of Liberty views, how long it takes and when to avoid rush hour.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/staten-island-ferry.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Staten Island Ferry guide",
      description: "A practical guide to New York's free Staten Island Ferry and its Statue of Liberty views.",
      author: { "@type": "Organization", name: "NYCTrove" },
      datePublished: "2026-11-19",
      dateModified: "2026-11-19",
    },
  ],
  render: () => `
${pageHero({
  image: img("staten-island-ferry.webp"),
  alt: "The Staten Island Ferry crossing New York Harbor",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "attractions.html", label: "Attractions" },
    { href: "staten-island-ferry-guide.html", label: "Staten Island Ferry" },
  ],
  eyebrowText: "Free New York",
  title: "The Staten Island Ferry, explained",
  lead: "It is free, it runs around the clock and it passes the Statue of Liberty. It is also a commuter boat, not a sightseeing cruise — which is exactly why it is worth knowing how to use it.",
  meta: metaItems("Free", "~25 min each way", "24/7", "Checked November 2026"),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Fare</span><span class="fact__value">Free</span></div>
      <div class="fact"><span class="fact__label">Crossing</span><span class="fact__value">~25 minutes</span></div>
      <div class="fact"><span class="fact__label">Runs</span><span class="fact__value">24 hours</span></div>
      <div class="fact"><span class="fact__label">Terminals</span><span class="fact__value">Whitehall ↔ St. George</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "How it works", title: "Walk on, walk off, come back", lead: "" })}
    <p>Board at the Whitehall Terminal in Lower Manhattan and cross to St. George on Staten Island. The ride takes about 25 minutes each way. You do not need a ticket, a reservation or a pass; you walk on and walk off, and you can return on the next boat.</p>
    <p>Most visitors ride it as a round trip for the harbour views, stay on the boat at St. George, and come straight back. That is allowed and costs nothing.</p>
    ${callout({ icon: "◆", title: "The view", text: "The ferry passes the Statue of Liberty and Ellis Island. The best views are from the open decks; for the outbound trip, the right side usually gives the Statue, but move around — both sides are worth it." })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Plan it", title: "When to go and what to avoid", lead: "" })}
    ${table({
      caption: "Staten Island Ferry at a glance",
      head: ["Question", "Answer"],
      rows: [
        ["Cost", "Free — no ticket needed"],
        ["Frequency", "Roughly every 30 minutes during the day; less often overnight"],
        ["Best time", "Morning or sunset for light; avoid weekday rush hours"],
        ["How long", "About 25 minutes each way; allow 90 minutes round trip"],
        ["Nearest subway", "Whitehall St (R/W) and Bowling Green (4/5)"],
        ["Wheelchair access", "Yes, both terminals and boats"],
      ],
    })}
    <p class="small muted" style="margin-top:1rem">Schedules change; check the NYC DOT ferry page on the day.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Practical", title: "Five things to know", lead: "" })}
    <ul class="feature-list">
      <li><span class="feature-list__num">01</span><div><h4>It is not the Statue of Liberty ferry</h4><p>The free ferry passes the Statue but does not stop at Liberty Island. To land there, book the official Statue City Cruises ferry separately.</p></div></li>
      <li><span class="feature-list__num">02</span><div><h4>It is a commuter boat</h4><p>Weekday rush hours are busy with residents. Go mid-morning or at the weekend for a calmer crossing.</p></div></li>
      <li><span class="feature-list__num">03</span><div><h4>Stand outside</h4><p>The indoor seats are fine, but the open decks are the point. Bring a jacket in winter.</p></div></li>
      <li><span class="feature-list__num">04</span><div><h4>Check the last boats</h4><p>It runs overnight, but frequency drops. Do not assume a boat every few minutes late at night.</p></div></li>
      <li><span class="feature-list__num">05</span><div><h4>Combine it with Lower Manhattan</h4><p>Whitehall is next to Battery Park, the 9/11 Memorial and the subway. Pair the ferry with a downtown morning.</p></div></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Staten Island Ferry questions", lead: "" })}
    ${faq([
      { q: "Is the Staten Island Ferry really free?", a: "<p>Yes. There is no fare, no ticket and no booking for foot passengers.</p>" },
      { q: "Can I see the Statue of Liberty from the ferry?", a: "<p>Yes, the ferry passes it, but it does not stop at Liberty Island. For a landing, book the official Statue ferry separately.</p>" },
      { q: "Do I need to get off at Staten Island?", a: "<p>No. You can stay on for the return trip, though most people walk around the terminal for a few minutes.</p>" },
      { q: "Is it accessible?", a: "<p>Yes, both terminals and the boats are accessible for wheelchairs and strollers.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "One useful New York email a week", text: "Free things worth doing and the small details that save a trip.", source: "staten-island-ferry" })}
  </div>
</section>

${pageNav({ prev: { href: "statue-of-liberty.html", label: "Statue of Liberty" }, next: { href: "free-things-to-do-nyc.html", label: "Free things to do" } })}
`,
};
