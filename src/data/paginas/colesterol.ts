import type { Pagina } from "./tipos";

export const pagina: Pagina = {
  slug: "colesterol",
  rotulo: "Colesterol e triglicerídeos",
  titulo: "Colesterol alto e triglicerídeos: acompanhamento em Criciúma",
  tituloSeo: "Colesterol alto e LDL | Cardiologista em Criciúma",
  descricao:
    "Entenda o LDL, o “colesterol ruim”, os triglicerídeos e as metas da diretriz de 2025 conforme o seu risco do coração. Agende sua consulta.",
  resumo:
    "Colesterol alto quase nunca dá sintomas, mas, com os anos, ajuda a formar placas de gordura nas artérias. O valor ideal do LDL, o “colesterol ruim”, não é igual para todo mundo: depende do seu risco cardiovascular. Por isso, mais importante que o número isolado é avaliar o conjunto e definir a sua meta.",
  blocos: [
    {
      titulo: "O que são LDL, HDL e triglicerídeos?",
      paragrafos: [
        "O colesterol é uma gordura de que o corpo precisa, mas o excesso circula no sangue e se acumula nas paredes das artérias. O LDL, o “colesterol ruim”, é o principal responsável por essas placas, um processo chamado aterosclerose.",
        "O HDL é conhecido como “colesterol bom”. O não-HDL soma todo o colesterol que pode formar placas e, na diretriz de 2025, também é uma meta de tratamento.",
        "Os triglicerídeos são outra gordura do sangue, que costuma subir com excesso de açúcar, de álcool e de peso. O valor desejável é abaixo de 150 mg/dL em jejum e abaixo de 175 mg/dL sem jejum.",
        "Para a primeira avaliação, o exame de sangue pode ser feito sem jejum. Eu oriento quando o jejum é necessário.",
      ],
    },
    {
      titulo: "Qual é o LDL ideal?",
      paragrafos: [
        "Depende do seu risco cardiovascular, que é a chance de ter um infarto ou um AVC (derrame) nos próximos anos. A Diretriz Brasileira de Dislipidemias de 2025 separa as pessoas em cinco grupos, cada um com a sua meta:",
      ],
      itens: [
        "Risco baixo: LDL abaixo de 115 mg/dL.",
        "Risco intermediário: abaixo de 100 mg/dL.",
        "Risco alto: abaixo de 70 mg/dL.",
        "Risco muito alto, como em quem já teve infarto ou AVC: abaixo de 50 mg/dL.",
        "Risco extremo, como em quem já teve mais de um desses eventos: abaixo de 40 mg/dL.",
      ],
    },
    {
      titulo: "Como baixar o LDL?",
      paragrafos: [
        "O primeiro passo são os hábitos: menos gordura saturada (de carnes gordas, embutidos e laticínios integrais), nenhuma gordura trans, mais fibras e não fumar. A diretriz recomenda pelo menos 150 minutos por semana de atividade física moderada, como caminhada, com liberação médica.",
        "Quando só os hábitos não bastam ou o risco é mais alto, existem remédios. As estatinas são a primeira opção; outras classes incluem a ezetimiba, os inibidores de PCSK9 e as terapias de RNA de interferência, como a inclisirana.",
        "A indicação de cada uma depende de avaliação médica individual. Não comece, troque nem pare um remédio por conta própria.",
      ],
    },
    {
      titulo: "Colesterol, peso e glicose: qual é a relação?",
      paragrafos: [
        "Triglicerídeos altos e HDL baixo costumam andar junto com gordura na barriga, pressão alta e glicose elevada. Esse conjunto é chamado de síndrome metabólica e aumenta o risco do coração.",
        "Por isso, eu olho para o cardiometabolismo como um todo, e o acompanhamento do peso faz parte do cuidado com o coração. Perder peso costuma melhorar o LDL, os triglicerídeos e o HDL, com um plano feito para cada pessoa.",
        "O colesterol alto também pode ser de família, mesmo em quem é magro. Um LDL a partir de 190 mg/dL em adultos já indica risco alto e levanta a suspeita de hipercolesterolemia familiar, uma forma hereditária.",
      ],
    },
    {
      titulo: "Como é o acompanhamento na consulta",
      paragrafos: [
        "No consultório em Criciúma, eu revejo os seus exames, os remédios em uso e o histórico da família, e faço o exame físico. Com isso, avalio o seu risco cardiovascular e definimos juntos a sua meta de LDL.",
        "Quando indicado, peço o perfil de colesterol, glicose, função dos rins e outros exames. Um deles é a lipoproteína(a), ou Lp(a), uma gordura do sangue definida pela genética, que a diretriz recomenda dosar ao menos uma vez na vida.",
        "Em alguns casos, também peço exames que mostram se já existem placas de gordura nas artérias. O plano é individualizado e revisto nos retornos, com novos exames para conferir se a meta foi alcançada.",
      ],
    },
  ],
  quandoProcurar: {
    titulo: "Quando procurar a cardiologista",
    itens: [
      "LDL ou triglicerídeos acima do desejável no último exame.",
      "LDL a partir de 190 mg/dL ou casos de colesterol muito alto na família.",
      "Parentes próximos que tiveram infarto ou AVC ainda jovens.",
      "Diabetes, pressão alta, excesso de peso ou tabagismo.",
      "Já ter tido infarto ou AVC, ou ter colocado stent.",
      "Dúvidas ou efeitos colaterais com o remédio do colesterol.",
    ],
  },
  areas: ["Distúrbios do Colesterol e Triglicerídeos", "Cardiometabolismo e Emagrecimento"],
  relacionadas: ["pressao-alta", "check-up-cardiologico"],
  fontes: [
    {
      nome: "Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose – 2025 (SBC). Arq Bras Cardiol. 2025;122(9):e20250640",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12674852/",
    },
  ],
  mensagemWhatsApp:
    "Olá! Gostaria de agendar uma consulta com a Dra. Vanessa Damin sobre colesterol e triglicerídeos",
  pendencias: [
    "Confirmar se quer publicar as metas de LDL por grupo de risco (diretriz 2025: 115, 100, 70, 50 e 40 mg/dL). As metas de não-HDL (145, 130, 100, 80 e 70 mg/dL) ficaram de fora; incluir?",
    "Remédios: citei só classes (estatinas, ezetimiba, inibidores de PCSK9 e inclisirana), sem nomes comerciais. Confirmar se está de acordo com a sua prática.",
    "Lp(a): a diretriz recomenda dosar uma vez na vida, quando o exame estiver disponível. Confirmar se a senhora pede de rotina.",
    "Cardiometabolismo e emagrecimento: descrever, se quiser, como a senhora conduz o acompanhamento do peso (sem citar remédios nem prometer resultados).",
    "Atividade física: mantive os 150 minutos por semana da diretriz. Confirmar.",
    "A triagem em crianças (perfil lipídico entre 9 e 11 anos, ou a partir dos 2 anos se houver risco na família) ficou de fora. Incluir?",
  ],
};
