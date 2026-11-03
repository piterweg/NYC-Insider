import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "spring-in-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Spring in NYC — Blossoms, Parks and Crowds",
  description:
    "Spring in New York: cherry blossom season in Central Park and Brooklyn, Easter and spring-break crowds, the NYC Half, and what the weather is really like month by month.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-nyc.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Spring in NYC — Blossoms, Parks and Crowds",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "Spring" },
      ],
      heroImage: "central-park-nyc.webp",
      heroAlt: "Bethesda Fountain and its terrace in Central Park",
      eyebrowText: "Seasonal guide · Spring",
      h1: "Spring in New York",
      lead: "Spring is the season New Yorkers forgive winter for. The park fills with blossom, the outdoor tables come back and walking is finally comfortable again — with one caveat: the first warm weekend and the Easter holidays bring some of the sharpest crowds of the year.",
      heroMeta: ["March–May", "Blossoms early–mid April", "April averages 63°F / 45°F", "Book spring hotels early"],
      facts: [
        { label: "When", value: "March to May; blossom peak early–mid April" },
        { label: "Weather", value: "Mar 50/36, Apr 63/45, May 72/54 (°F)" },
        { label: "Rain", value: "11.1 to 11.5 wet days a month" },
        { label: "Best for", value: "Parks, blossom and long walks" },
        { label: "Crowds", value: "Easter and spring-break weeks; first warm weekend" },
      ],
      introEyebrow: "The short version",
      introTitle: "The city thaws quickly",
      introLead:
        "Cherry blossom season is the centrepiece: roughly two or three weeks in early to mid-April when the city's parks turn pink and half of New York heads out with a camera. It is short, slightly unpredictable and worth arranging a trip around.",
      introParagraphs: [
        "The weather climbs fast. March averages 50°F (10°C) by day and 36°F (2°C) at night, April 63°F (17°C) and 45°F (7°C), and May 72°F (22°C) and 54°F (12°C). Rain stays constant at roughly 11 wet days a month, so an umbrella belongs in the bag from March onward. Early spring can still feel like winter in the wind; late May is often the most comfortable weather of the whole year, which is why our month guide recommends mid-April to mid-June as the best window.",
        "Blossom timing moves with the weather, not the calendar, so check the trackers before you book anything time-sensitive. The Central Park Conservancy publishes a seasonal bloom guide at <a href=\"https://www.centralparknyc.org/\" rel=\"nofollow noopener\" target=\"_blank\">centralparknyc.org</a>, and Brooklyn Botanic Garden — the best single place in the city for cherries — updates its blossom news at <a href=\"https://www.bbg.org/\" rel=\"nofollow noopener\" target=\"_blank\">bbg.org</a>. Easter and the school spring-break weeks also drive hotel prices and park crowds; both move each year, so check the dates rather than assuming.",
      ],
      introImage: "central-park-bow-bridge.webp",
      introImageAlt: "Bow Bridge in Central Park among spring trees",
      mapId: "central-park",
      highlightsTitle: "Three reasons to come in spring",
      highlightsLead:
        "Blossom, mild weather and the city's running season. The first two are the reasons visitors book; the third is worth knowing about if you are here in March.",
      highlights: [
        {
          kicker: "01",
          title: "Cherry blossoms",
          text: "Central Park's Cherry Hill and the Reservoir walk are the classic city spots; Brooklyn Botanic Garden has the densest collection and a cherry-blossom festival, usually in late April. Peak is early to mid-April, and it varies by year.",
        },
        {
          kicker: "02",
          title: "Easter and spring break",
          text: "Easter falls in late March or April, and the school holidays around it fill hotels and the big attractions. If you want quieter parks and cheaper rooms, travel the week after Easter rather than the week before.",
        },
        {
          kicker: "03",
          title: "The NYC Half",
          text: "The half marathon is usually run in March, with street closures in Manhattan and Brooklyn. The date is confirmed each year by the organiser — check the official site before planning a Sunday morning.",
        },
      ],
      planTitle: "Planning a spring trip",
      planLead:
        "Spring rewards flexibility. Pick your week around the blossom forecast and the Easter calendar, then keep one indoor option ready for the wet days.",
      planSteps: [
        "Aim for mid-April if blossoms are the priority. Early to mid-April is the usual peak; late April is still green and less frantic if you miss it.",
        "Check the organisers' bloom updates in the two weeks before you travel. Blossom peak shifts by a week or more depending on temperature and wind.",
        "Book hotels early for Easter and spring-break weeks, and compare the week after Easter for better rates and thinner crowds.",
        "Go to the parks early in the morning. Central Park and Brooklyn Botanic Garden are busiest from late morning, and weekday visits are far calmer than weekends.",
        "Keep a wet-weather plan: April and May both average around 11 wet days, and a museum afternoon is a better response than a cancelled day.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Pack for two seasons",
          text: "March still needs a winter coat, May often needs only a light jacket, and April can be either. Layers, a compact umbrella and comfortable shoes cover the whole season.",
        },
        {
          icon: "☂",
          title: "Blossom is not a booking guarantee",
          text: "Do not book flights around a specific peak date. Go in the window, check the trackers in the final fortnight, and accept that a cold snap can move everything by a week.",
        },
        {
          icon: "◷",
          title: "Check Easter hours",
          text: "Some restaurants and attractions close or run shorter hours over Easter weekend. If a particular meal or museum matters, confirm directly before building a day around it.",
        },
      ],
      localTitle: "How locals do spring",
      localTips: [
        {
          title: "Go early on a weekday",
          text: "The first warm Saturday brings half the city to Central Park. Locals who care about seeing the blossom go on a weekday morning, often before work, and are gone by the time the crowds arrive.",
        },
        {
          title: "Brooklyn for cherries",
          text: "Brooklyn Botanic Garden is the local answer to cherry season, with a denser collection than Central Park and a festival atmosphere when the trees peak. Prospect Park next door is the calmer picnic option.",
        },
        {
          title: "May is the real prize",
          text: "Ask New Yorkers their favourite month and May comes up again and again: warm without humidity, long evenings, outdoor tables and the park at its greenest. If you can choose, choose May.",
        },
      ],
      localImage: "brooklyn-bridge-park.webp",
      localImageAlt: "The Brooklyn Bridge tower seen from Brooklyn Bridge Park",
      relatedTitle: "More seasonal guides",
      relatedLead: "Spring runs into the best summer evenings and the long autumn walking season.",
      related: [
        {
          href: "summer-in-nyc.html",
          image: "brooklyn-bridge-sunset.webp",
          alt: "The Brooklyn Bridge silhouetted against a sunset",
          kicker: "June–August",
          title: "Summer in NYC",
          text: "Free concerts, the waterfront and how to plan around the heat.",
          meta: "Seasonal guide",
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
        {
          href: "central-park.html",
          image: "central-park-nyc.webp",
          alt: "Bethesda Fountain and its terrace in Central Park",
          kicker: "Attraction",
          title: "Central Park guide",
          text: "Bethesda Terrace, the Ramble, Cherry Hill and the best walking routes.",
          meta: "Park guide",
        },
      ],
      faqTitle: "Spring questions",
      faq: [
        {
          q: "When do cherry blossoms bloom in New York?",
          a: "<p>Typically early to mid-April, though the peak moves with the weather and can fall anywhere from late March to late April. Central Park and Brooklyn Botanic Garden publish bloom updates, so check those in the two weeks before you travel.</p>",
        },
        {
          q: "Is spring a good time to visit New York?",
          a: "<p>Yes — mid-April to mid-June is one of the two best windows of the year, with mild days, blossom in the parks and comfortable walking weather. March is still cold and changeable, and Easter weeks are busy.</p>",
        },
        {
          q: "What is the NYC Half?",
          a: "<p>A half marathon run through Manhattan and Brooklyn, usually in March. It closes streets for part of the morning. The exact date is confirmed by the organiser each year, so check the official race site before planning around it.</p>",
        },
        {
          q: "What is the weather like in spring?",
          a: "<p>March averages 50°F (10°C) by day and 36°F (2°C) at night, April 63°F (17°C) and 45°F (7°C), and May 72°F (22°C) and 54°F (12°C). Expect roughly 11 wet days a month and bring layers.</p>",
        },
        {
          q: "When is Easter in New York?",
          a: "<p>Easter moves each year, falling in late March or April. The surrounding school holidays fill hotels and attractions, so book early if your trip coincides and confirm opening hours over the Easter weekend.</p>",
        },
      ],
      source: "spring",
      prev: { href: "fall-in-nyc.html", label: "Fall in New York" },
      next: { href: "whats-on.html", label: "What's on in New York" },
    }),
};
