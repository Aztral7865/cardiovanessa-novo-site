import type { Pagina } from "./tipos";

export const pagina: Pagina = {
  slug: "check-up-cardiologico",
  rotulo: "Check-up do coração",
  titulo: "Check-up cardiológico em Criciúma",
  tituloSeo: "Check-up cardiológico em Criciúma | Dra. Vanessa Damin",
  descricao:
    "Check-up do coração para conhecer seu risco cardiovascular e cuidar da prevenção com a cardiologista Dra. Vanessa Damin. Agende sua consulta.",
  resumo:
    "O check-up cardiológico é uma consulta de prevenção. Nela, eu avalio o seu risco cardiovascular, ou seja, a chance de ter um infarto ou um AVC (derrame) nos próximos anos. Com isso, combinamos juntos o que fazer para proteger o seu coração.",
  blocos: [
    {
      titulo: "O que é um check-up do coração?",
      paragrafos: [
        "A cardiologia preventiva cuida do coração antes que os problemas apareçam. Muitas doenças do coração, como a pressão alta, não dão sintomas no começo.",
        "No check-up, eu procuro esses sinais silenciosos e os fatores que aumentam o risco. Assim, dá para agir cedo, com calma e com um plano feito para você.",
      ],
    },
    {
      titulo: "Quando fazer check-up do coração?",
      paragrafos: [
        "Não existe uma idade única para todos. A diretriz brasileira recomenda calcular o risco cardiovascular dos 30 aos 79 anos em quem ainda não tem doença do coração.",
        "Vale antecipar a consulta se você fuma, tem pressão alta, diabetes, colesterol alto ou sobrepeso, ou se há casos de infarto ou AVC em parentes próximos ainda jovens. Depois dos 80 anos, a avaliação continua importante e é feita caso a caso.",
        "Depois da primeira consulta, eu indico de quanto em quanto tempo voltar. Isso depende do seu risco e da sua saúde.",
      ],
    },
    {
      titulo: "O que é avaliado no check-up cardiológico?",
      paragrafos: [
        "Na consulta, eu converso sobre a sua história, os seus hábitos e a saúde da sua família. Depois, faço o exame físico e meço a pressão arterial.",
      ],
      itens: [
        "Os fatores de risco: pressão alta, diabetes, colesterol, cigarro, peso, falta de atividade física e doença nos rins.",
        "Nas mulheres, também a gravidez e a menopausa: pressão alta ou diabetes na gestação e menopausa precoce aumentam o risco.",
        "Exames de sangue, como colesterol e glicose, e o eletrocardiograma, quando indicados.",
        "O cálculo do seu risco para os próximos 10 anos, com a ferramenta que a diretriz brasileira recomenda (o escore PREVENT).",
      ],
    },
    {
      titulo: "Vou precisar de outros exames?",
      paragrafos: [
        "Depende do seu caso. A diretriz recomenda dosar, uma vez na vida, um tipo específico de colesterol chamado lipoproteína(a), quando o exame estiver disponível.",
        "Quando o risco fica no meio do caminho, posso pedir o escore de cálcio das coronárias. É uma tomografia que procura cálcio nas artérias do coração, um sinal de placas, e ajuda a decidir o tratamento.",
        "Para o colesterol, a diretriz atual aceita a coleta sem jejum na primeira avaliação. Siga sempre a orientação que vem no pedido do exame.",
      ],
    },
    {
      titulo: "Como se preparar para a consulta?",
      paragrafos: [
        "Traga a lista de todos os remédios que você usa, incluindo vitaminas e suplementos, e os exames recentes, se tiver. Anote também os sintomas e as dúvidas que quer conversar.",
        "Se você agenda para o seu pai ou a sua mãe, vale vir junto. Quem convive ajuda a lembrar detalhes e horários dos remédios.",
        "Você pode agendar diretamente, sem encaminhamento, uma consulta com cardiologista em Criciúma para o check-up. Atendo como cardiologista particular. Os seus exames poderão ser feitos pelo seu plano de saúde, e você ainda pode tentar reembolso.",
      ],
    },
  ],
  quandoProcurar: {
    titulo: "Quando agendar um check-up cardiológico",
    itens: [
      "Você tem 30 anos ou mais e nunca avaliou o seu risco cardiovascular.",
      "Você tem pressão alta, diabetes, colesterol ou triglicerídeos altos.",
      "Você fuma, está acima do peso ou passa a maior parte do dia parado.",
      "Há casos de infarto, AVC ou morte súbita em parentes próximos ainda jovens.",
      "Você teve pressão alta ou diabetes na gravidez, ou entrou na menopausa mais cedo.",
      "Você vai começar a se exercitar com mais intensidade.",
    ],
  },
  urgencia:
    "Dor ou aperto no peito que não passa, falta de ar forte, desmaio, ou fraqueza de um lado do corpo e boca torta de repente: não espere a consulta. Ligue para o SAMU 192 ou vá ao pronto-socorro.",
  // "Check-ups e Risco Cirúrgico" leva à página de risco cirúrgico (um link por item)
  areas: ["Prevenção Cardiovascular"],
  relacionadas: ["risco-cirurgico", "pressao-alta", "colesterol"],
  fontes: [
    {
      nome: "Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2025 (SBC), Arq Bras Cardiol. 2025;122(9):e20250640",
      url: "https://www.scielo.br/j/abc/a/tRJrwGzKX6C4GvMqdJpZcGk/?lang=pt",
    },
    {
      nome: "Atualização da Diretriz de Prevenção Cardiovascular da Sociedade Brasileira de Cardiologia – 2019, Arq Bras Cardiol. 2019;113(4):787-891",
      url: "https://www.scielo.br/j/abc/a/SMSYpcnccSgRnFCtfkKYTcp/?lang=pt",
    },
  ],
  mensagemWhatsApp: "Olá! Gostaria de agendar uma consulta com a Dra. Vanessa Damin sobre check-up do coração",
  pendencias: [
    "Confirmar se o eletrocardiograma pode ser feito no próprio consultório, no dia do check-up, ou se é solicitado para fazer em outro local.",
    "Confirmar se aprova citar pelo nome o escore PREVENT, a lipoproteína(a) e o escore de cálcio, ou se prefere um texto mais geral sobre exames.",
    "Confirmar a frase sobre pacientes com 80 anos ou mais (“a avaliação continua importante e é feita caso a caso”).",
    "Confirmar a orientação sobre jejum para o exame de colesterol (a diretriz de 2025 aceita a coleta sem jejum na avaliação inicial).",
    "Confirmar se aprova a sugestão de o familiar acompanhar a consulta dos pais.",
  ],
};
