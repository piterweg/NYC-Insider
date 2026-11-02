import {
  sectionHead,
  pageHero,
  mediaCard,
  card,
  callout,
  newsletter,
  pageNav,
  img,
  metaItems,
  eyebrow,
  btn,
} from "../components.mjs";

export default {
  path: "journal.html",
  navSection: "journal",
  bodyClass: "page-inner",
  title: "The Journal — Notes on New York City",
  description:
    "Essays, itineraries and practical New York reporting from NYCTrove: free things to do, a Sunday in Brooklyn, rainy-day plans and where to eat.",
  priority: "0.8",
  changefreq: "weekly",
  ogImage: "assets/img/high-line.webp",
  render: () => `
${pageHero({
  image: img("high-line.webp"),
  alt: "The High Line park elevated above a Manhattan street",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "journal.html", label: "Journal" },
  ],
  eyebrowText: "The Journal",
  title: "Notes on a city that rewards attention",
  lead: "Longer pieces, written to be useful on the ground rather than inspiring from a distance: what is free, what is worth queueing for, and what to do when the weather changes your plans.",
  meta: metaItems("Essays &amp; guides", "Updated November 2026", "All five boroughs"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Featured long read · Free things")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Twelve genuinely free things to do in New York</h2>
        <p class="lead">New York's best free experiences are not secrets, and that is exactly why they work: a ferry that costs nothing, a park with room to think, and a bridge you can walk into Manhattan.</p>
        <p class="muted">This is the piece we point first-timers to when they ask how to see the city on a small budget. It covers the Staten Island Ferry, Central Park, the High Line, the free museum windows with their exact days and times, free summer concerts, and the honest caveat about Governors Island. All of it costs nothing but time — with the practical notes that make each one actually work: when to arrive, which entrance to use, and what to skip.</p>
        <div class="split__actions">
          ${btn({ href: "free-things-to-do-nyc.html", label: "Read the long read" })}
          ${btn({ href: "budget.html", label: "See the budget guide", variant: "outline" })}
        </div>
        <div class="stats" style="margin-top:2.2rem">
          <div class="stat"><strong>12</strong><span>free ideas</span></div>
          <div class="stat"><strong>5</strong><span>museums with free windows</span></div>
          <div class="stat"><strong>0</strong><span>tickets to book</span></div>
        </div>
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("central-park-bow-bridge.webp")}" alt="Bow Bridge over the lake in Central Park" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "All articles",
      title: "The latest from the Journal",
      lead: "Essays and practical guides, each written around a single question: how do you actually spend the day?",
      action: `<a class="link-arrow" href="free-things-to-do-nyc.html">Start with the free things</a>`,
    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "free-things-to-do-nyc.html",
        image: img("staten-island-ferry.webp"),
        alt: "The Staten Island Ferry with the Manhattan skyline behind it",
        kicker: "Free · Long read",
        title: "Twelve genuinely free things to do in New York",
        text: "The ferry, the bridge, the park and the museum windows — with the exact days and times, and what each one really costs you in time.",
        meta: "12 ideas · 7 min read",
      })}
      ${mediaCard({
        href: "sunday-in-brooklyn.html",
        image: img("brooklyn-bridge-park.webp"),
        alt: "A Brooklyn Bridge tower seen from Brooklyn Bridge Park",
        kicker: "Itinerary · One day",
        title: "A Sunday in Brooklyn",
        text: "Promenade, DUMBO, a long lunch and Prospect Park — a one-day plan built for the pace of a Sunday rather than a sightseeing sprint.",
        meta: "1 day · 6 min read",
      })}
      ${mediaCard({
        href: "nyc-rainy-day.html",
        image: img("times-square-day.webp"),
        alt: "Times Square on an overcast day",
        kicker: "Weather · Guide",
        title: "New York on a rainy day",
        text: "Which museums actually help, where the food halls are, and how to move a Broadway matinee without losing the money you spent.",
        meta: "Indoor plan · 6 min read",
      })}
      ${mediaCard({
        href: "food.html",
        image: img("nyc-pizza-slice.webp"),
        alt: "A slice of New York pizza",
        kicker: "Food &amp; drink",
        title: "Eat like the city does",
        text: "What a bagel, a slice and a pastrami sandwich should cost in 2026, ten affordable institutions, and where to eat by neighbourhood.",
        meta: "All five boroughs",
      })}
      ${mediaCard({
        href: "boroughs.html",
        image: img("queens-astoria.webp"),
        alt: "The Manhattan skyline seen from Astoria, Queens",
        kicker: "Boroughs",
        title: "Five boroughs, five different cities",
        text: "Manhattan is the postcard; Queens, Brooklyn, the Bronx and Staten Island are the reason to come back. Start with the overview.",
        meta: "Borough guides",
      })}
      ${mediaCard({
        href: "when-to-visit.html",
        image: img("central-park-bow-bridge.webp"),
        alt: "Central Park in daylight",
        kicker: "Planning",
        title: "When to visit New York",
        text: "Month-by-month weather, the busiest weeks, the cheapest weeks, and the two windows in the year when the city is at its best.",
        meta: "Weather &amp; seasons",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Three threads",
      title: "What the Journal keeps returning to",
      lead: "Every piece fits one of three questions: what is worth your time, what it costs, and what the city is like when the plan changes.",
    })}
    <div class="grid grid--3">
      ${card({
        kicker: "Time",
        title: "What is actually worth it",
        text: "Observation decks, museum windows, the ferry against the cruise, the bridge walk against the bus tour. The comparison pieces, with the numbers attached.",
        foot: '<a class="link-arrow" href="attractions.html">Things to do</a>',
      })}
      ${card({
        kicker: "Money",
        title: "What it costs",
        text: "Passes, tickets, food and transport, priced for 2026. We would rather tell you a thing is not worth the money than pad the page.",
        foot: '<a class="link-arrow" href="budget.html">The budget guide</a>',
      })}
      ${card({
        kicker: "Weather",
        title: "When the plan changes",
        text: "Rain, heat, a closed museum, a sold-out show. The Journal treats a change of plan as part of the trip rather than a failure of it.",
        foot: '<a class="link-arrow" href="when-to-visit.html">When to visit</a>',
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__body" data-reveal>
        ${eyebrow("How we write")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Reported, not aggregated</h2>
        <p class="lead">Every Journal piece starts from the same question: what would we tell a friend who is arriving on Friday?</p>
        <p class="muted">That means prices with the date attached, opening hours that reflect the current schedule, and an honest note when something is not worth the money. We do not invent restaurants, we do not pretend a queue is a discovery, and we update the pages when the facts change.</p>
        <p class="muted">If a recommendation is paid for, it will say so. If we have not been somewhere recently, we describe the category rather than the place. The result is a guide that is occasionally less exciting than the internet and considerably more useful on the day.</p>
        <div class="split__actions">
          ${btn({ href: "about.html", label: "About NYCTrove" })}
        </div>
      </div>
      <div>
        ${callout({
          icon: "◷",
          title: "Start with the season",
          text: "The single biggest variable in a New York trip is the weather. Read the when-to-visit guide before you book anything, then choose an itinerary length that leaves room for a washout day.",
        })}
        ${callout({
          icon: "◆",
          title: "Then pick a pace",
          text: "Three, five and seven day plans are all on the site. The right one is the shortest plan that still includes the things you would regret missing.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "The Journal, by email",
      text: "One considered New York piece a week — no listicles, no urgent ticket alerts. Unsubscribe whenever you like.",
      source: "journal",
    })}
  </div>
</section>

${pageNav({
  prev: { href: "food.html", label: "Food &amp; drink" },
  next: { href: "free-things-to-do-nyc.html", label: "Free things to do" },
})}
`,
};
