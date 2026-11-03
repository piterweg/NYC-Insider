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
  path: "where-to-stay-brooklyn.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Where to Stay in Brooklyn — Areas Compared",
  description:
    "Where to stay in Brooklyn: nine neighbourhoods compared by price, subway and who each suits, with hotel tax, booking tips and Brooklyn versus Manhattan.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-park.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Where to Stay in Brooklyn — Nine Areas Compared",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Brooklyn a good base for a first trip to New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can be. Downtown Brooklyn and Brooklyn Heights are ten to twenty minutes from Lower Manhattan and Midtown on the subway, and generally cost less than a Midtown hotel for the same standard. A first visit that is focused on the Midtown icons is simpler from Manhattan, but Brooklyn works well for families, longer stays and repeat visitors.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get from Brooklyn to Manhattan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "From Downtown Brooklyn, Brooklyn Heights and DUMBO it is roughly 10 to 20 minutes to Lower Manhattan. Williamsburg is about 10 minutes to Union Square on the L. Park Slope, Prospect Heights and Bushwick take 25 to 40 minutes, and Coney Island is around an hour.",
          },
        },
        {
          "@type": "Question",
          name: "Is it cheaper to stay in Brooklyn than Manhattan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually. Downtown Brooklyn and Williamsburg are cheaper than comparable Midtown and SoHo hotels, and the outer neighbourhoods are cheaper again. The saving shrinks on the Brooklyn waterfront, where new hotels price close to Manhattan.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("brooklyn-bridge-park.webp"),
  alt: "The Brooklyn Bridge's granite tower rising above the lawns of Brooklyn Bridge Park on a clear day",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "where-to-stay.html", label: "Where to Stay" },
    { href: "where-to-stay-brooklyn.html", label: "Brooklyn" },
  ],
  eyebrowText: "Where to stay · Brooklyn",
  title: "Where to stay in Brooklyn",
  lead: "The borough with the best food, the best waterfront and the better-value rooms — if you choose the right neighbourhood. Nine areas compared, the tax explained, and whether Brooklyn is the right base.",
  meta: metaItems("9 areas compared", "10–20 min to Manhattan", "Prices before tax", "Checked November 2026"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Why Brooklyn")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">The other side of the river</h2>
        <p class="lead">Brooklyn gives you more room, better restaurants and a street that feels lived in, for less than a comparable Manhattan hotel. The trade is a subway ride of ten to twenty minutes, or an hour from Coney Island.</p>
        <p class="muted">For a first trip built around the Empire State Building and Times Square, Midtown is still simpler. For families, longer stays and anyone who would rather eat well than sleep beside a landmark, Brooklyn is the better base — see the <a href="where-to-stay.html">full comparison</a> if you are deciding between boroughs.</p>
        <div class="stats" style="margin-top:2rem">
          <div class="stat"><strong>9</strong><span>areas compared</span></div>
          <div class="stat"><strong>10–20</strong><span>minutes to Manhattan</span></div>
          <div class="stat"><strong>14.75%</strong><span>hotel tax</span></div>
          <div class="stat"><strong>$3.50</strong><span>per night fee</span></div>
        </div>
      </div>
      <div class="split__media">
        <img src="${img("williamsburg-brooklyn.webp")}" alt="The Williamsburg waterfront towers seen across the East River" width="1000" height="667" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The comparison",
      title: "Nine Brooklyn bases, honestly compared",
      lead: "Bands are per night before tax: budget / mid-range / upscale. These are 2026 estimates — only Downtown Brooklyn and Williamsburg are benchmarked against verified rates, so check current rates for your dates.",
    })}
    ${table({
      caption: "Comparison of Brooklyn neighbourhoods to stay in, with estimated price bands and subway access",
      head: ["Area", "Suits", "Pros and cons", "Per night, before tax (estimate)", "Subway"],
      rows: [
        [
          '<a href="brooklyn.html"><strong>Downtown Brooklyn</strong></a>',
          "Budget, families, first stay",
          "Ten minutes to Lower Manhattan and good value. Less neighbourhood feel, some construction.",
          "$150–220<br>/ $220–320<br>/ $350–500",
          "A/C/F/R at Jay St–MetroTech; 2/3/4/5 at Borough Hall",
        ],
        [
          '<a href="brooklyn.html"><strong>Brooklyn Heights</strong></a>',
          "Couples, first-timers who want charm",
          "Brownstones, the Promenade and one stop to Manhattan. Few hotels, higher rates.",
          "from ~$190<br>/ ~$290<br>/ ~$450–650",
          "2/3 at Clark St; A/C at High St; R at Court St",
        ],
        [
          '<a href="dumbo.html"><strong>DUMBO</strong></a>',
          "Photography, design, short breaks",
          "Bridge views, the park and the ferry on the doorstep. Tiny supply, premium rates, busy streets.",
          "from ~$250<br>/ ~$350<br>/ ~$550–750",
          "A/C at High St; F at York St; NYC Ferry",
        ],
        [
          '<a href="williamsburg.html"><strong>Williamsburg</strong></a>',
          "Twenties and thirties, nightlife, food",
          "The best bars and restaurants in the borough. The L is patchy at weekends and the streets are loud.",
          "$180–260<br>/ $280–400<br>/ $450–700",
          "L at Bedford Av; J/M/Z at Marcy Av; NYC Ferry",
        ],
        [
          '<a href="brooklyn.html"><strong>Greenpoint</strong></a>',
          "Couples, quiet stays, good food",
          "A village feel on the water, with cafés and a ferry stop. The G is the only line and hotels are few.",
          "from ~$170<br>/ ~$250<br>/ ~$400–550",
          "G at Greenpoint Av; NYC Ferry",
        ],
        [
          '<a href="brooklyn.html"><strong>Park Slope</strong></a>',
          "Families, longer stays",
          "Brownstones, Prospect Park and restaurant-lined Fifth and Seventh Avenues. Twenty-five minutes to Midtown.",
          "from ~$180<br>/ ~$260<br>/ ~$420–600",
          "F/G at 7 Av; R at Union St; 2/3 at Grand Army Plaza",
        ],
        [
          '<a href="brooklyn.html"><strong>Prospect Heights</strong></a>',
          "Budget, museum-goers",
          "The Brooklyn Museum and Botanic Garden are on the doorstep, with good food on Vanderbilt Avenue. Few hotels.",
          "from ~$160<br>/ ~$230<br>/ ~$380–520",
          "2/3 at Grand Army Plaza; B/Q at 7 Av; C at Clinton–Washington",
        ],
        [
          '<a href="brooklyn.html"><strong>Bushwick</strong></a>',
          "Budget, art, nightlife",
          "Murals, venues and cheap places to eat. A longer ride in and empty industrial blocks at night.",
          "from ~$140<br>/ ~$200<br>/ ~$320–450",
          "L at Jefferson St or Morgan Av; M at Myrtle–Wyckoff",
        ],
        [
          '<a href="brooklyn.html"><strong>Coney Island</strong></a>',
          "Summer, families, lowest rates",
          "The beach, boardwalk and Cyclone, with the cheapest rooms in the borough. Forty-five to sixty minutes to Manhattan.",
          "from ~$130<br>/ ~$190<br>/ ~$300–420",
          "D/F/N/Q at Coney Island–Stillwell Av",
        ],
      ],
    })}
    <p class="small muted" style="margin-top:1rem">Bands are 2026 estimates for a double room, before tax. Rates move with weekends and holidays — check rates before you book.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body">
        ${eyebrow("The real cost")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">What the tax adds</h2>
        <p>New York adds roughly <strong>14.75% hotel tax plus $3.50 per night</strong> on top of the quoted rate, and any facility fee is charged on top again. A $260 room in Williamsburg becomes about <strong>$302</strong> a night; a $180 room in Bushwick is closer to <strong>$210</strong>; a $450 room in DUMBO lands near <strong>$520</strong>.</p>
        <p class="muted">Ask for the all-in total — room, tax, occupancy fee and facility fee — and compare that figure. Our <a href="budget.html">budget guide</a> shows where accommodation sits in a daily budget.</p>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "The tax is not in the rate",
          text: "Most quoted rates exclude tax and fees. A hotel that looks forty dollars cheaper can be the more expensive one once 14.75% and the nightly fee are added.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Booking",
      title: "How to book a Brooklyn hotel",
      lead: "The rate is only part of the decision. These four things change what you pay.",
    })}
    <div class="grid grid--2">
      ${card({
        kicker: "Direct or agent",
        title: "Compare the final number",
        text: "Hotel sites usually match the big booking sites and are easier to change. Compare the all-in total, then take the better cancellation terms.",
      })}
      ${card({
        kicker: "Location",
        title: "Pick the line, then the hotel",
        text: "A hotel near the A/C or the 2/3 beats a nicer building two avenues away. Check the walk to the station and where the line goes.",
      })}
      ${card({
        kicker: "The L train",
        title: "Have a plan B for Williamsburg",
        text: "Weekend work on the L is common. If you stay in Williamsburg or Bushwick, know the J/M/Z or ferry alternative.",
      })}
      ${card({
        kicker: "Room type",
        title: "Check what kind of property it is",
        text: "Brooklyn has hotels, inns and serviced apartments, with different policies on minimum stays and deposits. Read the listing before booking.",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Brooklyn or Manhattan",
      title: "The honest comparison",
      lead: "Neither is better; they suit different trips.",
    })}
    ${table({
      caption: "Comparison of staying in Brooklyn versus Manhattan for a New York trip",
      head: ["What matters", "Brooklyn", "Manhattan"],
      rows: [
        [
          "<strong>Price</strong>",
          "Usually lower for the same standard, with the biggest savings away from the waterfront.",
          "Higher, especially in Midtown, SoHo and the Village.",
        ],
        [
          "<strong>Space</strong>",
          "Larger rooms and more apartment-style properties for the money.",
          "Smaller rooms at every price point.",
        ],
        [
          "<strong>Journey in</strong>",
          "10–20 minutes from the Heights, Downtown and DUMBO; 25–60 minutes from the outer areas.",
          "Walk to most headline sights from Midtown and the Upper West Side.",
        ],
        [
          "<strong>Evenings</strong>",
          "Neighbourhood restaurants and bars; quiet streets after 10pm outside Williamsburg.",
          "More choice late, more noise and more tourists.",
        ],
        [
          "<strong>Best for</strong>",
          "Families, longer stays and repeat visitors.",
          "First trips, short breaks and theatre evenings.",
        ],
      ],
    })}
    <p class="muted" style="margin-top:1.2rem">Build the days around the base rather than crossing the river twice a day; our <a href="itineraries.html">itineraries</a> show how a Brooklyn base changes a five-day trip.</p>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Staying in Brooklyn — common questions", lead: "" })}
    ${faq([
      {
        q: "Is Brooklyn a good base for a first trip?",
        a: "<p>It can be. Downtown Brooklyn and Brooklyn Heights are ten to twenty minutes from Lower Manhattan, and cost less than a comparable Midtown hotel. A first visit focused on the Midtown icons is simpler from Manhattan.</p>",
      },
      {
        q: "How long does it take to get to Manhattan?",
        a: "<p>About 10–20 minutes from Downtown Brooklyn, Brooklyn Heights and DUMBO, and about 10 minutes from Williamsburg to Union Square on the L. Park Slope and Bushwick take 25–40 minutes; Coney Island is around an hour.</p>",
      },
      {
        q: "Which Brooklyn neighbourhood is best for families?",
        a: "<p>Park Slope and Prospect Heights, for Prospect Park, the museum and calmer streets, or Downtown Brooklyn for larger rooms and the quickest ride in. See the <a href=\"brooklyn.html\">Brooklyn guide</a> for what each area is like.</p>",
      },
      {
        q: "Do I need a car in Brooklyn?",
        a: "<p>No. Every neighbourhood here is on the subway, and the NYC Ferry adds a waterfront route to Manhattan for $5 one-way. Parking is expensive and traffic is slow.</p>",
      },
      {
        q: "Is it cheaper to stay in Brooklyn than Manhattan?",
        a: "<p>Usually. Downtown Brooklyn and Williamsburg are cheaper than comparable Midtown and SoHo hotels, and the outer neighbourhoods cheaper again. The saving shrinks on the waterfront.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Brooklyn, by neighbourhood",
      text: "Where to sleep, eat and walk in the borough, plus one useful email a week.",
      source: "where-to-stay-brooklyn",
    })}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next",
  title: "Plan the days around the base",
  text: "Once the neighbourhood is decided, the itinerary and budget come next.",
  actions: `${btn({ href: "itineraries.html", label: "Compare itineraries" })}${btn({
    href: "budget.html",
    label: "Budget guide",
    variant: "outline",
  })}`,
})}

${pageNav({ prev: { href: "where-to-stay.html", label: "Where to stay in NYC" }, next: { href: "brooklyn.html", label: "Brooklyn guide" } })}
`,
};
