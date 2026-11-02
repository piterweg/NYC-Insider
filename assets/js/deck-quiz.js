/* NYC Insider - observation deck recommender quiz (attractions page). */
(function () {
  "use strict";

  var root = document.querySelector("[data-deck-quiz]");
  if (!root) return;

  var questions = [
    {
      key: "view",
      question: "What matters most in the view?",
      options: [
        { label: "The Empire State Building in frame", scores: { "top-of-the-rock": 3, "edge": 1 } },
        { label: "Straight down, glass floor", scores: { "edge": 3, "summit-one-vanderbilt": 1 } },
        { label: "The harbour and the Statue", scores: { "one-world-observatory": 3 } },
        { label: "Mirrors, art and something theatrical", scores: { "summit-one-vanderbilt": 3 } },
        { label: "Old-school Art Deco and history", scores: { "empire-state-building": 3 } },
      ],
    },
    {
      key: "time",
      question: "When are you going?",
      options: [
        { label: "Sunset or early evening", scores: { "top-of-the-rock": 2, "edge": 2, "one-world-observatory": 1 } },
        { label: "First thing in the morning", scores: { "empire-state-building": 2, "summit-one-vanderbilt": 2 } },
        { label: "Late at night", scores: { "top-of-the-rock": 2, "edge": 2 } },
        { label: "Midday, whatever the weather", scores: { "one-world-observatory": 2, "summit-one-vanderbilt": 1 } },
      ],
    },
    {
      key: "budget",
      question: "What is your budget for one deck?",
      options: [
        { label: "Under $50", scores: { "top-of-the-rock": 2, "edge": 1, "empire-state-building": 1, "summit-one-vanderbilt": 1 } },
        { label: "$50–80, happy to pay for a better slot", scores: { "edge": 2, "summit-one-vanderbilt": 1, "one-world-observatory": 1 } },
        { label: "Whatever it takes", scores: { "summit-one-vanderbilt": 2, "one-world-observatory": 2 } },
      ],
    },
  ];

  var decks = {
    "empire-state-building": {
      name: "Empire State Building",
      text: "The classic. You are on the building everyone else is looking at, with 86th and 102nd floor options and the best history exhibition of the five.",
      href: "empire-state-building.html",
    },
    "top-of-the-rock": {
      name: "Top of the Rock",
      text: "The best view of the Empire State Building and Central Park, and open late. The default recommendation for a first sunset in New York.",
      href: "top-of-the-rock.html",
    },
    "edge": {
      name: "Edge at Hudson Yards",
      text: "The outdoor deck with the glass floor and the dramatic angle over the Hudson. Go at sunset or after dark for the skyline.",
      href: "edge.html",
    },
    "summit-one-vanderbilt": {
      name: "SUMMIT One Vanderbilt",
      text: "Less observation deck, more art installation: mirrors, reflections and Levitation glass boxes above Grand Central.",
      href: "summit-one-vanderbilt.html",
    },
    "one-world-observatory": {
      name: "One World Observatory",
      text: "The tallest of the five, looking back over the whole island and the harbour. The natural pairing with the 9/11 Memorial.",
      href: "one-world-observatory.html",
    },
  };

  var state = { step: 0, totals: {} };
  var questionEl = root.querySelector("[data-quiz-question]");
  var optionsEl = root.querySelector("[data-quiz-options]");
  var progressEl = root.querySelector("[data-quiz-progress]");
  var resultEl = root.querySelector("[data-quiz-result]");
  var restartEl = root.querySelector("[data-quiz-restart]");

  function reset() {
    state = { step: 0, totals: {} };
    resultEl.classList.remove("is-visible");
    render();
  }

  function render() {
    if (state.step >= questions.length) {
      var winner = Object.keys(state.totals).sort(function (a, b) {
        return state.totals[b] - state.totals[a];
      })[0];
      if (!winner || state.totals[winner] <= 0) winner = "top-of-the-rock";
      var deck = decks[winner];
      resultEl.innerHTML =
        '<strong>' +
        deck.name +
        "</strong><p>" +
        deck.text +
        '</p><p><a class="btn btn--sm" href="' +
        deck.href +
        '">Read the guide</a></p>';
      resultEl.classList.add("is-visible");
      progressEl.textContent = "Your match";
      optionsEl.innerHTML = "";
      return;
    }
    var question = questions[state.step];
    progressEl.textContent = "Question " + (state.step + 1) + " of " + questions.length;
    questionEl.textContent = question.question;
    optionsEl.innerHTML = "";
    question.options.forEach(function (option) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "quiz__option";
      button.textContent = option.label;
      button.addEventListener("click", function () {
        Object.keys(option.scores).forEach(function (key) {
          state.totals[key] = (state.totals[key] || 0) + option.scores[key];
        });
        state.step += 1;
        render();
      });
      optionsEl.appendChild(button);
    });
  }

  if (restartEl) restartEl.addEventListener("click", reset);
  reset();
})();
