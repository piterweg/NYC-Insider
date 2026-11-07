import {
  btn,
  sectionHead,
  pageHero,
  card,
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
} from "../components.mjs";
import { assetVersion } from "../version.mjs";

export default {
  path: "attractions.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "New York City Attractions — Prices and Timing",
  description:
    "The New York attractions worth planning around: observation deck prices, the Statue of Liberty ferry, museum admission, Broadway tickets and the order to book them in.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline-night.webp",
  scripts: `<script src="assets/js/deck-quiz.js?v=${assetVersion}" defer></script>`,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "New York City Attractions — Prices, Timing and What to Book",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () => `
${pageHero({
  image: img("manhattan-skyline-night.webp"),
  alt: "Lower Manhattan and the Brooklyn Bridge lit up at night",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "attractions.html", label: "Things to Do" },
  ],
  eyebrowText: "Things to do",
  title: "The attractions that earn their ticket price",
  lead: "New York has more paid attractions than any trip can absorb. These are the ones worth planning around, what they cost from, and the order to book them in so you spend your time in the city rather than in a queue.",
  meta: metaItems("11 headline sights", "Prices checked November 2026", "Timed entry explained"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Before you book")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Choose by view, not by checklist</h2>
        <p class="lead">The most useful decision on a first trip is which observation deck you climb. There are five, they cost roughly the same, and each shows you a different city.</p>
        <p class="muted">Top of the Rock puts the Empire State in your photographs. The Empire State shows everything except itself. Edge gives you the West Side and a glass floor; SUMMIT is half art installation; One World Observatory is the harbour view.</p>
      </div>
      <div class="split__media">
        <img src="${img("skyline-window-view.webp")}" alt="The Manhattan skyline seen through a high window, with rooftops in the foreground" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Individual guides",
      title: "Every attraction, in detail",
      lead: "Prices, opening hours, which entrance to use, how long it really takes and what to book first. Each guide is written to be read before you buy a ticket.",
      action: `<a class="link-arrow" href="map.html">See them on the map</a>`,
    })}
    <div class="grid grid--3">
      ${[
        ["empire-state-building.html", "esb-exterior.webp", "Empire State Building", "Observation deck", "from $46"],
        ["top-of-the-rock.html", "skyline-window-view.webp", "Top of the Rock", "Observation deck", "from $42"],
        ["edge.html", "edge-hudson-yards.webp", "Edge at Hudson Yards", "Observation deck", "from $44"],
        ["summit-one-vanderbilt.html", "summit-vanderbilt.webp", "SUMMIT One Vanderbilt", "Observation deck", "from $44"],
        ["one-world-observatory.html", "one-wtc.webp", "One World Observatory", "Observation deck", "$51"],
        ["statue-of-liberty.html", "statue-of-liberty.webp", "Statue of Liberty", "Harbour", "ferry from $25.50"],
        ["9-11-memorial.html", "911-memorial.webp", "9/11 Memorial & Museum", "Harbour", "plaza free"],
        ["amnh.html", "amnh-facade.webp", "American Museum of Natural History", "Museum", "from $28"],
        ["moma.html", "fifth-avenue-cab.webp", "MoMA", "Museum", "$30"],
        ["met-museum.html", "central-park-bow-bridge.webp", "The Met", "Museum", "$30"],
        ["central-park.html", "central-park-nyc.webp", "Central Park", "Park", "free"],
        ["high-line.html", "high-line.webp", "The High Line", "Park", "free"],
        ["brooklyn-bridge.html", "brooklyn-bridge-park.webp", "Brooklyn Bridge", "Walk", "free"],
        ["grand-central.html", "grand-central.webp", "Grand Central Terminal", "Landmark", "free"],
      ]
        .map(([href, image, title, kicker, meta]) =>
          mediaCard({
            href,
            image: img(image),
            alt: `${title} — New York City`,
            kicker,
            title,
            text: meta === "free" ? "Free to visit. The essential details anyway." : `Tickets ${meta}. Opening hours, tips and what to book.`,
            meta,
          })
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Observation decks",
      title: "Five ways to look down at the city",
      lead: "All five are worth the money once; none twice on the same trip. Prices are adult “from” rates and rise at weekends and for sunset slots.",
    })}
    ${table({
      caption: "Comparison of New York City observation decks, adult prices from November 2026",
      head: ["Deck", "What you see", "Price from", "Best time", "What makes it different"],
      rows: [
        [
          "<strong>Empire State Building</strong><br>86th floor",
          "Midtown, Central Park and both rivers — but not the Empire State itself",
          "from $46<br><span class=\"muted\">peak around $57</span>",
          "Sunset, or the first hour after opening",
          "The classic: Art Deco interiors and an open-air terrace.",
        ],
        [
          "<strong>Top of the Rock</strong>",
          "The full Empire State Building, the park and both rivers",
          "from $42<br><span class=\"muted\">peak around $60</span>",
          "Late afternoon into dusk",
          "The only deck with the Empire State in the frame.",
        ],
        [
          "<strong>Edge</strong>",
          "Hudson Yards, the High Line and the West Side",
          "around $44–69",
          "Golden hour",
          "A cantilevered outdoor deck with a glass floor.",
        ],
        [
          "<strong>SUMMIT One Vanderbilt</strong>",
          "Midtown, the Chrysler Building and the park, reflected back at you",
          "around $44–62",
          "Morning or late afternoon",
          "The most photogenic: art installations before the view.",
        ],
        [
          "<strong>One World Observatory</strong>",
          "Lower Manhattan, the harbour, the bridges and the Statue of Liberty",
          "from $51",
          "Morning, for the clearest harbour light",
          "The southernmost and the tallest, best for Lower Manhattan.",
        ],
      ],
    })}
    <p class="muted" style="margin-top:1.2rem">If you want the photograph everyone recognises — the Empire State glowing above Midtown — book Top of the Rock for dusk. If you would rather stand on the building itself, book the Empire State and accept that it will not be in your pictures.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Booking strategy")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Book in this order</h2>
        <p class="lead">Most attractions release timed tickets weeks ahead. Work down this list and the fixed points of your trip are settled.</p>
        <ul class="feature-list" style="margin-top:2rem">
          <li>
            <span class="feature-list__num">01</span>
            <div>
              <h4>Broadway first</h4>
              <p>The best seats for a specific show go earliest — two to three weeks ahead for a weekend.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">02</span>
            <div>
              <h4>Statue of Liberty second</h4>
              <p>The first ferry departures sell out before the later ones. Book the earliest slot you can face.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">03</span>
            <div>
              <h4>One observation deck third</h4>
              <p>Choose one and book a fixed time. Sunset slots at the popular decks are the first thing to go.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">04</span>
            <div>
              <h4>Timed museums fourth</h4>
              <p>Reserve the 9/11 Museum and the American Museum of Natural History properly; most others can wait.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">05</span>
            <div>
              <h4>Everything else last</h4>
              <p>Parks, markets and the High Line need no booking. Decide the evening before, when you know the weather.</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        ${callout({
          icon: "◷",
          title: "One deck, not three",
          text: "The most common first-trip mistake is paying for three skyline views. Pick one and spend the difference on a better meal.",
        })}
        ${callout({
          icon: "◆",
          title: "Buy from the operator",
          text: "Book decks, the Statue ferry and Broadway on the official site. Third-party resale adds fees and risk.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__media">
        <img src="${img("statue-of-liberty.webp")}" alt="The Statue of Liberty against a pale sky" width="1000" height="1250" loading="lazy" />
      </div>
      <div class="split__body" data-reveal>
        ${eyebrow("The harbour")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Statue of Liberty and Ellis Island</h2>
        <p class="lead">This is the one excursion where logistics matter as much as the sight. Statue City Cruises is the only National Park Service-authorised operator, and the only way to land on Liberty Island.</p>
        <p>Fares are from $25.50 adult, $16.50 child and $22.50 senior; pedestal or crown access adds $0.30 but those tickets sell out well ahead. Boats leave from Battery Park, and the round trip includes Ellis Island and its immigration museum. Allow three to four hours and expect airport-style security.</p>
        <p>Book the first departure you can manage: the island is quietest before 10am and you are back in Manhattan for lunch. Ignore anyone on the street selling “skip the line” tickets — there is no such product. If you only want to see the statue, the free Staten Island Ferry passes close by several times an hour; see <a href="free-things-to-do-nyc.html">free things to do</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Museums",
      title: "The four museums to shortlist",
      lead: "Pick two per trip, go early and leave before you stop looking properly.",
    })}
    <div class="grid grid--2">
      ${card({
        kicker: "Upper West Side",
        title: "American Museum of Natural History",
        text: "From $28, or $43 with one ticketed exhibition. Pay-what-you-wish applies to New York, New Jersey and Connecticut residents. Allow half a day, more with children.",
        foot: `<span class="muted small">Open daily; reserve a timed slot.</span>`,
      })}
      ${card({
        kicker: "Midtown",
        title: "Museum of Modern Art",
        text: "Admission is $30. UNIQLO Free Friday Nights run 5:30–8:30pm for New York State residents only — reserve ahead, because the slots go quickly.",
        foot: `<span class="muted small">Book online; the queue is shorter.</span>`,
      })}
      ${card({
        kicker: "Upper East Side",
        title: "The Metropolitan Museum of Art",
        text: "From $30. Closed Wednesdays; Sunday to Tuesday and Thursday 10am–5pm, Friday and Saturday 10am–9pm. Pay-what-you-wish applies to New York State residents and local students. Three hours on the highlights is enough.",
        foot: `<a class="link-arrow" href="manhattan.html">Museum Mile and the Upper East Side</a>`,
      })}
      ${card({
        kicker: "Lower Manhattan",
        title: "9/11 Memorial &amp; Museum",
        text: "Museum admission is from $24 to $36 depending on the date; the memorial plaza is free and open 8am–8pm. New Yorkers visit free on Sundays 4–7pm with ID. Allow two hours.",
        foot: `<span class="muted small">Timed tickets; book a morning slot.</span>`,
      })}
    </div>
    <p class="muted" style="margin-top:1.6rem">Cheaper still: the Whitney is free on Friday nights and free daily for visitors aged 25 and under, the Brooklyn Museum runs suggested admission, and the Bronx Museum is always free. See <a href="budget.html">the budget guide</a>.</p>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Evening")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Broadway without the guesswork</h2>
        <p class="lead">The average paid Broadway ticket in the 2025–26 season was $131.09. You can pay that, or far less by choosing the right queue at the right hour.</p>
        <p>For a specific show on a specific night, book two to three weeks ahead. For flexibility, TKTS sells same-day seats at up to 50% off: the Times Square booth opens Monday, Tuesday and Friday 3–8pm and Wednesday, Thursday, Saturday and Sunday 11am–8pm, while Lincoln Center runs Tuesday to Saturday 11am–6pm. Weeknights have the best selection.</p>
        <p>Each show also runs its own rush or lottery tickets, usually released the morning of the performance. If a particular musical is the point of the trip, book it properly; if a good night out is the point, TKTS will do.</p>
      </div>
      <div class="split__media">
        <img src="${img("broadway-theatre-night.webp")}" alt="A Broadway theatre marquee lit at night in the Theatre District" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Free alternatives",
          title: "When the tickets add up",
          lead: "",
        })}
        ${callout({
          icon: "★",
          title: "The free version of the skyline",
          text: "Walk the Brooklyn Bridge from the Brooklyn side before 9am; ride the Staten Island Ferry for the Statue of Liberty view; walk the High Line before 10am. Central Park, Grand Central Terminal and the New York Public Library cost nothing.",
        })}
        <p class="muted" style="margin-top:1.4rem">Free sights are not worse — just busier at the hours that suit you.</p>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Decide on a pass before you book",
          text: "If your shortlist is five or more paid attractions, a sightseeing pass can beat buying each ticket separately. Our <a href=\"passes.html\">pass comparison</a> does the break-even maths.",
        })}
        ${callout({
          icon: "◷",
          title: "Group the paid sights",
          text: "Put paid attractions in the middle of the trip, not on arrival day. Jet lag and delayed flights ruin more prepaid tickets than bad weather does.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="quiz" data-deck-quiz>
      <span class="quiz__progress" data-quiz-progress>Question 1 of 3</span>
      <h2>Which observation deck fits your trip?</h2>
      <p class="muted" style="color:var(--text-on-dark-muted)">Three questions, one recommendation. All five decks are good — this is about which one is right for your trip, not which is “best”.</p>
      <p class="quiz__question" data-quiz-question></p>
      <div class="quiz__options" data-quiz-options></div>
      <div class="quiz__result" data-quiz-result></div>
      <div><button class="btn btn--sm btn--outline" type="button" data-quiz-restart>Start again</button></div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Decision guides",
      title: "Compare before you buy",
      lead: "Three pages that answer the questions people actually search before booking: which deck, whether the pass is worth it, and what the tickets really cost.",
    })}
    <div class="grid grid--3">
      ${card({ kicker: "Comparison", title: `<a href="best-observation-deck-nyc.html">The best observation deck in NYC</a>`, text: "Five decks compared by view, queue, price and best time — with a verdict for each kind of trip.", foot: `<a class="link-arrow" href="best-observation-deck-nyc.html">Compare the decks</a>` })}
      ${card({ kicker: "Head to head", title: `<a href="empire-state-building-vs-top-of-the-rock.html">Empire State vs Top of the Rock</a>`, text: "The two classic decks, compared honestly — and which one to pick.", foot: `<a class="link-arrow" href="empire-state-building-vs-top-of-the-rock.html">Read the comparison</a>` })}
      ${card({ kicker: "Data", title: `<a href="nyc-attraction-price-index.html">NYC attraction price index</a>`, text: "Every headline ticket price in one table, with a downloadable CSV and the 2026 changes.", foot: `<a class="link-arrow" href="nyc-attraction-price-index.html">See the prices</a>` })}
      ${card({ kicker: "Decision", title: `<a href="is-edge-worth-it.html">Is Edge worth it?</a>`, text: "The honest answer for different trips — and when to spend the money on a different deck.", foot: `<a class="link-arrow" href="is-edge-worth-it.html">Read the verdict</a>` })}
      ${card({ kicker: "Theatre", title: `<a href="broadway-guide.html">How to buy Broadway tickets</a>`, text: "TKTS, rush, lotteries and the box office — with the average paid ticket price.", foot: `<a class="link-arrow" href="broadway-guide.html">Read the guide</a>` })}
    </div>
    <p class="small muted" style="margin-top:1.2rem">Thinking about a sightseeing pass instead? Start with <a href="is-citypass-worth-it.html">is CityPASS worth it</a>. Prefer a map? See <a href="map.html#attractions-map">all 14 sights numbered on one map</a>.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Questions",
      title: "Attraction questions we get a lot",
      lead: "",
    })}
    ${faq([
      {
        q: "Which observation deck is best for a first visit?",
        a: "<p>Top of the Rock if you want the Empire State Building in your photographs, the Empire State Building for the classic open-air terrace, One World Observatory if your trip focuses on Lower Manhattan.</p>",
      },
      {
        q: "Do I need to book the Statue of Liberty in advance?",
        a: "<p>Yes. Ferries sell out, crown and pedestal tickets sell out much earlier, and the first departures are the most popular. Book through Statue City Cruises and arrive early.</p>",
      },
      {
        q: "Are museum prices fixed?",
        a: "<p>The Met, MoMA and the American Museum of Natural History publish fixed adult rates; the 9/11 Museum prices by date. New York residents and students should check the pay-what-you-wish rules.</p>",
      },
      {
        q: "Is TKTS always cheaper than booking ahead?",
        a: "<p>No. TKTS is cheapest for midweek seats to shows that are not selling out. For a weekend performance of a popular musical, booking ahead can be cheaper and is the only way to guarantee the show you want.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Get the ticket checklist",
      text: "One email with the booking order for a first trip, the prices we can verify and one useful New York email a week.",
      source: "attractions",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Work out what the whole trip costs",
  text: "Attractions are only one line in the budget. Transit, food and hotel tax are the others — and easier to control than the ticket queue.",
  actions: `${btn({ href: "passes.html", label: "Compare passes" })}${btn({
    href: "budget.html",
    label: "Open the budget guide",
    variant: "outline",
  })}`,
})}

${pageNav({
  prev: { href: "itineraries.html", label: "Itineraries" },
  next: { href: "passes.html", label: "Passes compared" },
})}
`,
};
