import { renderNeighbourhoodPage } from "../neighbourhood-template.mjs";

const faq = [
  {
    q: "Is Harlem safe for visitors?",
    a: "<p>Yes. Harlem is a busy residential neighbourhood, and the areas around 125th Street and the main avenues are well used and well lit. As anywhere in New York, keep to main streets after dark and use city sense.</p>",
  },
  {
    q: "How do I get to Harlem?",
    a: "<p>The 2/3, A/B/C/D and 4/5/6 all stop at 125th Street, and the ride from Midtown takes about 20 minutes. The 2/3 is the fastest from the west side; the 4/5/6 from the east.</p>",
  },
  {
    q: "What should I see in half a day?",
    a: "<p>The Apollo and 125th Street first, then the Schomburg Center, then the brownstone blocks around Strivers' Row. Finish at Riverside Park or with a meal on Frederick Douglass Boulevard.</p>",
  },
  {
    q: "Is the Apollo open to visitors?",
    a: "<p>The Apollo runs shows and its amateur night. Check the Apollo's own site for what is on during your dates before planning an evening around it.</p>",
  },
];

export default {
  path: "harlem.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Harlem: Music, Soul Food and 125th Street",
  description:
    "A guide to Harlem, Manhattan: the Apollo, 125th Street, the Schomburg Center, soul food, a half-day plan and how to get there by subway.",
  priority: "0.8",
  changefreq: "monthly",
  ogImage: "assets/img/manhattan-skyline-night.webp",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Harlem: Music, Soul Food and 125th Street",
      description:
        "A guide to Harlem in Manhattan, covering its music history, where to eat, a half-day walking plan and subway access.",
      author: { "@type": "Organization", name: "NYCTrove" },
      dateModified: "2026-11-02",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a.replace(/<[^>]+>/g, "") },
      })),
    },
  ],
  render: () =>
    renderNeighbourhoodPage({
      heroImage: "manhattan-skyline-night.webp",
      heroAlt: "The Manhattan skyline lit at night",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "neighbourhoods.html", label: "Neighbourhoods" },
        { href: "harlem.html", label: "Harlem" },
      ],
      eyebrowText: "Manhattan · Harlem",
      h1: "Harlem, uptown and unhurried",
      lead: "Harlem is where a lot of New York's music, literature and food history happened, and it still feels like a neighbourhood rather than a sight. Go for the Apollo, stay for 125th Street, and leave time to eat.",
      heroMeta: ["Manhattan", "Half a day", "2/3 · A/B/C/D", "Busiest on weekday evenings"],
      facts: [
        { label: "Borough", value: "Manhattan" },
        { label: "Subway", value: "125 St (2/3; A/B/C/D; 4/5/6)" },
        { label: "Best for", value: "Music, soul food and Black history" },
        { label: "Time needed", value: "3–4 hours" },
        { label: "When busiest", value: "Weekday rush hours and Sunday brunch" },
      ],
      mapId: "harlem",
      areaName: "Harlem",
      introImage: "subway-train.webp",
      introImageAlt: "A New York City subway train, the quickest route uptown to Harlem",
      introEyebrow: "First impressions",
      introTitle: "The neighbourhood that changed American music",
      introLead:
        "Harlem's reputation is bigger than its streets, but the streets hold up: brownstones, churches, the Apollo's neon and a main street that has long been the centre of Black New York.",
      introParagraphs: [
        "Start at 125th Street and walk west from the Apollo toward the river, then turn north into the brownstone blocks around Strivers' Row and 138th Street. The neighbourhood is at its best on a weekday morning, when the streets belong to the people who live there.",
        "The Schomburg Center for Research in Black Culture is the other essential stop, and the Apollo's amateur night is still the best value show in the city if your dates line up. Both are short walks from the 2/3 at 125th Street, which makes Harlem an easy half-day from Midtown.",
      ],
      seeTitle: "The streets and sights worth your time",
      seeLead: "Four stops that give you the history and the everyday neighbourhood.",
      see: [
        { title: "125th Street", text: "Harlem's main street: the Apollo, the Studio Museum and a shopping strip that is busy all day." },
        { title: "The Apollo", text: "The theatre that launched generations of performers. Check what is on before you go; the marquee is worth the walk either way." },
        { title: "Schomburg Center", text: "A research library and archive devoted to Black culture, with exhibitions open to visitors." },
        { title: "Strivers' Row", text: "Two blocks of handsome brownstones on 138th and 139th Streets, among the best architecture in Harlem." },
      ],
      eatTitle: "Eating in Harlem",
      eatLead: "Soul food is the tradition; the neighbourhood's newer kitchens are worth a look too. Prices are a guide.",
      eatRows: [
        ["Soul food restaurants", "Fried chicken, greens and cornbread", "mid-range"],
        ["Harlem bakeries", "Sweet potato pie and coffee", "budget"],
        ["Sunday brunch spots", "Book ahead; brunch is a neighbourhood ritual", "mid-range"],
        ["Corner fish shops", "Fried fish and sides, eaten on the go", "budget"],
      ],
      planTitle: "A half-day in Harlem",
      planLead: "A simple west-then-north walk that pairs the history with the residential streets.",
      planStops: [
        { time: "10:00", title: "125th Street", text: "Start at the Apollo's marquee and walk the main street, looking at the side streets as you go." },
        { time: "11:00", title: "Schomburg Center", text: "Spend an hour with the exhibitions, then walk north toward Strivers' Row." },
        { time: "12:30", title: "Lunch", text: "A soul food plate or a bakery lunch; the neighbourhood is not short of either." },
        { time: "14:00", title: "Strivers' Row", text: "Walk 138th and 139th Streets, then continue north for the brownstone blocks and churches." },
        { time: "16:30", title: "Riverside Park", text: "Finish at the river for the sunset, then take the 1 downtown or walk back to 125th Street." },
      ],
      transit:
        "<p>Harlem is well served: the <strong>2/3</strong> run up the west side to 125th Street, the <strong>A/B/C/D</strong> stop there too, and the <strong>4/5/6</strong> serve the east side. From Midtown the ride is about 20 minutes. Once you are there, the main streets are flat and the side streets are a grid, so walking is easy.</p>",
      bestTime:
        "<p>Weekday mornings are calm. Sunday is brunch day, when the restaurants queue and the churches fill, and weekday rush hours are busy with commuters. If you want live music, evenings are the reason to come; check the listings first.</p>",
      tips: [
        { icon: "◆", title: "Go with a purpose, then wander", text: "Anchor the visit with the Apollo or the Schomburg Center, then let the side streets fill the rest of the morning." },
        { icon: "◷", title: "Sunday is brunch, not sightseeing", text: "The neighbourhood's restaurants are busiest after church. Book, or eat earlier than you think you should." },
        { icon: "☂", title: "Keep to the main avenues at night", text: "The residential streets are quiet and less lit after dark. Stick to 125th Street, Frederick Douglass Boulevard and the avenues." },
      ],
      nearbyTitle: "Nearby and worth your time",
      nearbyLead: "Harlem is at Manhattan's northern edge, with the Bronx across the river and Central Park to the south.",
      nearby: [
        {
          href: "manhattan.html",
          image: "midtown-aerial-night.webp",
          alt: "Midtown Manhattan seen from above at night",
          kicker: "Borough",
          title: "Manhattan",
          text: "The full guide to the island, from Midtown to Museum Mile.",
          meta: "Borough guide",
        },
        {
          href: "bronx.html",
          image: "bronx-yankee-stadium.webp",
          alt: "The interior of Yankee Stadium in the Bronx",
          kicker: "Across the river",
          title: "The Bronx",
          text: "Yankee Stadium, the Grand Concourse and Arthur Avenue, a short ride north.",
          meta: "Borough guide",
        },
        {
          href: "neighbourhoods.html",
          image: "skyline-window-view.webp",
          alt: "The Manhattan skyline seen through a tall window",
          kicker: "All guides",
          title: "All neighbourhoods",
          text: "The other seven areas worth a morning, and how to choose between them.",
          meta: "Hub",
        },
      ],
      source: "harlem",
      faqTitle: "Harlem questions",
      faq,
      prev: { href: "west-village.html", label: "West Village" },
      next: { href: "williamsburg.html", label: "Williamsburg" },
    }),
};
