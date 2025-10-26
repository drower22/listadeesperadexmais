import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple-dark': '#2b0148',
        'brand-yellow-solar': '#FFD53D',
        'brand-purple-light': '#BDA3E1',
        'brand-gray-lilac': '#F4F1FA',
        'brand-black-charcoal': '#222222',
        'brand-whatsapp-bg': '#DCF8C6',
      },
      fontFamily: {
        sora: ['var(--font-sora)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config
