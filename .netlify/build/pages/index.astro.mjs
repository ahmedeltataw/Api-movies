import { a as createComponent, r as renderTemplate, m as maybeRenderHead, c as createAstro, b as addAttribute, e as renderComponent } from '../scripts/astro/server.E_-_BhNn.js';
import 'kleur/colors';
import { c as $$Button, a as $$Icon, $ as $$CardSlekton, t as trendSpanData, b as $$Layout } from '../scripts/CardSlekton.ChBKZNjL.js';
import $$HeroBg from '../scripts/HeroBg.LXeIgQJp.js';
import 'clsx';
import { f as fetchApi } from '../scripts/api.CsPyJm7x.js';
import $$Card from '../scripts/Card.BoQmkjHc.js';
import { s as splitDate, v as votePercentage, g as getColor } from '../scripts/configuration.BLw2yGZC.js';
export { renderers } from '../renderers.mjs';

const $$HeroBox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="heroBox relative text-center"> <h1 class="md:fs-60 sm:fs-48 fs-36  line-relaxed ">Welcome to <span>AE TV</span></h1> <h2 class="md:fs-28 sm:fs-24 fs-18">Millions of movies, TV shows and people to discover</h2> </div>`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/hero/HeroBox.astro", void 0);

const $$Astro$3 = createAstro("https://tveltatawey.netlify.app");
const $$FormGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FormGroup;
  const {
    title,
    name,
    type,
    place,
    value,
    isDisabled = false,
    isLabel = true,
    InputClassName,
    IsButton = false,
    Icons = false,
    IsPassword = false,
    FormClassName,
    LabelClassName,
    id
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`formGroup ${FormClassName ? FormClassName : ""}`, "class")}> ${isLabel && renderTemplate`<label${addAttribute(id, "for")}${addAttribute(LabelClassName, "class")}> ${title} </label>`} ${IsButton && renderTemplate`${renderComponent($$result, "Button", $$Button, { "type": "submit", "aria": IsButton.aria, "ClassName": ` ${IsButton.ClassName ? IsButton.ClassName : ""}` }, { "default": ($$result2) => renderTemplate`${IsButton.Title}${IsButton.BtnIcon && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": IsButton.BtnIcon.name, "size": 24, "id": IsButton.BtnIcon.id })}`}` })}`} ${IsPassword ? renderTemplate`<div class="relative IsPassword "> <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(` ${InputClassName}`, "class")}${addAttribute(place, "placeholder")}${addAttribute(value, "value")}${addAttribute(isDisabled, "disabled")}> ${Icons && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": Icons.openEye.name, "size": 24, "id": Icons.openEye.id, "class": Icons.openEye.ClassName })}`} ${Icons && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": Icons.closeEye.name, "size": 24, "id": Icons.closeEye.id, "class": Icons.closeEye.ClassName })}`} </div>` : renderTemplate`<input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(id, "id")}${addAttribute(`${InputClassName ? InputClassName : ""}`, "class")}${addAttribute(place, "placeholder")}${addAttribute(value, "value")}${addAttribute(isDisabled, "disabled")}>`} </div>`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/ui/FormGroup.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$HeroSearch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<form class="heroSearch mt-12" id="searchForm"> ', ' </form>  <!-- <script>\n  function handleSubmit(e: Event) {\n    e.preventDefault();\n    const searchInput = document.getElementById(\n      "HeroSearch"\n    ) as HTMLInputElement;\n    const query = searchInput?.value.trim();\n    console.log(query)\n    if (query) {\n      const encodedQuery = encodeURIComponent(query);\n      console.log(encodedQuery)\n      window.location.href = `/search?q=${encodedQuery}`;\n    }\n  }\n  let searchForm = document.getElementById("searchForm") as HTMLFormElement;\n  if (searchForm !== null) searchForm.addEventListener("submit", handleSubmit);\n<\/script> -->'], ["", '<form class="heroSearch mt-12" id="searchForm"> ', ' </form>  <!-- <script>\n  function handleSubmit(e: Event) {\n    e.preventDefault();\n    const searchInput = document.getElementById(\n      "HeroSearch"\n    ) as HTMLInputElement;\n    const query = searchInput?.value.trim();\n    console.log(query)\n    if (query) {\n      const encodedQuery = encodeURIComponent(query);\n      console.log(encodedQuery)\n      window.location.href = \\`/search?q=\\${encodedQuery}\\`;\n    }\n  }\n  let searchForm = document.getElementById("searchForm") as HTMLFormElement;\n  if (searchForm !== null) searchForm.addEventListener("submit", handleSubmit);\n<\/script> -->'])), maybeRenderHead(), renderComponent($$result, "FormGroup", $$FormGroup, { "type": "search", "isLabel": false, "IsButton": {
    aria: "btn-seacrh",
    Title: "search",
    ClassName: " btn-up absolute top-50 md:inset-in-e-3 translate-y--50 inset-in-e-7"
  }, "InputClassName": "w-full h-full ps-5 round-full ", "FormClassName": "md:w-6/10  mx-auto relative h-30 w-full md:p-in-0 p-in-4", "place": "Search for a movie, tv show, person......", "id": "HeroSearch", "name": "search" }));
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/hero/heroSearch.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero h-screen  w-full relative"> ${renderComponent($$result, "HeroBg", $$HeroBg, { "server:defer": true, "server:component-directive": "defer", "server:component-path": "D:/project/version/2/Astro 2024/ApiProject/src/components/hero/HeroBg.astro", "server:component-export": "default" }, { "fallback": ($$result2) => renderTemplate`<div class="w-full relative h-full imgloader"> ${renderComponent($$result2, "Icon", $$Icon, { "name": `loader`, "size": `48`, "class": `w-50  mx-auto o-40` })} </div>` })} <div class="container"> <div class="heroDetails absolute top-50 left-50 w-full "> ${renderComponent($$result, "HeroBox", $$HeroBox, {})} ${renderComponent($$result, "HeroSearch", $$HeroSearch, {})} </div> </div> </section>`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/hero/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://tveltatawey.netlify.app");
const $$MySlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MySlider;
  const { data, id, loader = false, ClassName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mySlider relative h-full w-full overflow-hidden py-5 triendSlider ${ClassName ? ClassName : ""}`, "class")}${addAttribute(id, "id")}> <div class="slider-wrapper d-flex align-items-center gap-5"> ${loader ? renderTemplate`<div class="slider-items"> ${renderComponent($$result, "CardSlekton", $$CardSlekton, {})} </div>
        <div class="slider-items"> ${renderComponent($$result, "CardSlekton", $$CardSlekton, {})} </div>
        <div class="slider-items"> ${renderComponent($$result, "CardSlekton", $$CardSlekton, {})} </div>
        <div class="slider-items"> ${renderComponent($$result, "CardSlekton", $$CardSlekton, {})} </div>
        <div class="slider-items"> ${renderComponent($$result, "CardSlekton", $$CardSlekton, {})} </div>` : data.map((item) => renderTemplate`<div class="slider-items"> ${renderComponent($$result, "Card", $$Card, { "server:defer": true, "title": item.original_title || item.original_name, "src": item.poster_path, "alt": item.original_title || item.original_name, "year": item.release_date ? `(${splitDate(item.release_date)})` : item.first_air_date ? `(${splitDate(item.first_air_date)})` : "", "id": item.id, "rate": votePercentage(item.vote_average), "color": getColor(item.vote_average), "href": `/movies/${item.id}`, "server:component-directive": "defer", "server:component-path": "@components/Cards/Card.astro", "server:component-export": "default" }, { "fallback": ($$result2) => renderTemplate`<div> ${renderComponent($$result2, "CardSlekton", $$CardSlekton, {})} </div>` })} </div>`)} </div> <div class="slider-control absolute translate-y--50 w-full"> ${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": `slider-prev-btn `, "ClassName": "btn-prev p-0 absolute w-30 h-36 inset-in-s--4 round-l-2  round-r-9", "icon": { name: "arrow-left", side: "left", Class: "w-24 mx-auto" } })} ${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": `slider-next-btn `, "ClassName": "btn-next p-0 absolute w-30 h-34 inset-in-e-0 round-l-9  round-r-2 ", "icon": { name: "arrow-right", side: "left", Class: "w-24 mx-auto" } })} </div> </div>`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/ui/MySlider.astro", void 0);

const $$Astro$1 = createAstro("https://tveltatawey.netlify.app");
const $$MainHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainHeading;
  const { title, spanData, ContainerWidth = "w-110" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mainHeading d-flex align-items-center justify-between mb-5"> <h2 class="fs-28 fw-600">${title}</h2> <div${addAttribute(`tapContainer h-26 round-full ${ContainerWidth}`, "class")}> <div class="tabValues d-flex align-items-center justify-around w-full h-full relative"> ${spanData.map((item, index) => renderTemplate`<span${addAttribute(`tap d-inline-block fs-18 fw-500 ${index === 0 ? "active" : ""}`, "class")}>${item.name}</span>`)} <span class="activeColor absolute top-50 translate-y--50 round-full h-8/10 w-1/2 round-full"></span> </div> </div> </div>`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/ui/MainHeading.astro", void 0);

const $$BaseSection = createComponent(async ($$result, $$props, $$slots) => {
  let loading = true;
  let data = null;
  try {
    data = await fetchApi(`trending/all/day`);
  } catch (error) {
    loading = false;
    console.error("Error fetching data:", error);
  } finally {
    loading = false;
  }
  return renderTemplate`<!-- trendSlider -->${maybeRenderHead()}<section class="trendSection" aria-label=""> <div class="container relative"> ${renderComponent($$result, "MainHeading", $$MainHeading, { "spanData": trendSpanData, "title": "trending" })} ${loading ? renderTemplate`${renderComponent($$result, "MySlider", $$MySlider, { "data": data.results, "id": "trendSlider", "loader": true })}` : renderTemplate`${renderComponent($$result, "MySlider", $$MySlider, { "data": data.results, "id": "trendSlider", "loader": false })}`} ${renderComponent($$result, "MySlider", $$MySlider, { "data": data.results, "id": "trendSlider", "loader": true, "ClassName": "d-none loadingSection" })} <!-- <MySlider data={data.results} id="trendSlider" /> --> </div> </section>`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/sections/BaseSection.astro", void 0);

const $$Astro = createAstro("https://tveltatawey.netlify.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "des": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "BaseSection", $$BaseSection, {})} ` })} `;
}, "D:/project/version/2/Astro 2024/ApiProject/src/pages/index.astro", void 0);

const $$file = "D:/project/version/2/Astro 2024/ApiProject/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
