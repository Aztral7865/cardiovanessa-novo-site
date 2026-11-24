// Reúne as páginas por tema (um arquivo por página nesta pasta) e decide quais entram no build.
import type { Pagina } from "./tipos";

const modulos = import.meta.glob<{ pagina?: Pagina }>(["./*.ts", "!./index.ts", "!./tipos.ts"], { eager: true });

// ordem nos links do rodapé: do mais procurado ao mais específico
const ORDEM = [
  "check-up-cardiologico",
  "pressao-alta",
  "colesterol",
  "palpitacao-e-arritmia",
  "risco-cirurgico",
  "exames",
];
const posicao = (slug: string) => {
  const i = ORDEM.indexOf(slug);
  return i === -1 ? ORDEM.length : i;
};

const todas = Object.values(modulos)
  .map((m) => m.pagina)
  .filter((p): p is Pagina => Boolean(p))
  .sort((a, b) => posicao(a.slug) - posicao(b.slug));

/** Rascunho = texto que a Dra. Vanessa ainda não aprovou (sem `revisadoEm`). */
export const ehRascunho = (p: Pagina) => !p.revisadoEm;

// rascunhos aparecem no computador (npm run dev) e na prévia do GitHub, nunca no site no ar
const mostrarRascunhos = import.meta.env.DEV || import.meta.env.PUBLIC_PREVIEW === true;

/** Páginas que existem neste build. Os links do site só apontam para elas. */
export const paginas = todas.filter((p) => !ehRascunho(p) || mostrarRascunhos);

export const paginaPorSlug = (slug: string) => paginas.find((p) => p.slug === slug);

/** Páginas ligadas a um item de "O que eu trato" (pelo título exato do item). */
export const paginasDaArea = (titulo: string) => paginas.filter((p) => p.areas.includes(titulo));

const base = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

/** Endereço da página dentro do site (funciona na prévia, que fica numa subpasta). */
export const urlDaPagina = (slug: string) => `${base}${slug}`;

/** Endereço de uma seção da página inicial, ex.: inicio("sobre") → "/#sobre". */
export const inicio = (secao?: string) => (secao ? `${base}#${secao}` : base);
