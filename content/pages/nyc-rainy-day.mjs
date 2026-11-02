import {
  btn,
  sectionHead,
  pageHero,
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
} from "../components.mjs";

export default {
  path: "nyc-rainy-day.html",
  navSection: "journal",
  bodyClass: "page-inner",
  title: "New York on a Rainy Day — Indoor Plans",
  description:
    "What to do in New York when it rains: the best museums, Chelsea Market, Essex Market and Grand Central, a Broadway matinee and practical wet-weather advice.",
  priority: "0.7",
  changefreq: "monthly",
  ogType: "article",
  ogImage: "assets/img/subway-train.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "New York on a Rainy Day — Museums, Markets and Indoor Plans",
      author: { "@type": "Organization", name: "NYC Insider" },
      dateModified: "2026-11-02",
      inLanguage: "en",
    },
  ],
  render: () => `
${pageHero({
  image: img("subway-train.webp"),
  alt: "A New York subway train pulling into a station platform",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "journal.html", label: "Journal" },
    { href: "nyc-rainy-day.html", label: "Rainy day" },
  ],
  eyebrowText: "Journal · Weather",
  title: "New York on a rainy day",
  lead: "New York gets about 125 wet days a year, so rain is a scheduling problem rather than an emergency. Here is how to move the day indoors without wasting it.",
  meta: metaItems("Indoor plan", "Museums &amp; markets", "Verified November 2026"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("First, the good news")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Rain here is heavy and short</h2>
        <p class="lead">New York rain rarely settles in for a grey week. It arrives hard, floods a few intersections and moves on, which means most wet days still have a dry window in them.</p>
        <p class="muted">Treat a rainy day as a chance to do the indoor things you would otherwise skip: the museum you were going to rush, the food hall you were going to walk past, the matinee you were saving. Everything below is within a few minutes of a subway station.</p>
        <p class="muted">Expect 9–11 wet days in most months, slightly fewer in September and October. Build one indoor anchor into each day and the weather cannot ruin the trip.</p>
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("grand-central.webp")}" alt="The main concourse of Grand Central Terminal" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Museums",
      title: "The five museums that earn a wet day",
      lead: "Book timed entry before you leave the hotel. Turning up at 11am on a rainy Saturday and hoping is how you spend the morning in a queue.",
    })}
    <div class="grid grid--2">
      ${card({
        kicker: "Midtown · from $30",
        title: "MoMA",
        text: "Modern art over five floors, plus a garden and a film programme. The free Friday evening is for New York State residents only, so most visitors pay $30. Book a timed slot.",
        foot: '<span class="card__meta">Allow 2–3 hours</span>',
      })}
      ${card({
        kicker: "Upper East Side · from $30 · closed Wednesdays",
        title: "The Met",
        text: "The largest art museum in the country, and the one where rain is welcome — four hours will not exhaust it. Closed Wednesdays; pay-what-you-wish for New York State residents and tri-state students only.",
        foot: '<span class="card__meta">Allow 3–4 hours</span>',
      })}
      ${card({
        kicker: "Upper West Side · from $28",
        title: "American Museum of Natural History",
        text: "The reliable choice with children: dinosaurs, the blue whale and the planetarium. $28 general admission, $43 with one exhibition; tri-state residents pay what they wish.",
        foot: '<span class="card__meta">Allow 3 hours</span>',
      })}
      ${card({
        kicker: "Lower Manhattan · from $24",
        title: "9/11 Memorial &amp; Museum",
        text: "The plaza is free 8am–8pm, but the museum is the indoor experience: about two hours and emotionally demanding. Tickets $24–36; New Yorkers have a free window Sundays 4–7pm, with ID.",
        foot: '<span class="card__meta">Allow 2 hours</span>',
      })}
      ${card({
        kicker: "Lower East Side · timed tickets",
        title: "Tenement Museum",
        text: "Guided tours of restored Orchard Street apartments and the immigrants who lived in them. Small groups, timed entry, book ahead — walk-ups rarely get in.",
        foot: '<span class="card__meta">Allow 1–2 hours</span>',
      })}
      ${card({
        kicker: "Free options",
        title: "The free windows",
        text: "The Bronx Museum is always free, the Brooklyn Museum is suggested admission with free First Saturday evenings, and the Whitney is free on Friday nights for everyone.",
        foot: '<a class="link-arrow" href="free-things-to-do-nyc.html">See the free guide</a>',
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Markets &amp; food halls",
      title: "Eat your way out of the weather",
      lead: "Markets are the ideal rainy stop: indoors, free to enter, and structured so that a wet hour turns into a good lunch.",
    })}
    <div class="split">
      <div class="split__body" data-reveal>
        <h3 style="font-size:var(--step-1)">Chelsea Market</h3>
        <p class="muted">A former factory block in the Meatpacking District, now a covered market with food stalls, bakeries and shops. It is busy at lunchtime and quiet mid-afternoon. Los Tacos No. 1 has a branch here, with tacos at $5–6 each.</p>
        <h3 style="font-size:var(--step-1);margin-top:1.6rem">Essex Market</h3>
        <p class="muted">On the Lower East Side, Essex Market is the neighbourhood food hall: butchers, cheese, tacos, dumplings and coffee under one roof. It is less of a tourist attraction than Chelsea Market and more of a real market, which makes it the better rainy-day lunch.</p>
        <h3 style="font-size:var(--step-1);margin-top:1.6rem">Grand Central Terminal</h3>
        <p class="muted">The concourse and lower-level dining concourse are free, dry and five minutes from the 4, 5, 6, 7 and S trains. It is a good place to wait out a downpour with a coffee, and the Whispering Gallery outside the Oyster Bar is a free distraction.</p>
        <p class="muted" style="margin-top:1.6rem">All three are free to enter, close to subway stations and need no reservation. Budget $12–20 for lunch.</p>
      </div>
      <div class="split__media">
        <img src="${img("nyc-pizza-slice.webp")}" alt="A slice of New York pizza on a paper plate" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Indoor experiences",
      title: "Beyond museums",
      lead: "When you have had enough galleries, these are the other dry options worth the time.",
    })}
    <div class="grid grid--2">
      ${card({
        kicker: "Theatre",
        title: "A Broadway matinee",
        text: "The best rainy-day booking in the city: afternoon performances leave the evening free. The average paid ticket is about $131, but TKTS sells same-day seats at up to 50% off.",
        foot: '<a class="link-arrow" href="attractions.html">Broadway and attractions</a>',
      })}
      ${card({
        kicker: "Free and dry",
        title: "Libraries and stations",
        text: "The New York Public Library's Rose Main Reading Room is free, beautiful and warm. LinkNYC kiosks and subway platforms have free Wi-Fi, which helps when replanning on the move.",
        foot: '<a class="link-arrow" href="free-things-to-do-nyc.html">Free things to do</a>',
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__body" data-reveal>
        ${eyebrow("Practical")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Wet-weather logistics</h2>
        <p class="lead">A little planning keeps a rainy day from becoming a series of small defeats.</p>
        <h3 style="font-size:var(--step-1);margin-top:1.6rem">Book timed tickets early</h3>
        <p class="muted">MoMA, the 9/11 Museum and the Tenement Museum all use timed entry, and rain pushes demand up. Book the slot before breakfast, not at the door. If you cannot make it, contact the venue — many will move a slot.</p>
        <h3 style="font-size:var(--step-1);margin-top:1.6rem">Umbrella etiquette</h3>
        <p class="muted">Carry a small folding umbrella rather than a large one. On crowded pavements and subway stairs, a wet canopy at eye level is nobody's friend. Shake it out before going underground; a waterproof jacket is often more useful in the wind.</p>
        <h3 style="font-size:var(--step-1);margin-top:1.6rem">Subway entrances flood</h3>
        <p class="muted">Heavy rain pools at some street-level entrances and a few low-lying stations close. Do not walk through standing water on the stairs — use another entrance or the next station. Only about 150 of the system's 472 stations are step-free.</p>
        <h3 style="font-size:var(--step-1);margin-top:1.6rem">Move the reservation, not the day</h3>
        <p class="muted">Restaurants expect weather cancellations. Call early and ask to move the booking — most would rather rebook you than mark a no-show. Check tour operators' policies too: some run rain or shine.</p>
        <div class="split__actions">
          ${btn({ href: "getting-around.html", label: "Getting around in bad weather" })}
          ${btn({ href: "when-to-visit.html", label: "When to visit", variant: "outline" })}
        </div>
      </div>
      <div class="split__media">
        <img src="${img("times-square-day.webp")}" alt="Times Square on an overcast day" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Build a wet day",
      title: "A ready-made rainy-day plan",
      lead: "If the forecast is wrong and you need a plan at 9am, use this one. It is indoors almost all day and needs only one booking.",
    })}
    ${table({
      caption: "Suggested rainy-day schedule in New York",
      head: ["Time", "What", "Where", "Cost"],
      rows: [
        ["9.30am", "Coffee and a bagel", "Anywhere near your hotel", "$5–8"],
        ["10.30am", "Museum, booked ahead", "MoMA or the 9/11 Museum", "$24–30"],
        ["1pm", "Lunch indoors", "Chelsea Market or Essex Market", "$12–20"],
        ["3pm", "A matinee or the library", "Theatre District or Fifth Avenue at 42nd", "$0–130"],
        ["6pm", "Dinner, reservation moved if needed", "Neighbourhood restaurant", "$120–180 for two"],
      ],
    })}
    ${callout({
      icon: "◆",
      title: "The one thing to avoid",
      text: "Do not book an observation deck on a low-cloud day. You will pay $42–69 for fog. Rooftops need a clear forecast, and the best ones sell out on the clear days that follow a storm.",
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Rainy-day questions", lead: "" })}
    ${faq([
      {
        q: "How often does it rain in New York?",
        a: "<p>About 125 days a year, or 9–11 wet days in most months. Rain is usually heavy and short rather than an all-day drizzle, so a wet morning often turns into a usable afternoon.</p>",
      },
      {
        q: "Which museum is best on a rainy day?",
        a: "<p>The Met, if you have the time and it is not a Wednesday. MoMA if you want a shorter visit, the American Museum of Natural History with children, and the Tenement Museum for a small-group indoor hour.</p>",
      },
      {
        q: "What is open in New York when it rains?",
        a: "<p>Almost everything: museums, markets, food halls, theatres, shops and the subway all run as normal. Observation decks stay open but are pointless in low cloud, and ferries may be delayed in high wind.</p>",
      },
      {
        q: "Can I get a refund on a Broadway ticket if it rains?",
        a: "<p>No — shows go ahead in the rain and tickets are generally non-refundable. If the production cancels, the box office will exchange or refund. Same-day TKTS seats reduce the money at risk.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Weather-proof your trip",
      text: "Join the list for one useful New York email a week, including what is worth doing when the forecast turns.",
      source: "rainy-day",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Plan for the weather, not against it",
  text: "Pick the right month, keep one indoor anchor a day, and a rainy Tuesday stops being a disaster.",
  actions: `${btn({ href: "when-to-visit.html", label: "When to visit" })}${btn({
    href: "itineraries.html",
    label: "Browse itineraries",
    variant: "outline",
  })}`,
})}

${pageNav({
  prev: { href: "sunday-in-brooklyn.html", label: "A Sunday in Brooklyn" },
  next: { href: "journal.html", label: "The Journal" },
})}
`,
};
