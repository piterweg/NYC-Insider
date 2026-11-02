import { renderAttractionPage } from "../attraction-template.mjs";

const faqItems = [
  {
    q: "What should I wear to SUMMIT?",
    a: "<p>Trousers, jeans or shorts. The floors and ceilings are mirrored, so skirts and dresses leave you exposed in the reflection. Complimentary shoe covers are provided, and you keep your shoes on underneath.</p>",
  },
  {
    q: "How long does a visit take?",
    a: "<p>Allow 1.5–2 hours for the three floors. There is more to look at than the view, so people tend to move through it more slowly than a conventional observation deck.</p>",
  },
  {
    q: "Is SUMMIT Ascent included in the ticket?",
    a: "<p>No. Ascent, the glass elevator ride, is a paid add-on. Buy it with your entry ticket rather than deciding at the top, when the remaining slots may not suit you.</p>",
  },
  {
    q: "Is SUMMIT good for children?",
    a: "<p>Older children tend to enjoy the mirrors and the glass; very young children get less from it and the bag rules make strollers awkward. Large bags and strollers are not allowed, and there is a bag check on site.</p>",
  },
  {
    q: "When is the quietest slot?",
    a: "<p>The first slot of the morning and the last slots of the evening. Sunset is the most expensive and the busiest, because the mirrors pick up the light and the queues build on the top floor.</p>",
  },
];

