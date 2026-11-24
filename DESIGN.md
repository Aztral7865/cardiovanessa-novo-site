---
name: Dra. Vanessa Damin
description: Site de página única de uma cardiologista em Criciúma, desenhado como um laudo de eletrocardiograma lido com calma.
colors:
  paper: "#FDFCFC"
  paper-tint: "#F6F1F1"
  ink: "#1F0E12"
  ink-soft: "#4C3A3F"
  ink-muted: "#5B484D"
  oxblood: "#6B1222"
  oxblood-hover: "#7D172A"
  oxblood-press: "#57101C"
  wine: "#3E0A14"
  on-dark: "#FBF3F2"
  on-dark-soft: "#E6CDD0"
  focus: "#B0223B"
  grid-major: "rgb(107 18 34 / 0.072)"
  grid-minor: "rgb(107 18 34 / 0.028)"
  hairline: "rgb(31 14 18 / 0.14)"
typography:
  display:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 5.6vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.004em"
  headline:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.28
  body:
    fontFamily: "Fira Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.04em"
rounded:
  sm: "2px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
components:
  button-primary:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.oxblood-hover}"
    textColor: "{colors.on-dark}"
  button-primary-active:
    backgroundColor: "{colors.oxblood-press}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  field:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "52px"
---

# Design System: Dra. Vanessa Damin

## Overview

**Creative North Star: "O Traçado"**

O site inteiro é um laudo de eletrocardiograma lido com calma. O papel térmico branco com grade milimetrada é o chão da página; o traçado com o pulso de calibração (o degrau de 1 mV que abre cada derivação), feito só de segmentos retos como num monitor, é o fio condutor; os dados são impressos como campos de laudo, com rótulo em condensada e valor em algarismos tabulares. O bordô escuro ocupa regiões inteiras, nunca respingos: é ele que dá seriedade, no lugar do vermelho vivo do site anterior, que lia como infantil.

A densidade é de documento médico: filetes de 1 px, listas em vez de cartões, cantos retos, quase nenhuma sombra. A emoção vem das fotografias reais da médica e de poucos gestos de movimento (o traçado que se desenha na abertura e a foto que se revela no Sobre). Nada prende a rolagem. O celular manda: tudo nasce em 390 px e cresce para o desktop.

