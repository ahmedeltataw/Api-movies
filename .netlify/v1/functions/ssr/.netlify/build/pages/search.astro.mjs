import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as renderComponent } from '../scripts/astro/server.E_-_BhNn.js';
import 'kleur/colors';
import { $ as $$CardSlekton, a as $$Icon, b as $$Layout } from '../scripts/CardSlekton.ChBKZNjL.js';
import { f as fetchApi } from '../scripts/api.CsPyJm7x.js';
import { s as splitDate, v as votePercentage, g as getColor } from '../scripts/configuration.BLw2yGZC.js';
import $$Card from '../scripts/Card.BoQmkjHc.js';
import $$PeopleCard from '../scripts/PeopleCard.DyeSc8jn.js';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://tveltatawey.netlify.app");
const $$FilterHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FilterHeading;
  const { title, id, name, Class, label, selectClass } = Astro2.props;
  return renderTemplate`<!-- Filter Section -->${maybeRenderHead()}<div${addAttribute([`filterHeading`, Class && Class], "class:list")}> <h2${addAttribute([title && title.Class], "class:list")}> ${title && title.subName} <span${addAttribute([title && title.spanClass], "class:list")}> ${title && title.name}</span> </h2> <div class="filter-section sm-max:grow-1"> <label${addAttribute(id, "for")}${addAttribute([label && label.Class], "class:list")}>${label && label.name}</label> <select${addAttribute(id, "id")}${addAttribute(name, "name")} onchange="location = this.value"${addAttribute([selectClass && selectClass], "class:list")}> ${renderSlot($$result, $$slots["default"])} </select> </div> </div>`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/ui/FilterHeading.astro", void 0);

const $$Astro = createAstro("https://tveltatawey.netlify.app");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  let currentPage = 1;
  let totalPages = 1;
  const query = Astro2.url.searchParams.get("q");
  const mediaType = Astro2.url.searchParams.get("type");
  let data = null;
  try {
    let apiUrl = `search/multi?query=${query}&page=${currentPage}`;
    if (mediaType)
      apiUrl = `search/${mediaType}?query=${query}&page=${currentPage}`;
    console.log(mediaType);
    data = await fetchApi(apiUrl);
    totalPages = data.total_results;
    console.log(totalPages);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return renderTemplate`<!--  -->${renderComponent($$result, "Layout", $$Layout, { "title": `${query}`, "des": "" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="searchPage" aria-label="search page"> <div class="container"> <!-- search filter --> ${renderComponent($$result2, "FilterHeading", $$FilterHeading, { "title": {
    name: `${query}`,
    subName: "serach result for:",
    spanClass: "fs-28 fw-700 ",
    Class: "fs-20 fw-500 o-80"
  }, ";": true, "label": { name: "sort by", Class: "sm-max:d-none pe-2 fs-18 fw-500 o-80" }, "name": "media_type", "id": "mediaType", "Class": "d-flex align-items-center justify-between sm:py-5 sm-max:flex-wrap py-8 w-full sm-max:gap-5", "selectClass": "sm:w-80 h-18 round-full ps-4 filterSelect   w-full" }, { "default": ($$result3) => renderTemplate` <option${addAttribute(`?q=${query}`, "value")}${addAttribute(!mediaType, "selected")}>All</option> <option${addAttribute(`?q=${query}&type=movie`, "value")}${addAttribute(mediaType === "movie", "selected")}>Movies</option> <option${addAttribute(`?q=${query}&type=tv`, "value")}${addAttribute(mediaType === "tv", "selected")}>TV Shows</option> <option${addAttribute(`?q=${query}&type=person`, "value")}${addAttribute(mediaType === "person", "selected")}>People</option> ` })} <!--  --> <div class="d-grid align-items-center xl:grid-col-5 lg:grid-col-4 md:grid-col-3 sm-max:grid-col-2 sm:grid-col-2 grid-col-1 gap-5" id="searchContainer"> ${data.results.map(
    (item) => mediaType === "person" || item.media_type === "person" ? renderTemplate`${renderComponent($$result2, "PeopleCard", $$PeopleCard, { "server:defer": true, "id": item.id, "src": item.profile_path, "type": item.known_for_department !== null ? `(${item.known_for_department})` : void 0, "title": item.original_name, "height": item.profile_path === null ? true : false, "server:component-directive": "defer", "server:component-path": "@components/Cards/PeopleCard.astro", "server:component-export": "default" }, { "fallback": ($$result3) => renderTemplate`<div> ${renderComponent($$result3, "CardSlekton", $$CardSlekton, { "cardName": "peopleCard" })} </div>` })}` : renderTemplate`${renderComponent($$result2, "Card", $$Card, { "server:defer": true, "title": item.original_title || item.original_name, "src": item.poster_path, "alt": item.original_title || item.original_name, "year": item.release_date ? `(${splitDate(item.release_date)})` : item.first_air_date ? `(${splitDate(item.first_air_date)})` : "", "id": item.id, "inSlidr": false, "rate": votePercentage(item.vote_average), "color": getColor(item.vote_average), "href": `/movies/${item.id}`, "server:component-directive": "defer", "server:component-path": "@components/Cards/Card.astro", "server:component-export": "default" }, { "fallback": ($$result3) => renderTemplate`<div> ${renderComponent($$result3, "CardSlekton", $$CardSlekton, {})} </div>` })}`
  )} <!-- Infinite Scroll Loading Indicator --> </div> <div class="loader mx-auto mt-3 d-none"> ${renderComponent($$result2, "Icon", $$Icon, { "name": `loader`, "class": `w-60 mx-auto` })} </div> </div> </section> ` })} <!-- infinty scolling --> `;
}, "D:/project/version/2/Astro 2024/ApiProject/src/pages/search.astro", void 0);

const $$file = "D:/project/version/2/Astro 2024/ApiProject/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
