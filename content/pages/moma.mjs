import { renderAttractionPage } from "../attraction-template.mjs";

const faq = [
  {
    q: "How much does MoMA cost?",
    a: "<p>Admission is $30 for adults, $22 for seniors and $17 for students. Visitors aged 16 and under are free. Prices can change, so check the official site when you book.</p>",
  },
  {
    q: "When is MoMA free?",
    a: "<p>UNIQLO Free Friday Nights run 5.30–8.30pm and are open to New York State residents only. The free ticket must be reserved in advance and cannot be passed to another visitor.</p>",
  },
  {
    q: "How long do I need at MoMA?",
    a: "<p>Two and a half to three and a half hours is realistic. The permanent collection is dense, so choose two or three floors rather than trying to cover all six.</p>",
  },
  {
    q: "Is MoMA open every day?",
    a: "<p>It is open daily from 10.30am to 5.30pm, with a late close at 8.30pm on Fridays. It closes on Thanksgiving and 25 December, and the galleries close 15 minutes before the museum does.</p>",
  },
  {
    q: "Can I bring a bag?",
    a: "<p>Coat check is compulsory for umbrellas and backpacks, and large bags are not allowed in the galleries. There is no luggage storage, so leave suitcases at your hotel.</p>",
  },
];

export default {
  path: "moma.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "MoMA: Tickets, Hours and the Smart Way In",
  description:
    "What MoMA costs, when it is quietest, how the free Friday night works and how to see the collection in three hours without rushing.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/moma-museum.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "Museum of Modern Art (MoMA)",
      description:
        "Modern art museum in Midtown Manhattan with a permanent collection spanning painting, sculpture, photography, design and film.",
      url: "https://nyctrove.com/moma.html",
      image: "https://nyctrove.com/assets/img/fifth-avenue-cab.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11 West 53rd Street",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10019",
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
      heroImage: "moma-museum.webp",
      heroAlt: "The facade of the Museum of Modern Art on West 53rd Street",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "attractions.html", label: "Things to Do" },
        { href: "moma.html", label: "MoMA" },
      ],
      eyebrowText: "Attraction · Midtown",
      h1: "MoMA in three hours, without the shuffle",
      lead: "MoMA holds the most famous modern art in the world in a building you can cross in ten minutes. The trick is not to try to see it all: three hours, a booked slot and a short list will leave you liking modern art more than when you arrived.",
      heroMeta: ["Midtown", "2.5–3.5 hours", "From $30", "Free Friday for NY residents"],
      facts: [
        { label: "Tickets", value: "From $30; visitors aged 16 and under free" },
        { label: "Hours", value: "Daily 10.30am–5.30pm; Friday until 8.30pm" },
        { label: "Closed", value: "Thanksgiving and 25 December" },
        { label: "Time needed", value: "2.5–3.5 hours" },
        { label: "Best time", value: "Weekday at opening, or Friday after 6pm" },
        { label: "Nearest subway", value: "5 Av/53 St (E/M)" },
      ],
      mapId: "moma",
      introImage: "midtown-aerial-night.webp",
      introImageAlt: "Midtown Manhattan seen from above at night",
      introEyebrow: "The collection",
      introTitle: "The building is smaller than the reputation",
      introLead:
        "MoMA is often imagined as an enormous museum. It is not: it is six floors of dense, carefully chosen work, and much of it can be walked in a morning. The difficulty is deciding what to stop for.",
      introParagraphs: [
        "The paintings on the upper floors are what most people come for, and they are hung close together, so a single room can hold several works you have seen reproduced a hundred times. Give yourself permission to sit with a few rather than photograph all of them; the crowds move in waves and a quiet bench is usually nearby.",
        "Temporary exhibitions run through the year and are included in admission. If something is on that you care about, check the gallery order when you arrive and do that first, before the permanent-collection crowds build upstairs. The museum is a ten-minute walk from <a href=\"grand-central.html\">Grand Central</a> and a short hop from the <a href=\"top-of-the-rock.html\">Top of the Rock</a> deck, which makes it easy to pair with a Midtown day.",
      ],
      reasonsEyebrow: "Why go",
      reasonsTitle: "Three reasons it earns a place on a short trip",
      reasonsLead: "The famous works, the free Friday window and the best rainy-day hour in Midtown.",
      reasons: [
        {
          title: "The famous works, in person",
          text: "Van Gogh's Starry Night and the other images you know from books are hung in rooms that reward a slower look. Arrive early and head up before the school groups do.",
        },
        {
          title: "The free Friday night",
          text: "UNIQLO Free Friday Nights run 5.30–8.30pm for New York State residents only, and the free tickets must be reserved ahead. For everyone else, Friday after 6pm is still the quietest paid slot.",
        },
        {
          title: "A proper rainy-day museum",
          text: "When the weather turns, MoMA absorbs a wet afternoon better than most sights in Midtown: dense, indoor and a short walk from three subway lines.",
        },
      ],
      bookingTitle: "How to book MoMA and get in",
      bookingLead:
        "Admission is fixed-price and rarely discounted, but timed entry and the free Friday tickets do sell out. Book online and arrive at your slot.",
      bookingSteps: [
        "Book a timed ticket on moma.org for the day you want. The price matches the door, but the queue is shorter online.",
        "If you are a New York State resident visiting on a Friday night, reserve a free UNIQLO Friday Night ticket as soon as your date opens. The allocation runs out.",
        "Enter at 11 West 53rd Street. The line is split by ticket type, so follow the signs for timed entry rather than joining the longest queue.",
        "Check umbrellas and backpacks at the coat check, which is compulsory for large bags. Leave suitcases at the hotel.",
        "Start high and work down. The stairs are easier downhill, and the busiest rooms are calmer when you reach them out of sequence.",
      ],
      bookingNote:
        "Friday after 6pm is the best evening slot for people paying admission. The free night is for New York State residents only, and it is genuinely busy rather than a quiet local secret.",
      official: {
        title: "Book on the museum's own site",
        text: "Tickets, timed entry and the free Friday-night allocation are handled on moma.org. Third-party sellers add fees and cannot reserve a Friday slot for you.",
        url: "https://www.moma.org/visit/",
        cta: "Book at moma.org",
        note: "Official museum site. Admission prices checked November 2026; confirm on the day.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Arrive at 10.30, not at noon",
          text: "The first hour is the calmest. By midday the upper floors are crowded and the lifts queue, and the difference is worth setting an alarm for.",
        },
        {
          title: "Know what the free Friday actually is",
          text: "UNIQLO Free Friday Nights are for New York State residents only, 5.30–8.30pm, and tickets must be reserved ahead. If you are visiting from elsewhere, Friday evening is still quieter.",
        },
        {
          title: "Three hours is the right length",
          text: "The collection is dense enough that a fourth hour rarely adds much. Plan a coffee or a walk afterwards rather than pushing through the last floor.",
        },
        {
          title: "Check what is on before you go",
          text: "Temporary exhibitions are included and can change the order you should walk the building. Look at the current programme on the official site the week before.",
        },
      ],
      tipsImage: "skyline-window-view.webp",
      tipsImageAlt: "Midtown Manhattan rooftops seen through a tall window",
      nearby: [
        {
          href: "top-of-the-rock.html",
          image: "manhattan-skyline-night.webp",
          alt: "Midtown Manhattan and the Empire State Building lit at night",
          kicker: "Five minutes away",
          title: "Top of the Rock",
          text: "A timed deck slot pairs naturally with a morning at MoMA; book the sunset entry.",
          meta: "Observation deck",
        },
        {
          href: "grand-central.html",
          image: "grand-central.webp",
          alt: "The main concourse of Grand Central Terminal",
          kicker: "Walkable",
          title: "Grand Central Terminal",
          text: "Fifteen minutes east on foot, and free. Worth the detour for the ceiling alone.",
          meta: "Free",
        },
        {
          href: "attractions.html",
          image: "broadway-marquee.webp",
          alt: "A Broadway street sign and billboards in the Theatre District",
          kicker: "Evening",
          title: "Broadway and the Theatre District",
          text: "Book a show, or try TKTS on the day. The theatres start a few blocks west.",
          meta: "Things to do",
        },
      ],
      source: "moma",
      faq,
      prev: { href: "central-park.html", label: "Central Park" },
      next: { href: "grand-central.html", label: "Grand Central" },
    }),
};
