import { renderBoroughPage } from "../borough-template.mjs";
import { img } from "../components.mjs";

export default {
  path: "manhattan.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Manhattan Guide — Sights, Areas and Where to Eat",
  description:
    "A local guide to Manhattan: the neighbourhoods worth your time, the museums and skyline decks, where to eat, and a realistic one-day plan for the island.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline.webp",
  render: () =>
    renderBoroughPage({
      heroImage: "manhattan-skyline.webp",
      heroAlt: "The Brooklyn Bridge and the Lower Manhattan skyline on a bright day",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "boroughs.html", label: "Boroughs" },
        { href: "manhattan.html", label: "Manhattan" },
      ],
      eyebrowText: "Borough 01 · Manhattan",
      title: "Manhattan",
      lead: "The island everyone pictures when they picture New York — and, with a little planning, a place where you can still find quiet streets, old bars and a skyline all to yourself.",
      meta: ["1.6 million residents", "23 square miles", "All subway lines", "2–4 days"],
      introEyebrow: "The island",
      introTitle: "The postcard, and everything underneath it",
      introLead:
        "Manhattan is 13 miles long and 2 miles wide, and almost everything visitors want to see sits in the bottom half of it. The trick is to treat the island as a set of neighbourhoods rather than one long sightseeing list.",
      introParagraphs: [
        "Spend your mornings on the big things — observation decks, the Statue of Liberty ferry, The Met — and your afternoons walking the streets that make the city liveable: the West Village, the Upper West Side, the Lower East Side. That is where the postcard turns into a place.",
        "Everything below 59th Street is dense, walkable and served by dozens of subway lines. Above it, the grid is easy and the pace is calmer. You do not need a car for any of it.",
      ],
      stats: [
        { value: "1.6M", label: "residents" },
        { value: "8", label: "major museums" },
        { value: "3", label: "skyline decks" },
        { value: "24h", label: "subway" },
      ],
      splitImage: "times-square-day.webp",
      splitImageAlt: "Times Square in daylight with yellow cabs and billboards",
      flip: true,
      neighbourhoods: [
        {
          kicker: "Midtown",
          name: "Midtown",
          text: "Times Square, Broadway, Grand Central and Rockefeller Center in one crowded, convenient grid. Best for a first hotel and theatre nights.",
        },
        {
          kicker: "Lower Manhattan",
          name: "Lower Manhattan",
          text: "Wall Street, the 9/11 Memorial, Battery Park and the ferry terminals. Compact, historic, and quiet at weekends.",
        },
        {
          kicker: "SoHo & Nolita",
          name: "SoHo",
          text: "Cast-iron facades, cobblestones and global retail. Walk Greene, Prince and Broome streets, then eat on the edge of Nolita.",
          link: "soho.html",
          linkLabel: "SoHo guide",
        },
        {
          kicker: "Greenwich Village",
          name: "Greenwich Village",
          text: "Brownstones, Washington Square Park, jazz basements and the crooked streets of the West Village. The best place to be at 6pm.",
          link: "west-village.html",
          linkLabel: "West Village guide",
        },
        {
          kicker: "Upper East Side",
          name: "Upper East Side",
          text: "Museum Mile — the Met, the Guggenheim, the Neue Galerie — plus Central Park's quiet eastern edge.",
        },
        {
          kicker: "Upper West Side",
          name: "Upper West Side",
          text: "AMNH, Lincoln Center, Zabar's and Riverside Park. Residential, family-friendly and calmer than Midtown.",
        },
        {
          kicker: "Harlem",
          name: "Harlem",
          text: "The Apollo, the Schomburg Center, 125th Street and a deep jazz and soul-food history. Worth a guided half-day.",
          link: "harlem.html",
          linkLabel: "Harlem guide",
        },
        {
          kicker: "Lower East Side",
          name: "Lower East Side",
          text: "Tenement history, Katz's and Russ & Daughters, and a nightlife scene that goes late. The city's immigrant story in a few blocks.",
        },
        {
          kicker: "Central Park",
          name: "Central Park",
          text: "843 acres of free, from Bethesda Terrace to the Ramble. Enter at 72nd Street and walk north.",
        },
      ],
      neighbourhoodTitle: "The Manhattan neighbourhoods worth your time",
      neighbourhoodLead: "Nine areas that together explain most of the island. You will not do them all in one trip, and you should not try.",
      highlightsTitle: "The essentials",
      highlightsLead: "Book the first three before you travel; the rest can happen on the day.",
      highlights: [
        {
          title: "Central Park",
          text: "Free, 843 acres, and genuinely the reason many New Yorkers stay. Start at Bethesda Terrace; end at the Ramble.",
        },
        {
          title: "The Met",
          text: "One of the great museums on earth. Three hours on the highlights is the right call; it is closed Wednesdays.",
        },
        {
          title: "A skyline deck",
          text: "Top of the Rock for the Empire State Building view; the Empire State Building for the view that includes it. Book the sunset slot early.",
        },
        {
          title: "Statue of Liberty ferry",
          text: "From Battery Park, with Ellis Island included. The only authorised operator is Statue City Cruises — ignore anyone selling on the street.",
        },
        {
          title: "Broadway",
          text: "Book ahead for a specific show, or use TKTS on the day for up to half price. The Theatre District starts at 41st Street.",
        },
        {
          title: "Lower Manhattan",
          text: "9/11 Memorial, Wall Street, Stone Street and the ferries. The plaza is free; the museum takes two hours.",
        },
      ],
      foodEyebrow: "Where to eat",
      foodTitle: "Manhattan in six plates",
      foodLead: "The island is expensive, but its best-loved food is still cheap if you know where to queue.",
      foodImage: "high-line.webp",
      foodImageAlt: "People sitting on the High Line elevated park in Manhattan",
      foodSpots: [
        { name: "Katz's Delicatessen", text: "Lower East Side. Pastrami on rye, hand-carved, about $32–36. Keep your ticket." },
        { name: "Russ & Daughters", text: "Lower East Side. Bagel with lox at the counter that has been doing this since 1914." },
        { name: "Joe's Pizza", text: "Greenwich Village. The rare New York slice worth the reputation — about $4.50." },
        { name: "Los Tacos No. 1", text: "Chelsea Market and Times Square. Adobada tacos, no seats, worth standing for." },
        { name: "The Halal Guys", text: "53rd and Sixth. The chicken-and-rice platter that starts a queue every evening." },
        { name: "Chelsea Market", text: "Not one restaurant but twenty, under one roof. The reliable rainy-day lunch." },
      ],
      dayTitle: "One day in Manhattan",
      dayLead: "A realistic loop that hits the park, a museum and the skyline without crossing the island twice.",
      dayStops: [
        { time: "8:30", title: "Central Park", text: "Enter at 72nd Street, walk the Mall to Bethesda Terrace and the Bow Bridge." },
        { time: "10:30", title: "The Met", text: "Three hours on the highlights — or swap for AMNH if you are travelling with children." },
        { time: "14:00", title: "Lunch on the Upper East Side", text: "Then take the 6 downtown toward the Village." },
        { time: "16:00", title: "Greenwich Village", text: "Washington Square Park, Bleecker Street, a coffee, a slice." },
        { time: "18:00", title: "Top of the Rock", text: "Book the slot before sunset for the best light on the Empire State Building." },
        { time: "20:00", title: "Dinner in Midtown or the Theatre District", text: "Or a Broadway show if you booked ahead." },
      ],
      transitTitle: "Getting around",
      transitText:
        "Every subway line passes through Manhattan. Above 59th Street, walking the grid is often faster than going underground; below it, take the train. Crosstown buses are slow — the exception is the M42 and the M57 if you are already at street level.",
      tips: [
        {
          icon: "◆",
          title: "Eat away from the squares",
          text: "Restaurants within two blocks of Times Square are priced for people who will never return. Walk ten minutes west or north and the food improves immediately.",
        },
        {
          icon: "☂",
          title: "Check museum closures",
          text: "The Met is closed Wednesdays; MoMA's free Friday is for New York State residents; AMNH charges extra for its ticketed exhibitions.",
        },
        {
          icon: "◷",
          title: "Book decks for sunset",
          text: "Observation-deck sunset slots sell out days ahead. If you miss one, go at opening instead — the queues are shorter and the light is clean.",
        },
      ],
      faqTitle: "Manhattan questions",
      faq: [
        { q: "Do I need to stay in Manhattan?", a: "<p>Not necessarily. Brooklyn and Queens are cheaper and often nicer, and anywhere near a subway gets you into Midtown in 15–30 minutes. See <a href=\"plan-your-trip.html\">where to stay</a>.</p>" },
        { q: "Is Times Square worth visiting?", a: "<p>For fifteen minutes at dusk, yes — it is genuinely spectacular as a piece of urban theatre. For dinner, no.</p>" },
        { q: "How many days should I give Manhattan?", a: "<p>Two full days covers the icons; three or four lets you add museums and neighbourhoods. Our <a href=\"5-days-in-nyc.html\">5-day itinerary</a> gives it three and a half.</p>" },
        { q: "What is the best free thing in Manhattan?", a: "<p>Central Park, followed closely by Grand Central's concourse and the Staten Island Ferry from Whitehall. All three cost nothing.</p>" },
      ],
      source: "manhattan",
      prev: { href: "boroughs.html", label: "All boroughs" },
      next: { href: "brooklyn.html", label: "Brooklyn" },
    }),
};
