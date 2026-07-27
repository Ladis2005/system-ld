/**
 * Projetos de portfólio e testemunhos.
 *
 * CONTEÚDO DEMONSTRATIVO — substituir por projetos e avaliações reais.
 * As imagens usam a Unsplash Source (gratuita) e podem ser trocadas por
 * ficheiros locais em /public para máxima performance.
 */

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  accent: string;
  demo: true;
};

export const projects: Project[] = [
  {
    slug: "clinica-vitalis",
    name: "Website para clínica",
    category: "Saúde",
    description: "Site institucional com marcação de consultas online.",
    longDescription:
      "Plataforma para a Clínica Vitalis com apresentação de serviços, equipa médica, blog de saúde e um sistema de marcação de consultas integrado com WhatsApp. Foco em acessibilidade e confiança.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=70",
    liveUrl: "#",
    githubUrl: "#",
    accent: "#1265F5",
    demo: true,
  },
  {
    slug: "restaurante-sabor",
    name: "Website para restaurante",
    category: "Restauração",
    description: "Menu digital, reservas e galeria de pratos.",
    longDescription:
      "Website do Restaurante Sabor com menu digital interativo, sistema de reservas, galeria fotográfica e integração com redes sociais. Design apetitoso e totalmente responsivo.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=70",
    liveUrl: "#",
    githubUrl: "#",
    accent: "#F5A312",
    demo: true,
  },
  {
    slug: "loja-nova-moda",
    name: "Loja online",
    category: "E-commerce",
    description: "Loja completa com carrinho e pagamentos.",
    longDescription:
      "E-commerce Nova Moda com catálogo de produtos, carrinho de compras, checkout seguro e painel de gestão. Otimizado para conversão e velocidade de carregamento.",
    technologies: ["Next.js", "React", "Node.js", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=70",
    liveUrl: "#",
    githubUrl: "#",
    accent: "#12C4F5",
    demo: true,
  },
  {
    slug: "imobiliaria-horizonte",
    name: "Website imobiliário",
    category: "Imobiliário",
    description: "Portal de imóveis com pesquisa avançada.",
    longDescription:
      "Portal da Imobiliária Horizonte com listagem de imóveis, filtros avançados de pesquisa, mapa interativo e formulários de contacto por propriedade. Rápido e escalável.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=70",
    liveUrl: "#",
    githubUrl: "#",
    accent: "#1265F5",
    demo: true,
  },
  {
    slug: "construtora-solida",
    name: "Website para empresa de construção",
    category: "Construção",
    description: "Site corporativo com portefólio de obras.",
    longDescription:
      "Website corporativo da Construtora Sólida com apresentação da empresa, portefólio de obras realizadas, serviços e pedido de orçamento. Visual robusto e profissional.",
    technologies: ["Next.js", "Framer Motion", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=70",
    liveUrl: "#",
    githubUrl: "#",
    accent: "#F5A312",
    demo: true,
  },
  {
    slug: "landing-produto-flux",
    name: "Landing page de produto",
    category: "Landing Page",
    description: "Página de lançamento focada em conversão.",
    longDescription:
      "Landing page do produto Flux com secção hero animada, benefícios, depoimentos, planos de preço e call-to-actions estratégicos. Construída para maximizar conversões.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=70",
    liveUrl: "#",
    githubUrl: "#",
    accent: "#12C4F5",
    demo: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export type Testimonial = {
  name: string;
  company: string;
  photo: string;
  comment: string;
  rating: number;
  demo: true;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ana Marques",
    company: "Clínica Vitalis",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=70",
    comment:
      "O novo site trouxe muito mais marcações online. Profissionalismo e rapidez do início ao fim.",
    rating: 5,
    demo: true,
  },
  {
    name: "Carlos Nunes",
    company: "Restaurante Sabor",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=70",
    comment:
      "Ficámos impressionados com o design. O menu digital é lindo e os clientes adoram.",
    rating: 5,
    demo: true,
  },
  {
    name: "Sofia Pereira",
    company: "Nova Moda",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=70",
    comment:
      "A loja online funciona perfeitamente e é muito rápida. As vendas aumentaram bastante.",
    rating: 5,
    demo: true,
  },
  {
    name: "Miguel Santos",
    company: "Imobiliária Horizonte",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=70",
    comment:
      "Equipa atenciosa e resultado acima das expectativas. Recomendo a LSN Web Studio sem hesitar.",
    rating: 5,
    demo: true,
  },
];

/**
 * Repositórios demonstrativos usados quando não há ligação à API do GitHub.
 * Fáceis de substituir por dados reais.
 */
export type Repo = {
  name: string;
  description: string;
  technologies: string[];
  stars: number;
  codeUrl: string;
  liveUrl: string;
  demo: true;
};

export const demoRepos: Repo[] = [
  {
    name: "clinica-vitalis",
    description: "Website institucional com marcação de consultas online.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    stars: 24,
    codeUrl: "#",
    liveUrl: "#",
    demo: true,
  },
  {
    name: "loja-nova-moda",
    description: "E-commerce moderno com carrinho e checkout seguro.",
    technologies: ["Next.js", "Node.js", "React"],
    stars: 41,
    codeUrl: "#",
    liveUrl: "#",
    demo: true,
  },
  {
    name: "landing-flux",
    description: "Landing page de alta conversão para lançamento de produto.",
    technologies: ["Next.js", "Framer Motion"],
    stars: 18,
    codeUrl: "#",
    liveUrl: "#",
    demo: true,
  },
];
