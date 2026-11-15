/**
 * Gera o caminho SVG de um traçado de ECG na escala do papel do site:
 * 4 px = 1 mm, 25 mm/s, 10 mm/mV. Um complexo P-QRS-T ocupa ~51 px e, a 75 bpm,
 * os batimentos se repetem a cada 80 px (RR). O pulso de calibração (1 mV) tem 40 × 20 px.
 * Todo o traço é feito de segmentos retos, como num monitor: as ondas P e T são
 * triângulos, sem curvas.
 */

export interface TraceOptions {
  /** largura total do traçado (unidades do viewBox, em px) */
  width: number;
  /** y da linha de base */
  baseline: number;
  /** distância entre batimentos (px); 80 = 75 bpm */
  rr?: number;
  /** começa com o pulso de calibração */
  calibration?: boolean;
  /** linha reta antes do pulso de calibração */
  lead?: number;
  /** posição do primeiro batimento (px) */
  first?: number;
  /** escala vertical (1 = 4 px/mm) */
  gain?: number;
  /** batimentos em posições definidas (substitui o ritmo regular) */
  beats?: number[];
}

const r = (n: number) => Math.round(n * 100) / 100;

export function tracePath(o: TraceOptions): string {
  const g = o.gain ?? 1;
  const y0 = o.baseline;
  const rr = o.rr ?? 80;
  const parts: string[] = [`M0 ${r(y0)}`];
  let x = 0;

  const line = (nx: number, ny = y0) => {
    parts.push(`L${r(nx)} ${r(ny)}`);
    x = nx;
  };

  if (o.calibration) {
    line(o.lead ?? 12);
    line(x, y0 - 40 * g);
    line(x + 20, y0 - 40 * g);
    line(x, y0);
  }

  const beat = (bx: number) => {
    if (bx + 51 > o.width) return false;
    line(bx);
    // onda P: triângulo baixo
    line(bx + 5, y0 - 5.5 * g);
    line(bx + 10);
    // segmento PR
    line(bx + 16);
    // complexo QRS
    line(bx + 18, y0 + 4 * g);
    line(bx + 21, y0 - 48 * g);
    line(bx + 24.5, y0 + 13 * g);
    line(bx + 27);
    // segmento ST
    line(bx + 35);
    // onda T: sobe devagar e desce mais rápido
    line(bx + 44, y0 - 10 * g);
    line(bx + 51);
    return true;
  };

  if (o.beats) {
    for (const b of o.beats) beat(b);
  } else {
    let bx = o.first ?? (o.calibration ? x + 32 : 24);
    while (beat(bx)) bx += rr;
  }

  line(o.width);
  return parts.join("");
}
