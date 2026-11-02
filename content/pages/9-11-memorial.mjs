import { renderAttractionPage } from "../attraction-template.mjs";

const faqItems = [
  {
    q: "Is the 9/11 Memorial free?",
    a: "<p>Yes. The memorial plaza is free and needs no ticket — it is open daily 08:00–20:00. The museum charges admission, from $24 depending on the date.</p>",
  },
  {
    q: "Do I need to book the museum in advance?",
    a: "<p>Advance timed tickets are required for the museum. Late arrivals are usually admitted but may queue, so pick a slot you can realistically reach.</p>",
  },
  {
    q: "How much time should I allow?",
    a: "<p>Official guidance is 45–90 minutes for the museum and 20–30 minutes for the plaza. Most visitors spend closer to two hours across both, and the museum is three floors underground, so it takes longer than it looks.</p>",
  },
  {
    q: "Is the museum suitable for children?",
    a: "<p>The museum deals directly with the attacks and their aftermath, and some galleries are difficult viewing for younger children. The plaza is open to all ages and is the gentler introduction to the site.</p>",
  },
  {
    q: "Is there a free day for New Yorkers?",
    a: "<p>Yes — New York residents can visit the museum free on Sundays 16:00–19:00 with proof of residence. The terms are set by the museum, so check its site before relying on the window.</p>",
  },
];

