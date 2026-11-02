import { renderDayTripPage } from "../day-trip-template.mjs";

export default {
  path: "boston.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Boston from New York — Overnight Guide",
  description:
    "Boston from New York: Amtrak and Acela times, why it works better as an overnight than a day trip, the Freedom Trail, Beacon Hill and the North End.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/boston-skyline.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Boston from New York — Why It Works Better as an Overnight",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Boston a good day trip from New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not really. The fastest trains take about three and a half hours, so a same-day return means roughly eight hours of travel for a few hours in the city. Stay one night at least.",
          },
        },
        {
          "@type": "Question",
          name: "Should I take the train or fly from New York to Boston?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The train is usually the easier door-to-door option. Flying takes about an hour and a quarter in the air but adds roughly two hours of airport time at each end, so it saves little on the route.",
          },
        },
        {
          "@type": "Question",
          name: "How long do you need in Boston?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "One night is the minimum for a worthwhile visit: an afternoon on the Freedom Trail and an evening in the North End, then a morning for Beacon Hill, the Public Garden or Cambridge. Two nights lets you slow down.",
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
        { href: "boston.html", label: "Boston" },
      ],
      heroImage: "boston-skyline.webp",
      heroAlt: "The Boston skyline at dusk across the Charles River, with Back Bay towers reflected in the water",
      eyebrowText: "Overnight · Massachusetts",
      h1: "Boston from New York",
      lead: "Three and a half to four hours each way, which makes Boston the trip on this list that most deserves a night. Come for the Freedom Trail and the North End, stay for a morning in Beacon Hill, and take the train home unhurried.",
      heroMeta: ["Amtrak 3 h 30–4 h 15", "One night minimum", "About 8 h of travel", "Best Fri–Sun"],
      facts: [
        { label: "Journey time", value: "3 h 40–4 h 15 on Amtrak; 3 h 30 on Acela" },
        { label: "Round trip", value: "$80–$250 by train; $100–$300 to fly" },
        { label: "Time needed", value: "One night minimum" },
        { label: "Best day", value: "Friday–Sunday" },
        { label: "Day-trip verdict", value: "Not really — about eight hours of travel" },
      ],
      introEyebrow: "The honest answer",
      introTitle: "The city that punishes a day trip",
      introLead:
        "Boston is a compact, walkable city with a genuinely great historic core. It is also about four hours away, which means a same-day visit spends about eight hours on a train for four or five hours on the ground. Stay the night and the arithmetic works.",
      introParagraphs: [
        "With an afternoon and a morning you can walk the Freedom Trail from Boston Common through Beacon Hill to the North End, eat properly, and still have time for the Public Garden or a short trip to Cambridge. That is the version of Boston that makes sense from New York.",
        "The train is the civilised way to do it. It leaves from Penn Station and arrives at South Station or Back Bay, both within a walk or short ride of the centre. Flying is about an hour and a quarter in the air, but with roughly two hours of airport time at each end it rarely saves anything.",
      ],
      callouts: [
        {
          icon: "◆",
          title: "Book the return train when you book the outward one",
          text: "Friday and Sunday services fill first. Buy both legs at the same time while the fares are low.",
        },
        {
          icon: "◷",
          title: "One night, two half-days",
          text: "Arrive early afternoon and leave late morning two days later and you get two full half-days.",
        },
      ],
      transportTitle: "Getting there: train or plane",
      transportLead:
        "Amtrak runs direct from Penn Station to South Station and Back Bay. Flying is quicker in the air and slower door to door.",
      transportCaption: "New York to Boston transport options, fares checked November 2026",
      transportRows: [
        [
          "<strong>Amtrak Northeast Regional</strong>",
          "3 h 40–4 h 15",
          "$80–$250",
          "Direct from Moynihan Train Hall. The cheapest advance fares go first, and the early trains arrive in time for lunch in the North End.",
        ],
        [
          "<strong>Amtrak Acela</strong>",
          "3 h 30",
          "check current fares",
          "Slightly faster than the Regional with fewer stops. Worth comparing if you are travelling at a busy time; check current fares and schedules before booking.",
        ],
        [
          "<strong>Flight</strong>",
          "about 1 h 15 in the air",
          "$100–$300",
          "Add roughly two hours for airport transfers and security at each end. Usually slower door to door than the train, and rarely cheaper once bags and transfers are counted.",
        ],
      ],
      transportNote:
        "Journey times and fares are approximate and were checked in November 2026. Fares are dynamic — check current fares and schedules for both Amtrak and flights before booking.",
      highlightsTitle: "What the day is really about",
      highlightsLead:
        "Boston is small enough to walk and old enough to reward looking up. These four cover the historic core without turning the visit into a march.",
      highlights: [
        {
          kicker: "The trail",
          title: "The Freedom Trail",
          text: "A painted line through the city linking the historic sites, from Boston Common through the old State House and on to the North End. Walk it in one direction rather than doubling back.",
        },
        {
          kicker: "Neighbourhood",
          title: "Beacon Hill",
          text: "Brick sidewalks, gas lamps and narrow streets above the Common. Acorn Street is the photograph everyone takes; the side streets around Louisburg Square are the reason to linger.",
        },
        {
          kicker: "Green",
          title: "Boston Common and the Public Garden",
          text: "The two parks at the centre of the city, one formal and one plain. The Public Garden's pond and bridge are the calmest half-hour in downtown Boston.",
        },
        {
          kicker: "Food",
          title: "The North End",
          text: "Boston's Italian neighbourhood, with pastry shops, trattorias and the Paul Revere House. It is the best place in the city to eat, and busiest between noon and two.",
        },
      ],
      dayTitle: "A realistic Boston overnight",
      dayLead:
        "One night, two half-days: the version of Boston that fits the journey. Times are indicative — check current train schedules before you book.",
      dayStops: [
        {
          time: "08:00",
          title: "Train from Penn Station",
          text: "An early Amtrak from Moynihan Train Hall; the fastest services take around three and a half hours to South Station or Back Bay.",
        },
        {
          time: "12:30",
          title: "Arrive and eat",
          text: "Drop the bag at the hotel and have lunch near the Common or in the North End. Do not start with a museum — the walking is the point.",
        },
        {
          time: "13:30",
          title: "The Freedom Trail",
          text: "Walk from Boston Common through Beacon Hill to the old State House and down towards the waterfront, following the painted line.",
        },
        {
          time: "16:00",
          title: "The North End",
          text: "Paul Revere House, the old streets and a pastry. This is the neighbourhood to slow down in rather than tick off.",
        },
        {
          time: "19:30",
          title: "Dinner in the North End",
          text: "Book somewhere small and Italian, or take a chance on a trattoria with a queue. It is the most Boston evening available.",
        },
        {
          time: "Day 2, 09:30",
          title: "Public Garden, then the train home",
          text: "A morning walk through the Public Garden, Beacon Hill or Cambridge, an early lunch, and an afternoon train back to New York.",
        },
      ],
      tips: [
        {
          icon: "◆",
          title: "Do not attempt this as a day trip",
          text: "Eight hours of travel for four hours in the city is a poor exchange. One night doubles the usable time.",
        },
        {
          icon: "◷",
          title: "Walk the trail early",
          text: "The Freedom Trail is busiest from late morning. Start at the Common around nine and you will have Beacon Hill's streets almost to yourself before the groups arrive.",
        },
        {
          icon: "☂",
          title: "Stay near the centre",
          text: "A hotel within walking distance of the Common, Back Bay or South Station saves a day of subway fares and keeps the trip feeling small, which is Boston's advantage over New York.",
        },
      ],
      otherTitle: "Other day trips",
      otherLead: "If you have a night to spend, these are the other trips worth it.",
      otherTrips: [
        {
          href: "philadelphia.html",
          kicker: "Day trip",
          title: "Philadelphia",
          text: "The easy one: Independence Hall, the Liberty Bell and Reading Terminal Market in a single day.",
        },
        {
          href: "washington-dc.html",
          kicker: "Long day",
          title: "Washington, D.C.",
          text: "The Mall, the Capitol and the free Smithsonian museums, three hours down the corridor.",
        },
        {
          href: "niagara-falls.html",
          kicker: "Overnight",
          title: "Niagara Falls",
          text: "The falls, Maid of the Mist and the Canadian side, nine hours from Penn Station on a once-daily train.",
        },
      ],
      source: "boston",
      faq: [
        {
          q: "Is Boston a good day trip from New York?",
          a: "<p>Not really. The fastest trains take about three and a half hours, so a same-day return means roughly eight hours of travel for four or five hours in the city. Stay one night at least.</p>",
        },
        {
          q: "Should I take the train or fly to Boston?",
          a: "<p>The train is usually easier door to door. Flying takes about an hour and a quarter in the air, but the airport time at each end adds up to roughly two hours. The train also puts you in the middle of the city.</p>",
        },
        {
          q: "How long do you need in Boston?",
          a: "<p>One night is the minimum: an afternoon on the Freedom Trail and an evening in the North End, then a morning in Beacon Hill or Cambridge. Two nights lets you add a museum or a waterfront walk.</p>",
        },
        {
          q: "When is the best time to visit Boston?",
          a: "<p>Friday to Sunday for a weekend away, or a weekday for calmer streets and cheaper trains. Check current fares and schedules before booking.</p>",
        },
      ],
      prev: { href: "washington-dc.html", label: "Washington, D.C." },
      next: { href: "niagara-falls.html", label: "Niagara Falls" },
    }),
};
