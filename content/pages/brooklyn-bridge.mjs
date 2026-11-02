import { renderAttractionPage } from "../attraction-template.mjs";

const faq = [
  {
    q: "How long does the Brooklyn Bridge walk take?",
    a: "<p>Thirty to forty minutes each way at an easy pace, and about an hour and a half if you want photographs and a short detour into DUMBO. The full crossing is about 1.3 miles.</p>",
  },
  {
    q: "Which direction should I walk the bridge?",
    a: "<p>Manhattan to Brooklyn at sunrise gives the best light, and the view back at Lower Manhattan from the Brooklyn side is the reward. Brooklyn to Manhattan in the evening puts the skyline ahead of you the whole way.</p>",
  },
  {
    q: "Can you walk the Brooklyn Bridge at night?",
    a: "<p>The walkway is open around the clock, and a night crossing is one of the best times to see the cables and the skyline. Check the official site for current access and any maintenance closures before a late walk.</p>",
  },
  {
    q: "Is the Brooklyn Bridge free to walk?",
    a: "<p>Yes. There is no ticket and no charge for the pedestrian walkway. It is a public bridge and part of the commute for thousands of people each day.</p>",
  },
  {
    q: "Where do I start the walk?",
    a: "<p>In Manhattan, the approach is at Centre Street and Park Row near City Hall. In Brooklyn, start at Adams Street or Tillary Street near Cadman Plaza. Both ends are a short walk from a subway station.</p>",
  },
];

