import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { siteConfig } from "./src/data/site.js";

const isProjectPage = siteConfig.githubPages.type === "project";

export default defineConfig({
  site: siteConfig.siteUrl,
  base: isProjectPage ? `/${siteConfig.githubPages.repository}` : undefined,
  integrations: [sitemap()],
});
