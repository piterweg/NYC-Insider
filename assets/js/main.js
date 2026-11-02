/* NYC Insider — shared interactions */
(function () {
  "use strict";

  const html = document.documentElement;

  /* ------------------------------------------------------------------
     Header state on scroll
     ------------------------------------------------------------------ */
  const header = document.querySelector("[data-header]");
  if (header && !document.body.classList.contains("page-inner")) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------ */
  const toggle = document.querySelector("[data-nav-toggle]");
  const drawer = document.querySelector("[data-mobile-nav]");
  const body = document.body;

  if (toggle && drawer) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      drawer.classList.toggle("is-open", open);
      drawer.setAttribute("aria-hidden", String(!open));
      body.classList.toggle("nav-open", open);
      if (open) {
        const first = drawer.querySelector("a");
        if (first) first.focus({ preventScroll: true });
      }
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    drawer.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawer.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1080 && drawer.classList.contains("is-open")) setOpen(false);
    });
  }

  /* ------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------ */
  const revealItems = document.querySelectorAll("[data-reveal]");
  if (revealItems.length) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      revealItems.forEach((el) => el.classList.add("is-revealed"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealItems.forEach((el) => observer.observe(el));
    }
  }

  /* ------------------------------------------------------------------
     Back to top
     ------------------------------------------------------------------ */
  const toTop = document.querySelector("[data-to-top]");
  if (toTop) {
    const update = () => toTop.classList.toggle("is-visible", window.scrollY > 900);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ------------------------------------------------------------------
     Newsletter forms (front-end validation only — no backend wired yet)
     ------------------------------------------------------------------ */
  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    const message = form.querySelector(".form-message");
    const input = form.querySelector('input[type="email"]');
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!input || !message) return;
      const value = input.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
      if (!valid) {
        input.setAttribute("aria-invalid", "true");
        message.textContent = "Please enter a valid email address.";
        input.focus();
        return;
      }
      input.removeAttribute("aria-invalid");
      message.textContent = "You are on the list. Watch your inbox for the next dispatch.";
      form.reset();
    });
  });

  /* ------------------------------------------------------------------
     Smooth in-page anchors with sticky header offset
     ------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });

  /* ------------------------------------------------------------------
     Current year in footer (if a placeholder is present)
     ------------------------------------------------------------------ */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
