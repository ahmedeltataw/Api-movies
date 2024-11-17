// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import purgecss from 'astro-purgecss';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  build: {
    assets: '_astro',
    inlineStylesheets: 'never'
  },

  image: {
    domains: ["image.tmdb.org"],
    remotePatterns: [{
      protocol: "https",
      hostname: "image.tmdb.org",
    }],
  },

  compressHTML: true,
  output: 'server',

  integrations: [icon(), purgecss()],
  
  adapter: netlify({
    imageCDN: true, // Enable Netlify Image CDN
// Creates a function per route
  }),

  experimental: {
    serverIslands: true,
  }
});