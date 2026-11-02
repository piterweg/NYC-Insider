/**
 * Shared renderer for neighbourhood guides (SoHo, Harlem, Williamsburg, …).
 */
import {
  sectionHead,
  pageHero,
  mediaCard,
  callout,
  faq,
  newsletter,
  pageNav,
  table,
  img,
  metaItems,
  eyebrow,
} from "./components.mjs";

export function renderNeighbourhoodPage(d) {
  return `
${pageHero({
  image: img(d.heroImage),
  alt: d.heroAlt,
  crumbs: d.crumbs,
  eyebrowText: d.eyebrowText || "Neighbourhood",
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
        ${eyebrow(d.introEyebrow || "First impressions")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.introTitle}</h2>
        <p class="lead">${d.introLead}</p>
        ${d.introParagraphs.map((p) => `<p class="muted">${p}</p>`).join("")}
        <div class="split__actions">
          <a class="map-open" href="map.html#${d.mapId}">Show on the map</a>
        </div>
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
      eyebrowText: "What to see",
      title: d.seeTitle || "The streets worth walking",
      lead: d.seeLead || "",
    })}
    <div class="grid grid--2">
      ${d.see
        .map(
          (s, i) => `<div class="card" style="gap:.5rem">
  <span class="card__kicker">${String(i + 1).padStart(2, "0")}</span>
  <h3>${s.title}</h3>
  <p>${s.text}</p>
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
          eyebrowText: "Where to eat",
          title: d.eatTitle || "Eating and drinking",
          lead: d.eatLead || "",
        })}
        ${table({
          caption: `Where to eat in ${d.areaName}`,
          head: ["Place", "What to order", "Price"],
          rows: d.eatRows,
        })}
      </div>
      <div>
        ${sectionHead({
          eyebrowText: "An afternoon here",
          title: d.planTitle || "A perfect afternoon",
          lead: d.planLead || "",
        })}
        <ul class="timeline">
          ${d.planStops
            .map(
              (s) => `<li class="timeline__item">
  <h4>${s.time} — ${s.title}</h4>
  <p>${s.text}</p>
</li>`
            )
            .join("")}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${eyebrow("Practical")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Getting there and getting it right</h2>
        <div class="prose" style="color:var(--text-on-dark-muted);margin-top:1.2rem">
          <p>${d.transit}</p>
          <p>${d.bestTime}</p>
        </div>
      </div>
      <div>
        ${d.tips.map((t) => callout({ icon: t.icon || "◆", title: t.title, text: t.text, dark: true })).join("")}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Keep exploring",
      title: d.nearbyTitle || "Nearby neighbourhoods",
      lead: d.nearbyLead || "",
      action: `<a class="link-arrow" href="neighbourhoods.html">All neighbourhoods</a>`,
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
      title: "Neighbourhood notes, weekly",
      text: "New openings, quiet corners and the streets worth a detour — one useful New York email a week.",
      source: d.source,
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: d.faqTitle || "Neighbourhood questions", lead: "" })}
    ${faq(d.faq)}
  </div>
</section>

${pageNav({ prev: d.prev, next: d.next })}
`;
}
