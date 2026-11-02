import {
  btn,
  sectionHead,
  pageHero,
  card,
  callout,
  faq,
  ctaBand,
  img,
  metaItems,
  eyebrow,
} from "../components.mjs";

export default {
  path: "contact.html",
  navSection: "home",
  bodyClass: "page-inner",
  title: "Contact NYC Insider",
  description:
    "Contact NYC Insider about a correction, press request, collaboration or reader question. Email hello@nycinsider.com — we reply within a few working days.",
  priority: "0.4",
  changefreq: "monthly",
  ogImage: "assets/img/grand-central.webp",
  render: () => `
${pageHero({
  image: img("grand-central.webp"),
  alt: "The vaulted main concourse of Grand Central Terminal",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "contact.html", label: "Contact" },
  ],
  eyebrowText: "Contact",
  title: "Talk to NYC Insider",
  lead: "Corrections, press questions, collaboration ideas and reader questions all land in the same inbox. Here is what to send, and where.",
  meta: metaItems("Email is best", "Replies within a few working days", "hello@nycinsider.com"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Reasons to write",
      title: "Four things we are always glad to receive",
      lead: "We are a small editorial team, so the more specific your message, the faster we can help.",
    })}
    <div class="grid grid--2">
      ${card({
        kicker: "Corrections",
        title: "Something on the site is wrong",
        text: "Prices, opening hours and transit details change faster than any guide. If a page is out of date, that is the most useful email you can send us. Include the page address and the source you are using.",
      })}
      ${card({
        kicker: "Press",
        title: "A media request or interview",
        text: "We are happy to talk about New York travel, itineraries, crowd patterns and the practical side of visiting the city. Include your outlet, your angle and your deadline.",
      })}
      ${card({
        kicker: "Collaborations",
        title: "A project you think fits",
        text: "We work with tourism boards, transport operators and travel brands on clearly labelled projects. We do not sell guide placement, rankings or positive coverage. Tell us what you have in mind.",
      })}
      ${card({
        kicker: "Reader questions",
        title: "A trip you are planning",
        text: "We answer what we can. We cannot book tickets, hold reservations or give live travel updates. For an emergency call 911; for city services call 311.",
      })}
    </div>
  </div>
</section>

<section class="section bg-paper-2" id="contact-form">
  <div class="container container--narrow">
    ${sectionHead({
      eyebrowText: "Send a message",
      title: "The contact form",
      lead: "The form is a helper, not a mailbox. Fill it in and it will show you exactly what to send, with the address and subject line ready.",
    })}
    <div class="prose">
      <p>We do not run a ticket desk and cannot make, change or cancel bookings. Anything you send is read by a person, usually within a few working days. Please do not include passport numbers, payment details or other sensitive information in the message.</p>
    </div>
    <form class="contact-form" data-contact novalidate style="margin-top:2rem">
      <div class="grid grid--2">
        <div class="field">
          <label for="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" autocomplete="name" required />
        </div>
        <div class="field">
          <label for="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required />
        </div>
      </div>
      <div class="field">
        <label for="contact-topic">What is this about?</label>
        <select id="contact-topic" name="topic" required>
          <option value="">Choose a topic</option>
          <option value="Correction">Correction</option>
          <option value="Press">Press</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Something else">Something else</option>
        </select>
      </div>
      <div class="field">
        <label for="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="7" required style="width:100%;min-height:10rem;resize:vertical"></textarea>
      </div>
      <p class="small muted">All four fields are required. Nothing is transmitted from this page — submitting shows the address to email.</p>
      <button class="btn" type="submit">Prepare my email</button>
      <p class="form-message" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__body" data-reveal>
        ${eyebrow("What happens next")}
        <h2 style="font-size:var(--step-3);margin-top:.7rem">Response times, honestly</h2>
        <p>Email is the fastest route: <a href="mailto:hello@nycinsider.com">hello@nycinsider.com</a>. We aim to answer everything within a few working days, Monday to Friday, New York time. Reader questions can take longer in the run-up to a holiday weekend, when the inbox is busiest.</p>
        <p>If you are on a press deadline, put the word Deadline and the date in the subject line and we will try to come back to you sooner. If you are reporting a correction, a direct link to the page saves us a step and gets it fixed faster.</p>
        <p class="muted">We do not share reader emails with third parties, and we do not add contact-form senders to the newsletter. See the <a href="privacy.html">privacy policy</a> for the detail.</p>
      </div>
      <div>
        ${callout({
          icon: "✉",
          title: "Prefer to write from your own inbox?",
          text: 'That works just as well. Send your message to <a href="mailto:hello@nycinsider.com">hello@nycinsider.com</a> with a one-line subject that tells us what it is about.',
        })}
        <div style="margin-top:1.5rem">
          ${btn({
            href: "mailto:hello@nycinsider.com",
            label: "Email hello@nycinsider.com",
            variant: "outline",
          })}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-paper-2">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Before you write",
      title: "Three quick answers",
      lead: "These come up often enough to be worth answering before the email.",
    })}
    ${faq([
      {
        q: "Can you book tickets or hotels for me?",
        a: "<p>No. NYC Insider is a guide, not a travel agent. We can point you to the right official seller and explain how the pricing works, but the booking and the customer service afterwards are theirs. Our <a href=\"passes.html\">passes guide</a> and <a href=\"plan-your-trip.html\">planning guide</a> cover the common decisions.</p>",
      },
      {
        q: "Do you accept guest posts, link insertions or paid reviews?",
        a: "<p>No. We do not publish guest posts, sell links or accept payment for coverage. We do work with partners on clearly labelled collaborations, so if your project is a genuine fit, describe it and we will tell you honestly whether it is.</p>",
      },
      {
        q: "Can I reuse your photos or text?",
        a: "<p>Original photography and text are copyrighted. For a specific request — a school project, a press piece, a licensed use — email us with what you need and how it will be used. Third-party photos and their licences are listed on <a href=\"credits.html\">credits</a>, and the terms are in our <a href=\"terms.html\">terms of use</a>.</p>",
      },
    ])}
  </div>
</section>

${ctaBand({
  eyebrowText: "While you are here",
  title: "Planning rather than asking?",
  text: "The itineraries and the practical guide answer most trip questions without a back-and-forth.",
  actions: `${btn({ href: "itineraries.html", label: "Read the itineraries" })}${btn({
    href: "plan-your-trip.html",
    label: "Plan your trip",
    variant: "outline",
  })}`,
})}

<script>
(function () {
  "use strict";
  var form = document.querySelector("[data-contact]");
  if (!form) return;

  var name = form.querySelector("#contact-name");
  var email = form.querySelector("#contact-email");
  var topic = form.querySelector("#contact-topic");
  var message = form.querySelector("#contact-message");
  var status = form.querySelector(".form-message");
  var emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;

  function mark(field, ok) {
    if (ok) {
      field.removeAttribute("aria-invalid");
    } else {
      field.setAttribute("aria-invalid", "true");
    }
  }

  function validate() {
    var fields = [name, email, topic, message];
    var ok = true;
    fields.forEach(function (field) {
      var filled = field.value.trim().length > 0;
      mark(field, filled);
      if (!filled) ok = false;
    });
    if (email.value.trim() && !emailPattern.test(email.value.trim())) {
      mark(email, false);
      ok = false;
    }
    return ok;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validate()) {
      status.textContent = "Please complete the required fields before continuing.";
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var link = document.createElement("a");
    link.href = "mailto:hello@nycinsider.com?subject=" + encodeURIComponent("NYC Insider — " + topic.value);
    link.textContent = "hello@nycinsider.com";

    status.textContent = "This form has no backend yet, so nothing was sent. Please email your message to ";
    status.appendChild(link);
    status.appendChild(document.createTextNode(" and we will reply within a few working days."));
  });
})();
</script>
`,
};