export default {
  path: "summit-one-vanderbilt.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "SUMMIT One Vanderbilt: Tickets and Tips",
  description:
    "SUMMIT One Vanderbilt: mirrored art floors above Grand Central, tickets around $44–62, what to wear, the Ascent add-on and the quietest entry slots.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/summit-vanderbilt.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "SUMMIT One Vanderbilt",
      description:
        "Observation experience with mirrored art installations and glass floors across three levels above Grand Central Terminal in Midtown Manhattan.",
      url: "https://nyctrove.com/summit-one-vanderbilt.html",
      image: "https://nyctrove.com/assets/img/summit-vanderbilt.webp",
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
        { href: "summit-one-vanderbilt.html", label: "SUMMIT One Vanderbilt" },
      ],
      heroImage: "summit-vanderbilt.webp",
      heroAlt: "SUMMIT One Vanderbilt rising above Grand Central Terminal in Midtown",
      eyebrowText: "Observation deck",
      h1: "SUMMIT One Vanderbilt",
      lead: "Part observation deck, part art installation. You come for the skyline and spend most of the visit looking at the city reflected in the floor, the ceiling and everything in between.",
      heroMeta: ["Three levels", "Around $44–62", "Mirrored interiors", "Above Grand Central"],
      facts: [
        { label: "Tickets", value: "Around $44–62, depending on date and time" },
        { label: "Hours", value: "Daily from around 09:00; last entry around 20:00 — check the official site for current hours" },
        { label: "Time needed", value: "1.5–2 hours across three floors" },
        { label: "Best time", value: "09:00 first slot, or after 19:30" },
        { label: "Nearest subway", value: "Grand Central–42 St (4/5/6/7/S), entrance on Vanderbilt Avenue" },
        { label: "What to wear", value: "Trousers, jeans or shorts — the floors are mirrored" },
      ],
      introImage: "grand-central.webp",
      introImageAlt: "The main concourse of Grand Central Terminal with its celestial ceiling",
      mapId: "summit-one-vanderbilt",
      introEyebrow: "The visit",
      introTitle: "The deck that turns the city into a mirror",
      introLead:
        "SUMMIT sits on top of One Vanderbilt, directly above Grand Central Terminal. The route runs through three levels — Transcendence, Affinity and Levitation — and each one uses glass and mirror to do something to the view before it lets you see it.",
      introParagraphs: [
        "The installations are the reason this deck feels different from the others. The mirrors do not just reflect you; they reflect the skyline back into the building, so the boundary between inside and outside stops being obvious. It is the most photogenic interior in Midtown, and it is busy because of it.",
        "The actual view is exceptional too. Central Park runs north, the Chrysler Building and the Empire State Building stand close by, and Grand Central's roof is directly below. The mirrors amplify all of it, but the city is doing the work.",
      ],
      reasonsTitle: "Why SUMMIT is worth the ticket",
      reasonsLead: "If the other decks are about height, this one is about the experience of looking.",
      reasons: [
        {
          title: "Rooms built for photographs",
          text: "Transcendence and Affinity are installations as much as viewing floors. The mirrored surfaces double the skyline and the crowd, and the effect in late afternoon light is the reason the sunset slots cost more.",
        },
        {
          title: "A view directly over Grand Central",
          text: "The terminal's roof is immediately below, and beyond it the Chrysler Building, the Empire State and the full run of Central Park. No other midtown deck puts you this close to the buildings you are looking at.",
        },
        {
          title: "Levitation and the glass below you",
          text: "The highest floor is where you look down between your feet and find the street. It is a controlled version of the Edge glass floor, and it changes how the rest of the visit feels.",
        },
      ],
      bookingTitle: "Tickets, entry and what to wear",
      bookingLead: "Timed entry only, bag check on arrival, and one clothing rule worth knowing before you leave the hotel.",
      bookingSteps: [
        "Book <strong>timed entry on the official SUMMIT site</strong>. The price is around $44–62 and rises for weekend and sunset slots.",
        "Decide about <strong>SUMMIT Ascent</strong>, the glass elevator, at the same time. It is an add-on rather than part of general admission.",
        "Wear <strong>trousers, jeans or shorts</strong>. The mirrored floors reflect everything, and complimentary shoe covers are handed out at the entrance.",
        "Leave large bags and strollers behind. Security and the bag check will slow you down, and the route is not built for them.",
        "Arrive via <strong>Grand Central–42 St</strong> and walk to the Vanderbilt Avenue entrance at 42nd Street. The first slot of the day is the calmest.",
      ],
      bookingNote:
        "The deck opens around 09:00, with the last entry around 20:00 and sometimes later on Friday and Saturday nights. Those times vary by season and demand, so check the official site for current hours before you book a fixed dinner reservation around it.",
      official: {
        title: "SUMMIT One Vanderbilt — official tickets",
        text: "Timed entry, the Ascent add-on and combination tickets are sold on SUMMIT's own site. There are no gate sales of any advantage — the calendar price is the price.",
        url: "https://summitov.com/tickets/",
        cta: "Book on summitov.com",
        note: "Official seller. We take no commission on this link.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Wear the right clothes",
          text: "Skirts and loose dresses are a genuine problem on the mirrored floors. Trousers, jeans or shorts make the whole visit easier, and shoe covers are provided for everyone.",
        },
        {
          title: "Book the first slot of the day",
          text: "The mirrors work best when there is less crowd to reflect, and the early slot is the quietest and cheapest. By late afternoon the top floor is slow to move through.",
        },
        {
          title: "Decide on Ascent before you arrive",
          text: "The glass elevator is a paid extra, not something you can add cheaply at the last minute. If it matters to you, buy it with the ticket.",
        },
        {
          title: "Treat it as an experience, not just a view",
          text: "People who rush to the windows miss the point. The installations are what separate SUMMIT from the four other decks, and they reward a slower walk through.",
        },
      ],
      tipsImage: "grand-central.webp",
      tipsImageAlt: "Grand Central Terminal's main concourse, directly below SUMMIT One Vanderbilt",
      nearby: [
        {
          href: "empire-state-building.html",
          image: "esb-exterior.webp",
          alt: "The Empire State Building above the Midtown street grid",
          kicker: "Observation deck",
          title: "Empire State Building",
          text: "The open-air classic a few blocks south, with the view that leaves itself out.",
          meta: "From $46",
        },
        {
          href: "top-of-the-rock.html",
          image: "skyline-window-view.webp",
          alt: "The Empire State Building seen through a high window at Top of the Rock",
          kicker: "Observation deck",
          title: "Top of the Rock",
          text: "The photographer's deck, ten minutes west, with the Empire State in the frame.",
          meta: "From $42",
        },
        {
          href: "attractions.html",
          image: "manhattan-skyline.webp",
          alt: "Lower Manhattan skyline seen from the Brooklyn Bridge",
          kicker: "Plan",
          title: "All New York attractions",
          text: "Compare every deck, price and booking order before you decide.",
          meta: "Prices checked November 2026",
        },
      ],
      source: "summit-one-vanderbilt",
      faqTitle: "SUMMIT questions",
      faq: faqItems,
      prev: { href: "edge.html", label: "Edge at Hudson Yards" },
      next: { href: "one-world-observatory.html", label: "One World Observatory" },
    }),
};
