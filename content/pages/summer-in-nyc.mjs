import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "summer-in-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Summer in NYC — Concerts, Parks and Heat",
  description:
    "Summer in New York: free concerts at SummerStage, BRIC and Lincoln Center, the parks and waterfront at their best, and how to handle the heat and afternoon storms.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-sunset.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Summer in NYC — Concerts, Parks and Heat",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "Summer" },
      ],
      heroImage: "brooklyn-bridge-sunset.webp",
      heroAlt: "The Brooklyn Bridge silhouetted against a sunset over the East River",
      eyebrowText: "Seasonal guide · Summer",
      h1: "Summer in New York",
      lead: "New York in summer is hot, loud and generous: free concerts most nights, parks that stay busy until dark and a waterfront that finally makes sense. Plan around the heat rather than against it and the season is one of the city's best.",
      heroMeta: ["June–August", "84°F average high", "Free concerts all summer", "Long evenings"],
      facts: [
        { label: "When", value: "June to August; concerts from late May" },
        { label: "Weather", value: "84°F / 70°F in July; 84°F / 68°F in August" },
        { label: "Rain", value: "10.5 wet days in July; 10.0 in August" },
        { label: "Best for", value: "Evenings, parks and free music" },
        { label: "Crowds", value: "Busy parks at weekends; theatres quieter" },
      ],
      introEyebrow: "The short version",
      introTitle: "An evening city in a hot season",
      introLead:
        "The mistake visitors make in summer is treating it like spring with a higher temperature. New York summer works best in two shifts: outdoors early, indoors or in the shade at midday, outdoors again from about six.",
      introParagraphs: [
        "July and August average 84°F (29°C) by day, with lows around 68–70°F (20–21°C), and humidity that makes the middle of the day uncomfortable on the street and worse on a subway platform. Rain comes as short, heavy afternoon storms rather than all-day drizzle; the month still logs around ten wet days. The practical response is simple: do your walking before 11am, put a museum or an air-conditioned restaurant in the middle of the day, and keep the evening for the waterfront, a park or a concert.",
        "The free music is the reason to come. SummerStage runs in Central Park and in parks across the boroughs, BRIC Celebrate Brooklyn! fills the Prospect Park bandshell, and Lincoln Center's Summer for the City puts on mostly free events in and around the campus. Schedules are published in late spring and change from year to year, so check the organisers' sites before you build a trip around a specific night: <a href=\"https://cityparksfoundation.org/summerstage/\" rel=\"nofollow noopener\" target=\"_blank\">SummerStage</a>, <a href=\"https://bricartsmedia.org/\" rel=\"nofollow noopener\" target=\"_blank\">BRIC</a> and <a href=\"https://www.lincolncenter.org/\" rel=\"nofollow noopener\" target=\"_blank\">Lincoln Center</a>.",
      ],
      introImage: "central-park-bow-bridge.webp",
      introImageAlt: "Bow Bridge in Central Park surrounded by summer greenery",
      mapId: "brooklyn-bridge",
      highlightsTitle: "Where summer happens",
      highlightsLead:
        "Three things define a New York summer: free music, the waterfront and the long light. Plan one of each and you have the season.",
      highlights: [
        {
          kicker: "01",
          title: "Free concerts",
          text: "SummerStage, BRIC Celebrate Brooklyn! and Lincoln Center Summer for the City run through the season, mostly free. Bring a blanket, arrive early for a good spot, and check the schedule the week you travel.",
        },
        {
          kicker: "02",
          title: "The waterfront",
          text: "Brooklyn Bridge Park, the High Line and the harbour ferries are at their best in the evening light. Coney Island and the Rockaway beaches are a half-day trip on the subway for a proper ocean swim.",
        },
        {
          kicker: "03",
          title: "Long evenings in the park",
          text: "Central Park stays light until after 8pm in June and July. The Great Lawn, Bethesda Terrace and the Ramble are pleasant at dusk, and the park is at its quietest early on a weekday morning.",
        },
      ],
      planTitle: "A summer day that works",
      planLead:
        "Heat is predictable, so build the day around it. The best summer itineraries are front-loaded and finish near water.",
      planSteps: [
        "Start early. A 7–9am walk across the Brooklyn Bridge or through Central Park is cooler, quieter and better lit than the same route at noon.",
        "Put the middle of the day indoors: a museum, a gallery, a long lunch or a matinee. The Met, MoMA and AMNH are all air-conditioned and busy in exactly the hours you want to be inside.",
        "Take the afternoon slowly. A ferry ride, a shaded park bench or an air-conditioned café is a legitimate use of two hours in August.",
        "Head to the waterfront or a park for the evening, ideally with a free concert on the schedule. Sunset is late — around 8:30pm in late June — so you have time.",
        "Carry water and check the forecast each morning. Afternoon storms are short but intense, and a lightweight rain layer earns its place in your bag.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Hydrate and pace yourself",
          text: "Heat and humidity are the real constraint. Carry a refillable bottle, use the city's drinking fountains and plan a sit-down break every few hours rather than pushing through.",
        },
        {
          icon: "☂",
          title: "Storms are short, not rare",
          text: "July and August each see around ten wet days, mostly as afternoon thunderstorms. They clear quickly; wait under cover rather than abandoning the day.",
        },
        {
          icon: "◷",
          title: "Book the indoor bits",
          text: "Museum slots, observation decks and shows are worth reserving for the hottest part of the day. It gives you somewhere cool to be and a reason not to be on the street at 2pm.",
        },
      ],
      localTitle: "How locals survive August",
      localTips: [
        {
          title: "Treat the subway like weather",
          text: "Platforms are significantly hotter than the street. New Yorkers carry a layer to remove above ground and wear shoes that survive a hot walk between stations. It is not glamorous; it is practical.",
        },
        {
          title: "Claim the free pools and beaches",
          text: "The city runs free outdoor pools across the boroughs in summer, and the beaches at Coney Island and the Rockaways are reachable by subway. Locals go early, leave by mid-afternoon and avoid the weekend crush where they can.",
        },
        {
          title: "Eat late and outdoors",
          text: "The evening is when the city relaxes: sidewalk tables, park picnics and the Saturday Smorgasburg market in Brooklyn. Book dinner later than you would at home, and let the long light do the rest.",
        },
      ],
      localImage: "brooklyn-bridge-skyline.webp",
      localImageAlt: "The Brooklyn Bridge and Lower Manhattan skyline on a clear day",
      relatedTitle: "The rest of the year",
      relatedLead: "Summer runs into the best walking months of the year, and the calendar covers the other seasons.",
      related: [
        {
          href: "us-open-nyc.html",
          image: "queens-astoria.webp",
          alt: "The Manhattan skyline seen from Astoria, Queens",
          kicker: "August",
          title: "The US Open in NYC",
          text: "Two weeks of tennis at Flushing Meadows, and how to plan a day there.",
          meta: "Seasonal guide",
        },
        {
          href: "whats-on.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Calendar",
          title: "What's on in New York",
          text: "The six seasonal guides and the dates that shape the year.",
          meta: "Hub",
        },
        {
          href: "free-things-to-do-nyc.html",
          image: "manhattan-skyline.webp",
          alt: "Lower Manhattan and the Brooklyn Bridge across the East River",
          kicker: "Budget",
          title: "Free things to do in NYC",
          text: "Concerts, ferries, parks and museum hours that cost nothing.",
          meta: "Free guide",
        },
      ],
      faqTitle: "Summer questions",
      faq: [
        {
          q: "How hot does New York get in summer?",
          a: "<p>July and August average around 84°F (29°C) by day and 68–70°F (20–21°C) at night, with humidity that makes it feel hotter. Heatwaves push into the 90s. Plan outdoor activity for the morning and evening.</p>",
        },
        {
          q: "Are the summer concerts really free?",
          a: "<p>Most are. SummerStage, BRIC Celebrate Brooklyn! and Lincoln Center Summer for the City are largely free, though some shows are ticketed and schedules change each year. Check the organiser's site for the night you want.</p>",
        },
        {
          q: "What should I do when it rains?",
          a: "<p>Wait it out. Summer rain usually arrives as a short afternoon storm. Duck into a museum, a café or a bar for an hour and continue afterwards; a compact umbrella is more useful than a heavy raincoat.</p>",
        },
        {
          q: "Is summer a good time to visit New York?",
          a: "<p>Yes, if you like long evenings, free music and a lively street scene, and if you can handle the heat. It is not the best season for long walking days or for cheap hotels — spring and early autumn are more comfortable.</p>",
        },
        {
          q: "Where can I swim in New York?",
          a: "<p>The city runs free outdoor pools in summer across the boroughs, and the beaches at Coney Island and the Rockaways are reachable by subway. Go early, check water quality and lifeguard hours, and avoid the busiest weekend afternoons.</p>",
        },
      ],
      source: "summer",
      prev: { href: "restaurant-week-nyc.html", label: "NYC Restaurant Week" },
      next: { href: "us-open-nyc.html", label: "The US Open in NYC" },
    }),
};
