import {
  btn,
  pageHero,
  callout,
  ctaBand,
  img,
  metaItems,
} from "../components.mjs";

export default {
  path: "privacy.html",
  navSection: "home",
  bodyClass: "page-inner",
  title: "Privacy Policy",
  description:
    "How NYCTrove handles your data: what we collect, newsletter and analytics, cookies, affiliate links, your GDPR and CCPA rights, retention and how to contact us.",
  priority: "0.3",
  changefreq: "yearly",
  ogImage: "assets/img/high-line.webp",
  render: () => `
${pageHero({
  image: img("high-line.webp"),
  alt: "The High Line elevated park running between buildings in Manhattan",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "privacy.html", label: "Privacy" },
  ],
  eyebrowText: "Privacy",
  title: "Privacy policy",
  lead: "What we collect, why we collect it and what you can do about it — in plain English, without the legal filler.",
  meta: metaItems("Effective 2 November 2026", "Last reviewed 2 November 2026"),
})}

<section class="section">
  <div class="container container--narrow">
    <div class="prose">
      <p>This policy explains what NYCTrove collects when you visit the site, why we collect it and what control you have. It covers the website only — bookings made on a partner's site are covered by that partner's policy.</p>
    </div>
    ${callout({
      icon: "◇",
      title: "The short version",
      text: "We collect very little. No accounts, no comments, no checkout. We see newsletter email addresses, messages you send us and aggregate analytics. We do not sell personal data or run advertising trackers.",
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container container--narrow">
    <div class="prose">
      <h2>Who we are</h2>
      <p>NYCTrove is an independent travel guide to New York City, published at this domain. We are the controller of the personal data described here. You can reach us at <a href="mailto:hello@nyctrove.com">hello@nyctrove.com</a>. The site is static: no accounts, no comments and no checkout, so there is not much to collect.</p>

      <h2>What we collect</h2>
      <p>Two kinds of information.</p>
      <ul>
        <li><strong>Information you give us.</strong> Newsletter subscriptions store your email address; messages you send us include your name, email address and whatever you write.</li>
        <li><strong>Information collected automatically.</strong> Privacy-friendly analytics tell us which pages are read and how readers arrive: the page, the referring site, browser and device type, and an approximate location from your IP address. We do not profile individual readers.</li>
      </ul>
      <p>Booking payments are handled entirely by the partner on their own site.</p>

      <h2>Newsletter</h2>
      <p>Subscribing is opt-in: we store your address and send the newsletter you asked for, usually once a week. Every issue has an unsubscribe link, and we keep a short suppression record so we do not email you again by accident. Our platform processes the address on our instructions and may measure opens and clicks. We never sell or rent email addresses, and we do not add contact-form senders to the list.</p>

      <h2>Cookies and similar technology</h2>
      <p>We keep cookies to a minimum. The site sets no advertising cookies and runs no cross-site advertising trackers. Analytics may use a first-party cookie or a privacy-preserving method that does not identify you; blocking cookies does not break the guide. Affiliate partners may set their own cookies after you click through — those belong to the partner and are controlled through your browser and their cookie notice.</p>

      <h2>Third-party services</h2>
      <p>We rely on a few providers: hosting and infrastructure, an email platform and analytics. They process data only on our instructions and under contracts that require appropriate protection. Some may process data outside your country; where that happens we rely on standard contractual clauses or an equivalent safeguard.</p>

      <h2>Affiliate links</h2>
      <p>Some outbound links are affiliate links. If you buy through one, we may earn a small commission at no extra cost to you. The partner records the referral, usually with a cookie on their site. We do not receive your name, email or payment details — only aggregate reports that a link produced a sale. Once you leave NYCTrove, the partner's privacy policy applies. Our commercial disclosure is in the <a href="about.html">about page</a> and <a href="terms.html">terms of use</a>.</p>

      <h2>Legal bases (UK and EU GDPR)</h2>
      <p>If you are in the UK or the European Union, we rely on these legal bases:</p>
      <ul>
        <li><strong>Consent</strong> — the newsletter and, where required, non-essential analytics. You can withdraw it at any time.</li>
        <li><strong>Legitimate interests</strong> — understanding how the guide is used, keeping the site secure and answering your emails.</li>
        <li><strong>Legal obligation</strong> — records where tax or other law requires them.</li>
      </ul>

      <h2>Your rights</h2>
      <p>Depending on where you live, you may have the right to access, correct, delete, restrict or object to processing, receive a portable copy, withdraw consent and complain to your local data protection authority.</p>
      <p>California residents may know, delete, correct and opt out of the sale or sharing of personal data. We do not sell or share personal data for cross-context behavioural advertising, and we will not discriminate against you for exercising your rights.</p>
      <p>To make a request, email <a href="mailto:hello@nyctrove.com">hello@nyctrove.com</a> with the subject "Privacy request". We may ask for enough information to verify your identity.</p>

      <h2>Data retention</h2>
      <ul>
        <li><strong>Newsletter:</strong> until you unsubscribe, plus the suppression record.</li>
        <li><strong>Correspondence:</strong> up to two years, so we have context if you write again.</li>
        <li><strong>Analytics:</strong> kept in aggregate for up to 14 months.</li>
        <li><strong>Legal records:</strong> kept for as long as the law requires.</li>
      </ul>

      <h2>Children</h2>
      <p>The site is aimed at adults planning travel. We do not knowingly collect personal data from anyone under 13; if you believe a child has sent us data, email us and we will delete it.</p>

      <h2>Changes to this policy</h2>
      <p>If this policy changes, we will update the date at the top. If the change is significant, we will say so on the site and, where we have your email address, tell you directly.</p>

      <h2>Contact</h2>
      <p>Questions or complaints: <a href="mailto:hello@nyctrove.com">hello@nyctrove.com</a>. We aim to respond within a few working days. If you are in the UK or EU and are not satisfied, you can complain to your national data protection authority.</p>
    </div>
  </div>
</section>

${ctaBand({
  eyebrowText: "Privacy",
  title: "Still have a question about your data?",
  text: "Email us and we will answer it directly. If you want to know how the site is funded, the affiliate disclosure is a short read.",
  actions: `${btn({ href: "contact.html", label: "Contact us" })}${btn({
    href: "terms.html",
    label: "Read the terms",
    variant: "outline",
  })}`,
})}
`,
};
