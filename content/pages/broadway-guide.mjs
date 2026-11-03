import {
  btn,
  sectionHead,
  pageHero,
  mediaCard,
  card,
  callout,
  table,
  faq,
  newsletter,
  ctaBand,
  pageNav,
  img,
  metaItems,
  eyebrow,
  verifiedNote,
} from "../components.mjs";

const faqItems = [
  {
    q: "How much do Broadway tickets cost?",
    a: "<p>The average paid Broadway ticket in the 2025–26 season was $131.09. That is the middle of the market: TKTS seats are up to 50% off, rush and lottery tickets run roughly $30–50, and premium seats cost more.</p>",
  },
  {
    q: "What is TKTS and where are the booths?",
    a: "<p>TKTS sells same-day seats, plus some next-day matinees, at up to 50% off, with fees added. The Times Square booth (Father Duffy Square) is open Monday, Tuesday and Friday 3–8pm and Wednesday, Thursday, Saturday and Sunday 11am–8pm; Lincoln Center runs Tuesday to Saturday 11am–6pm.</p>",
  },
  {
    q: "How do rush and lottery tickets work?",
    a: "<p>Rush tickets are cheap seats released on the day: digital rush through TodayTix from around 09:00, or at the box office when it opens, typically around $30–50. Digital lotteries through TodayTix, Broadway Direct or Lucky Seat cost roughly $30–45 and are drawn the day before or morning of.</p>",
  },
  {
    q: "When should I book Broadway tickets?",
    a: "<p>For a specific show on a specific night, book two to three weeks ahead — longer for holidays and prime weekends. If the show matters less than the night out, TKTS and rush are cheaper.</p>",
  },
  {
    q: "What is NYC Broadway Week?",
    a: "<p>It is NYC Tourism's 2-for-1 programme: 50% off each ticket when you buy at least two, including fees. It runs twice a year, in late summer and winter. The fall 2026 edition has ended; winter 2027 dates and shows are published shortly before it begins — check the official page.</p>",
  },
];

