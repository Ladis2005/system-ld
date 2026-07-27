"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

// Carregamento lento (lazy) da cena 3D — não bloqueia o render inicial.
const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-full min-h-[340px] place-items-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-electric/30 border-t-electric" />
      </div>
    ),
  },
);

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Fundo tecnológico */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-glow bg-[size:56px_56px] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-electric/20 blur-[140px]" />
      </div>

      <div className="container-page grid items-center gap-10 pb-16 lg:grid-cols-2 lg:gap-6 lg:pb-24">
        {/* Coluna de texto */}
        <div className="flex flex-col items-start gap-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Sparkles size={14} />
            Agência de desenvolvimento web
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-6xl"
          >
            <span className="heading-gradient">
              Transformamos ideias em
            </span>{" "}
            <span className="relative whitespace-nowrap text-electric">
              websites de sucesso
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Criamos websites modernos, rápidos, responsivos e personalizados
            para ajudar empresas a crescer no mundo digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a href="#contactos" className="btn-primary">
              Solicitar orçamento
              <ArrowRight size={16} />
            </a>
            <a href="#portfolio" className="btn-ghost">
              <Play size={16} />
              Ver projetos
            </a>
          </motion.div>

          {/* Métricas de confiança */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 flex flex-wrap gap-8"
          >
            {[
              { value: "100%", label: "Responsivo" },
              { value: "SEO", label: "Otimizado" },
              { value: "Git", label: "Versionado" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-white">
                  {s.value}
                </dt>
                <dd className="text-xs uppercase tracking-widest text-white/40">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Coluna 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[360px] sm:h-[440px] lg:h-[520px]"
        >
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}
