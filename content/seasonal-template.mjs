/**
 * Shared renderer for seasonal guides (Thanksgiving, Christmas, summer, events).
 */
import {
  btn,
  sectionHead,
  pageHero,
  card,
  mediaCard,
  callout,
  faq,
  newsletter,
  pageNav,
  img,
  metaItems,
  eyebrow,
} from "./components.mjs";

export function renderSeasonalPage(d) {
  return `
${pageHero({
  image: img(d.heroImage),
  alt: d.heroAlt,
  crumbs: d.crumbs,
  eyebrowText: d.eyebrowText || "Seasonal guide",
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
      <div class="split__body" data-reveal>
        ${eyebrow(d.introEyebrow || "The short version")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.introTitle}</h2>
        <p class="lead">${d.introLead}</p>
        ${d.introParagraphs.map((p) => `<p class="muted">${p}</p>`).join("")}
        ${d.mapId ? `<div class="split__actions"><a class="map-open" href="map.html#${d.mapId}">Show the area on the map</a></div>` : ""}
      </div>
      <div class="split__media split__media--wide">
        <img src="${img(d.introImage)}" alt="${d.introImageAlt}" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: d.highlightsEyebrow || "What's on",
      title: d.highlightsTitle,
      lead: d.highlightsLead || "",
    })}
    <div class="grid grid--3">
      ${d.highlights
        .map(
          (h, i) => `<div class="card" style="gap:.5rem">
  <span class="card__kicker">${h.kicker || String(i + 1).padStart(2, "0")}</span>
  <h3>${h.title}</h3>
  <p>${h.text}</p>
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
          eyebrowText: "Plan it",
          title: d.planTitle || "How to plan around it",
          lead: d.planLead || "",
        })}
        <ol class="steps">
          ${d.planSteps.map((step) => `<li><span>${step}</span></li>`).join("")}
        </ol>
      </div>
      <div>
        ${d.tips.map((t) => callout({ icon: t.icon || "◆", title: t.title, text: t.text })).join("")}
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Local rhythm")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.localTitle || "What locals do"}</h2>
        <ul class="feature-list" style="margin-top:1.8rem">
          ${d.localTips
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
        <img src="${img(d.localImage)}" alt="${d.localImageAlt}" width="1000" height="1250" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Keep reading",
      title: d.relatedTitle || "Related guides",
      lead: d.relatedLead || "",
      action: `<a class="link-arrow" href="whats-on.html">All seasonal guides</a>`,
    })}
    <div class="grid grid--3">
      ${d.related
        .map((r) =>
          mediaCard({
            href: r.href,
            image: img(r.image),
            alt: r.alt,
            kicker: r.kicker,
            title: r.title,
            text: r.text,
            meta: r.meta,
          })
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "The seasonal email",
      text: "What is worth booking this month, what to avoid, and the dates that actually matter — one short email a week.",
      source: d.source,
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: d.faqTitle || "Seasonal questions", lead: "" })}
    ${faq(d.faq)}
  </div>
</section>

${pageNav({ prev: d.prev, next: d.next })}
`;
}