export default {
  path: "broadway-guide.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Broadway Tickets Guide — TKTS, Rush and Booking",
  description:
    "How Broadway ticketing works in New York: TKTS same-day seats up to 50% off, rush and lottery tickets, booking timelines, seat advice and when to pay full price.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/broadway-theatre-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Broadway Tickets Guide — TKTS, Rush and Booking",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a.replace(/<[^>]+>/g, "") },
      })),
    },
  ],
  render: () => `
${pageHero({
  image: img("broadway-theatre-night.webp"),
  alt: "A Broadway theatre marquee lit up at night in the Theatre District",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "attractions.html", label: "Things to Do" },
    { href: "broadway-guide.html", label: "Broadway tickets" },
  ],
  eyebrowText: "Theatre District",
  title: "Broadway tickets, without the guesswork",
  lead: "Broadway tickets are not one price but a range, and the range depends on how you buy. Here is how the system works, what TKTS and rush really save, and when full price makes sense.",
  meta: metaItems("Average paid $131.09", "TKTS up to 50% off", "Rush and lottery", "Prices checked November 2026"),
})}

<div class="container">
  ${verifiedNote({ scope: "Theatre schedules, TKTS hours and ticket prices" })}
</div>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("How it works")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">One show, four ways to buy a seat</h2>
        <p class="lead">Every Broadway theatre sells the same seat at several prices over a run's life. Knowing which window you are buying in matters more than the show you pick.</p>
        <p class="muted">Broadway runs on a weekly schedule: evenings usually at 19:00 or 20:00, matinees on Wednesday and Saturday afternoons and on Sunday, and most shows dark on Monday, some on Tuesday. Theatres cluster between 41st and 54th Streets around Times Square.</p>
        <p class="muted">Tickets come from the show's official site, Telecharge or Broadway Direct, the box office, or discount channels such as TKTS, rush and lotteries. The seat is the same; the price and the certainty are not.</p>
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("times-square-night.webp")}" alt="Times Square's neon billboards at night, near the Theatre District" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The options",
      title: "Where the savings actually are",
      lead: "Four routes to a seat, each trading certainty for money.",
    })}
    <div class="grid grid--2">
      ${card({
        kicker: "Buy ahead",
        title: "Official advance",
        text: "The full-price route, booked days or weeks ahead. The average paid Broadway ticket in 2025–26 was $131.09 — roughly what a decent seat costs when you choose the date.",
      })}
      ${card({
        kicker: "Same day",
        title: "TKTS",
        text: "Same-day seats up to 50% off, plus some next-day matinees. Two booths: Times Square and Lincoln Center. Fees are added, and the best-selling shows may have nothing left.",
      })}
      ${card({
        kicker: "Last minute",
        title: "Rush tickets",
        text: "Cheap seats released on the day: digital rush through TodayTix from around 09:00 (~$30–50), or the box office at opening (~$40 cash). Availability depends on the show.",
      })}
      ${card({
        kicker: "The gamble",
        title: "Lotteries and standing room",
        text: "Lotteries via TodayTix, Broadway Direct or Lucky Seat cost ~$30–45 and are drawn the day before or morning of. When a show sells out, standing room may be sold on the day (~$30–45, partial view).",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "TKTS in practice",
      title: "Two booths, two sets of hours",
      lead: "TKTS is the most reliable discount in the Theatre District, but not instant.",
    })}
    ${table({
      caption: "TKTS booth locations, opening hours and what each sells",
      head: ["Booth", "Hours", "What it sells"],
      rows: [
        [
          "<strong>TKTS Times Square</strong><br><span class=\"muted\">Father Duffy Square</span>",
          "Mon/Tue/Fri 3–8pm; Wed/Thu/Sat/Sun 11am–8pm",
          "Same-day evening seats and next-day matinees, up to 50% off; fees apply",
        ],
        [
          "<strong>TKTS Lincoln Center</strong>",
          "Tue–Sat 11am–6pm",
          "Same-day seats, up to 50% off; fees apply",
        ],
      ],
    })}
    ${callout({
      icon: "◆",
      title: "How to work the queue",
      text: "Check the board before you join the line, have a second choice ready, and go on a weeknight if you can — the selection is better and the queue shorter.",
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Timing")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">When to book what</h2>
        <p class="lead">The right moment depends on whether you are buying certainty or a discount.</p>
        <ul class="feature-list" style="margin-top:2rem">
          <li>
            <span class="feature-list__num">01</span>
            <div>
              <h4>Three months or more</h4>
              <p>Holidays, prime weekends and a specific popular show. Book when tickets go on sale.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">02</span>
            <div>
              <h4>Two to three weeks</h4>
              <p>The normal window for a named show on a chosen night. The best seats go first.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">03</span>
            <div>
              <h4>The day before</h4>
              <p>Digital lotteries open in the days before a performance. Enter them all — the tickets are cheap.</p>
            </div>
          </li>
          <li>
            <span class="feature-list__num">04</span>
            <div>
              <h4>The day of</h4>
              <p>TKTS, rush and standing room: the cheapest route, with the least certainty.</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        ${callout({
          icon: "★",
          title: "What to see, by category",
          text: "Long-running musicals are the easiest place to find a midweek discount. Plays and limited runs should be booked ahead. Family shows sell weekend matinees first, so book early.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Seats and venues",
          title: "What you are actually paying for",
          lead: "",
        })}
        <div class="prose">
          <p>Seat quality is mostly about how much of the stage you can see. Orchestra centre is the classic view; the front mezzanine is often better value for a musical, because you see the full stage at once. The balcony is cheaper and further away, and the extreme sides of any level are usually partial view.</p>
          <p>Theatres vary in size, so check the specific house; in most, premium seats are the front orchestra and centre mezzanine, while the rear mezzanine and side orchestra are where discounts appear. A partial-view seat is fine for a play, not a dance-heavy musical. Arrive 15–20 minutes early for security; phones off, no photos or outside food.</p>
        </div>
      </div>
      <div>
        ${sectionHead({
          eyebrowText: "Budget vs premium",
          title: "The four price points",
          lead: "",
        })}
        ${table({
          caption: "Broadway ticket strategies compared by typical cost and trade-off",
          head: ["Strategy", "Typical cost", "Trade-off"],
          rows: [
            ["TKTS same day", "Up to 50% off face value", "Best on weeknights; no guarantee of the show"],
            ["Rush", "Around $30–50", "Limited seats on the day"],
            ["Lottery", "Around $30–45", "A gamble; results the day before"],
            ["Advance full price", "Average paid $131.09 (2025–26)", "Certainty and your chosen seat; costs the most"],
            ["Standing room", "Around $30–45", "Only when sold out; partial view, no seat"],
          ],
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Broadway Week",
      title: "The 2-for-1 window",
      lead: "",
    })}
    ${callout({
      icon: "★",
      title: "NYC Broadway Week: 2-for-1, twice a year",
      text: "NYC Tourism runs Broadway Week in late summer and winter: 2-for-1 tickets, meaning 50% off each when you buy at least two, including fees. The fall 2026 edition has ended; the winter 2027 edition is next, with dates and shows published shortly before it begins. We do not print unconfirmed dates — check the <a href=\"https://www.nyctourism.com/broadway-week/\" rel=\"nofollow noopener\" target=\"_blank\">official NYC Broadway Week page</a>.",
    })}
    <p class="muted" style="margin-top:1.4rem">Outside those windows, TKTS is the closest thing to a citywide discount.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Questions",
      title: "Broadway ticket questions",
      lead: "",
    })}
    ${faq(faqItems)}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Keep reading",
      title: "Plan the rest of the trip",
      lead: "A Broadway night works best when the days around it stay loose.",    })}
    <div class="grid grid--3">
      ${mediaCard({
        href: "attractions.html",
        image: img("broadway-marquee.webp"),
        alt: "A Broadway street sign and billboards in daylight",
        kicker: "Plan",
        title: "All New York attractions",
        text: "Prices, booking order and the free alternatives.",
        meta: "Prices checked November 2026",
      })}
      ${mediaCard({
        href: "itineraries.html",
        image: img("times-square-night.webp"),
        alt: "Times Square at night",
        kicker: "Itineraries",
        title: "New York itineraries",
        text: "Where a theatre night fits in a three, five or seven-day trip.",
        meta: "3, 5 and 7 days",
      })}
      ${mediaCard({
        href: "passes.html",
        image: img("skyline-window-view.webp"),
        alt: "The Manhattan skyline seen through a high window",
        kicker: "Passes",
        title: "NYC passes compared",
        text: "Whether a sightseeing pass is worth it for the rest of the trip.",
        meta: "5 passes compared",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "The booking email",
      text: "One short weekly note on what is worth booking in New York — and what is not.",
      source: "broadway-guide",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Build the trip around the show",
  text: "Book the theatre night first, then plan the days around it. A good itinerary leaves room for a late finish and a slow morning.",
  actions: `${btn({ href: "itineraries.html", label: "See the itineraries" })}${btn({
    href: "attractions.html",
    label: "Browse attractions",
    variant: "outline",
  })}`,
})}

${pageNav({
  prev: { href: "attractions.html", label: "Things to do" },
  next: { href: "whats-on.html", label: "What's on" },
})}
`,
};
