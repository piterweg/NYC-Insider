/**
 * Global site configuration.
 * Change the base URL once the site has a production domain.
 */
export const site = {
  name: "NYC Insider",
  tagline: "The Ultimate New York City Guide",
  description:
    "NYC Insider is an independent New York City travel guide: curated itineraries, neighbourhood guides for all five boroughs, honest advice on passes and tickets, and practical tips from people who actually live here.",
  baseUrl: "https://piterweg.github.io/NYC-Insider",
  email: "hello@nycinsider.com",
  year: 2026,

  // Primary navigation. `id` is used to highlight the current section.
  nav: [
    { id: "itineraries", label: "Itineraries", href: "itineraries.html" },
    { id: "boroughs", label: "Boroughs", href: "boroughs.html" },
    { id: "attractions", label: "Things to Do", href: "attractions.html" },
    { id: "passes", label: "Passes", href: "passes.html" },
    { id: "plan", label: "Plan Your Trip", href: "plan-your-trip.html" },
    { id: "journal", label: "Journal", href: "journal.html" },
  ],

  // Footer columns
  footer: [
    {
      title: "Plan",
      links: [
        { label: "Itineraries", href: "itineraries.html" },
        { label: "When to Visit", href: "when-to-visit.html" },
        { label: "Getting Around", href: "getting-around.html" },
        { label: "Budget Guide", href: "budget.html" },
        { label: "Passes & Tickets", href: "passes.html" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Manhattan", href: "manhattan.html" },
        { label: "Brooklyn", href: "brooklyn.html" },
        { label: "Queens", href: "queens.html" },
        { label: "The Bronx", href: "bronx.html" },
        { label: "Staten Island", href: "staten-island.html" },
        { label: "Food & Drink", href: "food.html" },
      ],
    },
    {
      title: "NYC Insider",
      links: [
        { label: "About", href: "about.html" },
        { label: "Contact", href: "contact.html" },
        { label: "Journal", href: "journal.html" },
        { label: "Photo Credits", href: "credits.html" },
        { label: "Privacy Policy", href: "privacy.html" },
        { label: "Terms of Use", href: "terms.html" },
      ],
    },
  ],

  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};