export default {
  path: "9-11-memorial.html",
  navSection: "attractions",
  bodyClass: "page-inner",
  title: "9/11 Memorial and Museum: Visiting Guide",
  description:
    "Visiting the 9/11 Memorial and Museum: free plaza open daily, museum tickets from $24, timed entry, closing days, quiet hours and how to approach the site.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/911-memorial.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: "9/11 Memorial & Museum",
      description:
        "Memorial plaza and museum at the World Trade Center site in Lower Manhattan, commemorating the attacks of 11 September 2001 and the 1993 bombing.",
      url: "https://nyctrove.com/9-11-memorial.html",
      image: "https://nyctrove.com/assets/img/911-memorial.webp",
      touristType: "Memorial",
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
        { href: "9-11-memorial.html", label: "9/11 Memorial & Museum" },
      ],
      heroImage: "911-memorial.webp",
      heroAlt: "The 9/11 Memorial plaza in Lower Manhattan with its reflecting pools and names",
      eyebrowText: "Memorial",
      h1: "9/11 Memorial & Museum",
      lead: "Two reflecting pools in the footprints of the Twin Towers, and a museum three floors beneath them. The plaza is free and open to anyone; the museum asks for time and attention as much as a ticket.",
      heroMeta: ["Memorial plaza free", "Museum from $24", "Lower Manhattan", "45–90 minutes"],
      facts: [
        { label: "Plaza", value: "Daily 08:00–20:00; free, no ticket needed" },
        { label: "Museum", value: "Wed–Mon 09:00–19:00, last entry 17:30; closed most Tuesdays" },
        { label: "Tickets", value: "Museum from $24–36 depending on the date" },
        { label: "Time needed", value: "20–30 minutes for the plaza; 45–90 minutes for the museum" },
        { label: "Best time", value: "Plaza before 10:00 or after 18:00; museum first hour or after 16:00" },
        { label: "Nearest subway", value: "Cortlandt St (R/W); WTC Cortlandt (1); Fulton St (2/3/4/5/A/C/J/Z)" },
      ],
      introImage: "one-wtc.webp",
      introImageAlt: "One World Trade Center rising above the World Trade Center site",
      mapId: "9-11-memorial",
      introEyebrow: "The visit",
      introTitle: "A memorial first, a museum second",
      introLead:
        "The plaza is the part most people see, and for many visitors it is enough. Two square pools sit in the towers' footprints, water falling into a void, with bronze panels carrying the names of those killed in the attacks of 11 September 2001 and the 1993 bombing.",
      introParagraphs: [
        "The museum is a different kind of place: it goes underground, into the foundations and the retaining walls, and asks you to move through the story in sequence. Allow more time than you think you need and do not book it just before something else.",
        "Because the site is active and the museum is below ground, everything is more scheduled than at a normal attraction. The plaza needs no ticket and can be walked through between other things; the museum needs a timed ticket, a bag check and a clear hour and a half.",
      ],
      reasonsEyebrow: "Why visit",
      reasonsTitle: "What the site gives you",
      reasonsLead: "This is not a stop to tick off between two others. These are the three parts worth planning around.",
      reasons: [
        {
          title: "The plaza, which costs nothing",
          text: "The twin pools and the names around them are free, open daily and accessible to anyone. Many visitors find the plaza more affecting than the museum, and it needs no preparation at all.",
        },
        {
          title: "The museum underground",
          text: "The collection is built around the surviving structure of the towers, the slurry wall and the last column, alongside personal objects and recordings. It is carefully made and genuinely difficult, which is the point.",
        },
        {
          title: "The context for Lower Manhattan",
          text: "One World Trade Center rises directly above, the harbour is a few minutes away and the Statue of Liberty ferry leaves from Battery Park. Seeing the site first makes the rest of the area read differently.",
        },
      ],
      bookingTitle: "Tickets, timed entry and the plaza",
      bookingLead: "The plaza and the museum are two separate visits with two separate rules.",
      bookingSteps: [
        "The <strong>memorial plaza</strong> needs no ticket and no booking. Walk in any day between 08:00 and 20:00.",
        "Book a <strong>timed museum ticket</strong> in advance on the official site. Prices run from $24 to $36 depending on the date.",
        "Pick a slot with <strong>nothing booked afterwards</strong>. The route through the museum takes 45–90 minutes by official guidance and longer if you read everything.",
        "Allow time for <strong>security screening</strong> at the museum entrance. Large bags are not permitted, so travel light.",
        "Check the <strong>closing day</strong>: the museum is closed most Tuesdays, though a few select Tuesdays open. Do not assume it runs seven days.",
      ],
      bookingNote:
        "The museum's opening pattern is not the same every week, and the New York resident free window on Sundays 16:00–19:00 has its own terms and ID requirement. Check the official site for current hours and conditions before you build a day around either.",
      official: {
        title: "9/11 Memorial & Museum — official tickets",
        text: "Timed museum admission, group tickets and the free New York resident window are handled by the memorial itself. The plaza needs no ticket at all, so there is nothing to buy for it.",
        url: "https://911memorial.org/visit",
        cta: "Plan your visit on 911memorial.org",
        note: "Official site. We take no commission on this link.",
      },
      tipsTitle: "What most visitors get wrong",
      tips: [
        {
          title: "Do not buy a plaza ticket",
          text: "The plaza is free and needs nothing. Anyone selling access to the memorial itself is selling something that does not exist.",
        },
        {
          title: "Go early or late",
          text: "The plaza is calmest before 10:00 and after 18:00. The museum is quietest in its first hour and after 16:00, when school groups have gone.",
        },
        {
          title: "Treat it as a memorial",
          text: "The pools are active memorials with names around them, not park features. Keep voices low, do not sit on the panels and give other visitors room.",
        },
        {
          title: "Check the free window properly",
          text: "New York residents can visit free on Sundays 16:00–19:00 with ID, but the terms are the museum's to change. Check before you plan an evening around it.",
        },
      ],
      tipsImage: "brooklyn-bridge-skyline.webp",
      tipsImageAlt: "The Brooklyn Bridge and Lower Manhattan seen across the water",
      nearby: [
        {
          href: "one-world-observatory.html",
          image: "one-wtc.webp",
          alt: "One World Trade Center and its observation deck above Lower Manhattan",
          kicker: "Observation deck",
          title: "One World Observatory",
          text: "The view from the top of the tower above the site. The natural complement to the museum.",
          meta: "From $51",
        },
        {
          href: "statue-of-liberty.html",
          image: "statue-of-liberty.webp",
          alt: "The Statue of Liberty on Liberty Island",
          kicker: "The harbour",
          title: "Statue of Liberty",
          text: "The ferry leaves from Battery Park, fifteen minutes on foot from the memorial.",
          meta: "Ferry from $25.50",
        },
        {
          href: "free-things-to-do-nyc.html",
          image: "brooklyn-bridge-skyline.webp",
          alt: "The Brooklyn Bridge and the Lower Manhattan skyline",
          kicker: "Free",
          title: "Free things to do in NYC",
          text: "The memorial plaza is free; here are eleven more free ideas for the same trip.",
          meta: "12 free ideas",
        },
      ],
      source: "9-11-memorial",
      faqTitle: "9/11 Memorial questions",
      faq: faqItems,
      prev: { href: "statue-of-liberty.html", label: "Statue of Liberty" },
      next: { href: "attractions.html", label: "All attractions" },
    }),
};
