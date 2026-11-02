import { renderDayTripPage } from "../day-trip-template.mjs";

export default {
  path: "hudson-valley.html",
  navSection: "plan",
  bodyClass: "page-inner",
  title: "Hudson Valley Day Trip from New York",
  description:
    "A Hudson Valley day trip from New York: Metro-North trains to Beacon and Cold Spring, Dia Beacon, Storm King Art Center, costs and a realistic plan.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/hudson-valley.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Hudson Valley Day Trip from New York — The Complete Guide",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can you visit the Hudson Valley as a day trip from New York?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Metro-North trains from Grand Central reach Beacon in about an hour and twenty minutes, which makes Dia Beacon, Main Street and Storm King Art Center possible in a day.",
          },
        },
        {
          "@type": "Question",
          name: "Do you need a car for a Hudson Valley day trip?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not for Beacon or Cold Spring. Storm King Art Center is a short taxi or seasonal shuttle ride from Beacon station, so check current options if you are relying on public transport.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to visit the Hudson Valley?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A weekday or Saturday, when the trains and galleries are calmer. Storm King Art Center is open from April to November, so check opening dates before planning a winter visit.",
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
        { href: "hudson-valley.html", label: "Hudson Valley" },
      ],
      heroImage: "hudson-valley.webp",
      heroAlt: "Trees and a stone wall reflected in a pond in the Hudson Valley",
      eyebrowText: "Day trip · Hudson Valley",
      h1: "The Hudson Valley in a day",
      lead: "The easiest day out of New York that is not a city: eighty minutes up the Hudson Line to Beacon, with a contemporary art museum, a sculpture park and a good Main Street waiting at the end of the platform.",
      heroMeta: ["Metro-North 1 h 20", "One full day", "No car needed", "Best weekday or Saturday"],
      facts: [
        { label: "Journey time", value: "1 h 20–1 h 30 from Grand Central to Beacon" },
        { label: "Round trip", value: "About $35–$55 peak/off-peak; check current fares" },
        { label: "Time needed", value: "One full day" },
        { label: "Best day", value: "Weekday or Saturday" },
        { label: "Season", value: "Storm King Art Center open April–November" },
      ],
      introEyebrow: "Why the Hudson Valley",
      introTitle: "The city limits, eighty minutes out",
      introLead:
        "Hudson Valley is the day trip for when you want a landscape rather than another skyline. The train from Grand Central follows the river north, and Beacon station is close enough to the galleries and Main Street that you can walk off the platform and start.",
      introParagraphs: [
        "Main Street Beacon, with the restaurants, coffee and shops you want for lunch, sits between the museum and the station. If you have done Dia and Storm King before, continue north to Cold Spring, a smaller village with antique shops and the Hudson Highlands trailheads. The whole day needs no car: buy a Metro-North ticket before boarding, check the last sensible train back, and the only decision left is how long to give Storm King.",
      ],
      callouts: [
        {
          icon: "◆",
          title: "Check Storm King's season",
          text: "Storm King Art Center is open from April to November and is a short taxi or seasonal shuttle ride from Beacon station. Check current opening dates and transport options before you plan the day around it.",
        },
        {
          icon: "◷",
          title: "Grand Central, not Penn Station",
          text: "Metro-North leaves from Grand Central Terminal; Amtrak leaves from Penn Station. They are not interchangeable, and the difference is a missed train.",
        },
      ],
      transportTitle: "Getting there: the Hudson Line",
      transportLead:
        "Metro-North runs from Grand Central Terminal along the east bank of the Hudson. Beacon is the practical stop for Dia Beacon and Main Street; Cold Spring is one further for the village and the trails.",
      transportCaption: "New York to the Hudson Valley transport options, fares checked November 2026",
      transportRows: [
        [
          "<strong>Metro-North to Beacon</strong>",
          "1 h 20–1 h 30",
          "about $35–$55 peak/off-peak",
          "Direct from Grand Central; the simplest way to Dia Beacon and Main Street. Check current fares and schedules — peak and off-peak prices differ.",
        ],
        [
          "<strong>Metro-North to Cold Spring</strong>",
          "a little further north",
          "check current fares",
          "One or two stops beyond Beacon for the village, the waterfront and the start of the Hudson Highlands trails.",
        ],
        [
          "<strong>Taxi or shuttle to Storm King</strong>",
          "short local hop",
          "check current prices",
          "Storm King is a few miles from Beacon station and is served by a seasonal shuttle or taxi. Check current options before relying on it.",
        ],
      ],
      transportNote:
        "Journey times and fares are approximate and were checked in November 2026. Metro-North fares and Storm King's shuttle arrangements change — check current fares and schedules before you go.",
      highlightsTitle: "What the day is really about",
      highlightsLead:
        "Two art stops, one Main Street and, if you have the time, a village further up the river. Choose Dia and Storm King if it is your first visit.",
      highlights: [
        {
          kicker: "Art",
          title: "Dia Beacon",
          text: "Large-scale contemporary art in a converted factory beside the river. The scale of the building is as much of the experience as the work.",
        },
        {
          kicker: "Sculpture",
          title: "Storm King Art Center",
          text: "A sculpture park set into rolling hills, with works along paths and lawns rather than in rooms. Open April to November; allow at least two hours.",
        },
        {
          kicker: "Lunch",
          title: "Main Street, Beacon",
          text: "Coffee, bakeries, restaurants and small shops between the station and the river. It is where the day naturally pauses, and the reason Beacon works without a car.",
        },
        {
          kicker: "Village",
          title: "Cold Spring",
          text: "A smaller river town further north, with antique shops, a waterfront and hills behind it. Good for a second visit or when Dia is enough art for one day.",
        },
        {
          kicker: "Walking",
          title: "The Hudson Highlands",
          text: "Trails above the river, reached from Cold Spring and nearby stations. Check trail conditions and daylight before setting out.",
        },
      ],
      dayTitle: "A realistic Hudson Valley day",
      dayLead:
        "One full day from Grand Central, paced around two art stops and a long lunch. Times are indicative — check current train times before you go.",
      dayStops: [
        {
          time: "08:30",
          title: "Train from Grand Central",
          text: "Take a Hudson Line train north. Sit on the left-hand side for the river views once you leave the city.",
        },
        {
          time: "10:00",
          title: "Dia Beacon",
          text: "Walk from the station to the museum and give it two hours. Start upstairs and work down as the morning crowds spread out.",
        },
        {
          time: "12:30",
          title: "Lunch on Main Street",
          text: "Beacon's main street is a short walk from the station. Eat properly here — the next stop is a sculpture park with limited food.",
        },
        {
          time: "14:00",
          title: "Storm King Art Center",
          text: "Take a taxi or the seasonal shuttle from Beacon. Two hours across the grounds is a good first visit.",
        },
        {
          time: "17:00",
          title: "Back to Beacon",
          text: "Return to the station, get a coffee on Main Street and take an evening train back. Alternatively, continue north to Cold Spring if you have an early start and want the village.",
        },
      ],
      tips: [
        {
          icon: "◆",
          title: "Go on a weekday if you can",
          text: "The trains and galleries are calmer, and Storm King is a different place with a few hundred people rather than a few thousand.",
        },
        {
          icon: "◷",
          title: "Check Storm King twice",
          text: "Once for the season, once for the transport. It closes from November to March and the shuttle does not run all year.",
        },
        {
          icon: "☂",
          title: "Wear something you can walk in",
          text: "Storm King is a park, not a gallery, and the ground is uneven. Proper shoes change the experience here.",
        },
      ],
      otherTitle: "Other day trips",
      otherLead: "Three more ways out of the city, from the next state to nine hours up the line.",
      otherTrips: [
        {
          href: "philadelphia.html",
          kicker: "Day trip",
          title: "Philadelphia",
          text: "Independence Hall, the Liberty Bell and Reading Terminal Market in a single easy day.",
        },
        {
          href: "boston.html",
          kicker: "Overnight",
          title: "Boston",
          text: "The Freedom Trail, Beacon Hill and the North End, an easy train ride up the corridor.",
        },
        {
          href: "niagara-falls.html",
          kicker: "Overnight",
          title: "Niagara Falls",
          text: "The falls, Maid of the Mist and the Canadian side, on a train that runs once a day.",
        },
      ],
      source: "hudson-valley",
      faq: [
        {
          q: "Can you visit the Hudson Valley as a day trip from New York?",
          a: "<p>Yes, easily. Metro-North from Grand Central reaches Beacon in about an hour and twenty minutes, and Dia Beacon, Main Street and Storm King all fit into one day. Take an early train.</p>",
        },
        {
          q: "Do I need a car for a Hudson Valley day trip?",
          a: "<p>Not for Beacon or Cold Spring. Storm King is a few miles from Beacon station and is reached by taxi or a seasonal shuttle; check current options before relying on it.</p>",
        },
        {
          q: "What is the best day for a Hudson Valley day trip?",
          a: "<p>A weekday or Saturday. Weekdays are quietest; Saturdays have more going on in the villages. Check current fares and schedules.</p>",
        },
        {
          q: "Is the Hudson Valley worth visiting in winter?",
          a: "<p>Partly. Storm King closes from November to March, so a winter day is built around Dia Beacon and the villages. Check current opening days and train times.</p>",
        },
      ],
      prev: { href: "niagara-falls.html", label: "Niagara Falls" },
      next: { href: "day-trips.html", label: "All day trips" },
    }),
};
