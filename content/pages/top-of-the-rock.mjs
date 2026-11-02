import { renderAttractionPage } from "../attraction-template.mjs";

const faqItems = [
  {
    q: "Top of the Rock or the Empire State Building — which is better?",
    a: "<p>They answer different questions. Top of the Rock gives you the Empire State Building in the frame; the Empire State gives you everything except itself. If you want the classic photograph, come here.</p>",
  },
  {
    q: "Are The Beam and SKYLIFT worth paying for?",
    a: "<p>They are separate products from the observation deck and both sell out on busy days. Decide before you arrive and buy them with your ticket rather than on the roof, where availability is whoever queued first.</p>",
  },
  {
    q: "How long does a visit take?",
    a: "<p>Plan 1.5–2 hours for the three levels (67, 69 and 70), including security and the lifts. At sunset, add time for the queue at the top.</p>",
  },
  {
    q: "What is the quietest time to go?",
    a: "<p>The 08:00 opening and the last hour before closing are calmest. Sunset is the busiest slot of the day at every deck in the city, and this one is no exception.</p>",
  },
  {
    q: "Should I buy from the official site?",
    a: "<p>Yes. Timed admission, The Beam and SKYLIFT are sold by Rockefeller Center. Resale sites add fees and cannot guarantee the slot you paid for.</p>",
  },
];

