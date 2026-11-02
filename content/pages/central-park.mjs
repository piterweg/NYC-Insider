import { renderAttractionPage } from "../attraction-template.mjs";

const faq = [
  {
    q: "Is Central Park free?",
    a: "<p>Yes. The park itself is free and needs no ticket. The zoo, Wollman Rink, the carousel, the rowboats and bike rentals inside the park are separately ticketed.</p>",
  },
  {
    q: "What time does Central Park open?",
    a: "<p>The park is open from 6am to 1am daily, and entry is free. Check the official site for current hours and any seasonal changes before an early-morning or late-evening walk.</p>",
  },
  {
    q: "Where should I enter the park?",
    a: "<p>Grand Army Plaza at Fifth Avenue and 59th Street is the classic entrance for the south end. Columbus Circle suits the west side, and 72nd Street puts you closest to the Mall and Bethesda Terrace.</p>",
  },
  {
    q: "What is there to pay for inside the park?",
    a: "<p>Central Park Zoo, Wollman Rink, Victorian Gardens, the carousel, rowboats at Loeb Boathouse and bike or boat rentals all charge separately. Concerts such as SummerStage are generally free, though some events need a reservation.</p>",
  },
  {
    q: "Is it safe at night?",
    a: "<p>The park is open until 1am, but north of 96th Street it is quieter and less lit. It is fine in daylight and better avoided alone after dark, as you would in any large city park.</p>",
  },
];

