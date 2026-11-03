import { renderBoroughPage } from "../borough-template.mjs";

export default {
  path: "brooklyn.html",
  navSection: "boroughs",
  bodyClass: "page-inner",
  title: "Brooklyn Guide — DUMBO, Williamsburg & Park Slope",
  description:
    "A local guide to Brooklyn: the Brooklyn Bridge walk, DUMBO, Williamsburg, Park Slope and Coney Island, plus where to eat and a one-day plan.",
  priority: "0.9",
  changefreq: "monthly",
  ogImage: "assets/img/brooklyn-bridge-park.webp",
  render: () =>
    renderBoroughPage({
      heroImage: "brooklyn-bridge-park.webp",
      heroAlt: "The granite tower of the Brooklyn Bridge seen from Brooklyn Bridge Park",
      crumbs: [
        { href: "index.html", label: "Home" },
        { href: "boroughs.html", label: "Boroughs" },
        { href: "brooklyn.html", label: "Brooklyn" },
      ],
      eyebrowText: "Borough 02 · Brooklyn",
      title: "Brooklyn",
      lead: "Waterfront parks, brownstone streets, the best restaurants in the city and a bridge that is still the most impressive piece of infrastructure you will walk across. Cross the river once and you will understand why people move here.",
      meta: ["2.6 million residents", "71 square miles", "A/C/F/L/2/3/4/5", "1–2 days"],
      introEyebrow: "The borough",
      introTitle: "A city with its own centre of gravity",
      introLead:
        "If Brooklyn were its own city it would be the fourth largest in the United States. It has its own downtown, its own skyline, its own food culture and a stubborn identity that has survived every wave of gentrification.",
      introParagraphs: [
        "For visitors, the mistake is treating Brooklyn as one place. DUMBO, Williamsburg, Park Slope and Coney Island are 30–45 minutes apart and feel like different towns. Pick one or two per visit.",
        "The Brooklyn Bridge walk is the best introduction: start early on the Brooklyn side, end in Manhattan for breakfast, or reverse it at sunset.",
      ],
      stats: [
        { value: "2.6M", label: "residents" },
        { value: "71", label: "square miles" },
        { value: "5", label: "must-see areas" },
        { value: "1", label: "iconic bridge" },
      ],
      splitImage: "brooklyn-bridge-sunset.webp",
      splitImageAlt: "The Brooklyn Bridge at sunset seen from the waterfront",
      neighbourhoods: [
        {
          kicker: "North",
          name: "Williamsburg",
          text: "Waterfront skyline views, Bedford Avenue bars and vintage shops, and Domino Park. Best for brunch and sunset photos.",
          link: "williamsburg.html",
          linkLabel: "Williamsburg guide",
        },
        {
          kicker: "Waterfront",
          name: "DUMBO",
          text: "Cobblestones between the two bridges, converted warehouses and the Washington Street bridge view. Small, scenic, best on foot.",
          link: "dumbo.html",
          linkLabel: "DUMBO guide",
        },
        {
          kicker: "Heights",
          name: "Brooklyn Heights",
          text: "America's first historic district: brownstones, quiet streets and the Promenade with the best skyline panorama in the city.",
        },
        {
          kicker: "Park side",
          name: "Park Slope",
          text: "Victorian brownstones, Prospect Park, the Botanic Garden and restaurant-lined Fifth and Seventh Avenues. A local weekend.",
        },
        {
          kicker: "East",
          name: "Bushwick",
          text: "Warehouses, the Bushwick Collective murals and DIY venues along the L. Go by day and go hungry.",
        },
        {
          kicker: "South",
          name: "Coney Island",
          text: "Boardwalk, beach, the Cyclone and the Wonder Wheel. A summer half-day; bleak but atmospheric in winter.",
        },
      ],
      neighbourhoodTitle: "Six Brooklyns in one borough",
      neighbourhoodLead: "Pick two. Three if you have a full day and comfortable shoes.",
      highlightsTitle: "The essentials",
      highlights: [
        {
          title: "Walk the Brooklyn Bridge",
          text: "1.3 miles, 30–45 minutes, free. Start on the Brooklyn side at High Street before 9am to beat the crowds.",
        },
        {
          title: "Brooklyn Bridge Park",
          text: "The best Manhattan skyline view from the water — Pebble Beach, Jane's Carousel and the DUMBO waterfront.",
        },
        {
          title: "Prospect Park",
          text: "526 acres designed by Olmsted and Vaux, with the Long Meadow, the Botanic Garden and the Brooklyn Museum at its edge.",
        },
        {
          title: "Brooklyn Museum",
          text: "World-class collections, suggested admission, and free First Saturday evenings.",
        },
        {
          title: "Smorgasburg",
          text: "Saturday food market at Marsha P. Johnson State Park (summer). Arrive hungry and early.",
        },
        {
          title: "A Brooklyn pizza pilgrimage",
          text: "Juliana's for coal-fired classics, L&B Spumoni Gardens for Sicilian squares, Roberta's for the Bushwick version.",
        },
      ],
      foodEyebrow: "Where to eat",
      foodTitle: "The best restaurant borough",
      foodLead: "Brooklyn has more good kitchens per square mile than Manhattan — and fewer tourist menus.",
      foodImage: "brooklyn-bridge-skyline.webp",
      foodImageAlt: "The Brooklyn Bridge and Lower Manhattan skyline at night",
      foodSpots: [
        { name: "Juliana's Pizza", text: "DUMBO. Coal-fired pizza worth the queue on Old Fulton Street." },
        { name: "L&B Spumoni Gardens", text: "Bensonhurst. Sicilian squares with the sauce on top, since 1939." },
        { name: "Roberta's", text: "Bushwick. The pizza that helped define Brooklyn's food reputation." },
        { name: "Peter Luger", text: "Williamsburg. Dry-aged steak for two, cash or debit only, since 1887." },
        { name: "Smorgasburg", text: "Williamsburg waterfront, Saturdays. The fastest way to eat across a dozen kitchens." },
        { name: "Bakeries in Park Slope", text: "Fifth Avenue has the city's best concentration of bakeries and coffee." },
      ],
      dayTitle: "One day in Brooklyn",
      dayLead: "A north-to-south line that ends with the skyline at sunset.",
      dayStops: [
        { time: "8:30", title: "Brooklyn Heights Promenade", text: "Skyline walk, then down to DUMBO through the quiet brownstone streets." },
        { time: "10:00", title: "DUMBO & Brooklyn Bridge Park", text: "Washington Street view, Pebble Beach, Jane's Carousel." },
        { time: "12:00", title: "Williamsburg", text: "Lunch, Domino Park and a walk along the waterfront." },
        { time: "15:00", title: "Prospect Park & Brooklyn Museum", text: "Pick one; both are worth the afternoon." },
        { time: "18:30", title: "Dinner in Park Slope", text: "Fifth Avenue, then a slow walk back to the subway." },
      ],
      transitTitle: "Getting there",
      transitText:
        "A/C/F to DUMBO and Brooklyn Heights; L to Williamsburg; B/Q/2/3 to Park Slope and Prospect Park; D/F/N/Q to Coney Island. The NYC Ferry also connects DUMBO, Williamsburg and Brooklyn Bridge Park to Manhattan — often the nicest way over.",
      tips: [
        {
          icon: "◷",
          title: "Walk the bridge early",
          text: "By 10am the walkway is a queue. Before 9am it belongs to commuters and runners, and the light is better.",
        },
        {
          icon: "◆",
          title: "Do not eat in DUMBO",
          text: "DUMBO is for photographs and the park; the food is better one stop away in Brooklyn Heights or Williamsburg.",
        },      {
        icon: "◆",
        title: "Where to stay in Brooklyn",
        text: "Nine areas compared — who each suits, price bands and the hotel-tax maths. <a href=\"where-to-stay-brooklyn.html\">Read the Brooklyn guide</a>.",
      },
        {
          icon: "☂",
          title: "Rain plan",
          text: "Brooklyn Museum and the Botanic Garden are next door to each other and both work in the rain. The bridge walk can wait.",
        },
      ],
      faqTitle: "Brooklyn questions",
      faq: [
        { q: "Is Brooklyn safe?", a: "<p>Yes. The areas in this guide are busy, well-lit and heavily used by locals. As anywhere, use city sense at night and avoid empty streets.</p>" },
        { q: "How long does the Brooklyn Bridge walk take?", a: "<p>About 30–45 minutes at a normal pace, longer with photographs. It is free and open 24 hours.</p>" },
        { q: "Should I stay in Brooklyn?", a: "<p>Yes if you want better value and a neighbourhood feel: Brooklyn Heights, Williamsburg and Downtown Brooklyn all have hotels near subway lines. See <a href=\"plan-your-trip.html\">where to stay</a>.</p>" },
        { q: "Can I do Brooklyn in half a day?", a: "<p>You can do DUMBO and the bridge in three hours. Williamsburg and Park Slope deserve their own half-day. Our <a href=\"7-days-in-nyc.html\">7-day plan</a> gives Brooklyn a full day.</p>" },
      ],
      source: "brooklyn",
      prev: { href: "manhattan.html", label: "Manhattan" },
      next: { href: "queens.html", label: "Queens" },
    }),
};
