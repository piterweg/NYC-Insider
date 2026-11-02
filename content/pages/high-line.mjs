import { renderAttractionPage } from "../attraction-template.mjs";

const faq = [
  {
    q: "Is the High Line free?",
    a: "<p>Yes. The High Line is a public park and needs no ticket. It is open every day, with shorter hours from December to March.</p>",
  },
  {
    q: "What are the opening hours?",
    a: "<p>From 1 April to 30 November the park is open 7am–10pm. From 1 December to 31 March it is open 7am–8pm. Check the official site for current hours before an early or late visit.</p>",
  },
  {
    q: "How long does the High Line take?",
    a: "<p>An hour to an hour and a half to walk the whole route, which is about 2.3 kilometres end to end. If you only have half an hour, join at 23rd Street and walk north.</p>",
  },
  {
    q: "Where should I start the walk?",
    a: "<p>Start at Gansevoort Street for the full route, or at 23rd Street for the quiet middle section. Either way, finish at Hudson Yards for the 7 train and the food hall.</p>",
  },
  {
    q: "Can I bring a bike or a dog?",
    a: "<p>No. Bikes, scooters, dogs (other than service dogs) and smoking are not allowed on the park. The path is narrow with planting either side, so it is not a cycling route.</p>",
  },
];

export default {
  path: "high-line.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "The High Line: Hours, Entrances and Route",
  description:
    "A practical guide to the High Line: opening hours by season, the best entrances, how long the walk takes and when to have it almost to yourself.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/high-line.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "The High Line",
      description:
        "Elevated public park on a former freight railway in Chelsea, Manhattan, running from Gansevoort Street to Hudson Yards.",
      url: "https://nyctrove.com/high-line.html",
      image: "https://nyctrove.com/assets/img/high-line.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gansevoort Street to 34th Street",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10011",
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
      heroImage: "high-line.webp",
      heroAlt: "The High Line elevated park in Chelsea, with planting and city buildings",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "high-line.html", label: "The High Line" },
      ],
      eyebrowText: "Attraction · Chelsea",
      h1: "The High Line, walked south to north",
      lead: "The High Line turns a disused freight railway into a 2.3-kilometre park above Chelsea. It is free, it is short, and the difference between a good visit and a shuffling one is mostly timing and direction.",
      heroMeta: ["Chelsea", "Free", "1–1.5 hours", "Open daily"],
      facts: [
        { label: "Entry", value: "Free; no ticket needed" },
        { label: "Summer hours", value: "7am–10pm, 1 April–30 November" },
        { label: "Winter hours", value: "7am–8pm, 1 December–31 March" },
        { label: "Time needed", value: "1–1.5 hours end to end" },
        { label: "Best time", value: "Weekday before 11am" },
        { label: "Nearest subway", value: "14 St/8 Av (A/C/E/L); 34 St–Hudson Yards (7)" },
      ],
      mapId: "high-line",
      introImage: "skyline-window-view.webp",
      introImageAlt: "The Manhattan skyline seen through a tall window, from the High Line's neighbourhood",
      introEyebrow: "Elevated park",
      introTitle: "A garden on a railway",
      introLead:
        "The park follows the old West Side freight line from Gansevoort Street to Hudson Yards, with the planting, benches and views doing most of the work. It is at its best when you treat it as a walk rather than a sight.",
      introParagraphs: [
        "Walk south to north: start at Gansevoort Street in the Meatpacking District and finish at Hudson Yards, where the 7 train and a food hall wait. The stretch between 23rd and 30th Streets is the calmest, with the planting at its most interesting and fewer people stopping for photographs.",
        "Entrances are frequent but not obvious at street level: Gansevoort Street, 14th, 16th, 23rd, 30th and 31st via the Moynihan Connector. Lifts serve four points, though they break often, so check the status if you need step-free access.",
      ],
      reasonsEyebrow: "Why go",
      reasonsTitle: "Three reasons to put it on a morning, not an afternoon",
      reasonsLead: "The planting, the price and the two neighbourhoods it joins together.",
      reasons: [
        {
          title: "The planting is the attraction",
          text: "The design changes through the seasons, and the gardens are more interesting than the views for much of the walk. Slow down and read the labels as you pass.",
        },
        {
          title: "Free, and easy to fit in",
          text: "No booking and no queue at most hours. An hour on the High Line fits between a Chelsea Market lunch and an afternoon in Greenwich Village.",
        },
        {
          title: "It connects two good neighbourhoods",
          text: "Start in the Meatpacking District and finish at Hudson Yards, or reverse it. Either way the walk joins two places you probably wanted to see anyway.",
        },
      ],
      bookingTitle: "How to walk the High Line",
      bookingLead:
        "There is no ticket and usually no queue. What matters is the entrance you choose, the direction you walk and the season you visit.",
      bookingSteps: [
        "Check the seasonal hours on the official site before you go: 7am–10pm from April to November, and 7am–8pm from December to March.",
        "Start at Gansevoort Street if you want the full walk, or join at 23rd Street if you only have an hour.",
        "Walk south to north and finish at Hudson Yards, where the 7 train and the food hall are right there.",
        "If you need step-free access, check the lift status on the official site that morning. The lifts do break, and not every entrance has one.",
        "Leave bikes, scooters and dogs at home. Only service dogs are allowed, and the path is narrow when it is busy.",
      ],
      bookingNote:
        "The High Line is free and needs no reservation. The only real constraint is the hours, which shorten from December to March.",
      official: {
        title: "A free park above the streets",
        text: "The High Line is free to enter and open every day, with seasonal hours. The official site lists the entrances, the lift status and what is currently happening on the park.",
        url: "https://www.thehighline.org/visit/",
        cta: "Check hours and entrances",
        note: "Official park site. No ticket is needed; hours change by season.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Go before 11 on a weekday",
          text: "Weekday mornings are the quietest. Weekends after 11am are a slow-moving line of people, especially between 14th and 23rd Streets.",
        },
        {
          title: "Walk south to north",
          text: "Finishing at Hudson Yards puts you at the 7 train and a food hall, which is a better end point than a start.",
        },
        {
          title: "The lifts are the weak point",
          text: "They break often enough that the park posts live status. If one is out, the nearest step-free alternative may be a block or two away, so check before you rely on it.",
        },
        {
          title: "Treat 23rd to 30th as the calm part",
          text: "The middle section is quieter and the planting is at its best. If you only have half an hour, enter at 23rd Street and walk north.",
        },
      ],
      tipsImage: "edge-hudson-yards.webp",
      tipsImageAlt: "The Edge observation deck at Hudson Yards, at the High Line's northern end",
      nearby: [
        {
          href: "edge.html",
          image: "edge-hudson-yards.webp",
          alt: "The Edge observation deck at Hudson Yards",
          kicker: "At the north end",
          title: "Edge at Hudson Yards",
          text: "The sky deck at the end of the walk. Book a slot for after your High Line morning.",
          meta: "Observation deck",
        },
        {
          href: "food.html",
          image: "nyc-pizza-slice.webp",
          alt: "A slice of New York pizza",
          kicker: "Lunch",
          title: "Where to eat in Chelsea",
          text: "Chelsea Market and the taquerias nearby make the obvious lunch stop after the walk.",
          meta: "Food guide",
        },
        {
          href: "manhattan.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Neighbourhood",
          title: "Chelsea and the West Side",
          text: "How the High Line fits into a Manhattan day, and what to see nearby.",
          meta: "Borough guide",
        },
      ],
      source: "high-line",
      faq,
      prev: { href: "grand-central.html", label: "Grand Central" },
      next: { href: "brooklyn-bridge.html", label: "Brooklyn Bridge walk" },
    }),
};
