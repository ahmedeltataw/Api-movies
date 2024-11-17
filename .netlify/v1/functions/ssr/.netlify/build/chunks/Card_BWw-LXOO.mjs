import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute, F as Fragment } from './astro/server_CzN0ykJ1.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CeItgaNA.mjs';
import { a as posterImg } from './configuration_BLw2yGZC.mjs';

const noPoster = new Proxy({"src":"/_astro/no-poster.DjFr0uax.png","width":500,"height":750,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/project/version/2/Astro 2024/ApiProject/src/assets/images/error/no-poster.png";
							}
							
							return target[name];
						}
					});

const $$ErrorImg = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": noPoster, "alt": `no poster found`, "onload": "this.classList.add('loaded')", "format": "webp", "quality": 70, "class": `img-cover round-8 img-t notFoundImg  overflow-hidden` })} <!-- <img src={noPoster.src} alt={\`no poster found\`}   /> -->`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/ui/ErrorImg.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardImg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardImg;
  const { src, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${src !== null ? renderTemplate`${maybeRenderHead()}<img${addAttribute(posterImg("w92", src), "data-src")}${addAttribute(posterImg("w500", src), "src")}${addAttribute(alt, "alt")} class="img-cover round-8 img-t  lazyLoad" loading="lazy" decoding="async"${addAttribute(`
  ${posterImg("w185", src)} 185w,
  ${posterImg("w342", src)} 342w,
  
  
`, "data-srcset")} sizes="(max-width: 300px) 185px,(max-width: 780px) 342px">` : renderTemplate`${renderComponent($$result2, "ErrorImg", $$ErrorImg, {})}`}${renderComponent($$result2, "Fragment", Fragment, {})}` })}`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/Cards/CardImg.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, src, alt, year, rate, id, color, inSlidr = true } = Astro2.props;
  return renderTemplate`<!-- w-124 xl-max:w-100 sm-max:min-w-60 -->${maybeRenderHead()}<div${addAttribute(`AE_card relative ${inSlidr === true ? "h-full w-full" : "h-fit mb-5 card"} ${!year ? "pb-9" : ""}`, "class")}${addAttribute(id, "data-id")}> <!-- img 70% --> <div${addAttribute(`cardImg    round-8 relative ${inSlidr === true ? "h-3/4" : "imgGrid "}`, "class")}> ${renderComponent($$result, "CardImg", $$CardImg, { "src": src, "alt": alt })} <!-- rate --> <div class="innerPrenct w-28 h-28 round-cricle d-grid place-center absolute bottom--6 right--1"> <div class="prenct w-24 h-24 round-cricle relative d-grid place-center"${addAttribute(`background:${color}`, "style")}> <p class="relative fs-18 fw-700 prensetNum"> ${rate}<sup class="fs-12 fw-500">%</sup> </p> </div> </div> </div> <!-- title --> <h3 class="line-relaxed fs-20 line-clamp-1 pt-2 ps-4">${title}</h3> ${year && renderTemplate`<p class="year o-80 fs-16 ps-6 fw-500 pt-0">${year} </p>`} <a${addAttribute(href, "href")} class="w-full h-full absolute inset-0"></a> </div>`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/Cards/Card.astro", void 0);

const $$file = "D:/project/version/2/Astro 2024/ApiProject/src/components/Cards/Card.astro";
const $$url = undefined;

export { $$Card as default, $$file as file, $$url as url };
