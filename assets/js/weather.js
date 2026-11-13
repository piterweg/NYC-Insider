/* NYCTrove live weather panel (Open-Meteo, no API key). */
(function () {
  "use strict";

  var panels = document.querySelectorAll("[data-weather]");
  if (!panels.length) return;

  var API =
    "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060" +
    "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m,precipitation" +
    "&hourly=temperature_2m,weather_code,precipitation_probability" +
    "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
    "&timezone=America%2FNew_York&forecast_days=7&temperature_unit=fahrenheit&wind_speed_unit=mph";

  var CACHE_KEY = "nyctrove-weather-v3";
  var CACHE_MINUTES = 15;

  function icon(code) {
    if (code === 0) return "☀️";
    if (code === 1 || code === 2) return "🌤️";
    if (code === 3) return "☁️";
    if (code === 45 || code === 48) return "🌫️";
    if (code >= 51 && code <= 57) return "🌦️";
    if (code >= 61 && code <= 67) return "🌧️";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 80 && code <= 82) return "🌧️";
    if (code >= 85 && code <= 86) return "🌨️";
    if (code >= 95) return "⛈️";
    return "🌤️";
  }

  function describe(code) {
    var map = {
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
    return map[code] || "Mixed conditions";
  }

  function hourLabel(iso) {
    var h = parseInt(iso.slice(11, 13), 10);
    var suffix = h >= 12 ? "pm" : "am";
    var hour = h % 12 || 12;
    return hour + suffix;
  }

  function dayLabel(iso, index) {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    var d = new Date(iso + "T12:00:00");
    return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(d);
  }

  function dateLabel(iso) {
    var parts = iso.split("-");
    return parts[1] + "/" + parts[2];
  }

  function render(payload) {
    var current = payload.current;
    var hourly = payload.hourly;
    var daily = payload.daily;

    panels.forEach(function (panel) {
      var set = function (sel, value) {
        var el = panel.querySelector(sel);
        if (el) el.textContent = value;
      };

      var temp = panel.querySelector("[data-weather-temp]");
      if (temp) temp.textContent = Math.round(current.temperature_2m) + "°F";
      set("[data-weather-desc]", describe(current.weather_code));
      set("[data-weather-icon]", icon(current.weather_code));
      set("[data-weather-feels]", Math.round(current.apparent_temperature) + "°F");
      set("[data-weather-humidity]", Math.round(current.relative_humidity_2m) + "%");
      set("[data-weather-wind]", Math.round(current.wind_speed_10m) + " mph");
      set("[data-weather-precip]", (current.precipitation || 0).toFixed(1) + " mm");
      set("[data-weather-meta]", "Central Park, New York");

      var hoursHost = panel.querySelector("[data-weather-hourly]");
      if (hoursHost && hourly && hourly.time) {
        var nowIso = current.time || hourly.time[0];
        var nowHour = nowIso.slice(0, 13);
        var start = 0;
        for (var i = 0; i < hourly.time.length; i++) {
          if (hourly.time[i].slice(0, 13) >= nowHour) {
            start = i;
            break;
          }
        }
        var out = [];
        for (var j = start; j < Math.min(start + 24, hourly.time.length); j++) {
          var rain = hourly.precipitation_probability && hourly.precipitation_probability[j];
          out.push(
            '<div class="wx__hour">' +
              '<span class="wx__hour-label">' + hourLabel(hourly.time[j]) + "</span>" +
              '<span class="wx__hour-icon" aria-hidden="true">' + icon(hourly.weather_code[j]) + "</span>" +
              '<span class="wx__hour-temp">' + Math.round(hourly.temperature_2m[j]) + "°</span>" +
              (rain != null && rain >= 10 ? '<span class="wx__hour-rain">' + Math.round(rain) + "%</span>" : "") +
              "</div>"
          );
        }
        hoursHost.innerHTML = out.join("");

        var spark = panel.querySelector("[data-weather-spark]");
        if (spark) {
          var temps = [];
          for (var s = start; s < Math.min(start + 24, hourly.time.length); s++) {
            temps.push(hourly.temperature_2m[s]);
          }
          if (temps.length > 1) {
            var lo = Math.min.apply(null, temps);
            var hi = Math.max.apply(null, temps);
            var range = hi - lo || 1;
            var step = 720 / (temps.length - 1);
            var points = temps.map(function (value, index) {
              var x = (index * step).toFixed(1);
              var y = (100 - ((value - lo) / range) * 80 - 10).toFixed(1);
              return x + "," + y;
            });
            spark.innerHTML =
              '<polyline points="' + points.join(" ") + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />';
          }
        }
      }

      var daysHost = panel.querySelector("[data-weather-days]");
      if (daysHost && daily && daily.time) {
        var count = parseInt(panel.getAttribute("data-weather-days-count") || "7", 10);
        var rows = [];
        for (var k = 0; k < Math.min(count, daily.time.length); k++) {
          var rainMax = daily.precipitation_probability_max && daily.precipitation_probability_max[k];
          rows.push(
            '<div class="wx__day">' +
              '<div class="wx__day-when"><strong>' + dayLabel(daily.time[k], k) + "</strong><span>" + dateLabel(daily.time[k]) + "</span></div>" +
              '<div class="wx__day-icon" aria-hidden="true">' + icon(daily.weather_code[k]) + "</div>" +
              '<div class="wx__day-temps"><span>' + Math.round(daily.temperature_2m_max[k]) + "°</span> / " + Math.round(daily.temperature_2m_min[k]) + "°</div>" +
              '<div class="wx__day-rain">' + (rainMax != null ? Math.round(rainMax) + "% rain" : "") + "</div>" +
              "</div>"
          );
        }
        daysHost.innerHTML = rows.join("");
      }
    });
  }

  function fallback() {
    panels.forEach(function (panel) {
      var desc = panel.querySelector("[data-weather-desc]");
      var hours = panel.querySelector("[data-weather-hourly]");
      var days = panel.querySelector("[data-weather-days]");
      if (desc) desc.textContent = "Live forecast unavailable right now";
      if (hours) hours.innerHTML = '<p class="wx__fallback">Check the monthly averages below, or try again in a few minutes.</p>';
      if (days) days.innerHTML = "";
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
      .then(function (response) { return response.json(); })
      .then(function (payload) {
        render(payload);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), payload: payload }));
        } catch (error) { /* ignore */ }
      })
      .catch(fallback);
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
    document.querySelectorAll("[data-nyc-time]").forEach(function (el) {
      el.textContent = now;
    });
  }

  load();
  tickClock();
  window.setInterval(tickClock, 30000);
})();
