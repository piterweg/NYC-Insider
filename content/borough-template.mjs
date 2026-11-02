/**
 * Shared renderer for the five borough pages.
 * Keeps layout and components identical across manhattan/brooklyn/queens/bronx/staten-island
 * while each page module supplies its own copy.
 */
import {
  btn,
  sectionHead,
  pageHero,
  card,
  callout,
  faq,
  newsletter,
  ctaBand,
  pageNav,
  img,
  metaItems,
  eyebrow,
} from "./components.mjs";

export function renderBoroughPage(d) {
  return `
${pageHero({
  image: img(d.heroImage),
  alt: d.heroAlt,
  crumbs: d.crumbs,
  eyebrowText: d.eyebrowText,
  title: d.title,
  lead: d.lead,
  meta: metaItems(...d.meta),
})}

<section class="section">
  <div class="container">
    <div class="split${d.flip ? " split--reverse" : ""}">
      <div class="split__media">
        <img src="${img(d.splitImage)}" alt="${d.splitImageAlt}" width="1000" height="1250" loading="lazy" />
      </div>
      <div class="split__body" data-reveal>
        ${eyebrow(d.introEyebrow)}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.introTitle}</h2>
        <p class="lead">${d.introLead}</p>
        ${d.introParagraphs.map((p) => `<p class="muted">${p}</p>`).join("")}
        <div class="stats" style="margin-top:2rem">
          ${d.stats.map((s) => `<div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join("")}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Neighbourhoods",
      title: d.neighbourhoodTitle || "Where to go",
      lead: d.neighbourhoodLead || "",
    })}
    <div class="grid grid--3">
      ${d.neighbourhoods
        .map((n) =>
          card({
            kicker: n.kicker,
            title: n.name,
            text: n.text,
            foot: n.link ? `<a class="link-arrow" href="${n.link}">${n.linkLabel || "Read more"}</a>` : "",
          })
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "What to do",
      title: d.highlightsTitle || "The essentials",
      lead: d.highlightsLead || "",
    })}
    <div class="grid grid--2">
      ${d.highlights
        .map(
          (h, i) => `<div class="card" style="gap:.6rem">
  <span class="card__kicker">${String(i + 1).padStart(2, "0")}</span>
  <h3>${h.title}</h3>
  <p>${h.text}</p>
</div>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow(d.foodEyebrow || "Where to eat")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.foodTitle}</h2>
        <p class="lead">${d.foodLead}</p>
        <ul class="feature-list" style="margin-top:1.8rem">
          ${d.foodSpots
            .map(
              (f) => `<li>
  <span class="feature-list__num">◆</span>
  <div><h4>${f.name}</h4><p>${f.text}</p></div>
</li>`
            )
            .join("")}
        </ul>
      </div>
      <div class="split__media split__media--wide">
        <img src="${img(d.foodImage)}" alt="${d.foodImageAlt}" width="1000" height="688" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "One day here",
          title: d.dayTitle,
          lead: d.dayLead,
        })}
        <ul class="timeline">
          ${d.dayStops
            .map(
              (s) => `<li class="timeline__item">
  <h4>${s.time} · ${s.title}</h4>
  <p>${s.text}</p>
</li>`
            )
            .join("")}
        </ul>
      </div>
      <div>
        <div class="card" style="margin-bottom:1.5rem">
          <span class="card__kicker">Getting there</span>
          <h3 style="font-size:1.1rem">${d.transitTitle || "How to arrive"}</h3>
          <p>${d.transitText}</p>
        </div>
        ${d.tips.map((t) => callout({ icon: t.icon || "◆", title: t.title, text: t.text })).join("")}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: d.faqTitle || "Practical questions", lead: "" })}
    ${faq(d.faq)}
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: d.newsletterTitle || "One useful New York email a week",
      text: d.newsletterText || "Neighbourhood guides, price changes worth knowing about, and the occasional tip you will not find on a booking site.",
      source: d.source,
    })}
  </div>
</section>

${pageNav({ prev: d.prev, next: d.next })}
`;
}
