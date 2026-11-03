/**
 * Data behind the "NYC Attraction Price Index" page.
 * Prices are adult "from" rates checked 2 November 2026; dynamic pricing applies.
 */
export const checkedDate = "2 November 2026";
export const checkedISO = "2026-11-02";

export const attractions = [
  { name: "Broadway show (average paid ticket)", slug: "attractions.html#broadway", category: "Theatre", adult: 131.09, display: "$131.09 avg", notes: "2025–26 season average; premium seats cost far more." },
  { name: "Edge at Hudson Yards", slug: "edge.html", category: "Observation deck", adult: 56.5, display: "from $44", notes: "Dynamic: roughly $44–69 depending on date and sunset slots." },
  { name: "One World Observatory", slug: "one-world-observatory.html", category: "Observation deck", adult: 51, display: "$51", notes: "Standard adult ticket; combo with the 9/11 Museum can save money." },
  { name: "Empire State Building (86th floor)", slug: "empire-state-building.html", category: "Observation deck", adult: 46, display: "from $46", notes: "Peak dates around $57; 102nd floor is a paid add-on." },
  { name: "SUMMIT One Vanderbilt", slug: "summit-one-vanderbilt.html", category: "Observation deck", adult: 53, display: "from $44", notes: "Roughly $44–62 by date; Ascent lift is an add-on." },
  { name: "Top of the Rock", slug: "top-of-the-rock.html", category: "Observation deck", adult: 42, display: "from $42", notes: "Skip-the-line from $82; VIP from $185." },
  { name: "9/11 Memorial & Museum", slug: "9-11-memorial.html", category: "Museum", adult: 30, display: "$24–36", notes: "Memorial plaza is free; museum price is dynamic." },
  { name: "MoMA", slug: "moma.html", category: "Museum", adult: 30, display: "$30", notes: "Free for under-16s; NY State residents free Friday evenings." },
  { name: "The Met", slug: "met-museum.html", category: "Museum", adult: 30, display: "$30", notes: "Pay-what-you-wish for NY State residents; closed Wednesdays." },
  { name: "American Museum of Natural History", slug: "amnh.html", category: "Museum", adult: 28, display: "$28", notes: "$43 with one ticketed exhibition; NY/NJ/CT residents pay-what-you-wish." },
  { name: "Statue of Liberty & Ellis Island ferry", slug: "statue-of-liberty.html", category: "Harbour", adult: 25.5, display: "$25.50", notes: "Child $16.50, senior $22.50; crown/pedestal add-on $0.30; NPS entrance fee is $0." },
  { name: "Central Park", slug: "central-park.html", category: "Free", adult: 0, display: "Free", notes: "Zoo, rink and rowboats are separately ticketed." },
  { name: "The High Line", slug: "high-line.html", category: "Free", adult: 0, display: "Free", notes: "Free elevated park; seasonal opening hours." },
  { name: "Brooklyn Bridge walkway", slug: "brooklyn-bridge.html", category: "Free", adult: 0, display: "Free", notes: "Open 24 hours; free to walk." },
  { name: "Grand Central Terminal", slug: "grand-central.html", category: "Free", adult: 0, display: "Free", notes: "Concourse free; official tour is a paid extra." },
];

export const priceChanges = [
  ["Subway and local bus fare", "$3.00", "Rose from $2.90 on 4 January 2026."],
  ["AirTrain JFK", "$8.75", "Rose from $8.50 in early 2026."],
  ["Staten Island ferry", "Free", "Has been free since 1997; 24 hours a day."],
  ["CityPASS", "$149 adult", "Five attractions from ten; nine-day validity, +$2 fee."],
  ["Broadway average paid ticket", "$131.09", "2025–26 season average, up on the previous year."],
  ["MoMA / Met / AMNH adult admission", "$30 / $30 / $28", "No change from 2025 headline rates; dynamic add-ons apply."],
];

export const freeSkylineWays = [
  "Staten Island Ferry — free, 24 hours, passes the Statue of Liberty.",
  "Brooklyn Bridge Park — free waterfront with the best Manhattan skyline view.",
  "Roosevelt Island Tramway — the cost of a subway fare for an aerial ride.",
  "Top of the High Line — elevated views over the West Side, free.",
];
