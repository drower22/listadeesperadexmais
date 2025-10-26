import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-brand-purple-dark px-4 py-8 text-center">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} DEX+. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-xs text-white/40">
          Transformando a gestão de delivery com inteligência de dados
        </p>
      </div>
    </footer>
  )
}
