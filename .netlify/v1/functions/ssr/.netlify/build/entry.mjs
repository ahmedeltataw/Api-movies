import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './scripts/_@astrojs-ssr-adapter.CvSoi7hX.js';
import { manifest } from './manifest_P16UR3aC.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
	['PeopleCard', () => import('./scripts/PeopleCard.DyeSc8jn.js')],
	['Card', () => import('./scripts/Card.BoQmkjHc.js')],
	['HeroBg', () => import('./scripts/HeroBg.LXeIgQJp.js')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/search.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/search.astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c53b9f29-d370-4c7c-b043-d1f318020d5e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
