"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/projects";
import { usePrefersReducedMotion } from "@/lib/hooks";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = usePrefersReducedMotion();
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  // Rotação automática (pausada com movimento reduzido).
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, reduce]);

  const active = testimonials[index];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testemunhos"
          title="O que dizem sobre o nosso trabalho"
          description="A satisfação dos nossos clientes é a nossa maior referência."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -20 }}
              transition={{ duration: 0.4 }}
              className="glass-strong relative p-8 text-center shadow-card sm:p-12"
            >
              <Quote
                className="mx-auto mb-6 text-electric/40"
                size={40}
                aria-hidden
              />
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-white/85 sm:text-xl">
                “{active.comment}”
              </p>
              <footer className="mt-8 flex items-center justify-center gap-4">
                <Image
                  src={active.photo}
                  alt={active.name}
                  width={52}
                  height={52}
                  className="h-13 w-13 rounded-full object-cover ring-2 ring-electric/40"
                />
                <div className="text-left">
                  <div className="font-display font-semibold text-white">
                    {active.name}
                  </div>
                  <div className="text-sm text-white/50">{active.company}</div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Controlos */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Testemunho anterior"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-electric/50 hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para o testemunho ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-electric"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Próximo testemunho"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-electric/50 hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
