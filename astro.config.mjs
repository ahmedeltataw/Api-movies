import { defineConfig, squooshImageService } from "astro/config";
import compressor from "astro-compressor";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";



import purgecss from "astro-purgecss";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: '_assets'
  },
  image: {
    service: squooshImageService(),
    domains: ["astro.build"]
  },
  compressHTML: true,
  optimizeHoistedScript: true,
  devOverlay: true,
  integrations: [mdx(), purgecss(), compressor({
    gzip: true,
    brotli: false
  })],
  output: 'server'
  // adapter: node({
  //   mode: 'middleware'
  // })

  // adapter: vercel()
  ,
  adapter: vercel()
});