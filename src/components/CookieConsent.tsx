"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function CookieConsent() {
  const [accepted, setAccepted] = useState<boolean>(true)
  const [showPolicy, setShowPolicy] = useState<boolean>(false)

  useEffect(() => {
    const ok = typeof window !== 'undefined' && localStorage.getItem('cookie_consent') === 'accepted'
    setAccepted(!!ok)
  }, [])

  const pathname = usePathname()

  useEffect(() => {
    if (!accepted && pathname !== '/privacidade') {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [accepted, pathname])

  const loadClarity = () => {
    const id = process.env.NEXT_PUBLIC_CLARITY_ID
    if (!id) return
    if (document.getElementById('ms-clarity-inline')) return
    const s = document.createElement('script')
    s.id = 'ms-clarity-inline'
    s.type = 'text/javascript'
    s.innerHTML = `(
      function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      }
    )(window, document, "clarity", "script", "${id}");`
    document.body.appendChild(s)
  }

  const onAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setAccepted(true)
    loadClarity()
    if (typeof window !== 'undefined') {
      setTimeout(() => window.location.reload(), 100)
    }
  }

  useEffect(() => {
    if (accepted) {
      loadClarity()
    }
  }, [accepted])

  if (accepted || pathname === '/privacidade') return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/50 backdrop-blur-sm">
      <div className="mx-4 mb-6 w-full max-w-2xl rounded-2xl border border-white/15 bg-brand-purple-dark p-5 shadow-2xl sm:p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <svg className="h-7 w-7 text-brand-yellow-solar" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2a9.99 9.99 0 00-9.95 9.12 1.5 1.5 0 001.92 1.6 1.5 1.5 0 011.83 1.48 1.5 1.5 0 001.96 1.59 1.5 1.5 0 011.88 1.46A7 7 0 0019 12c0-.34-.02-.68-.06-1.01A2.5 2.5 0 0117 8.5c0-1.38 1.12-2.5 2.5-2.5.18 0 .36.02.53.05A10 10 0 0012 2zm-2.5 6A1.5 1.5 0 119 11.5 1.5 1.5 0 019.5 8zm5 2A1.5 1.5 0 1114 11.5 1.5 1.5 0 0114.5 10zM8 13.5A1.5 1.5 0 119.5 15 1.5 1.5 0 018 13.5zm6.5 2A1.5 1.5 0 1116 17.5 1.5 1.5 0 0114.5 15.5z"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-sora text-lg font-bold text-white">Sua privacidade é importante</h3>
            <p className="mt-1 text-sm text-white/80">Utilizamos cookies essenciais e de desempenho para melhorar sua experiência e personalizar conteúdos. Ao continuar, você concorda com o uso de cookies.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a href="#" onClick={(e) => { e.preventDefault(); setShowPolicy(true) }} className="text-sm text-white/70 underline underline-offset-2">Política de Privacidade</a>
              <button onClick={onAccept} className="inline-flex items-center justify-center rounded-full bg-brand-yellow-solar px-6 py-3 font-sora text-sm font-extrabold text-brand-purple-dark shadow-lg ring-2 ring-brand-yellow-solar/40 transition hover:brightness-110">
                Aceitar e continuar
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPolicy && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4">
          <div className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-brand-purple-dark p-6 text-white shadow-2xl">
            <button aria-label="Fechar" onClick={() => setShowPolicy(false)} className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <h2 className="font-sora text-2xl font-bold">Política de Privacidade</h2>
            <p className="mt-2 text-sm text-white/70">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

            <div className="prose prose-invert mt-5 max-w-none text-white/90">
              <p>Esta Política de Privacidade explica como coletamos, usamos e protegemos seus dados pessoais ao utilizar nossa página e nossos serviços.</p>
              <h3>1. Dados que coletamos</h3>
              <ul>
                <li>Informações fornecidas por você no formulário (nome, e-mail, WhatsApp, quantidade de contas).</li>
                <li>Informações de referência/afiliado quando você acessa por links do tipo /r/&lt;id&gt;.</li>
                <li>Cookies essenciais e de desempenho para melhorar sua experiência.</li>
              </ul>
              <h3>2. Finalidades do tratamento</h3>
              <ul>
                <li>Entrar em contato a respeito do acesso antecipado ao DEX+.</li>
                <li>Comunicações sobre produto e serviços relacionados.</li>
                <li>Medir desempenho e aprimorar a experiência do usuário.</li>
              </ul>
              <h3>3. Bases legais</h3>
              <p>Tratamos seus dados com base no seu consentimento e no legítimo interesse para fornecer e aprimorar nossos serviços.</p>
              <h3>4. Compartilhamento</h3>
              <p>Podemos compartilhar dados com prestadores de serviço estritamente necessários para operação (por ex., provedores de e-mail). Não vendemos seus dados.</p>
              <h3>5. Cookies</h3>
              <p>Utilizamos cookies essenciais (ex.: referência de afiliados) e de desempenho para melhorar a experiência. Você pode gerenciar cookies nas configurações do seu navegador.</p>
              <h3>6. Direitos do titular</h3>
              <p>Você tem direito de acessar, corrigir e solicitar a exclusão dos seus dados, além de revogar consentimentos. Para exercer seus direitos, entre em contato.</p>
              <h3>7. Retenção e segurança</h3>
              <p>Adotamos medidas técnicas e organizacionais para proteção. Mantemos seus dados somente pelo tempo necessário para as finalidades acima.</p>
              <h3>8. Contato</h3>
              <p>Para dúvidas ou solicitações, escreva para <a className="underline" href="mailto:suporte@usa-dex.com.br">suporte@usa-dex.com.br</a>.</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button onClick={() => setShowPolicy(false)} className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">Fechar</button>
              <button onClick={onAccept} className="inline-flex items-center justify-center rounded-full bg-brand-yellow-solar px-6 py-3 font-sora text-sm font-extrabold text-brand-purple-dark shadow-lg ring-2 ring-brand-yellow-solar/40 transition hover:brightness-110">Aceitar e continuar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
