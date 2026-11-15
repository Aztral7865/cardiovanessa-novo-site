// Dados institucionais. Todo o conteúdo veio do site anterior e está confirmado como correto.

export const WHATSAPP_NUMBER = "5548992116200";

export const whatsappLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const site = {
  name: "Dra. Vanessa Damin",
  shortName: "Vanessa Damin",
  specialty: "Cardiologista e Clínica Médica",
  registry: "CRM/SC 20674 – RQE 15969 / RQE 17474",
  registryParts: [
    { label: "CRM/SC", value: "20674" },
    { label: "RQE", value: "15969" },
    { label: "RQE", value: "17474" },
  ],
  city: "Criciúma",
  state: "SC",
  domain: "www.cardiovanessadamin.com.br",
  productionUrl: "https://www.cardiovanessadamin.com.br",
  title: "Dra. Vanessa Damin - Cardiologista",
  description:
    "Cardiologista em Criciúma. Cuidado completo e humanizado para a saúde do seu coração, com foco em prevenção, diagnóstico e tratamento individualizado.",
  tagline: "O futuro do seu coração começa agora.",
  intro:
    "Cuidado completo e humanizado para a saúde do seu coração. Meu compromisso é com a sua qualidade de vida, através da prevenção, diagnóstico preciso e tratamento individualizado.",
  introHighlights: ["prevenção", "diagnóstico preciso", "tratamento individualizado"],
  about: [
    "Formada em Medicina pela UNESC e com residências em Clínica Médica e Cardiologia, dedico minha carreira a oferecer uma medicina baseada em evidências e focada no paciente. Acredito que a chave para um coração saudável está na parceria entre médico e paciente, construída com confiança, diálogo e cuidado contínuo.",
    "Minha paixão é traduzir o conhecimento cardiológico em bem-estar, ajudando cada pessoa a entender sua saúde e a tomar as melhores decisões para uma vida longa e plena.",
  ],
  contactIntro:
    "Estou à disposição para cuidar da sua saúde cardiovascular. Agende sua consulta preenchendo o formulário ou através dos contatos abaixo.",
} as const;

export const bookingMessage = "Olá! Eu gostaria de agendar uma consulta com a Dra. Vanessa Damin";
export const bookingLink = whatsappLink(bookingMessage);

export const contact = {
  phoneDisplay: "+55 48 99211-6200",
  phoneHref: "tel:+5548992116200",
  whatsapp: whatsappLink(),
  email: "dravanessadamin@gmail.com",
  instagramHandle: "@vanessadamincardiologista",
  instagram: "https://www.instagram.com/vanessadamincardiologista/",
  reviewLink: "https://g.page/r/CYMbpqRkVXzCEAI/review",
  address: {
    street: "Rua Antônio de Lucca, 148",
    rooms: "sala 102 e 111",
    district: "Pio Corrêa",
    city: "Criciúma",
    state: "SC",
    zip: "88811-503",
    full: "Rua Antônio de Lucca, 148, sala 102 e 111 - Pio Corrêa, Criciúma - SC, 88811-503",
    // rota no Google Maps até o endereço do consultório
    maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Rua Antônio de Lucca, 148 - Pio Corrêa, Criciúma - SC",
    )}`,
  },
} as const;

/** Mensagem que o formulário monta e envia pelo WhatsApp (mesmo modelo do site anterior). */
export const formMessage = (name: string, email: string, message: string) =>
  `Olá, Dra. Vanessa! Meu nome é *${name}*.\n\nEntro em contato através do seu site.\n\n*E-mail para retorno:* ${email}\n\n*Mensagem:*\n${message}`;
