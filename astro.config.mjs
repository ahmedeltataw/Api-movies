// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import purgecss from 'astro-purgecss';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'assets/images',
    inlineStylesheets: 'never',
    format: 'file',


      // routes: ['/'],

    //   trailingSlash: 'always',
    
    assetsPrefix: '/'
  },

  // image: {
  //   // service: squooshImageService(),
  //   domains: ["astro.build"]
  // },
  image: {
    domains: ["image.tmdb.org"],  // Add TMDB domain to allowed list
    remotePatterns: [{
      protocol: "http",
      hostname: "image.tmdb.org",
    }],
  },
  compressHTML: true,

  // optimizeHoistedScript: true,
  output: 'server',

  // vite: {
  //   logLevel: 'error',
  //   build: {
  //     rollupOptions: {
        
  //       output: {
  //         chunkFileNames: 'assets/js/[name]-[hash].js',
  //         entryFileNames: 'assets/js/[name]-[hash].js',
  //         assetFileNames: ({
  //           name
  //         }) => {
  //           // Check if the file is an image
  //           if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
  //             return 'assets/images/[name]-[hash][extname]';
  //           }
  //           if (/\.css$/.test(name ?? '')) {
  //             return 'assets/css/[name]-[hash][extname]';
  //           }

  //           // default value
  //           // ref: https://rollupjs.org/guide/en/#outputassetfilenames
  //           return 'assets/[name]-[hash][extname]';
  //         }
  //       }
  //     }
  //   }

  // },

  integrations: [icon(), purgecss()],
  adapter: vercel(),
  devToolbar: { enabled: false },
	experimental: {
		serverIslands: true,
	}
});