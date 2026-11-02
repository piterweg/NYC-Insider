import { renderAttractionPage } from "../attraction-template.mjs";

const faqItems = [
  {
    q: "How long should I allow at One World Observatory?",
    a: "<p>Plan 1–1.5 hours, including security and the Sky Pod lifts. The observatory is compact, and most visitors spend their time on the harbour side rather than circulating the whole floor.</p>",
  },
  {
    q: "When is the best time to visit?",
    a: "<p>09:00–10:00 for the clearest harbour light, or after 19:00 for the night view. Midday is the busiest and the haziest, and the skip-the-line ticket earns its money then.</p>",
  },
  {
    q: "Can I combine it with the 9/11 Memorial and Museum?",
    a: "<p>Yes, and the combination saves around $10. They are a few minutes apart on foot, and doing the museum first puts the view in context. See our <a href=\"9-11-memorial.html\">9/11 Memorial guide</a>.</p>",
  },
  {
    q: "Is this the best deck for a first visit?",
    a: "<p>It is the best deck for Lower Manhattan, the harbour, the bridges and the Statue of Liberty. If your trip is centred on Midtown, one of the uptown decks will show you more of what you came to see.</p>",
  },
  {
    q: "Are bags and strollers allowed?",
    a: "<p>No large bags, and strollers have to be folded for the Sky Pod lift. Security is airport-style at the entrance on West Street, so allow around 15 minutes before your slot.</p>",
  },
];

