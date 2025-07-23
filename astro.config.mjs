import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [svelte()],
  adapter: vercel(),
});
