import {
  btn,
  sectionHead,
  pageHero,
  day,
  callout,
  card,
  table,
  faq,
  newsletter,
  pageNav,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "3-days-in-nyc.html",
  navSection: "itineraries",
  bodyClass: "page-inner",
  title: "3 Days in NYC — A Day-by-Day Itinerary",
  description:
    "A realistic 3-day New York City itinerary: what to see each day, in what order, how long it takes, where to eat and what to skip on a short first trip.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/fifth-avenue-cab.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "3 Days in NYC — A Day-by-Day Itinerary",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () => `
${pageHero({
  image: img("fifth-avenue-cab.webp"),
  alt: "A yellow cab on a Manhattan avenue between tall buildings",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "itineraries.html", label: "Itineraries" },
    { href: "3-days-in-nyc.html", label: "3 days" },
  ],
  eyebrowText: "Itinerary · 3 days",
  title: "Three days in New York",
  lead: "The short-break plan: one skyline morning, one harbour day, one park-and-neighbourhood day. Every stop is clustered so you spend your time in New York, not on the F train.",
  meta: metaItems("3 days", "4–6 stops a day", "Public transport", "Best for first-timers"),
})}

<section class="section">
  <div class="container">
    <div class="split split--reverse">
      <div class="split__media">
        <img src="${img("manhattan-skyline-night.webp")}" alt="The Manhattan skyline glowing at night across the East River" width="1000" height="1250" loading="lazy" />
      </div>
      <div class="split__body" data-reveal>
        ${eyebrow("At a glance")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">How this plan is built</h2>
        <p class="lead">Three days is not enough to “do” New York, and any plan that pretends otherwise is a list of queues. This one gives you the icons, one proper neighbourhood and one skyline night — in an order that avoids backtracking.</p>
        <ul class="feature-list" style="margin-top:1.8rem">
          <li><span class="feature-list__num">1</span><div><h4>Day 1 — Midtown, from above and below</h4><p>Land, drop bags, take the skyline in early, then let the evening pull you through Times Square to a show.</p></div></li>
          <li><span class="feature-list__num">2</span><div><h4>Day 2 — The harbour and Brooklyn</h4><p>Statue of Liberty ferry first thing, Lower Manhattan after, then walk the bridge at golden hour.</p></div></li>
          <li><span class="feature-list__num">3</span><div><h4>Day 3 — Central Park and a neighbourhood</h4><p>Park and museum in the morning; the Village, SoHo or the High Line in the afternoon depending on your taste.</p></div></li>
        </ul>
        <div class="split__actions">
          ${btn({ href: "5-days-in-nyc.html", label: "Have five days? See the 5-day plan" })}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "The plan",
      title: "Day by day",
      lead: "Timings assume you are staying in Midtown or Lower Manhattan and using the subway. Shift the first stop later if you are arriving from a red-eye.",
    })}
    <div class="day-plan">
      ${day({
        number: "01",
        label: "Midtown",
        title: "Arrive, go up, come down to Earth",
        text: "Start with the view you came for, then walk the city at street level. Keep the afternoon loose — arrival days are unreliable.",
        stops: [
          { what: "Drop bags", where: "hotel or a luggage storage near your first stop" },
          { what: "Empire State Building", where: "86th floor observatory — go early if you can; sunset slots sell out" },
          { what: "Lunch", where: "a proper diner or deli in the Garment District; skip the tourist-menu traps on 7th Avenue" },
          { what: "Bryant Park &amp; the New York Public Library", where: "20 quiet minutes, free, and the best public bathroom in Midtown" },
          { what: "Times Square", where: "arrive around dusk — it is better than people admit for 15 minutes" },
          { what: "Broadway show", where: "book ahead; see our tips below for rush and TKTS options" },
        ],
      })}
      ${day({
        number: "02",
        label: "Harbour &amp; Brooklyn",
        title: "Statue, memorials, and the bridge at sunset",
        text: "The busiest day, but geographically tight. Buy the ferry ticket in advance and be at Battery Park before 9am.",
        stops: [
          { what: "Statue City Cruises ferry", where: "Battery Park to Liberty Island and Ellis Island — 3–4 hours total" },
          { what: "Lunch", where: "Fulton Street or the Tin Building at the Seaport" },
          { what: "9/11 Memorial", where: "the plaza is free; the museum needs 1.5–2 hours and a ticket" },
          { what: "Walk the Brooklyn Bridge", where: "from the Manhattan side, mid-to-late afternoon" },
          { what: "DUMBO", where: "Washington Street photo, Brooklyn Bridge Park, one slice at Juliana's or a coffee" },
          { what: "Dinner", where: "back in Manhattan at the Seaport, or stay in Brooklyn" },
        ],
      })}
      ${day({
        number: "03",
        label: "Park &amp; downtown",
        title: "Central Park in the morning, a neighbourhood after",
        text: "One museum, one long park walk, then whichever downtown neighbourhood suits you. You will finish near good food either way.",
        stops: [
          { what: "Central Park", where: "enter at 72nd Street, walk the Mall to Bethesda Terrace and the Bow Bridge" },
          { what: "The Met", where: "2–3 hours on the highlights; closed on some Mondays" },
          { what: "Lunch", where: "the Upper East Side or a museum café — then take the 6 downtown" },
          { what: "SoHo, the Village or the High Line", where: "pick one: shopping and cast iron, cosy streets and coffee, or elevated park and Chelsea Market" },
          { what: "Final dinner", where: "somewhere you have wanted since day one — book it on night two" },
        ],
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Where to stay",
          title: "Three days, one base",
          lead: "Do not change hotels on a three-day trip. Pick one neighbourhood and travel from it.",
        })}
        ${table({
          caption: "Neighbourhoods to base yourself in for a three-day trip",
          head: ["Area", "Why", "Trade-off"],
          rows: [
            ["<strong>Midtown</strong>", "Walk to the icons; easy subway to everywhere", "Anonymous evenings, tourist restaurants"],
            ["<strong>Lower Manhattan</strong>", "Close to the ferry, bridge and memorials", "Quiet at night, fewer cheap eats"],
            ["<strong>SoHo / the Village</strong>", "Best food and atmosphere on your doorstep", "Slightly longer rides uptown"],
          ],
        })}
        <div style="margin-top:1.6rem">
          ${btn({ href: "plan-your-trip.html", label: "Full planning guide", variant: "outline" })}
        </div>
      </div>
      <div>
        ${callout({
          icon: "◆",
          title: "Book these three things first",
          text: "Statue City Cruises ferry, the observation deck slot and the Broadway show. Everything else in this plan can move around those three commitments.",
        })}
        ${callout({
          icon: "☂",
          title: "Wet-weather swap",
          text: "If day 3 is raining, replace the park with the American Museum of Natural History and keep the downtown afternoon. Both are indoors and a short walk apart.",
        })}
        ${callout({
          icon: "$",
          title: "Rough sightseeing budget",
          text: "Observation deck $42–46, Statue ferry $25.50, 9/11 Museum $24–36, Broadway $80–160, subway $8–10 a day. A 3-day pass rarely beats buying these four individually.",
        })}
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Before you go",
      title: "Three-day trip questions",
      lead: "",
    })}
    ${faq([
      { q: "Is 3 days enough for the Statue of Liberty and a Broadway show?", a: "<p>Yes — both fit comfortably on this plan. Book the first ferry of the morning and a show on night one or two, then leave the third evening free.</p>" },
      { q: "What should I skip on a short trip?", a: "<p>Museum marathons, the Bronx and Queens, and any attraction that requires a two-hour queue for a view you get free from the Staten Island Ferry (see our <a href=\"attractions.html\">attractions guide</a>).</p>" },
      { q: "Do I need a sightseeing pass for three days?", a: "<p>Usually not. On this plan you pay for four to six attractions; CityPASS only makes sense if you intend to visit five. See the <a href=\"passes.html\">pass comparison</a> for the maths.</p>" },
      { q: "Can I do this itinerary without the subway?", a: "<p>Not comfortably. Day 2 is walkable, days 1 and 3 rely on short rides. Load a contactless card or phone wallet for the subway — see <a href=\"getting-around.html\">getting around</a>.</p>" },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({ title: "Take this plan with you", text: "We will email the one-page printable version of this itinerary, plus a weekly New York note.", source: "3-days" })}
  </div>
</section>

${pageNav({
  prev: { href: "itineraries.html", label: "All itineraries" },
  next: { href: "5-days-in-nyc.html", label: "5 days in NYC" },
})}
`,
};
