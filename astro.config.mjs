// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  output:'server',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    icon(),
    react(),
    markdoc(),
    keystatic(),
  ],
  adapter: netlify(),
});