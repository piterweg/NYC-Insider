/**
 * Shared HTML components. Every function returns an HTML string.
 * Keep markup here so pages stay content-focused and consistent.
 */

/** Escape user-ish text for attributes / plain text. */
export const esc = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Site-relative image path helper. */
export const img = (name) => `assets/img/${name}`;

/** Inline SVG arrow (decorative). */
export const arrow = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 12L12 2M12 2H4.8M12 2V9.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function btn({ href, label, variant = "", size = "", block = false, attrs = "" }) {
  const classes = ["btn"];
  if (variant) classes.push(`btn--${variant}`);
  if (size) classes.push(`btn--${size}`);
  if (block) classes.push("btn--block");
  return `<a class="${classes.join(" ")}" href="${href}" ${attrs}>${label}</a>`;
}

export function eyebrow(text) {
  return `<span class="eyebrow">${text}</span>`;
}

export function sectionHead({ eyebrowText, title, lead, action, center = false, dark = false }) {
  return `<div class="section-head${center ? " section-head--center" : ""}">
  <div class="section-head__copy">
    ${eyebrowText ? eyebrow(eyebrowText) : ""}
    <h2>${title}</h2>
    ${lead ? `<p class="lead">${lead}</p>` : ""}
  </div>
  ${action ? `<div class="section-head__action">${action}</div>` : ""}
</div>`;
}

export function breadcrumbs(items, dark = false) {
  const list = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      return `<li>${isLast ? `<span aria-current="page">${item.label}</span>` : `<a href="${item.href}">${item.label}</a>`}</li>`;
    })
    .join("");
  return `<nav class="breadcrumbs${dark ? " breadcrumbs--dark" : ""}" aria-label="Breadcrumb"><ol>${list}</ol></nav>`;
}

export function heroHome({ image, alt, eyebrowText, title, lead, actions, meta }) {
  return `<section class="hero" id="top">
  <div class="hero__media">
    <img src="${image}" alt="${esc(alt)}" width="1200" height="683" fetchpriority="high" />
  </div>
  <div class="hero__inner container">
    <div class="hero__content">
      ${eyebrowText ? eyebrow(eyebrowText) : ""}
      <h1>${title}</h1>
      <p class="lead">${lead}</p>
      <div class="hero__actions">${actions}</div>
    </div>
    ${meta ? `<div class="hero__meta">${meta}</div>` : ""}
  </div>
</section>`;
}

export function pageHero({ image, alt, crumbs, eyebrowText, title, lead, meta, modifiers = "" }) {
  return `<section class="page-hero ${modifiers}">
  <div class="page-hero__media">
    <img src="${image}" alt="${esc(alt)}" width="1200" height="683" fetchpriority="high" />
  </div>
  <div class="container">
    ${crumbs ? breadcrumbs(crumbs) : ""}
    <div style="margin-top: 1.4rem">
      ${eyebrowText ? eyebrow(eyebrowText) : ""}
      <h1>${title}</h1>
      <p class="lead">${lead}</p>
      ${meta ? `<div class="page-hero__meta">${meta}</div>` : ""}
    </div>
  </div>
</section>`;
}

export function photoCard({ href, image, alt, tag, title, text, tall = false }) {
  return `<a class="photo-card${tall ? " photo-card--tall" : ""}" href="${href}">
  <img src="${image}" alt="${esc(alt)}" width="800" height="1000" loading="lazy" />
  <div class="photo-card__body">
    ${tag ? `<span class="photo-card__tag">${tag}</span>` : ""}
    <h3>${title}</h3>
    <p>${text}</p>
  </div>
</a>`;
}

export function mediaCard({ href, image, alt, kicker, title, text, meta }) {
  return `<a class="media-card" href="${href}">
  <div class="media-card__media">
    <img src="${image}" alt="${esc(alt)}" width="800" height="500" loading="lazy" />
  </div>
  <div class="media-card__body">
    ${kicker ? `<span class="card__kicker">${kicker}</span>` : ""}
    <h3>${title}</h3>
    <p>${text}</p>
    <div class="media-card__foot">
      ${meta ? `<div class="card__meta"><span>${meta}</span></div>` : `<span class="link-arrow">Read more</span>`}
    </div>
  </div>
</a>`;
}

export function card({ kicker, title, text, foot, hover = true }) {
  return `<article class="card${hover ? " card--hover" : ""}">
  ${kicker ? `<span class="card__kicker">${kicker}</span>` : ""}
  <h3>${title}</h3>
  <p>${text}</p>
  ${foot ? `<div class="card__foot">${foot}</div>` : ""}
</article>`;
}

