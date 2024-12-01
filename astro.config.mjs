// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind()],
  site: "https://arnavk-09.github.io",
  base: "demo-page-gsap",
});
