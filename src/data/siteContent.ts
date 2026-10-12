// Conteúdo centralizado do site Soul Pet.
// Edite textos, links e informações aqui. Itens marcados como "pendente"
// precisam de confirmação antes da publicação.

export const WHATSAPP_NUMBER = "5561995240505";
export const INSTAGRAM_URL = "https://www.instagram.com/soulpetveterinaria/";
export const INSTAGRAM_HANDLE = "@soulpetveterinaria";

// Prefixa caminhos de assets com o `base` configurado no Vite (necessário para
// deploys em subcaminho, como GitHub Pages: /soulpet-veterinaria/).
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}

// Dados extraídos do perfil verificado "Soul Pet | Acupuntura e Veterinária
// Integrativa | Dra Suelen Leite" no Google. Atualize aqui caso o perfil mude.
export const ADDRESS = {
  street: "Av 03, Qd 138, Lote M - Parque Industrial Mingone",
  city: "Luziânia - GO",
  zip: "72855-138",
  full: "Av 03 Qd 138 Lote M - Parque Industrial Mingone, Luziânia - GO, 72855-138",
};

export const GOOGLE_PROFILE_URL =
  "https://www.google.com/search?q=soul+pet+cl%C3%ADnica+veterin%C3%A1ria";
export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS.full
)}&output=embed`;
export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS.full
)}`;

export const googleRating = {
  score: 5.0,
  reviewCount: 48,
  url: GOOGLE_PROFILE_URL,
};

function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappLinks = {
  schedule: buildWhatsAppLink("Olá! Gostaria de agendar uma consulta para meu pet."),
  service: (serviceName: string) =>
    buildWhatsAppLink(`Olá! Gostaria de informações sobre ${serviceName}.`),
  contact: buildWhatsAppLink(
    "Olá! Conheci a Soul Pet pelo site e gostaria de mais informações."
  ),
};

export const siteMeta = {
  name: "Soul Pet",
  tagline: "Medicina Veterinária Integrativa",
  professional: "Suelen Leite",
};

export const topBar = {
  phoneDisplay: "(61) 99524-0505",
  hours: "Seg. a partir das 08:30",
  instagramHandle: INSTAGRAM_HANDLE,
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Amor, ciência e cuidado",
  badge: "Medicina Veterinária Integrativa",
  title: "Amor, ciência e cuidado em cada atendimento",
  subtitle:
    "Um olhar especial para a saúde, o conforto e o bem-estar de quem faz parte da sua família.",
  ctaPrimary: "Agendar Consulta",
  ctaSecondary: "Conhecer Nossos Serviços",
  image: withBase("images/hero.webp"),
  imageAlt: "Suelen Leite, médica-veterinária da Soul Pet, durante atendimento",
  highlights: [
    "Atendimento individualizado",
    "Cuidado integrativo",
    "Atenção à saúde e ao bem-estar",
  ],
};

