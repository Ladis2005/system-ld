"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

/**
 * Terminal animado que "escreve" comandos linha a linha.
 * Com movimento reduzido, mostra todas as linhas de imediato.
 */
export function Terminal({ commands }: { commands: string[] }) {
  const reduce = usePrefersReducedMotion();
  const [lines, setLines] = useState<string[]>(reduce ? commands : []);
  const [current, setCurrent] = useState("");
  const startedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Só anima quando entra no ecrã.
  useEffect(() => {
    if (reduce || !containerRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.3 },
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [reduce]);

  useEffect(() => {
    if (reduce || !inView || startedRef.current) return;
    startedRef.current = true;

    let cmdIndex = 0;
    let charIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      if (cmdIndex >= commands.length) return;
      const cmd = commands[cmdIndex];
      if (charIndex <= cmd.length) {
        setCurrent(cmd.slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(type, 32);
      } else {
        setLines((prev) => [...prev, cmd]);
        setCurrent("");
        cmdIndex++;
        charIndex = 0;
        timeout = setTimeout(type, 420);
      }
    };
    timeout = setTimeout(type, 300);
    return () => clearTimeout(timeout);
  }, [inView, reduce, commands]);

  return (
    <div
      ref={containerRef}
      className="glass-strong overflow-hidden font-mono text-sm shadow-card"
    >
      {/* Barra de título */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-white/40">bash — lsn-web-studio</span>
      </div>
      {/* Conteúdo */}
      <div className="min-h-[220px] space-y-2 p-4">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="select-none text-electric">$</span>
            <span className="text-white/80">{line}</span>
          </div>
        ))}
        {!reduce && current && (
          <div className="flex gap-2">
            <span className="select-none text-electric">$</span>
            <span className="text-white/80">
              {current}
              <span className="ml-0.5 inline-block h-4 w-2 animate-pulse-glow bg-electric align-middle" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
