// Reduz as fotos originais de estúdio (2000×3000, ~4 MB, ensaio de nov/2026) para fontes de
// trabalho leves em src/assets/photos. O Astro (sharp) gera AVIF/WebP responsivos a partir delas.
// Depois de trocar a foto da capa, rode `python tools/recorte.py` para refazer o recorte.
//
// Uso: node tools/prepare-photos.mjs <pasta-das-originais>
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const srcDir = process.argv[2] ?? "_legado/fotos-2026";
const outDir = "src/assets/photos";

/** box (opcional): recorte em frações da imagem original [x0, y0, x1, y1] */
const photos = [
  { from: "IMG_7308.JPG.jpeg", to: "vanessa-capa.jpg" }, // abertura (escolha da Dra. Vanessa)
  { from: "IMG_7309.JPG.jpeg", to: "vanessa-sorrindo.jpg" }, // Sobre
  { from: "IMG_7314.JPG.jpeg", to: "vanessa-formacao.jpg" }, // Trajetória: Formação
  { from: "IMG_7315.JPG.jpeg", to: "vanessa-plantao.jpg" }, // Trajetória: Plantão e emergência
  { from: "IMG_7317.JPG.jpeg", to: "vanessa-docencia.jpg" }, // Trajetória: Docência
  { from: "IMG_7311.JPG.jpeg", to: "vanessa-retrato.jpg" }, // páginas por tema: cartão da autora
];

await mkdir(outDir, { recursive: true });

for (const { from, to, box } of photos) {
  const file = path.join(srcDir, from);
  let img = sharp(file).rotate();
  if (box) {
    const { width = 0, height = 0 } = await sharp(file).metadata();
    const [x0, y0, x1, y1] = box;
    img = img.extract({
      left: Math.round(width * x0),
      top: Math.round(height * y0),
      width: Math.round(width * (x1 - x0)),
      height: Math.round(height * (y1 - y0)),
    });
  }
  const info = await img
    .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
    .withIccProfile("srgb")
    .jpeg({ quality: 86, mozjpeg: true, progressive: true })
    .toFile(path.join(outDir, to));
  console.log(`${to}: ${info.width}×${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
}
