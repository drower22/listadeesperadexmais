"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    quantidadeContas: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Bloqueia scroll quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Falha ao enviar formulário')
      }

      setSubmitStatus('success')

      setTimeout(() => {
        setFormData({ nome: '', whatsapp: '', email: '', quantidadeContas: '' })
        setSubmitStatus('idle')
        onClose()
      }, 2000)
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-brand-purple-dark p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Botão fechar */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
              aria-label="Fechar"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="mb-6 text-center font-sora text-2xl font-bold text-white sm:text-3xl">
              Entre na Lista de Espera
            </h2>

            {submitStatus === 'success' ? (
              <motion.div
                className="rounded-lg border border-green-500/30 bg-green-500/20 p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="mb-3 flex justify-center">
                  <svg className="h-16 w-16 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-green-400">
                  Cadastro realizado com sucesso!
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Em breve entraremos em contato.
                </p>
              </motion.div>
            ) : submitStatus === 'error' ? (
              <motion.div
                className="rounded-lg border border-red-500/30 bg-red-500/20 p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="mb-3 flex justify-center">
                  <svg className="h-16 w-16 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-red-300">
                  Ocorreu um erro ao enviar. Tente novamente.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nome" className="mb-2 block text-sm font-medium text-white/90">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition focus:border-brand-yellow-solar focus:outline-none focus:ring-2 focus:ring-brand-yellow-solar/50"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-white/90">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition focus:border-brand-yellow-solar focus:outline-none focus:ring-2 focus:ring-brand-yellow-solar/50"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/90">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition focus:border-brand-yellow-solar focus:outline-none focus:ring-2 focus:ring-brand-yellow-solar/50"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="quantidadeContas" className="mb-2 block text-sm font-medium text-white/90">
                    Quantas contas iFood você administra hoje? *
                  </label>
                  <select
                    id="quantidadeContas"
                    name="quantidadeContas"
                    value={formData.quantidadeContas}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition focus:border-brand-yellow-solar focus:outline-none focus:ring-2 focus:ring-brand-yellow-solar/50"
                  >
                    <option value="" className="bg-brand-purple-dark">Selecione uma opção</option>
                    <option value="20-50" className="bg-brand-purple-dark">20 a 50 contas</option>
                    <option value="51-100" className="bg-brand-purple-dark">51 a 100 contas</option>
                    <option value="101-200" className="bg-brand-purple-dark">101 a 200 contas</option>
                    <option value="201-300" className="bg-brand-purple-dark">201 a 300 contas</option>
                    <option value="301-500" className="bg-brand-purple-dark">301 a 500 contas</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-brand-yellow-solar px-8 py-4 font-sora text-lg font-extrabold text-brand-purple-dark shadow-xl ring-2 ring-brand-yellow-solar/40 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Quero Entrar na Lista'}
                </button>

                <p className="text-center text-xs text-white/60">
                  Ao enviar, você concorda em receber comunicações sobre o DEX+
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
