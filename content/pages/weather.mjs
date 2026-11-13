import {
  pageHero,
  sectionHead,
  table,
  card,
  callout,
  faq,
  newsletter,
  pageNav,
  img,
  metaItems,
  eyebrow,
  btn,
} from "../components.mjs";
import { assetVersion } from "../version.mjs";

export default {
  path: "weather.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "New York City Weather: Live Forecast and Monthly Averages",
  description:
    "Live New York weather with a Google-style hourly forecast, seven-day outlook, monthly highs and lows, and what to pack each season. No account needed.",
  priority: "0.8",
  changefreq: "weekly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  scripts: `<script src="assets/js/weather.js?v=${assetVersion}" defer></script>`,
  headExtra: `<link rel="stylesheet" href="assets/css/weather.css?v=${assetVersion}" />`,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "New York City weather: live forecast and monthly averages",
      description:
        "Live New York weather, hourly and seven-day forecast, plus month-by-month averages and packing advice.",
      author: { "@type": "Organization", name: "NYCTrove" },
    },
  ],
  render: () => `
${pageHero({
  image: img("central-park-bow-bridge.webp"),
  alt: "Bow Bridge in Central Park on a clear autumn morning",
  crumbs: [
    { href: "/", label: "Home" },
    { href: "when-to-visit.html", label: "When to visit" },
    { href: "weather.html", label: "Weather" },
  ],
  eyebrowText: "Weather",
  title: "New York weather, hour by hour",
  lead: "A live forecast for Central Park: current conditions, the next 24 hours and seven days ahead — then the monthly averages and what to pack.",
  meta: metaItems("Live forecast", "Hourly + 7 days", "Monthly averages", "Packing guide"),
})}

<section class="section">
  <div class="container">
    <div class="wx" data-weather data-weather-days-count="7">
      <div class="wx__now">
        <div class="wx__now-main">
          <span class="wx__icon" data-weather-icon aria-hidden="true">—</span>
          <div>
            <p class="wx__temp" data-weather-temp>—°F</p>
            <p class="wx__desc" data-weather-desc>Loading live forecast…</p>
            <p class="wx__meta"><span data-weather-meta>—</span> · <span data-nyc-time>—</span></p>
          </div>
        </div>
        <div class="wx__stats">
          <span>Feels like <strong data-weather-feels>—</strong></span>
          <span>Humidity <strong data-weather-humidity>—</strong></span>
          <span>Wind <strong data-weather-wind>—</strong></span>
          <span>Rain now <strong data-weather-precip>—</strong></span>
        </div>
      </div>

      <div class="wx__block">
        <div class="wx__tabs-head">
          <span class="widget__label">Next 24 hours</span>
          <div class="wx__tabs" role="tablist" aria-label="Hourly forecast chart">
            <button type="button" class="wx__tab is-active" data-wx-tab="temp" role="tab" aria-selected="true">Temperature</button>
            <button type="button" class="wx__tab" data-wx-tab="rain" role="tab" aria-selected="false">Rain</button>
            <button type="button" class="wx__tab" data-wx-tab="wind" role="tab" aria-selected="false">Wind</button>
          </div>
        </div>
        <svg class="wx__spark" data-weather-spark viewBox="0 0 720 110" role="img" aria-label="Hourly forecast chart" preserveAspectRatio="none"></svg>
        <div class="wx__hours" data-weather-hourly></div>
      </div>

      <div class="wx__block">
        <span class="widget__label">Seven days</span>
        <div class="wx__days" data-weather-days></div>
        <p class="widget__source">Live from Open-Meteo · cached 15 minutes · <a href="when-to-visit.html">month-by-month guide</a></p>
      </div>
    </div>
  </div>
</section>

<section class="facts-band">
  <div class="container">
    <div class="facts">
      <div class="fact"><span class="fact__label">Annual precipitation</span><span class="fact__value">~50 in / 1,272 mm</span></div>
      <div class="fact"><span class="fact__label">Wet days a year</span><span class="fact__value">~125</span></div>
      <div class="fact"><span class="fact__label">Sunshine hours</span><span class="fact__value">~2,535</span></div>
      <div class="fact"><span class="fact__label">Seasons</span><span class="fact__value">Four, sharply different</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("What the weather does")}
        <h2>Four seasons, four different cities</h2>
        <p class="lead">New York's weather is not extreme, but it changes fast: a warm October can flip to a cold November, and summer humidity makes the subway feel tropical.</p>
        <p class="muted">Winter is cold and windy rather than deep-snow cold; summer is hot and humid with afternoon storms. Spring arrives slowly and autumn is the most reliable season for walking. The averages below are a planning tool, not a forecast — always check the week of your trip.</p>
        <div class="split__actions">
          ${btn({ href: "when-to-visit.html", label: "Month-by-month guide", variant: "outline" })}
        </div>
      </div>
      <div class="split__media">
        <img src="${img("central-park-nyc.webp")}" alt="Bethesda Fountain in Central Park on a warm day" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Monthly averages",
      title: "Highs, lows and wet days",
      lead: "Central Park averages used across the guide. Wet days count days with measurable precipitation.",
    })}
    ${table({
      caption: "New York monthly weather averages",
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
    <p class="small muted" style="margin-top:1rem">Averages are long-term normals, not a forecast. The live panel above shows the next 24 hours and seven days.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "Packing", title: "What to wear, by season", lead: "New York is a walking city; footwear matters more than a third jacket." })}
    <div class="grid grid--2">
      ${card({ kicker: "Spring (Mar–May)", title: "Layers and a rain jacket", text: "Mornings are cold, afternoons mild. A packable waterproof layer and broken-in shoes cover most days.", foot: "" })}
      ${card({ kicker: "Summer (Jun–Aug)", title: "Light clothes, heavy water", text: "Humidity is the story. Linen, a refillable bottle and a plan that avoids the subway at 5pm.", foot: "" })}
      ${card({ kicker: "Autumn (Sep–Nov)", title: "The best walking weather", text: "Mild days, cool evenings. A light jumper and a jacket are enough until November.", foot: "" })}
      ${card({ kicker: "Winter (Dec–Feb)", title: "Windproof beats thick", text: "The wind between buildings matters more than the temperature. Hat, gloves and a windproof coat.", foot: "" })}
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Rain plan", title: "When the forecast turns", lead: "New York gets about 125 wet days a year, so a rain plan is part of the plan." })}
    <div class="grid grid--2">
      ${callout({ icon: "◆", title: "Museums", text: "The Met, MoMA and AMNH absorb a wet afternoon without ruining the day. Book timed entries.", dark: false })}
      ${callout({ icon: "◆", title: "Free indoor options", text: "Grand Central, the main libraries and the Oculus are free and dry. Our <a href='free-things-to-do-nyc.html'>free things guide</a> has more.", dark: false })}
      ${callout({ icon: "◆", title: "Skip the observation deck", text: "Cloud and fog can erase the view. Move the deck to the clearest day and swap days instead.", dark: false })}
      ${callout({ icon: "◆", title: "The full rain guide", text: "Restaurants, museums and indoor markets for a wet day: <a href='nyc-rainy-day.html'>NYC rainy day guide</a>.", dark: false })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrowText: "By month", title: "Weather for the month you are visiting", lead: "", action: `<a class="link-arrow" href="when-to-visit.html">Full month guide</a>` })}
    <div class="grid grid--3">
      <a class="card" href="nyc-in-january.html"><span class="card__kicker">January</span><h3>Coldest month</h3><p>39°F / 28°F · ~10.8 wet days</p></a>
      <a class="card" href="nyc-in-april.html"><span class="card__kicker">April</span><h3>Spring arrives</h3><p>63°F / 45°F · ~11.4 wet days</p></a>
      <a class="card" href="nyc-in-july.html"><span class="card__kicker">July</span><h3>Hot and humid</h3><p>84°F / 70°F · ~10.5 wet days</p></a>
      <a class="card" href="nyc-in-october.html"><span class="card__kicker">October</span><h3>Best walking</h3><p>64°F / 52°F · ~9.5 wet days</p></a>
      <a class="card" href="nyc-in-december.html"><span class="card__kicker">December</span><h3>Christmas crowds</h3><p>45°F / 34°F · ~11.4 wet days</p></a>
      <a class="card" href="when-to-visit.html"><span class="card__kicker">All months</span><h3>Compare the year</h3><p>Weather, crowds, prices and events.</p></a>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: "Weather questions", lead: "" })}
    ${faq([
      { q: "What is the best month to visit New York?", a: "<p>May, September and October are the most comfortable for walking. July and August are hot and humid; January and February are cold but cheaper.</p>" },
      { q: "Does it snow in New York?", a: "<p>Snow is possible from December to March but not guaranteed. Some winters bring several storms, others almost none. Check the week-of forecast before you pack.</p>" },
      { q: "How reliable is the live forecast?", a: "<p>The panel pulls Open-Meteo data for Central Park and caches it for 15 minutes. Forecasts beyond three days are indicative, not certain.</p>" },
      { q: "What should I pack in winter?", a: "<p>A windproof coat, hat and gloves matter more than a very thick jumper: the wind between buildings makes the cold feel sharper.</p>" },
      { q: "Is summer unbearable?", a: "<p>It can be humid, but mornings and evenings are manageable. Plan museums for the middle of the day and keep water with you.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "One useful New York email a week",
      text: "Seasonal advice, price changes and the occasional weather-driven plan B.",
      source: "weather",
    })}
  </div>
</section>

${pageNav({
  prev: { href: "when-to-visit.html", label: "When to visit" },
  next: { href: "getting-around.html", label: "Getting around" },
})}
`,
};
