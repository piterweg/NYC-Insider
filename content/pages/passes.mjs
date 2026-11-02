import {
  btn,
  sectionHead,
  pageHero,
  passCard,
  card,
  callout,
  table,
  faq,
  ctaBand,
  pageNav,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "passes.html",
  navSection: "passes",
  bodyClass: "page-inner",
  title: "NYC Passes Compared — CityPASS vs Go City",
  description:
    "New York City passes compared at 2026 prices: CityPASS, Go City Explorer, All-Inclusive and Essentials, and the New York Pass, with break-even maths and a trip calculator.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  scripts: '<script src="assets/js/passes.js" defer></script>',
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "NYC Passes Compared — CityPASS, Go City and New York Pass",
      author: { "@type": "Organization", name: "NYC Insider" },
      dateModified: "2026-11-02",
    },
  ],
  render: () => `
${pageHero({
  image: img("skyline-window-view.webp"),
  alt: "The Manhattan skyline seen through a high window",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "passes.html", label: "Passes" },
  ],
  eyebrowText: "Passes and tickets",
  title: "Passes, compared honestly",
  lead: "A sightseeing pass is a bet that you will visit enough paid attractions to beat the ticket price. Sometimes that bet is easy money. Here are five passes, the break-even maths and a calculator.",
  meta: metaItems("5 passes", "Prices checked November 2026", "Break-even maths", "Calculator"),
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("The honest answer")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Buy a pass for the trip you will take</h2>
        <p class="lead">Passes are sold on the number of attractions you could visit. They are worth it only for the number you actually will.</p>
        <p class="muted">There are two families. Fixed bundles, such as CityPASS, give you a set number of entries for one price. Day-based passes, like Go City All-Inclusive and New York Pass, charge by the day and let you enter as much as you can. Fixed bundles suit a first visit with a clear shortlist; day-based passes suit a return visitor with the stamina for three or four paid sights a day.</p>
      </div>
      <div class="split__media">
        <img src="${img("manhattan-skyline-night.webp")}" alt="The Manhattan skyline above the East River at night" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The five passes",
      title: "What each one actually sells you",
      lead: "Prices are adult “from” rates checked in November 2026. All of these operators use dynamic pricing, so checkout will often be higher.",
    })}
    <div class="pass-grid">
      ${passCard({
        name: "CityPASS",
        price: "$149",
        note: " adult · $129 child 6–17 · +$2 fee",
        features: [
          "5 attractions chosen from 10",
          "Includes Empire State, Top of the Rock, AMNH, 9/11 Museum and the Statue ferry",
          "Valid 9 days from first use",
          "Reservations required at most sites",
        ],
        href: "#calculator",
        cta: "Run your numbers",
        featured: true,
        flag: "Most popular",
      })}
      ${passCard({
        name: "Go City Explorer",
        price: "from $89",
        note: " 2 choices",
        features: [
          "2–10 attractions chosen from 101",
          "Buy any time; activate within one year",
          "30 days to use your choices",
          "Tiers rise from $89 (2 choices) to around $299 (10)",
        ],
        href: "#calculator",
        cta: "Run your numbers",
      })}
      ${passCard({
        name: "Go City All-Inclusive",
        price: "from $169",
        note: " 1 day · around $500 for 10 days",
        features: [
          "Unlimited entry to 101 attractions",
          "Priced by consecutive days, 1 to 10",
          "Best on heavy sightseeing days",
        ],
        href: "#calculator",
        cta: "Run your numbers",
      })}
      ${passCard({
        name: "Go City Essentials",
        price: "from $99",
        features: [
          "1 observation deck plus 2 attractions",
          "Chosen from a list of 15",
          "The simplest pass to value up before buying",
        ],
        href: "#calculator",
        cta: "Run your numbers",
      })}
      ${passCard({
        name: "New York Pass",
        price: "from $89",
        note: " 1 day · up to around $400 for 10 days",
        features: [
          "100+ attractions",
          "Priced by consecutive days, 1 to 10",
          "Worth pricing alongside Go City All-Inclusive",
        ],
        href: "#calculator",
        cta: "Run your numbers",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Side by side",
      title: "The comparison that matters",
      lead: "Forget the attraction counts. What separates these passes is pricing and validity.",
    })}
    ${table({
      caption: "Comparison of New York City sightseeing passes, November 2026",
      head: ["Pass", "What you get", "Price from", "Validity", "Best for"],
      rows: [
        [
          "<strong>CityPASS</strong>",
          "5 attractions from 10",
          "from $149 adult",
          "9 days from first use",
          "A first trip with a shortlist of expensive icons",
        ],
        [
          "<strong>Go City Explorer</strong>",
          "2–10 attractions from 101",
          "from $89",
          "Activate within 1 year, then 30 days",
          "Flexible trips where the list may change",
        ],
        [
          "<strong>Go City All-Inclusive</strong>",
          "Unlimited entry to 101 attractions",
          "from $169 (1 day)",
          "Consecutive calendar days",
          "Return visitors sightseeing every day",
        ],
        [
          "<strong>Go City Essentials</strong>",
          "1 observation deck + 2 attractions",
          "from $99",
          "Fixed bundle",
          "The skyline plus two extras, simply",
        ],
        [
          "<strong>New York Pass</strong>",
          "100+ attractions, unlimited",
          "from $89 (1 day)",
          "Consecutive calendar days",
          "Compare it with All-Inclusive; the same trip type",
        ],
      ],
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container container--narrow">
    ${sectionHead({
      eyebrowText: "Break-even maths",
      title: "When a pass pays for itself",
      lead: "Rough sums, not guarantees, using an average of about $45 per paid attraction per person — between a $28–30 museum and a $46–51 deck.",
    })}
    <div class="prose">
      <p><strong>CityPASS pays off at five attractions if those five average more than about $30 each.</strong> At $149 for five entries, that is roughly $29.80 per attraction. Five sights at the $45 average would cost about $225 at the gate, so the pass saves around $76. But a museum-only five — AMNH at $28, the Met at $30, MoMA at $30, the 9/11 Museum at $24 and a free sight — comes to far less than $149. It only wins when the five include an observation deck or the harbour ferry, and it must be used within nine days.</p>
      <p><strong>Go City Explorer roughly breaks even at two choices and improves as you add.</strong> At five choices ($179) it is around $46 ahead of the gate price; at ten ($299) around $151 ahead. The saving shrinks with cheaper attractions, so treat the tier price as a ceiling on value, not a promise.</p>
      <p><strong>Day-based passes need a punishing pace.</strong> Go City All-Inclusive starts at $169 for one day; to beat that with $45 attractions you need four entries in a single day. These passes win over three or more days of heavy use. Essentials sits in the middle: $99 for a deck and two attractions is about $135 at our average, so roughly $36 saved.</p>
    </div>
    ${table({
      caption: "Worked break-even examples for New York passes at an assumed $45 average attraction price",
      head: ["If your trip is…", "Paid attractions", "Pay as you go", "Pass to price", "Result"],
      rows: [
        ["First trip, two decks included", "5", "about $225", "CityPASS $149", "Pass ahead by about $76"],
        ["Museum-heavy, no decks", "5", "about $137.50", "CityPASS $149", "Pass slightly behind"],
        ["Flexible week, mixed list", "5", "about $225", "Explorer $179", "Pass ahead by about $46"],
        ["One packed day", "4", "about $180", "All-Inclusive $169", "Pass barely ahead"],
        ["Slow trip, skyline only", "2", "about $90", "Explorer $89", "A wash — buy direct"],
      ],
    })}
  </div>
</section>

<section class="section" id="calculator">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Calculator",
      title: "Which pass wins for your trip?",
      lead: "Set your numbers to compare a rough pay-as-you-go total with CityPASS and Go City Explorer, estimated for the whole group.",
    })}
    <div class="calculator">
      <div>
        <div class="field">
          <label for="calc-attractions">Paid attractions you plan to visit</label>
          <input id="calc-attractions" name="attractions" type="number" min="0" max="15" step="1" value="5" inputmode="numeric" />
          <p class="small muted">Count only sights with an admission fee — parks and free museums do not count.</p>
        </div>
        <div class="field">
          <label for="calc-days">Trip length in days</label>
          <input id="calc-days" name="days" type="number" min="1" max="10" step="1" value="5" inputmode="numeric" />
          <p class="small muted">CityPASS is valid for 9 days; Explorer allows 30 days after activation.</p>
        </div>
        <div class="field">
          <label for="calc-travellers">Travellers</label>
          <input id="calc-travellers" name="travellers" type="number" min="1" max="6" step="1" value="2" inputmode="numeric" />
          <p class="small muted">We assume $45 per paid attraction per person. Explorer figures use an approximate tier table.</p>
        </div>
      </div>
      <div class="calculator__result" aria-live="polite">
        <span class="label">Pay as you go</span>
        <output id="calc-payg" for="calc-attractions calc-travellers">$450</output>
        <p id="calc-payg-note">$225 per person · 5 attractions at an assumed $45</p>

        <span class="label">CityPASS</span>
        <output id="calc-citypass" for="calc-attractions calc-travellers">$298</output>
        <p id="calc-citypass-note">$149 per person · 5 attractions · valid 9 days</p>

        <span class="label">Go City Explorer (approximate)</span>
        <output id="calc-explorer" for="calc-attractions calc-travellers">$358</output>
        <p id="calc-explorer-note">$179 per person · 5 choices</p>

        <p id="calc-recommendation">CityPASS is the cheapest estimate at about $298 for your group, roughly $60 less than the Explorer Pass.</p>
      </div>
    </div>
    <p class="small muted" style="margin-top:1.2rem">Estimates only, based on prices checked in November 2026. Pass prices are dynamic and change by date — confirm on the operator's own site before buying.</p>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Match the pass to the trip",
      title: "Which pass for which trip length",
      lead: "Pick by the shape of your days, not by the size of the discount.",
    })}
    <div class="grid grid--4">
      ${card({
        kicker: "1–2 days",
        title: "Go City Essentials or nothing",
        text: "A short trip rarely fits more than three paid sights. Essentials bundles a deck and two attractions for $99.",
      })}
      ${card({
        kicker: "3–4 days",
        title: "CityPASS or Explorer",
        text: "The sweet spot. If your shortlist is the expensive icons, CityPASS wins. If the list is still moving, Explorer at four to six choices leaves room to change your mind.",
      })}
      ${card({
        kicker: "5–7 days",
        title: "Explorer at six to eight choices",
        text: "Long enough to use eight entries without sprinting. The Explorer tier usually pulls ahead past five sights; CityPASS still works if the first five are right.",
      })}
      ${card({
        kicker: "7+ days",
        title: "Probably no pass",
        text: "A week or more includes park mornings and repeat visits. Buy the two or three tickets you actually want; a pass used twice is worse than full-price tickets used well.",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Before you buy",
          title: "The prices move — treat these as starting points",
          lead: "",
        })}
        <div class="prose">
          <p>Every operator here uses dynamic pricing. The “from” price applies to the cheapest dates, usually midweek in low season; weekend or holiday dates can run 20–40% higher. Price your exact dates on the operator's own site, then compare the pass against the tickets you would buy anyway — our <a href="attractions.html">attractions guide</a> lists current admission prices.</p>
        </div>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Check the attraction list",
          text: "A pass including 101 attractions is not 101 times as useful. Check that the three or four sights you want are included before you pay — lists change.",
        })}
        ${callout({
          icon: "◷",
          title: "Reserve after you buy",
          text: "Buying the pass does not book the time. Reserve popular observation-deck slots in the same sitting.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Questions",
      title: "Pass questions we get a lot",
      lead: "",
    })}
    ${faq([
      {
        q: "Is CityPASS worth it for a first trip?",
        a: "<p>Usually, if your shortlist includes two or more observation decks or the Statue of Liberty ferry. It is less convincing for a museum-only trip.</p>",
      },
      {
        q: "Does CityPASS include the Statue of Liberty?",
        a: "<p>Yes — the Statue of Liberty and Ellis Island ferry is one of the ten CityPASS options, using one of your five choices. Book the ferry time as soon as you have the pass.</p>",
      },
      {
        q: "Do I still need reservations with a pass?",
        a: "<p>Yes, at most sites. A pass buys the entry, not the time. Reserve both together, and see our <a href=\"attractions.html\">attractions guide</a> for what to book first.</p>",
      },
      {
        q: "Are passes cheaper for children?",
        a: "<p>CityPASS has a child rate: $129 for ages 6–17 against $149 adult, plus a $2 fee. The Go City passes and New York Pass price by age band, so check their current child policy.</p>",
      },
    ])}
  </div>
</section>

${ctaBand({
  eyebrowText: "Next step",
  title: "Fix the itinerary before you fix the pass",
  text: "The pass choice gets easier once the days have a shape. Start with an itinerary, then buy the tickets that fill it.",
  actions: `${btn({ href: "itineraries.html", label: "See the itineraries" })}${btn({
    href: "attractions.html",
    label: "Browse attractions",
    variant: "outline",
  })}`,
})}

${pageNav({
  prev: { href: "attractions.html", label: "Things to do" },
  next: { href: "plan-your-trip.html", label: "Plan your trip" },
})}
`,
};
