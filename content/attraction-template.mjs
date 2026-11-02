/**
 * Shared renderer for individual attraction pages
 * (Empire State Building, Top of the Rock, the Met, Central Park, …).
 */
import {
  btn,
  sectionHead,
  pageHero,
  mediaCard,
  callout,
  faq,
  newsletter,
  pageNav,
  img,
  metaItems,
  eyebrow,
} from "./components.mjs";

export function renderAttractionPage(d) {
  return `
${pageHero({
  image: img(d.heroImage),
  alt: d.heroAlt,
  crumbs: d.crumbs,
  eyebrowText: d.eyebrowText || "Attraction",
  title: d.h1,
  lead: d.lead,
  meta: metaItems(...d.heroMeta),
})}

<section class="facts-band">
  <div class="container">
    <div class="facts">
      ${d.facts
        .map(
          (f) => `<div class="fact"><span class="fact__label">${f.label}</span><span class="fact__value">${f.value}</span></div>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split${d.flip ? " split--reverse" : ""}">
      <div class="split__media split__media--wide">
        <img src="${img(d.introImage)}" alt="${d.introImageAlt}" width="1000" height="688" loading="lazy" />
      </div>
      <div class="split__body" data-reveal>
        ${eyebrow(d.introEyebrow)}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.introTitle}</h2>
        <p class="lead">${d.introLead}</p>
        ${d.introParagraphs.map((p) => `<p class="muted">${p}</p>`).join("")}
        <div class="split__actions">
          <a class="map-open" href="map.html#${d.mapId}">Show on the map</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: d.reasonsEyebrow || "Why go",
      title: d.reasonsTitle,
      lead: d.reasonsLead || "",
    })}
    <div class="grid grid--3">
      ${d.reasons
        .map(
          (r, i) => `<div class="card" style="gap:.5rem">
  <span class="card__kicker">${String(i + 1).padStart(2, "0")}</span>
  <h3>${r.title}</h3>
  <p>${r.text}</p>
</div>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Tickets and entry",
          title: d.bookingTitle || "How to book and get in",
          lead: d.bookingLead || "",
        })}
        <ol class="steps">
          ${d.bookingSteps.map((step) => `<li><span>${step}</span></li>`).join("")}
        </ol>
        ${d.bookingNote ? callout({ icon: "◆", title: "Good to know", text: d.bookingNote }) : ""}
      </div>
      <div class="official-card">
        <span class="eyebrow" style="color:var(--brass)">Official tickets</span>
        <h3>${d.official.title}</h3>
        <p>${d.official.text}</p>
        ${btn({
          href: d.official.url,
          label: d.official.cta,
          attrs: 'rel="nofollow noopener" target="_blank"',
        })}
        <p class="small">${d.official.note}</p>
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Insider tips")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.tipsTitle || "What most visitors get wrong"}</h2>
        <ul class="feature-list" style="margin-top:1.8rem">
          ${d.tips
            .map(
              (t, i) => `<li>
  <span class="feature-list__num">${String(i + 1).padStart(2, "0")}</span>
  <div><h4>${t.title}</h4><p>${t.text}</p></div>
</li>`
            )
            .join("")}
        </ul>
      </div>
      <div class="split__media">
        <img src="${img(d.tipsImage)}" alt="${d.tipsImageAlt}" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Pair it with",
      title: d.nearbyTitle || "Nearby and worth your time",
      lead: d.nearbyLead || "",
      action: `<a class="link-arrow" href="attractions.html">All attractions</a>`,
    })}
    <div class="grid grid--3">
      ${d.nearby
        .map((n) =>
          mediaCard({
            href: n.href,
            image: img(n.image),
            alt: n.alt,
            kicker: n.kicker,
            title: n.title,
            text: n.text,
            meta: n.meta,
          })
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Get the price and queue updates",
      text: "One useful New York email a week: what is worth booking now, what changed, and where the queues are.",
      source: d.source,
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: d.faqTitle || "Questions people ask", lead: "" })}
    ${faq(d.faq)}
  </div>
</section>

${pageNav({ prev: d.prev, next: d.next })}
`;
}
