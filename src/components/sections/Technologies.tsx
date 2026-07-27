"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { technologies } from "@/data/content";

export function Technologies() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Tecnologias utilizadas"
          title="Ferramentas modernas para resultados de excelência"
          description="Trabalhamos com um stack atual e comprovado, garantindo velocidade, segurança e escalabilidade."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-5">
          {technologies.map((tech, i) => (
            <Reveal key={tech.name} delay={(i % 6) * 0.05}>
              <motion.div
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="group relative flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm sm:h-28 sm:w-28"
              >
                {/* Marca/ícone circular com a cor da tecnologia */}
                <span
                  className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold shadow-lg transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: `${tech.color}22`,
                    color: tech.color,
                    boxShadow: `0 0 24px -6px ${tech.color}66`,
                  }}
                >
                  {tech.name.slice(0, 2)}
                </span>
                {/* Nome — sempre visível para acessibilidade, realça no hover */}
                <span className="text-center text-[11px] font-medium leading-tight text-white/50 transition-colors group-hover:text-white sm:text-xs">
                  {tech.name}
                </span>
                <span className="animate-float-slow pointer-events-none absolute -z-10 h-full w-full rounded-2xl" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
