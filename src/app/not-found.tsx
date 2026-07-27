import Link from "next/link";
import { Home } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <Logo className="justify-center" />
        <h1 className="mt-8 font-display text-6xl font-bold text-electric">404</h1>
        <p className="mt-4 text-lg text-white/60">
          A página que procura não foi encontrada.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <Home size={16} />
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
