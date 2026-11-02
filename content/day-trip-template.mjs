/**
 * Shared renderer for day-trip pages (Philadelphia, Washington, Boston, …).
 */
import {
  sectionHead,
  pageHero,
  card,
  callout,
  faq,
  newsletter,
  pageNav,
  table,
  img,
  metaItems,
  eyebrow,
} from "./components.mjs";

export function renderDayTripPage(d) {
  return `
${pageHero({
  image: img(d.heroImage),
  alt: d.heroAlt,
  crumbs: d.crumbs,
  eyebrowText: d.eyebrowText || "Day trip",
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
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow(d.introEyebrow || "The short answer")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.introTitle}</h2>
        <p class="lead">${d.introLead}</p>
        ${d.introParagraphs.map((p) => `<p class="muted">${p}</p>`).join("")}
      </div>
      <div>
        ${d.callouts.map((c) => callout({ icon: c.icon || "◆", title: c.title, text: c.text })).join("")}
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Getting there",
      title: d.transportTitle || "How to get there and back",
      lead: d.transportLead || "",
    })}
    ${table({
      caption: d.transportCaption,
      head: ["Option", "Journey time", "Approx. round trip", "Notes"],
      rows: d.transportRows,
    })}
    ${d.transportNote ? `<p class="small muted" style="margin-top:1rem">${d.transportNote}</p>` : ""}
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
          (h) => `<div class="card" style="gap:.5rem">
  <span class="card__kicker">${h.kicker || ""}</span>
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
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({
          eyebrowText: "Sample day",
          title: d.dayTitle || "A realistic day trip",
          lead: d.dayLead || "",
        })}
        <ul class="timeline">
          ${d.dayStops
            .map(
              (s) => `<li class="timeline__item">
  <h4>${s.time} — ${s.title}</h4>
  <p>${s.text}</p>
</li>`
            )
            .join("")}
        </ul>
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
      eyebrowText: "Other trips",
      title: d.otherTitle || "More from New York",
      lead: d.otherLead || "",
      action: `<a class="link-arrow" href="day-trips.html">All day trips</a>`,
    })}
    <div class="grid grid--3">
      ${d.otherTrips
        .map(
          (t) => `<a class="media-card" href="${t.href}">
  <div class="media-card__body" style="padding:1.5rem">
    <span class="card__kicker">${t.kicker}</span>
    <h3>${t.title}</h3>
    <p>${t.text}</p>
    <div class="media-card__foot"><span class="link-arrow">Read the guide</span></div>
  </div>
</a>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "Weekend ideas, once a week",
      text: "New York and the places within a day of it: what is worth the train fare this month.",
      source: d.source,
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: d.faqTitle || "Day-trip questions", lead: "" })}
    ${faq(d.faq)}
  </div>
</section>

${pageNav({ prev: d.prev, next: d.next })}
`;
}
