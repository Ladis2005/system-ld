"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

type FormState = {
  nome: string;
  empresa: string;
  email: string;
  whatsapp: string;
  tipo: string;
  orcamento: string;
  mensagem: string;
};

const initialState: FormState = {
  nome: "",
  empresa: "",
  email: "",
  whatsapp: "",
  tipo: "",
  orcamento: "",
  mensagem: "",
};

const websiteTypes = [
  "Website institucional",
  "Loja online",
  "Landing page",
  "Portfólio",
  "Sistema web",
  "Outro",
];

const budgetRanges = [
  "Até 15.000 MZN",
  "15.000 – 40.000 MZN",
  "40.000 – 80.000 MZN",
  "Mais de 80.000 MZN",
  "A definir",
];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.nome.trim()) next.nome = "Indique o seu nome.";
    if (!form.email.trim()) {
      next.email = "Indique o seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "E-mail inválido.";
    }
    if (!form.whatsapp.trim()) {
      next.whatsapp = "Indique o seu WhatsApp.";
    } else if (!/^[0-9+\s()-]{7,}$/.test(form.whatsapp)) {
      next.whatsapp = "Número inválido.";
    }
    if (!form.tipo) next.tipo = "Selecione o tipo de website.";
    if (!form.mensagem.trim()) next.mensagem = "Escreva uma mensagem.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      // Tenta enviar via API interna (configure o serviço de e-mail em
      // src/app/api/contact/route.ts). Se falhar, usa o fallback mailto.
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }).catch(() => null);

      // Fallback prático: abre o cliente de e-mail com os dados preenchidos.
      const subject = encodeURIComponent(
        `Pedido de orçamento — ${form.nome}`,
      );
      const body = encodeURIComponent(
        `Nome: ${form.nome}\nEmpresa: ${form.empresa}\nE-mail: ${form.email}\nWhatsApp: ${form.whatsapp}\nTipo de website: ${form.tipo}\nOrçamento: ${form.orcamento}\n\nMensagem:\n${form.mensagem}`,
      );
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-electric/60 focus:bg-white/[0.05] focus:outline-none";

  return (
    <section id="contactos" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow opacity-40" />
      <div className="container-page">
        <SectionHeading
          eyebrow="Contactos"
          title="Peça o seu orçamento sem compromisso"
          description="Conte-nos sobre o seu projeto. Respondemos rapidamente com uma proposta personalizada."
        />

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-strong mx-auto mt-14 max-w-2xl p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Nome"
                error={errors.nome}
                required
              >
                <input
                  className={fieldClass}
                  value={form.nome}
                  onChange={(e) => update("nome", e.target.value)}
                  placeholder="O seu nome"
                  autoComplete="name"
                />
              </Field>

              <Field label="Empresa">
                <input
                  className={fieldClass}
                  value={form.empresa}
                  onChange={(e) => update("empresa", e.target.value)}
                  placeholder="Nome da empresa (opcional)"
                  autoComplete="organization"
                />
              </Field>

              <Field label="E-mail" error={errors.email} required>
                <input
                  type="email"
                  className={fieldClass}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="email@exemplo.com"
                  autoComplete="email"
                />
              </Field>

              <Field label="WhatsApp" error={errors.whatsapp} required>
                <input
                  type="tel"
                  className={fieldClass}
                  value={form.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  placeholder="+258 84 000 0000"
                  autoComplete="tel"
                />
              </Field>

              <Field label="Tipo de website" error={errors.tipo} required>
                <select
                  className={`${fieldClass} appearance-none`}
                  value={form.tipo}
                  onChange={(e) => update("tipo", e.target.value)}
                >
                  <option value="" disabled className="bg-deep-blue">
                    Selecione…
                  </option>
                  {websiteTypes.map((t) => (
                    <option key={t} value={t} className="bg-deep-blue">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Orçamento disponível">
                <select
                  className={`${fieldClass} appearance-none`}
                  value={form.orcamento}
                  onChange={(e) => update("orcamento", e.target.value)}
                >
                  <option value="" disabled className="bg-deep-blue">
                    Selecione…
                  </option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b} className="bg-deep-blue">
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Mensagem" error={errors.mensagem} required>
                <textarea
                  rows={4}
                  className={`${fieldClass} resize-none`}
                  value={form.mensagem}
                  onChange={(e) => update("mensagem", e.target.value)}
                  placeholder="Descreva o seu projeto…"
                />
              </Field>
            </div>

            {/* Mensagens de estado */}
            {status === "success" && (
              <p className="mt-4 flex items-center gap-2 rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-3 text-sm text-green-300">
                <CheckCircle2 size={18} />
                Pedido preparado! Conclua o envio no seu cliente de e-mail.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                <AlertCircle size={18} />
                Ocorreu um erro. Tente novamente ou contacte-nos por WhatsApp.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  A enviar…
                </>
              ) : (
                <>
                  Pedir orçamento
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/70">
        {label}
        {required && <span className="ml-0.5 text-electric">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-red-400">{error}</span>
      )}
    </label>
  );
}
