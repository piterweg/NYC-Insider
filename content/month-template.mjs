/**
 * Shared renderer for the "NYC in [month]" long-tail pages.
 */
import {
  sectionHead,
  pageHero,
  table,
  card,
  callout,
  faq,
  newsletter,
  pageNav,
  img,
  metaItems,
  eyebrow,
  verifiedNote,
} from "./components.mjs";

export function renderMonthPage(d) {
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
        ${eyebrow(d.introEyebrow || "The short version")}
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
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "Weather", title: d.weatherTitle || "What the weather does", lead: d.weatherLead || "" })}
        ${table({
          caption: `Typical ${d.monthName} weather in New York`,
          head: ["Measure", "Typical"],
          rows: d.weatherRows,
        })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "What's on", title: d.eventsTitle || "What is happening", lead: d.eventsLead || "" })}
        <ul class="timeline">
          ${d.events
            .map(
              (e) => `<li class="timeline__item">
  <h4>${e.when} — ${e.title}</h4>
  <p>${e.text}</p>
</li>`
            )
            .join("")}
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "How to spend it",
      title: d.planTitle || `A good ${d.monthName} day`,
      lead: d.planLead || "",
    })}
    <div class="grid grid--3">
      ${d.planCards
        .map(
          (c) => `<div class="card" style="gap:.5rem">
  <span class="card__kicker">${c.kicker || ""}</span>
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
        ${eyebrow("Practical")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.practicalTitle || "Planning notes"}</h2>
        <div class="prose" style="color:var(--text-on-dark-muted);margin-top:1.2rem">
          <p>${d.crowds}</p>
          <p>${d.packing}</p>
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
    ${sectionHead({ eyebrowText: "Other months", title: "The rest of the year", lead: "", action: `<a class="link-arrow" href="when-to-visit.html">Month-by-month guide</a>` })}
    <div class="grid grid--3">
      ${d.otherMonths
        .map((m) =>
          card({
            kicker: m.kicker,
            title: `<a href="${m.href}">${m.title}</a>`,
            text: m.text,
            foot: `<a class="link-arrow" href="${m.href}">Read the guide</a>`,
          })
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "What is worth booking this month",
      text: "One short email a week on New York weather, events and the things worth planning around.",
      source: d.source,
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: d.faqTitle || "Month questions", lead: "" })}
    ${faq(d.faq)}
  </div>
</section>

${pageNav({ prev: d.prev, next: d.next })}
`;
}
