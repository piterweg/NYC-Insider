/**
 * Page shell: <head>, header, mobile navigation, footer and closing scripts.
 */
import { site } from "./site.mjs";
import { esc, img } from "./components.mjs";

function head({ page }) {
  const title = page.fullTitle ? page.title : `${page.title} | ${site.name}`;
  const canonical = `${site.baseUrl}/${page.path === "index.html" ? "" : page.path}`;
  const ogImage = `${site.baseUrl}/${page.ogImage || "assets/img/og-nyc-insider.jpg"}`;
  const robots = page.noindex ? "noindex, nofollow" : "index, follow";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.baseUrl,
      description: site.description,
      inLanguage: "en",
      publisher: { "@type": "Organization", name: site.name, url: site.baseUrl },
    },
    ...(page.jsonLd || []),
  ];

  return `<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}" />
<meta name="robots" content="${robots}" />
<link rel="canonical" href="${canonical}" />
<meta name="theme-color" content="#0b0d10" />

<!-- Open Graph -->
<meta property="og:type" content="${page.ogType || "website"}" />
<meta property="og:site_name" content="${site.name}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(page.description)}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${ogImage}" />
<meta property="og:locale" content="en_US" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(page.description)}" />
<meta name="twitter:image" content="${ogImage}" />

<link rel="icon" href="assets/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="assets/favicon.svg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap"
  rel="stylesheet"
/>
<link rel="stylesheet" href="assets/css/main.css" />
<script>document.documentElement.classList.remove("no-js");</script>
<script type="application/ld+json">
${JSON.stringify(jsonLd, null, 0)}
</script>`;
}

function header(page) {
  const current = page.navSection || "";
  const links = site.nav
    .map(
      (item) =>
        `<li><a class="main-nav__link" href="${item.href}"${
          item.id === current ? ' aria-current="page"' : ""
        }>${item.label}</a></li>`
    )
    .join("");

  const mobileLinks = [
    `<a href="index.html">Home <span>NYC</span></a>`,
    ...site.nav.map((item) => `<a href="${item.href}">${item.label} <span>0${site.nav.indexOf(item) + 1}</span></a>`),
  ].join("");

  return `<header class="site-header" data-header>
  <div class="container">
    <a class="brand" href="index.html" aria-label="${site.name} — home">
      <span class="brand__mark">NYC<span>Insider</span></span>
      <span class="brand__tag" aria-hidden="true">The City, Decoded</span>
    </a>
    <nav class="main-nav" aria-label="Primary">
      <ul class="main-nav__list">${links}</ul>
      <a class="btn btn--sm main-nav__cta" href="plan-your-trip.html">Start Planning</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu" data-nav-toggle>
        <span class="nav-toggle__bars" aria-hidden="true"></span>
      </button>
    </nav>
  </div>
</header>

<div class="mobile-nav" id="mobile-nav" aria-hidden="true" data-mobile-nav>
  <nav aria-label="Mobile">
    ${mobileLinks}
  </nav>
  <p class="mobile-nav__foot">${site.tagline}. Independent guides to all five boroughs.</p>
</div>`;
}

function footer() {
  const columns = site.footer
    .map(
      (col) => `<div>
  <h4>${col.title}</h4>
  <ul>${col.links.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
</div>`
    )
    .join("");

  return `<footer class="site-footer">
  <div class="container">
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        <a class="brand" href="index.html">
          <span class="brand__mark">NYC<span>Insider</span></span>
        </a>
        <p>An independent guide to New York City: honest itineraries, neighbourhood knowledge and the practical details that make a trip work.</p>
      </div>
      ${columns}
    </div>
    <div class="site-footer__bottom">
      <p>&copy; ${site.year} ${site.name}. All rights reserved.</p>
      <nav aria-label="Legal">
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <a href="credits.html">Credits</a>
        <a href="sitemap.xml">Sitemap</a>
      </nav>
    </div>
  </div>
</footer>
<a class="to-top" href="#top" aria-label="Back to top" data-to-top>↑</a>
<script src="assets/js/main.js" defer></script>`;
}

export function renderPage({ page, body }) {
  const bodyClass = ["no-js", page.bodyClass].filter(Boolean).join(" ");
  return `<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
${head({ page })}
</head>
<body class="${bodyClass}">
<a class="skip-link" href="#main">Skip to content</a>
${header(page)}
<main id="main">
${body}
</main>
${footer()}
${page.scripts || ""}
</body>
</html>
`;
}
