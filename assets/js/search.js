/* NYC Insider - client-side search (header overlay and dedicated search page). */
(function () {
  "use strict";

  var overlay = document.querySelector("[data-search-overlay]");
  var overlayInput = overlay ? overlay.querySelector("[data-search-input]") : null;
  var overlayResults = overlay ? overlay.querySelector("[data-search-results]") : null;
  var pageRoot = document.querySelector("[data-search-page]");
  var pageInput = pageRoot ? pageRoot.querySelector("[data-search-input]") : null;
  var pageResults = pageRoot ? pageRoot.querySelector("[data-search-results]") : null;
  var openers = document.querySelectorAll("[data-search-open]");
  var closers = document.querySelectorAll("[data-search-close]");
  var index = null;
  var loading = null;

  function loadIndex() {
    if (index) return Promise.resolve(index);
    if (!loading) {
      loading = fetch("assets/data/search-index.json")
        .then(function (response) {
          if (!response.ok) throw new Error("Search index unavailable");
          return response.json();
        })
        .then(function (data) {
          index = data;
          return data;
        })
        .catch(function () {
          index = [];
          return index;
        });
    }
    return loading;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char];
    });
  }

  function score(item, terms) {
    var title = item.title.toLowerCase();
    var description = (item.description || "").toLowerCase();
    var text = (item.text || "").toLowerCase();
    var total = 0;
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      if (title.indexOf(term) !== -1) total += 8;
      if (description.indexOf(term) !== -1) total += 4;
      if (text.indexOf(term) !== -1) total += 1;
      if (title.indexOf(term) === 0) total += 4;
    }
    return total;
  }

  function render(query, resultsEl) {
    if (!resultsEl) return;
    var terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      resultsEl.innerHTML =
        '<li class="search-empty">Type a few letters, or try "pizza", "passes", "Brooklyn" or "airport".</li>';
      return;
    }
    loadIndex().then(function (items) {
      var ranked = items
        .map(function (item) {
          return { item: item, score: score(item, terms) };
        })
        .filter(function (entry) {
          return entry.score > 0;
        })
        .sort(function (a, b) {
          return b.score - a.score;
        })
        .slice(0, 12);
      if (!ranked.length) {
        resultsEl.innerHTML =
          '<li class="search-empty">No matches for "' + escapeHtml(query) + '". Try a broader word.</li>';
        return;
      }
      resultsEl.innerHTML = ranked
        .map(function (entry) {
          var item = entry.item;
          return (
            '<li><a href="' +
            escapeHtml(item.path) +
            '"><strong>' +
            escapeHtml(item.title) +
            "</strong><span>" +
            escapeHtml(item.description || "") +
            "</span></a></li>"
          );
        })
        .join("");
    });
  }

  function bindSearch(input, resultsEl) {
    if (!input || !resultsEl) return;
    var timer = null;
    input.addEventListener("input", function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        render(input.value, resultsEl);
      }, 120);
    });
    render(input.value, resultsEl);
  }

  bindSearch(overlayInput, overlayResults);
  bindSearch(pageInput, pageResults);
  loadIndex();

  function openOverlay() {
    if (!overlay) return;
    overlay.hidden = false;
    document.body.classList.add("search-open");
    window.setTimeout(function () {
      if (overlayInput) overlayInput.focus();
    }, 30);
    if (overlayInput && overlayResults) render(overlayInput.value, overlayResults);
  }

  function closeOverlay() {
    if (!overlay) return;
    overlay.hidden = true;
    document.body.classList.remove("search-open");
  }

  openers.forEach(function (button) {
    button.addEventListener("click", openOverlay);
  });
  closers.forEach(function (button) {
    button.addEventListener("click", closeOverlay);
  });
  if (overlay) {
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) closeOverlay();
    });
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeOverlay();
    if (
      event.key === "/" &&
      !event.metaKey &&
      !event.ctrlKey &&
      document.activeElement &&
      !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)
    ) {
      event.preventDefault();
      openOverlay();
    }
  });
})();