export function boroughTile({ href, image, alt, name, text }) {
  return `<a class="borough-tile" href="${href}">
  <img src="${image}" alt="${esc(alt)}" width="800" height="600" loading="lazy" />
  <div>
    <h3>${name}</h3>
    <p>${text}</p>
  </div>
</a>`;
}

export function callout({ icon = "★", title, text, dark = false }) {
  return `<aside class="callout${dark ? " callout--dark" : ""}">
  <span class="callout__icon" aria-hidden="true">${icon}</span>
  <div>
    <h4>${title}</h4>
    <p>${text}</p>
  </div>
</aside>`;
}

export function passCard({ name, price, note, features, href, cta, featured = false, flag }) {
  return `<article class="pass-card${featured ? " pass-card--featured" : ""}">
  ${flag ? `<span class="pass-card__flag">${flag}</span>` : ""}
  <h3>${name}</h3>
  <p class="pass-card__price">${price}${note ? `<small>${note}</small>` : ""}</p>
  <ul>${features.map((f) => `<li><span>${f}</span></li>`).join("")}</ul>
  <div class="pass-card__foot">
    ${btn({ href, label: cta, variant: featured ? "" : "outline", attrs: 'aria-label="' + esc(`${name} — ${cta}`) + '"' })}
  </div>
</article>`;
}

export function day({ number, label, title, text, stops = [] }) {
  return `<article class="day">
  <div class="day__label">
    <span class="day__num">${number}</span>
    <span>${label}</span>
  </div>
  <div class="day__body">
    <h3>${title}</h3>
    ${text ? `<p>${text}</p>` : ""}
    ${
      stops.length
        ? `<ul class="day__stops">${stops
            .map((s) => (typeof s === "string" ? `<li>${s}</li>` : `<li><strong>${s.what}</strong> — ${s.where}</li>`))
            .join("")}</ul>`
        : ""
    }
  </div>
</article>`;
}

export function faq(items) {
  return `<div class="faq">${items
    .map(
      (item) => `<details>
  <summary>${item.q}</summary>
  <div class="faq__body">${item.a}</div>
</details>`
    )
    .join("")}</div>`;
}

export function table({ caption, head, rows, className = "" }) {
  return `<div class="table-wrap">
  <table class="data ${className}">
    ${caption ? `<caption class="sr-only">${caption}</caption>` : ""}
    <thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join("")}</tr></thead>
    <tbody>${rows
      .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
      .join("")}</tbody>
  </table>
</div>`;
}

export function newsletter({ title, text, source = "footer" }) {
  return `<section class="newsletter" aria-labelledby="nl-title">
  <div class="newsletter__grid">
    <div>
      <h2 id="nl-title">${title}</h2>
      <p>${text}</p>
    </div>
    <form class="newsletter-form" data-newsletter data-source="${source}" novalidate>
      <div class="row">
        <label class="sr-only" for="newsletter-email">Email address</label>
        <input id="newsletter-email" type="email" name="email" placeholder="Your email address" autocomplete="email" required />
        <button class="btn" type="submit">Subscribe</button>
      </div>
      <p class="consent">No spam, ever. One useful New York email a week, and a free skyline photo guide when you join. Read our <a href="privacy.html">privacy policy</a>.</p>
      <p class="form-message" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>`;
}

export function ctaBand({ eyebrowText, title, text, actions }) {
  return `<section class="section">
  <div class="container">
    <div class="cta-band">
      ${eyebrowText ? eyebrow(eyebrowText) : ""}
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="hero__actions" style="justify-content:center">${actions}</div>
    </div>
  </div>
</section>`;
}

export function pageNav({ prev, next }) {
  return `<nav class="page-nav" aria-label="More guides">
  ${prev ? `<a href="${prev.href}"><span>Previous</span><strong>${prev.label}</strong></a>` : "<span></span>"}
  ${next ? `<a href="${next.href}" style="text-align:right"><span>Next</span><strong>${next.label}</strong></a>` : ""}
</nav>`;
}

/** Standard meta row for hero sections. */
export const metaItems = (...items) =>
  items.map((item) => `<span>${item}</span>`).join("");


/**
 * Small fact-check marker used under the quick-facts band on guides.
 */
export function verifiedNote({ date = "2 November 2026", scope = "Prices, opening hours and transport details" } = {}) {
  return `<p class="verified-note"><span class="verified-note__check" aria-hidden="true">✓</span><span><strong>Checked ${date}.</strong> ${scope} were verified against official sources. Things change — confirm before you book. <a href="editorial.html">How we check</a>.</span></p>`;
}
