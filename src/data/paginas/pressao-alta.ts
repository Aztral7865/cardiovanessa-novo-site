import type { Pagina } from "./tipos";

export const pagina: Pagina = {
  slug: "pressao-alta",
  rotulo: "Pressão alta",
  titulo: "Pressão alta: acompanhamento com cardiologista em Criciúma",
  tituloSeo: "Pressão alta (hipertensão) | Cardiologista em Criciúma",
  descricao:
    "Pressão alta quase nunca dá sintomas. Veja os valores da diretriz de 2025, como medir em casa e como é o tratamento. Agende sua consulta.",
  resumo:
    "Pressão alta, ou hipertensão arterial, é quando a pressão do sangue nas artérias fica elevada de forma persistente. Na maioria das vezes ela não dá sintomas, por isso a única forma de saber é medir. Ela geralmente não tem cura, mas tem controle, e o tratamento ajuda a proteger o coração, o cérebro e os rins.",
  blocos: [
    {
      titulo: "Pressão alta tem sintomas?",
      paragrafos: [
        "Na maioria das pessoas, não. A pressão pode ficar alta por anos sem dor de cabeça, tontura ou qualquer outro aviso, mesmo em quem se sente bem.",
        "Sem controle, a pressão alta sobrecarrega aos poucos o coração, o cérebro, os rins e os vasos. Ela é um dos principais fatores de risco para infarto e AVC (derrame).",
      ],
    },
    {
      titulo: "Qual é a pressão normal?",
      paragrafos: [
        "A Diretriz Brasileira de Hipertensão Arterial de 2025 usa os valores medidos no consultório. O primeiro número é a pressão máxima (sistólica) e o segundo, a mínima (diastólica). Uma medida isolada não fecha o diagnóstico.",
      ],
      itens: [
        "Normal: abaixo de 120/80 mmHg (o popular “12 por 8”).",
        "Pré-hipertensão, nova faixa de alerta da diretriz: máxima entre 120 e 139 e/ou mínima entre 80 e 89 mmHg.",
        "Hipertensão: a partir de 140/90 mmHg (“14 por 9”).",
      ],
    },
    {
      titulo: "Como medir a pressão em casa?",
      paragrafos: [
        "Medir em casa ajuda muito, desde que do jeito certo. Prefira um aparelho automático de braço, validado, com a braçadeira do tamanho do seu braço.",
      ],
      itens: [
        "Fique 30 minutos sem café, cigarro, comida ou exercício antes de medir.",
        "Esvazie a bexiga e descanse sentado por 5 minutos.",
        "Mantenha as costas apoiadas, as pernas descruzadas e os pés no chão.",
        "Deixe o braço sem roupa, apoiado na mesa, na altura do coração.",
        "Não converse durante a medida e use sempre o mesmo braço.",
      ],
    },
    {
      titulo: "Como controlar a pressão alta?",
      paragrafos: [
        "Para a maioria das pessoas com hipertensão, a diretriz recomenda manter a pressão abaixo de 130/80 mmHg (“13 por 8”). Em idosos frágeis ou muito idosos, a meta é ajustada ao que cada um tolera bem.",
        "O tratamento começa pelos hábitos: menos sal, mais frutas, verduras e legumes, atividade física regular, controle do peso, menos álcool e não fumar. A diretriz orienta no máximo 5 g de sal por dia, cerca de uma colher de chá, somando o que já vem nos alimentos.",
        "Na pré-hipertensão, os hábitos costumam ser o primeiro passo, e o risco do coração orienta a decisão. A partir de 140/90 mmHg, a diretriz recomenda começar o remédio junto com essas mudanças.",
        "Se a pressão ficou normal com o tratamento, é sinal de que ele está funcionando: não suspenda o remédio por conta própria.",
      ],
    },
    {
      titulo: "Como é o acompanhamento na consulta",
      paragrafos: [
        "Na consulta, eu escuto a sua história, revejo os remédios que você usa e as medidas que trouxe de casa. Depois, meço a pressão com a técnica correta e faço o exame físico.",
        "Também avalio o risco do coração como um todo: colesterol, glicose, peso, rins, tabagismo e histórico da família. Quando indicado, peço exames de sangue, eletrocardiograma e, às vezes, investigo causas da pressão alta que podem ser tratadas.",
        "Para confirmar o diagnóstico ou o controle, posso pedir a MAPA, um aparelho que mede a pressão sozinho por 24 horas, ou a MRPA, com 3 medidas de manhã e 3 à noite, em casa, por 4 a 6 dias. Esses exames mostram se a pressão sobe só no consultório (“avental branco”) ou se fica alta só fora dele (“hipertensão mascarada”).",
        "No consultório em Criciúma, montamos juntos um plano individualizado, com metas claras e retornos para ajustar o tratamento.",
      ],
    },
  ],
  quandoProcurar: {
    titulo: "Quando procurar a cardiologista",
    itens: [
      "Medidas altas em casa, na farmácia ou em campanhas de saúde.",
      "Pressão na faixa de pré-hipertensão (entre 120/80 e 139/89 mmHg).",
      "Pressão que continua fora da meta mesmo com o remédio.",
      "Tontura ao levantar ou efeitos colaterais com o remédio da pressão.",
      "Diabetes, colesterol alto, doença nos rins ou casos de infarto e AVC na família.",
      "Nunca ter medido a pressão ou não lembrar da última vez.",
    ],
  },
  urgencia:
    "Pressão muito alta com dor no peito, falta de ar, fraqueza ou formigamento de um lado do corpo, dificuldade para falar, confusão ou alteração súbita da visão é emergência: ligue para o SAMU 192 ou vá ao pronto-socorro.",
  areas: ["Hipertensão Arterial"],
  relacionadas: ["colesterol", "check-up-cardiologico"],
  fontes: [
    {
      nome: "Diretriz Brasileira de Hipertensão Arterial – 2025 (SBC, SBH e SBN). Arq Bras Cardiol. 2025;122(9):e20250624",
      url: "https://www.scielo.br/j/abc/a/BXT7Vk4B9VKQnJFsJhgJ4Hn/",
    },
    {
      nome: "Diretrizes Brasileiras de Medidas da Pressão Arterial Dentro e Fora do Consultório – 2023 (SBC, SBH e SBN). Arq Bras Cardiol. 2024;121(4):e20240113",
      url: "https://sbh.org.br/wp-content/uploads/2025/01/2023-Diretrizes-Brasileiras-HA.pdf",
    },
  ],
  mensagemWhatsApp: "Olá! Gostaria de agendar uma consulta com a Dra. Vanessa Damin sobre pressão alta",
  pendencias: [
    "Meta de pressão: o texto segue a diretriz de 2025 (abaixo de 130/80 mmHg para a maioria; em idosos frágeis ou muito idosos, o menor valor bem tolerado). Confirmar se é assim que a senhora orienta.",
    "Confirmar se quer manter a forma popular (“12 por 8”, “13 por 8”, “14 por 9”) ao lado dos valores em mmHg.",
    "Confirmar o protocolo da MRPA citado (3 medidas de manhã e 3 à noite, por 4 a 6 dias, conforme a diretriz de medidas de 2023) e se a senhora prefere MAPA ou MRPA na prática.",
    "Os estágios 1, 2 e 3 da hipertensão ficaram de fora: não consegui ler a tabela da diretriz de 2025. Incluir?",
    "Sal: mantive o limite de 5 g de sal por dia (2 g de sódio). A diretriz também cita o sal com potássio; deixei de fora porque depende de orientação individual. Incluir?",
    "Incluí um aviso de urgência (sinais de emergência). Confirmar se quer mantê-lo nesta página.",
    "Não citei que a senhora faz o laudo de MAPA, para não parecer que o exame é feito no consultório. Quer citar?",
  ],
};
