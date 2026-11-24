# Site da Dra. Vanessa Damin

Site de página única da Dra. Vanessa Damin, cardiologista e clínica médica em Criciúma (SC).
Feito com [Astro](https://astro.build): o build gera um único `index.html` estático, sem servidor e sem banco de dados.

## Rodar no computador

Requer Node.js 22+ e npm.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera a pasta dist/
npm run preview    # serve a pasta dist/
```

## Onde mexer

| O quê | Onde |
|---|---|
| Textos e dados (contatos, formação, áreas, mitos, perguntas, depoimentos) | `src/data/*.ts` |
| Páginas por tema (pressão alta, colesterol, exames...) | `src/data/paginas/<slug>.ts` (formato em `tipos.ts`; rascunho até preencher `revisadoEm`) |
| Seções da página | `src/components/*.astro` |
| Cores, tipografia e layout | `src/styles/global.css` (sistema documentado em `DESIGN.md`) |
| Comportamento (menu, listas, formulário → WhatsApp) | `src/scripts/site.ts` |
| Fotos | `src/assets/photos/` (geradas por `tools/prepare-photos.mjs`) |
| Recorte da abertura (o traçado passa por trás da médica) | `src/assets/photos/vanessa-capa-recorte.webp` (gerado por `tools/recorte.py`) |
| Símbolo da logo (SVG) | `src/data/symbol.ts` (vetorizado por `tools/logo/vectorize.py` com potrace) |
| Favicon e ícones | `public/` (gerados por `tools/make-icons.mjs`) |

O formulário de contato não envia nada para um servidor: ele monta a mensagem e abre o WhatsApp.

## Publicação (GitHub Pages)

O workflow `.github/workflows/deploy.yml` faz o build e publica a cada push na branch `main`.

- **Prévia** (este repositório): variável do repositório `PREVIEW=true`. O site sai em
  `https://<usuario>.github.io/cardiovanessa-novo-site/`, sem CNAME, sem sitemap, com `robots.txt`
  bloqueando buscadores e `<meta name="robots" content="noindex">`.
- **Produção** (quando a cliente aprovar):
  1. remover a variável `PREVIEW` em *Settings → Secrets and variables → Actions → Variables*;
  2. em *Settings → Pages*, informar o domínio `www.cardiovanessadamin.com.br` (o build já gera o `CNAME`,
     o `sitemap.xml`, o `robots.txt` liberado e o arquivo de verificação do Google);
  3. apontar o DNS do domínio para o GitHub Pages.

## Ferramentas de apoio

```bash
node tools/prepare-photos.mjs <pasta-com-as-fotos-originais>   # reduz as fotos de estúdio (ensaio de nov/2026)
node tools/make-icons.mjs                                       # favicon, ícones e manifest
python tools/logo/vectorize.py tools/logo/logo-original.jpg tools/logo/out   # requer potracer, numpy e pillow
python tools/recorte.py   # refaz o recorte da foto da abertura; requer opencv-python, numpy e pillow (rodar de novo se a foto mudar)
```
