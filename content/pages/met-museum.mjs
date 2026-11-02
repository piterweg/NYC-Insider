import { renderAttractionPage } from "../attraction-template.mjs";

const faq = [
  {
    q: "How much does The Met cost?",
    a: "<p>Admission is from $30 for adults, $22 for seniors and $17 for students. New York State residents can pay what they wish with proof of address, and local students qualify on the same basis. Check the official site before you travel.</p>",
  },
  {
    q: "What day is The Met closed?",
    a: "<p>The Met is closed on Wednesdays. It also closes on public holidays, including Thanksgiving and 25 December. Check the official site for current hours and the full holiday closure list before you set out.</p>",
  },
  {
    q: "How long do I need for The Met?",
    a: "<p>Three to four hours is enough for a rewarding visit, as long as you pick two or three wings rather than trying to cover the building. The Cloisters takes another hour and a half to two hours on a separate visit.</p>",
  },
  {
    q: "Does one ticket cover the Cloisters?",
    a: "<p>Yes. One admission covers both The Met and the Cloisters for three days, including the day of your visit. They are in different neighbourhoods, so do not try to pair them on the same day.</p>",
  },
  {
    q: "When is the quietest time to visit?",
    a: "<p>Weekday mornings at opening are calm, and Friday or Saturday after 6pm is the best evening window because the museum stays open until 9pm. Weekends before lunch are the busiest.</p>",
  },
];

