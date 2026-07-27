/**
 * Configuração central do site.
 * Todos os valores sensíveis / editáveis vêm de variáveis de ambiente
 * com fallbacks seguros para desenvolvimento.
 */

export const siteConfig = {
  name: "LSN Web Studio",
  shortName: "LSN",
  description:
    "Criamos websites modernos, rápidos, responsivos e personalizados para ajudar empresas a crescer no mundo digital.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lsnwebstudio.com",
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "Ladis2005",
  whatsappLinkBase:
    process.env.NEXT_PUBLIC_WHATSAPP_LINK ??
    "https://wa.me/message/UAVSK3MNPK3RD1",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "lsnwebstudio@gmail.com",
  social: {
    instagram: "https://instagram.com/lsnwebstudio",
    facebook: "https://facebook.com/lsnwebstudio",
  },
} as const;

export const githubProfileUrl = `https://github.com/${siteConfig.githubUsername}`;

/** Link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message = "Olá! Gostaria de solicitar um orçamento.") {
  return `${siteConfig.whatsappLinkBase}?text=${encodeURIComponent(message)}`;
}

/** Links de navegação do cabeçalho. */
export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "GitHub", href: "#github" },
  { label: "Contactos", href: "#contactos" },
] as const;
