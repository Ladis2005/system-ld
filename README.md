# LSN Web Studio

Website premium, moderno e interativo com identidade visual **3D** para a
agência de desenvolvimento **LSN Web Studio**. Construído para transmitir
tecnologia, inovação, profissionalismo, segurança e confiança — e para
transformar visitantes em clientes.

![Stack](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-r169-000000?logo=three.js)

---

## ✨ Funcionalidades

- **Hero 3D interativo** — portátil, tablet e smartphone com composição de
  objetos flutuantes (código, Git, GitHub, geometria) que reagem ao cursor.
- **Cabeçalho transparente** que se torna sólido ao fazer scroll.
- **Cartões 3D** com efeito de inclinação (tilt) que reagem ao rato.
- **Secção Git & GitHub** com fluxo de trabalho, terminal animado e cartões de
  repositórios (ligação à API pública do GitHub, com projetos demonstrativos
  como fallback).
- **Portfólio** com mockups e páginas de detalhe por projeto.
- **Linha de tempo** do processo com revelação progressiva ao scroll.
- **Testemunhos** em carrossel automático.
- **FAQ** em acordeão animado.
- **Formulário de contacto** com validação, estados de sucesso/erro e
  integração de e-mail preparada.
- **Botão flutuante de WhatsApp**.
- **Performance e acessibilidade**: carregamento lazy do 3D, fallback estático
  sem WebGL, respeito por `prefers-reduced-motion`, imagens otimizadas com
  `next/image`, metadados de SEO, `sitemap.xml` e `robots.txt`.

---

## 🧱 Tecnologias

Next.js · React · TypeScript · Tailwind CSS · Framer Motion · Three.js ·
React Three Fiber · Drei · Lucide Icons · Git · GitHub · Vercel

---

## 📁 Estrutura do projeto

```
lsn-web-studio/
├── public/                     # Recursos estáticos
├── src/
│   ├── app/
│   │   ├── api/contact/        # Endpoint de exemplo (e-mail)
│   │   ├── projetos/[slug]/    # Páginas de detalhe de projeto
│   │   ├── globals.css         # Estilos globais + tokens da marca
│   │   ├── layout.tsx          # Layout raiz, fontes e SEO
│   │   ├── page.tsx            # Página principal
│   │   ├── sitemap.ts          # Geração do sitemap
│   │   ├── robots.ts           # Geração do robots.txt
│   │   ├── icon.svg            # Favicon
│   │   └── not-found.tsx       # Página 404
│   ├── components/
│   │   ├── sections/           # Secções da página (Hero, Serviços, etc.)
│   │   ├── three/              # Componentes 3D (cena, dispositivos, objetos)
│   │   └── ui/                 # Componentes reutilizáveis
│   ├── data/                   # Conteúdo estruturado (serviços, projetos…)
│   └── lib/                    # Configuração, hooks e utilitários
├── .env.example                # Variáveis de ambiente de exemplo
├── .gitignore
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Instalação e execução

**Pré-requisitos:** Node.js 18.17+ e npm.

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env.local
# edite .env.local com os seus valores

# 3. Ambiente de desenvolvimento
npm run dev
# abra http://localhost:3000

# 4. Build de produção
npm run build
npm run start
```

---

## 🔐 Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_GITHUB_USERNAME` | Utilizador do GitHub cujos repositórios são apresentados. |
| `GITHUB_TOKEN` | (Opcional) Token para aumentar o limite da API do GitHub. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp (formato internacional, sem `+`). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail de destino do formulário. |
| `NEXT_PUBLIC_SITE_URL` | URL público do site (sitemap/metadados). |

> Enquanto `NEXT_PUBLIC_GITHUB_USERNAME` for `SEU-USUARIO`, a secção GitHub
> mostra **projetos demonstrativos**, fáceis de substituir.

---

## 🗂️ Controlo de versões com Git e GitHub

```bash
git init
git add .
git commit -m "feat: versão inicial do projeto"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Sugestão de convenção de commits (Conventional Commits):
`feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`.

---

## ▲ Publicação na Vercel

1. Envie o projeto para um repositório no GitHub (passos acima).
2. Aceda a [vercel.com](https://vercel.com) e clique em **Add New → Project**.
3. Importe o repositório da LSN Web Studio.
4. A Vercel deteta o Next.js automaticamente (sem configuração extra).
5. Em **Environment Variables**, adicione as variáveis do `.env.example`.
6. Clique em **Deploy**. Em segundos o site fica online. 🎉

Cada `git push` para `main` gera um novo deploy automático.

---

## ✉️ Integração de e-mail (opcional)

O formulário já faz o fallback via `mailto:`. Para envio automático:

1. Crie uma conta em [Resend](https://resend.com) e obtenha uma API key.
2. `npm install resend` e defina `RESEND_API_KEY` no ambiente.
3. Descomente o bloco de exemplo em `src/app/api/contact/route.ts`.
4. No `Contact.tsx`, troque a simulação por um `fetch("/api/contact", …)`.

---

## ⚡ Notas de desempenho

- A cena 3D é carregada de forma **lazy** e desativada quando não há WebGL ou
  quando o utilizador prefere menos movimento.
- `dpr` reduzido em telemóveis; geometrias leves e materiais simples.
- Imagens servidas via `next/image` (AVIF/WebP).
- Metadados, `sitemap.xml` e `robots.txt` prontos para SEO.

---

## 📄 Licença

Projeto proprietário da **LSN Web Studio**.
© 2026 LSN Web Studio. Todos os direitos reservados.

> Desenvolvido com React, Next.js, Three.js e Git.
