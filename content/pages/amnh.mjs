import { renderAttractionPage } from "../attraction-template.mjs";

const faq = [
  {
    q: "How much does the American Museum of Natural History cost?",
    a: "<p>General admission is from $28 for adults, or from $43 with one ticketed exhibition. Residents of New York, New Jersey and Connecticut can pay what they wish at the desk with proof of address. Prices are date-based, so confirm the total before you book.</p>",
  },
  {
    q: "How long should I allow for a visit?",
    a: "<p>Three to four hours covers the highlights, and half a day if you add a ticketed exhibition or the Gilder Center. The museum is large enough that four hours still means choosing what to skip.</p>",
  },
  {
    q: "Is the museum open every day?",
    a: "<p>It is open daily from 10am to 5.30pm, except Thanksgiving and 25 December. Check the official site for current hours, including the last entry time, which can be earlier than closing.</p>",
  },
  {
    q: "Which entrance should I use?",
    a: "<p>The 81st Street entrance is best by subway: the B and C station opens straight into the museum. The Central Park West entrance at 79th Street is the one to use if you are coming from the park or heading for the Rose Center.</p>",
  },
  {
    q: "Is it a good museum for children?",
    a: "<p>Yes — it is one of the best in the city for children. The dinosaur halls and the blue whale are the reliable hits, and the butterfly vivarium is worth the extra ticket if your group likes animals.</p>",
  },
];

