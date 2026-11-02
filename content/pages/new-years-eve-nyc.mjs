import { renderSeasonalPage } from "../seasonal-template.mjs";

const path = "new-years-eve-nyc.html";

export default {
  path,
  navSection: "plan",
  bodyClass: "page-inner",
  title: "New Year's Eve in NYC — Times Square Guide",
  description:
    "New Year's Eve in New York: how the Times Square ball drop works, how early to arrive, what security means in practice, and the calmer ways to see midnight.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/times-square-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "New Year's Eve in NYC — Times Square Guide",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
  ],
  render: () =>
    renderSeasonalPage({
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "whats-on.html", label: "What's On" },
        { href: path, label: "New Year's Eve" },
      ],
      heroImage: "times-square-night.webp",
      heroAlt: "Times Square's billboards glowing above a crowded street at night",
      eyebrowText: "Seasonal guide · New Year's Eve",
      h1: "New Year's Eve in New York",
      lead: "The ball drop is free, famous and genuinely demanding: hours of standing, security screening and no easy way out. Deciding whether that trade is worth it for you is the whole planning task. Here is what each version of the night actually involves.",
      heroMeta: ["31 December", "Ball drops at 11:59pm", "Free, no tickets", "Arrive early afternoon"],
      facts: [
        { label: "When", value: "31 December, ball at 11:59pm" },
        { label: "Where", value: "Times Square, Broadway and Seventh Avenue" },
        { label: "Cost", value: "Free; no tickets, first come first served" },
        { label: "Security", value: "Screening; no large bags or alcohol" },
        { label: "Weather", value: "45°F / 34°F average; 11.4 wet days" },
      ],
      introEyebrow: "The short version",
      introTitle: "What the ball drop really asks of you",
      introLead:
        "The Times Square celebration is not a show with a start time. It is a viewing pen you enter in the afternoon and stay in until midnight, with security screening on the way in and no re-entry if you leave.",
      introParagraphs: [
        "The ball drops at 11:59pm on 31 December, and the event is free with no tickets. In practice that means first come, first served: the earlier you arrive, the closer you get, and the longer you stand. Most people aim for early afternoon, which gives six or more hours on your feet in winter temperatures. Security screening is thorough — large bags and alcohol are not allowed — and once you are inside the viewing area, leaving usually means not getting back in.",
        "There are no seats, few toilets and limited food inside the pens, so treat the evening as an expedition: eat properly beforehand, carry only what you can keep on your body, and decide in advance where you will go afterwards. The official event information and the current entry rules are published by <a href=\"https://www.timessquarenyc.org/\" rel=\"nofollow noopener\" target=\"_blank\">Times Square NYC</a>; check them in the week before, because the arrangements change with the weather and with security advice.",
      ],
      introImage: "broadway-theatre-night.webp",
      introImageAlt: "Theatre marquees and billboards on Broadway at night",
      mapId: "times-square",
      highlightsTitle: "Three ways to spend midnight",
      highlightsLead:
        "The ball drop is one option, not the only one. Pick the version that matches how much standing and cold you are prepared to trade for the atmosphere.",
      highlights: [
        {
          kicker: "01",
          title: "Inside the pens",
          text: "Free, no tickets, and the full Times Square experience: screens, performances, countdown and the ball. Arrive in the early afternoon, pass security, and accept that you will stand for hours in the cold.",
        },
        {
          kicker: "02",
          title: "A seat with a view",
          text: "Bars, restaurants and hotels around Midtown sell New Year's Eve packages with a table, a meal and a screen. It costs money and is booked months ahead, but it removes the standing, the cold and the exit problem.",
        },
        {
          kicker: "03",
          title: "Somewhere else entirely",
          text: "A neighbourhood restaurant, a Brooklyn bar or a friend's apartment is how most people who live here see midnight. New York is a city of small celebrations on 31 December, and the atmosphere does not depend on Times Square.",
        },
      ],
      planTitle: "Planning the night",
      planLead:
        "Decide between the pens and a booking first. That choice determines when you eat, where you stand and how you get home.",
      planSteps: [
        "Choose your version of the night before you book anything: viewing pens, a paid table, or a low-key local celebration. Each has a different cost in money, comfort and time.",
        "If you want the pens, arrive in the early afternoon and expect security screening. Bring ID, wear layers and keep bags small; alcohol and large bags are not allowed.",
        "Eat a proper meal before you go in, and carry water and a snack you can keep in a pocket. Food and toilets inside the viewing areas are limited.",
        "Plan your exit before midnight. Know which subway lines you will use, which station entrances are open, and how far you are willing to walk to avoid the worst of the crowd.",
        "If you are booking a table or a hotel package, reserve four to six months ahead and read the terms: many packages are prepaid and non-refundable.",
      ],
      tips: [
        {
          icon: "◆",
          title: "Warmth is the whole game",
          text: "You may be outside for six hours in temperatures around 34–45°F. Thermal layers, a hat, gloves, thick socks and waterproof boots make the difference between an experience and an ordeal.",
        },
        {
          icon: "☂",
          title: "Expect to be searched",
          text: "Security screening applies at the entry points. Large bags, alcohol and anything that slows the queue are refused. Travel with a phone, ID, a card and a little cash.",
        },
        {
          icon: "◷",
          title: "Book the way home",
          text: "Midnight in Midtown is not the moment to improvise. Decide on a route, accept that some station entrances close, and be ready to walk several blocks before you can get on a train.",
        },
      ],
      localTitle: "How locals see midnight",
      localTips: [
        {
          title: "Most people stay out of Times Square",
          text: "The ball drop is a once-in-a-lifetime thing for visitors and a thing to avoid for most residents. That is not cynicism; it is a realistic guide to how much of the city experiences 31 December.",
        },
        {
          title: "Book the ordinary restaurant",
          text: "Neighbourhood restaurants outside Midtown often run a special menu without the Times Square markup. Book ahead, expect a set menu, and you get a table, a meal and midnight without the standing.",
        },
        {
          title: "Use the first hours of January",
          text: "New Year's Day is quiet in the morning and the perfect time for a park walk or a late breakfast. Museums and attractions return to normal hours within a day or two, and hotels empty out.",
        },
      ],
      localImage: "midtown-aerial-night.webp",
      localImageAlt: "Midtown Manhattan's grid of streets lit up at night from above",
      relatedTitle: "Before and after",
      relatedLead: "Christmas week runs straight into New Year's Eve, and January brings the cheapest month of the year.",
      related: [
        {
          href: "christmas-in-nyc.html",
          image: "fifth-avenue-cab.webp",
          alt: "A yellow taxi on Fifth Avenue in winter",
          kicker: "December",
          title: "Christmas in New York",
          text: "Tree, windows, skating and the quiet weeks either side of the holiday.",
          meta: "8 min read",
        },
        {
          href: "restaurant-week-nyc.html",
          image: "nyc-pizza-slice.webp",
          alt: "A slice of New York pizza on a paper plate",
          kicker: "January",
          title: "NYC Restaurant Week",
          text: "Prix-fixe menus at $30, $45 and $60, twice a year.",
          meta: "Value guide",
        },
        {
          href: "whats-on.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Calendar",
          title: "What's on in New York",
          text: "The six seasonal guides and the dates that shape the year.",
          meta: "Hub",
        },
      ],
      faqTitle: "New Year's Eve questions",
      faq: [
        {
          q: "Do I need tickets for the Times Square ball drop?",
          a: "<p>No. The event is free and unticketed. Admission is first come, first served, so the earlier you arrive the better your position. Expect security screening and be prepared to stand for several hours.</p>",
        },
        {
          q: "How early should I arrive?",
          a: "<p>Early afternoon is the practical answer. The viewing areas fill through the day, and arriving after dark usually means watching from further back or not getting in at all. Bring layers for the wait.</p>",
        },
        {
          q: "Can I bring a bag or alcohol?",
          a: "<p>Large bags and alcohol are not allowed, and all entrants pass through security screening. Carry only what you need — phone, ID, a card and a little cash — and wear the warmest layers you have.</p>",
        },
        {
          q: "What time is the ball drop?",
          a: "<p>The ball drops at 11:59pm on 31 December, with the countdown to midnight. The surrounding programme runs through the evening, but the atmosphere builds from late afternoon as the pens fill.</p>",
        },
        {
          q: "Are there calmer alternatives?",
          a: "<p>Yes. A booked table at a Midtown bar or restaurant, a neighbourhood restaurant away from Times Square, or a small celebration in Brooklyn all mark midnight without the standing and the crush. Many hotels and venues sell packages, usually booked months in advance.</p>",
        },
      ],
      source: "new-years-eve",
      prev: { href: "christmas-in-nyc.html", label: "Christmas in NYC" },
      next: { href: "restaurant-week-nyc.html", label: "NYC Restaurant Week" },
    }),
};
