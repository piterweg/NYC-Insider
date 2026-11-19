/**
 * Page shell: <head>, header, mobile navigation, footer and closing scripts.
 *
 * SEO changes vs. previous version:
 *  - JSON-LD is a single @graph with stable @id references (no duplicated Organization)
 *  - dateModified / article:modified_time no longer default to the build date
 *    (set `published` and `updated` on each page module instead)
 *  - optional page.author => Person; falls back to the Organization
 *  - all internal URLs in the shell are root-relative; the home link is "/" (not index.html)
 *  - noindex pages use "noindex, follow"
 *  - JSON-LD output is escaped so "<" can never close the <script> tag
 *  - lang="en-US", inLanguage "en-US"
 */
import { site } from "./site.mjs";
import { esc, img } from "./components.mjs";
import { assetVersion } from "./version.mjs";

const articleTypes = new Set(["Article", "BlogPosting", "NewsArticle"]);
const SITE_PUBLISHED = site.published || "2026-11-02";

/** Make an internal href root-relative. Leaves absolute URLs, //, / and #anchors alone. */
export function abs(href) {
  if (!href || /^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(href)) return href;
  return "/" + href.replace(/^index\.html(?=$|[#?])/, "");
}

/** Safe JSON for embedding inside <script type="application/ld+json">. */
function safeJson(value) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function head({ page }) {
  const title = page.fullTitle ? page.title : `${page.title} | ${site.name}`;
  const pageUrl = `${site.baseUrl}/${page.path === "index.html" ? "" : page.path}`;
  const canonical = pageUrl;
  const usesDefaultOg = !page.ogImage;
  const ogImage = `${site.baseUrl}/${page.ogImage || "assets/img/og-nyctrove.jpg"}`;
  const ogType = page.ogType || (page.path === "index.html" ? "website" : "article");
  const robots = page.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  // Dates: never fall back to the build date, or every deploy "updates" every page.
  const articleNode = (page.jsonLd || []).find((n) => n && articleTypes.has(n["@type"]));
  const published = page.published || articleNode?.datePublished || SITE_PUBLISHED;
  const modified = [page.updated, articleNode?.dateModified, published].filter(Boolean).sort().pop(); // latest known

  const orgId = `${site.baseUrl}/#organization`;
  const websiteId = `${site.baseUrl}/#website`;
  const logoUrl = `${site.baseUrl}/${site.logo || "assets/img/og-nyctrove.jpg"}`;

  const organisation = {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: `${site.baseUrl}/`,
    logo: { "@type": "ImageObject", url: logoUrl },
    publishingPrinciples: `${site.baseUrl}/editorial.html`,
    ...(Array.isArray(site.sameAs) && site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${site.baseUrl}/`,
    name: site.name,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": orgId },
  };

  // page.author = { name, url?, jobTitle?, description? } -> Person; otherwise the Organization.
  const author = page.author
    ? {
        "@type": "Person",
        name: page.author.name,
        ...(page.author.url ? { url: page.author.url } : {}),
        ...(page.author.jobTitle ? { jobTitle: page.author.jobTitle } : {}),
        ...(page.author.description ? { description: page.author.description } : {}),
      }
    : { "@id": orgId };

  const pageNodes = (page.jsonLd || [])
    .filter((node) => node && typeof node === "object")
    .map((node) => {
      // Inside an @graph the per-node @context is redundant.
      const { ["@context"]: _ctx, ...rest } = node;
      if (!articleTypes.has(rest["@type"])) return rest;
      if (rest.author && rest.author["@type"] === "Organization" && rest.author.name === site.name && !rest.author["@id"]) {
        delete rest.author; // use the shared Organization via @id
      }
      return {
        datePublished: published,
        dateModified: modified,
        image: ogImage,
        author,
        publisher: { "@id": orgId },
        isPartOf: { "@id": websiteId },
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        ...rest,
        datePublished: rest.datePublished || published,
        dateModified: modified, // keeps JSON-LD in sync with article:modified_time
      };
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [organisation, website, ...pageNodes],
  };

  const ogImageSize = usesDefaultOg
    ? `\n<meta property="og:image:width" content="1200" />\n<meta property="og:image:height" content="630" />`
    : "";

  return `<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}" />
<meta name="robots" content="${robots}" />
<link rel="canonical" href="${canonical}" />
<link rel="alternate" type="application/rss+xml" title="${site.name} — latest guides" href="/feed.xml" />
<meta name="theme-color" content="#0b0d10" />

<!-- Open Graph -->
<meta property="og:type" content="${ogType}" />
<meta property="og:site_name" content="${site.name}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(page.description)}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${ogImage}" />${ogImageSize}
<meta property="og:locale" content="en_US" />
<meta property="og:image:alt" content="${esc(title)}" />
${ogType === "article" ? `<meta property="article:published_time" content="${published}" />\n<meta property="article:modified_time" content="${modified}" />` : ""}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(page.description)}" />
<meta name="twitter:image" content="${ogImage}" />
<meta name="twitter:image:alt" content="${esc(title)}" />

<!-- Icons: create assets/favicon-48.png (48x48) and assets/apple-touch-icon.png (180x180) before deploying -->
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
<link rel="icon" href="/assets/favicon-48.png" type="image/png" sizes="48x48" />
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap"
  rel="stylesheet"
/>
<link rel="stylesheet" href="/assets/css/main.css?v=${assetVersion}" />
<script>document.documentElement.classList.remove("no-js");</script>
<!-- Google tag (gtag.js) — Google Analytics 4 with Consent Mode v2.
     Analytics storage stays denied until the visitor accepts the consent banner. -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4H2E46709P"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  });
  gtag('config', 'G-4H2E46709P');
</script>
<script type="application/ld+json">
${safeJson(jsonLd)}
</script>${page.headExtra ? `\n${page.headExtra}` : ""}`;
}

function header(page) {
  const current = page.navSection || "";
  const links = site.nav
    .map(
      (item) =>
        `<li><a class="main-nav__link" href="${abs(item.href)}"${
          item.id === current ? ' aria-current="page"' : ""
        }>${item.label}</a></li>`
    )
    .join("");

  const mobileLinks = [
    `<a href="/">Home <span>NYC</span></a>`,
    ...site.nav.map(
      (item, i) => `<a href="${abs(item.href)}">${item.label} <span>0${i + 1}</span></a>`
    ),
  ].join("");

  return `<header class="site-header" data-header>
  <div class="container">
    <a class="brand" href="/" aria-label="${site.name} — home">
      <span class="brand__mark">NYC<span>Trove</span></span>
      <span class="brand__tag" aria-hidden="true">The City, Decoded</span>
    </a>
    <nav class="main-nav" aria-label="Primary">
      <ul class="main-nav__list">${links}</ul>
      <button class="nav-search" type="button" aria-label="Search the guide" data-search-open>
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.6"/><path d="M13.5 13.5L18 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      </button>
      <a class="btn btn--sm main-nav__cta" href="/plan-your-trip.html">Start Planning</a>
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
  <ul>${col.links.map((l) => `<li><a href="${abs(l.href)}">${l.label}</a></li>`).join("")}</ul>
</div>`
    )
    .join("");

  return `<footer class="site-footer">
  <div class="container">
    <div class="site-footer__grid">
      <div class="site-footer__brand">
        <a class="brand" href="/">
          <span class="brand__mark">NYC<span>Trove</span></span>
        </a>
        <p>An independent guide to New York City: honest itineraries, neighbourhood knowledge and the practical details that make a trip work.</p>
      </div>
      ${columns}
    </div>
    <div class="site-footer__bottom">
      <p>&copy; ${site.year} ${site.name}. All rights reserved.</p>
      <nav aria-label="Legal">
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
        <a href="/privacy.html">Privacy</a>
        <a href="/cookie-settings.html">Cookies</a>
        <a href="/terms.html">Terms</a>
        <a href="/credits.html">Credits</a>
        <a href="/sitemap.xml">Sitemap</a>
      </nav>
    </div>
  </div>
</footer>
<a class="to-top" href="#top" aria-label="Back to top" data-to-top>↑</a>
<div class="consent-banner" data-consent-banner data-consent-controls hidden>
  <p>We use Google Analytics to understand which guides are useful. Analytics cookies stay off until you accept. <a href="/privacy.html">Privacy policy</a>.</p>
  <div class="consent-banner__actions">
    <button class="btn btn--sm" type="button" data-consent-choice="denied">Decline</button>
    <button class="btn btn--sm" type="button" data-consent-choice="granted">Accept</button>
  </div>
</div>

<div class="search-overlay" data-search-overlay hidden>
  <div class="search-panel" role="dialog" aria-modal="true" aria-label="Search NYCTrove">
    <div class="search-panel__head">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.6"/><path d="M13.5 13.5L18 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
      <input type="search" placeholder="Search itineraries, attractions, food, transport…" aria-label="Search the guide" autocomplete="off" data-search-input />
      <button class="search-panel__close" type="button" aria-label="Close search" data-search-close>×</button>
    </div>
    <ul class="search-results" data-search-results></ul>
    <p class="search-hint">Press <strong>/</strong> to search · <strong>Esc</strong> to close</p>
  </div>
</div>
<script src="/assets/js/main.js?v=${assetVersion}" defer></script>
<script src="/assets/js/search.js?v=${assetVersion}" defer></script>`;
}

export function renderPage({ page, body }) {
  const bodyClass = ["no-js", page.bodyClass].filter(Boolean).join(" ");
  return `<!DOCTYPE html>
<html lang="en-US" class="no-js">
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
