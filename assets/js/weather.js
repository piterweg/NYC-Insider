/* NYC Insider - live weather and local time widget (Open-Meteo, no API key). */
(function () {
  "use strict";

  var widgets = document.querySelectorAll("[data-weather]");
  if (!widgets.length) return;

  var API =
    "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060" +
    "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m" +
    "&daily=weather_code,temperature_2m_max,temperature_2m_min" +
    "&timezone=America%2FNew_York&forecast_days=4&temperature_unit=fahrenheit";
  var CACHE_KEY = "nyctrove-weather";
  var CACHE_MINUTES = 15;

  var conditions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Freezing fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    66: "Freezing rain",
    67: "Freezing rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Rain showers",
    81: "Rain showers",
    82: "Violent showers",
    85: "Snow showers",
    86: "Snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Thunderstorm with hail",
  };

  function describe(code) {
    return conditions[code] || "Mixed conditions";
  }

  function weekday(index) {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      timeZone: "America/New_York",
    }).format(new Date(Date.now() + index * 86400000));
  }

  function render(payload) {
    var current = payload.current;
    var daily = payload.daily;
    widgets.forEach(function (widget) {
      var temp = widget.querySelector("[data-weather-temp]");
      var desc = widget.querySelector("[data-weather-desc]");
      var meta = widget.querySelector("[data-weather-meta]");
      var days = widget.querySelector("[data-weather-days]");
      if (temp) temp.textContent = Math.round(current.temperature_2m) + "°F";
      if (desc) desc.textContent = describe(current.weather_code);
      if (meta) {
        meta.textContent =
          "Feels like " +
          Math.round(current.apparent_temperature) +
          "°F · wind " +
          Math.round(current.wind_speed_10m) +
          " mph · New York local time";
      }
      if (days && daily) {
        days.innerHTML = daily.time
          .slice(0, 4)
          .map(function (date, index) {
            return (
              '<span class="widget__day"><strong>' +
              Math.round(daily.temperature_2m_max[index]) +
              "° / " +
              Math.round(daily.temperature_2m_min[index]) +
              "°</strong>" +
              weekday(index) +
              "</span>"
            );
          })
          .join("");
      }
      widget.setAttribute("data-weather-ready", "true");
    });
  }

  function load() {
    try {
      var cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || "null");
      if (cached && Date.now() - cached.at < CACHE_MINUTES * 60000) {
        render(cached.payload);
        return;
      }
    } catch (error) {
      /* ignore storage errors */
    }
    fetch(API)
      .then(function (response) {
        return response.json();
      })
      .then(function (payload) {
        render(payload);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), payload: payload }));
        } catch (error) {
          /* ignore */
        }
      })
      .catch(function () {
        widgets.forEach(function (widget) {
          var desc = widget.querySelector("[data-weather-desc]");
          if (desc) desc.textContent = "Live forecast unavailable right now";
        });
      });
  }

  function tickClock() {
    var now = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      weekday: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZoneName: "short",
    }).format(new Date());
    document.querySelectorAll("[data-nyc-time]").forEach(function (element) {
      element.textContent = now;
    });
  }

  load();
  tickClock();
  window.setInterval(tickClock, 1000 * 30);
})();
