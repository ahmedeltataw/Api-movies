import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute, F as Fragment } from './astro/server_CzN0ykJ1.mjs';
import 'kleur/colors';
import { p as profileImg } from './configuration_BLw2yGZC.mjs';

const peopleImg = new Proxy({"src":"/_astro/avatar.CTec_ic7.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/project/version/2/Astro 2024/ApiProject/src/assets/images/error/avatar.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$PeopleImg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PeopleImg;
  const { src, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${src !== null ? renderTemplate`${maybeRenderHead()}<img${addAttribute(profileImg("w185", src), "data-src")}${addAttribute(profileImg("w45", src), "src")}${addAttribute(alt, "alt")} class="img-cover round-8 img-t  lazyLoad" loading="lazy" decoding="async"${addAttribute(`
      ${profileImg("w45", src)} 45w,
      ${profileImg("w185", src)} 185w,
      ${profileImg("h632", src)} 632w,
    `, "data-srcset")} sizes="(max-width: 300px) 45px,(max-width: 780px) 185px,(max-width: 1280px) 632px,632px">` : renderTemplate`<img${addAttribute(peopleImg.src, "src")} alt="no img" decoding="async" loading="lazy" class="img-cover round-8 img-t notFoundImg" onload="this.classList.add('loaded')">`}${renderComponent($$result2, "Fragment", Fragment, {})}` })}`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/Cards/peopleImg.astro", void 0);

const $$Astro = createAstro();
const $$PeopleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PeopleCard;
  const { title, id, src, type, height = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`peopleCard w-full mb-5 card  relative ${height === true ? "h-full" : "h-fit"} ${!type && "pb-9"} ${!type && height ? "noData" : ""}`, "class")}${addAttribute(id, "data-id")}> <div${addAttribute(`peopleImg   round-8 ${height === true ? "noPeople" : "h-3/4"}`, "class")}> ${renderComponent($$result, "PeopleImg", $$PeopleImg, { "src": src, "alt": title })} </div> <h3 class="line-relaxed fs-20 line-clamp-1 pt-2 ps-4">${title}</h3> ${type && renderTemplate`<p class="year o-80 fs-16 ps-6 fw-500 pt-0">${type}</p>`} <a${addAttribute(`people/${id}`, "href")} class="w-full h-full absolute inset-0"></a> </div>`;
}, "D:/project/version/2/Astro 2024/ApiProject/src/components/Cards/PeopleCard.astro", void 0);

const $$file = "D:/project/version/2/Astro 2024/ApiProject/src/components/Cards/PeopleCard.astro";
const $$url = undefined;

export { $$PeopleCard as default, $$file as file, $$url as url };
