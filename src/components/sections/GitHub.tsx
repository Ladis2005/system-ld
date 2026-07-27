"use client";

import { useEffect, useState } from "react";
import { Github, Star, ExternalLink, Code2, GitBranch, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Terminal } from "@/components/ui/Terminal";
import { gitFlow, terminalCommands } from "@/data/content";
import { demoRepos, type Repo } from "@/data/projects";
import { siteConfig, githubProfileUrl } from "@/lib/site";

/**
 * Tenta buscar repositórios reais da API pública do GitHub.
 * Em caso de erro ou utilizador por configurar, usa projetos demonstrativos.
 */
function useRepos() {
  const [repos, setRepos] = useState<Repo[]>(demoRepos);
  const [isDemo, setIsDemo] = useState(true);

  useEffect(() => {
    const user = siteConfig.githubUsername;
    if (!user || user === "SEU-USUARIO") return; // mantém demonstrativos

    const controller = new AbortController();
    fetch(
      `https://api.github.com/users/${user}/repos?sort=updated&per_page=6`,
      { signal: controller.signal },
    )
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: any[]) => {
        if (!Array.isArray(data) || data.length === 0) return;
        const mapped: Repo[] = data.slice(0, 6).map((r) => ({
          name: r.name,
          description: r.description ?? "Projeto desenvolvido pela LSN Web Studio.",
          technologies: [r.language].filter(Boolean) as string[],
          stars: r.stargazers_count ?? 0,
          codeUrl: r.html_url,
          liveUrl: r.homepage || r.html_url,
          demo: true as const,
        }));
        setRepos(mapped);
        setIsDemo(false);
      })
      .catch(() => {
        /* fallback silencioso para projetos demonstrativos */
      });
    return () => controller.abort();
  }, []);

  return { repos, isDemo };
}

export function GitHubSection() {
  const { repos, isDemo } = useRepos();

  return (
    <section id="github" className="relative py-24 lg:py-32">
      {/* Fundo suave */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow opacity-40" />

      <div className="container-page">
        <SectionHeading
          eyebrow="Git e GitHub"
          title="Desenvolvimento organizado com Git e GitHub"
          description="Todos os projetos são desenvolvidos com controlo de versões, garantindo organização, histórico completo e segurança do código."
        />

        {/* Fluxo de trabalho */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {gitFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="glass rounded-full px-4 py-2 text-xs font-medium text-white/80 sm:text-sm">
                  {step}
                </span>
                {i < gitFlow.length - 1 && (
                  <ArrowRight size={16} className="text-electric/60" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Terminal + explicação */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Terminal commands={terminalCommands} />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-electric/15 text-electric">
                  <GitBranch size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Controlo de versões em cada etapa
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">
                    Cada alteração é registada com commits claros, permitindo
                    reverter, rever e colaborar com total segurança.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-electric/15 text-electric">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Código versionado e disponível
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">
                    Quando aplicável, disponibilizamos o repositório no GitHub,
                    com deploy contínuo na Vercel.
                  </p>
                </div>
              </div>
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit"
              >
                <Github size={16} />
                Ver perfil no GitHub
              </a>
            </div>
          </Reveal>
        </div>

        {/* Cartões de repositórios */}
        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display text-xl font-semibold text-white">
              Repositórios
            </h3>
            {isDemo && (
              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
                Projetos demonstrativos
              </span>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <Reveal key={repo.name + i} delay={(i % 3) * 0.08}>
                <div className="glass group flex h-full flex-col p-6 transition-colors hover:border-electric/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-electric">
                      <Github size={18} />
                      <span className="font-mono text-sm font-semibold text-white">
                        {repo.name}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-white/50">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      {repo.stars}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {repo.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {repo.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-brand-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a
                      href={repo.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/10 py-2 text-xs font-medium text-white/80 transition-colors hover:border-electric/50 hover:text-white"
                    >
                      <Code2 size={14} />
                      Código
                    </a>
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-electric/90 py-2 text-xs font-medium text-white transition-colors hover:bg-electric"
                    >
                      <ExternalLink size={14} />
                      Ver site
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
