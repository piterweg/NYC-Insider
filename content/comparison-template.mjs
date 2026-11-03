/**
 * Shared renderer for comparison and "is it worth it" decision pages.
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
  table,
  img,
  metaItems,
  eyebrow,
  verifiedNote,
} from "./components.mjs";

export function renderComparisonPage(d) {
  return `
${pageHero({
  image: img(d.heroImage),
  alt: d.heroAlt,
  crumbs: d.crumbs,
  eyebrowText: d.eyebrowText,
  title: d.h1,
  lead: d.lead,
  meta: metaItems(...d.heroMeta),
})}

<section class="section section--tight">
  <div class="container">
    <div class="callout" style="border-left-width:3px;padding:1.5rem 1.7rem">
      <span class="callout__icon" aria-hidden="true">◆</span>
      <div>
        <h4>${d.verdictTitle || "The short answer"}</h4>
        <p style="font-size:1.05rem;color:var(--text)">${d.verdict}</p>
      </div>
    </div>
  </div>
</section>

<section class="facts-band">
  <div class="container">
    <div class="facts">
      ${d.facts
        .map(
          (f) => `<div class="fact"><span class="fact__label">${f.label}</span><span class="fact__value">${f.value}</span></div>`
        )
        .join("")}
    </div>
    ${verifiedNote()}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split${d.flip ? " split--reverse" : ""}">
      <div class="split__body" data-reveal>
        ${eyebrow(d.introEyebrow || "What is being compared")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.introTitle}</h2>
        <p class="lead">${d.introLead}</p>
        ${d.introParagraphs.map((p) => `<p class="muted">${p}</p>`).join("")}
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
      eyebrowText: "Side by side",
      title: d.tableTitle || "The comparison",
      lead: d.tableLead || "",
    })}
    ${table({
      caption: d.tableCaption,
      head: d.tableHead,
      rows: d.tableRows,
    })}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "How to choose",
      title: d.chooseTitle || "Choose by the trip you are taking",
      lead: d.chooseLead || "",
    })}
    <div class="grid grid--2">
      ${d.choices
        .map(
          (c) => `<div class="card" style="gap:.5rem">
  <span class="card__kicker">${c.kicker || "Choose"}</span>
  <h3>${c.title}</h3>
  <p>${c.text}</p>
</div>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${eyebrow("Costs and booking")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.moneyTitle || "What it costs and how to book"}</h2>
        <div class="prose" style="color:var(--text-on-dark-muted);margin-top:1.2rem">
          <p>${d.moneyText}</p>
          <p>${d.bookingText}</p>
        </div>
        <div class="split__actions">
          ${d.official ? btn({ href: d.official.url, label: d.official.label, attrs: 'rel="nofollow noopener" target="_blank"' }) : ""}
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
      eyebrowText: "Keep reading",
      title: d.relatedTitle || "Related guides",
      lead: d.relatedLead || "",
      action: `<a class="link-arrow" href="attractions.html">All things to do</a>`,
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
      title: "The decision email",
      text: "One short weekly note on what is worth booking in New York — and what is not.",
      source: d.source,
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: d.faqTitle || "Comparison questions", lead: "" })}
    ${faq(d.faq)}
  </div>
</section>

${pageNav({ prev: d.prev, next: d.next })}
`;
}
