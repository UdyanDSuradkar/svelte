// playwright.config.js
import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://your-vercel-deployed-site.vercel.app", // Replace this
  },
});