export default {
  path: "central-park.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Central Park: A Plan for 843 Free Acres",
  description:
    "How to enter Central Park, which corners are worth your time, what the ticketed extras cost and when to go to avoid the crowds.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/central-park-nyc.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Central Park",
      description:
        "843-acre public park in Manhattan, free to enter, with Bethesda Terrace, the Bow Bridge, the Mall, Sheep Meadow, the Ramble and the Reservoir.",
      url: "https://nyctrove.com/central-park.html",
      image: "https://nyctrove.com/assets/img/central-park-nyc.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Fifth Avenue and 59th Street",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10019",
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
      heroImage: "central-park-nyc.webp",
      heroAlt: "Central Park's lawns, trees and paths in New York City",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "central-park.html", label: "Central Park" },
      ],
      eyebrowText: "Attraction · Manhattan",
      h1: "Central Park, walked the right way",
      lead: "Central Park is free, 843 acres and the best thing in New York that costs nothing. It is also big enough to get wrong: the visitors who enjoy it most enter at the right corner and walk one section rather than trying to cross the whole park.",
      heroMeta: ["843 acres", "Free", "Open 6am–1am", "Every day"],
      facts: [
        { label: "Entry", value: "Free; the park is open to everyone" },
        { label: "Hours", value: "6am–1am daily; check the official site for current hours" },
        { label: "Time needed", value: "2 hours for the south end; a full day for the whole park" },
        { label: "Best time", value: "Weekday 8–11am" },
        { label: "Nearest subway", value: "59 St–Columbus Circle (A/B/C/D/1); 72 St (B/C)" },
        { label: "Ticketed extras", value: "Zoo, Wollman Rink, carousel, rowboats and bike rental" },
      ],
      mapId: "central-park",
      introImage: "central-park-bow-bridge.webp",
      introImageAlt: "Bow Bridge and the lake in Central Park",
      introEyebrow: "The park",
      introTitle: "A designed landscape, not leftover green space",
      introLead:
        "Central Park is entirely man-made and carefully planned, which is why it feels so calm in the middle of Manhattan. The south end holds the set pieces; the north end holds the quiet.",
      introParagraphs: [
        "For a first visit, start at Columbus Circle or Grand Army Plaza and walk north through the Mall to Bethesda Terrace and the Bow Bridge. That stretch takes an hour at an easy pace, includes the park's most photographed places, and finishes near the subway at 72nd Street.",
        "If you have more time, continue to the Ramble or the Reservoir running track. North of 96th Street the park is quieter and less lit, which is lovely in daylight and worth avoiding alone after dark. The Conservatory Garden at 105th Street is the calmest formal corner and rarely crowded.",
      ],
      reasonsEyebrow: "Why go",
      reasonsTitle: "Three reasons to give the park a proper morning",
      reasonsLead: "The set pieces, the price and the way the park changes with the season.",
      reasons: [
        {
          title: "The set pieces are genuinely good",
          text: "Bethesda Terrace, the Bow Bridge and the Mall are famous for a reason. See them early, before the wedding parties and the tour groups arrive with their photographers.",
        },
        {
          title: "It is free, and stays free",
          text: "No ticket, no booking, no queue. The ticketed extras inside the park, from the zoo to the rowboats, are optional and clearly priced at their own gates.",
        },
        {
          title: "The park changes by the season",
          text: "Fall foliage peaks between late October and mid-November. Spring and early autumn are the best walking weather; July and August are hot and humid.",
        },
      ],
      bookingTitle: "How to visit Central Park without booking",
      bookingLead:
        "There is nothing to book for the park itself. The only decisions are where to enter, how far to walk and whether you want any of the paid extras.",
      bookingSteps: [
        "Choose an entrance near what you want to see: Grand Army Plaza at 59th and Fifth for the south end, Columbus Circle for the west side, or 72nd Street for the Mall and Bethesda Terrace.",
        "Plan a one-way walk rather than a loop, and finish at a different subway station. The park is wide, and a loop usually means retracing the least interesting path.",
        "Check the opening hours on the official site before an early-morning or late-evening walk; the park is open from 6am to 1am.",
        "If you want the zoo, Wollman Rink, the carousel or a rowboat at Loeb Boathouse, check prices and hours in advance rather than at the gate.",
        "Take water and use the restrooms at Bethesda, the zoo and the Ramble area before you set off. They are spread out across the park.",
      ],
      bookingNote:
        "The park is free, but several attractions inside it are not. Budget for the extras only if you actually want them; the walk itself costs nothing.",
      official: {
        title: "Central Park is free — the extras are not",
        text: "Entry to the park costs nothing and needs no ticket. The Central Park Conservancy's official site explains the entrances, the opening hours and the separately ticketed attractions inside the park, from the zoo to the rowboats.",
        url: "https://www.centralparknyc.org/visit",
        cta: "Plan your visit",
        note: "Official park site. The park is free; ticketed extras are sold by their own operators.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Enter early, leave before lunch",
          text: "Weekday mornings between 8 and 11 are the calmest. By midday at a weekend, the south end is a crowd and the Bow Bridge is a queue.",
        },
        {
          title: "Walk north, not in circles",
          text: "A south-to-north walk through the Mall, Bethesda and the Ramble finishes at a different subway and shows you more than a loop back to the start.",
        },
        {
          title: "Avoid the north end after dark",
          text: "Above 96th Street the park is quieter and less lit. It is fine in daylight and better avoided alone at night, as in any city park.",
        },
        {
          title: "Fall colour has a short window",
          text: "Foliage peaks between late October and mid-November. If autumn colour is the reason for your trip, aim for that fortnight rather than a fixed date.",
        },
      ],
      tipsImage: "fifth-avenue-cab.webp",
      tipsImageAlt: "A yellow taxi on Fifth Avenue beside Central Park",
      nearby: [
        {
          href: "met-museum.html",
          image: "central-park-nyc.webp",
          alt: "Central Park's paths and trees beside Fifth Avenue",
          kicker: "East side",
          title: "The Met",
          text: "On the park's eastern edge at 82nd Street: combine a morning walk with an afternoon inside.",
          meta: "Museum",
        },
        {
          href: "amnh.html",
          image: "amnh-facade.webp",
          alt: "The American Museum of Natural History on Central Park West",
          kicker: "West side",
          title: "American Museum of Natural History",
          text: "At 79th Street on the west side, with the Rose Center facing the park.",
          meta: "Museum",
        },
        {
          href: "free-things-to-do-nyc.html",
          image: "staten-island-ferry.webp",
          alt: "The Staten Island Ferry with the Manhattan skyline behind it",
          kicker: "More free",
          title: "Free things to do in NYC",
          text: "The park is only the largest of the city's free attractions; here are eleven more.",
          meta: "Free guide",
        },
      ],
      source: "central-park",
      faq,
      prev: { href: "met-museum.html", label: "The Met" },
      next: { href: "moma.html", label: "MoMA" },
    }),
};
