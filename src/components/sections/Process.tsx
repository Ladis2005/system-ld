"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section id="processo" className="relative py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Processo de trabalho"
          title="Do primeiro contacto ao suporte contínuo"
          description="Um método claro e transparente que acompanha cada etapa do seu projeto."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Linha central (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-electric/40 to-transparent lg:block" />
          {/* Linha lateral (mobile) */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-electric/40 to-transparent lg:hidden" />

          <ol className="space-y-8 lg:space-y-0">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex items-start gap-6 pl-14 lg:w-1/2 lg:pl-0 ${
                    isLeft
                      ? "lg:ml-0 lg:pr-12 lg:text-right"
                      : "lg:ml-auto lg:pl-12"
                  } lg:mb-8`}
                >
                  {/* Nó */}
                  <span
                    className={`absolute top-1 grid h-10 w-10 place-items-center rounded-full border border-electric/40 bg-tech-black font-display text-sm font-bold text-electric shadow-glow left-0 ${
                      isLeft
                        ? "lg:left-auto lg:-right-5"
                        : "lg:-left-5"
                    }`}
                  >
                    {step.step}
                  </span>

                  <div
                    className={`glass w-full p-5 ${
                      isLeft ? "lg:ml-0" : ""
                    }`}
                  >
                    <h3 className="font-display text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
