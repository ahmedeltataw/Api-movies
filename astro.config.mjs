// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import purgecss from 'astro-purgecss';


// import node from '@astrojs/node';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  
  
  site: 'https://tveltatawey.com',
  base: '/',
  build: {
    assets: 'assets/images',
    inlineStylesheets: 'never',
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({
            name
          }) => {
            // Check if the file is an image
            if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (/\.(css|scss)$/.test(name ?? '')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            if (/\.(ts|js)$/.test(name ?? '')) {
              return 'assets/js/[name]-[hash][extname]';
            }

            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'assets/[name]-[hash][extname]';
          }
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
  
  adapter: vercel(),
  experimental: {
    serverIslands: true,
    }
});