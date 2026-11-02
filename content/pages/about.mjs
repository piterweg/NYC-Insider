import {
  btn,
  sectionHead,
  pageHero,
  card,
  callout,
  table,
  ctaBand,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "about.html",
  navSection: "home",
  bodyClass: "page-inner",
  title: "About NYC Insider — An Independent New York City Guide",
  description:
    "NYC Insider is an independent New York City travel guide: who we are, how we choose recommendations, how affiliate links work and how we keep prices current.",
  priority: "0.5",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline.webp",
  render: () => `
${pageHero({
  image: img("manhattan-skyline.webp"),
  alt: "Lower Manhattan skyline and the Brooklyn Bridge seen from the water",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About" },
  ],
  eyebrowText: "About NYC Insider",
  title: "The city, without the noise",
  lead: "An independent guide to New York City for people who want to understand the place, not just tick it off. We write the advice we wish someone had given us: specific, dated and honest about what we do not know.",
  meta: metaItems("Independent", "All five boroughs", "Updated November 2026"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("What this is")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">A guide built the slow way</h2>
        <p class="lead">A travel guide to New York City — all five boroughs, the whole trip, not just the postcard sights.</p>
        <p>You will find day-by-day plans for three, five and seven days, borough guides that treat all five boroughs as destinations, honest comparisons of passes and tickets, and the practical detail — transit, budgets, timing — that decides whether a good plan survives contact with the city.</p>
        <p>We are not a booking site: if a page recommends something, we think it is worth your time or money.</p>
      </div>
      <div>
        ${callout({
          icon: "◇",
          title: "No sponsored rankings",
          text: "No venue, hotel or tour operator can pay to appear in a guide, itinerary or best-of list. Labelled partnerships are stated on the page.",
        })}
        ${callout({
          icon: "◷",
          title: "Dated, not timeless",
          text: "Every guide shows when it was last checked. New York changes fast, and a guide that pretends otherwise is worse than useless.",
        })}
        ${callout({
          icon: "✎",
          title: "Corrections welcome",
          text: 'Found something stale or wrong? <a href="contact.html">Tell us</a> and we will check it against the official source.',
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Who it is for",
      title: "Three kinds of reader, one city",
      lead: "Most people arrive here at one of three moments. The guide is written for all of them.",
    })}
    <div class="grid grid--3">
      ${card({
        kicker: "First visit",
        title: "First-time visitors",
        text: "Start with the itineraries and the planning guide: what to book before you fly, how to pay for transit and how not to spend your week in queues.",
        foot: '<a class="link-arrow" href="itineraries.html">Open the itineraries</a>',
      })}
      ${card({
        kicker: "Returning",
        title: "Second trips and slow travel",
        text: "For people who have seen the Empire State Building and now want to know where to eat in Queens, or why the Bronx deserves a full day.",
        foot: '<a class="link-arrow" href="boroughs.html">Explore the boroughs</a>',
      })}
      ${card({
        kicker: "Locals",
        title: "New Yorkers and their guests",
        text: "Free things, rainy days and one perfect Sunday in Brooklyn, for the people who live here and the friends they are showing around.",
        foot: '<a class="link-arrow" href="free-things-to-do-nyc.html">Free things to do</a>',
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Editorial policy")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">How we work</h2>
        <p class="lead">Four rules, applied to every page on the site.</p>
        <ul class="feature-list" style="margin-top:2rem">
          <li>
            <span class="feature-list__num">01</span>
            <div>
              <h4>Independence comes first</h4>
              <p>The editorial side is not for sale. We do not accept payment for inclusion, ranking or a favourable review.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">02</span>
            <div>
              <h4>We describe places we can vouch for</h4>
              <p>We do not invent restaurants, hotels or tours. If we cannot check a place, we describe the category and area instead.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">03</span>
            <div>
              <h4>We show our working</h4>
              <p>Prices are written as "from" or "around", with the date checked. Hours and fares are checked against the operator's own page.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">04</span>
            <div>
              <h4>We correct in public</h4>
              <p>When we get something wrong, we fix it. Corrections are the most useful email a reader can send us.</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="split__media">
        <img src="${img("brooklyn-bridge-park.webp")}" alt="A tower of the Brooklyn Bridge seen from Brooklyn Bridge Park" width="800" height="1000" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Money")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">How we make money — and what it does not buy</h2>
        <p>NYC Insider is free to read and has no paywall. It is funded by affiliate commissions and clearly labelled partnerships.</p>
        <p>Some links to ticket sellers, pass operators and booking sites are affiliate links. If you buy through one, the partner pays us a small commission at no extra cost to you. The price is the same, and the recommendation is not for sale.</p>
        <p>We do not run sponsored best-of lists or accept payment for a place to appear in an itinerary. Any paid collaboration is labelled before you read it.</p>
        <p>The full disclosure sits in our <a href="terms.html">terms of use</a>; data handling is in the <a href="privacy.html">privacy policy</a>.</p>
      </div>
      <div>
        ${callout({
          dark: true,
          icon: "◆",
          title: "The short version",
          text: "If we recommend a ticket or tour, we may earn from the link — and it should still be the right call for your trip. That is the deal we hold ourselves to.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Prices",
      title: "How we keep prices current",
      lead: "Prices are the fastest-moving thing in any guide. Here is what we re-check.",
    })}
    ${table({
      caption: "What NYC Insider re-checks and how often",
      head: ["What", "How often we check", "What the page tells you"],
      rows: [
        [
          "Attraction, pass and tour prices",
          "Before each season and when an operator changes pricing",
          "A from price, the date checked and a note that dynamic pricing can push the real cost higher.",
        ],
        [
          "Opening hours and closures",
          "Monthly, and when a reader flags a change",
          "Usual hours and known closures. Confirm on the venue's own site before a special trip.",
        ],
        [
          "Transit fares and rules",
          "When the MTA or an operator announces a change",
          "The current fare, the date it took effect, and cheaper alternatives.",
        ],
        [
          "Events and seasonal dates",
          "At the start of each season",
          "Dates we have verified, or a clear note that next year's are not announced yet.",
        ],
      ],
    })}
    <p class="muted" style="margin-top:1.5rem;max-width:72ch">Prices are a starting point, not a promise. Confirm before you book — and tell us if we are behind.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Coverage",
      title: "What the guide covers",
      lead: "Six sections, one trip. Start wherever your planning is least certain.",
    })}
    <div class="grid grid--3">
      ${card({
        kicker: "Plan",
        title: '<a href="itineraries.html">Itineraries</a>',
        text: "Three, five and seven day plans with travel time built in and one big thing per half-day.",
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
        text: "Which pass pays off, which does not, and how to buy Broadway and Statue of Liberty tickets.",
        foot: '<a class="link-arrow" href="passes.html">Open</a>',
      })}
      ${card({
        kicker: "Prepare",
        title: '<a href="plan-your-trip.html">Plan your trip</a>',
        text: "When to come, where to stay, how to get around, what it costs and what to book ahead.",
        foot: '<a class="link-arrow" href="plan-your-trip.html">Open</a>',
      })}
      ${card({
        kicker: "Eat",
        title: '<a href="food.html">Food and drink</a>',
        text: "Bagels, pizza, pastrami and the neighbourhoods where each one is at its best.",
        foot: '<a class="link-arrow" href="food.html">Open</a>',
      })}
    </div>
  </div>
</section>

${ctaBand({
  eyebrowText: "Say hello",
  title: "Questions, corrections or a trip you want us to cover?",
  text: "We read every message, especially if something on the site is wrong or out of date.",
  actions: `${btn({ href: "contact.html", label: "Contact us" })}${btn({
    href: "plan-your-trip.html",
    label: "Start planning",
    variant: "outline",
  })}`,
})}
`,
};
