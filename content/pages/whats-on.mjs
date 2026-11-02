import {
  pageHero,
  sectionHead,
  table,
  mediaCard,
  callout,
  faq,
  newsletter,
  ctaBand,
  pageNav,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "whats-on.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "What's on in New York — Seasonal Events",
  description:
    "New York's seasonal calendar in one place: Thanksgiving, Christmas, New Year's Eve, Restaurant Week, summer concerts and the US Open, with dates and booking windows.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/midtown-aerial-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "What's on in New York — Seasonal Events",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () => `
${pageHero({
  image: img("midtown-aerial-night.webp"),
  alt: "Midtown Manhattan's street grid and lit towers seen from above at night",
  crumbs: [{ href: "index.html", label: "Home" }, { href: "whats-on.html", label: "What's On" }],
  eyebrowText: "What's on",
  title: "What's on in New York",
  lead: "New York runs on a seasonal calendar: a parade in November, a tree in December, a ball drop at midnight, then months of free music and tennis. This is the hub for the six guides that cover it, with the dates worth planning around.",
  meta: metaItems("Six seasonal guides", "Dates for 2026–27", "Booking windows", "Official sources"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("How the year works")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">The city has a rhythm, and it is bookable</h2>
        <p class="lead">Most New York trips are planned around the weather. The better ones are planned around the calendar: the weeks when the city does something specific, and the weeks when it is simply itself.</p>
        <p class="muted">The year divides into three useful blocks. Late November to early January is the holiday season — parade, tree, lights, New Year's Eve, and the highest hotel rates of the year. Late January to mid-February is the quiet, cold, cheap block, when Restaurant Week gives you a reason to eat well. From late May to early September the city moves outdoors: free concerts, long evenings, beaches and the US Open.</p>
        <p class="muted">Each guide below covers one season in detail: what happens, when to arrive, what to book and what the crowds are actually like. Dates are the 2026 and early 2027 editions where confirmed. Where a 2027 date is not yet announced, we say so and point you to the official source.</p>
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("manhattan-skyline-night.webp")}" alt="Lower Manhattan's towers lit at night across the East River" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Next 90 days",
      title: "What is happening from now to early February",
      lead: "From November 2026, the calendar runs straight from Thanksgiving into Christmas, New Year's Eve and the winter Restaurant Week. Later 2027 events are listed underneath with the caveat that some dates are still to be confirmed.",
    })}
    ${table({
      caption: "New York events from November 2026 to August 2027, with dates and booking notes",
      head: ["When", "What happens", "What to do about it"],
      rows: [
        ["28 October 2026–28 February 2027", "Bryant Park Winter Village: free-admission rink, paid rentals, small shops", "Skate on a weekday morning; shop before noon"],
        ["26 November 2026", "Macy's Thanksgiving Day Parade, 8:30am–noon, Central Park West &amp; 77th Street to Herald Square; free", "Watch from the upper route; book the meal early"],
        ["2 December 2026", "Rockefeller Center tree lighting; the tree stays up until about 9 January 2027", "See it a few days later, early morning"],
        ["31 December 2026", "Times Square New Year's Eve ball drop at 11:59pm; free, no tickets", "Arrive early afternoon or book a table instead"],
        ["Late January–mid February 2027", "NYC Restaurant Week: prix-fixe menus at $30, $45 and $60", "Winter 2027 dates TBA — check the official site"],
        ["3–12 June 2027", "Tribeca Festival across Lower Manhattan", "Programme and tickets announced closer to the date"],
        ["June–August 2027", "Free summer concerts: SummerStage, BRIC Celebrate Brooklyn!, Lincoln Center Summer for the City", "Schedules published in late spring"],
        ["Late August 2027", "US Open at Flushing Meadows, Queens (2026 edition: 30 August–13 September)", "2027 dates TBA — check usopen.org"],
      ],
    })}
    <p class="muted" style="margin-top:1.2rem">Dates change. Confirm with the organiser before booking flights or a hotel around any event, and check the official site in the week before you travel.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The six guides",
      title: "Pick the season you are travelling in",
      lead: "Each guide is written for a specific window: what it is like on the ground, what to book and when, and how to see the main event without losing the rest of the trip to it.",
    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "thanksgiving-nyc.html",
        image: img("central-park-bow-bridge.webp"),
        alt: "Bow Bridge in Central Park on a clear autumn morning",
        kicker: "November",
        title: "Thanksgiving in NYC",
        text: "The 100th Macy's parade, the meal, and the quiet weekend that follows. 26 November 2026.",
        meta: "Seasonal guide",
      })}
      ${mediaCard({
        href: "christmas-in-nyc.html",
        image: img("fifth-avenue-cab.webp"),
        alt: "A yellow taxi on Fifth Avenue in winter",
        kicker: "December",
        title: "Christmas in NYC",
        text: "Rockefeller tree, Fifth Avenue windows and Bryant Park Winter Village — plus the crowds.",
        meta: "Seasonal guide",
      })}
      ${mediaCard({
        href: "new-years-eve-nyc.html",
        image: img("times-square-night.webp"),
        alt: "Times Square billboards glowing at night",
        kicker: "31 December",
        title: "New Year's Eve in NYC",
        text: "How the ball drop works, how early to arrive, and three calmer ways to see midnight.",
        meta: "Seasonal guide",
      })}
      ${mediaCard({
        href: "restaurant-week-nyc.html",
        image: img("nyc-pizza-slice.webp"),
        alt: "A slice of New York pizza on a paper plate",
        kicker: "Jan &amp; Jul",
        title: "NYC Restaurant Week",
        text: "Prix-fixe menus at $30, $45 and $60, twice a year — and how to pick a table worth having.",
        meta: "Seasonal guide",
      })}
      ${mediaCard({
        href: "summer-in-nyc.html",
        image: img("brooklyn-bridge-sunset.webp"),
        alt: "The Brooklyn Bridge silhouetted against a sunset",
        kicker: "June–August",
        title: "Summer in NYC",
        text: "Free concerts, the waterfront, beaches and how to plan around the heat and storms.",
        meta: "Seasonal guide",
      })}
      ${mediaCard({
        href: "us-open-nyc.html",
        image: img("queens-astoria.webp"),
        alt: "The Manhattan skyline seen from Astoria, Queens",
        kicker: "Late August",
        title: "The US Open in NYC",
        text: "Two weeks at Flushing Meadows: grounds passes, night sessions and the 7 train.",
        meta: "Seasonal guide",
      })}
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Booking windows",
      title: "What to book, and how far ahead",
      lead: "New York rewards early booking most in the holiday weeks and least in January. This is the rough order in which things sell out.",
    })}
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${table({
          caption: "Booking windows for New York seasonal events and holidays",
          head: ["Booking", "How far ahead"],
          rows: [
            ["Thanksgiving and Christmas hotels", "Four to six months"],
            ["New Year's Eve tables and hotel packages", "Four to six months"],
            ["Restaurant Week reservations", "As soon as each edition opens"],
            ["US Open tickets", "When the official sale opens, months ahead"],
            ["Broadway over the holidays", "Two to three months"],
            ["Free summer concerts", "No booking for most; some ticketed shows"],
          ],
        })}
        <p class="muted" style="margin-top:1rem">These are working rules rather than guarantees. Hotel rates and availability for the last week of December behave differently every year.</p>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Holiday weeks cost more",
          text: "Hotel rates in the weeks around Thanksgiving, Christmas and New Year are the highest of the year. If your dates are flexible, the first two weeks of December give you the atmosphere at a lower price.",
        })}
        ${callout({
          icon: "☂",
          title: "Free events still need planning",
          text: "The parade and the ball drop cost nothing but demand hours of standing and an early arrival. Decide whether the experience is worth that trade before you build a day around it.",
        })}
        ${callout({
          icon: "◷",
          title: "January is the value month",
          text: "After New Year, the city empties and prices fall. Restaurant Week starts in late January, museums are quiet and the coldest weeks double as the cheapest.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Questions",
      title: "Seasonal calendar questions",
      lead: "",
    })}
    ${faq([
      {
        q: "What is the biggest event in New York in November?",
        a: "<p>The Macy's Thanksgiving Day Parade on 26 November 2026, running from Central Park West and 77th Street to Herald Square between 8:30am and noon. It is free and unticketed.</p>",
      },
      {
        q: "When does the Christmas season start in New York?",
        a: "<p>Bryant Park Winter Village opens on 28 October 2026 and the Rockefeller Center tree is lit on 2 December 2026, staying up until about 9 January 2027. Early December is the sweet spot: decorated, open and less crowded than the final week of the year.</p>",
      },
      {
        q: "Do I need tickets for New Year's Eve in Times Square?",
        a: "<p>No. The ball drop is free and unticketed, with first-come entry to the viewing areas. Arrive in the early afternoon, expect security screening and plan to stand for hours in the cold.</p>",
      },
      {
        q: "When is NYC Restaurant Week 2027?",
        a: "<p>Restaurant Week runs in late January to mid-February and mid-July to mid-August each year, with prix-fixe menus at $30, $45 and $60. The exact 2027 dates are still to be announced — check the official NYC Tourism page before booking.</p>",
      },
      {
        q: "What happens in New York in summer?",
        a: "<p>Free concerts at SummerStage, BRIC Celebrate Brooklyn! and Lincoln Center Summer for the City, long evenings in the parks, beaches and the US Open at the end of August. July and August are hot and humid, so plan outdoor time for the morning and evening.</p>",
      },
      {
        q: "When is the US Open in 2027?",
        a: "<p>The 2026 edition ran from 30 August to 13 September. The 2027 dates are TBA, so check the official US Open site before booking travel around the tournament.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "The seasonal email",
      text: "What is worth booking this month, what to avoid, and the dates that actually matter — one short email a week.",
      source: "whats-on",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Before you book",
  title: "Match the season to the trip you want",
  text: "If the calendar is the reason for your visit, start with the season guide and then build the days around it. If you are still choosing dates, start with the weather.",
  actions: `<a class="btn" href="when-to-visit.html">Weather by month</a> <a class="btn btn--outline" href="plan-your-trip.html">Plan the whole trip</a>`,
})}

${pageNav({
  prev: { href: "when-to-visit.html", label: "When to visit New York" },
  next: { href: "thanksgiving-nyc.html", label: "Thanksgiving in NYC" },
})}
`,
};