export default {
  path: "brooklyn-bridge.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Brooklyn Bridge Walk: Best Direction and Time",
  description:
    "How to walk the Brooklyn Bridge, which way round to do it, the best hour for light and the mistakes that spoil the view for everyone.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-park.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Brooklyn Bridge walkway",
      description:
        "Free pedestrian walkway across the Brooklyn Bridge between Lower Manhattan and Brooklyn, with views of the harbour and the Lower Manhattan skyline.",
      url: "https://nyctrove.com/brooklyn-bridge.html",
      image: "https://nyctrove.com/assets/img/brooklyn-bridge-park.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Centre Street and Park Row",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10038",
        addressCountry: "US",
      },
      isAccessibleForFree: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a.replace(/<[^>]+>/g, ""),
        },
      })),
    },
  ],
  render: () =>
    renderAttractionPage({
      heroImage: "brooklyn-bridge-park.webp",
      heroAlt: "A tower of the Brooklyn Bridge seen from Brooklyn Bridge Park in DUMBO",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "brooklyn-bridge.html", label: "Brooklyn Bridge" },
      ],
      eyebrowText: "Attraction · Lower Manhattan and Brooklyn",
      h1: "The Brooklyn Bridge, walked in the right direction",
      lead: "The Brooklyn Bridge walkway is free, open around the clock and the best value sight in New York. It is also narrow, shared with commuter cyclists and at its worst in the middle of a sunny afternoon.",
      heroMeta: ["1.3 miles", "Free", "30–40 minutes each way", "Best at sunrise"],
      facts: [
        { label: "Entry", value: "Free; open to walkers" },
        { label: "Hours", value: "Open around the clock; check the official site for current access" },
        { label: "Time needed", value: "30–40 minutes each way; 1.5 hours with photographs" },
        { label: "Best time", value: "Sunrise, or before 8am" },
        { label: "Nearest subway", value: "Brooklyn Bridge–City Hall (4/5/6); High St (A/C)" },
        { label: "Start points", value: "Centre St/Park Row in Manhattan; Adams St/Tillary St in Brooklyn" },
      ],
      mapId: "brooklyn-bridge",
      introImage: "brooklyn-bridge-sunset.webp",
      introImageAlt: "The Brooklyn Bridge at sunset",
      introEyebrow: "The crossing",
      introTitle: "An engineered landmark you can walk across",
      introLead:
        "The bridge is a working piece of infrastructure as well as a landmark: pedestrians, cyclists and traffic share it, and the walkway sits above the roadway. That is part of what makes the crossing feel like the city rather than a postcard.",
      introParagraphs: [
        "Walk from Manhattan to Brooklyn at sunrise or in the golden hour, then turn around and look back at Lower Manhattan from the Brooklyn side. That view is the payoff, and it is better from <a href=\"brooklyn.html\">Brooklyn Bridge Park</a> than from the bridge itself.",
        "Go before 8am to avoid the crush. The wooden planks are slippery when wet, the bike lane is actively enforced and no vendors are allowed on the walkway. Allow an hour and a half if you want photographs and a stop in DUMBO.",
      ],
      reasonsEyebrow: "Why go",
      reasonsTitle: "Three reasons to walk it rather than photograph it from the shore",
      reasonsLead: "The best free view in the city, a natural link between two halves of a day, and sunrise light.",
      reasons: [
        {
          title: "The best free view in the city",
          text: "The walk gives you the harbour, the Statue of Liberty in the distance and the Lower Manhattan skyline, all for nothing.",
        },
        {
          title: "It links two good halves of a day",
          text: "Start in Lower Manhattan, finish in DUMBO or Brooklyn Heights, and continue into Brooklyn Bridge Park or along the waterfront.",
        },
        {
          title: "Sunrise is worth the alarm",
          text: "At first light the walkway is nearly empty and the light on the stone towers is the reason photographers come. It is the calmest hour of the day.",
        },
      ],
      bookingTitle: "How to walk the bridge",
      bookingLead:
        "There is no ticket and no booking. The planning is about direction, timing and which side of the walkway you stand on.",
      bookingSteps: [
        "Choose your direction. Manhattan to Brooklyn at sunrise gives the light; Brooklyn to Manhattan in the evening puts the skyline ahead of you.",
        "Start from Centre Street and Park Row in Manhattan, or Adams Street and Tillary Street in Brooklyn. Both are a short walk from a subway station.",
        "Stay in the pedestrian lane and keep right. The bike lane is separated, actively enforced and dangerous to wander into.",
        "Walk to the Brooklyn side and continue into Brooklyn Bridge Park or DUMBO rather than turning straight around.",
        "Check access before you go. The walkway can be closed for maintenance or events, so check the official site for current access on the day.",
      ],
      bookingNote:
        "The bridge is free and open all hours in principle, but the walkway is narrow and the crowds peak from mid-morning to sunset. Early is always better.",
      official: {
        title: "A free walk, managed by the parks department",
        text: "There is no ticket for the Brooklyn Bridge walkway. The official NYC Parks page covers Brooklyn Bridge Park at the Brooklyn end, the waterfront and access information for the bridge area.",
        url: "https://www.nycgovparks.org/parks/brooklyn-bridge-park",
        cta: "Check park access",
        note: "Official NYC Parks site. The bridge walk is free; check for closures before a sunrise start.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Go before 8am",
          text: "The walkway is busiest from mid-morning. Before 8am it is quiet enough to stop and look without blocking anyone behind you.",
        },
        {
          title: "Mind the bike lane",
          text: "The bike lane is not decorative. Cyclists cross at speed and the lane is enforced, so stay on the pedestrian side even for a photograph.",
        },
        {
          title: "Do not stop in the middle",
          text: "The bridge is a thoroughfare. Step to the side for photographs; the views are just as good from the edges and you will not be in the way.",
        },
        {
          title: "Wet planks are slippery",
          text: "The wooden deck becomes slick in rain or frost. Wear shoes with grip and take the slopes at each end slowly.",
        },
      ],
      tipsImage: "manhattan-skyline.webp",
      tipsImageAlt: "Lower Manhattan and the Brooklyn Bridge seen from the Brooklyn side",
      nearby: [
        {
          href: "brooklyn.html",
          image: "brooklyn-bridge-skyline.webp",
          alt: "The Manhattan skyline and the Brooklyn Bridge at dusk",
          kicker: "The other side",
          title: "Brooklyn",
          text: "DUMBO, Brooklyn Heights and the waterfront parks make the natural continuation.",
          meta: "Borough guide",
        },
        {
          href: "sunday-in-brooklyn.html",
          image: "brooklyn-bridge-sunset.webp",
          alt: "The Brooklyn Bridge at sunset",
          kicker: "Make a day",
          title: "A Sunday in Brooklyn",
          text: "A full day from Brooklyn Heights to Prospect Park, starting with the bridge.",
          meta: "Itinerary",
        },
        {
          href: "free-things-to-do-nyc.html",
          image: "staten-island-ferry.webp",
          alt: "The Staten Island Ferry with the Manhattan skyline behind it",
          kicker: "More free",
          title: "Free things to do in NYC",
          text: "The bridge walk is one of a dozen free sights worth a morning.",
          meta: "Free guide",
        },
      ],
      source: "brooklyn-bridge",
      faq,
      prev: { href: "high-line.html", label: "The High Line" },
      next: { href: "attractions.html", label: "All attractions" },
    }),
};
