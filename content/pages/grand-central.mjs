import { renderAttractionPage } from "../attraction-template.mjs";

const faq = [
  {
    q: "Is Grand Central Terminal free to visit?",
    a: "<p>Yes. The concourse and the public areas of the terminal are free to enter. The official Grand Central Tour is a paid extra, and the shops and restaurants are normal businesses.</p>",
  },
  {
    q: "What are the opening hours?",
    a: "<p>The terminal runs from about 5.15am to 2am daily. Check the official site for current hours before an early-morning or late-night visit, since access can change with maintenance and events.</p>",
  },
  {
    q: "Is the Whispering Gallery real?",
    a: "<p>Yes. The acoustics under the low arch by the Oyster Bar carry a whisper from one corner to the opposite one. It works best when the terminal is relatively quiet.</p>",
  },
  {
    q: "Are there tours of Grand Central?",
    a: "<p>There is an official Grand Central Tour of about 60 to 75 minutes, from around $35, booked online. A self-guided audio tour also exists; check the official site for its current price and schedule.</p>",
  },
  {
    q: "When is the quietest time to visit?",
    a: "<p>Before 8am on a weekday is the calmest, with the best light through the windows. Avoid 5pm to 6.30pm, when the commuter rush fills the concourse.</p>",
  },
];

