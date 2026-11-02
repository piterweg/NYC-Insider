/**
 * NYC Insider — pass calculator for passes.html only.
 *
 * Vanilla JavaScript, no dependencies, no build step. The markup lives in
 * content/pages/passes.mjs; this file only reads the three inputs, prices the
 * three options and writes the results into the aria-live result panel.
 *
 * All figures are estimates. Pass prices are dynamic and change by date.
 */
(function () {
  "use strict";

  // Assumed average adult gate price for one paid attraction.
  var AVG_ATTRACTION = 45;

  // CityPASS: fixed five-attraction bundle, valid nine days from first use.
  var CITYPASS_PRICE = 149;
  var CITYPASS_ENTRIES = 5;
  var CITYPASS_VALID_DAYS = 9;

  // Go City Explorer: approximate adult price per person by number of choices.
  // These are the published tier prices rounded to whole dollars (November 2026).
  var EXPLORER_TIERS = {
    2: 89,
    3: 119,
    4: 149,
    5: 179,
    6: 209,
    7: 239,
    8: 269,
    9: 289,
    10: 299,
  };
  var EXPLORER_MAX_CHOICES = 10;

  var els = {
    attractions: document.getElementById("calc-attractions"),
    days: document.getElementById("calc-days"),
    travellers: document.getElementById("calc-travellers"),
    payg: document.getElementById("calc-payg"),
    paygNote: document.getElementById("calc-payg-note"),
    citypass: document.getElementById("calc-citypass"),
    citypassNote: document.getElementById("calc-citypass-note"),
    explorer: document.getElementById("calc-explorer"),
    explorerNote: document.getElementById("calc-explorer-note"),
    recommendation: document.getElementById("calc-recommendation"),
  };

  // The calculator only exists on passes.html.
  if (!els.attractions || !els.days || !els.travellers || !els.payg) {
    return;
  }

  var currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  function money(amount) {
    return currency.format(amount);
  }

  function plural(count, singular, pluralWord) {
    return count + " " + (count === 1 ? singular : pluralWord || singular + "s");
  }

  function clampInt(value, min, max, fallback) {
    var parsed = parseInt(value, 10);
    if (!isFinite(parsed)) {
      return fallback;
    }
    return Math.min(max, Math.max(min, parsed));
  }

  function pageValue(input, min, max, fallback) {
    return clampInt(input.value, min, max, fallback);
  }

  /**
   * CityPASS covers exactly five attractions. Extra attractions beyond five are
   * estimated at full price. Returns null below five entries, where the pass is
   * a poor fit (you would pay for entries you do not use).
   */
  function citypassPerPerson(attractions) {
    if (attractions < CITYPASS_ENTRIES) {
      return null;
    }
    var extras = attractions - CITYPASS_ENTRIES;
    return CITYPASS_PRICE + extras * AVG_ATTRACTION;
  }

  /**
   * Explorer covers two to ten choices. Anything past ten is estimated at full
   * price. Returns null below two choices, the pass minimum.
   */
  function explorerPerPerson(attractions) {
    if (attractions < 2) {
      return null;
    }
    var covered = Math.min(attractions, EXPLORER_MAX_CHOICES);
    var extras = attractions - covered;
    return EXPLORER_TIERS[covered] + extras * AVG_ATTRACTION;
  }

  function recommendationSentence(winner, totals, attractions, days, travellers) {
    var group = plural(travellers, "traveller");

    if (attractions < 2) {
      return (
        "With fewer than two paid attractions, pay as you go is the only option worth considering — " +
        "the passes on this page start at two choices. Your estimated gate total is " +
        money(totals.payg) +
        " for " +
        group +
        "."
      );
    }

    if (winner.key === "citypass") {
      var sentence =
        "CityPASS is the cheapest estimate at about " +
        money(totals.citypass) +
        " for " +
        group +
        " — its five entries work out at roughly " +
        money(CITYPASS_PRICE / CITYPASS_ENTRIES) +
        " each against your $" +
        AVG_ATTRACTION +
        " gate assumption";
      if (days > CITYPASS_VALID_DAYS) {
        sentence +=
          ", though it must all be used within its " +
          CITYPASS_VALID_DAYS +
          "-day validity, so plan the five attractions early in your " +
          days +
          "-day trip";
      }
      return sentence + ".";
    }

    if (winner.key === "explorer") {
      var choices = Math.min(attractions, EXPLORER_MAX_CHOICES);
      return (
        "Go City Explorer is the cheapest estimate at about " +
        money(totals.explorer) +
        " for " +
        group +
        ", based on its " +
        choices +
        "-choice tier at " +
        money(EXPLORER_TIERS[choices]) +
        " per person, and its 30-day window covers your " +
        days +
        "-day trip."
      );
    }

    return (
      "Pay as you go is the cheapest estimate at about " +
      money(totals.payg) +
      " for " +
      group +
      " — with " +
      plural(attractions, "paid attraction") +
      ", none of the passes saves enough to commit."
    );
  }

  function update() {
    var attractions = pageValue(els.attractions, 0, 15, 0);
    var days = pageValue(els.days, 1, 10, 1);
    var travellers = pageValue(els.travellers, 1, 6, 1);

    var payg = attractions * AVG_ATTRACTION * travellers;
    var citypass = citypassPerPerson(attractions);
    var explorer = explorerPerPerson(attractions);

    els.payg.textContent = money(payg);
    els.paygNote.textContent =
      plural(attractions, "attraction") +
      " × " +
      money(AVG_ATTRACTION) +
      " average × " +
      plural(travellers, "traveller");

    if (citypass === null) {
      els.citypass.textContent = "n/a";
      els.citypassNote.textContent =
        "CityPASS is a fixed five-attraction bundle — it does not make sense below five attractions.";
    } else {
      els.citypass.textContent = money(citypass * travellers);
      var citypassNote =
        money(CITYPASS_PRICE) +
        " per person · 5 attractions · valid " +
        CITYPASS_VALID_DAYS +
        " days";
      if (attractions > CITYPASS_ENTRIES) {
        citypassNote +=
          ", plus " +
          plural(attractions - CITYPASS_ENTRIES, "extra ticket") +
          " at " +
          money(AVG_ATTRACTION) +
          " each";
      }
      els.citypassNote.textContent = citypassNote;
    }

    if (explorer === null) {
      els.explorer.textContent = "n/a";
      els.explorerNote.textContent =
        "Explorer starts at two choices — below that, pay as you go is the only option.";
    } else {
      var choices = Math.min(attractions, EXPLORER_MAX_CHOICES);
      els.explorer.textContent = money(explorer * travellers);
      var explorerNote =
        money(EXPLORER_TIERS[choices]) +
        " per person · " +
        choices +
        " choices (approximate tier price)";
      if (attractions > EXPLORER_MAX_CHOICES) {
        explorerNote +=
          ", plus " +
          plural(attractions - EXPLORER_MAX_CHOICES, "extra ticket") +
          " at " +
          money(AVG_ATTRACTION) +
          " each";
      }
      els.explorerNote.textContent = explorerNote;
    }

    // Compare group totals. Pay as you go wins ties because it commits to nothing.
    var totals = { payg: payg };
    var options = [{ key: "payg", total: payg }];

    if (citypass !== null) {
      totals.citypass = citypass * travellers;
      options.push({ key: "citypass", total: totals.citypass });
    }
    if (explorer !== null) {
      totals.explorer = explorer * travellers;
      options.push({ key: "explorer", total: totals.explorer });
    }

    options.sort(function (a, b) {
      return a.total - b.total;
    });

    els.recommendation.textContent = recommendationSentence(
      options[0],
      totals,
      attractions,
      days,
      travellers
    );
  }

  // Recalculate on every keystroke; normalise out-of-range values on blur/change.
  [els.attractions, els.days, els.travellers].forEach(function (input) {
    input.addEventListener("input", update);
    input.addEventListener("change", function () {
      var min = parseInt(input.min, 10);
      var max = parseInt(input.max, 10);
      var value = clampInt(input.value, min, max, min);
      if (String(value) !== input.value) {
        input.value = value;
      }
      update();
    });
  });

  // Initial render, so the panel always matches the input defaults.
  update();
})();
