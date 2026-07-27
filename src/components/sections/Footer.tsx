import { Instagram, Facebook, Github, Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import {
  siteConfig,
  navLinks,
  githubProfileUrl,
  whatsappLink,
} from "@/lib/site";
import { services } from "@/data/content";

export function Footer() {
  const socials = [
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: MessageCircle, href: whatsappLink(), label: "WhatsApp" },
    { icon: Github, href: githubProfileUrl, label: "GitHub" },
    { icon: Mail, href: `mailto:${siteConfig.contactEmail}`, label: "E-mail" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-deep-blue/40">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Transformamos ideias em websites modernos, rápidos e
              personalizados que ajudam empresas a crescer no mundo digital.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-electric/50 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#servicos"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Links rápidos
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/40">
            © 2026 LSN Web Studio. Todos os direitos reservados.
          </p>
          <p className="text-sm text-white/40">
            Desenvolvido com React, Next.js, Three.js e Git.
          </p>
        </div>
      </div>
    </footer>
  );
}
