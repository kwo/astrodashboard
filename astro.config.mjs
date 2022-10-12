import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  server: {
    host: 'localhost'
  },
  integrations: [tailwind(), react()]
});