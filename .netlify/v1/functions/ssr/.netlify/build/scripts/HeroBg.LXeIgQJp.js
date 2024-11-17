import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server.E_-_BhNn.js';
import 'kleur/colors';
import 'clsx';
import { b as backdrop } from './configuration.BLw2yGZC.js';
import { f as fetchApi } from './api.CsPyJm7x.js';

const $$HeroBg = createComponent(async ($$result, $$props, $$slots) => {
  let AllData = await fetchApi("movie/upcoming");
  let imgData = AllData.results;
  let getRedomIndex = Math.floor(Math.random() * (imgData.length - 1));
  let rendomImg = imgData[getRedomIndex];
  return renderTemplate`${maybeRenderHead()}<div class="backDropImg relative h-full"> <img${addAttribute(backdrop("w300", rendomImg.backdrop_path), "data-src")}${addAttribute(backdrop("w1280", rendomImg.backdrop_path), "src")}${addAttribute(`
        ${backdrop("w300", rendomImg.backdrop_path)} 300w,
        ${backdrop("w780", rendomImg.backdrop_path)} 780w,
        ${backdrop("original", rendomImg.backdrop_path)} 2048w,
        
        
      `, "data-srcset")} sizes="(max-width: 300px) 300px,
              (max-width: 780px) 780px ,2048w ,
             "${addAttribute(`${rendomImg.original_title}`, "alt")} loading="eager" decoding="async" class="img-cover o-40 lazyLoad heroBG"> </div>`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/hero/HeroBg.astro", void 0);

const $$file = "D:/project/version/2/Astro 2024/ApiProject/src/components/hero/HeroBg.astro";
const $$url = undefined;

export { $$HeroBg as default, $$file as file, $$url as url };
