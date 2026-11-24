import type { Pagina } from "./tipos";

export const pagina: Pagina = {
  slug: "exames",
  rotulo: "ECG, Holter e MAPA",
  titulo: "Eletrocardiograma, Holter e MAPA: o que são e como se preparar",
  tituloSeo: "Holter 24h, MAPA e ECG: preparo e laudo em Criciúma",
  descricao:
    "Entenda o eletrocardiograma, o Holter 24 horas e a MAPA 24 horas: para que servem e como se preparar. Laudo com a Dra. Vanessa Damin. Agende sua consulta.",
  resumo:
    "O eletrocardiograma, o Holter 24 horas e a MAPA 24 horas são exames simples, sem agulhas nem cortes. Eles mostram como estão o ritmo do coração e a pressão arterial. Eu solicito esses exames quando são indicados, analiso os resultados e emito o laudo.",
  blocos: [
    {
      titulo: "O que é o eletrocardiograma (ECG)?",
      paragrafos: [
        "O eletrocardiograma registra a atividade elétrica do coração. Pequenos adesivos, os eletrodos, são colocados no peito, nos braços e nas pernas, e você fica deitado e quieto durante o registro.",
        "O exame não dói e nenhuma eletricidade entra no corpo. Antes de começar, retire objetos de metal e deixe o celular de lado.",
        "O ECG mostra o ritmo e a frequência do coração. Também pode mostrar sinais de que uma parte do coração está sobrecarregada, bloqueios na condução elétrica ou um infarto antigo.",
      ],
    },
    {
      titulo: "Como é o exame Holter?",
      paragrafos: [
        "O Holter 24 horas é um eletrocardiograma que grava o ritmo do coração por um dia inteiro, enquanto você segue a sua rotina. Os eletrodos ficam colados no peito, ligados a um pequeno gravador preso à cintura ou ao pescoço.",
        "Ele ajuda a investigar palpitações (o coração que dispara ou parece falhar), desmaios e alterações do ritmo. Também serve para ver o efeito de remédios para o coração.",
      ],
    },
    {
      titulo: "O que é a MAPA 24 horas?",
      paragrafos: [
        "A MAPA (monitorização ambulatorial da pressão arterial) mede a pressão sozinha, várias vezes, durante 24 horas. Um manguito fica no braço, ligado a um pequeno aparelho preso na cintura.",
        "Ela mostra como a pressão se comporta na rotina e durante o sono. Ajuda a descobrir quem tem a pressão alta só no consultório (o efeito do “avental branco”) ou só fora dele, a ajustar os remédios e a investigar quedas de pressão.",
      ],
    },
    {
      titulo: "Como é o preparo para MAPA e Holter?",
      paragrafos: [
        "As orientações finais são dadas pelo serviço que coloca o aparelho. Em geral, valem estes cuidados:",
      ],
      itens: [
        "Tome banho antes de colocar o aparelho. Durante o exame, não é possível tomar banho nem molhar o equipamento.",
        "Escolha um dia típico e mantenha a sua rotina. Na MAPA, evite treino físico durante o exame.",
        "Vá com camisa de manga larga ou sem manga. Para a MAPA, leve um cinto para prender o aparelho.",
        "Tome os seus remédios como o médico orientou e leve a lista com doses e horários.",
        "Preencha o diário: anote os horários dos remédios, das refeições, do sono, das atividades e de qualquer sintoma.",
        "Não desconecte o aparelho nem tire os eletrodos ou o manguito. No Holter, evite ímãs, detectores de metal e cobertor elétrico.",
        "Na MAPA, quando o manguito apertar, deixe o braço parado e relaxado ao longo do corpo. À noite, não durma sobre esse braço.",
      ],
    },
    {
      titulo: "Como funciona o laudo?",
      paragrafos: [
        "Eu peço o ECG, o Holter ou a MAPA quando eles ajudam a responder uma dúvida da consulta. Depois, analiso o traçado ou as medidas junto com o seu diário e emito o laudo.",
        "O resultado faz mais sentido quando é lido junto com a sua história. Por isso, conversamos sobre o que ele significa para você.",
        "O atendimento é particular, mas os seus exames poderão ser feitos pelo seu plano de saúde, e você ainda pode tentar reembolso.",
      ],
    },
  ],
  quandoProcurar: {
    titulo: "Quando conversar sobre esses exames",
    itens: [
      "Você sente o coração disparar, falhar ou bater fora do ritmo.",
      "Você teve um desmaio ou a sensação de que ia desmaiar.",
      "A sua pressão fica alta no consultório e normal em casa, ou o contrário.",
      "Você trata a pressão alta e quer saber se ela está controlada durante o dia e a noite.",
      "Você sente tontura ao se levantar ou sintomas que parecem de pressão baixa.",
      "Você recebeu um ECG, Holter ou MAPA e quer entender o resultado.",
    ],
  },
  urgencia:
    "Se surgir dor forte no peito, falta de ar intensa ou desmaio, durante o exame ou fora dele, não espere: procure o pronto-socorro ou ligue para o SAMU 192.",
  areas: ["Laudo de Exames"],
  relacionadas: ["palpitacao-e-arritmia", "pressao-alta"],
  fontes: [
    {
      nome: "Diretriz da Sociedade Brasileira de Cardiologia sobre a Análise e Emissão de Laudos Eletrocardiográficos – 2022, Arq Bras Cardiol. 2022;119(4):638-680",
      url: "https://www.scielo.br/j/abc/a/4QcQvX3T6kZBjNQLzrt5cXj/?lang=pt",
    },
    {
      nome: "Diretrizes Brasileiras de Medidas da Pressão Arterial Dentro e Fora do Consultório – 2023, Arq Bras Cardiol. 2024;121(4):e20240113",
      url: "https://www.scielo.br/j/abc/a/bCSMjJJ39tB9ZKHpsS7j7sz/?lang=pt",
    },
    {
      nome: "MedlinePlus (Biblioteca Nacional de Medicina dos EUA): Holter heart monitor",
      url: "https://medlineplus.gov/ency/article/003877.htm",
    },
    {
      nome: "MedlinePlus (Biblioteca Nacional de Medicina dos EUA): Electrocardiogram",
      url: "https://medlineplus.gov/ency/article/003868.htm",
    },
  ],
  mensagemWhatsApp:
    "Olá! Gostaria de agendar uma consulta com a Dra. Vanessa Damin sobre exames do coração (ECG, Holter ou MAPA)",
  pendencias: [
    "Confirmar quais exames a Dra. Vanessa realiza no consultório (ECG, Holter, MAPA, ecodoppler de carótidas, bioimpedância) e quais só lauda",
    "Se ela colocar o Holter ou a MAPA no próprio consultório, trocar “o serviço que coloca o aparelho” pelas orientações do consultório.",
    "Confirmar se faz laudo de exames feitos em outros locais, ou só dos que ela solicita.",
    "O site diz “ECG, Holter 24h, MAPA e outros”: confirmar quais são os “outros” exames que ela lauda.",
    "Confirmar se o Holter é só de 24 horas ou também de 48 horas ou mais.",
    "Não encontrei uma diretriz atual da SBC dedicada ao Holter; as orientações do Holter (banho, ímãs, cobertor elétrico) vêm do MedlinePlus. Conferir se concorda com elas.",
  ],
};
