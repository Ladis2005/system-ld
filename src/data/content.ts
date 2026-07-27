/**
 * Conteúdo estruturado e reutilizável do site.
 * Editar aqui altera automaticamente as secções correspondentes.
 */

import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ShoppingCart,
  Rocket,
  UserSquare2,
  Cog,
  MessageCircle,
  Search,
  Server,
  Wrench,
  LifeBuoy,
  Sparkles,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Gauge,
  GitBranch,
  Code2,
  MonitorSmartphone,
  CloudCog,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Websites institucionais",
    description: "Presença digital sólida e profissional para a sua empresa.",
    icon: Building2,
  },
  {
    title: "Lojas online",
    description: "E-commerce rápido e seguro, pronto para vender.",
    icon: ShoppingCart,
  },
  {
    title: "Landing pages",
    description: "Páginas focadas em conversão para campanhas e lançamentos.",
    icon: Rocket,
  },
  {
    title: "Portfólios profissionais",
    description: "Mostre o seu trabalho com elegância e impacto.",
    icon: UserSquare2,
  },
  {
    title: "Sistemas web personalizados",
    description: "Plataformas sob medida para o seu fluxo de trabalho.",
    icon: Cog,
  },
  {
    title: "Integração com WhatsApp",
    description: "Atendimento direto e imediato com os seus clientes.",
    icon: MessageCircle,
  },
  {
    title: "SEO e otimização",
    description: "Melhor posicionamento e visibilidade no Google.",
    icon: Search,
  },
  {
    title: "Domínio e hospedagem",
    description: "Infraestrutura moderna, estável e segura.",
    icon: Server,
  },
  {
    title: "Manutenção de websites",
    description: "O seu site sempre atualizado e a funcionar bem.",
    icon: Wrench,
  },
  {
    title: "Atualizações e suporte técnico",
    description: "Acompanhamento contínuo e apoio dedicado.",
    icon: LifeBuoy,
  },
];

export type AboutCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const aboutCards: AboutCard[] = [
  {
    title: "Criatividade",
    description: "Design original que traduz a identidade da sua marca.",
    icon: Sparkles,
  },
  {
    title: "Tecnologia",
    description: "Stack moderno para performance e escalabilidade.",
    icon: Cpu,
  },
  {
    title: "Segurança",
    description: "Boas práticas e código protegido em cada projeto.",
    icon: ShieldCheck,
  },
  {
    title: "Resultados",
    description: "Websites pensados para transformar visitas em clientes.",
    icon: TrendingUp,
  },
];

export type Tech = {
  name: string;
  color: string;
};

export const technologies: Tech[] = [
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "Node.js", color: "#5FA04E" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#FFFFFF" },
  { name: "Vercel", color: "#FFFFFF" },
];

export type Benefit = {
  title: string;
  icon: LucideIcon;
};

export const benefits: Benefit[] = [
  { title: "Design moderno", icon: Sparkles },
  { title: "Sites responsivos", icon: MonitorSmartphone },
  { title: "Carregamento rápido", icon: Gauge },
  { title: "Segurança", icon: ShieldCheck },
  { title: "SEO", icon: Search },
  { title: "Código organizado", icon: Code2 },
  { title: "Controlo de versões com Git", icon: GitBranch },
  { title: "Hospedagem moderna", icon: CloudCog },
  { title: "Suporte dedicado", icon: LifeBuoy },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Atendimento",
    description: "Conversamos para entender o seu objetivo e visão.",
  },
  {
    step: "02",
    title: "Levantamento das necessidades",
    description: "Mapeamos requisitos, público e funcionalidades.",
  },
  {
    step: "03",
    title: "Planeamento",
    description: "Definimos estrutura, prazos e arquitetura do projeto.",
  },
  {
    step: "04",
    title: "Design",
    description: "Criamos a identidade visual e o protótipo interativo.",
  },
  {
    step: "05",
    title: "Desenvolvimento",
    description: "Codificamos com boas práticas e controlo de versões.",
  },
  {
    step: "06",
    title: "Testes",
    description: "Validamos desempenho, segurança e responsividade.",
  },
  {
    step: "07",
    title: "Publicação",
    description: "Fazemos o deploy na Vercel com domínio configurado.",
  },
  {
    step: "08",
    title: "Suporte",
    description: "Acompanhamos, atualizamos e damos apoio contínuo.",
  },
];

export const gitFlow = [
  "Planeamento",
  "Desenvolvimento",
  "Git Commit",
  "GitHub Repository",
  "Testes",
  "Deploy na Vercel",
];

export const terminalCommands = [
  "git init",
  "git add .",
  'git commit -m "feat: versão inicial do projeto"',
  "git branch -M main",
  "git remote add origin URL_DO_REPOSITORIO",
  "git push -u origin main",
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Quanto custa criar um website?",
    answer:
      "O valor depende do tipo de projeto, funcionalidades e prazo. Após entendermos a sua necessidade, enviamos um orçamento personalizado e transparente, sem custos escondidos.",
  },
  {
    question: "Quanto tempo demora o desenvolvimento?",
    answer:
      "Uma landing page pode ficar pronta em poucos dias, enquanto sites e sistemas mais completos levam algumas semanas. Definimos sempre um prazo claro no planeamento.",
  },
  {
    question: "O cliente poderá atualizar o site?",
    answer:
      "Sim. Entregamos soluções fáceis de gerir e, quando necessário, integramos um painel de administração para que possa atualizar conteúdos de forma autónoma.",
  },
  {
    question: "O website aparecerá no Google?",
    answer:
      "Sim. Todos os projetos são otimizados para SEO, com metadados, sitemap e boas práticas técnicas para melhorar o posicionamento nos motores de busca.",
  },
  {
    question: "O domínio e a hospedagem estão incluídos?",
    answer:
      "Podemos tratar de todo o processo de domínio e hospedagem moderna por si, ou trabalhar com a infraestrutura que já possui. Explicamos as opções no orçamento.",
  },
  {
    question: "O projeto será disponibilizado no GitHub?",
    answer:
      "Sim. Desenvolvemos com controlo de versões e, quando aplicável, disponibilizamos o repositório no GitHub, garantindo organização, histórico e segurança do código.",
  },
  {
    question: "A LSN Web Studio oferece manutenção?",
    answer:
      "Oferecemos planos de manutenção, atualizações e suporte técnico dedicado para manter o seu website seguro, rápido e sempre atualizado.",
  },
];

/** Ícones auxiliares reexportados para o fluxo Git. */
export { CloudCog, GitBranch };
