// Gera favicon.svg, PNGs de ícone e o manifest a partir do símbolo vetorizado (src/data/symbol.ts).
// Uso: node tools/make-icons.mjs
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

const src = await readFile("src/data/symbol.ts", "utf8");
const json = src.slice(src.indexOf("{"), src.lastIndexOf("}") + 1);
const symbol = JSON.parse(json);
const [vx, vy, vw, vh] = symbol.viewBox.split(" ").map(Number);

const OXBLOOD = "#6B1222";

function tile({ size = 512, radius = 112, width = 0.8 } = {}) {
  const s = (size * width) / vw;
  const tx = (size - vw * s) / 2 - vx * s;
  const ty = (size - vh * s) / 2 - vy * s;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
<defs><linearGradient id="g" x1="0.15" y1="0.1" x2="0.85" y2="0.95"><stop offset="0" stop-color="#F6E3E5"/><stop offset="1" stop-color="#E2B8BE"/></linearGradient></defs>
<rect width="${size}" height="${size}" rx="${radius}" fill="${OXBLOOD}"/>
<g transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${s.toFixed(4)})">
<path d="${symbol.ribbon}" fill="url(#g)" fill-rule="evenodd"/>
<path d="${symbol.fold}" fill="#C38A92" fill-rule="evenodd"/>
<path d="${symbol.ecg}" fill="#FBF3F2" fill-rule="evenodd"/>
</g></svg>`;
}

const rounded = tile();
await writeFile("public/favicon.svg", rounded);
await sharp(Buffer.from(tile({ width: 0.86 }))).resize(32, 32).png().toFile("public/favicon-32.png");
const square = tile({ radius: 0, width: 0.72 });
await sharp(Buffer.from(square)).resize(180, 180).png().toFile("public/apple-touch-icon.png");
await sharp(Buffer.from(square)).resize(192, 192).png().toFile("public/icon-192.png");
await sharp(Buffer.from(square)).resize(512, 512).png().toFile("public/icon-512.png");

const manifest = {
  name: "Dra. Vanessa Damin, cardiologista",
  short_name: "Dra. Vanessa",
  lang: "pt-BR",
  start_url: "./",
  scope: "./",
  display: "browser",
  background_color: "#FDFCFC",
  theme_color: "#FDFCFC",
  icons: [
    { src: "icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "icon-512.png", sizes: "512x512", type: "image/png" },
  ],
};
await writeFile("public/site.webmanifest", JSON.stringify(manifest, null, 2) + "\n");
console.log("ícones gerados em public/");
