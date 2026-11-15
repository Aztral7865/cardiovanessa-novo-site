"""
Recorta a Dra. Vanessa do retrato da abertura (fundo grafite liso), para o traçado de ECG
passar por trás dela. Gera src/assets/photos/vanessa-estetoscopio-recorte.webp: o mesmo
retrato, do mesmo tamanho, com o fundo transparente. No site ele fica por cima do traçado,
alinhado à foto.

Uso: python tools/recorte.py
Requer: opencv-python, numpy e pillow.
"""

from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src" / "assets" / "photos" / "vanessa-estetoscopio.jpg"
OUT = ROOT / "src" / "assets" / "photos" / "vanessa-estetoscopio-recorte.webp"

img = cv2.imread(str(SRC))  # BGR
if img is None:
    raise SystemExit(f"foto não encontrada: {SRC}")
h, w = img.shape[:2]
L = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)[:, :, 0]

# 1. claro = pessoa (jaleco, pele, blusa); o fundo grafite nunca passa de ~26 de luminância
mask = (L > 40).astype(np.uint8) * 255
mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))

# 2. fica só a maior região: o corpo
n, lab, st, _ = cv2.connectedComponentsWithStats(mask, 8)
big = 1 + int(np.argmax(st[1:, cv2.CC_STAT_AREA]))
mask = np.where(lab == big, 255, 0).astype(np.uint8)

# 3. fecha as falhas finas e escuras dentro do corpo (os tubos do estetoscópio)
#    e preenche os buracos que não tocam a borda da foto
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (31, 31)))
inv = cv2.bitwise_not(mask)
n2, lab2, st2, _ = cv2.connectedComponentsWithStats(inv, 8)
for i in range(1, n2):
    x, y, ww, hh, _a = st2[i]
    if x > 0 and y > 0 and x + ww < w and y + hh < h:
        mask[lab2 == i] = 255
mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))

# 4. borda suave, sem serrilhado
alpha = cv2.GaussianBlur(mask, (0, 0), 1.4)

rgba = np.dstack([cv2.cvtColor(img, cv2.COLOR_BGR2RGB), alpha])
Image.fromarray(rgba, "RGBA").save(OUT, "WEBP", quality=94, method=6)
print(f"{OUT.relative_to(ROOT)}: {w} x {h}, pessoa em {round(float((mask > 0).mean()) * 100, 1)}% da foto")
