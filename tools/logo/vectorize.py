"""Vetoriza o símbolo (coração em fita + traçado de ECG) da logo da Dra. Vanessa Damin.

Uso (com potracer, numpy e pillow instalados):

    python -I tools/logo/vectorize.py tools/logo/logo-original.jpg tools/logo/out

Gera três camadas traçadas com potrace (potracer):
  - ribbon: a fita inteira do coração (com a falha sob o ECG preenchida);
  - fold:   o lado de trás da fita (faixa interna mais escura);
  - ecg:    o traçado do eletrocardiograma.
O resultado é um JSON com os caminhos SVG (`paths.json`) e um SVG de conferência
(`symbol-trace.svg`). As cores finais são aplicadas em `src/components/Symbol.astro`.
"""

import json
import os
import sys

import numpy as np
import potrace
from PIL import Image, ImageFilter

SRC, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)

# Região do símbolo na imagem original de 1125x568 px.
CROP = (352, 92, 712, 348)
SCALE = 4  # amplia antes de traçar para curvas mais suaves

img = Image.open(SRC).convert("RGB").crop(CROP)
w, h = img.size
big = img.resize((w * SCALE, h * SCALE), Image.LANCZOS)
a = np.asarray(big).astype(np.int16)
R, G, B = a[..., 0], a[..., 1], a[..., 2]
lum = 0.299 * R + 0.587 * G + 0.114 * B


def smooth(mask: np.ndarray, radius: float) -> np.ndarray:
    """Suaviza a máscara binária (anti-serrilhado) e volta a limiar em 50%."""
    im = Image.fromarray((mask * 255).astype(np.uint8))
    im = im.filter(ImageFilter.GaussianBlur(radius))
    return np.asarray(im) > 127


def dilate(mask: np.ndarray, size: int) -> np.ndarray:
    im = Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(size))
    return np.asarray(im) > 127


def erode(mask: np.ndarray, size: int) -> np.ndarray:
    im = Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.MinFilter(size))
    return np.asarray(im) > 127


def smooth_at(mask: np.ndarray, radius: float, level: float) -> np.ndarray:
    im = Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(radius))
    return np.asarray(im) > int(255 * level)


# --- máscaras por cor -------------------------------------------------------
ecg = (B - R > 45) & (B > 110)
heart = (R - G > 55) & (R - B > 10) & (R > 95)

# Preenche a fita onde o ECG passa por cima dela: só nos pixels do ECG
# cercados de fita (fechamento restrito ao traçado).
closed = erode(dilate(heart, 31), 31)
ribbon = heart | (dilate(ecg, 7) & closed)
ribbon = smooth(ribbon, 4.5)

# Lado de trás da fita: o vinho escuro da dobra no alto do lobo esquerdo.
fold = heart & (lum < 70) & (R < 175)
fold[int(fold.shape[0] * 0.42):, :] = False  # ignora ruído perto da ponta
fold = smooth(erode(dilate(fold, 9), 9), 5.0)
fold &= erode(ribbon, 3)

# ECG: engrossa 1 px para uniformizar a espessura e suaviza.
ecg = smooth_at(dilate(ecg, 3), 2.8, 0.42)

TRACE = {
    "ribbon": dict(turdsize=200, alphamax=1.25, opttolerance=0.9),
    "fold": dict(turdsize=400, alphamax=1.3, opttolerance=1.0),
    "ecg": dict(turdsize=60, alphamax=0.9, opttolerance=0.5),
}


def trace(mask: np.ndarray, turdsize: int = 60, alphamax: float = 1.0, opttolerance: float = 0.4) -> str:
    bm = potrace.Bitmap(~mask)  # potracer trata pixels "escuros" como frente
    plist = bm.trace(turdsize=turdsize, alphamax=alphamax, opticurve=True, opttolerance=opttolerance)
    s = 1 / SCALE
    parts = []
    for curve in plist:
        p = curve.start_point
        parts.append(f"M{p.x*s:.2f} {p.y*s:.2f}")
        for seg in curve.segments:
            if seg.is_corner:
                c, e = seg.c, seg.end_point
                parts.append(f"L{c.x*s:.2f} {c.y*s:.2f}L{e.x*s:.2f} {e.y*s:.2f}")
            else:
                c1, c2, e = seg.c1, seg.c2, seg.end_point
                parts.append(
                    f"C{c1.x*s:.2f} {c1.y*s:.2f} {c2.x*s:.2f} {c2.y*s:.2f} {e.x*s:.2f} {e.y*s:.2f}"
                )
        parts.append("Z")
    return "".join(parts)


paths = {
    "viewBox": f"0 0 {w} {h}",
    "ribbon": trace(ribbon, **TRACE["ribbon"]),
    "fold": trace(fold, **TRACE["fold"]),
    "ecg": trace(ecg, **TRACE["ecg"]),
}

with open(os.path.join(OUT, "paths.json"), "w", encoding="utf-8") as f:
    json.dump(paths, f, indent=2)

svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="{paths['viewBox']}" width="{w*2}" height="{h*2}">
<rect width="100%" height="100%" fill="#fff"/>
<path d="{paths['ribbon']}" fill="#9B1B30" fill-rule="evenodd"/>
<path d="{paths['fold']}" fill="#4A0B16" fill-rule="evenodd"/>
<path d="{paths['ecg']}" fill="#1E0C11" fill-rule="evenodd"/>
</svg>"""
with open(os.path.join(OUT, "symbol-trace.svg"), "w", encoding="utf-8") as f:
    f.write(svg)

for name in ("ribbon", "fold", "ecg"):
    print(name, len(paths[name]), "chars")
