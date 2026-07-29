import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validação mínima no servidor.
    if (!data?.nome || !data?.email || !data?.mensagem) {
      return NextResponse.json(
        { ok: false, error: "Campos obrigatórios em falta." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_EMAIL_TO ?? process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    if (!process.env.RESEND_API_KEY || !to) {
      return NextResponse.json(
        { ok: false, error: "Serviço de e-mail não configurado." },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "LSN Web Studio <onboarding@resend.dev>",
      to,
      replyTo: data.email,
      subject: `Pedido de orçamento — ${data.nome}`,
      text: [
        `Nome: ${data.nome}`,
        `Empresa: ${data.empresa || "-"}`,
        `E-mail: ${data.email}`,
        `WhatsApp: ${data.whatsapp || "-"}`,
        `Tipo de website: ${data.tipo || "-"}`,
        `Orçamento: ${data.orcamento || "-"}`,
        "",
        "Mensagem:",
        data.mensagem,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Falha ao enviar o e-mail." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Erro ao processar o pedido." },
      { status: 500 },
    );
  }
}
