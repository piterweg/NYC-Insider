import {
  btn,
  pageHero,
  callout,
  faq,
  newsletter,
  pageNav,
  mediaCard,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "free-things-to-do-nyc.html",
  navSection: "journal",
  bodyClass: "page-inner",
  title: "Twelve Genuinely Free Things to Do in New York City",
  description:
    "The best free things to do in New York: the Staten Island Ferry, Central Park, the High Line, free museum days and concerts — with exact times and practical notes.",
  priority: "0.8",
  changefreq: "monthly",
  ogType: "article",
  ogImage: "assets/img/brooklyn-bridge-skyline.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Twelve Genuinely Free Things to Do in New York City",
      description:
        "A practical long read on the best free experiences in New York, including free museum windows, concerts and self-guided walks.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best free thing to do in New York City?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Staten Island Ferry. It runs 24 hours a day, costs nothing, and gives you a 25-minute crossing with the Statue of Liberty and the Lower Manhattan skyline in view.",
          },
        },
        {
          "@type": "Question",
          name: "Are New York museums free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some are. The Bronx Museum is always free, the Brooklyn Museum is suggested admission with free First Saturday evenings, and several museums have free windows: MoMA on Friday evenings for New York State residents, the Whitney on Friday nights for everyone, and the 9/11 Museum for New Yorkers on Sunday afternoons.",
          },
        },
      ],
    },
  ],
  render: () => `
${pageHero({
  image: img("brooklyn-bridge-skyline.webp"),
  alt: "The Brooklyn Bridge and the Lower Manhattan skyline",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "journal.html", label: "Journal" },
    { href: "free-things-to-do-nyc.html", label: "Free things to do" },
  ],
  eyebrowText: "Journal · Long read",
  title: "Twelve genuinely free things to do in New York",
  lead: "New York is expensive, but its best experiences cannot be ticketed: a ferry, a bridge, a park, a reading room. Here is what is actually free in 2026 — and the exact days and times for the museum windows people get wrong.",
  meta: metaItems("12 ideas", "Free · no tickets", "Verified November 2026"),
})}

<section class="section">
  <div class="container container--narrow">
    <div class="toc">
      <strong>In this guide</strong>
      <ol>
        <li><a href="#staten-island-ferry">The Staten Island Ferry</a></li>
        <li><a href="#central-park">Central Park</a></li>
        <li><a href="#high-line">The High Line before 10am</a></li>
        <li><a href="#brooklyn-bridge">The Brooklyn Bridge walk</a></li>
        <li><a href="#brooklyn-bridge-park">Brooklyn Bridge Park and DUMBO</a></li>
        <li><a href="#grand-central">Grand Central Terminal</a></li>
        <li><a href="#nypl">The New York Public Library</a></li>
        <li><a href="#rockefeller">Rockefeller Center and Bryant Park</a></li>
        <li><a href="#museum-windows">The free museum windows</a></li>
        <li><a href="#summer-concerts">Free summer concerts</a></li>
        <li><a href="#governors-island">Governors Island, with a caveat</a></li>
        <li><a href="#walks">Self-guided neighbourhood walks</a></li>
      </ol>
    </div>

    <div class="prose" style="margin-top:2.5rem">
      <p>New York's free things are unusual because so many are the reason people come: the skyline from the water, a bridge you can walk across, a park that takes a day to understand. None of the twelve below needs a ticket. Several need you to arrive early, which is the real price.</p>
      <p>"Free" in New York sometimes means free to enter but not free to reach. We flag every case where transport costs money, because a paid ferry can still be the cheapest harbour cruise in the city.</p>

      <h2 id="staten-island-ferry">1. The Staten Island Ferry</h2>
      <p>The single best free experience in New York, and it runs all day and all night. The ferry leaves Whitehall Terminal in Lower Manhattan roughly every 30 minutes, crosses in about 25 minutes and returns for nothing at all. On the way out you get the Statue of Liberty off the starboard side and the Lower Manhattan skyline behind you; on the way back, the whole harbour lines up like a stage set.</p>
      <p>Stand outside at the back of the boat rather than in the cabin. Avoid weekday rush hours, when the ferry is full of commuters. A round trip takes about an hour if you stay on board, or two hours if you get off at St. George and walk past the ballpark.</p>

      <h2 id="central-park">2. Central Park</h2>
      <p>The classic first visit is the southern end: enter at Grand Army Plaza and work north through the Pond, the Mall and Bethesda Terrace to Bow Bridge and the Ramble — a two-hour loop with the city's best people-watching.</p>
      <p>If you have more time, the northern end is wilder and emptier — the North Woods and the Harlem Meer feel like a different park. Bring your own coffee and lunch; the vendors inside the park charge for convenience. The horse-drawn carriage rides are not free and are not necessary, and anyone offering a "free" rickshaw tour is selling something.</p>

      <h2 id="high-line">3. The High Line before 10am</h2>
      <p>The elevated park built on a former freight railway runs from Gansevoort Street in the Meatpacking District to 34th Street, with the best stretch between 14th and 23rd. It is free and open to all, but it becomes a slow-moving queue of people taking the same photograph by late morning. Enter before 10am and you will have the planting, the benches and the views over the Hudson largely to yourself.</p>
      <p>Walk it one way rather than doubling back — north to Hudson Yards or south towards the Village — and combine it with a wander through Chelsea or the West Village. There are lifts and ramps at most entrances, though not every entrance is step-free; the park closes in the evening, so check seasonal hours before planning a sunset visit.</p>

      <h2 id="brooklyn-bridge">4. The Brooklyn Bridge walk</h2>
      <p>Walking the Brooklyn Bridge is free, takes about 30 minutes at an unhurried pace, and is the best introduction to the city's geography: Lower Manhattan in front of you, the harbour to the right, the subway rumbling underneath. Start on the Brooklyn side before 9am. By midday the photo stops have become a one-way negotiation.</p>
      <p>Join the walkway near Cadman Plaza or from the City Hall side coming from Manhattan. Stay in the pedestrian lane and keep right; cyclists are not patient. The reward is breakfast in DUMBO afterwards — or, in heavy rain, skip it, because the walkway has no shelter.</p>

      <h2 id="brooklyn-bridge-park">5. Brooklyn Bridge Park and DUMBO</h2>
      <p>The park along the Brooklyn waterfront is free, and it is where the postcard of the bridge tower is taken from. Walk to Pebble Beach, continue along the piers, and stop in DUMBO for the view up Washington Street, where the bridge frames the Empire State Building between two warehouse blocks. On a clear evening it is the best free skyline view in the city.</p>
      <p>DUMBO has become expensive to eat in, so bring a picnic or push on to Brooklyn Heights. The subway at York Street is a short walk, and the whole waterfront strip is free. With children, the playground at Pier 6 is excellent, and there are public toilets along the park.</p>

      <h2 id="grand-central">6. Grand Central Terminal</h2>
      <p>It is a working railway station, not a museum, which is exactly why it is worth 20 minutes of your day. Walk into the Main Concourse, look up at the celestial ceiling, and find the Whispering Gallery outside the Oyster Bar — two people facing the corners can hear each other perfectly across the arch. The building is free to enter and has been the backdrop for a century of arrivals.</p>
      <p>Go on a weekday morning for the commuters and the light, or at the weekend if you want to take photographs without apologising. The food hall below is convenient rather than special. The best free thing here is standing still while everyone else rushes, then taking the 7 train one stop to Queens for lunch.</p>

      <h2 id="nypl">7. The New York Public Library</h2>
      <p>The Stephen A. Schwarzman Building on Fifth Avenue at 42nd Street is free to enter, and the Rose Main Reading Room is one of the most beautiful public interiors in the world. You do not need a library card to look, though you will need one to borrow. The building also holds free exhibitions and free Wi-Fi, which makes it a useful stop for a wet afternoon.</p>
      <p>Enter from the Bryant Park side and take the stairs up; the marble and light do most of the work. Be quiet and remember that people are working here — it is a library first and a landmark second.</p>

      <h2 id="rockefeller">8. Rockefeller Center and Bryant Park</h2>
      <p>The Rockefeller Center complex is free to walk through, and the plaza around the flags is a good Midtown people-watching spot. From early December the Christmas tree dominates everything: the 2026 tree is lit on 2 December and stays lit until around 9 January. Seeing it costs nothing, though the weekend crowd is substantial — go early on a weekday.</p>
      <p>Five minutes' walk away, Bryant Park's Winter Village opens on 28 October 2026 and runs to 28 February 2027. The ice rink is free to use; you pay only to hire skates, and the market stalls are free to browse. In summer the same park runs free outdoor films, yoga and reading hours — check the park's own calendar, because the programme changes by season.</p>

      <h2 id="museum-windows">9. The free museum windows</h2>
      <p>This is the item people most often get wrong, because the details change. Here is the current position for the major museums, verified for 2026.</p>
      <ul>
        <li><strong>MoMA:</strong> UNIQLO Free Friday Nights, 5.30–8.30pm, New York State residents only; reserve ahead. Everyone else pays $30.</li>
        <li><strong>The Whitney:</strong> free Friday nights, 5–10pm, for everyone. Also free on Second Sundays and free daily for visitors aged 25 and under.</li>
        <li><strong>9/11 Memorial &amp; Museum:</strong> the memorial plaza is free 8am–8pm daily. The museum's free window is for New Yorkers on Sundays, 4–7pm, with proof of residence. The old Monday evening window is gone.</li>
        <li><strong>Brooklyn Museum:</strong> suggested admission, with free First Saturday evenings.</li>
        <li><strong>Bronx Museum:</strong> always free.</li>
        <li><strong>American Museum of Natural History:</strong> $28 general admission, $43 with one ticketed exhibition, and pay-what-you-wish for New York, New Jersey and Connecticut residents.</li>
        <li><strong>The Met:</strong> $30, closed Wednesdays; pay-what-you-wish for New York State residents and tri-state students only.</li>
      </ul>
      <p>Two practical notes. Bring identification if the offer is for residents. These schemes can change with little notice, so check the day before; if you are not a resident, budget for the ticket.</p>
      ${callout({
        icon: "◆",
        title: "The cheapest museum day",
        text: "Build a free-museum day around Friday: the Whitney after 5pm for everyone, or MoMA's free evening if you are a New York State resident. Sunday afternoon is the 9/11 Museum window for New Yorkers, and the first Saturday of the month belongs to Brooklyn.",
      })}

      <h2 id="summer-concerts">10. Free summer concerts</h2>
      <p>Between June and September the city becomes a free festival. SummerStage fills Central Park with music and dance; BRIC Celebrate Brooklyn! runs its series in Prospect Park; Lincoln Center's Summer for the City puts opera, jazz and film on the plaza. All of it is free, with no ticket needed for general seating.</p>
      <p>Arrive early with a blanket, expect a queue at the gates, and check the programme on the day — weather cancels things and line-ups shift.</p>

      <h2 id="governors-island">11. Governors Island, with a caveat</h2>
      <p>The island itself is free: 172 acres of car-free paths, old military buildings and one of the best views of the Lower Manhattan skyline. It is open seasonally, and the ferry is the catch — the crossing costs money, so "free" only applies once you are there. Check the fare and timetable first; the service is frequent in summer and limited outside it.</p>
      <p>Go on a weekday if you can. Take a picnic, hire a bike if you want to cover the whole island, and allow half a day. It is the closest the city gets to an escape without leaving it, and the ferry ride is a harbour tour in its own right.</p>

      <h2 id="walks">12. Self-guided neighbourhood walks</h2>
      <p>The last free thing is the one that stays with you longest: walking a neighbourhood with no plan and no ticket. New York is a city of distinct quarters, and the best ones reward an unhurried afternoon.</p>
      <ul>
        <li><strong>Harlem:</strong> the Apollo Theater, the Schomburg Center and the brownstones around Strivers' Row, plus soul food and jazz in the evening.</li>
        <li><strong>Jackson Heights, Queens:</strong> 74th Street and the blocks around it form Little India, and the food is the point.</li>
        <li><strong>Bushwick, Brooklyn:</strong> the Bushwick Collective murals, best on a weekday when the streets are quiet.</li>
        <li><strong>Arthur Avenue, the Bronx:</strong> the retail market and the Italian-American blocks around it, with Mike's Deli and Zero Otto Nove as landmarks.</li>
        <li><strong>The Lower East Side and Chinatown:</strong> tenements, synagogues, dumpling shops and the Tenement Museum.</li>
        <li><strong>Greenwich Village:</strong> Washington Square Park, the brownstone side streets and the basement jazz clubs.</li>
      </ul>
      <p>Pick one, not four. The mistake is treating neighbourhoods as a checklist; the pleasure is noticing the same bakery on the second pass. Take the subway, get out and walk until you find lunch.</p>

      <blockquote>The city's best experiences are free because they are public: a ferry, a bridge, a park, a library. The expensive ones are optional.</blockquote>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${eyebrow("Good to know")}
    <h2 style="font-size:var(--step-3);margin:1rem 0 1.6rem">Making a free day work</h2>
    <div class="grid grid--3">
      ${callout({
        icon: "◷",
        title: "Go early, not late",
        text: "The High Line before 10am and the Brooklyn Bridge before 9am are the two rules that turn a crowded experience into a good one.",
      })}
      ${callout({
        icon: "$",
        title: "Budget for the ferry",
        text: "The Staten Island Ferry is free; Governors Island is not free to reach. Check the ferry fare before you go — it is still cheaper than any sightseeing cruise.",
      })}
      ${callout({
        icon: "☂",
        title: "Have a wet-weather swap",
        text: "Grand Central, the NY Public Library and a museum window all work in the rain. Keep one indoor option loose in each day.",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("The cost of free")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">What free actually costs</h2>
        <p class="lead">None of these needs a ticket, but they all need time and often a subway fare. A free day is not a zero-cost day.</p>
        <p class="muted">Add up the practical bits: two subway rides at $3 each, a coffee and a bagel at $9, lunch at a cheap counter around $12. That is a full, memorable day for roughly $30. Compare it with a single observation deck ticket at $42–47 and the value is obvious. The subway also caps at 12 fares in any rolling seven days, so a week of free sightseeing will not blow the transport budget.</p>
        <p class="muted">Free museum windows fill up. If a scheme requires a reservation, book it as soon as you know your dates — the free slot is popular precisely because it is free. And keep your expectations honest: the free version of a museum is the same collection, just at a busier time.</p>
        <div class="split__actions">
          ${btn({ href: "budget.html", label: "Read the budget guide" })}
          ${btn({ href: "getting-around.html", label: "Getting around", variant: "outline" })}
        </div>
      </div>
      <div class="split__media">
        <img src="${img("grand-central.webp")}" alt="The main concourse of Grand Central Terminal" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    ${eyebrow("Questions")}
    <h2 style="font-size:var(--step-3);margin:1rem 0 1.6rem">Free things, answered</h2>
    ${faq([
      {
        q: "What is the single best free thing to do in New York?",
        a: "<p>The Staten Island Ferry. It runs 24 hours a day, costs nothing, and gives you a 25-minute crossing with the Statue of Liberty and the Lower Manhattan skyline in view. Take it in the morning and you have had the harbour tour before most people have finished breakfast.</p>",
      },
      {
        q: "Are any New York museums free all the time?",
        a: "<p>The Bronx Museum is always free. The Brooklyn Museum is suggested admission, with free First Saturday evenings. Other museums are free only in specific windows — MoMA for New York State residents on Friday evenings, the Whitney for everyone on Friday nights, and the 9/11 Museum for New Yorkers on Sunday afternoons.</p>",
      },
      {
        q: "Is the Brooklyn Bridge walk free?",
        a: "<p>Yes, and there is no ticket or booking. Start on the Brooklyn side before 9am to avoid the worst of the crowds. Stay out of the cycling lane and allow about 30 minutes at an unhurried pace.</p>",
      },
      {
        q: "Is Governors Island free?",
        a: "<p>The island is free to enter, but the ferry crossing costs money. Check the current fare and timetable first. It is a good value half-day, particularly on a weekday in summer, but it is not a zero-cost outing.</p>",
      },
      {
        q: "Do I need to reserve free museum tickets?",
        a: "<p>Some do require a reservation, particularly MoMA's free Friday evenings, and they go quickly. Book as soon as your dates are fixed and bring identification if the offer is limited to New York residents.</p>",
      },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${eyebrow("Keep reading")}
    <h2 style="font-size:var(--step-3);margin:1rem 0 1.6rem">More from the Journal</h2>
    <div class="grid grid--2">
      ${mediaCard({
        href: "sunday-in-brooklyn.html",
        image: img("brooklyn-bridge-park.webp"),
        alt: "A Brooklyn Bridge tower seen from Brooklyn Bridge Park",
        kicker: "Itinerary",
        title: "A Sunday in Brooklyn",
        text: "A full day on the other side of the river: the Promenade, DUMBO, a long lunch and Prospect Park.",
        meta: "One day",
      })}
      ${mediaCard({
        href: "nyc-rainy-day.html",
        image: img("subway-train.webp"),
        alt: "A New York subway train at a platform",
        kicker: "Weather",
        title: "New York on a rainy day",
        text: "Museums, markets and how to move a matinee when the weather turns.",
        meta: "Indoor plan",
      })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "One useful New York email a week",
      text: "Free events, what is worth queueing for and the practical details that change month to month.",
      source: "free-things",
    })}
  </div>
</section>

${pageNav({
  prev: { href: "journal.html", label: "The Journal" },
  next: { href: "sunday-in-brooklyn.html", label: "A Sunday in Brooklyn" },
})}
`,
};
