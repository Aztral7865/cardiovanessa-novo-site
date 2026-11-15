// Depoimentos reais (texto exatamente como publicado pelos pacientes no Google).

export interface Depoimento {
  author: string;
  text: string;
  lang?: string;
}

export const depoimentos: Depoimento[] = [
  {
    author: "Fabricia Gava",
    text: "Quero deixar registrado o meu sincero agradecimento pelo seu atendimento. Você é uma profissional excelente, atenciosa e extremamente dedicada.",
  },
  {
    author: "Suelen Batista",
    text: "A Dra. Vanessa foi extremamente atenciosa ao atender meu marido, que mora em outro país e não fala português. Mesmo com a agenda cheia, ela conseguiu fazer um encaixe e foi muito cuidadosa e profissional durante toda a consulta. Mostrou empatia, paciência e explicou tudo de forma clara para que ele entendesse. Foi um cuidado que tocou nosso coração. Ela é uma médica competente, gentil e com um jeitinho especial que faz toda a diferença. Somos muito gratos pelo atendimento. Obrigada Dra. Vanessa❤️❤️❤️",
  },
  {
    author: "Artur Seixas",
    text: "Gostaria de expressar minha profunda gratidão pelo atendimento excepcional que a Dra. Vanessa prestou à minha avó. Sua atenção, empatia e profissionalismo fizeram toda a diferença em um momento delicado para nossa família!",
  },
  {
    author: "Carmem Vuolo",
    text: "Ela é maravilhosa, como profissional é excelente, muito dedicada e atenciosa , ela cuida do meu paizinho de 84 anos ! Ele adora ela e nós tbm por cuidar tão bem dele!",
  },
  {
    author: "Adriana Cadorin",
    text: "Muito agradável estar em um lugar tranquilo como é a Clínica Salváro e um atendimento espetacular da Dra Vanessa Damin.",
  },
  {
    author: "Frank Melian",
    lang: "en",
    text: "Words cannot describe the humanity and kindness from this wonderful doctor , I’m glad I’ve had the luck of being one of her patients and happy to say I received the best treatment in Brazil, it’s truly top notch and I recommend anyone an amazing cardiologist even if you’re a foreigner like myself. The treatment is top, very professional overall 10/10.",
  },
];
