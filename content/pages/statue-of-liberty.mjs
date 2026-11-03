import { renderAttractionPage } from "../attraction-template.mjs";

const faqItems = [
  {
    q: "Do I need to book the Statue of Liberty ferry in advance?",
    a: "<p>Yes. Ferries sell out, and the first departures sell out first. Book on the official Statue City Cruises site, which is the only National Park Service-authorised operator, and ignore anyone selling tickets on the street.</p>",
  },
  {
    q: "How long does the whole trip take?",
    a: "<p>Allow 4–5 hours for Liberty Island and Ellis Island, including security and the crossings. If you only have a morning, do Liberty Island and skip Ellis rather than rushing both.</p>",
  },
  {
    q: "Is crown access worth it?",
    a: "<p>The crown is a separate reservation that sells out months ahead, involves 162 steps and has no lift, and bags are not allowed — there are lockers on site. Pedestal access is a small price step and much easier to arrange.</p>",
  },
  {
    q: "Is Ellis Island included in the ferry ticket?",
    a: "<p>Yes. The ferry loop includes Ellis Island and its Immigration Museum in the fare. The island is the quieter half of the trip and, for many people, the more interesting one.</p>",
  },
  {
    q: "Can I see the Statue of Liberty without paying?",
    a: "<p>The free Staten Island Ferry passes close to the statue several times an hour from Whitehall Terminal. It does not land on Liberty Island, but it is a genuinely good view for nothing — see <a href=\"free-things-to-do-nyc.html\">free things to do</a>.</p>",
  },
];

