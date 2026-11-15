// Reduz as fotos originais de estúdio (4480×6720, ~10 MB) para fontes de trabalho
// leves em src/assets/photos. O Astro (sharp) gera AVIF/WebP responsivos a partir delas.
// O retrato de jaleco (vanessa-jaleco.jpg) é recortado da foto em dupla img5.
//
// Uso: node tools/prepare-photos.mjs <pasta-das-originais>
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const srcDir = process.argv[2] ?? "_legado/images";
const outDir = "src/assets/photos";

/** box: recorte em frações da imagem original [x0, y0, x1, y1] */
const photos = [
  { from: "img2.jpg", to: "vanessa-estetoscopio.jpg" },
  { from: "img3.jpg", to: "vanessa-bracos-cruzados.jpg" },
  { from: "img1.jpg", to: "vanessa-estudio.jpg" },
  { from: "img5.jpg", to: "vanessa-jaleco.jpg", box: [0.47, 0.05, 0.83, 1] },
  { from: "img7.jpg", to: "vanessa-e-fernando.jpg" },
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
