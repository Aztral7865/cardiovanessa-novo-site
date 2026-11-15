// Formação acadêmica e experiência profissional (textos do site anterior).

export interface Marco {
  title: string;
  place?: string;
  period: string;
  note?: string;
}

export const formacao: Marco[] = [
  { title: "Medicina", place: "UNESC", period: "Conclusão em 2014" },
  { title: "Residência em Clínica Médica", place: "Hospital São José", period: "2015 – 2016" },
  { title: "Residência em Cardiologia", place: "Instituto de Cardiologia de SC", period: "2017 – 2018" },
  {
    title: "Cursos de Emergência Cardiovascular (ACLS) e Trauma (ATLS)",
    period: "Certificações avançadas",
  },
];

export const experiencia: Marco[] = [
  {
    title: "Plantonista",
    place: "Serviço de Cardiologia 24h do Hospital São João Batista / Unimed",
    period: "2019 – Atualmente",
  },
  {
    title: "Professora Efetiva",
    place: "UFSC Araranguá",
    period: "2020 – 2024",
    note: "Departamento de Ciências da Saúde",
  },
  {
    title: "Médica Reguladora e Intervencionista",
    place: "SAMU Criciúma",
    period: "2015 – 2021",
  },
  { title: "Médica Plantonista da UTI", place: "Hospital São José", period: "2018 – 2019" },
];
