// Formato das páginas por tema (pressão alta, colesterol, exames...). Cada página fica num
// arquivo em src/data/paginas/<slug>.ts e é montada por src/pages/[slug].astro.
//
// Regra de publicação: enquanto `revisadoEm` estiver vazio, a página é um RASCUNHO. Ela aparece
// no computador (npm run dev) e na prévia do GitHub, com um aviso, mas NÃO entra no site no ar.
// Só preencha `revisadoEm` depois que a Dra. Vanessa aprovar o texto.

export interface Bloco {
  /** subtítulo (H2), de preferência a pergunta que o paciente faria */
  titulo: string;
  /** parágrafos curtos: no celular, até umas 3 frases cada */
  paragrafos?: string[];
  /** lista com marcadores, quando ajuda a leitura */
  itens?: string[];
}

export interface Fonte {
  nome: string;
  url?: string;
}

export interface Pagina {
  /** endereço da página: /<slug> */
  slug: string;
  /** nome curto para links e para o rodapé, ex.: "Pressão alta" */
  rotulo: string;
  /** título principal (H1) */
  titulo: string;
  /** título da aba e do Google: até 60 caracteres */
  tituloSeo: string;
  /** descrição que aparece no Google: até 155 caracteres, com convite para agendar */
  descricao: string;
  /** primeiro parágrafo: a resposta direta, em 2 ou 3 frases */
  resumo: string;
  blocos: Bloco[];
  /** sinais para procurar a cardiologista (consulta eletiva) */
  quandoProcurar?: { titulo: string; itens: string[] };
  /** quando ir direto ao pronto-socorro / SAMU 192 */
  urgencia?: string;
  /** títulos EXATOS de src/data/atuacao.ts que ganham o link "Saiba mais" para esta página */
  areas: string[];
  /** slugs de outras páginas para "Leia também" */
  relacionadas: string[];
  /** diretrizes e documentos que embasam o texto */
  fontes: Fonte[];
  /** mensagem pronta do botão de WhatsApp desta página */
  mensagemWhatsApp: string;
  /** AAAA-MM-DD: data em que a Dra. Vanessa aprovou o texto. Vazio = rascunho. */
  revisadoEm?: string;
  /** o que ainda depende de resposta da Dra. Vanessa (aparece só nos rascunhos) */
  pendencias?: string[];
}
