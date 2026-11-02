import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "us-open-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "US Open in NYC — Flushing Meadows Guide",
  description:
    "The US Open in New York: dates, how a day at Flushing Meadows works, day versus night sessions, getting there on the 7 train and where to eat in Queens afterwards.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/queens-astoria.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "US Open in NYC — Flushing Meadows Guide",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "US Open" },
      ],
      heroImage: "queens-astoria.webp",
      heroAlt: "The Manhattan skyline seen across the water from Astoria, Queens",
      eyebrowText: "Seasonal guide · US Open",
      h1: "The US Open in New York",
      lead: "For two weeks at the end of August, the tennis world moves to Flushing Meadows in Queens. It is one of the easiest major events to attend in New York — a single subway line, a walkable site and a range of tickets — provided you understand the difference between a grounds pass and a stadium seat.",
      heroMeta: [
        "30 August–13 September 2026",
        "Flushing Meadows, Queens",
        "Two weeks",
        "2027 dates TBA",
      ],
      facts: [
        { label: "When", value: "30 August–13 September 2026; 2027 dates TBA" },
        { label: "Where", value: "Flushing Meadows–Corona Park, Queens" },
        { label: "Weather", value: "84°F / 68°F in August; 77°F / 63°F in September" },
        { label: "Best for", value: "Tennis, night sessions and a Queens day out" },
        { label: "Crowds", value: "Busiest on the middle weekend and finals days" },
      ],
      introEyebrow: "The short version",
      introTitle: "A major event that is easy to reach",
      introParagraphs: [
        "The 2026 tournament runs from 30 August to 13 September at the USTA Billie Jean King National Tennis Center in Flushing Meadows–Corona Park. The 2027 dates are yet to be confirmed; the official schedule and ticket information are published at <a href=\"https://www.usopen.org/\" rel=\"nofollow noopener\" target=\"_blank\">usopen.org</a>. The week before the main draw, Fan Week and qualifying are largely free and much quieter — worth knowing if you are in the city in late August and want a taste of the site without a full ticket.",
        "Getting there is straightforward: the 7 train runs to Mets–Willets Point, which puts you at the gates. That also makes the US Open a natural pair with a Queens day: arrive early, watch tennis through the afternoon, then eat in Flushing or Astoria on the way back. The site is walkable and the grounds are pleasant, but the sun is strong and the days are long, so treat it like a summer outdoor event rather than a seated indoor one.",
      ],
      introImage: "subway-train.webp",
      introImageAlt: "A New York City subway train arriving at a platform",
      mapId: "flushing-meadows",
      introLead:
        "The US Open is a fortnight of tennis at Flushing Meadows, and it rewards a little planning: which session, which ticket, and how you will handle the heat.",
      highlightsTitle: "Three ways to watch",
      highlightsLead:
        "Your ticket decides your day. A ground pass and a stadium seat are different experiences at very different prices.",
      highlights: [
        {
          kicker: "01",
          title: "A grounds pass",
          text: "The most affordable way in. It gives you access to the outer courts, practice courts and the site itself, with big screens for the main matches. Best for a relaxed first visit rather than a specific match.",
        },
        {
          kicker: "02",
          title: "A stadium session",
          text: "Day sessions start in the late morning and night sessions in the evening, with separate tickets. Night sessions have the atmosphere and the marquee names; day sessions are longer and better value per hour of tennis.",
        },
        {
          kicker: "03",
          title: "Fan Week",
          text: "The week before the main draw is mostly free, with qualifying matches, practice sessions and a calmer site. If you are in New York in late August, it is the cheapest introduction to the tournament.",
        },
      ],
      planTitle: "Planning a day at Flushing Meadows",
      planLead:
        "Tickets go on sale months ahead and popular sessions sell out. Decide what you want to see before you book, then build the day around the heat.",
      planSteps: [
        "Choose a session type: grounds pass, day stadium session or night session. Check the official schedule for which players are likely to be on court — it is subject to change until the draw is made.",
        "Book through the official US Open site rather than resale sites, and check the ticket terms before you pay. Prices vary widely by session and by round.",
        "Take the 7 train to Mets–Willets Point. It is the simplest route and drops you at the site; allow extra time on the middle weekend and finals days.",
        "Arrive early enough to walk the grounds and see the outer courts before the session starts. The site is large, and the practice courts are often the best value of the day.",
        "Plan for heat: a hat, sunscreen, a refillable bottle and a break in the shade. Late August in Queens is hot, and the courts offer little cover.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Check the bag policy",
          text: "The US Open has restrictions on what you can bring into the grounds, and the rules can change. Check the official site before you travel and keep bags small.",
        },
        {
          icon: "☂",
          title: "Rain happens",
          text: "Late summer brings afternoon storms, and play can be suspended. On a wet day, the outer courts and Fan Week events are a better bet than a single stadium ticket.",
        },
        {
          icon: "◷",
          title: "Buy official",
          text: "Buy from the official US Open channels only. Resale prices spike for finals weekend, and unofficial sellers are the most common way visitors overpay.",
        },
      ],
      localTitle: "How New Yorkers do the Open",
      localTips: [
        {
          title: "Go in week one",
          text: "The first days are quieter, tickets are cheaper and the outer courts are full of matches. If you want to see a big name, check the order of play rather than assuming; early rounds scatter the stars across the site.",
        },
        {
          title: "Make it a Queens day",
          text: "Locals pair the tennis with food: Flushing for Chinese, Astoria for Greek, Jackson Heights for South Asian. Take the 7 train, eat after the session and travel home against the crowd.",
        },
        {
          title: "Take Fan Week seriously",
          text: "The free qualifying week is the best-value tennis in the city. If you are around in late August, spend an afternoon there before the main draw begins and decide whether you want to come back for a paid session.",
        },
      ],
      localImage: "manhattan-skyline.webp",
      localImageAlt: "Lower Manhattan and the Brooklyn Bridge seen across the East River",
      relatedTitle: "Around the tournament",
      relatedLead: "Queens deserves a day of its own, and the calendar covers the rest of the year.",
      related: [
        {
          href: "queens.html",
          image: "queens-astoria.webp",
          alt: "The Manhattan skyline seen across the water from Astoria, Queens",
          kicker: "Borough",
          title: "Queens guide",
          text: "Astoria, Long Island City, Flushing and Jackson Heights.",
          meta: "Borough guide",
        },
        {
          href: "summer-in-nyc.html",
          image: "brooklyn-bridge-sunset.webp",
          alt: "The Brooklyn Bridge silhouetted at sunset",
          kicker: "June–August",
          title: "Summer in NYC",
          text: "Free concerts, the waterfront and how to handle the heat.",
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
      ],
      faqTitle: "US Open questions",
      faq: [
        {
          q: "When is the US Open in 2026?",
          a: "<p>The 2026 US Open runs from 30 August to 13 September at Flushing Meadows–Corona Park in Queens. The 2027 dates are TBA; check the official site for the confirmed schedule.</p>",
        },
        {
          q: "How do I get to Flushing Meadows?",
          a: "<p>Take the 7 train to Mets–Willets Point, which is at the tournament site. Allow extra time on the middle weekend and for finals, when trains and walkways are busiest.</p>",
        },
        {
          q: "Are cheap tickets available?",
          a: "<p>A grounds pass is the most affordable way in and gives access to the outer courts. The week before the main draw, Fan Week and qualifying are largely free. Stadium sessions cost more, and prices vary by round and session.</p>",
        },
        {
          q: "What is the difference between day and night sessions?",
          a: "<p>They are separate tickets. Day sessions start in the late morning and run through the afternoon; night sessions start in the evening and usually feature marquee matches. Night sessions have more atmosphere; day sessions give you more tennis for the ticket.</p>",
        },
        {
          q: "Can I bring food and drink?",
          a: "<p>The site has food and drink options, and the bag rules restrict what you can bring in. Check the official site's policy before you travel, especially if you are planning a long day in the heat.</p>",
        },
      ],
      source: "us-open",
      prev: { href: "summer-in-nyc.html", label: "Summer in NYC" },
      next: { href: "whats-on.html", label: "What's on in New York" },
    }),
};
