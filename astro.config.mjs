// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import purgecss from 'astro-purgecss';
import netlify from '@astrojs/netlify';

export default defineConfig({
  
  
  site: 'https://tveltatawey.netlify.app',
  base: '/',
  build: {
    assets: 'assets/images',
    inlineStylesheets: 'never',
  },

  vite: {

    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            // Handle SCSS/CSS
            if (assetInfo.name?.match(/\.(css|scss)$/)) {
              return 'styles/[name][extname]';
            }
            // Handle TypeScript/JavaScript
            if (assetInfo.name?.match(/\.(js|ts)$/)) {
              return 'scripts/[name][extname]';
            }
            // Handle images
            if (/\.(gif|jpe?g|png|svg|webp)$/i.test(assetInfo.name ?? '')) {
              return 'assets/images/[name][extname]';
            }
            return 'assets/[name][extname]';
          },
          chunkFileNames: 'scripts/[name].[hash].js',
          entryFileNames: 'scripts/[name].[hash].js',
        }
      }
    }
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
    imageCDN: false,
    // assets: true
  }),
  experimental: {
    serverIslands: true,
    }
});

