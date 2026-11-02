import {
  btn,
  sectionHead,
  card,
  eyebrow,
} from "../components.mjs";

export default {
  path: "404.html",
  navSection: "home",
  bodyClass: "page-inner",
  title: "Page not found",
  description:
    "That page does not exist. Head back to NYCTrove's itineraries, borough guides, attractions, passes and trip-planning advice to find what you need.",
  priority: "0.1",
  changefreq: "yearly",
  noindex: true,
  render: () => `
<section class="section bg-ink">
  <div class="container container--narrow" style="text-align:center">
    ${eyebrow("Error 404")}
    <h1 style="font-size:var(--step-5);margin:.6rem 0 0">You have wandered off the map</h1>
    <p class="lead" style="margin-top:1.4rem;max-width:56ch;margin-inline:auto">The page you were looking for has moved, been retired, or never quite made it onto the grid. The city is still here — start with one of these.</p>
    <div class="hero__actions" style="justify-content:center;margin-top:2.2rem">
      ${btn({ href: "index.html", label: "Back to home" })}
      ${btn({ href: "itineraries.html", label: "Browse itineraries", variant: "ghost" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Try one of these",
      title: "Where most people are heading",
      lead: "Six reliable starting points, whether you are planning a whole trip or looking for one good afternoon.",
      center: true,
    })}
    <div class="grid grid--3">
      ${card({
        kicker: "Plan",
        title: '<a href="itineraries.html">Itineraries</a>',
        text: "Three, five and seven day plans with realistic travel time and one big thing per half-day.",
        foot: '<a class="link-arrow" href="itineraries.html">Open</a>',
      })}
      ${card({
        kicker: "Explore",
        title: '<a href="boroughs.html">Boroughs</a>',
        text: "Manhattan, Brooklyn, Queens, the Bronx and Staten Island — what each one is actually like.",
        foot: '<a class="link-arrow" href="boroughs.html">Open</a>',
      })}
      ${card({
        kicker: "See",
        title: '<a href="attractions.html">Things to do</a>',
        text: "Observation decks, museums, landmarks and waterfronts, ranked by what they ask of your day.",
        foot: '<a class="link-arrow" href="attractions.html">Open</a>',
      })}
      ${card({
        kicker: "Book",
        title: '<a href="passes.html">Passes and tickets</a>',
        text: "Which pass pays off, which does not, and where to buy the tickets that sell out.",
        foot: '<a class="link-arrow" href="passes.html">Open</a>',
      })}
      ${card({
        kicker: "Prepare",
        title: '<a href="plan-your-trip.html">Plan your trip</a>',
        text: "When to come, where to stay, how to get around, what it costs and what to book ahead.",
        foot: '<a class="link-arrow" href="plan-your-trip.html">Open</a>',
      })}
      ${card({
        kicker: "Free",
        title: '<a href="free-things-to-do-nyc.html">Free things to do</a>',
        text: "The ferry, the parks, the free museum windows and the walks that cost nothing.",
        foot: '<a class="link-arrow" href="free-things-to-do-nyc.html">Open</a>',
      })}
    </div>
    <p class="muted" style="text-align:center;margin-top:2.5rem">Still stuck? <a href="contact.html">Tell us what you were looking for</a> and we will point you the right way.</p>
  </div>
</section>
`,
};
