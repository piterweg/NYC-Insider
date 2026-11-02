import {
  btn,
  sectionHead,
  pageHero,
  callout,
  table,
  faq,
  newsletter,
  pageNav,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "budget.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "New York City Trip Budget — Daily Costs, Hotels, Food",
  description:
    "What a New York City trip costs: budget bands, hotel ranges, attraction and food prices, taxes, tipping, money-saving tactics and a sample five-day budget.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/fifth-avenue-cab.webp",
  breadcrumbs: [
    { href: "index.html", label: "Home" },
    { href: "budget.html", label: "Budget" },
  ],
  render: () => `
${pageHero({
  image: img("fifth-avenue-cab.webp"),
  alt: "A yellow taxi on a Manhattan avenue",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "budget.html", label: "Budget" },
  ],
  eyebrowText: "Budget",
  title: "What New York really costs",
  lead: "New York can be done on a careful budget or very little care. The difference is mostly accommodation, sit-down dinners and tickets — not the subway.",
  meta: metaItems("Daily bands", "Hotels", "Food &amp; tickets", "Taxes &amp; tipping"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Daily spending",
      title: "Three honest budget bands",
      lead: "Per person, per day, excluding accommodation. Planning ranges, not quotes; prices change with the season and booking window.",
    })}
    ${table({
      caption: "Daily budget bands per person excluding accommodation",
      head: ["", "Budget", "Mid-range", "Upscale"],
      rows: [
        ["<strong>Food and drink</strong>", "$45–65", "$120–180", "$250–400"],
        ["<strong>Transport</strong>", "$10–15", "$15–25", "$40–80"],
        ["<strong>Attractions</strong>", "$40–70", "$80–150", "$150–300"],
        ["<strong>Extras and shopping</strong>", "$20–35", "$60–120", "$150–400"],
        ["<strong>Total per person, per day</strong>", "<strong>$130–200</strong>", "<strong>$350–550</strong>", "<strong>$800–1,300+</strong>"],
      ],
    })}
    <div class="split" style="margin-top:clamp(2rem,5vw,3.5rem)">
      <div class="split__body">
        <h3>What the bands actually buy</h3>
        <p>A budget day is a bagel or a slice for lunch, one paid attraction, coffee and the subway — perfectly good if your hotel is cheap and your evenings are simple.</p>
        <p class="muted">A mid-range day adds a sit-down dinner, a second attraction and a show fund. The upscale band assumes fine dining, private tours and taxis. Most visitors land between budget and mid-range, moving up for a day or two.</p>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Where the money goes",
          text: "Accommodation and tickets swing most. A two-person dinner costs around $120–180 before tax; a pizza slice is $4–5.50. Transport rarely exceeds $36 a week per person.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Accommodation",
      title: "What a room costs per night",
      lead: "Quoted rates are before tax. New York adds roughly 14.75% hotel tax plus $3.50 per night.",
    })}
    ${table({
      caption: "Typical New York accommodation rates per night before tax",
      head: ["Type", "Typical nightly range", "What to expect"],
      rows: [
        ["Hostel dorm bed", "$60–120", "Shared room, often in Brooklyn or Upper Manhattan; book early in summer"],
        ["Budget hotel", "$180–280", "Small rooms, sometimes a shared bathroom; check the location carefully"],
        ["Mid-range hotel", "$300–500", "The standard visitor choice: private bathroom, lift, central enough"],
        ["Upscale hotel", "$600–1,200+", "Larger rooms, better service, views; peak weeks push higher"],
      ],
    })}
    <div class="grid grid--2" style="margin-top:clamp(1.5rem,4vw,2.5rem);align-items:start">
      <div>
        <h3>Read the all-in price</h3>
        <p class="muted">A room advertised at $400 a night costs around $462 with tax. On a five-night stay that is roughly $310 more — enough to change the shape of a trip. Check the total before comparing hotels.</p>
      </div>
      <div>
        ${callout({
          icon: "☂",
          title: "Value does not always mean Manhattan",
          text: "Brooklyn, Queens and Upper Manhattan often give more space for the same money. What you lose is time on the subway, so weigh the commute against the room.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Tickets",
      title: "What the big sights cost",
      lead: "Prices are adult rates and almost all are dynamic — the same ticket can cost more on a Saturday than a Tuesday. Confirm before booking.",
    })}
    ${table({
      caption: "From prices for major New York attractions and passes",
      head: ["Sight or pass", "From", "Notes"],
      rows: [
        ["Empire State Building, 86th floor", "$46", "Peak dates around $57; book online"],
        ["Top of the Rock", "$42", "Peak dates around $60"],
        ["Edge", "$44–69", "Dynamic pricing, higher at sunset"],
        ["SUMMIT One Vanderbilt", "$44–62", "Dynamic pricing"],
        ["One World Observatory", "$51", "Fixed adult rate"],
        ["Statue of Liberty &amp; Ellis Island ferry", "$25.50", "$16.50 child, $22.50 senior; only NPS-authorised operator"],
        ["9/11 Memorial &amp; Museum", "$24–36", "Memorial plaza free 8am–8pm"],
        ["American Museum of Natural History", "$28", "$43 with one ticketed exhibition"],
        ["MoMA", "$30", "Free Friday nights for New York State residents"],
        ["The Met", "$30", "Closed Wednesdays; pay-what-you-wish for NY State residents"],
        ["Broadway show", "Around $131", "Average paid ticket in 2025–26; TKTS up to 50% off"],
        ["CityPASS", "$149", "Five attractions from ten, valid nine days"],
        ["Go City Explorer Pass", "From $89", "Two to ten attractions; flexible activation"],
        ["New York Pass", "From $89", "One to ten consecutive days, 100+ attractions"],
      ],
    })}
    <p class="muted" style="margin-top:1.2rem">Passes use dynamic pricing too, and weekend and holiday dates often run 20–40% higher. Whether one saves money depends on how many of its attractions you would have paid for anyway — our <a href="passes.html">pass comparison</a> does the arithmetic.</p>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Food")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Eating well without the bill</h2>
        <p>Food is where New York rewards curiosity. A slice, a bagel, a taco or a bowl of noodles costs $4–15 and is often better than a restaurant charging four times as much.</p>
        <p class="muted">Sit-down dinners are the exception: a mid-range dinner for two runs around $120–180 before tax, or $155–230 with tax and a 20% tip. Budget one proper dinner a day and eat casually the rest of the time.</p>
        <div class="split__actions">
          ${btn({ href: "food.html", label: "Where to eat", variant: "outline" })}
        </div>
      </div>
      <div class="split__media">
        <img src="${img("nyc-pizza-slice.webp")}" alt="A slice of New York pizza on a paper plate" width="1000" height="750" loading="lazy" />
      </div>
    </div>
    <div class="grid grid--2" style="margin-top:clamp(2rem,5vw,3.5rem);align-items:start">
      <div>
        ${table({
          caption: "Typical New York food and drink prices",
          head: ["Item", "Typical price"],
          rows: [
            ["Bagel with cream cheese", "$4.50–7"],
            ["Lox bagel", "$16–22"],
            ["Pizza slice", "$4–5.50"],
            ["18-inch pizza pie", "$28–38"],
            ["Pastrami on rye at Katz's", "Around $32–36"],
            ["Coffee", "$3.50–5"],
            ["Food-truck lunch", "$12–18"],
            ["Mid-range dinner for two", "$120–180 before tax"],
          ],
        })}
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Reliable cheap eats",
          text: "Joe's Pizza in Greenwich Village (slice from around $4.50), Prince Street Pizza in SoHo (pepperoni square from around $5.50), Ess-a-Bagel, Los Tacos No. 1, Xi'an Famous Foods, The Halal Guys, Vanessa's Dumpling House, Gray's Papaya, Mamoun's Falafel and Peter Pan Donuts in Greenpoint.",
        })}
        ${callout({
          icon: "☂",
          title: "Skip the tourist-menu trap",
          text: "Restaurants in Times Square and around major sights charge a premium for convenience. Walk ten minutes and the price drops while the food improves.",
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
          eyebrowText: "Transport",
          title: "Getting around is the cheap part",
          lead: "The subway is $3.00 a ride and caps at around $36 a week. Airport transfers are the only transport cost that really stings.",
        })}
        ${table({
          caption: "Common New York transport costs",
          head: ["Journey", "Cost"],
          rows: [
            ["Subway or local bus", "$3.00, capped around $36 per week"],
            ["JFK to Manhattan by AirTrain + E", "$11.75"],
            ["LGA to Manhattan by free Q70 + subway", "$3.00"],
            ["EWR to Manhattan by AirTrain + NJ Transit", "Around $20–25"],
            ["JFK flat-fare cab", "$70 plus tolls and tip"],
            ["NYC Ferry single ride", "$5.00"],
          ],
        })}
        <p class="muted" style="margin-top:1.2rem">Times, routes and the finer details are in the <a href="getting-around.html">getting-around guide</a>.</p>
      </div>
      <div>
        ${sectionHead({
          eyebrowText: "Taxes and tipping",
          title: "The costs on top of the bill",
          lead: "New York prices are usually shown before tax, and tipping is expected in sit-down restaurants and taxis.",
        })}
        ${table({
          caption: "New York taxes and standard tipping rates",
          head: ["Item", "Rate"],
          rows: [
            ["Sales tax", "8.875%"],
            ["Hotel tax", "~14.75% + $3.50 per night"],
            ["Sit-down restaurant tip", "18–22%, 20% standard"],
            ["Taxi tip", "15–20%"],
            ["Help with bags", "$2–5 per bag"],
            ["Bar drink tip", "$1–2 per drink"],
            ["Housekeeping", "$3–5 per night"],
          ],
        })}
        <p class="muted" style="margin-top:1.2rem">Check the bill for a service charge before adding a tip, especially for groups. Sales tax applies to most goods and prepared food, so a receipt can surprise you.</p>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Save money",
      title: "Four tactics that actually work",
    })}
    <div class="grid grid--3">
      ${callout({
        icon: "01",
        title: "Buy the pass you will use",
        text: "Count the paid attractions first. Five or more in a short trip is where CityPASS or an Explorer Pass starts to win; two or three is cheaper separately.",
      })}
      ${callout({
        icon: "02",
        title: "Use the free museum windows",
        text: "The Whitney is free on Friday nights for everyone, free on Second Sundays, and free daily for ages 25 and under. The Brooklyn Museum has free First Saturday evenings; the Bronx Museum is always free.",
      })}
      ${callout({
        icon: "03",
        title: "Cap your transit",
        text: "Tap the same card all week and 12 fares in seven days is the maximum you pay — around $36. Rideshare and taxis are the only way to blow the transport budget.",
      })}
      ${callout({
        icon: "04",
        title: "Travel in the shoulder weeks",
        text: "Late January and early February are the cheapest weeks for rooms. November and early December are better value than the holiday weeks that follow.",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Worked example",
          title: "Five days for two people",
          lead: "A mid-range trip with a comfortable hotel, one Broadway show and a proper dinner most nights. Excludes flights.",
        })}
        ${table({
          caption: "Sample five-day budget for two people",
          head: ["Item", "Estimate"],
          rows: [
            ["Hotel, five nights at around $400", "$2,000"],
            ["Hotel tax at ~14.75% + $3.50/night", "About $312"],
            ["Food and drink for two", "About $2,000"],
            ["Attractions and one Broadway show", "About $750"],
            ["Transport, including airport", "About $140"],
            ["Incidentals and shopping", "About $450"],
            ["<strong>Total for two people</strong>", "<strong>Around $5,650</strong>"],
          ],
        })}
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "How to move the number",
          text: "Swap the mid-range hotel for a budget room and the week comes in nearer $4,500. Drop the Broadway show and it falls another $260 or so.",
        })}
        <div style="margin-top:1.2rem">${btn({ href: "plan-your-trip.html", label: "Back to trip planning", variant: "outline" })}</div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Budget questions", lead: "" })}
    ${faq([
      {
        q: "Is $100 a day enough in New York?",
        a: "<p>Not comfortably. Our budget band starts at around $130–200 per person per day excluding the hotel, which covers casual food, one paid attraction and the subway. Below that you limit meals and sights.</p>",
      },
      {
        q: "How much should I tip in New York?",
        a: "<p>20% is the standard in sit-down restaurants, calculated on the pre-tax total. Taxis get 15–20%, bar drinks $1–2 each, housekeeping $3–5 per night and $2–5 per bag for help with luggage. Check for a service charge before adding a tip.</p>",
      },
      {
        q: "Is a sightseeing pass worth it?",
        a: "<p>Only if you will use it. Add up the full-price tickets for the attractions you intend to visit, then compare with the pass price. At five or more paid sights a pass usually wins; at two or three it rarely does.</p>",
      },
      {
        q: "What is the cheapest time to visit New York?",
        a: "<p>Late January and early February, when rooms are at their lowest and museums are quiet. The trade-off is the coldest weather of the year. November and early December offer better balance between price and comfort.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "The cheapest weeks, by email",
      text: "Join the list for a short weekly note on New York prices, deals worth knowing and what is happening in the city.",
      source: "budget",
    })}
  </div>
</section>

${pageNav({
  prev: { href: "getting-around.html", label: "Getting around" },
  next: { href: "when-to-visit.html", label: "When to visit" },
})}
`,
};
