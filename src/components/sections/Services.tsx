"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { services } from "@/data/content";

export function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo o que a sua presença digital precisa"
          description="Soluções completas, do primeiro conceito ao suporte contínuo, com foco em desempenho e resultados."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.06}>
                <TiltCard
                  intensity={6}
                  className="glass group relative h-full overflow-hidden p-6 transition-colors hover:border-electric/40"
                >
                  {/* Brilho de fundo ao passar o cursor */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div
                    className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-electric ring-1 ring-inset ring-white/10 transition-all group-hover:bg-electric group-hover:text-white"
                    style={{ transform: "translateZ(24px)" }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {service.description}
                  </p>
                  <ArrowUpRight
                    size={18}
                    className="absolute right-5 top-5 text-white/20 transition-all group-hover:text-electric"
                  />
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
