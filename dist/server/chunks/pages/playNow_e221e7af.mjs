import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute, g as renderHead, h as renderSlot, F as Fragment } from '../astro_ac9342a0.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Image } from './node_7ec5c989.mjs';
/* empty css                           */
const $$Astro$5 = createAstro();
const $$ScriptLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ScriptLayout;
  return renderTemplate``;
}, "D:/project/version/1/Api movies/src/layouts/scriptLayout.astro", void 0);

const Logo = {"src":"/_assets/logo.c5359ab1.png","width":183,"height":42,"format":"png"};

const $$Astro$4 = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${maybeRenderHead()}<div class="search-from relative overflow-hidden " data-astro-cid-6bjnfvw5><input class="round-8 pl-12" type="search" name="search" id="search" placeholder="search any movies..." data-astro-cid-6bjnfvw5><label class="absolute top-50  translate-y--50 left-0 fs-18 p-4" for="search" data-astro-cid-6bjnfvw5><i class="bi bi-search" data-astro-cid-6bjnfvw5></i></label></div>`;
}, "D:/project/version/1/Api movies/src/components/search.astro", void 0);

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0" data-astro-cid-d6vcou2g><div class="container-full px-12" data-astro-cid-d6vcou2g><nav class="d-flex align-items-center  relative justify-space-between" data-astro-cid-d6vcou2g><a href="/" class="websit-logo" data-astro-cid-d6vcou2g>${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "logo-website", "format": "avif", "quality": 50, "data-astro-cid-d6vcou2g": true })}</a><ul class=" d-flex align-items-center lg-max-d-none" data-astro-cid-d6vcou2g><li class="pr-12 fs-r-18 fw-700 nav-link" data-astro-cid-d6vcou2g><a href="#!" data-astro-cid-d6vcou2g>movies</a></li><li class="pr-12 fs-r-18 fw-700 nav-link" data-astro-cid-d6vcou2g><a href="#!" data-astro-cid-d6vcou2g>tvshow</a></li><li class="pr-12 fs-r-18 fw-700 nav-link" data-astro-cid-d6vcou2g><a href="#!" data-astro-cid-d6vcou2g>Anime</a></li><li class=" fs-r-18 fw-700 nav-link" data-astro-cid-d6vcou2g><a href="#!" data-astro-cid-d6vcou2g>sports</a></li></ul>${renderComponent($$result, "Search", $$Search, { "data-astro-cid-d6vcou2g": true })}<div class="btn-icon " data-astro-cid-d6vcou2g><button type="button" aria-label="open-search" class="btn btn-skew  px-8 round-8 fs-18 btn-search" data-astro-cid-d6vcou2g><i class="bi bi-search" data-astro-cid-d6vcou2g></i></button><button type="button" aria-label="open-side-menu" class="round-8   btn-side btn relative overflow-hidden d-flex justify-center" data-astro-cid-d6vcou2g><span data-astro-cid-d6vcou2g></span><span data-astro-cid-d6vcou2g></span><span data-astro-cid-d6vcou2g></span></button></div></nav></div></header>`;
}, "D:/project/version/1/Api movies/src/components/nav.astro", void 0);

const $$Astro$2 = createAstro();
const $$SideMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideMenu;
  const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzkzYmYxYzZiZTFhNTg5OTA4NmM3MTlkY2ZmNGM5MCIsInN1YiI6IjY1MWY3NjMwZjA0ZDAxMDBmZmVlM2I2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RI47bg-GFuAxe4PclvqxwsgvhPWMZ42whboBUmQoXo0"
  };
  let list = await fetch("https://api.themoviedb.org/3/genre/movie/list", { headers });
  let dataList = await list.json();
  return renderTemplate`${maybeRenderHead()}<aside class="side-menu " data-astro-cid-h6j53edt><div class="container" data-astro-cid-h6j53edt><div class="side-list px-9" data-astro-cid-h6j53edt><p class="title-side fs-r-24 fw-700 pb-7" data-astro-cid-h6j53edt> genres</p><ul class="link-side" data-astro-cid-h6j53edt>${dataList.genres.map((li) => renderTemplate`<li data-astro-cid-h6j53edt><a${addAttribute(li.id, "href")} class="fs-r-16 " data-astro-cid-h6j53edt>${li.name}</a></li>`)}</ul></div><div class="side-list px-9  " data-astro-cid-h6j53edt><p class="title-side fs-r-24 fw-700 pb-7" data-astro-cid-h6j53edt> follow us</p><ul class="link-side last-link" data-astro-cid-h6j53edt><li data-astro-cid-h6j53edt><a href="#!" class="fs-r-16 " data-astro-cid-h6j53edt><i class="bi bi-facebook pr-2" data-astro-cid-h6j53edt></i>
facebook
</a></li><li data-astro-cid-h6j53edt><a href="#!" class="fs-r-16 " data-astro-cid-h6j53edt><i class="bi bi-instagram pr-2" data-astro-cid-h6j53edt></i>
instagram
</a></li><li data-astro-cid-h6j53edt><a href="#!" class="fs-r-16 " data-astro-cid-h6j53edt><i class="bi bi-twitter-x pr-2" data-astro-cid-h6j53edt></i>
twitter
</a></li><li data-astro-cid-h6j53edt><a href="#!" class="fs-r-16 " data-astro-cid-h6j53edt><i class="bi bi-telegram pr-2" data-astro-cid-h6j53edt></i>
telegram
</a></li></ul></div></div></aside>`;
}, "D:/project/version/1/Api movies/src/components/sideMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- <GoogleFontsOptimizer
        url='https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap'
      /> -->${renderHead()}</head><body>${renderComponent($$result, "Nav", $$Nav, {})}${renderComponent($$result, "SideMenu", $$SideMenu, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Script", $$ScriptLayout, {})}</body></html>`;
}, "D:/project/version/1/Api movies/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$PlayNow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlayNow;
  const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzkzYmYxYzZiZTFhNTg5OTA4NmM3MTlkY2ZmNGM5MCIsInN1YiI6IjY1MWY3NjMwZjA0ZDAxMDBmZmVlM2I2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RI47bg-GFuAxe4PclvqxwsgvhPWMZ42whboBUmQoXo0"
  };
  let popular = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers
  });
  let data = await popular.json();
  let baseURL = "https://image.tmdb.org/t/p/original";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "a" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div>${data.results.map((i) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<h6>${i.vote_average}</h6>${renderComponent($$result3, "Image", $$Image, { "src": baseURL + i.backdrop_path, "width": 1280, "height": 852, "alt": "a bird", "format": "avif", "quality": 50, "class": `${i.title} img-movies` })}` })}`)}</div>` })}`;
}, "D:/project/version/1/Api movies/src/pages/playNow.astro", void 0);

const $$file = "D:/project/version/1/Api movies/src/pages/playNow.astro";
const $$url = "/playNow";

const playNow = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PlayNow,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, playNow as p };
