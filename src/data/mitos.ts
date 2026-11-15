// Mitos e verdades sobre o coração (textos do site anterior).

export interface Mito {
  slug: string;
  claim: string;
  verdict: "mito" | "verdade";
  verdictLabel: string;
  answer: string;
}

export const mitos: Mito[] = [
  {
    slug: "coracao-nao-doi",
    claim: "O coração não dói.",
    verdict: "mito",
    verdictLabel: "Mito",
    answer:
      "O coração dói, sim, e qualquer queixa de dor súbita desde o estômago até o maxilar inferior (queixo) e desde a parte anterior do tórax até as costas, incluindo os dois braços, pode corresponder à apresentação clínica de uma doença coronariana (artéria do coração).",
  },
  {
    slug: "magros-e-colesterol",
    claim: "Pessoas magras não correm risco de colesterol alto.",
    verdict: "mito",
    verdictLabel: "Mito",
    answer:
      "Embora a obesidade seja um fator de risco, o colesterol alto também pode ser causado por fatores genéticos e dieta inadequada, independentemente do peso. Pessoas magras também devem monitorar seus níveis de colesterol regularmente.",
  },
  {
    slug: "sem-dor-no-peito",
    claim: "Se não sinto dor no peito, meu coração está saudável.",
    verdict: "mito",
    verdictLabel: "Mito",
    answer:
      "Muitas doenças cardíacas, como hipertensão e arritmias, podem ser silenciosas. Além disso, os sintomas de um infarto podem variar, incluindo falta de ar, cansaço, dor nos braços ou nas costas, especialmente em mulheres. A prevenção e o check-up são essenciais.",
  },
  {
    slug: "problema-masculino",
    claim: "Doença cardíaca é um problema principalmente masculino.",
    verdict: "mito",
    verdictLabel: "Mito",
    answer:
      "As doenças cardiovasculares são a principal causa de morte tanto em homens quanto em mulheres. No entanto, os sintomas podem se apresentar de forma diferente nelas, sendo muitas vezes atípicos, o que reforça a importância da conscientização e do acompanhamento médico.",
  },
  {
    slug: "parar-remedio-pressao",
    claim: "Posso parar o remédio da pressão assim que ela normalizar.",
    verdict: "mito",
    verdictLabel: "Mito",
    answer:
      "A hipertensão é uma condição crônica. A medicação controla a pressão, mas não a cura. A pressão está normal justamente porque você está tomando o remédio. Interromper o tratamento por conta própria é perigoso e pode levar a picos de pressão e complicações graves.",
  },
  {
    slug: "azia-e-coracao",
    claim: "Azia frequente não tem nada a ver com o coração.",
    verdict: "verdade",
    verdictLabel: "Verdade, com ressalvas",
    answer:
      "Na maioria das vezes, a azia é um problema digestivo. No entanto, uma dor ou queimação no peito, semelhante à azia, pode ser um sintoma de angina ou até de um infarto. Se a sensação for nova, intensa ou associada a outros sintomas, procure atendimento médico imediatamente.",
  },
];
