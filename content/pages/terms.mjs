import {
  btn,
  pageHero,
  ctaBand,
  img,
  metaItems,
} from "../components.mjs";

export default {
  path: "terms.html",
  navSection: "home",
  bodyClass: "page-inner",
  title: "Terms of Use",
  description:
    "The terms for using NYC Insider: an informational guide, not a guarantee. Prices and hours change, affiliate links are disclosed, and the content is copyright.",
  priority: "0.3",
  changefreq: "yearly",
  ogImage: "assets/img/central-park-bow-bridge.webp",
  render: () => `
${pageHero({
  image: img("central-park-bow-bridge.webp"),
  alt: "The Bow Bridge in Central Park",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "terms.html", label: "Terms" },
  ],
  eyebrowText: "Terms",
  title: "Terms of use",
  lead: "The rules for using this site, the limits of what a travel guide can promise, and how the commercial side works.",
  meta: metaItems("Last updated 2 November 2026", "Governed by New York law"),
})}

<section class="section">
  <div class="container container--narrow">
    <div class="prose">
      <p>These terms govern your use of NYC Insider. By using the site you agree to them. If you do not agree, please stop. They were last updated on 2 November 2026.</p>

      <h2>Informational purpose only</h2>
      <p>NYC Insider is a travel guide. Everything on the site is general information and personal opinion about visiting New York City. It is not professional advice — legal, medical, financial or otherwise — and it is not a booking service. Travel involves risk and changing conditions; use your own judgement, follow official instructions and consider appropriate travel insurance.</p>

      <h2>Prices, opening hours and events change</h2>
      <p>We check and date these pages, but New York changes constantly. Prices are shown as "from" or "around" because attraction, pass and tour pricing is dynamic and depends on when you visit. Opening hours, closures, ticket rules, fares and event dates can change without notice.</p>
      <p>Always confirm with the venue or operator before you book or make a special trip. We are not responsible if a place is closed, a price has risen or an event has been cancelled. The <a href="plan-your-trip.html">planning guide</a> explains which details move most often.</p>

      <h2>Affiliate links and independence</h2>
      <p>Some outbound links are affiliate links. If you buy a ticket, book a tour or open an account through one, we may earn a small commission at no extra cost to you. That is how the guide stays free.</p>
      <p>Affiliate relationships do not buy placement, rankings or favourable coverage. Any paid collaboration is labelled clearly. The <a href="about.html">about page</a> explains our editorial policy; the <a href="privacy.html">privacy policy</a> explains what partners can see about you.</p>

      <h2>Intellectual property</h2>
      <p>The text, original photography, design and code are copyright NYC Insider 2026 unless stated otherwise. You may read the site, print pages for your own trip and share links. You may not republish, scrape, mirror or resell substantial parts, or use the content commercially, without written permission.</p>
      <p>Some photographs are used under Creative Commons or public domain licences. Attribution and licence for each one is on the <a href="credits.html">credits page</a>, and those credits must stay with the image if it is reused. To request permission for our own text or photographs, <a href="contact.html">contact us</a>.</p>

      <h2>External links</h2>
      <p>We link to official sites, transport operators and ticket sellers we think are useful. We do not control them and are not responsible for their content, availability, prices or privacy practices. Their terms apply once you leave NYC Insider.</p>

      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by law, NYC Insider is not liable for indirect, incidental or consequential loss arising from use of the site or reliance on its content — including missed transport, cancelled bookings, unusable tickets or wasted time.</p>
      <p>Nothing in these terms limits liability that cannot legally be limited, including liability for death or personal injury caused by negligence, or for fraud. If you are a consumer, your statutory rights are unaffected.</p>

      <h2>Changes to these terms</h2>
      <p>We may update these terms. The date at the top shows when they last changed. Continuing to use the site means you accept the updated terms; significant changes will be noted on the site.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of New York, and any dispute that cannot be resolved informally will go to the state or federal courts in New York County. If mandatory consumer law where you live gives you stronger rights, nothing here removes them.</p>

      <h2>Contact</h2>
      <p>Questions about these terms: <a href="mailto:hello@nycinsider.com">hello@nycinsider.com</a> or through the <a href="contact.html">contact page</a>. We aim to reply within a few working days.</p>
    </div>
  </div>
</section>

${ctaBand({
  eyebrowText: "Related",
  title: "Where the rules come from",
  text: "The editorial policy explains how recommendations are made; the privacy policy covers what data the site collects.",
  actions: `${btn({ href: "about.html", label: "Read about us" })}${btn({
    href: "privacy.html",
    label: "Privacy policy",
    variant: "outline",
  })}`,
})}
`,
};
