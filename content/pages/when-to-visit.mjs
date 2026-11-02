import {
  btn,
  sectionHead,
  pageHero,
  card,
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
  path: "when-to-visit.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "When to Visit New York City — Weather by Month",
  description:
    "The best time to visit New York City: month-by-month weather in °F and °C, wet days, seasonal events, holiday travel trade-offs and what to pack.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  breadcrumbs: [
    { href: "index.html", label: "Home" },
    { href: "when-to-visit.html", label: "When to Visit" },
  ],
  render: () => `
${pageHero({
  image: img("manhattan-skyline.webp"),
  alt: "Lower Manhattan and the Brooklyn Bridge seen across the East River",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "when-to-visit.html", label: "When to Visit" },
  ],
  eyebrowText: "When to visit",
  title: "The best time to go to New York",
  lead: "New York has four proper seasons, and each changes what the trip feels like. The best month depends on whether you want long park days, Christmas windows or quiet museums.",
  meta: metaItems("Month-by-month weather", "Events calendar", "Holiday trade-offs", "What to pack"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Seasons",
      title: "Four seasons, four different cities",
      lead: "Central Park averages about 50 inches of rain a year across roughly 125 wet days, so rain is possible in any month. What changes is the temperature.",
    })}
    <div class="grid grid--4">
      ${card({
        kicker: "Spring",
        title: "March–May",
        text: "Cool and changeable, warming from the low 50s to the low 70s. The park fills with blossom in late April; May is one of the most pleasant months.",
        foot: "<span class=\"small muted\">Layers and an umbrella</span>",
      })}
      ${card({
        kicker: "Summer",
        title: "June–August",
        text: "Hot and humid, with highs in the low 80s and heavy afternoon storms. Long evenings, free outdoor concerts and busy park weekends.",
        foot: "<span class=\"small muted\">Light clothes and water</span>",
      })}
      ${card({
        kicker: "Autumn",
        title: "September–November",
        text: "The best window of the year. Warm, clear days through September and early October, then crisp air and foliage as November arrives.",
        foot: "<span class=\"small muted\">A light jacket and good shoes</span>",
      })}
      ${card({
        kicker: "Winter",
        title: "December–February",
        text: "Cold, with highs in the 30s and 40s and occasional snow. December is atmosphere and crowds; January and February are quiet, cheap and coldest.",
        foot: "<span class=\"small muted\">A proper coat and boots</span>",
      })}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Month by month",
      title: "Weather averages for Central Park",
      lead: "Average daily highs and lows in Fahrenheit and Celsius, with the average number of wet days. Expect variation: a February cold snap or a September heatwave is entirely normal.",
    })}
    ${table({
      caption: "New York City monthly weather averages, highs and lows in °F and °C, with average wet days",
      head: ["Month", "High °F", "Low °F", "High °C", "Low °C", "Wet days"],
      rows: [
        ["January", "39", "28", "4", "−2", "10.8"],
        ["February", "43", "28", "6", "−2", "10.0"],
        ["March", "50", "36", "10", "2", "11.1"],
        ["April", "63", "45", "17", "7", "11.4"],
        ["May", "72", "54", "22", "12", "11.5"],
        ["June", "81", "64", "27", "18", "11.2"],
        ["July", "84", "70", "29", "21", "10.5"],
        ["August", "84", "68", "29", "20", "10.0"],
        ["September", "77", "63", "25", "17", "8.8"],
        ["October", "64", "52", "18", "11", "9.5"],
        ["November", "54", "41", "12", "5", "9.2"],
        ["December", "45", "34", "7", "1", "11.4"],
      ],
    })}
    <p class="muted" style="margin-top:1.2rem">Annual averages: about 50 inches (1,272 mm) of precipitation, around 125 wet days and 2,535 hours of sunshine. Averages are not forecasts — check the week-of weather before you pack.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Best months")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">When to book, and when to avoid</h2>
        <p class="lead">Two windows stand out: mid-April to mid-June, and September to early October. Both give you warm days, comfortable evenings and the city at its most usable.</p>
        <p>Late spring means blossom in the park, outdoor tables and long daylight. Early autumn means warm water still in the harbour, fewer crowds than summer and the best walking weather of the year. If you want Christmas atmosphere, December delivers it, at a price in crowds and hotel rates.</p>
        <p class="muted">July and August are hot and humid, with afternoon storms and crowded parks. January and February are the cheapest and coldest weeks, when museums are peaceful and Restaurant Week offers good-value menus.</p>
      </div>
      <div class="split__media">
        <img src="${img("central-park-bow-bridge.webp")}" alt="Bow Bridge in Central Park" width="1000" height="688" loading="lazy" />
      </div>
    </div>
    <div class="grid grid--3" style="margin-top:clamp(2rem,5vw,3.5rem)">
      ${callout({
        icon: "◆",
        title: "Best for weather",
        text: "Mid-April to mid-June and September to early October. Comfortable temperatures, manageable rain and the park at its best.",
      })}
      ${callout({
        icon: "★",
        title: "Best for atmosphere",
        text: "Early December. The tree at Rockefeller Center, shop windows and the Bryant Park Winter Village, with cold but rarely brutal weather.",
      })}
      ${callout({
        icon: "◷",
        title: "Best for value",
        text: "Late January and early February. The lowest room rates of the year, quiet museums and Restaurant Week prix-fixe menus.",
      })}
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Events",
      title: "What happens when",
      lead: "Dates are the 2026 editions where confirmed, with 2027 notes where they are not. Confirm with the organiser before booking around an event.",
    })}
    ${table({
      caption: "Major New York City events and their dates",
      head: ["Event", "When", "What to know"],
      rows: [
        ["Macy's Thanksgiving Day Parade", "26 November 2026", "The 100th edition, 8:30am–noon from Central Park West &amp; 77th Street to Herald Square. Free."],
        ["Rockefeller Center tree lighting", "2 December 2026", "Lit until about 9 January 2027. Free, and very crowded on the night itself."],
        ["Times Square New Year's Eve", "31 December", "Ball drop at midnight. Free, but arrive in the early afternoon and expect security screening."],
        ["NYC Restaurant Week", "Late January–mid February; mid-July–mid August", "Prix-fixe menus at $30, $45 and $60. Book as soon as reservations open."],
        ["US Open", "30 August–13 September 2026", "Tennis at Flushing Meadows, Queens. Grounds passes are the affordable option."],
        ["Tribeca Festival", "3–12 June 2027", "Film, talks and events across Lower Manhattan; the next edition is in June 2027."],
        ["Pride", "Last Sunday of June", "March and street celebrations; the parade draws huge crowds."],
        ["NYC Marathon", "First Sunday of November", "The route closes streets in all five boroughs for most of the day."],
        ["Fleet Week", "Usually late May", "The 2026 edition was replaced by the International Naval Review 250, 3–7 July 2026; 2027 dates are still to be confirmed."],
        ["Bryant Park Winter Village", "28 October 2026–28 February 2027", "Skating rink admission is free; skate rental is paid."],
        ["Free summer concerts", "June–August", "SummerStage, BRIC Celebrate Brooklyn and Lincoln Center Summer for the City."],
      ],
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Holidays",
          title: "Holiday travel, honestly",
          lead: "The holiday weeks are the most atmospheric and the most expensive. Whether they are worth it depends on how much you value atmosphere against crowds.",
        })}
        ${table({
          caption: "Pros and cons of travelling to New York in holiday periods",
          head: ["Period", "Upside", "Downside"],
          rows: [
            ["Thanksgiving week", "Parade, early Christmas windows, crisp weather", "Busiest travel days of the year; hotel rates peak"],
            ["Christmas to New Year", "Tree, lights, ice rinks and a genuine sense of occasion", "Highest room rates, long queues, reduced hours on the holiday days themselves"],
            ["Summer", "Long evenings, free concerts, parks and beaches", "Heat and humidity, afternoon storms, peak hotel pricing"],
            ["January–February", "Cheapest rooms, quiet museums, Restaurant Week", "The coldest weeks; short daylight hours"],
          ],
        })}
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Book holiday trips early",
          text: "For Thanksgiving, Christmas and New Year, start looking four to six months ahead. The best-value rooms in those weeks disappear first, and flights only get more expensive.",
        })}
        ${callout({
          icon: "☂",
          title: "Expect reduced hours",
          text: "Some restaurants and attractions close or run shorter hours on Thanksgiving Day and Christmas Day. If either is a centrepiece of your trip, confirm opening hours and book ahead rather than assuming.",
        })}
        ${callout({
          icon: "◷",
          title: "New Year's Eve is a commitment",
          text: "The Times Square ball drop is free but means arriving early afternoon, standing for hours and passing security screening. Many New Yorkers watch it on television instead.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Packing",
          title: "What to pack by season",
          lead: "New York is a walking city, so the most important packing decision is footwear. Everything else follows the season.",
        })}
        ${table({
          caption: "What to pack for each New York season",
          head: ["Season", "Pack"],
          rows: [
            ["Winter (Dec–Feb)", "Insulated coat, hat, gloves, scarf, warm layers, waterproof boots with grip, moisturiser for dry air"],
            ["Spring (Mar–May)", "Layers, a light waterproof jacket, an umbrella, comfortable walking shoes, sunglasses"],
            ["Summer (Jun–Aug)", "Light breathable clothing, sun hat, sunscreen, refillable water bottle, sandals for the park"],
            ["Autumn (Sep–Nov)", "Light jacket or coat, sweaters, an umbrella, closed walking shoes for wet leaves"],
          ],
        })}
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Shoes beat everything",
          text: "You will walk 10,000–20,000 steps on a full sightseeing day. Bring broken-in shoes and a second pair in case one gets wet.",
        })}
        ${callout({
          icon: "☂",
          title: "Rain is short, not rare",
          text: "Around 125 wet days a year means rain is always possible. A compact umbrella and a waterproof layer are more useful than a heavy raincoat, because most storms pass in an hour or two.",
        })}
        <p style="margin-top:1.4rem">${btn({ href: "plan-your-trip.html", label: "Plan the rest of the trip", variant: "outline" })}</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "When-to-visit questions", lead: "" })}
    ${faq([
      {
        q: "What is the best month to visit New York?",
        a: "<p>May and September are the safest answers: warm, comfortable and less extreme than midsummer. Mid-April to mid-June and September to early October are the best windows.</p>",
      },
      {
        q: "Is New York worth visiting in winter?",
        a: "<p>Yes, if you pack for it and accept short days. December is beautiful and busy; January and February are cheap, quiet and cold.</p>",
      },
      {
        q: "How hot does New York get in summer?",
        a: "<p>Average highs in July and August are around 84°F (29°C), with humidity that makes it feel hotter. Afternoon storms are common and subway platforms get uncomfortable. Plan outdoor sights for the morning.</p>",
      },
      {
        q: "When does the Christmas season start?",
        a: "<p>Bryant Park Winter Village opens on 28 October 2026, and the Rockefeller Center tree is lit on 2 December 2026, staying up until about 9 January 2027. Early December is atmospheric and slightly less crowded than the final week of the year.</p>",
      },
      {
        q: "What should I avoid booking around?",
        a: "<p>The New York City Marathon closes streets in all five boroughs on the first Sunday of November, and the Thanksgiving parade shuts down part of the Upper West Side and Midtown on 26 November 2026. Check the calendar before planning an outdoor day.</p>",
      },
      {
        q: "Does it snow in New York?",
        a: "<p>Sometimes, but heavy snow is not guaranteed. January and February are likeliest, with average highs in the high 30s and low 40s. Waterproof boots matter more than a snow forecast.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Know before you go",
      text: "Join the list for a short weekly note on New York weather, events and the things worth planning around.",
      source: "when-to-visit",
    })}
  </div>
</section>

${pageNav({
  prev: { href: "budget.html", label: "Budget guide" },
  next: { href: "plan-your-trip.html", label: "Plan your trip" },
})}
`,
};
