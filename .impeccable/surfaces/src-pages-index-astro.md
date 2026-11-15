---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Página única: site da Dra. Vanessa Damin

## Escopo e modo

Página única (`src/pages/index.astro`), modo **Persuade**. Prioridade absoluta ao celular (390×844), sem quebras de 320 a 1440+.

- Público: pacientes adultos, idosos, familiares que agendam para pais e avós, atletas e pacientes de pré-operatório, de Criciúma e região.
- Ação: "Agendar consulta" → WhatsApp com mensagem pré-preenchida (no cabeçalho, na abertura, na barra fixa do celular e no fechamento). O formulário de contato monta a mensagem e abre o WhatsApp.
- Provas reais: CRM/RQE, formação, plantão de cardiologia 24h, SAMU, UTI, docência na UFSC e seis depoimentos reais. Nada inventado.
- Restrições: todos os textos e dados do site anterior ficam exatamente como estão; sem splash; fontes Fira Sans e Fira Sans Extra Condensed; vermelhos escuros e sóbrios.

## Direction contract

THESIS: A página é um laudo de eletrocardiograma lido com calma: papel milimetrado, traçado com pulso de calibração e campos de laudo carregam a identidade. Recusa o site de clínica padrão (foto, título e grade de cartões com ícones) e o clichê do coração pulsando.

OWN-WORLD: Papel térmico branco (#FDFCFC) com grade de 4 px / 20 px em bordô a 5–11%, só nas áreas de traçado. Texto em tinta vinho quase preta (#1F0E12). Bordô (#6B1222) e vinho profundo (#3E0A14) ocupam faixas inteiras (depoimentos, fechamento e rodapé). Campos de laudo: rótulo em Fira Sans Extra Condensed, valor em Fira Sans com algarismos tabulares, filetes de 1 px. Botões em bloco de cantos retos. Nenhum azul, rosa ou verde próprio; só ícones de marcas de terceiros mantêm suas cores.

STORY: Quem é (Dra. Vanessa Damin, cardiologista e clínica médica, CRM e RQE); por que confiar (formação, emergência e docência em capítulos de foto, depoimentos reais); o que trata (16 áreas); tira dúvidas (mitos e verdades, perguntas); agenda pelo WhatsApp.

FIRST VIEWPORT: Celular: cabeçalho fixo com o símbolo e o menu; h1 "Dra. Vanessa Damin" em condensada grande, com "Cardiologista em Criciúma"; retrato (fundo escuro, estetoscópio) ao lado do texto; traçado de ponta a ponta começando no pulso de calibração e cruzando o retrato; campos CRM/SC 20674 · RQE 15969 · RQE 17474; botão "Agendar consulta" em bloco bordô, largura total. Desktop: texto nas colunas 1–7, retrato nas colunas 8–12, traçado cruzando toda a largura sobre a grade.

FORM: direção atribuída pelo sorteio, posição 3 da lista ordenada, seed:d850690beb9b84e0. Interação assinatura: o traçado do cabeçalho avança com a rolagem e marca um batimento por seção (indicador de progresso). Movimento: o traçado da abertura se desenha uma vez (ease-out, cerca de 1,4 s); momentos sorteados pela taste-skill: photo-chapters na trajetória e picture-develops na seção Sobre; o resto é só hover e press.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Elevações herdadas dos desafiantes recusados

- Contador Nixie: números (CRM, RQE, anos) em algarismos tabulares, em posições fixas.
- Pilha HyperCard: cada seção, pergunta e mito tem link direto; o voltar do celular respeita o caminho.
- Sol de neblina: uma só família de cor (o azul e o rosa da logo antiga viram bordô).
- Programa de uma cor: o bordô ocupa regiões inteiras em tom cheio.
- Capa de fita K7: índice numerado das seções no menu, funcionando como navegação.
- Jardim de chuva: uma única ação dominante por tela de celular.

## Momento memorável

O traçado com pulso de calibração que se desenha uma vez na abertura e continua como indicador de progresso no cabeçalho.

## Em aberto

- Horário de atendimento, valores, convênios e canal do YouTube: não existem nos dados; não inventar.
