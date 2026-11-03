import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "halloween-in-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Halloween in NYC — Parade and Night Guide",
  description:
    "Halloween in New York: the Village Halloween Parade, where to watch, what to book, and how to plan a night out around 31 October and the marathon weekend.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/soho-street-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Halloween in NYC — Parade and Night Guide",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-03",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "Halloween" },
      ],
      heroImage: "soho-street-night.webp",
      heroAlt: "A cobblestone SoHo street at night with lit shop fronts and a few passers-by",
      eyebrowText: "Seasonal guide · Halloween",
      h1: "Halloween in New York",
      lead: "Halloween is the one night New York takes dressing up seriously. The Village Halloween Parade is the centrepiece — a free evening procession through Greenwich Village — and the rest of the city spends the weekend in costume, in bars and at parties that sell out well ahead.",
      heroMeta: ["31 October", "Village parade in the evening", "64°F / 52°F average", "Free to watch"],
      facts: [
        { label: "When", value: "31 October, evening" },
        { label: "Weather", value: "64°F / 52°F average; 9.5 wet days" },
        { label: "Where", value: "Greenwich Village, Sixth Avenue" },
        { label: "Best for", value: "Costumes, parades and a big night out" },
        { label: "Crowds", value: "Heavy in the Village from late afternoon" },
      ],
      introEyebrow: "The short version",
      introTitle: "One night, one parade, a whole city in costume",
      introLead:
        "The Village Halloween Parade is the reason to be in New York on 31 October: a free, open-air procession with thousands of costumed participants and tens of thousands of spectators. Plan the evening around it and the rest of the month is a good time to be in the city anyway.",
      introParagraphs: [
        "The parade runs through Greenwich Village in the evening, with the route and line-up published by the organisers at <a href=\"https://halloween-nyc.com/\" rel=\"nofollow noopener\" target=\"_blank\">halloween-nyc.com</a>. Watching is free and requires no ticket, which is exactly why the streets around Sixth Avenue fill early: arrive in the late afternoon if you want a view, and expect security screening and one-way crowd flow. Costumed participants are the point of the event, so if you are marching rather than watching, check the organisers' assembly rules before the night.",
        "Weather decides how the evening feels. October averages 64°F (18°C) by day and 52°F (11°C) at night, with 9.5 wet days across the month, so a costume built for a warm room will need a coat or layers over it. Book bars, restaurants and ticketed parties well ahead — venues sell out for the night closest to 31 October. The New York City Marathon follows on the first Sunday of November, which in 2026 is the next morning, so Sunday streets in all five boroughs close for much of the day.",
      ],
      introImage: "fifth-avenue-cab.webp",
      introImageAlt: "A yellow taxi on Fifth Avenue at dusk",
      mapId: "greenwich-village",
      highlightsTitle: "Three ways to spend the night",
      highlightsLead:
        "The parade is the anchor. How you build the evening around it — watching, marching or avoiding the crush — determines how good the night is.",
      highlights: [
        {
          kicker: "01",
          title: "Watch the parade",
          text: "Free, unticketed and genuinely strange: giant puppets, marching bands and thousands of costumes moving up Sixth Avenue. Arrive late afternoon, stand away from the busiest corners and expect security screening.",
        },
        {
          kicker: "02",
          title: "Join the procession",
          text: "Costumed participants can march, subject to the organisers' rules. Check the official site for the line-up location and timing rather than guessing, and keep the costume practical for a long, slow walk.",
        },
        {
          kicker: "03",
          title: "Make it a bar and party night",
          text: "New York treats Halloween as a going-out night. Bars in the Village, the East Village, Williamsburg and Bushwick run costume parties, most with entry charges or minimum spends. Book or buy tickets ahead for anything with a name.",
        },
      ],
      planTitle: "Planning the night",
      planLead:
        "Decide whether you are watching, marching or partying, then work backwards. The one thing you cannot improvise is a place to be at 9pm in the Village.",
      planSteps: [
        "Choose your plan: parade spectator, costumed marcher or a booked party somewhere nearby. Each has different arrival times and different exit routes.",
        "Book any ticketed party, table or dinner reservation well ahead. Halloween weekend is one of the busiest going-out weekends of the year.",
        "Arrive in Greenwich Village in the late afternoon if you want a parade view. The subway is the only sensible way in; street closures make taxis slow and drop-offs awkward.",
        "Build the costume around the weather. October evenings average 52°F, so plan for a coat, layers and shoes you can stand and walk in for several hours.",
        "Plan the way home before midnight, and check the marathon route if you are staying into Sunday. The first Sunday of November closes streets across the city for most of the day.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Dress for the cold, not the photos",
          text: "A costume that works indoors will not survive an hour on a Village street in late October. Layers, a coat you can carry and comfortable shoes matter more than the detail.",
        },
        {
          icon: "☂",
          title: "Watch your pockets",
          text: "Crowded parade routes and packed bars are where pickpockets work. Keep your phone and wallet out of back pockets, carry a bag you can close, and do not leave drinks unattended.",
        },
        {
          icon: "◷",
          title: "Book before you go out",
          text: "The free parade needs no booking, but everything around it does. Restaurants, bars with events and ticketed parties fill up in the weeks before 31 October.",
        },
      ],
      localTitle: "How locals do Halloween",
      localTips: [
        {
          title: "Watch from the edges",
          text: "New Yorkers who go to the parade tend to watch from side streets and the edges of the route rather than the packed central corners. You see less of the procession, but you can move, and leaving is easier.",
        },
        {
          title: "The party is citywide",
          text: "The Village is the centre, but Halloween in Brooklyn and Queens is just as busy and often more fun: bar crawls, house parties and neighbourhood costume contests. If you want a seat and a drink, look beyond Manhattan.",
        },
        {
          title: "The marathon changes Sunday",
          text: "The first Sunday of November is the New York City Marathon, and it closes streets in all five boroughs for much of the day. If you are staying through the weekend, plan Sunday around the race rather than against it.",
        },
      ],
      localImage: "manhattan-skyline-night.webp",
      localImageAlt: "Lower Manhattan's towers lit at night across the East River",
      relatedTitle: "Keep the season going",
      relatedLead: "Halloween opens the run into Thanksgiving and Christmas, and autumn is the best walking season of the year.",
      related: [
        {
          href: "fall-in-nyc.html",
          image: "central-park-bow-bridge.webp",
          alt: "Bow Bridge in Central Park surrounded by autumn colour",
          kicker: "September–November",
          title: "Fall in New York",
          text: "Foliage, the marathon and the best walking weather of the year.",
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
          href: "when-to-visit.html",
          image: "manhattan-skyline.webp",
          alt: "Lower Manhattan and the Brooklyn Bridge across the East River",
          kicker: "Planning",
          title: "When to visit New York",
          text: "Weather by month, holiday trade-offs and what to pack.",
          meta: "Weather guide",
        },
      ],
      faqTitle: "Halloween questions",
      faq: [
        {
          q: "Is the Village Halloween Parade free?",
          a: "<p>Yes. Watching the parade is free and unticketed. Costumed participants can join subject to the organisers' rules, which are published on the official site each year.</p>",
        },
        {
          q: "When is Halloween in New York?",
          a: "<p>Halloween is 31 October every year, and the Village Halloween Parade is held that evening. The 2027 parade details — route, start time and line-up rules — are confirmed closer to the date, so check the official site.</p>",
        },
        {
          q: "Do I need tickets for Halloween events?",
          a: "<p>Not for the street parade. Bars, clubs and ticketed parties charge entry, and the popular ones sell out in advance. Book anything with a name before you travel.</p>",
        },
        {
          q: "What is the weather like on Halloween?",
          a: "<p>October averages 64°F (18°C) by day and 52°F (11°C) at night, with around 9.5 wet days across the month. Evenings are cool and can be damp, so plan layers and a coat over the costume.</p>",
        },
        {
          q: "What else happens on Halloween weekend?",
          a: "<p>The New York City Marathon is run on the first Sunday of November, closing streets in all five boroughs for much of the day. In 2026 that is the morning after Halloween, so plan Sunday around the race.</p>",
        },
      ],
      source: "halloween",
      prev: { href: "whats-on.html", label: "What's on in New York" },
      next: { href: "fall-in-nyc.html", label: "Fall in New York" },
    }),
};
