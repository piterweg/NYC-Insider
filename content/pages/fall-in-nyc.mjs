import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "fall-in-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Fall in NYC — Foliage, Marathon and Walks",
  description:
    "Fall in New York: when the foliage peaks, where to see it in Central Park and the High Line, the marathon and Thanksgiving, and why September is the best walking month.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Fall in NYC — Foliage, Marathon and Walks",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "Fall" },
      ],
      heroImage: "central-park-bow-bridge.webp",
      heroAlt: "Bow Bridge in Central Park surrounded by autumn trees",
      eyebrowText: "Seasonal guide · Fall",
      h1: "Fall in New York",
      lead: "Autumn is the best walking season in New York and the busiest park season. September and early October are warm, dry and comfortable; late October brings the foliage; November brings Halloween, the marathon and Thanksgiving in quick succession.",
      heroMeta: ["September–November", "Foliage late October–mid November", "77°F / 63°F in September", "Marathon first Sunday of November"],
      facts: [
        { label: "When", value: "September to November" },
        { label: "Weather", value: "Sep 77/63, Oct 64/52, Nov 54/41 (°F)" },
        { label: "Foliage", value: "Late October to mid-November" },
        { label: "Best for", value: "Walking, parks and photography" },
        { label: "Crowds", value: "Marathon Sunday and Thanksgiving week" },
      ],
      introEyebrow: "The short version",
      introTitle: "The best three months for walking",
      introLead:
        "September and early October are the sweet spot: warm days, cool evenings and the fewest wet days of the year. If you want colour rather than comfort, wait until late October, when the parks turn and the city starts moving towards its holiday season.",
      introParagraphs: [
        "The numbers are on autumn's side. September averages 77°F (25°C) by day and 63°F (17°C) at night with 8.8 wet days — the lowest of any month — and October averages 64°F (18°C) and 52°F (11°C) with 9.5 wet days. November drops to 54°F (12°C) and 41°F (5°C) with 9.2 wet days, cold enough for a proper coat but rarely brutal. This is why the month guide recommends September to early October as one of the two best windows of the year.",
        "Foliage peaks between late October and mid-November, moving with the weather rather than a fixed date. The classic places to see it are Central Park — the Mall and the Ramble — the High Line, Prospect Park and Brooklyn Bridge Park, all free. Check the parks' own sites for colour updates rather than booking around a specific week, and expect the best light early in the morning. The season's big dates are the New York City Marathon on the first Sunday of November, which closes streets in all five boroughs, and Thanksgiving on 26 November 2026.",
      ],
      introImage: "high-line.webp",
      introImageAlt: "The High Line elevated park running between Manhattan buildings",
      mapId: "high-line",
      highlightsTitle: "Three things autumn does well",
      highlightsLead:
        "Leaf colour, walking weather and a run of major events. Plan one park day and one event, and the season takes care of the rest.",
      highlights: [
        {
          kicker: "01",
          title: "The foliage",
          text: "Late October to mid-November is the usual window, with the peak moving by a week or more each year. Central Park, the High Line, Prospect Park and Brooklyn Bridge Park are all free and all at their best in low morning light.",
        },
        {
          kicker: "02",
          title: "September walking weather",
          text: "The warmest, driest month of the season, with 8.8 wet days and comfortable evenings. It is the best time of year for long walks: the Brooklyn Bridge, the High Line, the Village and the waterfront all work without heat or crowds.",
        },
        {
          kicker: "03",
          title: "Halloween, marathon and Thanksgiving",
          text: "The season ends with three big dates: Halloween on 31 October, the New York City Marathon on the first Sunday of November, and Thanksgiving on 26 November 2026. Each changes how the city moves for a day or more.",
        },
      ],
      planTitle: "Planning an autumn trip",
      planLead:
        "Pick early autumn for weather or late autumn for colour, then check the event calendar before you fix your dates — the marathon and Thanksgiving rearrange the city.",
      planSteps: [
        "Choose your window: September to early October for the best walking weather, late October to mid-November for foliage, or late November for the holiday atmosphere.",
        "Check the marathon date before booking anything for the first Sunday of November. The route closes streets in all five boroughs for much of the day.",
        "See the foliage early. The High Line is best before 10am and the Brooklyn Bridge walk before 9am; the parks are quieter on weekday mornings in every season.",
        "Book Thanksgiving week four to six months ahead if it is part of your trip, and reserve the meal itself as soon as you have dates.",
        "Pack for a range: a light jacket in September, a proper coat by late November, and an umbrella for the roughly nine to ten wet days each month.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Layers from September to November",
          text: "Daytime temperatures fall from the high 70s to the low 50s across the season, and evenings drop faster. A light jacket plus a warmer layer covers most days; November needs a coat.",
        },
        {
          icon: "☂",
          title: "Wet leaves are slippery",
          text: "Autumn rain makes park paths and the High Line's decking slick. Wear shoes with grip when it has rained, especially on the park's slopes and the bridge walkways.",
        },
        {
          icon: "◷",
          title: "Do not book around one leaf date",
          text: "Foliage peak shifts with temperature, wind and rain. Plan a window of a week or two rather than a single day, and check the park sites in the fortnight before you travel.",
        },
      ],
      localTitle: "How locals do autumn",
      localTips: [
        {
          title: "The park on a weekday morning",
          text: "New Yorkers treat the park as a morning place in autumn: a walk before work, coffee on a bench, the light through the trees. By noon on a weekend in October, the popular paths are as busy as the streets.",
        },
        {
          title: "Marathon Sunday is a citywide party",
          text: "The first Sunday of November is the New York City Marathon. Neighbourhoods along the route turn out to cheer, streets close and the subway is the only sensible way around. Even if you are not watching, check the closures before making plans.",
        },
        {
          title: "Book Thanksgiving before the leaves fall",
          text: "Thanksgiving week fills hotels and restaurants months ahead, and the parade on 26 November 2026 makes the whole week busier. Locals either book early or leave town; visitors should do the former.",
        },
      ],
      localImage: "central-park-nyc.webp",
      localImageAlt: "Bethesda Fountain and its terrace in Central Park in autumn light",
      relatedTitle: "Autumn into winter",
      relatedLead: "Halloween and Thanksgiving lead straight into the holiday season, and the calendar covers the rest of the year.",
      related: [
        {
          href: "halloween-in-nyc.html",
          image: "soho-street-night.webp",
          alt: "A cobblestone SoHo street at night with lit shop fronts",
          kicker: "31 October",
          title: "Halloween in NYC",
          text: "The Village parade and how to plan the night around it.",
          meta: "Seasonal guide",
        },
        {
          href: "when-to-visit.html",
          image: "manhattan-skyline.webp",
          alt: "Lower Manhattan and the Brooklyn Bridge across the East River",
          kicker: "Planning",
          title: "When to visit New York",
          text: "Weather by month, holiday trade-offs and what to pack.",
          meta: "Weather guide",
        },
        {
          href: "whats-on.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Calendar",
          title: "What's on in New York",
          text: "All nine seasonal guides and the dates that shape the year.",
          meta: "Hub",
        },
      ],
      faqTitle: "Fall questions",
      faq: [
        {
          q: "When is fall foliage in New York?",
          a: "<p>The usual peak is late October to mid-November, moving with temperature, wind and rain. Central Park, the High Line, Prospect Park and Brooklyn Bridge Park are the classic places to see it, and all are free.</p>",
        },
        {
          q: "What is the best month to visit New York in autumn?",
          a: "<p>September and early October for weather — warm, comfortable and the fewest wet days of the year. Late October and early November for leaf colour. November is colder but atmospheric.</p>",
        },
        {
          q: "When is the New York City Marathon?",
          a: "<p>The marathon is run on the first Sunday of November and closes streets across all five boroughs for much of the day. Check the organiser's site for the confirmed date and route before planning travel that day.</p>",
        },
        {
          q: "What should I pack for autumn in New York?",
          a: "<p>Layers and a waterproof outer layer. September can be warm, October varies, and November averages 54°F (12°C) by day and 41°F (5°C) at night. Shoes with grip are useful once the paths are wet and covered in leaves.</p>",
        },
        {
          q: "Is autumn a busy time in New York?",
          a: "<p>It is manageable except around three moments: Halloween weekend, Marathon Sunday and Thanksgiving week. Book hotels and restaurants early for those dates and check street closures before planning days around them.</p>",
        },
      ],
      source: "fall",
      prev: { href: "halloween-in-nyc.html", label: "Halloween in NYC" },
      next: { href: "spring-in-nyc.html", label: "Spring in New York" },
    }),
};
