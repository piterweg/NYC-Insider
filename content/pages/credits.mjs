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
  ["esb-exterior.webp", "Manhattan skyline from Weehawken, New Jersey, at night", "Dmitry Avdeev", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Manhattan_from_Weehawken,_NJ.jpg"],
  ["amnh-facade.webp", "American Museum of Natural History, interior hall", "Mike Peel", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:At_American_Museum_of_Natural_History_2024_001.jpg"],
  ["911-memorial.webp", "North Pool, National September 11 Memorial", "Farragutful", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:10.2012_North_Pool_National_September_11_Memorial_01.JPG"],
  ["one-wtc.webp", "Lower Manhattan skyline including One World Trade Center", "King of Hearts", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg"],
  ["summit-vanderbilt.webp", "Bryant Park seen from One Vanderbilt", "Larry D. Moore", "CC BY 4.0", "https://commons.wikimedia.org/wiki/File:Bryant_Park_from_One_Vanderbilt_New_York_City_2022.jpg"],
  ["edge-hudson-yards.webp", "30 Hudson Yards, the tower that houses Edge", "Kidfly182", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:30_Hudson_Yards_April_2022_001.jpg"],
  ["central-park-nyc.webp", "Bethesda Fountain, Central Park", "Rhododendrites", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Bethesda_Fountain_(81527).jpg"],
  ["philadelphia-skyline.webp", "Philadelphia skyline", "TECHNICALINTERFACE", "CC0", "https://commons.wikimedia.org/wiki/File:Philadelphia_Skyline_Amtrak.jpg"],
  ["washington-capitol.webp", "United States Capitol, Washington, D.C.", "Noclip", "Public domain", "https://commons.wikimedia.org/wiki/File:Capitol_Building_Full_View.jpg"],
  ["boston-skyline.webp", "Boston skyline from Cambridge", "King of Hearts", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Boston_skyline_from_Cambridge_November_2015_panorama_1.jpg"],
  ["niagara-falls.webp", "Niagara Falls", "Saffron Blaze", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:3Falls_Niagara.jpg"],
  ["hudson-valley.webp", "Andy Goldsworthy's Storm King Wall, Storm King Art Center", "Eldan Goldenberg", "CC0", "https://commons.wikimedia.org/wiki/File:Andy_Goldsworthy_Storm_King_Wall_(196974395).jpeg"],
  ["harlem-apollo.webp", "Apollo Theater, Harlem", "Adjoajo", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Apollo_Theater_in_Harlem_Honoring_Nelson_Mandela.jpg"],
  ["west-village.webp", "A brownstone on West 12th Street, Greenwich Village", "Spencer Means", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:48_West_12th_(1854),_Greenwich_Village,_New_York_(49208250703).jpg"],
  ["williamsburg-brooklyn.webp", "The Williamsburg waterfront, Brooklyn", "Acroterion", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:1_North_Fourth_complex_NY1.jpg"],
  ["dumbo-brooklyn.webp", "Pier 1 lawn, Brooklyn Bridge Park, DUMBO", "Tdorante10", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Brooklyn_Bridge_Park_td_(2019-08-23)_015_-_Pier_1,_Bridge_View_Lawn.jpg"],
  ["astoria-queens.webp", "Astoria Park and the Hell Gate bridges, Queens", "onefivefour", "CC BY-SA 2.0", "https://commons.wikimedia.org/wiki/File:Astoria_Park_Panorama_of_Triborough_and_Hell%27s_Gate_Bridges.jpg"],
  ["flushing-main-street.webp", "Flushing, Queens", "Tdorante10", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:39th_Av_138th_St_Flushing_td_06.jpg"],
  ["jackson-heights-queens.webp", "Jackson Heights, Queens", "Deans Charbal", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:34-56_74th_Street,_at_35th_Street,_Jackson_Heights,_Queens,_New_York.jpg"],
  ["moma-museum.webp", "The Museum of Modern Art, West 53rd Street", "Colin W", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Museum_of_Modern_Art,_New_York_City_-_panoramio.jpg"],
  ["met-museum.webp", "The Metropolitan Museum of Art, Fifth Avenue", "Rodrigo Alomía Díaz", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Details_of_the_exterior_of_Metropolitan_Museum_of_Art.jpg"],
];

export default {
  path: "credits.html",
  navSection: "home",
  bodyClass: "page-inner",
  title: "Photo Credits",
  description:
    "Credits and licences for the photography used on NYCTrove, including Creative Commons images from Wikimedia Commons.",
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
  lead: "Most of the photography on NYCTrove is our own. Where we use free-licensed community photography from Wikimedia Commons, the photographer and licence are listed below.",
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
        text: "The night-time New York photographs on the home page and in several guides are original to NYCTrove. They may not be reused without permission.",
      })}
    </div>
    <p class="small muted" style="margin-top:1.4rem">Licence texts: <a href="https://creativecommons.org/licenses/by/2.0/" rel="nofollow noopener" target="_blank">CC BY 2.0</a>, <a href="https://creativecommons.org/licenses/by/4.0/" rel="nofollow noopener" target="_blank">CC BY 4.0</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/" rel="nofollow noopener" target="_blank">CC BY-SA 2.0</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/" rel="nofollow noopener" target="_blank">CC BY-SA 3.0</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="nofollow noopener" target="_blank">CC BY-SA 4.0</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/" rel="nofollow noopener" target="_blank">CC0 1.0</a>.</p>
  </div>
</section>
`,
};
