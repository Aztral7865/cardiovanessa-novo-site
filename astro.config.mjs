// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { rm, writeFile } from "node:fs/promises";

/**
 * PREVIEW=true  → prévia em usuario.github.io/<repo>: sem CNAME, sem sitemap,
 *                 robots.txt bloqueando tudo e <meta name="robots" content="noindex">.
 * sem PREVIEW   → produção em www.cardiovanessadamin.com.br.
 */
const PREVIEW = process.env.PREVIEW === "true";
const PRODUCTION_URL = "https://www.cardiovanessadamin.com.br";
const DOMAIN = "www.cardiovanessadamin.com.br";

// No GitHub Actions, GITHUB_REPOSITORY = "usuario/repositorio".
const [owner = "", repo = ""] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const site = process.env.SITE_URL ?? (PREVIEW && owner ? `https://${owner}.github.io` : PRODUCTION_URL);
const base = process.env.BASE_PATH ?? (PREVIEW && repo ? `/${repo}/` : "/");

const today = new Date().toISOString().slice(0, 10);

/** Gera robots.txt, sitemap.xml e CNAME conforme o modo do build. */
function publishFiles() {
  return {
    name: "publish-files",
    hooks: {
      /** @param {{ dir: URL }} options */
      "astro:build:done": async ({ dir }) => {
        const file = (/** @type {string} */ name) => new URL(name, dir);
        if (PREVIEW) {
          await rm(file("CNAME"), { force: true });
          await rm(file("sitemap.xml"), { force: true });
          await rm(file("googlec3cbfcb27719cc4b.html"), { force: true });
          await writeFile(file("robots.txt"), "User-agent: *\nDisallow: /\n");
          return;
        }
        await writeFile(file("CNAME"), `${DOMAIN}\n`);
        await writeFile(
          file("sitemap.xml"),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${PRODUCTION_URL}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
        );
        await writeFile(file("robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${PRODUCTION_URL}/sitemap.xml\n`);
      },
    },
  };
}

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  build: { format: "file", inlineStylesheets: "always" },
  compressHTML: true,
  integrations: [publishFiles()],
  vite: {
    define: {
      "import.meta.env.PUBLIC_PREVIEW": JSON.stringify(PREVIEW),
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Fira Sans",
      cssVariable: "--font-sans",
      weights: [400, 500, 600],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Fira Sans Extra Condensed",
      cssVariable: "--font-condensed",
      weights: [500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Arial Narrow", "sans-serif"],
    },
  ],
});
