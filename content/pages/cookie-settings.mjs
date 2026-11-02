import { sectionHead, pageHero, callout, table, ctaBand, btn, img, metaItems } from "../components.mjs";

export default {
  path: "cookie-settings.html",
  navSection: "home",
  bodyClass: "page-inner",
  title: "Cookie Settings",
  description:
    "Control the analytics cookies on NYCTrove: see your current choice, accept or decline Google Analytics, and read exactly which cookies the site sets.",
  priority: "0.2",
  changefreq: "yearly",
  ogImage: "assets/img/grand-central.webp",
  render: () => `
${pageHero({
  image: img("grand-central.webp"),
  alt: "The main concourse of Grand Central Terminal in New York",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "cookie-settings.html", label: "Cookie settings" },
  ],
  eyebrowText: "Privacy",
  title: "Cookie settings",
  lead: "One cookie decision, no dark patterns. You can accept or decline analytics here at any time — the guide works exactly the same either way.",
  meta: metaItems("Your choice is stored in your browser", "No advertising cookies"),
})}

<section class="section">
  <div class="container container--narrow">
    <div class="card" data-consent-controls style="gap:1rem">
      <span class="card__kicker">Your current choice</span>
      <p class="lead" style="margin:0" data-consent-status aria-live="polite">Analytics cookies: no choice yet</p>
      <p class="muted small" style="margin:0">Accepting allows Google Analytics 4 to set its cookies and measure how the guide is used. Declining keeps analytics storage off; Google may still receive a cookieless, aggregated signal that a page was viewed.</p>
      <div class="hero__actions" style="margin-top:.4rem">
        <button class="btn" type="button" data-consent-choice="granted">Accept analytics</button>
        <button class="btn" type="button" data-consent-choice="denied">Decline analytics</button>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container container--narrow">
    ${sectionHead({
      eyebrowText: "The details",
      title: "Which cookies the site sets",
      lead: "Only Google Analytics runs on NYCTrove, and only after you accept. No advertising, retargeting or social-media cookies are used.",
    })}
    ${table({
      caption: "Cookies used on NYCTrove",
      head: ["Cookie", "Set by", "Purpose", "Duration"],
      rows: [
        ["<code>_ga</code>", "Google Analytics 4", "Distinguishes one browser from another so visits can be counted", "Up to 2 years"],
        ["<code>_ga_4H2E46709P</code>", "Google Analytics 4", "Keeps the session state for this GA4 property", "Up to 2 years"],
      ],
    })}
    <p class="muted small" style="margin-top:1rem">Cookie durations are the maximum Google sets by default; they may be shorter depending on your browser and when you last cleared them. Our <a href="privacy.html">privacy policy</a> explains the legal basis, retention and your rights.</p>
  </div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="prose">
      <h2>How your choice works</h2>
      <p>Your answer is stored locally in your browser under the key <code>nyctrove-consent</code>. It is not sent to us and it is not tied to your identity. Choosing here has the same effect as the banner you see on your first visit.</p>
      <p>If you clear this site's data, block local storage, or open the site in a private window, the banner will appear again and analytics stays off until you answer.</p>

      <h2>Changing your mind elsewhere</h2>
      <p>You can also control cookies from your browser settings — most browsers let you block third-party cookies or clear them for a single site. Google provides a <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener" target="_blank">browser add-on to opt out of Google Analytics</a> across all sites; it works independently of this page.</p>
      <p>Because the site is served from the EU and the UK, our legal basis for analytics is your consent. Declining has no effect on what you can read or book.</p>
    </div>
    <div style="margin-top:2rem">
      ${callout({
        icon: "◇",
        title: "A note on affiliate links",
        text: "Some outbound links may earn a commission if you book through them. Those partners set their own cookies only after you click through, on their own site — we never receive your personal data. More in the privacy policy and terms.",
      })}
    </div>
  </div>
</section>

${ctaBand({
  eyebrowText: "Privacy",
  title: "Questions about cookies or data?",
  text: "Email us and we will answer directly. The privacy policy sets out what we collect, why, and how long we keep it.",
  actions: `${btn({ href: "privacy.html", label: "Privacy policy" })}${btn({
    href: "contact.html",
    label: "Contact us",
    variant: "outline",
  })}`,
})}
`,
};
