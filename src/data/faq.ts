// Perguntas frequentes (textos do site anterior). `answer` aceita <strong> simples.

export interface Pergunta {
  slug: string;
  question: string;
  answer: string;
}

export const faq: Pergunta[] = [
  {
    slug: "encaminhamento",
    question: "Preciso de um encaminhamento para marcar uma consulta?",
    answer:
      "Não necessariamente. Você pode agendar uma consulta diretamente para um check-up cardiológico preventivo ou se tiver alguma preocupação com sua saúde.",
  },
  {
    slug: "primeira-consulta",
    question: "Como devo me preparar para a primeira consulta?",
    answer:
      "Para aproveitar ao máximo sua consulta, traga uma lista de todos os medicamentos que você usa (incluindo vitaminas e suplementos), resultados de exames recentes (se tiver), e anote quaisquer sintomas ou dúvidas que queira discutir. Estar bem preparado ajuda a otimizar seu tempo e o diagnóstico.",
  },
  {
    slug: "convenios",
    question: "Quais convênios ou planos de saúde são aceitos?",
    answer:
      "Focamos em atendimento particular, mas entendemos sua busca por um atendimento via plano/convênio. Aqui você será atendido com exclusividade, no tempo que merece, com escuta ativa e um cuidado feito sob medida. O convênio, infelizmente, limita o tempo de consulta. Os seus exames poderão ser feitos pelo seu plano de saúde e você ainda pode tentar reembolso.",
  },
  {
    slug: "hipertensao-tem-cura",
    question: "Hipertensão (pressão alta) tem cura?",
    answer:
      "A hipertensão arterial geralmente não tem cura, mas tem controle. Com o tratamento adequado, que pode incluir mudanças no estilo de vida e medicamentos, é possível manter a pressão em níveis saudáveis e prevenir suas complicações, garantindo uma vida longa e de qualidade. Caso a hipertensão seja secundária a um distúrbio endocrinológico por exemplo, pode haver cura sim (mediante sucesso no tratamento da causa primária).",
  },
  {
    slug: "infarto-ou-parada",
    question: "Qual a diferença entre infarto e parada cardíaca?",
    answer:
      "São duas coisas diferentes. O <strong>infarto</strong> é um problema de “circulação”: uma artéria que nutre o coração fica bloqueada, e parte do músculo cardíaco começa a morrer por falta de sangue. A <strong>parada cardíaca</strong> é um problema “elétrico”: o coração para de bater de forma eficaz e inesperada. Um infarto pode levar a uma parada cardíaca, mas elas não são a mesma coisa.",
  },
  {
    slug: "cateterismo",
    question: "O que é o Cateterismo Cardíaco?",
    answer:
      "O cateterismo é um procedimento utilizado para diagnosticar e, por vezes, tratar doenças cardíacas. Um tubo fino e flexível (cateter) é inserido em um vaso sanguíneo (geralmente no braço ou na perna) e guiado até o coração. Ele permite medir a pressão, visualizar as artérias (coronárias) e avaliar a função do coração.",
  },
];
