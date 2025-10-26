import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: Request) {
  try {
    const { nome, whatsapp, email, quantidadeContas } = await req.json()

    if (!nome || !whatsapp || !email || !quantidadeContas) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const notifyEmail = process.env.NOTIFY_EMAIL
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev'

    if (!apiKey || !notifyEmail) {
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    // Envia e valida respostas da API
    const [{ error: notifyError }, { error: userError }] = await Promise.all([
      resend.emails.send({
        from: `DEX+ <${fromEmail}>`,
        to: [notifyEmail],
        subject: 'Novo cadastro na lista de espera DEX+',
        text: `Novo cadastro DEX+\n\nNome: ${nome}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nContas iFood: ${quantidadeContas}`,
      }),
      resend.emails.send({
        from: `DEX+ <${fromEmail}>`,
        to: [email],
        subject: 'Recebemos seu cadastro na lista de espera DEX+',
        text: `Olá ${nome.split(' ')[0]},\n\nObrigado pelo interesse no DEX+!\nRecebemos seu cadastro e em breve entraremos em contato para habilitar seu acesso antecipado.\n\nResumo do seu cadastro:\n- WhatsApp: ${whatsapp}\n- Contas iFood: ${quantidadeContas}\n\nQualquer dúvida, responda este e-mail.\n\nAbraço,\nEquipe DEX+`,
      }),
    ])

    if (notifyError || userError) {
      return NextResponse.json(
        {
          error: 'Email send failed',
          details: {
            notify: notifyError?.message || null,
            user: userError?.message || null,
          },
        },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('waitlist POST error', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
