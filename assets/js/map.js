/* NYC Insider - interactive map (Leaflet + OpenStreetMap). */
(function () {
  "use strict";

  var container = document.getElementById("nyc-map");
  if (!container || typeof window.L === "undefined") return;

  var filters = document.querySelectorAll("[data-map-filter]");
  var list = document.querySelector("[data-map-list]");
  var data = { categories: [], points: [] };
  var markers = {};
  var currentCategory = "all";

  var colors = {
    attractions: "#c8a45c",
    parks: "#4f7a58",
    food: "#b23a2f",
    neighbourhoods: "#5b6b8c",
    transport: "#2f6f8f",
  };

  var map = L.map("nyc-map", { scrollWheelZoom: false }).setView([40.735, -73.965], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
  }).addTo(map);

  function pin(color) {
    return L.divIcon({
      className: "",
      html:
        '<span style="display:block;width:14px;height:14px;border-radius:50%;background:' +
        color +
        ';border:2px solid #fbf8f3;box-shadow:0 1px 4px rgba(0,0,0,.4)"></span>',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      popupAnchor: [0, -8],
    });
  }

  function renderList() {
    if (!list) return;
    var visible = data.points.filter(function (point) {
      return currentCategory === "all" || point.category === currentCategory;
    });
    list.innerHTML = visible
      .map(function (point) {
        return (
          '<li><button type="button" data-map-go="' +
          point.id +
          '">' +
          point.name +
          "<small>" +
          point.category.replace("neighbourhoods", "neighbourhood") +
          "</small></button></li>"
        );
      })
      .join("");
    list.querySelectorAll("[data-map-go]").forEach(function (button) {
      button.addEventListener("click", function () {
        var point = data.points.find(function (entry) {
          return entry.id === button.getAttribute("data-map-go");
        });
        if (!point) return;
        map.flyTo([point.lat, point.lng], 14, { duration: 0.6 });
        if (markers[point.id]) markers[point.id].openPopup();
      });
    });
  }

  function addPoints() {
    data.points.forEach(function (point) {
      var marker = L.marker([point.lat, point.lng], {
        icon: pin(colors[point.category] || "#c8a45c"),
        title: point.name,
      }).addTo(map);
      marker.bindPopup(
        "<strong>" +
          point.name +
          "</strong>" +
          point.blurb +
          (point.href
            ? '<br><a href="' + point.href + '">Read the guide</a>'
            : "")
      );
      marker.pointId = point.id;
      markers[point.id] = marker;
    });
  }

  function applyFilter(category) {
    currentCategory = category;
    filters.forEach(function (button) {
      button.setAttribute(
        "aria-pressed",
        String(button.getAttribute("data-map-filter") === category)
      );
    });
    Object.keys(markers).forEach(function (id) {
      var marker = markers[id];
      var point = data.points.find(function (entry) {
        return entry.id === id;
      });
      if (!point) return;
      var visible = category === "all" || point.category === category;
      if (visible) marker.addTo(map);
      else marker.remove();
    });
    renderList();
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.getAttribute("data-map-filter"));
    });
  });

  fetch("assets/data/map-points.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (payload) {
      data = payload;
      addPoints();
      renderList();
      applyFilter("all");

      if (window.location.hash) {
        var id = window.location.hash.slice(1);
        var point = data.points.find(function (entry) {
          return entry.id === id;
        });
        if (point) {
          map.setView([point.lat, point.lng], 14);
          markers[id].openPopup();
        }
      }
    })
    .catch(function () {
      container.innerHTML =
        '<p style="padding:2rem;color:#625c53">The map could not load. You can still browse the <a href="attractions.html">attractions guide</a>.</p>';
    });
})();
