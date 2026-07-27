import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

// Gera as páginas de projeto estaticamente no build (ótimo para performance/SEO).
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const highlights = [
    "Design responsivo em todos os dispositivos",
    "Otimização para motores de busca (SEO)",
    "Carregamento rápido e boa performance",
    "Desenvolvido com controlo de versões Git",
  ];

  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-32">
        <article className="container-page py-12">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Voltar ao portfólio
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Imagem */}
            <div className="glass overflow-hidden">
              <div className="relative aspect-[16/11]">
                <Image
                  src={project.image}
                  alt={`Mockup do projeto ${project.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Detalhes */}
            <div>
              <span
                className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  backgroundColor: `${project.accent}22`,
                  color: project.accent,
                }}
              >
                {project.category}
              </span>
              <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                {project.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                {project.longDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-white/5 px-3 py-1 text-sm text-brand-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-8 space-y-3">
                {highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <CheckCircle2 size={18} className="text-electric" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={16} />
                  Ver site
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Github size={16} />
                  Ver no GitHub
                </a>
              </div>

              <p className="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-xs text-amber-300">
                Projeto demonstrativo. Substitua por um caso real da LSN Web
                Studio.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
