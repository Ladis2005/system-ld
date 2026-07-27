"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { aboutCards } from "@/data/content";

export function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Sobre a LSN Web Studio"
            title="Soluções digitais pensadas para o crescimento do seu negócio"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Na LSN Web Studio, transformamos ideias em experiências digitais
              profissionais. Desenvolvemos websites modernos, rápidos e
              personalizados para empresas, marcas e empreendedores que desejam
              destacar-se no mercado.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {aboutCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <TiltCard className="glass group h-full p-6 transition-colors hover:border-electric/40">
                  <div
                    className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-electric/15 text-electric transition-transform group-hover:scale-110"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {card.description}
                  </p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
