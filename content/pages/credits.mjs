import { sectionHead, pageHero, table, img, metaItems, callout } from "../components.mjs";

const photos = [
  ["manhattan-skyline.webp", "Brooklyn Bridge, Downtown Manhattan and Freedom Tower at golden hour", "John Cunniff", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Brooklyn_Bridge,_Downtown_Manhattan,_and_Freedom_Tower,_golden_hour_(20137848066).jpg"],
  ["brooklyn-bridge-park.webp", "Brooklyn-side tower of the Brooklyn Bridge from Brooklyn Bridge Park", "Christian David", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Brooklyn-side_tower_of_the_Brooklyn_Bridge_from_Brooklyn_Bridge_Park,_New_York_City.jpg"],
  ["queens-astoria.webp", "Astoria, Queens", "Kidfly182", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:Astoria_Queens_February_2026_002.jpg"],
  ["bronx-yankee-stadium.webp", "Yankee Stadium upper deck", "Matt Boulton", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Yankee_Stadium_upper_deck_2010.jpg"],
  ["staten-island-ferry.webp", "Staten Island Ferry at St. George Terminal", "Giorgio Galeotti", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:Staten_Island_Ferry_-_St._George_Terminal,_Staten_Island,_New_York,_NY,_USA_-_August_19,_2015_01.jpg"],
  ["central-park-bow-bridge.webp", "Bow Bridge, Central Park, in fall", "Querent", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:Bow_Bridge,_Central_Park,_in_fall.jpg"],
  ["statue-of-liberty.webp", "Statue of Liberty", "William Warby", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Statue_of_Liberty,_NY.jpg"],
  ["times-square-day.webp", "Times Square in the morning", "Stephanie Kraus", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:New_York_Times_am_Times_Square_in_New_York_(26551780732).jpg"],
  ["broadway-marquee.webp", "Broadway and the Theatre District", "Nytix", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:2024-02_NY_Tix_Stock_Photos-35.jpg"],
  ["subway-train.webp", "New York City subway train at a platform", "Martin David", "CC0", "https://commons.wikimedia.org/wiki/File:Train_stopping_at_a_New_York_subway_station_(Unsplash).jpg"],
  ["nyc-bagel.webp", "Ess-a-Bagel, Manhattan", "victorgrigas", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Ess-a-bagel_in_NYC.jpg"],
  ["nyc-bagel-cream-cheese.webp", "Sesame bagel with cream cheese", "Willis Lam", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Noah%27s_Bagels_Sesame_Seed_Bagel_w_cream_cheese_(31966048994).jpg"],
  ["nyc-pizza-slice.webp", "Slices at Paulie Gee's Slice Shop, Brooklyn", "Rhododendrites", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Paulie_Gee%27s_Slice_Shop_(35386).jpg"],
  ["high-line.webp", "The High Line elevated park", "Mike Peel", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:High_Line,_New_York_2012_39.jpg"],
  ["grand-central.webp", "Grand Central Terminal Main Concourse", "Axel Tschentscher", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Grand_Central_Terminal_Main_Concourse_2019-10-03_20-02.jpg"],
];

export default {
  path: "credits.html",
  navSection: "home",
  bodyClass: "page-inner",
  title: "Photo Credits",
  description:
    "Credits and licences for the photography used on NYC Insider, including Creative Commons images from Wikimedia Commons.",
  priority: "0.1",
  changefreq: "yearly",
  ogImage: "assets/img/times-square-night.webp",
  render: () => `
${pageHero({
  image: img("grand-central.webp"),
  alt: "The main concourse of Grand Central Terminal in New York",
  crumbs: [
    { href: "index.html", label: "Home" },
    { href: "credits.html", label: "Photo credits" },
  ],
  eyebrowText: "Credits",
  title: "Photography credits",
  lead: "Most of the photography on NYC Insider is our own. Where we use free-licensed community photography from Wikimedia Commons, the photographer and licence are listed below.",
  meta: metaItems("Updated November 2026", "Creative Commons", "Attribution"),
})}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrowText: "Wikimedia Commons",
      title: "Community photography",
      lead: "These images are used under Creative Commons licences. Derivative versions (resized and cropped for the web) are published under the same licence as the original.",
    })}
    ${table({
      caption: "Photo credits for Wikimedia Commons images used on this site",
      head: ["Image", "Subject", "Photographer", "Licence", "Source"],
      rows: photos.map(([file, subject, author, license, url]) => [
        `<code>${file}</code>`,
        subject,
        author,
        license,
        `<a href="${url}" rel="nofollow noopener" target="_blank">Commons page</a>`,
      ]),
    })}
    <div style="margin-top:2rem">
      ${callout({
        icon: "◆",
        title: "Original photography",
        text: "The night-time New York photographs on the home page and in several guides are original to NYC Insider. They may not be reused without permission.",
      })}
    </div>
    <p class="small muted" style="margin-top:1.4rem">Licence texts: <a href="https://creativecommons.org/licenses/by/2.0/" rel="nofollow noopener" target="_blank">CC BY 2.0</a>, <a href="https://creativecommons.org/licenses/by/4.0/" rel="nofollow noopener" target="_blank">CC BY 4.0</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/" rel="nofollow noopener" target="_blank">CC BY-SA 2.0</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/" rel="nofollow noopener" target="_blank">CC BY-SA 3.0</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="nofollow noopener" target="_blank">CC BY-SA 4.0</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/" rel="nofollow noopener" target="_blank">CC0 1.0</a>.</p>
  </div>
</section>
`,
};
