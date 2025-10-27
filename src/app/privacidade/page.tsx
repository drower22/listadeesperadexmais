export default function Privacidade() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-white">
      <h1 className="font-sora text-3xl font-extrabold">Política de Privacidade</h1>
      <p className="mt-4 text-white/80">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

      <section className="mt-8 space-y-4 text-white/90">
        <p>
          Esta Política de Privacidade explica como coletamos, usamos e protegemos seus dados
          pessoais ao utilizar nossa página e nossos serviços.
        </p>

        <h2 className="mt-6 font-sora text-2xl font-bold">1. Dados que coletamos</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Informações fornecidas por você no formulário (nome, e-mail, WhatsApp, quantidade de contas).</li>
          <li>Informações de referência/afiliado quando você acessa por links do tipo /r/&lt;id&gt;.</li>
          <li>Cookies essenciais e de desempenho para melhorar sua experiência.</li>
        </ul>

        <h2 className="mt-6 font-sora text-2xl font-bold">2. Finalidades do tratamento</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          <li>Entrar em contato a respeito do acesso antecipado ao DEX+.</li>
          <li>Comunicações sobre produto e serviços relacionados.</li>
          <li>Medir desempenho e aprimorar a experiência do usuário.</li>
        </ul>

        <h2 className="mt-6 font-sora text-2xl font-bold">3. Bases legais</h2>
        <p className="mt-2">Tratamos seus dados com base no seu consentimento e no legítimo interesse para fornecer e aprimorar nossos serviços.</p>

        <h2 className="mt-6 font-sora text-2xl font-bold">4. Compartilhamento</h2>
        <p className="mt-2">Podemos compartilhar dados com prestadores de serviço estritamente necessários para operação (por ex., provedores de e-mail). Não vendemos seus dados.</p>

        <h2 className="mt-6 font-sora text-2xl font-bold">5. Cookies</h2>
        <p className="mt-2">Utilizamos cookies essenciais (ex.: referência de afiliados) e de desempenho para melhorar a experiência. Você pode gerenciar cookies nas configurações do seu navegador.</p>

        <h2 className="mt-6 font-sora text-2xl font-bold">6. Direitos do titular</h2>
        <p className="mt-2">Você tem direito de acessar, corrigir e solicitar a exclusão dos seus dados, além de revogar consentimentos. Para exercer seus direitos, entre em contato.</p>

        <h2 className="mt-6 font-sora text-2xl font-bold">7. Retenção e segurança</h2>
        <p className="mt-2">Adotamos medidas técnicas e organizacionais para proteção. Mantemos seus dados somente pelo tempo necessário para as finalidades acima.</p>

        <h2 className="mt-6 font-sora text-2xl font-bold">8. Contato</h2>
        <p className="mt-2">Para dúvidas ou solicitações relacionadas a esta Política, contate: <a href="mailto:suporte@usa-dex.com.br" className="underline">suporte@usa-dex.com.br</a>.</p>
      </section>
    </main>
  )
}