export default {
  path: "met-museum.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "The Met: Hours, Tickets and a Three-Hour Plan",
  description:
    "The Met's admission price, its Wednesday closure, the quietest hours and a realistic plan for seeing the best of it without exhausting yourself.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/met-museum.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "The Metropolitan Museum of Art",
      description:
        "Art museum on Fifth Avenue at 82nd Street in Manhattan, with collections spanning Egyptian, Greek and Roman, European, Asian and American art.",
      url: "https://nyctrove.com/met-museum.html",
      image: "https://nyctrove.com/assets/img/central-park-bow-bridge.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1000 Fifth Avenue",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10028",
        addressCountry: "US",
      },
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
      heroImage: "met-museum.webp",
      heroAlt: "The limestone facade of the Metropolitan Museum of Art on Fifth Avenue",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "met-museum.html", label: "The Met" },
      ],
      eyebrowText: "Attraction · Museum Mile",
      h1: "The Met, without trying to see everything",
      lead: "The Metropolitan Museum of Art is one of the great museums on earth, and that is precisely the problem: it is too large to finish. The visitors who enjoy it most arrive with a short list, use the late nights and accept that they will come back.",
      heroMeta: ["Fifth Avenue at 82nd Street", "3–4 hours", "From $30", "Closed Wednesdays"],
      facts: [
        { label: "Tickets", value: "From $30; NY State residents pay what they wish" },
        { label: "Hours", value: "Sun–Tue and Thu 10am–5pm; Fri–Sat 10am–9pm; check the official site for current hours" },
        { label: "Closed", value: "Wednesdays; check the official site for holiday closures" },
        { label: "Time needed", value: "3–4 hours" },
        { label: "Best time", value: "Weekday at opening, or after 6pm Friday and Saturday" },
        { label: "Nearest subway", value: "86 St (4/5/6), three blocks west to Fifth Avenue" },
      ],
      mapId: "met-museum",
      introImage: "central-park-nyc.webp",
      introImageAlt: "Central Park beside Fifth Avenue, along the Met's eastern edge",
      introEyebrow: "Museum Mile",
      introTitle: "A collection that spans everything, in a building to match",
      introLead:
        "The Met's great advantage over other museums is range: Egyptian, Greek and Roman, European painting, Asian art, American rooms, arms and armour. Whatever you already like, there is a wing for it, usually a short walk from the last one.",
      introParagraphs: [
        "The building sits on the eastern edge of <a href=\"central-park.html\">Central Park</a>, which makes it one of the easiest major sights to combine with a park morning. It is also the reason to keep the visit to three hours: the galleries are long, the floors are hard, and the light outside is often better than the fifth room of paintings.",
        "The Met and the Cloisters share one ticket, valid for three days, but they sit in different parts of Manhattan. Do not try to see both in one day: the Cloisters deserves its own quiet morning in Fort Tryon Park, and it is closed on the same weekday as the main building.",
      ],
      reasonsEyebrow: "Why go",
      reasonsTitle: "Three reasons to give it a careful half-day",
      reasonsLead: "The range, the late nights and the second building included in the ticket.",
      reasons: [
        {
          title: "The breadth is the point",
          text: "Nowhere else in New York lets you move from an Egyptian temple to a Dutch interior in ten minutes. Pick two wings, not ten, and let the range be the pleasure rather than the task.",
        },
        {
          title: "Friday and Saturday nights are quieter",
          text: "The Met stays open until 9pm on Friday and Saturday, and after 6pm the galleries thin out. It is the best evening museum experience in the city.",
        },
        {
          title: "One ticket, two buildings, three days",
          text: "Your ticket includes the Cloisters in Fort Tryon Park, and you have three days to use it. Keep the sticker and save the second visit for a separate morning.",
        },
      ],
      bookingTitle: "How to book the Met and get in",
      bookingLead:
        "Admission is sold online and at the door for the same price. The difference is the queue on holiday weekends, and the risk of arriving on a Wednesday.",
      bookingSteps: [
        "Check the day before anything else: the Met is closed on Wednesdays, and the Cloisters follows the same closure.",
        "Buy a timed ticket on metmuseum.org if you are visiting at a weekend or around a public holiday. Weekday entry is usually quick at the door.",
        "Enter through the main Fifth Avenue entrance at 82nd Street. Bag check is free and mandatory for large bags, so allow ten minutes for security.",
        "New York State residents pay what they wish with proof of ID, and students from New York, New Jersey and Connecticut qualify too. Everyone else pays the published admission.",
        "Keep the admission sticker: it covers the Cloisters for three days including the day of your visit.",
      ],
      bookingNote:
        "Wednesday is the closed day, and it is the single most common wasted trip on Museum Mile. Check the official site for current hours and holiday closures before you set out.",
      official: {
        title: "Book on metmuseum.org",
        text: "Tickets are sold on the museum's own site, which also lists the current opening hours, the Roof Garden season and the Cloisters. Buy direct and skip the third-party sites that add a booking fee.",
        url: "https://www.metmuseum.org/plan-your-visit",
        cta: "Plan your visit at metmuseum.org",
        note: "Official museum site. Hours and holiday closures can change; check before you travel.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Go late on a Friday",
          text: "Friday and Saturday openings run to 9pm. Arrive after 6pm and you get the European paintings with room to stand back from them.",
        },
        {
          title: "Check the Roof Garden season",
          text: "The Roof Garden is seasonal, usually May to October and weather-dependent. It is a good bonus, not a reason to plan a whole trip around.",
        },
        {
          title: "Do not pair it with the Cloisters",
          text: "The ticket covers both for three days, but they are miles apart. Give the Cloisters its own morning in Fort Tryon Park.",
        },
        {
          title: "Pay what you wish only if you qualify",
          text: "That applies to New York State residents and to students from New York, New Jersey and Connecticut, with ID. Everyone else should budget from $30.",
        },
      ],
      tipsImage: "fifth-avenue-cab.webp",
      tipsImageAlt: "A yellow taxi on Fifth Avenue in Manhattan",
      nearby: [
        {
          href: "central-park.html",
          image: "central-park-bow-bridge.webp",
          alt: "Bow Bridge in Central Park",
          kicker: "At the doorstep",
          title: "Central Park",
          text: "The Met backs onto the park. Walk south to the Bow Bridge before or after your slot.",
          meta: "Free",
        },
        {
          href: "amnh.html",
          image: "amnh-facade.webp",
          alt: "The American Museum of Natural History on Central Park West",
          kicker: "Across the park",
          title: "American Museum of Natural History",
          text: "The other half of Museum Mile's big two, on the park's western side.",
          meta: "Natural history",
        },
        {
          href: "manhattan.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Neighbourhood",
          title: "The Upper East Side",
          text: "Where to walk, eat and stay around Museum Mile.",
          meta: "Borough guide",
        },
      ],
      source: "met-museum",
      faq,
      prev: { href: "amnh.html", label: "American Museum of Natural History" },
      next: { href: "central-park.html", label: "Central Park" },
    }),
};
