# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (site estático, uma única página `index.html`), Node.js 22+ e npm, TypeScript (`src/data/*.ts` e `src/scripts/site.ts`), sharp (AVIF/WebP responsivos no build), lucide-static (ícones de interface), simple-icons (ícones de marcas), Google Fonts via Astro Fonts (Fira Sans e Fira Sans Extra Condensed, baixadas no build e servidas pelo próprio site). Símbolo da logo vetorizado com potrace para SVG (favicon e logo).

Hospedagem: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Prévia em repositório novo e separado (`cardiovanessa-novo-site`) com variável `PREVIEW=true`: build no endereço `usuario.github.io/repo`, sem CNAME, sem sitemap e com `robots.txt` bloqueando indexação. O repositório do site atual (domínio `www.cardiovanessadamin.com.br`) não pode ser alterado até a aprovação da cliente. Quando aprovado: remover `PREVIEW`, adicionar o CNAME e apontar o domínio.

## Users

Pessoas de Criciúma (SC) e região que procuram uma cardiologista particular, todas com o mesmo peso:

- pacientes adultos buscando prevenção, check-up ou acompanhamento (pressão alta, colesterol, arritmias etc.);
- idosos que precisam de acompanhamento cardiológico contínuo (cardiogeriatria);
- familiares (filhos, netos, cônjuges) que pesquisam e agendam para os pais, avós ou parceiros, como vários depoimentos mostram;
- quem precisa de avaliação pré-esportiva ou de risco cirúrgico / pré-operatório.

A maioria chega pelo celular (Instagram, Google, indicação) e decide em poucos segundos se confia o suficiente para chamar no WhatsApp.

## Product Purpose

Site institucional de uma página da Dra. Vanessa Damin, cardiologista e clínica médica. Existe para transmitir confiança e seriedade e converter visitantes em consultas agendadas. Sucesso = o visitante entende quem ela é, o que trata e onde atende, e toca em "Agendar consulta" (WhatsApp).

## Positioning

Uma cardiologista que reúne, ao mesmo tempo:

- **tempo e escuta**: atendimento particular, sem pressa, com escuta ativa e cuidado sob medida (texto do FAQ);
- **bagagem em emergência**: plantonista do Serviço de Cardiologia 24h do Hospital São João Batista / Unimed (2019–atual), médica reguladora e intervencionista do SAMU Criciúma (2015–2021) e plantonista de UTI no Hospital São José (2018–2019);
- **prevenção**: foco em prevenção, diagnóstico preciso e tratamento individualizado;
- **formação acadêmica**: Medicina pela UNESC (2014), residências em Clínica Médica (Hospital São José, 2015–2016) e Cardiologia (Instituto de Cardiologia de SC, 2017–2018), ACLS e ATLS, professora efetiva da UFSC Araranguá (2020–2024).

## Operating Context

- Canal principal de agendamento: WhatsApp `+55 48 99211-6200` (link `wa.me/5548992116200` com mensagem pré-preenchida).
- O formulário de contato não tem servidor: ao enviar, monta a mensagem (nome, e-mail, mensagem) e abre o WhatsApp. Essa função deve ser mantida.
- Endereço (corrigido pelo cliente em nov/2026): consultório na clínica Aura Neurologia, Rua Antônio de Lucca, 148, sala 111 - Pio Corrêa, Criciúma - SC, 88811-503. O link "Como chegar" abre a ficha "Aura Neurologia" no Google Maps.
- E-mail: dravanessadamin@gmail.com. Instagram: @vanessadamincardiologista.
- Link para deixar avaliação no Google: `https://g.page/r/CYMbpqRkVXzCEAI/review`.
- Arquivo de verificação do Google Search Console: `googlec3cbfcb27719cc4b.html` (deve continuar servido na raiz em produção).

## Capabilities and Constraints

