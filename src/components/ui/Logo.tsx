import { siteConfig } from "@/lib/site";

/** Logótipo em texto + marca gráfica leve (sem imagem, para nitidez). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-electric shadow-glow">
        <span className="font-display text-sm font-bold text-white">L</span>
        <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/30" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        {siteConfig.shortName}{" "}
        <span className="text-brand-300">Web Studio</span>
      </span>
    </span>
  );
}
