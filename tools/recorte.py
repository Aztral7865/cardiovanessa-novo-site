"""
Recorta a Dra. Vanessa do retrato da abertura, para o traçado de ECG passar por trás dela.
Gera src/assets/photos/vanessa-capa-recorte.webp: o mesmo retrato, do mesmo tamanho, com o
fundo transparente. No site ele fica por cima do traçado, alinhado à foto.

O fundo é um roxo quase preto, e o cabelo, o colete e a calça também são escuros. Por isso o
recorte não usa só o brilho: a foto é clareada (gama) para o fundo arroxeado se separar da
roupa cinza e do cabelo castanho, e o GrabCut do OpenCV decide a borda a partir de uma
semente segura (blusa branca, rosto e mãos).

Uso: python tools/recorte.py [foto] [saida]
Requer: opencv-python, numpy e pillow.
"""

import sys
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "src" / "assets" / "photos" / "vanessa-capa.jpg"
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "src" / "assets" / "photos" / "vanessa-capa-recorte.webp"

img = cv2.imread(str(SRC))  # BGR
if img is None:
    raise SystemExit(f"foto não encontrada: {SRC}")
h, w = img.shape[:2]


def largest(mask: np.ndarray) -> np.ndarray:
    n, lab, st, _ = cv2.connectedComponentsWithStats(mask, 8)
    if n < 2:
        return mask
    big = 1 + int(np.argmax(st[1:, cv2.CC_STAT_AREA]))
    return np.where(lab == big, 255, 0).astype(np.uint8)


# 1. semente segura: o que é claro (blusa, rosto, mãos, colete iluminado) é pessoa
L = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)[:, :, 0]
seed = (L > 48).astype(np.uint8) * 255
seed = cv2.morphologyEx(seed, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
seed = largest(seed)
seed = cv2.morphologyEx(seed, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (61, 61)))

# 2. mapa inicial do GrabCut: pessoa certa, pessoa provável (casco que desce até a base,
#    porque o corpo continua até a borda de baixo), fundo provável e fundo certo (laterais e topo)
gc = np.full((h, w), cv2.GC_PR_BGD, np.uint8)
ys, xs = np.nonzero(seed)
cnts, _ = cv2.findContours(seed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
pts = np.vstack(cnts).reshape(-1, 2)
base = np.array([[xs.min() + w // 26, h - 1], [xs.max() - w // 26, h - 1]])
cv2.fillPoly(gc, [cv2.convexHull(np.vstack([pts, base]))], cv2.GC_PR_FGD)
gc[seed > 0] = cv2.GC_FGD
cx = int(np.median(xs))
gc[int(0.8 * h):, cx - w // 13 : cx + w // 13] = cv2.GC_FGD  # o meio da base é roupa
m = int(0.05 * w)
gc[:, :m] = cv2.GC_BGD
gc[:, w - m :] = cv2.GC_BGD
gc[: int(0.03 * h), :] = cv2.GC_BGD

# 3. GrabCut sobre a foto clareada: nas sombras, o fundo é roxo e a roupa é cinza
boost = np.clip(((img / 255.0) ** 0.4) * 255, 0, 255).astype(np.uint8)
bgd, fgd = np.zeros((1, 65)), np.zeros((1, 65))
cv2.grabCut(boost, gc, None, bgd, fgd, 10, cv2.GC_INIT_WITH_MASK)
mask = np.where((gc == cv2.GC_FGD) | (gc == cv2.GC_PR_FGD), 255, 0).astype(np.uint8)
mask = largest(cv2.morphologyEx(mask, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8)))

# 4. preenche buracos que não tocam a borda da foto e fecha falhas finas
inv = cv2.bitwise_not(mask)
n2, lab2, st2, _ = cv2.connectedComponentsWithStats(inv, 8)
for i in range(1, n2):
    x, y, ww, hh, _a = st2[i]
    if x > 0 and y > 0 and x + ww < w and y + hh < h:
        mask[lab2 == i] = 255
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))

# 5. borda suave, sem serrilhado
alpha = cv2.GaussianBlur(mask, (0, 0), 1.4)

rgba = np.dstack([cv2.cvtColor(img, cv2.COLOR_BGR2RGB), alpha])
Image.fromarray(rgba, "RGBA").save(OUT, "WEBP", quality=94, method=6)
print(f"{OUT.name}: {w} x {h}, pessoa em {round(float((mask > 0).mean()) * 100, 1)}% da foto")
