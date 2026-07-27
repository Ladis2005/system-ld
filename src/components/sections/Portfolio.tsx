"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects } from "@/data/projects";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos que geram resultados reais"
          description="Uma seleção de trabalhos que combinam design, tecnologia e estratégia."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <TiltCard intensity={5} className="h-full">
                <article className="glass group flex h-full flex-col overflow-hidden transition-colors hover:border-electric/40">
                  {/* Mockup 3D */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Mockup do projeto ${project.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-black via-tech-black/20 to-transparent" />
                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm"
                      style={{
                        backgroundColor: `${project.accent}22`,
                        color: project.accent,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {project.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/55">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-brand-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-2">
                      <Link
                        href={`/projetos/${project.slug}`}
                        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-electric/90 py-2 text-xs font-semibold text-white transition-colors hover:bg-electric"
                      >
                        Ver projeto
                        <ArrowUpRight size={14} />
                      </Link>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver ${project.name} no GitHub`}
                        className="grid w-10 place-items-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-electric/50 hover:text-white"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
