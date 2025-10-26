"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import WaitlistModal from './WaitlistModal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Ouvir eventos globais para abrir o modal a partir de outros componentes
  useEffect(() => {
    const handler = () => setIsModalOpen(true)
    window.addEventListener('open-waitlist', handler as EventListener)
    return () => window.removeEventListener('open-waitlist', handler as EventListener)
  }, [])

  return (
    <>
      <section className="relative w-full overflow-hidden bg-brand-purple-dark px-4 py-12 sm:py-16 md:py-20">
        {/* Background decorativo */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/30 to-transparent" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-brand-yellow-solar/20 blur-3xl opacity-50 sm:h-96 sm:w-96" />
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-brand-purple-light/20 blur-3xl opacity-50 sm:h-96 sm:w-96" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Título e subtítulo */}
          <div className="text-center">
            <motion.div
              className="mb-3 inline-block rounded-full bg-brand-yellow-solar/20 px-4 py-2 text-sm font-semibold text-brand-yellow-solar sm:text-base"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              DEX+ para Agências
            </motion.div>

            <motion.h1
              className="font-sora text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Escale sua Gestão com{' '}
              <span className="relative inline-block">
                Automação Total
                <motion.svg
                  aria-hidden
                  className="pointer-events-none absolute left-0 right-0"
                  style={{ bottom: '-6px', width: '110%', height: '16px', marginLeft: '-5%' }}
                  viewBox="0 0 110 16"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M5 8 L 50 8 C 70 9, 90 10, 105 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="text-brand-yellow-solar"
                    strokeDasharray="120"
                    strokeDashoffset="120"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.8 }}
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Gerencie múltiplas contas iFood dos seus clientes em um só lugar. 
              Relatórios automáticos, insights em tempo real e muito mais.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mt-12 flex justify-center px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="group relative inline-flex w-full max-w-xs sm:max-w-sm lg:max-w-md">
                <span
                  aria-hidden
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-yellow-solar via-amber-300 to-brand-purple-light opacity-60 blur-lg transition duration-300 group-hover:opacity-80 group-hover:blur-xl"
                />
                <button
                  onClick={() => setIsModalOpen(true)}
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

            {/* Stats/Social Proof */}
            <motion.div
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 sm:gap-8 sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand-yellow-solar" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">Solução Confiável</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand-yellow-solar" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand-yellow-solar" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium">Setup Rápido</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
