# DEX+ Squeeze Page

Página de captura para lista de espera do DEX+ voltada para agências, consultores e mentores que gerenciam múltiplas contas iFood.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações

## 🎨 Design

Utiliza a mesma identidade visual do DEX:
- **Cores**: Roxo escuro (#2b0148), Amarelo solar (#FFD53D), Roxo claro (#BDA3E1)
- **Fontes**: Sora (títulos) e Inter (corpo)
- **Abordagem**: Mobile-first

## 📋 Formulário

Captura as seguintes informações:
- Nome completo
- WhatsApp
- E-mail
- Quantidade de contas iFood administradas (lista suspensa)

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento (porta 3001)
npm run dev

# Build para produção
npm run build

# Rodar produção
npm start
```

## 📁 Estrutura

```
dex-plus-squeeze/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Hero.tsx          # Seção principal com formulário
│       ├── Benefits.tsx      # Benefícios e diferenciais
│       └── Footer.tsx        # Rodapé
├── public/
│   └── dex-logo.png
└── tailwind.config.ts
```

## 🔗 Integração

O formulário atualmente loga os dados no console. Para integrar com um backend:

1. Edite a função `handleSubmit` em `src/components/Hero.tsx`
2. Adicione chamada à sua API ou serviço (ex: Google Sheets, Mailchimp, webhook)

Exemplo:
```typescript
const response = await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

## 📱 Responsividade

Design totalmente responsivo com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
