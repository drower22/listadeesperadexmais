"use client"
import React from 'react'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Automação Completa',
    description: 'Dados de todas as contas sincronizados automaticamente, sem trabalho manual.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Dashboard Unificado',
    description: 'Visualize o desempenho de todos os seus clientes em um único painel.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: 'Relatórios no WhatsApp',
    description: 'Seus clientes recebem análises diárias direto no WhatsApp, sem precisar acessar plataformas.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Mais Margem de Lucro',
    description: 'Reduza horas de trabalho manual e aumente sua capacidade de atender mais clientes.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Insights Inteligentes',
    description: 'IA analisa padrões e sugere ações para melhorar resultados dos seus clientes.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Segurança e Privacidade',
    description: 'Dados criptografados e isolados por cliente. Total conformidade com LGPD.',
  },
]

const differentials = [
  'Suporte prioritário para agências',
  'Onboarding personalizado',
  'Sua logo nos relatórios',
  'API para integração',
  'Treinamento da equipe',
  'Gestor de contas dedicado',
]

export default function Benefits() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:py-20 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        {/* Benefícios */}
        <div className="mb-16 text-center sm:mb-20">
          <motion.h2
            className="font-sora text-3xl font-extrabold text-brand-purple-dark sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Por que escolher o DEX+?
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-brand-black-charcoal/70 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tudo que você precisa para escalar sua operação
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="rounded-2xl border border-brand-purple-dark/10 bg-brand-gray-lilac p-6 shadow-sm transition hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-purple-dark/10 text-brand-purple-dark">
                {benefit.icon}
              </div>
              <h3 className="mb-2 font-sora text-xl font-bold text-brand-purple-dark">
                {benefit.title}
              </h3>
              <p className="text-brand-black-charcoal/70">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Diferenciais */}
        <motion.div
          className="mt-16 rounded-2xl bg-brand-purple-dark p-8 sm:mt-20 sm:p-10 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-8 text-center font-sora text-2xl font-bold text-white sm:text-3xl">
            Diferenciais Exclusivos para Agências
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((differential, index) => (
              <motion.div
                key={differential}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-brand-yellow-solar">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-brand-purple-dark"
                    fill="currentColor"
                  >
                    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                  </svg>
                </div>
                <span className="font-medium text-white">{differential}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          className="mt-10 flex justify-center px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="group relative inline-flex w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <span
              aria-hidden
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-yellow-solar via-amber-300 to-brand-purple-light opacity-60 blur-lg transition duration-300 group-hover:opacity-80 group-hover:blur-xl"
            />
            <button
              onClick={() => window.dispatchEvent(new Event('open-waitlist'))}
              className="relative flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-yellow-solar via-amber-200 to-brand-yellow-solar px-8 py-4 font-sora text-base font-extrabold text-brand-purple-dark shadow-[0_20px_45px_-15px_rgba(255,213,61,0.75)] transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-brand-yellow-solar/50 sm:px-10 sm:py-5 sm:text-lg"
            >
              <span>Quero ser o primeiro a testar</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-purple-dark/10 text-brand-purple-dark transition-colors duration-200 group-hover:bg-brand-purple-dark/20">
                <svg
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