export default {
  path: "amnh.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "American Museum of Natural History Guide",
  description:
    "What AMNH costs, which entrance to use, how long a visit really takes and the ticketed add-ons worth paying for on a New York trip.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/amnh-facade.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "American Museum of Natural History",
      description:
        "Natural history museum on Central Park West in Manhattan, with dinosaur halls, a blue whale, the Rose Center for Earth and Space and the Gilder Center.",
      url: "https://nyctrove.com/amnh.html",
      image: "https://nyctrove.com/assets/img/amnh-facade.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Central Park West at 79th Street",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10024",
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
      heroImage: "amnh-facade.webp",
      heroAlt: "The American Museum of Natural History on Central Park West",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "amnh.html", label: "AMNH" },
      ],
      eyebrowText: "Attraction · Upper West Side",
      h1: "A natural history museum that rewards a plan",
      lead: "The American Museum of Natural History is the rare museum that works for a mixed group: dinosaurs for the children, space for the adults, and a great building around both. A little planning is the difference between a half-day and a shuffle.",
      heroMeta: ["Upper West Side", "Half a day", "Timed tickets advised", "From $28"],
      facts: [
        { label: "Tickets", value: "From $28; from $43 with one exhibition" },
        { label: "Hours", value: "Daily 10am–5.30pm; closed Thanksgiving and 25 December" },
        { label: "Time needed", value: "3–4 hours" },
        { label: "Best time", value: "Weekday at opening" },
        { label: "Nearest subway", value: "81 St–Museum of Natural History (B/C)" },
        { label: "Entrances", value: "Central Park West at 79th Street, and 81st Street" },
      ],
      mapId: "amnh",
      introImage: "central-park-bow-bridge.webp",
      introImageAlt: "Bow Bridge in Central Park, a short walk from the museum",
      introEyebrow: "The museum",
      introTitle: "Four floors, one blue whale and a plan",
      introLead:
        "The museum is enormous, and the usual mistake is to treat it as one collection to be finished. It is better understood as four or five museums stacked together, each of which could fill an afternoon on its own.",
      introParagraphs: [
        "Start with what your group actually came for. For most visitors that is the dinosaur halls upstairs, the blue whale suspended in the ocean hall, and the Rose Center for Earth and Space at the Central Park West end. Choose two of those three and the day stays enjoyable; try to do all of them properly and you will be walking past exhibits rather than looking at them.",
        "The museum sits on the edge of <a href=\"central-park.html\">Central Park</a> and is easy to combine with a park walk, but not with another big museum. If you have booked <a href=\"met-museum.html\">The Met</a> for the same day, move one of them: this visit alone takes three to four hours, and the walk along the park is the nicest way to finish.",
      ],
      reasonsEyebrow: "Why go",
      reasonsTitle: "Three reasons to give it a whole morning",
      reasonsLead: "The dinosaur halls, the newest wing and a building worth looking up for.",
      reasons: [
        {
          title: "Dinosaurs, done properly",
          text: "The fossil halls are the reason many people come, and they hold up. Give them an hour at the start of the day, before tired legs and lunch, rather than saving them for the end.",
        },
        {
          title: "The Gilder Center changed the visit",
          text: "The newest wing adds another layer, with the butterfly vivarium and Invisible Worlds as ticketed add-ons. If you want one paid extra, this is the one children remember.",
        },
        {
          title: "A building to look up in",
          text: "The Rose Center's glass sphere and the museum's stone facade are part of the experience. Even on a rainy day, the walk in from Central Park West is worth taking slowly.",
        },
      ],
      bookingTitle: "How to book AMNH and get in",
      bookingLead:
        "General admission is timed, and the popular slots go first at weekends and in school holidays. Book before you travel and the rest of the visit is straightforward.",
      bookingSteps: [
        "Book a timed general-admission ticket on amnh.org for the day you want, ideally the first slot after opening.",
        "Add one ticketed exhibition only. The Space Show, the Butterfly Vivarium and Invisible Worlds are the three worth choosing between, and admission with one exhibition is from $43.",
        "If you live in New York, New Jersey or Connecticut, bring photo ID. Residents pay what they wish at the desk rather than the full online price.",
        "Use the 81st Street entrance if you arrive by subway: the B and C station opens into the museum, which usually saves the queue at Central Park West.",
        "Expect an airport-style bag check at the door, so leave large luggage at the hotel and allow extra time on arrival.",
      ],
      bookingNote:
        "Weekend afternoons and rainy days are the busiest. If your dates are fixed, book the earliest slot and go straight to the dinosaurs before the halls fill.",
      official: {
        title: "Book on the museum's own site",
        text: "Tickets, timed entry and the ticketed exhibitions are sold through amnh.org. Buying direct keeps you clear of resale mark-ups and lets you add an exhibition at the same time as admission.",
        url: "https://www.amnh.org/plan-your-visit",
        cta: "Plan your visit at amnh.org",
        note: "Official museum site. Prices are date-based; check the total before you pay.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Cover two floors, not four",
          text: "Three to four hours is realistic. Pick the dinosaurs, the ocean hall and the Rose Center, then leave. The museum will still be there next time.",
        },
        {
          title: "The 81st Street door is the quiet one",
          text: "The subway entrance on 81st Street opens into the building. Most tour groups arrive at Central Park West, so the side door saves ten minutes.",
        },
        {
          title: "One add-on is enough",
          text: "The Space Show, the Butterfly Vivarium and Invisible Worlds each cost extra. Decide before you arrive; choosing at the ticket desk costs time and often the slot you wanted.",
        },
        {
          title: "Go early or accept the crowd",
          text: "Weekday mornings are calm until about 11.30am. After that, school groups and rainy-day crowds arrive and the popular halls slow to a crawl.",
        },
      ],
      tipsImage: "central-park-nyc.webp",
      tipsImageAlt: "Central Park's paths and trees beside the museum on the Upper West Side",
      nearby: [
        {
          href: "met-museum.html",
          image: "central-park-nyc.webp",
          alt: "Central Park's trees and paths, between the Upper West and Upper East Sides",
          kicker: "Across the park",
          title: "The Met",
          text: "The other great museum on the park. Do not attempt both in one day: pick one and give it a proper morning.",
          meta: "Museum Mile",
        },
        {
          href: "central-park.html",
          image: "central-park-bow-bridge.webp",
          alt: "Bow Bridge in Central Park",
          kicker: "Next door",
          title: "Central Park",
          text: "Leave by the 79th Street entrance and walk south to Bethesda Terrace and the Bow Bridge.",
          meta: "Free",
        },
        {
          href: "manhattan.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Neighbourhood",
          title: "The Upper West Side",
          text: "Where to eat, walk and stay around the museum, from Lincoln Center to the park.",
          meta: "Borough guide",
        },
      ],
      source: "amnh",
      faq,
      prev: { href: "attractions.html", label: "All attractions" },
      next: { href: "met-museum.html", label: "The Met" },
    }),
};
