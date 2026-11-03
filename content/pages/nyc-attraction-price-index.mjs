import { pageHero, sectionHead, table, callout, faq, newsletter, pageNav, btn, img, metaItems, eyebrow, verifiedNote } from "../components.mjs";
import { attractions, priceChanges, freeSkylineWays, checkedDate, checkedISO } from "../price-data.mjs";

const paid = attractions.filter((item) => item.adult > 0 && item.category !== "Theatre");
const maxPrice = Math.max(...paid.map((item) => item.adult));
const bars = paid
  .slice()
  .sort((a, b) => b.adult - a.adult)
  .map((item) => {
    const width = Math.round((item.adult / maxPrice) * 100);
    return `<li class="price-bar">
      <span class="price-bar__label">${item.name}</span>
      <span class="price-bar__track"><span class="price-bar__fill" style="width:${width}%"></span></span>
      <span class="price-bar__value">${item.display}</span>
    </li>`;
  })
  .join("");

export default {
  path: "nyc-attraction-price-index.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "NYC Attraction Price Index 2026",
  description:
    "Every major New York attraction price in one table: adult tickets from $25.50 to $131, what is free, what changed in 2026, and a downloadable dataset you can cite.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "NYC Attraction Price Index 2026",
      description:
        "Adult 'from' ticket prices for 15 major New York City attractions, checked against official operator pages and published with a downloadable CSV.",
      url: "https://nyctrove.com/nyc-attraction-price-index.html",
      creator: { "@type": "Organization", name: "NYCTrove", url: "https://nyctrove.com" },
      license: "https://creativecommons.org/licenses/by/4.0/",
      temporalCoverage: "2026",
      dateModified: checkedISO,
      isAccessibleForFree: true,
      variableMeasured: "Adult admission price (USD)",
    },
  ],
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a high window at night",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "attractions.html", label: "Things to Do" },
    { href: "nyc-attraction-price-index.html", label: "Price index" },
  ],
  eyebrowText: `Data · Prices checked ${checkedDate}`,
  title: "NYC attraction price index",
  lead: "What New York actually charges for its ticketed sights — one table, one date, no sponsored placements. Free to read, free to cite, downloadable as CSV.",
  meta: metaItems("15 attractions", "4 free to visit", "$25.50–$131.09", `Checked ${checkedDate}`),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Attractions tracked</span><span class="fact__value">15</span></div>
      <div class="fact"><span class="fact__label">Free to visit</span><span class="fact__value">4 of 15</span></div>
      <div class="fact"><span class="fact__label">Cheapest paid ticket</span><span class="fact__value">$25.50</span></div>
      <div class="fact"><span class="fact__label">Most expensive average</span><span class="fact__value">$131.09</span></div>
      <div class="fact"><span class="fact__label">Prices checked</span><span class="fact__value">${checkedDate}</span></div>
    </div>
    ${verifiedNote()}
  </div>
</section>

