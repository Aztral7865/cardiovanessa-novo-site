// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { execSync } from "node:child_process";
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

// lastmod do sitemap = data do último commit (o site só muda quando há commit). O Google só usa
// o lastmod se ele for fiel; a data de cada build mudaria a cada publicação sem o conteúdo mudar.
let lastmod = "";
try {
  lastmod = execSync("git log -1 --format=%cs", { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
} catch {
  // fora de um repositório git: o sitemap sai sem lastmod
}

/** Gera robots.txt, sitemap.xml e CNAME conforme o modo do build. */
function publishFiles() {
  return {
    name: "publish-files",
    hooks: {
      /** @param {{ dir: URL, pages: { pathname: string }[] }} options */
      "astro:build:done": async ({ dir, pages }) => {
        const file = (/** @type {string} */ name) => new URL(name, dir);
        if (PREVIEW) {
          await rm(file("CNAME"), { force: true });
          await rm(file("sitemap.xml"), { force: true });
          await rm(file("googlec3cbfcb27719cc4b.html"), { force: true });
          await writeFile(file("robots.txt"), "User-agent: *\nDisallow: /\n");
          return;
        }
        await writeFile(file("CNAME"), `${DOMAIN}\n`);
        // todas as páginas publicadas (a inicial primeiro); rascunhos não chegam ao build de produção
        const paths = pages
          .map((p) => p.pathname.replace(/^\/+|\/+$/g, ""))
          .filter((p) => p !== "404")
          .sort((a, b) => (a === "" ? -1 : b === "" ? 1 : a.localeCompare(b)));
        const urls = paths
          .map((p) => `  <url>\n    <loc>${PRODUCTION_URL}/${p}</loc>\n${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""}  </url>`)
          .join("\n");
        await writeFile(
          file("sitemap.xml"),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
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
      // só o que a página usa: 400 e 500, sem itálico (cada arquivo a mais disputa banda com a foto da abertura)
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Fira Sans Extra Condensed",
      cssVariable: "--font-condensed",
      // os títulos pedem 400 e 500 e os dois saem deste arquivo de 500, como sempre saíram
      weights: [500],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Arial Narrow", "sans-serif"],
    },
  ],
});
