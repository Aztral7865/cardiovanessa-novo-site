import type { Pagina } from "./tipos";

export const pagina: Pagina = {
  slug: "risco-cirurgico",
  rotulo: "Risco cirúrgico e pré-esportiva",
  titulo: "Risco cirúrgico e avaliação pré-esportiva em Criciúma",
  tituloSeo: "Risco cirúrgico e avaliação pré-esportiva em Criciúma",
  descricao:
    "Avaliação pré-operatória (risco cirúrgico) e pré-esportiva com a cardiologista Dra. Vanessa Damin. Veja o que levar e agende sua consulta.",
  resumo:
    "O risco cirúrgico é a avaliação do coração antes de uma operação. A avaliação pré-esportiva segue a mesma ideia, antes de começar ou intensificar exercícios. Nas duas, eu procuro condições que precisam de atenção e oriento os cuidados para o seu caso.",
  blocos: [
    {
      titulo: "O que é o risco cirúrgico?",
      paragrafos: [
        "É a avaliação pré-operatória do coração. Ela estima a chance de complicações do coração e da circulação durante e depois da cirurgia.",
        "Também serve para ajustar remédios, controlar doenças como a pressão alta e evitar exames desnecessários. Não é um simples “liberado”: é uma análise do seu caso que ajuda o cirurgião e o anestesista a planejar a cirurgia com você.",
      ],
    },
    {
      titulo: "Quando a avaliação pré-operatória é pedida?",
      paragrafos: [
        "Ela costuma ser pedida pelo cirurgião ou pelo anestesista. O cuidado é maior para pessoas idosas, para quem tem doença do coração, pressão alta ou diabetes, e para quem usa remédio que afina o sangue.",
        "Procure a consulta com alguma antecedência da data da cirurgia. Alguns remédios, como os que afinam o sangue, podem precisar de ajuste dias antes, e essa decisão é feita caso a caso. Por isso, não suspenda nenhum remédio por conta própria.",
        "Em cirurgias de urgência, a diretriz orienta que a avaliação do coração não atrase a operação.",
      ],
    },
    {
      titulo: "Como é a consulta de risco cirúrgico?",
      paragrafos: [
        "Eu pergunto sobre a sua saúde, os seus remédios e os seus sintomas, e faço o exame físico. Pergunto, por exemplo, se você consegue subir dois lances de escada sem parar, porque isso mostra a sua capacidade física.",
        "Também considero o tipo de cirurgia, já que algumas exigem mais do coração do que outras. Exames como o eletrocardiograma são pedidos conforme a sua história e a cirurgia, e não de rotina para todos.",
      ],
    },
    {
      titulo: "O que levar para a avaliação pré-operatória?",
      itens: [
        "O pedido do cirurgião, com o nome da cirurgia e a data prevista, se já houver.",
        "A lista de todos os remédios, com doses e horários, incluindo vitaminas e suplementos.",
        "Exames recentes e laudos anteriores do coração, como eletrocardiograma, ecocardiograma ou cateterismo.",
        "Informações sobre cirurgias e anestesias anteriores e se houve alguma complicação.",
      ],
    },
    {
      titulo: "O que é a avaliação pré-esportiva?",
      paragrafos: [
        "É uma consulta feita antes de começar exercícios regulares, de intensidade moderada a alta, e repetida de tempos em tempos enquanto você treina. O objetivo é encontrar cedo problemas do coração que podem trazer risco durante o esforço.",
        "Pergunto sobre sintomas no exercício e sobre casos de doença do coração ou morte súbita na família. No exame físico, meço a pressão nos dois braços e escuto o coração.",
        "Conforme a idade, os sintomas e o tipo de esporte, posso pedir exames como o eletrocardiograma e o teste ergométrico (teste de esforço na esteira ou na bicicleta). Ao final, explico o que encontrei e oriento sobre a liberação para atividade física e os cuidados para você.",
      ],
    },
  ],
  quandoProcurar: {
    titulo: "Quando agendar",
    itens: [
      "Você tem uma cirurgia marcada e o cirurgião ou o anestesista pediu o risco cirúrgico.",
      "Você vai operar e tem pressão alta, diabetes, doença do coração ou usa remédio para afinar o sangue.",
      "Você é idoso, ou cuida de um familiar idoso, e há uma cirurgia programada.",
      "Você vai entrar na academia, começar a correr, treinar mais forte ou competir.",
      "Você sente dor no peito, falta de ar fora do normal, palpitações ou sensação de desmaio no exercício.",
    ],
  },
  urgencia:
    "Desmaio durante o exercício, dor forte no peito ou falta de ar intensa: pare a atividade e procure o pronto-socorro ou ligue para o SAMU 192.",
  areas: ["Check-ups e Risco Cirúrgico", "Avaliação pré-esportiva"],
  relacionadas: ["check-up-cardiologico", "exames"],
  fontes: [
    {
      nome: "Diretriz de Avaliação Cardiovascular Perioperatória da Sociedade Brasileira de Cardiologia – 2024, Arq Bras Cardiol. 2024;121(9):e20240590",
      url: "https://www.scielo.br/j/abc/a/NPrb8bhPV5J7bMDcqKT3SQr/?lang=pt",
    },
    {
      nome: "Atualização da Diretriz em Cardiologia do Esporte e do Exercício da SBC e da SBMEE – 2019, Arq Bras Cardiol. 2019;112(3):326-368",
      url: "https://www.scielo.br/j/abc/a/ZZFKCxfv3cSDqZYmFLgJhVB/?lang=pt",
    },
  ],
  mensagemWhatsApp:
    "Olá! Gostaria de agendar uma consulta com a Dra. Vanessa Damin sobre risco cirúrgico ou avaliação pré-esportiva",
  pendencias: [
    "Confirmar como entrega o resultado do risco cirúrgico (relatório por escrito para o cirurgião e o anestesista?) e se conversa com a equipe quando necessário.",
    "Confirmar com quanta antecedência da cirurgia recomenda agendar a avaliação (o texto diz só “com alguma antecedência”).",
    "Confirmar se emite atestado de aptidão para academia, corrida e competições, para usar a expressão “liberação para atividade física” com segurança.",
    "O site não cita o teste ergométrico: confirmar se ela só solicita esse exame (como está no texto) ou se também o realiza ou lauda.",
    "Uma reportagem do Portal Afya (abril de 2026) cita novas recomendações da SBC sobre emergências cardiovasculares no esporte; não encontrei o documento oficial. Conferir se algo muda em relação à diretriz de 2019.",
  ],
};