export default {
  path: "one-world-observatory.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "One World Observatory: Tickets and Tips",
  description:
    "One World Observatory at the top of One World Trade Center: tickets from $51, the harbour view, the quietest hours, security at 117 West Street and combo savings.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/one-wtc.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "One World Observatory",
      description:
        "Observation deck at the top of One World Trade Center in Lower Manhattan, with views of the harbour, the bridges and the Statue of Liberty.",
      url: "https://nyctrove.com/one-world-observatory.html",
      image: "https://nyctrove.com/assets/img/one-wtc.webp",
      touristType: "Observation deck",
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
        { href: "one-world-observatory.html", label: "One World Observatory" },
      ],
      heroImage: "one-wtc.webp",
      heroAlt: "One World Trade Center rising above Lower Manhattan",
      eyebrowText: "Observation deck",
      h1: "One World Observatory",
      lead: "The tallest deck in the city, at the top of One World Trade Center. You come here for the harbour: the Statue of Liberty, the bridges, the islands and the whole southern edge of Manhattan.",
      heroMeta: ["Tallest deck", "From $51", "Open daily", "Lower Manhattan"],
      facts: [
        { label: "Tickets", value: "From $51" },
        { label: "Hours", value: "Daily 09:00–21:00" },
        { label: "Last lift", value: "Around 20:15 — check the official site for current hours" },
        { label: "Time needed", value: "1–1.5 hours" },
        { label: "Best time", value: "09:00–10:00, or after 19:00 for the night view" },
        { label: "Nearest subway", value: "WTC Cortlandt (1); World Trade Center (E); Fulton St (2/3/4/5/A/C/J/Z)" },
      ],
      introImage: "manhattan-skyline.webp",
      introImageAlt: "Lower Manhattan and the Brooklyn Bridge seen from the water on a clear day",
      mapId: "one-world-observatory",
      introEyebrow: "The visit",
      introTitle: "The view that includes the harbour",
      introLead:
        "One World Trade Center stands at the southern tip of Manhattan, which means its observatory looks out over water rather than more city. The Statue of Liberty, Ellis Island, the Brooklyn Bridge and the Verrazzano narrows are all in the frame.",
      introParagraphs: [
        "The route up is part of the visit. The Sky Pod lifts are fast enough to make your ears click, and the floors around the observatory put you above every other building in the city. The harbour side is the one to make for; the north side looks back up the island towards Midtown.",
        "It pairs naturally with the 9/11 Memorial and Museum below. The site and the view belong to the same story, and doing the museum first makes the height feel like part of it rather than a separate attraction. Allow a morning or an afternoon for both.",
      ],
      reasonsTitle: "Why this deck is different",
      reasonsLead: "Midtown decks look at buildings. This one looks at water.",
      reasons: [
        {
          title: "The harbour, laid out",
          text: "From the top of One World Trade Center you can follow the whole working harbour: the Staten Island Ferry crossing, the bridges to Brooklyn, the container terminals in New Jersey and the Atlantic beyond the narrows.",
        },
        {
          title: "The Statue of Liberty in view",
          text: "The statue is small at this distance but unmistakable. Seeing it from above is a useful reminder of how far the harbour actually runs, and it is the reason to visit this deck before or after the ferry.",
        },
        {
          title: "The tallest deck in the city",
          text: "Nothing else in New York puts you this high. That extra height matters most on the south side, where it lifts you clear of the buildings that block the harbour from lower floors.",
        },
      ],
      bookingTitle: "Tickets, security and the entrance",
      bookingLead: "Timed entry, airport-style screening and one door on West Street.",
      bookingSteps: [
        "Book a <strong>timed ticket on the official observatory site</strong>. Prices start at $51 and rise for peak dates.",
        "Consider the <strong>skip-the-line</strong> option if you are going at midday; the security queue is the slow part and the standard queue can be long.",
        "Look at the <strong>combination ticket with the 9/11 Memorial &amp; Museum</strong>. It saves around $10 and the two sites are minutes apart.",
        "Enter at <strong>117 West Street</strong>, on the corner of Vesey Street, and allow around 15 minutes for airport-style screening.",
        "Allow <strong>1–1.5 hours</strong> at the top. Strollers must be folded for the Sky Pod lift, and large bags are not permitted.",
      ],
      bookingNote:
        "The observatory is open daily 09:00–21:00, with the last lift around 20:15. Those times can change around holidays, so check the official site for current hours if you are planning the last slot of the day.",
      official: {
        title: "One World Observatory — official tickets",
        text: "Timed entry, skip-the-line, combination tickets and the All-Inclusive pass are sold by the observatory itself. The date you pick changes the price, and the official checkout is the only place that price is guaranteed.",
        url: "https://www.oneworldobservatory.com/buy-tickets/",
        cta: "Book on oneworldobservatory.com",
        note: "Official seller. We take no commission on this link.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Make for the south side first",
          text: "The harbour view is the reason to be here, and it is busiest in the middle of the day. Go straight to the south windows, then work around the floor as the crowd moves.",
        },
        {
          title: "Give security real time",
          text: "Screening is airport-style and starts at street level. Fifteen minutes is normal, longer at weekends; arriving exactly at your slot time does not mean you are at the top at that time.",
        },
        {
          title: "Do the museum first",
          text: "The memorial and museum sit directly below. Doing them before the observatory gives the view context and makes better use of a morning than doing them after.",
        },
        {
          title: "Watch the light",
          text: "Morning is clearest over the harbour; after 19:00 the bridges and the Jersey shoreline light up. Midday haze is the enemy of the long view, and that is when the cheap tickets are.",
        },
      ],
      tipsImage: "statue-of-liberty.webp",
      tipsImageAlt: "The Statue of Liberty seen across New York harbour",
      nearby: [
        {
          href: "9-11-memorial.html",
          image: "911-memorial.webp",
          alt: "The 9/11 Memorial plaza with its reflecting pools in Lower Manhattan",
          kicker: "Lower Manhattan",
          title: "9/11 Memorial & Museum",
          text: "The memorial plaza and museum directly below the tower. The natural pair with this visit.",
          meta: "Plaza free; museum from $24",
        },
        {
          href: "statue-of-liberty.html",
          image: "statue-of-liberty.webp",
          alt: "The Statue of Liberty on Liberty Island",
          kicker: "The harbour",
          title: "Statue of Liberty",
          text: "See the statue from above here, then take the ferry from Battery Park and see it close up.",
          meta: "Ferry from $25.50",
        },
        {
          href: "attractions.html",
          image: "brooklyn-bridge-skyline.webp",
          alt: "The Brooklyn Bridge and the Lower Manhattan skyline",
          kicker: "Plan",
          title: "All New York attractions",
          text: "How the five decks compare, what they cost and which one suits your trip.",
          meta: "Prices checked November 2026",
        },
      ],
      source: "one-world-observatory",
      faqTitle: "One World Observatory questions",
      faq: faqItems,
      prev: { href: "summit-one-vanderbilt.html", label: "SUMMIT One Vanderbilt" },
      next: { href: "statue-of-liberty.html", label: "Statue of Liberty" },
    }),
};