**Key Characteristics:**
- Grade milimetrada sutil (4 px = 1 mm, linha forte a cada 20 px) como fundo das seções claras.
- Traçado de ECG em SVG com pulso de calibração, só com segmentos retos (ondas P e T em triângulo), desenhado uma vez.
- Bordô (#6B1222) e vinho (#3E0A14) em faixas de largura total.
- Campos de laudo: rótulo condensado, valor tabular, filete por cima.
- Uma única ação dominante: "Agendar consulta", sempre o mesmo bloco bordô.

## Colors

Uma só família de cor, do vinho quase preto ao rosado do papel; o azul e o rosa da logo antiga foram achatados no bordô.

### Primary
- **Bordô Laudo** (oxblood): a cor da ação. Botões de agendar, rótulos de período, o batimento sob os títulos, a faixa dos depoimentos. Hover em oxblood-hover, pressionado em oxblood-press.
- **Vinho Profundo** (wine): o fechamento e o rodapé, a região mais escura da página.

### Neutral
- **Papel Térmico** (paper): fundo de todas as seções claras e dos painéis sobre a grade.
- **Papel Rosado** (paper-tint): superfícies de apoio e fundo enquanto uma foto carrega.
- **Tinta do Traçado** (ink): texto principal, títulos, o próprio traçado sobre o papel.
- **Tinta Média** (ink-soft): parágrafos de apoio e linhas sob os títulos.
- **Tinta de Rótulo** (ink-muted): rótulos de campo e notas; 7:1 sobre o papel.
- **Sobre o Bordô** (on-dark, on-dark-soft): texto e rótulos nas faixas escuras.
- **Grade** (grid-major, grid-minor): as linhas do papel milimetrado; no celular só a linha forte.
- **Filete** (hairline): separadores de listas e campos.

### Named Rules
**The One Hue Rule.** Nenhuma cor própria fora da família bordô. Marcas de terceiros (WhatsApp, Instagram, Google) aparecem em monocromático, na cor do texto ao redor.

**The Whole Band Rule.** O bordô entra em regiões inteiras (abertura de ação, depoimentos, fechamento) ou em pequenos sinais funcionais; nunca como gradiente, brilho ou fundo de cartão.

## Typography

**Display Font:** Fira Sans Extra Condensed (com Arial Narrow)
**Body Font:** Fira Sans (com system-ui)

**Character:** a condensada é a letra das etiquetas e cabeçalhos de equipamentos e de sinalização hospitalar; a Fira Sans é a leitura calma do laudo. As duas são servidas pelo próprio site (Astro Fonts), sem chamadas ao Google em tempo de execução.

### Hierarchy
- **Display** (400, 32–88 px, 0.92): só o nome da médica na abertura, em caixa-alta, com "Dra." em bordô.
- **Headline** (400, 34 px no celular, 48 px no desktop, 1.04): um título por seção, em caixa normal, com um batimento de 64 × 16 px logo abaixo, na linha do texto.
- **Title** (400, 21–28 px, 1.28–1.3): itens de lista (áreas, mitos, capítulos) e a frase do fechamento.
- **Body** (400, 17 px, 1.6): todo texto corrido; parágrafos até cerca de 40 rem.
- **Label** (500, 13–15 px, 0.04 em): rótulos de campo (CRM/SC, RQE, períodos), sempre em caixa normal.

### Named Rules
**The Tabular Rule.** Todo número que é registro ou data (CRM, RQE, anos, telefone, CEP) usa algarismos tabulares, como medida impressa.

**The No Heavy Display Rule.** Títulos em peso 400 (no máximo 500 em rótulos e botões); tamanho e compressão fazem a hierarquia, nunca negrito grande.

## Layout

Celular primeiro. Uma coluna de 342 px em 390 (margem de 24 px); grade de 12 colunas com 24 px de vão a partir de 768 px; container de até 1280 px com margens de 80 px no desktop. Todos os blocos começam na linha esquerda do container ou na linha de divisão única da página (início da coluna 8): retrato da abertura, foto do Sobre, painel dos mitos, lista de perguntas, formulário e texto do fechamento compartilham essa linha.

No desktop (1024 px ou mais) cada seção ocupa uma tela inteira (100svh), com o título no topo. Abaixo de 1024 px cada seção tem a altura do próprio conteúdo, com o mesmo respiro entre todas (64 px acima e abaixo no celular, 88 px no tablet em pé); um link do menu deixa o título 40 px abaixo do cabeçalho. Separação entre seções só por mudança de fundo ou espaço. O cabeçalho é fixo, a barra "Agendar consulta" do celular é fixa no rodapé e some quando outro botão de agendar está na tela. Nada mais é fixo e nenhuma seção prende a rolagem.

### Named Rules
**The Heartbeat Rule.** Cada título de seção leva logo abaixo um batimento em traço reto (64 × 16 px), começando na linha do container: é o mesmo batimento do traçado de progresso do cabeçalho, uma seção por batimento. Nada fica pendurado na margem.

## Elevation & Depth

Plano por padrão: profundidade vem de mudança de fundo (papel, bordô, vinho) e de filetes. Há uma única sombra suave, longa e difusa, usada só em painéis que flutuam sobre a grade ou sobre a foto (resposta do mito no desktop, formulário), sempre com um filete bordô de 3 px no topo.

### Shadow Vocabulary
- **Painel sobre o papel** (`box-shadow: 0 24px 48px -32px rgb(31 14 18 / 0.35)`): painéis de leitura sobre a grade.

### Named Rules
**The Printed Paper Rule.** Nada de vidro, desfoque ou brilho; o mundo é papel impresso.

## Shapes

Cantos retos (2 px) em botões, campos, fotos e painéis, como papel cortado. Círculos só nas iniciais dos depoimentos e no disco do ícone do Google. Linhas são sempre de 1 px (filetes) ou o traçado de 2 px; a única exceção é o filete superior de 3 px dos painéis e sob as fotos da trajetória.

## Components

### Buttons
- **Shape:** bloco de cantos retos (2 px), 52 px de altura (46 px no cabeçalho).
- **Primary:** bordô com texto claro, ícone do WhatsApp à esquerda; é sempre "Agendar consulta" e abre o WhatsApp com a mensagem pronta.
- **Hover / Focus:** o fundo escurece para oxblood-hover; pressionar reduz para 97%; foco com contorno de 2 px em focus, afastado 3 px.
- **Ghost:** contorno de tinta sobre o papel; no hover vira bloco de tinta. Usado para ações secundárias ("Ver o que eu trato", "Enviar dúvida pelo WhatsApp").

### Inputs / Fields
- **Style:** fundo branco, filete de tinta a 32%, 52 px de altura, rótulo condensado acima.
- **Focus:** borda bordô e anel suave bordô a 18%.
- **Error:** borda em focus e mensagem curta abaixo do campo, que diz o que escrever.

### Navigation
- **Desktop (1200+):** marca (símbolo + nome) à esquerda, links condensados com sublinhado bordô que se desenha no hover e marca a seção atual, botão de agendar à direita.
- **Celular e tablet:** botão "Menu" que abre um menu de tela cheia com índice numerado das seções (01–07), o botão de agendar e atalhos (ligar, Instagram, e-mail).
- **Traçado de progresso:** a linha de base do cabeçalho é um traçado com um batimento por seção; a parte já lida fica bordô.

### Laudo Fields (signature)
Grade de campos com filete superior: rótulo em condensada 13 px (tinta de rótulo) e valor em Fira Sans 500 tabular. Usado para CRM/RQE na abertura e para os itens da trajetória.

### Trajetória (capítulos)
Três capítulos fixos (Formação, Plantão e emergência, Docência), cada um com uma foto e uma lista de laudo sob um filete bordô de 3 px. Celular: um abaixo do outro, foto 4:3. Tablet em pé: foto 4:5 ao lado da lista. Desktop: três colunas com fotos quadradas; a partir de 1280 px o título vai para a coluna da esquerda e a seção cabe numa tela. Sem efeito de rolagem.

### ECG Trace (signature)
Caminho SVG gerado em `src/lib/ecg.ts` na escala do papel (25 mm/s, 10 mm/mV): pulso de calibração 40 × 20 px e complexos P-QRS-T a cada 84 px, todos em segmentos retos (P e T são triângulos, sem curvas). Cantos em ponta (`stroke-linejoin: miter`, limite 2,5): os picos agudos R e S saem chanfrados. Traço branco em `mix-blend-mode: difference`, que fica escuro no papel e claro sobre o fundo da foto. Na abertura ele passa por trás da Dra. Vanessa: o retrato recortado (`vanessa-estetoscopio-recorte.webp`, gerado por `tools/recorte.py`) fica numa camada acima da linha, na mesma caixa e com o mesmo enquadramento da foto, e entra junto com ela. Desenha-se uma vez, em 1,5 s.

## Do's and Don'ts

### Do:
- **Do** usar "Agendar consulta" com o mesmo bloco bordô em toda a página (cabeçalho, abertura, barra do celular, fechamento).
- **Do** manter a grade milimetrada sutil como fundo das seções claras, com só a linha forte (20 px) no celular.
- **Do** imprimir registros e datas como campos de laudo, com algarismos tabulares.
- **Do** usar as fotografias reais da Dra. Vanessa, uma por lugar, sem legendas.
- **Do** manter um título por seção, começando na linha esquerda do container.

### Don't:
- **Don't** voltar ao vermelho vivo, ao rosa ou ao azul da logo antiga como cores da página.
- **Don't** usar cartões iguais com ícone, título e texto como estrutura; listas com filetes fazem esse papel.
- **Don't** colocar rótulos ou sobretítulos acima dos títulos.
- **Don't** animar blocos ao rolar a página nem prender a rolagem; o movimento fica no traçado da abertura e no único momento (a foto que se revela no Sobre).
- **Don't** desenhar curvas no traçado de ECG: ondas em triângulo, cantos vivos.
- **Don't** inventar números, prêmios ou depoimentos; todo dado vem do site anterior e foi confirmado como correto.
