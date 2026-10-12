# Soul Pet — Landing Page

Stack: React 19 + TypeScript + Vite + Tailwind CSS 4 + Motion (Framer Motion) + GSAP (ScrollTrigger) + lucide-react.

## Comandos

- `npm install` — instala dependências
- `npm run dev` — ambiente de desenvolvimento (Vite)
- `npm run build` — typecheck (`tsc -b`) + build de produção
- `npm run preview` — serve o build de produção localmente
- `npm run lint` — lint com oxlint

## Estrutura

- `src/data/siteContent.ts` — **todo o texto, links e dados editáveis do site** (WhatsApp, Instagram, endereço, serviços, depoimentos, FAQ, banner, medicina integrativa, categorias da galeria etc.)
- `src/components/layout` — Header (duas barras + sticky) e Footer
- `src/components/ui` — componentes reutilizáveis (Button, ServiceCard, Accordion, Lightbox, WhatsAppButton, SectionHeading, InstagramGlyph)
- `src/components/animations` — sistema global de animação (AnimatedSection, FadeIn, RevealText, StaggerContainer, HoverCard, ParallaxImage, ImageReveal, AnimatedButton, ScrollProgress, BackToTop)
- `src/components/sections` — seções da landing page, montadas em `src/App.tsx` (Hero, Introduction = "Sobre a Soul Pet", Banner, Services, IntegrativeCare = "Especialidades", Differentials, Gallery, About = "Conheça a Profissional", Testimonials, Instagram, CTA, FAQ, Contact)
- `public/images` — imagens otimizadas (webp) usadas no site, geradas a partir da pasta `imagens/` na raiz do repositório
- `public/favicon.png`, `apple-touch-icon.png` — gerados a partir da logomarca original

## Design tokens

Cores centralizadas em `src/styles/globals.css` (`:root`, variáveis `--color-primary`, `--color-secondary`, `--color-accent`, `--color-background`, `--color-surface`, `--color-text`, `--color-text-muted`), além das classes utilitárias Tailwind já existentes (`bg-sage`, `bg-deep-green`, `bg-ivory`, `bg-gold` etc.), todas extraídas da identidade visual original da Soul Pet (logomarca). Tipografia: Manrope (títulos), Inter (texto), Playfair Display (destaques editoriais pontuais via `.font-accent`).

## WhatsApp

Mensagens contextuais centralizadas em `whatsappLinks` (`src/data/siteContent.ts`):
- `schedule` — agendamento (CTAs principais)
- `service(nome)` — interesse em um serviço específico
- `contact` — contato geral

Número oficial: `WHATSAPP_NUMBER` (mesmo arquivo). Não há números fictícios.

## Informações pendentes de confirmação

- Horário de funcionamento completo (só é possível confirmar que abre segunda-feira às 08:30, conforme perfil do Google; os demais dias/horários não estão confirmados)
- Depoimentos exibidos em "Depoimentos" usam avaliações reais do Google, mas sem nome completo dos autores (não divulgado publicamente pelo Google) — identificados apenas como "Avaliação no Google"
- `canonical` e URLs em `index.html`/`public/sitemap.xml` usam o domínio provisório `https://soulpet.vet.br/` — atualizar ao publicar em domínio definitivo

## Dados do Google Business

Perfil verificado: "Soul Pet | Acupuntura e Veterinária Integrativa | Dra Suelen Leite"
- Endereço: Av 03 Qd 138 Lote M - Parque Industrial Mingone, Luziânia - GO, 72855-138
- Nota: 5,0 (48 avaliações)
- Esses dados estão centralizados em `src/data/siteContent.ts` (`ADDRESS`, `googleRating`, `GOOGLE_MAPS_EMBED_URL`)

## Deploy (GitHub Pages)

O projeto está configurado para publicação em `https://<usuario>.github.io/soulpet-veterinaria/`:

- `vite.config.ts` define `base: '/soulpet-veterinaria/'` (necessário por ser um project page, não um domínio próprio)
- Caminhos de imagem usam o helper `withBase()` (`src/data/siteContent.ts`) ou `%BASE_URL%` (em `index.html`) para funcionar corretamente no subcaminho
- `.github/workflows/deploy.yml` builda e publica automaticamente no GitHub Pages a cada push na branch `main`
- **Importante**: depois do primeiro push, habilite em *Settings → Pages → Source → GitHub Actions* no repositório

Se o domínio final não for um GitHub Pages project page (ex: domínio próprio ou `usuario.github.io` raiz), ajuste `base` para `'/'` novamente.