export default {
  path: "top-of-the-rock.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Top of the Rock: Tickets, Views and Timing",
  description:
    "Top of the Rock at Rockefeller Center: timed tickets from $42, the three levels, The Beam and SKYLIFT add-ons, the quietest hours and how to book direct.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/skyline-window-view.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Top of the Rock Observation Deck",
      description:
        "Three-level observation deck at Rockefeller Center in Midtown Manhattan, with views that include the Empire State Building and Central Park.",
      url: "https://nyctrove.com/top-of-the-rock.html",
      image: "https://nyctrove.com/assets/img/skyline-window-view.webp",
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
        { href: "top-of-the-rock.html", label: "Top of the Rock" },
      ],
      heroImage: "skyline-window-view.webp",
      heroAlt: "The Empire State Building and Midtown Manhattan seen through a high window",
      eyebrowText: "Observation deck",
      h1: "Top of the Rock",
      lead: "The deck that frames the Empire State Building. Three levels above Rockefeller Center, a lift that takes seconds, and the view most photographs of New York are actually taken from.",
      heroMeta: ["Floors 67, 69 and 70", "From $42", "Open daily", "Rockefeller Center"],
      facts: [
        { label: "Tickets", value: "Timed admission from $42; peak around $60" },
        { label: "Hours", value: "Daily 08:00–24:00" },
        { label: "Last lift", value: "Around 23:00 — check the official site for current hours" },
        { label: "Time needed", value: "1.5–2 hours across the three levels" },
        { label: "Best time", value: "08:00 opening, or 22:00–23:00" },
        { label: "Nearest subway", value: "47–50 Sts–Rockefeller Center (B/D/F/M); 49 St (N/Q/R/W)" },
      ],
      introImage: "manhattan-skyline-night.webp",
      introImageAlt: "Lower Manhattan and the Brooklyn Bridge lit up at night",
      mapId: "top-of-the-rock",
      introEyebrow: "The visit",
      introTitle: "Built to look at the building next door",
      introLead:
        "Rockefeller Center put its observation deck on the wrong side of Midtown on purpose. From the 70th floor the Empire State Building stands directly to the south, lit at dusk, and everything else arranges itself around it.",
      introParagraphs: [
        "You move through three levels: 67, 69 and 70. The route is one-way in spirit — go up first, then work down — and each level gives you a slightly different angle on the same skyline. The upper deck is the one people photograph from, and it is the one that fills up first.",
        "The rest of the view is Midtown at close range: the towers of the Rockefeller Center complex below you, the green rectangle of Central Park running north, and both rivers at the edges. It is a better view of the city than a taller deck gives, because the city is closer.",
      ],
      reasonsTitle: "Why this deck is the photographer's choice",
      reasonsLead: "If one image is coming home with you, this is the deck that takes it.",
      reasons: [
        {
          title: "The Empire State in the frame",
          text: "No other observation deck includes the Empire State Building in its skyline. From the south side it is close enough to fill a phone frame, close enough that you can see the terrace you would be standing on instead.",
        },
        {
          title: "Three levels, three angles",
          text: "Floors 67, 69 and 70 are stacked rather than repeated. The lower levels put you level with Midtown's rooftops; the top one clears them, which is why the route rewards walking up before you walk down.",
        },
        {
          title: "Central Park on axis",
          text: "Look north and the park runs away from you in a straight green line, framed by the buildings of Fifth Avenue and Central Park West. It is the clearest view of the park's scale anywhere in the city.",
        },
      ],
      bookingTitle: "Tickets, add-ons and getting up there",
      bookingLead: "This is a timed ticket with two paid extras. Sort all three before you arrive.",
      bookingSteps: [
        "Book <strong>timed admission on the Rockefeller Center site</strong>. Prices from $42 rise for peak dates and sunset slots, and the calendar shows the real price.",
        "Decide on <strong>The Beam</strong> and <strong>SKYLIFT</strong> at the same time. Both are paid add-ons and both sell out; buying at the roof is not reliable.",
        "Enter through the <strong>Rockefeller Center concourse</strong> at 50th Street rather than queueing at street level.",
        "Expect a bag scan and no large luggage. The lift is fast, but security is the slow part at peak times.",
        "Go at <strong>08:00</strong> or after <strong>22:00</strong> if you want space. Sunset is the crush, and it is worth booking days ahead if that is the light you want.",
      ],
      bookingNote:
        "The deck posts daily hours of 08:00–24:00, with the last lift around 23:00. Those times can shift around holidays, so check the official site for current hours before you plan the evening around it.",
      official: {
        title: "Top of the Rock — official tickets",
        text: "Rockefeller Center sells timed admission, The Beam, SKYLIFT and combination tickets on its own site. The price changes with the date and time, so the checkout calendar is the only reliable figure.",
        url: "https://www.rockefellercenter.com/attractions/top-of-the-rock-observation-deck/",
        cta: "Book at Rockefeller Center",
        note: "Official seller. We take no commission on this link.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Buy the add-ons with the ticket",
          text: "The Beam and SKYLIFT are separate products, not included in admission. They are the first things to sell out on a clear weekend, and the roof cannot always sell you one.",
        },
        {
          title: "Arrive before sunset, not at it",
          text: "The light is best in the 40 minutes before the sun drops, but that is also when the top deck is fullest. Book an earlier slot and stay up; the deck does not rush you out.",
        },
        {
          title: "Walk up before you walk down",
          text: "The top level is where the view opens out. If you stop on 67 first you will queue twice for the lift. Take the lift to the top, then explore on the way down.",
        },
        {
          title: "Leave big bags at the hotel",
          text: "Security scans bags and will not accept large luggage. The concourse entrance is easier than the street-level doors, especially in winter.",
        },
      ],
      tipsImage: "manhattan-skyline-night.webp",
      tipsImageAlt: "Manhattan's skyline glowing at night seen across the water",
      nearby: [
        {
          href: "empire-state-building.html",
          image: "esb-exterior.webp",
          alt: "The Empire State Building towering over Midtown streets",
          kicker: "Observation deck",
          title: "Empire State Building",
          text: "The open-air terrace on 86, and the view that does not include itself. The natural pair for this one.",
          meta: "From $46",
        },
        {
          href: "summit-one-vanderbilt.html",
          image: "summit-vanderbilt.webp",
          alt: "SUMMIT One Vanderbilt rising above Grand Central Terminal",
          kicker: "Observation deck",
          title: "SUMMIT One Vanderbilt",
          text: "Half art installation, half skyline. The most photogenic interior in Midtown, five minutes' walk east.",
          meta: "Around $44–62",
        },
        {
          href: "attractions.html",
          image: "manhattan-skyline.webp",
          alt: "Lower Manhattan skyline seen from the Brooklyn Bridge",
          kicker: "Plan",
          title: "All New York attractions",
          text: "Prices, booking order and the free alternatives, all in one place.",
          meta: "Prices checked November 2026",
        },
      ],
      source: "top-of-the-rock",
      faqTitle: "Top of the Rock questions",
      faq: faqItems,
      prev: { href: "empire-state-building.html", label: "Empire State Building" },
      next: { href: "edge.html", label: "Edge at Hudson Yards" },
    }),
};