- **Todas as informações do site atual estão corretas e não podem ser alteradas**: nomes, CRM/RQE, formação, experiências, áreas de atuação, mitos e verdades, perguntas frequentes, depoimentos, endereço e contatos. O redesenho muda apresentação e estrutura, não fatos.
- Registro exibido no site: `CRM/SC 20674 – RQE 15969 / RQE 17474`. Especialidade: "Cardiologista e Clínica Médica".
- Conteúdo: 16 itens em "O que eu trato" (antes "Áreas de atuação", trocado em nov/2026 porque no CFM o termo se refere a título com RQE), 6 mitos/verdades, 6 perguntas frequentes, 3 depoimentos no site (os outros 3 guardados em `outrosDepoimentos`, com link para todas as avaliações no Google), 4 itens de formação, 4 de experiência.
- A página inicial continua sendo a mesma página única, sem abas e **sem splash screen**; os pacientes navegam por ela como sempre. Desde nov/2026 existem páginas por tema (`src/data/paginas/`, montadas por `src/pages/[slug].astro`), abertas só por links "Saiba mais" em "O que eu trato" e pelo rodapé. Cada texto novo é rascunho até a Dra. Vanessa aprovar (campo `revisadoEm`): rascunhos aparecem no `npm run dev` e na prévia, nunca no site no ar.
- Prioridade máxima para a experiência no celular; responsivo sem quebras em todas as larguras.
- Sem backend, sem banco de dados, sem agendamento online integrado.
- Ainda não definidos (não inventar): horário de atendimento, valores, lista de convênios, canal do YouTube (o ícone está previsto na stack, mas não existe link), atendimento online.

## Brand Commitments

- Nome de exibição: "Dra. Vanessa Damin".
- Símbolo: coração em fita com traçado de eletrocardiograma (arquivos originais em `images/icone_logo.png` e `images/logo_vanessa.png`); deve ser vetorizado e mantido reconhecível.
- Vermelho como cor de referência ao coração, em **tons escuros e sóbrios**: o site anterior ficou vibrante e "infantil/amador"; o novo deve transmitir seriedade, profissionalismo e modernidade (pedido explícito do responsável pelo site).
- Tipografia definida pelo responsável: Fira Sans e Fira Sans Extra Condensed.

## Evidence on Hand

- Fotos profissionais de estúdio do ensaio de nov/2026 (originais 2000×3000 em `_legado/fotos-2026/`, fora do git). Fundo roxo-escuro, blusa branca e colete cinza: `IMG_7308` (capa, mão no queixo — escolha da Dra. Vanessa), `IMG_7309` (sorrindo, mãos nos bolsos — Sobre), `IMG_7310` (corpo inteiro), `IMG_7311` (sorrindo, mão no queixo); fundo bege e conjunto claro: `IMG_7314` (sorrindo — Formação), `IMG_7315` (séria — Plantão e emergência), `IMG_7317` (apoiada na cadeira — Docência); em preto e branco: `IMG_7306`, `IMG_7312`, `IMG_7320`. Exigência da cliente: a capa é a `IMG_7308` e a foto seguinte é uma sorrindo. As fotos antigas (de jaleco e com o Dr. Fernando) saíram do site.
- Seis depoimentos reais com nome (Fabricia Gava, Suelen Batista, Artur Seixas, Carmem Vuolo, Adriana Cadorin, Frank Melian), todos 5 estrelas. As fotos de perfil originais são miniaturas 65×65 de baixa qualidade.
- Não existem: números de pacientes atendidos, prêmios, imprensa, nota média do Google com contagem de avaliações. Não fabricar.

## Product Principles

1. Confiança antes de tudo: cada seção deve deixar a visitante mais segura para agendar.
2. Agendar está sempre a um toque, em qualquer ponto da página, principalmente no celular.
3. Fatos reais e verificáveis (CRM, RQE, formação, experiência) no lugar de adjetivos vagos.
4. Linguagem clara para leigos e para pessoas mais velhas; nada de jargão sem explicação.
5. Sério não é frio: o tom é humano e acolhedor, sem infantilizar.

## Accessibility & Inclusion

Parte importante do público é idosa: texto com tamanho confortável no celular, contraste alto, áreas de toque grandes, nada de informação escondida só em hover, e respeito a `prefers-reduced-motion`.