<section class="section section--tight">
  <div class="container">
    <div class="callout" style="border-left-width:3px;padding:1.5rem 1.7rem">
      <span class="callout__icon" aria-hidden="true">◆</span>
      <div>
        <h4>The headline number</h4>
        <p style="font-size:1.05rem;color:var(--text)">A first-time visitor who does the Empire State Building, the Statue of Liberty ferry, the 9/11 Museum and one Broadway show pays roughly <strong>$200–$240 per person</strong> in tickets alone. Five observation decks cost $220–$260 if you climb more than one — the single easiest place to overspend in New York.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why this page exists")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Prices are the hardest part of planning NYC</h2>
        <p class="lead">Every attraction quotes a "from" price, then adds dates, sunset slots, exhibitions and fees. Most guides copy last year's numbers. This index records what the official sellers were quoting on one date, for every headline sight, in one place.</p>
        <p class="muted">Use it to sanity-check a pass, decide whether a second observation deck is worth it, or budget a trip without opening twelve tabs. Because it is a dataset rather than an article, other sites and writers can cite it — please link back if you do.</p>
        <div class="split__actions">
          ${btn({ href: "assets/data/attraction-prices.csv", label: "Download the CSV", variant: "outline", attrs: "download" })}
        </div>
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("times-square-day.webp")}" alt="Times Square in daylight, with billboards and yellow cabs" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The index",
      title: "Adult admission, from cheapest to most expensive",
      lead: "Prices are adult 'from' rates in USD, checked against the operator's own booking page. Dynamic pricing means the number at checkout can be higher, especially at weekends and sunset slots.",
    })}
    ${table({
      caption: `New York City attraction prices, adult from-rates, checked ${checkedDate}`,
      head: ["Attraction", "Adult from", "Category", "Notes"],
      rows: attractions
        .slice()
        .sort((a, b) => a.adult - b.adult)
        .map((item) => [
          `<a href="${item.slug}"><strong>${item.name}</strong></a>`,
          item.display,
          item.category,
          item.notes,
        ]),
    })}
    <p class="small muted" style="margin-top:1rem">Broadway shown as the 2025–26 season average paid ticket, not a "from" price — individual shows sell from roughly $60 to $500+.</p>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${eyebrow("Visualised")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Paid tickets, compared</h2>
        <p class="muted" style="color:var(--text-on-dark-muted);margin-top:1rem">Observation decks cluster at the top of the range; museums cluster in the middle. Broadway (an average of $131.09) is excluded from the bars so the attractions stay readable.</p>
        <ul class="price-bars" style="margin-top:2rem">
          ${bars}
        </ul>
      </div>
      <div>
        ${callout({
          icon: "★",
          title: "The free version of the skyline",
          text: "Four of the five best views in New York cost nothing: the Staten Island Ferry, Brooklyn Bridge Park, the High Line and the Brooklyn Bridge walkway. The Roosevelt Island Tramway costs one subway fare.",
          dark: true,
        })}
        ${callout({
          icon: "◆",
          title: "One deck, not three",
          text: "If you buy more than one observation deck you are paying twice for the same skyline. Pick the deck whose view includes the building you care about — our comparison guide explains which.",
          dark: true,
        })}
        ${btn({ href: "best-observation-deck-nyc.html", label: "Which deck to choose", variant: "ghost", size: "sm" })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "What changed in 2026",
          title: "Price movements worth knowing",
          lead: "New York prices move every January. These are the changes that matter most for a 2026–27 trip.",
        })}
        ${table({
          caption: "New York price changes relevant to visitors in 2026",
          head: ["Item", "Price", "Note"],
          rows: priceChanges.map((row) => [`<strong>${row[0]}</strong>`, row[1], row[2]]),
        })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Free views", title: "Where the skyline costs nothing", lead: "" })}
        <ul class="feature-list">
          ${freeSkylineWays
            .map(
              (text, i) => `<li>
  <span class="feature-list__num">${String(i + 1).padStart(2, "0")}</span>
  <div><p>${text}</p></div>
</li>`
            )
            .join("")}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container container--narrow">
    ${sectionHead({
      eyebrowText: "Methodology",
      title: "How the index is built",
      lead: "A short method note, because a dataset without one is just a list.",
    })}
    <div class="prose">
      <p><strong>Sources.</strong> Each price was read from the official operator's own booking page on ${checkedDate} — not from a reseller and not from a previous edition of this page. Where the official page was inaccessible to automated checks (the Met, SUMMIT), the figure was cross-checked against the operator's partner listing and is labelled accordingly on the individual guide.</p>
      <p><strong>What "from" means.</strong> The lowest adult price available on the date checked, before taxes and booking fees. Dynamic pricing means the same ticket can cost materially more at weekends, school holidays and sunset slots. Ranges in the table reflect tickets we saw on sale that week.</p>
      <p><strong>What is excluded.</strong> Food, transport, hotels, add-ons (102nd floor, Crown, City Climb, The Beam) and packages. Those are covered in the individual attraction guides and in the passes comparison.</p>
      <p><strong>Updates.</strong> The index is re-checked quarterly and whenever an operator announces a price change; the checked date at the top always reflects the latest sweep.</p>
    </div>
    <div class="citation" style="margin-top:1.6rem">
      <strong>Cite this dataset</strong>
      <span>NYCTrove, <em>NYC Attraction Price Index 2026</em>, checked ${checkedDate}. Available at:</span>
      <code>https://nyctrove.com/nyc-attraction-price-index.html</code>
      <span>Licence: CC BY 4.0 — you may reuse the table with attribution and a link to this page. CSV: <a href="assets/data/attraction-prices.csv" download>attraction-prices.csv</a>.</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Use the numbers",
      title: "What to read next",
      lead: "The index tells you what things cost. These guides tell you what to do about it.",
    })}
    <div class="grid grid--3">
      <a class="media-card" href="is-citypass-worth-it.html">
        <div class="media-card__body" style="padding:1.5rem">
          <span class="card__kicker">Passes</span>
          <h3>Is CityPASS worth it?</h3>
          <p>The break-even maths with real 2026 prices.</p>
          <div class="media-card__foot"><span class="link-arrow">Read the guide</span></div>
        </div>
      </a>
      <a class="media-card" href="best-observation-deck-nyc.html">
        <div class="media-card__body" style="padding:1.5rem">
          <span class="card__kicker">Observation decks</span>
          <h3>Which deck should you pay for?</h3>
          <p>Five decks compared by view, queue and price.</p>
          <div class="media-card__foot"><span class="link-arrow">Read the guide</span></div>
        </div>
      </a>
      <a class="media-card" href="budget.html">
        <div class="media-card__body" style="padding:1.5rem">
          <span class="card__kicker">Budget</span>
          <h3>What a whole trip costs</h3>
          <p>Hotels, food, transport and attractions by travel style.</p>
          <div class="media-card__foot"><span class="link-arrow">Read the guide</span></div>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Get the next price sweep",
      text: "We re-check these prices quarterly. Join the list and we will email you when the index is updated.",
      source: "price-index",
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Price index questions", lead: "" })}
    ${faq([
      { q: "Why are the prices different from what I see at checkout?", a: "<p>Dynamic pricing. The index records the lowest adult “from” price seen on the operator's booking page on the checked date. Weekend, holiday and sunset slots cost more, and booking fees can be added at checkout.</p>" },
      { q: "Are these prices per person?", a: "<p>Yes — adult, per person, before tax and fees. Child and senior prices are listed in the notes and on each attraction's own guide where the operator publishes them.</p>" },
      { q: "Which attraction is the best value?", a: "<p>By sheer hours of entertainment per dollar, the free ones win: Central Park, the High Line, the Brooklyn Bridge and the Staten Island Ferry. Among paid sights, the Met and AMNH give the most time for the money.</p>" },
      { q: "Can I reuse this table on my site?", a: "<p>Yes, under CC BY 4.0 — credit NYCTrove, link to this page and keep the checked date. The CSV download is there to make that easy.</p>" },
      { q: "How often is the index updated?", a: "<p>Quarterly, plus whenever an operator announces a price change. The checked date at the top of the page always reflects the latest sweep.</p>" },
    ])}
  </div>
</section>

${pageNav({ prev: { href: "attractions.html", label: "Things to do" }, next: { href: "best-observation-deck-nyc.html", label: "Best observation decks" } })}
`,
};