export default {
  path: "grand-central.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "Grand Central Terminal: Hours, Tours and Tips",
  description:
    "Inside Grand Central Terminal: what to see in the free concourse, the Whispering Gallery, official tours and the quietest hours for photographs.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/grand-central.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Grand Central Terminal",
      description:
        "Beaux-Arts commuter terminal in Midtown Manhattan, free to enter, with the main concourse, its astronomical ceiling, the Whispering Gallery and a dining concourse.",
      url: "https://nyctrove.com/grand-central.html",
      image: "https://nyctrove.com/assets/img/grand-central.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "89 East 42nd Street",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10017",
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
      heroImage: "grand-central.webp",
      heroAlt: "The main concourse of Grand Central Terminal with its celestial ceiling",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "grand-central.html", label: "Grand Central" },
      ],
      eyebrowText: "Attraction · Midtown East",
      h1: "Grand Central Terminal, beyond the photograph",
      lead: "Grand Central is a working commuter terminal, a Beaux-Arts landmark and free to walk into. Most visitors take the ceiling photograph and leave; an hour spent properly is one of the best-value experiences in Midtown.",
      heroMeta: ["Midtown East", "Free", "45–90 minutes", "Open daily"],
      facts: [
        { label: "Entry", value: "Free; the concourse is a public space" },
        { label: "Hours", value: "5.15am–2am daily; check the official site for current hours" },
        { label: "Time needed", value: "45–90 minutes" },
        { label: "Best time", value: "Weekday before 8am or after 7pm" },
        { label: "Nearest subway", value: "Grand Central–42 St (4/5/6/7/S)" },
        { label: "Paid extra", value: "Official Grand Central Tour, from around $35" },
      ],
      mapId: "grand-central",
      introImage: "times-square-day.webp",
      introImageAlt: "Times Square in daylight, a few blocks from Grand Central",
      introEyebrow: "The terminal",
      introTitle: "A cathedral built for commuters",
      introLead:
        "The main concourse is the reason people come, and the ceiling is the reason they look up: an astronomical mural painted over a space designed to move thousands of people an hour without them noticing each other.",
      introParagraphs: [
        "Walk in from 42nd Street, stand in the middle and look up. Then find the Whispering Gallery under the arch by the Oyster Bar, where a whisper in one corner carries to the opposite corner. The information booth clock in the centre is the meeting point every New Yorker uses.",
        "The terminal is free to enter and open from early morning to late night. The dining concourse below has food from many counters, and the Metro-North ticket machines are on the lower level, which is useful if you are heading to the Hudson Valley or Connecticut. It is a short walk from <a href=\"top-of-the-rock.html\">Top of the Rock</a> and directly below <a href=\"summit-one-vanderbilt.html\">SUMMIT One Vanderbilt</a>, so it slots easily into a Midtown day.",
      ],
      reasonsEyebrow: "Why go",
      reasonsTitle: "Three reasons to spend an hour here rather than pass through",
      reasonsLead: "The room, the acoustics and the price.",
      reasons: [
        {
          title: "The ceiling is worth the detour",
          text: "The astronomical mural and the tall windows at either end make the concourse one of the great rooms of the city. It costs nothing to stand in it.",
        },
        {
          title: "The Whispering Gallery",
          text: "Under the low arch by the Oyster Bar, the acoustics carry a whisper from one corner to the other. It works best when the terminal is quiet.",
        },
        {
          title: "An easy free hour in Midtown",
          text: "It is free, central and open late, which makes it the ideal filler between two booked attractions or a shelter from the rain.",
        },
      ],
      bookingTitle: "How to visit Grand Central",
      bookingLead:
        "The concourse needs no ticket. The only thing worth booking is the official tour, which runs for about an hour and is best done in the morning.",
      bookingSteps: [
        "Walk in through the main doors on 42nd Street at Park Avenue, or come up from the subway straight into the concourse.",
        "Check the official site for current opening hours before a late-night or early-morning visit; the terminal effectively runs from 5.15am to 2am.",
        "Book the official Grand Central Tour online if you want the history explained and access to parts of the building. It runs 60 to 75 minutes and is from around $35; check the current price and schedule on the official site.",
        "Visit the Whispering Gallery under the arch by the Oyster Bar and try the acoustic trick corner to corner.",
        "Avoid 5pm to 6.30pm on a weekday if you want photographs of the concourse without commuters in every frame.",
      ],
      bookingNote:
        "The concourse is free and always busy. Early morning is the quietest time to photograph the ceiling, and the light through the windows is best before the sun is high.",
      official: {
        title: "The terminal's official site",
        text: "The concourse is free to enter. The official site lists opening hours, the paid Grand Central Tour and what is happening in Vanderbilt Hall. Use it rather than a third-party tour seller.",
        url: "https://grandcentralterminal.com",
        cta: "Plan your visit",
        note: "Official terminal site. The building is free; the tour is a paid extra.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Come before 8am for photographs",
          text: "The concourse is at its calmest early on a weekday. By 9am the commuter tide is in and clear shots of the room are difficult.",
        },
        {
          title: "Find the Whispering Gallery",
          text: "It is the low arch by the Oyster Bar on the lower level. Stand in one corner and speak towards the wall; someone in the opposite corner hears you clearly.",
        },
        {
          title: "Skip the rush hour",
          text: "Weekdays from 5pm to 6.30pm are the busiest. If you are only passing through that is fine, but if you want the room to yourself, come later.",
        },
        {
          title: "The Oyster Bar is closed on Sundays",
          text: "The famous Oyster Bar does not open on Sundays. The dining concourse has other counters, but check times before you rely on it for a meal.",
        },
      ],
      tipsImage: "broadway-marquee.webp",
      tipsImageAlt: "A Broadway street sign and billboards in the Theatre District, near Grand Central",
      nearby: [
        {
          href: "top-of-the-rock.html",
          image: "manhattan-skyline-night.webp",
          alt: "Midtown Manhattan and the Empire State Building lit at night",
          kicker: "Five minutes away",
          title: "Top of the Rock",
          text: "The deck with the Empire State in view. Pair it with an early Grand Central visit.",
          meta: "Observation deck",
        },
        {
          href: "summit-one-vanderbilt.html",
          image: "summit-vanderbilt.webp",
          alt: "SUMMIT One Vanderbilt, the glass observation deck above Grand Central",
          kicker: "Next door",
          title: "SUMMIT One Vanderbilt",
          text: "The mirror-and-glass deck directly above the terminal, with timed entry.",
          meta: "Observation deck",
        },
        {
          href: "free-things-to-do-nyc.html",
          image: "staten-island-ferry.webp",
          alt: "The Staten Island Ferry with the Manhattan skyline behind it",
          kicker: "More free",
          title: "Free things to do in NYC",
          text: "Grand Central is one of the best free interiors in the city; here are the others.",
          meta: "Free guide",
        },
      ],
      source: "grand-central",
      faq,
      prev: { href: "moma.html", label: "MoMA" },
      next: { href: "high-line.html", label: "The High Line" },
    }),
};
