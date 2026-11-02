import { renderDayTripPage } from "../day-trip-template.mjs";

export default {
  path: "niagara-falls.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Niagara Falls from New York — Overnight Guide",
  description:
    "Niagara Falls from New York: the once-daily Maple Leaf train, flying to Buffalo, how many nights to stay, Maid of the Mist and the Canadian side.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/niagara-falls.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Niagara Falls from New York — An Overnight Guide",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can you visit Niagara Falls as a day trip from New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Maple Leaf train takes about nine hours each way and runs once a day, so Niagara Falls needs at least one night and is better with two.",
          },
        },
        {
          "@type": "Question",
          name: "Do you need a passport to visit Niagara Falls?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You do not need a passport for the American side of the falls. You do need one, and current entry clearance, to cross to the Canadian side, including Niagara-on-the-Lake.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to visit Niagara Falls?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Summer and early autumn. Maid of the Mist operates from April to November, and the boat and the cave walkways have seasonal opening dates, so check before planning a winter visit.",
          },
        },
      ],
    },
  ],
  render: () =>
    renderDayTripPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "day-trips.html", label: "Day Trips" },
        { href: "niagara-falls.html", label: "Niagara Falls" },
      ],
      heroImage: "niagara-falls.webp",
      heroAlt: "The American Falls and Horseshoe Falls at Niagara, with a tour boat on the river below",
      eyebrowText: "Overnight · New York State",
      h1: "Niagara Falls from New York",
      lead: "The one trip on this list that cannot be done in a day. Nine hours by train, once daily, or a flight and a drive — and two nights at the falls to make the journey worthwhile.",
      heroMeta: ["Amtrak about 9 h", "Overnight required", "1–2 nights", "Best summer–autumn"],
      facts: [
        { label: "Journey time", value: "About 9 h by train; 1 h 30 flying plus a 40-minute drive" },
        { label: "Round trip", value: "$140–$300 by train; bus tours about $150–$200" },
        { label: "Time needed", value: "One to two nights" },
        { label: "Best season", value: "Summer and early autumn" },
        { label: "Day-trip verdict", value: "No — overnight required" },
      ],
      introEyebrow: "The honest answer",
      introTitle: "This is not a day trip",
      introLead:
        "Niagara Falls is about nine hours from New York by train, and the train runs once a day. That single fact decides the whole trip: you go for a night or two, or you go by organised bus tour and spend a very long day on the road.",
      introParagraphs: [
        "The Maple Leaf is a slow, scenic ride up the Hudson Valley and across upstate New York, and it leaves once daily. Flying to Buffalo takes about an hour and a half plus a 40-minute drive, but adds two airports and a car at the other end.",
        "Once there, the falls are the attraction. The American side puts you at Prospect Point and the state park; the Canadian side has the classic wide view and the town of Niagara-on-the-Lake, and both are worth half a day. Two nights works best: one to travel and see the falls at dusk, one full day for the boat and the cave walkways, and a final morning for the Canadian side before the train back.",
      ],
      callouts: [
        {
          icon: "◆",
          title: "Bring your passport",
          text: "The falls straddle the border. The American side needs no passport, but crossing to Canada — and to Niagara-on-the-Lake — does. Check current entry requirements.",
        },
        {
          icon: "◷",
          title: "Book the once-daily train early",
          text: "With one departure a day, the Maple Leaf sells out and the cheapest fares disappear first. Decide your dates, then book the train first.",
        },
      ],
      transportTitle: "Getting there: train, plane or bus tour",
      transportLead:
        "The train is simplest and slowest; flying is faster but adds transfers. The bus tour is the only way to see the falls without staying a night.",
      transportCaption: "New York to Niagara Falls transport options, fares checked November 2026",
      transportRows: [
        [
          "<strong>Amtrak Maple Leaf</strong>",
          "about 9 h, once daily",
          "$140–$300",
          "Direct from Penn Station, once a day. Long but scenic along the Hudson and through upstate New York; the cheapest fares go first.",
        ],
        [
          "<strong>Flight to Buffalo + drive</strong>",
          "1 h 30 plus a 40-minute drive",
          "check current fares",
          "Much faster in the air, but add airport time at both ends plus a car or transfer from Buffalo. Check current fares and schedules before booking.",
        ],
        [
          "<strong>Organised bus tour</strong>",
          "07:00–midnight",
          "about $150–$200",
          "A single very long day from Manhattan, usually with the falls and some free time included. Check what the tour covers before you compare it with a night in a hotel.",
        ],
      ],
      transportNote:
        "Journey times and fares are approximate and were checked in November 2026. The Maple Leaf runs once daily and Amtrak pricing is dynamic — check current fares and schedules before booking.",
      highlightsTitle: "What the trip is really about",
      highlightsLead:
        "The falls are the reason for the journey. Everything else on this list is what to do with the rest of the day.",
      highlights: [
        {
          kicker: "The falls",
          title: "Niagara Falls State Park and Prospect Point",
          text: "The American side's state park puts you at the edge of the American Falls, close enough to feel the spray. Go early or near dusk.",
        },
        {
          kicker: "The boat",
          title: "Maid of the Mist",
          text: "The boat that takes you to the base of the falls, April to November. You will get wet; that is the point. Book a morning departure.",
        },
        {
          kicker: "Below the falls",
          title: "Cave of the Winds",
          text: "Wooden walkways and decks at the foot of Bridal Veil Falls, with the Hurricane Deck close enough to be genuinely bracing. Seasonal, like the boat.",
        },
        {
          kicker: "Canada",
          title: "Niagara-on-the-Lake",
          text: "A handsome lakeside town of shops, restaurants and theatres about half an hour from the falls. The calm counterpoint to the spray — passport required.",
        },
        {
          kicker: "The view",
          title: "The Canadian side at Table Rock",
          text: "The classic Horseshoe Falls photograph, looking back along the curve of the falls. Worth crossing for.",
        },
      ],
      dayTitle: "A realistic Niagara overnight",
      dayLead:
        "Two nights, one full day at the falls. Times are indicative — check the once-daily train schedule before you commit.",
      dayStops: [
        {
          time: "Day 1, morning",
          title: "The Maple Leaf from Penn Station",
          text: "The daily train north, up the Hudson and across upstate New York. Bring food and something to read.",
        },
        {
          time: "Day 1, late afternoon",
          title: "Arrive and check in",
          text: "Stay within walking distance of the falls if you can. Drop the bags and go straight out.",
        },
        {
          time: "Day 1, dusk",
          title: "First view from Prospect Point",
          text: "Walk to the edge of the American Falls as the light goes. It is the best possible introduction and costs nothing beyond the walk.",
        },
        {
          time: "Day 2, morning",
          title: "Maid of the Mist",
          text: "First or second departure, before the coach groups arrive. Ponchos are provided and largely symbolic.",
        },
        {
          time: "Day 2, midday",
          title: "Cave of the Winds",
          text: "The walkways below Bridal Veil Falls. Allow an hour, and expect to be soaked in a way that photographs cannot convey.",
        },
        {
          time: "Day 2, afternoon",
          title: "The Canadian side or Niagara-on-the-Lake",
          text: "Cross for the classic view at Table Rock and dinner in Niagara-on-the-Lake, then take a morning train home the next day.",
        },
      ],
      tips: [
        {
          icon: "◆",
          title: "Decide on the train first",
          text: "Because there is one departure a day, the train decides the dates. Book it early, then build the rest around it.",
        },
        {
          icon: "◷",
          title: "Two nights, not one",
          text: "One night is an evening and a morning; two gives you a full day for the boat, the walkways and the Canadian side.",
        },
        {
          icon: "☂",
          title: "Check the season before you book",
          text: "Maid of the Mist runs from April to November, and the cave walkways are seasonal too. Check current opening dates before committing to a winter visit.",
        },
      ],
      otherTitle: "Other trips",
      otherLead: "If nine hours on a train is too much, these are the trips that fit a shorter journey.",
      otherTrips: [
        {
          href: "boston.html",
          kicker: "Overnight",
          title: "Boston",
          text: "The Freedom Trail, Beacon Hill and the North End, four hours up the Northeast Corridor.",
        },
        {
          href: "philadelphia.html",
          kicker: "Day trip",
          title: "Philadelphia",
          text: "Independence Hall, the Liberty Bell and Reading Terminal Market in a single easy day.",
        },
        {
          href: "hudson-valley.html",
          kicker: "Day trip",
          title: "Hudson Valley",
          text: "Dia Beacon, Storm King and the river villages, eighty minutes from Grand Central.",
        },
      ],
      source: "niagara-falls",
      faq: [
        {
          q: "Can you visit Niagara Falls as a day trip from New York?",
          a: "<p>No. The train takes about nine hours each way and runs once a day. The organised bus tours do it in one long day, but you will spend most of it travelling.</p>",
        },
        {
          q: "Should I take the train or fly to Niagara Falls?",
          a: "<p>Fly if time matters: about an hour and a half to Buffalo plus a 40-minute drive. Take the train if you want the journey to be part of the trip. Check current fares and schedules for both.</p>",
        },
        {
          q: "Do I need a passport to see Niagara Falls?",
          a: "<p>Not for the American side. You do need one to cross into Canada, including to Niagara-on-the-Lake; check current entry requirements before travelling.</p>",
        },
        {
          q: "When is the best time to go to Niagara Falls?",
          a: "<p>Summer and early autumn. Maid of the Mist operates from April to November, and the cave walkways are seasonal too; check opening times before booking.</p>",
        },
      ],
      prev: { href: "boston.html", label: "Boston" },
      next: { href: "hudson-valley.html", label: "Hudson Valley" },
    }),
};
