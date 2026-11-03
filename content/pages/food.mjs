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
  path: "food.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Where to Eat in New York City — Food Guide",
  description:
    "What to eat in New York and where: bagels, pizza and pastrami prices, ten well-known affordable spots, splurge restaurants and food by neighbourhood.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/nyc-pizza-slice.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Where to Eat in New York City",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () => `
${pageHero({
  image: img("nyc-pizza-slice.webp"),
  alt: "A slice of New York pizza on a paper plate",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "boroughs.html", label: "Boroughs" },
    { href: "food.html", label: "Food &amp; Drink" },
  ],
  eyebrowText: "Food &amp; drink",
  title: "Eat like the city does",
  lead: "New York's food is not one cuisine but a hundred neighbourhoods arguing about lunch. Here is what to order, what it costs, and where the city actually eats — from a $4.50 slice to a $365 tasting menu.",
  meta: metaItems("Verified November 2026", "Prices change — confirm", "All five boroughs"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Start here")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">The five foods worth planning a day around</h2>
        <p class="lead">You can eat well in New York without chasing a single trend. The city's identity is in a short list of foods that are cheap, portable and perfected over decades.</p>
        <p class="muted">A bagel is breakfast, a slice is lunch at 3pm, pastrami is a sit-down event, and dumplings are the reason you walk one more block in Chinatown. Prices below are typical in 2026, before tax and tip; menus move, so treat them as a guide rather than a promise.</p>
        <div class="stats" style="margin-top:2rem">
          <div class="stat"><strong>$4.50</strong><span>plain slice</span></div>
          <div class="stat"><strong>~$5.50</strong><span>bagel with cream cheese</span></div>
          <div class="stat"><strong>$32–36</strong><span>pastrami on rye</span></div>
        </div>
      </div>
      <div class="split__media split__media--wide">
        <img src="${img("nyc-bagel-cream-cheese.webp")}" alt="A New York bagel split open and spread with cream cheese" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "What things cost",
      title: "Iconic foods and typical prices",
      lead: "These are the numbers to hold in your head. Anything far above them is usually paying for the room, not the food.",
    })}
    ${table({
      caption: "Typical 2026 prices for classic New York foods",
      head: ["Food", "What it is", "Typical price", "Where to try it"],
      rows: [
        ["Bagel with cream cheese", "Hand-rolled, boiled, chewy, toasted only if you insist", "$4.50–7 (classic about $5.50)", "Ess-a-Bagel in Midtown East or near the Flatiron"],
        ["Lox bagel", "Bagel, cream cheese, cured salmon, capers and onion", "$16–22", "Any old-school bagel shop with a fish counter"],
        ["Plain slice", "Large, thin, foldable, served on a paper plate", "$4–5.50", "Joe's Pizza, Greenwich Village"],
        ["18-inch pie", "A whole pizza to share, usually four to six slices each", "$28–38", "Neighbourhood pizzerias, not the tourist strips"],
        ["Pastrami on rye", "Hand-cut, mustard, a pickle, a plastic tray", "about $32–36", "Katz's Delicatessen, Lower East Side"],
        ["Coffee", "Drip or espresso, to stay or to walk with", "$3.50–5", "Everywhere; the queue is a quality signal"],
        ["Food-truck lunch", "Rice bowl, kebab, tacos or a platter", "$12–18", "Midtown office blocks, parks, weekday lunch"],
        ["Sit-down dinner for two", "Mid-range restaurant, two courses each, no drinks", "$120–180 pre-tax (about $155–230 all-in)", "Anywhere with tablecloths and neighbourhood regulars"],
      ],
    })}
    ${callout({
      icon: "%",
      title: "Sales tax is not the tip",
      text: "New York City sales tax is 8.875% and is added at the register. Tipping is separate and expected at sit-down restaurants — see the practical notes further down.",
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Ten good, affordable places",
      title: "Eat well for under $16",
      lead: "These are long-running, well-known spots rather than discoveries: reliable, fast, and priced for people who live here. A few have queues and most are informal.",
    })}
    ${table({
      caption: "Ten affordable, well-known places to eat in New York City",
      head: ["Place", "Neighbourhood", "Order this", "Typical price"],
      rows: [
        ["<strong>Joe's Pizza</strong>", "Greenwich Village", "A plain slice, eaten standing up", "about $4.50"],
        ["<strong>Prince Street Pizza</strong>", "SoHo", "Pepperoni square", "about $5.50"],
        ["<strong>Ess-a-Bagel</strong>", "Midtown East / Flatiron", "Bagel with cream cheese", "$6–8"],
        ["<strong>Los Tacos No. 1</strong>", "Chelsea Market &amp; Times Square", "Two or three tacos", "$5–6 each"],
        ["<strong>Xi'an Famous Foods</strong>", "Several locations", "Cumin-lamb hand-pulled noodles", "$12–15"],
        ["<strong>The Halal Guys</strong>", "W 53rd &amp; 6th", "Chicken or gyro platter", "$12–15"],
        ["<strong>Vanessa's Dumpling House</strong>", "Lower East Side / Chinatown", "Eight dumplings", "about $7"],
        ["<strong>Gray's Papaya</strong>", "Upper West Side", "Recession Special (two dogs and a drink)", "about $8"],
        ["<strong>Mamoun's Falafel</strong>", "Greenwich Village", "Falafel sandwich", "$7–9"],
        ["<strong>Peter Pan Donuts</strong>", "Greenpoint, Brooklyn", "A doughnut and a coffee", "about $5"],
      ],
    })}
    ${callout({
      icon: "◷",
      title: "Eat at 11:30 or after 2",
      text: "Most cheap counters peak between 12:30 and 2pm. Shifting lunch by an hour usually turns a 25-minute queue into a five-minute one — particularly at Los Tacos No. 1 and Joe's Pizza.",
    })}
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The other end",
      title: "When you want to spend the money",
      lead: "New York's fine dining is genuinely world-class. Book as early as the restaurant allows and treat the price as the entry fee for a long evening.",
    })}
    <div class="grid grid--3">
      ${card({
        kicker: "Seafood · 3 Michelin stars",
        title: "Le Bernardin",
        text: "A tasting menu built on fish, served with enormous precision. Allow roughly $300 per person before wine, tax and tip.",
        foot: '<span class="card__meta">Midtown</span>',
      })}
      ${card({
        kicker: "Plant-based tasting menu",
        title: "Eleven Madison Park",
        text: "The city's most discussed tasting menu, now entirely plant-based. Expect around $365 per person before drinks.",
        foot: '<span class="card__meta">Flatiron</span>',
      })}
      ${card({
        kicker: "Steakhouse",
        title: "Peter Luger",
        text: "Dry-aged porterhouse for two, sliced at the table. Roughly $150 for the steak alone; it is a Brooklyn institution, not a bargain.",
        foot: '<span class="card__meta">Williamsburg</span>',
      })}
    </div>
    <p class="muted" style="margin-top:2rem;max-width:72ch">Other names worth knowing: Carbone in Greenwich Village for a red-sauce revival, Keens Steakhouse for its mutton chop, and Balthazar in SoHo for the room as much as the food. All of them need a reservation, and none is a place to walk into on a Saturday at 8pm.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "By neighbourhood",
      title: "Where to go for a particular meal",
      lead: "New York rewards travelling for food. Four neighbourhoods cover most of what the city does best, and each is a half-day out in its own right.",
    })}
    <div class="grid grid--2">
      <article class="card">
        <span class="card__kicker">Queens · 7 / E / F / M</span>
        <h3>Flushing, Jackson Heights and Astoria</h3>
        <p>Take the 7 train to the end and eat Chinese food that bears no relation to what you get in Manhattan. Flushing is the city's best Chinese neighbourhood; Jackson Heights, around 74th Street, is the heart of Little India and one of the most linguistically diverse places on earth; Astoria carries Greek heritage and a strong café culture. Go hungry and order by pointing.</p>
        <div class="card__foot"><a class="link-arrow" href="queens.html">Explore Queens</a></div>
      </article>
      <article class="card">
        <span class="card__kicker">Brooklyn · F / L / 2 / 3</span>
        <h3>Williamsburg, Greenpoint and Park Slope</h3>
        <p>Brooklyn is where the city eats on a Sunday. Williamsburg and Greenpoint have bakeries, pizza and Peter Pan Donuts; Park Slope has the family-friendly restaurants and brownstone streets; Prospect Heights puts you near the museum and the park. Dinner at Peter Luger is the old-Brooklyn move.</p>
        <div class="card__foot"><a class="link-arrow" href="brooklyn.html">Explore Brooklyn</a></div>
      </article>
      <article class="card">
        <span class="card__kicker">Manhattan · F / J / M / Z</span>
        <h3>Lower East Side and Chinatown</h3>
        <p>The densest eating in Manhattan. Vanessa's Dumpling House for cheap dumplings, Katz's Delicatessen for the full pastrami ritual, and the bakeries and noodle shops along Grand and Mott streets. Come on a weekday if you can — the weekend crowds are real.</p>
        <div class="card__foot"><a class="link-arrow" href="manhattan.html">Explore Manhattan</a></div>
      </article>
      <article class="card">
        <span class="card__kicker">The Bronx · B / D / 4</span>
        <h3>Arthur Avenue</h3>
        <p>Little Italy survives here, not in Manhattan. The retail market is the anchor, with butchers, cheese counters and bakeries under one roof; Mike's Deli and Zero Otto Nove are the names to look for. Go at lunchtime, bring cash for the market stalls, and leave room for bread.</p>
        <div class="card__foot"><a class="link-arrow" href="bronx.html">Explore the Bronx</a></div>
      </article>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__body" data-reveal>
        ${eyebrow("Practical")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Tipping, cash, queues and reservations</h2>
        <p class="lead">New York restaurant customs are consistent and easy to get right. The short version: tip properly, carry a little cash, and do not fight the queue.</p>
        <h3 style="font-size:var(--step-1);margin-top:1.6rem">Tipping</h3>
        <p class="muted">18–22% is standard at a sit-down restaurant, and 20% is the safe middle. For taxis, 15–20%. Bag handlers get $2–5 a bag, bartenders $1–2 a drink, and hotel housekeeping $3–5 a night. Tipping is not included in the bill unless the menu says so, and the 8.875% sales tax is not a substitute for a tip.</p>
        <h3 style="font-size:var(--step-1);margin-top:1.6rem">Cash or card</h3>
        <p class="muted">Almost everywhere takes cards, including the cheap counters. A few old-school places and many market stalls still prefer cash, so carry $20–40 rather than relying entirely on your phone. Tipping jars at the counter are normal but optional.</p>
        <h3 style="font-size:var(--step-1);margin-top:1.6rem">Queues</h3>
        <p class="muted">A queue outside a small restaurant usually means it is good, not that it is slow. The exception is a queue that does not move because everyone is photographing the food. If the line is longer than 25 minutes at somewhere cheap, eat somewhere else and come back — New York has another excellent option within two blocks.</p>
        <h3 style="font-size:var(--step-1);margin-top:1.6rem">Reservations</h3>
        <p class="muted">Book the splurge restaurants as early as they allow, and use Resy or OpenTable for the mid-range. Everything on the ten-spot list is walk-in. Restaurant Week runs late January to mid-February and mid-July to mid-August with prix-fixe menus at $30, $45 and $60 — a cheap way to try a restaurant that would otherwise be a stretch.</p>
        <div class="split__actions">
          ${btn({ href: "budget.html", label: "Work out your food budget" })}
          ${btn({ href: "plan-your-trip.html", label: "Plan your trip", variant: "outline" })}
        </div>
      </div>
      <div class="split__media">
        <img src="${img("nyc-bagel.webp")}" alt="A New York bagel shop storefront" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Food questions we get a lot", lead: "" })}
    ${faq([
      {
        q: "What food is New York City famous for?",
        a: "<p>Bagels, pizza by the slice, pastrami on rye and cheesecake are the classics. The more useful answer is that New York is a city of immigrant cuisines: dumplings in Chinatown and Flushing, tacos, falafel, Greek food in Astoria and Italian-American cooking on Arthur Avenue.</p>",
      },
      {
        q: "How much should I budget for food per day?",
        a: "<p>Eating cheaply — bagel breakfast, slice or taco lunch, casual dinner — is roughly $45–70 a day. Our overall daily budget guide puts a budget trip at $130–200 per person excluding the hotel, with a mid-range food day closer to $80–120. A sit-down dinner for two mid-range runs about $120–180 pre-tax.</p>",
      },
      {
        q: "Is the pizza really better in New York?",
        a: "<p>The slice is a format, not a cuisine: thin, wide, foldable and cheap. It is very good at its best and ordinary at its worst. Joe's Pizza in Greenwich Village and Prince Street Pizza in SoHo are reliable starting points; the average neighbourhood place is usually decent too.</p>",
      },
      {
        q: "Do I need to tip at a counter?",
        a: "<p>Not required. At a counter where you order and collect your own food, a dollar in the jar or an optional tip on the screen is plenty. At a sit-down restaurant with table service, 18–22% is expected.</p>",
      },
      {
        q: "Where can I eat if I am vegetarian?",
        a: "<p>Almost everywhere. Indian food in Jackson Heights, falafel at Mamoun's, dumplings and noodle shops in Chinatown, and most Italian restaurants will feed you well. Eleven Madison Park is the city's most famous plant-based tasting menu if you want a splurge.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Deeper dive",
      title: "The best pizza in New York, by style",
      lead: "Slice, square, coal-fired or Neapolitan — where to go for each, and what to order when you get there.",
      action: `<a class="link-arrow" href="best-pizza-nyc.html">Read the pizza guide</a>`,
    })}
    <div class="card" style="max-width:720px">
      <span class="card__kicker">Food guide</span>
      <h3><a href="best-pizza-nyc.html">Best pizza in NYC</a></h3>
      <p>Joe's, Prince Street, Juliana's, L&amp;B Spumoni Gardens and the rest — with neighbourhoods, prices and how to order like a local.</p>
      <div class="card__foot"><a class="link-arrow" href="best-pizza-nyc.html">Read the guide</a></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "One good New York food tip a week",
      text: "Join the list for a short weekly email: what is in season, which queues are worth it, and the occasional new opening worth knowing about.",
      source: "food",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Eat your way through the boroughs",
  text: "Food is the fastest way to understand how different the five boroughs are. Start with a borough guide, then build the trip around it.",
  actions: `${btn({ href: "boroughs.html", label: "Explore the boroughs" })}${btn({
    href: "journal.html",
    label: "Read the Journal",
    variant: "outline",
  })}`,
})}

${pageNav({
  prev: { href: "staten-island.html", label: "Staten Island" },
  next: { href: "journal.html", label: "The Journal" },
})}
`,
};
