import { NextResponse } from "next/server";

/**
 * Endpoint de exemplo para receber o formulário de contacto.
 *
 * Integração de e-mail (escolha uma):
 *  - Resend:   https://resend.com  (recomendado, simples)
 *  - Nodemailer + SMTP
 *  - Formspree / EmailJS (sem backend)
 *
 * O formulário no cliente já está preparado para fazer POST aqui.
 * Descomente e configure conforme o serviço escolhido.
 */
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

    // ----- EXEMPLO com Resend (instale `resend` e defina RESEND_API_KEY) -----
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "LSN Web Studio <no-reply@lsnwebstudio.com>",
    //   to: process.env.NEXT_PUBLIC_CONTACT_EMAIL!,
    //   subject: `Pedido de orçamento — ${data.nome}`,
    //   text: JSON.stringify(data, null, 2),
    // });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Erro ao processar o pedido." },
      { status: 500 },
    );
  }
}
