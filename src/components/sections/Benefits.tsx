"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { benefits } from "@/data/content";

export function Benefits() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Benefícios"
          title="Porquê escolher a LSN Web Studio"
          description="Cada projeto é entregue com padrões elevados de qualidade, desempenho e cuidado."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={(i % 3) * 0.06}>
                <div className="glass group flex items-center gap-4 p-5 transition-all hover:border-electric/40 hover:bg-white/[0.05]">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-electric/15 text-electric transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <span className="font-medium text-white/90">
                    {benefit.title}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