export default {
  path: "statue-of-liberty.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Statue of Liberty: Ferry Tickets and Tips",
  description:
    "Statue of Liberty and Ellis Island ferries: tickets from $25.50, the official operator, crown and pedestal access, security and the first-boat strategy.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/statue-of-liberty-sunset.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Statue of Liberty National Monument",
      description:
        "Statue of Liberty and Ellis Island in New York harbour, reached by the official Statue City Cruises ferry from Battery Park.",
      url: "https://nyctrove.com/statue-of-liberty.html",
      image: "https://nyctrove.com/assets/img/statue-of-liberty-sunset.webp",
      touristType: "Landmark",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a.replace(/<[^>]+>/g, "") },
      })),
    },
  ],
  render: () =>
    renderAttractionPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "statue-of-liberty.html", label: "Statue of Liberty" },
      ],
      heroImage: "statue-of-liberty-sunset.webp",
      heroAlt: "The Statue of Liberty silhouetted against a fiery sunset over New York harbour",
      eyebrowText: "Landmark",
      h1: "Statue of Liberty",
      lead: "A working harbour crossing, not just a monument. The ferry is the only way to land on Liberty Island, and the same ticket carries you on to Ellis Island and its immigration museum.",
      heroMeta: ["Ferry from Battery Park", "From $25.50", "Liberty and Ellis Island", "4–5 hours"],
      facts: [
        { label: "Tickets", value: "From $25.50 adult; $16.50 child; $22.50 senior" },
        { label: "Hours", value: "First boats around 08:30–09:00; last mid-afternoon to 17:00, season-dependent — check the official site for current hours" },
        { label: "Time needed", value: "4–5 hours for Liberty and Ellis Island" },
        { label: "Best time", value: "The first departure of the day" },
        { label: "Nearest subway", value: "Bowling Green (4/5); South Ferry (1); Whitehall St (R/W)" },
        { label: "Departs from", value: "Battery Park (Castle Clinton); also Liberty State Park, New Jersey" },
      ],
      introImage: "brooklyn-bridge-skyline.webp",
      introImageAlt: "The Brooklyn Bridge and the Lower Manhattan skyline seen across the water",
      mapId: "statue-of-liberty",
      introEyebrow: "The visit",
      introTitle: "The ferry is the visit",
      introLead:
        "The statue is on an island in the middle of a working harbour, which means the day is shaped by boats. You clear airport-style security at Battery Park, cross on an authorised ferry, and land where the immigrants arrived.",
      introParagraphs: [
        "The crossing itself is worth the fare. The statue grows as you approach, the Lower Manhattan skyline sits behind you, and the harbour traffic — ferries, tugs, container ships — carries on around the boat the whole way. Sit outside if the weather allows.",
        "Liberty Island is the photo stop; Ellis Island is the story. The Immigration Museum is included in the ferry fare, and the building holds the records of the people who passed through it. Most visitors give Ellis Island half an hour and regret it, so leave yourself an hour.",
      ],
      reasonsTitle: "Why this trip is worth the planning",
      reasonsLead: "Three hours of logistics buy you a harbour crossing and two islands with very different stories.",
      reasons: [
        {
          title: "The only way to land",
          text: "Statue City Cruises is the National Park Service-authorised operator, and there is no other way to set foot on Liberty Island. That exclusivity is why booking ahead matters more here than at any other attraction.",
        },
        {
          title: "Ellis Island comes with it",
          text: "The immigration museum is included in the ferry ticket rather than sold separately. It is the quieter half of the day and the part that explains why the statue was there in the first place.",
        },
        {
          title: "The approach from the water",
          text: "The classic view of the statue is from the deck of a boat, with the harbour around it. No photograph taken from land gets the same sense of scale or the same skyline behind it.",
        },
      ],
      bookingTitle: "Tickets, security and crown access",
      bookingLead: "Buy from the official operator, take the first boat you can, and decide about the crown long before you travel.",
      bookingSteps: [
        "Buy only at <strong>statuecitycruises.com</strong>. It is the sole National Park Service-authorised operator, and anyone selling on the street is not.",
        "Choose your <strong>departure point and time</strong>: Battery Park in Lower Manhattan is the usual choice, with Liberty State Park in New Jersey as the alternative.",
        "Decide between <strong>grounds, pedestal and crown</strong>. Pedestal access is a small price step; crown access needs a separate reservation months ahead, has 162 steps and no lift, and no bags are allowed.",
        "Arrive early for <strong>airport-style screening</strong> at Battery Park before boarding. The first departure has the shortest line.",
        "Plan <strong>4–5 hours</strong> for both islands. The ferry loop includes Ellis Island and its museum in the fare.",
      ],
      bookingNote:
        "Boats run every 20–30 minutes, but the first and last sailings move with the season and the last departure can be as early as mid-afternoon in winter. Check the official site for current hours and the date-specific timetable before you fix the rest of your day.",
      official: {
        title: "Statue City Cruises — official ferry tickets",
        text: "Reservations for the ferry, pedestal and crown are handled by the official concessioner. Crown and pedestal reservations run out well before the ferry itself does, so book as early as your dates are fixed.",
        url: "https://statuecitycruises.com/",
        cta: "Book on statuecitycruises.com",
        note: "Official operator. We take no commission on this link.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Take the first boat",
          text: "The 08:30 or 09:00 departure clears security fastest and puts you on Liberty Island before the tour groups. You will also be back in Manhattan in time for lunch.",
        },
        {
          title: "Treat the crown as its own trip",
          text: "Crown reservations are a separate product that sells out months ahead, and the climb is 162 steps with no lift and nowhere to leave a bag. Do not assume you can decide on the day.",
        },
        {
          title: "Ignore ticket sellers on the street",
          text: "There is a persistent trade in fake Statue of Liberty tickets near Battery Park. Buy from statuecitycruises.com or the official ticket office and nothing else.",
        },
        {
          title: "Leave time for Ellis Island",
          text: "The museum is included and most people under-plan it. An hour is a reasonable minimum, and the building is the reason the island is worth the second stop.",
        },
      ],
      tipsImage: "statue-of-liberty-skyline.webp",
      tipsImageAlt: "The Statue of Liberty with the Lower Manhattan skyline behind it at sunset",
      nearby: [
        {
          href: "9-11-memorial.html",
          image: "911-memorial.webp",
          alt: "The 9/11 Memorial plaza and reflecting pools in Lower Manhattan",
          kicker: "Lower Manhattan",
          title: "9/11 Memorial & Museum",
          text: "A few minutes from the ferry terminal, and the other essential Lower Manhattan stop.",
          meta: "Plaza free; museum from $24",
        },
        {
          href: "one-world-observatory.html",
          image: "one-wtc.webp",
          alt: "One World Trade Center above Lower Manhattan",
          kicker: "Observation deck",
          title: "One World Observatory",
          text: "See the statue from above before you see it from the water. Best on a clear morning.",
          meta: "From $51",
        },
        {
          href: "free-things-to-do-nyc.html",
          image: "brooklyn-bridge-skyline.webp",
          alt: "The Brooklyn Bridge and Lower Manhattan seen from the water",
          kicker: "Free",
          title: "Free things to do in NYC",
          text: "The Staten Island Ferry passes the statue for nothing, and the rest of the free list is here.",
          meta: "12 free ideas",
        },
      ],
      source: "statue-of-liberty",
      faqTitle: "Statue of Liberty questions",
      faq: faqItems,
      prev: { href: "one-world-observatory.html", label: "One World Observatory" },
      next: { href: "9-11-memorial.html", label: "9/11 Memorial & Museum" },
    }),
};
