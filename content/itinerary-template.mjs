/**
 * Shared renderer for short and mid-length itineraries (1, 2, 4, 6 days).
 */
import {
  btn,
  sectionHead,
  pageHero,
  day,
  callout,
  card,
  table,
  faq,
  newsletter,
  pageNav,
  img,
  metaItems,
  eyebrow,
  verifiedNote,
} from "./components.mjs";

export function renderItineraryPage(d) {
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
        ${eyebrow(d.introEyebrow || "At a glance")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.introTitle}</h2>
        <p class="lead">${d.introLead}</p>
        ${d.introParagraphs.map((p) => `<p class="muted">${p}</p>`).join("")}
        <div class="stats" style="margin-top:2rem">
          ${d.stats.map((s) => `<div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join("")}
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
    ${sectionHead({ eyebrowText: "The plan", title: d.planTitle, lead: d.planLead || "" })}
    <div class="day-plan">
      ${d.days
        .map((entry) =>
          day({
            number: entry.number,
            label: entry.label,
            title: entry.title,
            text: entry.text,
            stops: entry.stops,
          })
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:start;gap:clamp(1.5rem,4vw,3.5rem)">
      <div>
        ${sectionHead({ eyebrowText: "Where to stay", title: d.stayTitle || "One base is enough", lead: d.stayLead || "" })}
        ${table({
          caption: d.stayCaption,
          head: ["Area", "Why it works", "Trade-off"],
          rows: d.stayRows,
        })}
      </div>
      <div>
        ${sectionHead({ eyebrowText: "Budget", title: d.budgetTitle || "What it costs", lead: d.budgetLead || "" })}
        ${table({
          caption: d.budgetCaption,
          head: ["Item", "Approx. cost", "Notes"],
          rows: d.budgetRows,
        })}
      </div>
    </div>
    <div style="margin-top:2rem">
      ${callout({ icon: "◆", title: d.bookingTitle || "Book these first", text: d.bookingText })}
    </div>
  </div>
</section>

<section class="section bg-ink">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("Make it work")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">${d.tipsTitle || "What makes or breaks this plan"}</h2>
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
      eyebrowText: "Other plans",
      title: d.otherTitle || "Not the right length?",
      lead: d.otherLead || "",
      action: `<a class="link-arrow" href="itineraries.html">All itineraries</a>`,
    })}
    <div class="grid grid--3">
      ${d.otherPlans
        .map((p) =>
          card({
            kicker: p.kicker,
            title: `<a href="${p.href}">${p.title}</a>`,
            text: p.text,
            foot: `<a class="link-arrow" href="${p.href}">See the plan</a>`,
          })
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${newsletter({
      title: "The plan, in your inbox",
      text: "We will email the printable version of this itinerary, plus one useful New York note a week.",
      source: d.source,
    })}
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({ eyebrowText: "Questions", title: d.faqTitle || "Plan questions", lead: "" })}
    ${faq(d.faq)}
  </div>
</section>

${pageNav({ prev: d.prev, next: d.next })}
`;
}
