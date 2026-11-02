import { pageHero, sectionHead, btn, card, img, metaItems } from "../components.mjs";

export default {
  path: "search.html",
  navSection: "home",
  bodyClass: "page-inner",
  title: "Search the Guide",
  description:
    "Search NYCTrove: itineraries, attraction guides, neighbourhood advice, food spots, transport, passes and practical planning pages.",
  priority: "0.3",
  changefreq: "monthly",
  ogImage: "assets/img/times-square-night.webp",
  render: () => `
${pageHero({
  image: img("times-square-night.webp"),
  alt: "Times Square at night",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "search.html", label: "Search" },
  ],
  eyebrowText: "Search",
  title: "Find the guide you need",
  lead: "Search the whole site: itineraries, attractions, neighbourhoods, food, transport and passes. Start typing and the results update as you go.",
  meta: metaItems("All guides", "Keyboard friendly", "No account needed"),
})}

<section class="section">
  <div class="container container--narrow" data-search-page>
    <div class="card" style="padding:1.2rem;margin-bottom:1.4rem">
      <label class="sr-only" for="search-page-input">Search NYCTrove</label>
      <input
        id="search-page-input"
        type="search"
        placeholder="Try “Brooklyn”, “passes”, “airport” or “pizza”"
        autocomplete="off"
        data-search-input
        style="width:100%;padding:.9rem 1rem;border:1px solid rgba(28,26,23,.2);border-radius:8px;font-size:1rem;background:#fff"
      />
      <p class="small muted" style="margin:.7rem 0 0">Tip: press <strong>/</strong> anywhere on the site to open the search panel.</p>
    </div>
    <ul class="search-results" data-search-results style="padding:0;background:var(--white);border:1px solid rgba(28,26,23,.1);border-radius:10px"></ul>
    <p class="search-empty" style="display:block;padding:1rem 0">Popular starting points:</p>
    <div class="grid grid--3">
      ${card({ kicker: "Start", title: `<a href="itineraries.html">Itineraries</a>`, text: "Three, five and seven day plans with realistic travel time." })}
      ${card({ kicker: "Explore", title: `<a href="attractions.html">Things to do</a>`, text: "Observation decks, museums, parks and the harbour." })}
      ${card({ kicker: "Plan", title: `<a href="plan-your-trip.html">Plan your trip</a>`, text: "When to come, where to stay, how to get around and what it costs." })}
    </div>
  </div>
</section>
`,
};