export const introduction = {
  eyebrow: "Conheça a Soul Pet",
  title: "Cuidado veterinário com carinho e dedicação",
  text: "Na Soul Pet, acreditamos que cuidar da saúde animal vai além de tratar sintomas. Nosso olhar considera as necessidades individuais de cada paciente, promovendo cuidado, prevenção e qualidade de vida.",
  image: withBase("images/hero.webp"),
  imageAlt: "Atendimento veterinário realizado pela Soul Pet",
  button: "Saiba Mais",
  buttonHref: "#profissional",
  cards: [
    {
      title: "Cuidado individualizado",
      description:
        "Cada pet é tratado de forma única, respeitando sua história, temperamento e necessidades específicas.",
      icon: "HeartHandshake",
    },
    {
      title: "Medicina integrativa",
      description:
        "Abordagens complementares integradas ao cuidado clínico, sempre com avaliação veterinária responsável.",
      icon: "Leaf",
    },
    {
      title: "Saúde e bem-estar",
      description:
        "Foco em prevenção, qualidade de vida e equilíbrio físico e emocional dos animais.",
      icon: "ShieldCheck",
    },
  ],
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services = {
  title: "Cuidado completo para o seu melhor amigo.",
  subtitle: "Conheça os serviços e abordagens que fazem parte do cuidado Soul Pet.",
  items: [
    {
      title: "Consultas veterinárias",
      description:
        "Avaliação clínica e acompanhamento individualizado para cães e gatos.",
      icon: "Stethoscope",
    },
    {
      title: "Nutrição de cães e gatos",
      description:
        "Orientação nutricional personalizada, considerando as necessidades de cada animal.",
      icon: "Salad",
    },
    {
      title: "Acupuntura veterinária",
      description:
        "Abordagem integrativa que pode complementar o tratamento clínico conforme avaliação veterinária.",
      icon: "Sparkles",
    },
    {
      title: "Laserterapia",
      description:
        "Recurso terapêutico complementar utilizado em situações selecionadas mediante indicação profissional.",
      icon: "Zap",
    },
    {
      title: "Exames veterinários",
      description:
        "Orientação e avaliação de exames necessários à investigação clínica.",
      icon: "FileSearch",
    },
    {
      title: "Medicina veterinária integrativa",
      description:
        "Integração de diferentes abordagens de cuidado com foco na saúde e no bem-estar animal.",
      icon: "Leaf",
    },
  ] satisfies Service[],
};

export const banner = {
  title: "Porque eles merecem todo o nosso cuidado",
  text: "Saúde, carinho e atenção em cada etapa da vida do seu pet.",
  button: "Agendar Atendimento",
  image: withBase("images/galeria-2.webp"),
  imageAlt: "Momento de carinho e cuidado com um pet",
};

export const integrativeCare = {
  eyebrow: "Medicina Integrativa",
  title: "Abordagens complementares para o cuidado do seu pet.",
  text: "A medicina integrativa une o conhecimento veterinário tradicional a recursos complementares, sempre avaliados individualmente pela médica-veterinária responsável.",
  image: withBase("images/galeria-3.webp"),
  imageAlt: "Atendimento integrativo realizado pela Soul Pet",
  button: "Conhecer os Tratamentos",
  highlights: [
    {
      title: "Acupuntura veterinária",
      description:
        "Abordagem integrativa que pode complementar o tratamento clínico conforme avaliação veterinária.",
      icon: "Sparkles",
    },
    {
      title: "Laserterapia",
      description:
        "Recurso terapêutico complementar utilizado em situações selecionadas mediante indicação profissional.",
      icon: "Zap",
    },
    {
      title: "Nutrição personalizada",
      description:
        "Orientação nutricional individualizada, considerando as necessidades de cada animal.",
      icon: "Salad",
    },
  ],
};

export const about = {
  eyebrow: "Conheça a Profissional",
  title: "Conheça quem cuida com amor e dedicação.",
  name: "Suelen Leite",
  description:
    "Médica-veterinária dedicada ao cuidado de cães e gatos, com atuação em clínica médica, nutrição animal e medicina veterinária integrativa. Atendimento presencial em Luziânia (GO) e no Distrito Federal.",
  image: withBase("images/sobre.webp"),
  imageAlt: "Suelen Leite, médica-veterinária da Soul Pet",
  formation: [
    "Médica-veterinária",
    "Pós-graduada em Clínica Médica e Cirúrgica de Cães e Gatos",
    "Nutróloga de cães e gatos, conforme apresentação profissional",
    "Pós-graduanda em Acupuntura pelo Instituto Bioethicus, Botucatu/SP",
  ],
  cta: "Fale com a Suelen",
};

export const differentials = {
  title: "Uma forma mais humana e completa de cuidar.",
  items: [
    {
      title: "Olhar individualizado",
      description:
        "Cada atendimento é pensado a partir das características e necessidades únicas do paciente.",
      icon: "Eye",
    },
    {
      title: "Atenção ao bem-estar animal",
      description:
        "Cuidado que vai além do diagnóstico, priorizando conforto e qualidade de vida.",
      icon: "HeartPulse",
    },
    {
      title: "Integração de abordagens terapêuticas",
      description:
        "Recursos complementares somados à medicina veterinária tradicional, sempre com responsabilidade clínica.",
      icon: "Layers",
    },
    {
      title: "Proximidade com os tutores",
      description:
        "Comunicação clara e acolhedora para que você participe ativamente do cuidado do seu pet.",
      icon: "Users",
    },
  ],
};

export const galleryCategories = ["Todos", "Consultas", "Bem-estar", "Tratamentos", "Nossa Rotina"] as const;

export const gallery = {
  title: "Momentos de cuidado e conexão.",
  subtitle: "Fotografias reais de atendimentos, cuidados e momentos da rotina da Soul Pet.",
  images: [
    {
      src: withBase("images/hero.webp"),
      alt: "Suelen Leite durante atendimento veterinário",
      size: "large",
      category: "Consultas",
    },
    {
      src: withBase("images/galeria-1.webp"),
      alt: "Suelen Leite cuidando de um cão",
      size: "small",
      category: "Bem-estar",
    },
    {
      src: withBase("images/galeria-3.webp"),
      alt: "Suelen Leite em momento de acolhimento com um pet",
      size: "small",
      category: "Tratamentos",
    },
    {
      src: withBase("images/galeria-2.webp"),
      alt: "Conexão com a natureza, essência da Soul Pet",
      size: "medium",
      category: "Nossa Rotina",
    },
  ],
};

export const testimonials = {
  title: "Carinho e confiança em cada história.",
  hasTestimonials: true,
  // Avaliações reais, extraídas do perfil verificado da Soul Pet no Google.
  // Os nomes completos dos autores não são exibidos publicamente pelo Google,
  // por isso identificamos apenas como "Avaliação no Google".
  googleReviews: [
    "Atendimento excelente, o pãozinho de queijo sai várias vezes do forno.",
    "Preço justo, qualidade, dedicação e competência, uma clínica que surpreende.",
    "Vcs têm que ver o atendimento desta mulher, que amor ela tem com os animais.",
  ],
  emptyState: {
    text: "Em breve, histórias reais de tutores e seus pets cuidados pela Soul Pet. Enquanto isso, acompanhe o dia a dia nos stories e publicações do Instagram.",
    cta: "Ver Instagram",
  },
};

export const instagram = {
  title: "Acompanhe nosso dia a dia.",
  text: "Conteúdos sobre saúde, nutrição, prevenção e bem-estar dos nossos melhores amigos.",
  handle: INSTAGRAM_HANDLE,
  url: INSTAGRAM_URL,
  cta: "Seguir @soulpetveterinaria",
  posts: [
    { src: withBase("images/insta-1.webp"), alt: "Publicação Soul Pet sobre alimentação natural" },
    { src: withBase("images/insta-2.webp"), alt: "Publicação Soul Pet sobre temperos e nutrição" },
    { src: withBase("images/insta-3.webp"), alt: "Publicação Soul Pet sobre cuidado integrativo" },
  ],
};

export const ctaSection = {
  title: "Seu pet merece um cuidado tão especial quanto o amor que você sente por ele.",
  text: "Entre em contato com a Soul Pet e saiba mais sobre nossos atendimentos.",
  button: "Agendar pelo WhatsApp",
  image: withBase("images/galeria-3.webp"),
  imageAlt: "Pet acolhido com cuidado pela Soul Pet",
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      question: "O que é medicina veterinária integrativa?",
      answer:
        "É uma abordagem que une a medicina veterinária convencional a recursos complementares, como acupuntura e laserterapia, sempre com avaliação clínica responsável e foco na saúde e no bem-estar do animal.",
    },
    {
      question: "Como funciona uma consulta?",
      answer:
        "A consulta começa com uma avaliação clínica completa do seu pet, incluindo histórico de saúde, hábitos e necessidades individuais, para que seja construído um plano de cuidado adequado.",
    },
    {
      question: "A Soul Pet atende cães e gatos?",
      answer: "Sim, o atendimento da Soul Pet é voltado para cães e gatos.",
    },
    {
      question: "Como agendar um atendimento?",
      answer:
        "Você pode agendar diretamente pelo WhatsApp, clicando em um dos botões de agendamento espalhados pelo site.",
    },
    {
      question: "Como obter informações sobre valores?",
      answer:
        "Os valores podem variar conforme a avaliação e as necessidades específicas de cada pet. Fale pelo WhatsApp para verificar as condições do atendimento.",
    },
    {
      question: "Como saber qual serviço é indicado para meu pet?",
      answer:
        "Cada indicação é feita a partir da avaliação individual do animal. Entre em contato para conversar sobre as necessidades do seu pet e entender o melhor caminho de cuidado.",
    },
  ],
};

export const contact = {
  title: "Vamos cuidar de quem você ama?",
  items: [
    { label: "Soul Pet", value: "Medicina Veterinária Integrativa" },
    { label: "Profissional", value: "Suelen Leite" },
    { label: "WhatsApp", value: "(61) 99524-0505" },
    { label: "Instagram", value: INSTAGRAM_HANDLE },
    { label: "Endereço", value: ADDRESS.full },
    { label: "Horário de funcionamento", value: "Segunda-feira a partir das 08:30 (demais dias sob consulta)" },
  ],
  cta: "Agendar pelo WhatsApp",
  pendingNote:
    "Horário completo de atendimento em confirmação. Fale com a gente pelo WhatsApp para verificar disponibilidade.",
};

export const footer = {
  logo: withBase("images/logo.png"),
  description: "Medicina Veterinária Integrativa",
};
