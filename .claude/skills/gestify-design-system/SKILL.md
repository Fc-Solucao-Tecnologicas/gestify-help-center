---
name: gestify-design-system
description: >
  Design system e guia de UI/UX do ecossistema Gestify (FC Soluções Tecnológicas).
  Use esta skill SEMPRE que for criar, editar ou revisar qualquer arquivo de UI no
  repositório gestify-help-center (ajuda.gestify.app.br) ou no app studio-luxuosa.
  Isso inclui componentes (.tsx/.jsx), páginas, estilos globais (globals.css,
  tailwind.config.ts) e conteúdo MDX que afete a apresentação visual.
  Nunca crie ou modifique UI nesses projetos sem antes ler esta skill.
---

# Gestify Design System

Este documento é a fonte de verdade de design para o ecossistema Gestify.
Dois repositórios coexistem e precisam ter coerência visual de marca:

| Repo | Stack | URL |
|------|-------|-----|
| `felipevoigtsjb/studio-luxuosa` (branch `FeatureClaude`) | React 19 + Vite + Tailwind v4 + JS/.jsx | app interno SaaS |
| `Fc-Solucao-Tecnologicas/gestify-help-center` | Next.js 14 App Router + Tailwind v3 + TS/.tsx + MDX | ajuda.gestify.app.br |

O app é a **referência de design**. O help center deve refletir a mesma identidade de marca adaptada ao contexto de site público/documentação.

---

## 1. Paleta de Cores

### Cores canônicas do app (extraídas do código-fonte)

```
Backgrounds
  app-bg:          #fafafa   (body background)
  sidebar-bg:      #09090b   (zinc-950 — sidebar escura)
  card-bg:         #ffffff   (cards e modais)
  surface-muted:   #fafafa   (zinc-50 — fundos alternativos)

Textos
  text-primary:    #18181b   (zinc-900)
  text-secondary:  #52525b   (zinc-600)
  text-muted:      #71717a   (zinc-500)
  text-subtle:     #a1a1aa   (zinc-400)
  text-disabled:   #d4d4d8   (zinc-300)
  sidebar-text:    #a1a1aa   (zinc-400 — texto inativo sidebar)
  sidebar-active:  #ffffff   (texto ativo sidebar)

Bordas e divisores
  border-default:  #e4e4e7   (zinc-200)
  border-subtle:   #f4f4f5   (zinc-100)
  divider:         rgba(255,255,255,0.05)  (dentro da sidebar)

Primária (ações principais, botões, active states)
  indigo-600:      #4f46e5
  indigo-700:      #4338ca
  indigo-focus:    #6c8aff   (focus-ring global)

Estados semânticos
  success-bg:      #ecfdf5   (emerald-50)
  success-text:    #047857   (emerald-700)
  success-ring:    #a7f3d0   (emerald-200)
  success-dot:     #10b981   (emerald-500)

  warning-bg:      #fffbeb   (amber-50)
  warning-text:    #b45309   (amber-700)
  warning-ring:    #fde68a   (amber-200)
  warning-dot:     #f59e0b   (amber-400)
  warning-badge:   #f59e0b   (amber-500 — badges de contagem)

  error-bg:        #fef2f2   (red-50)
  error-text:      #dc2626   (red-600)
  error-ring:      #fecaca   (red-200)
  error-dot:       #f87171   (red-400)
  error-badge:     #ef4444   (red-500)

Gráficos e charts (paleta PALETTE do Dashboard)
  chart-primary:   #18181b
  chart-indigo:    #6366f1
  chart-orange:    #f97316
  chart-pink:      #ec4899
  chart-lime:      #84cc16
  chart-amber:     #f59e0b
  pie-blue-1:      #185FA5
  pie-blue-2:      #378ADD
  pie-blue-3:      #85B7EB
  pie-blue-4:      #B5D4F4
  chart-green:     #16a34a  (faturamento)
  chart-violet:    #6366f1  (agendamentos)
```

### Adaptação para o help center

O help center é um site público, não um SaaS app, então não usa a sidebar escura. A paleta de marca correta para o help center é derivada do app da seguinte forma:

```
Background principal:  #fafafa  (mesmo do app, NÃO o #EFF1EC "paper" atual)
Texto principal:       #18181b  (zinc-900 — mesmo do app)
Texto secundário:      #71717a  (zinc-500 — mesmo do app)
Cards / superfícies:   #ffffff  com border #e4e4e7 (zinc-200)
Cor de ação/link:      #4f46e5  (indigo-600 — NUNCA usar moss-green como primária)
Hover de ação:         #4338ca  (indigo-700)
Focus ring:            #6c8aff
Divisores:             #f4f4f5  (zinc-100)
Bordas:                #e4e4e7  (zinc-200)
```

> ⚠️ **PROIBIDO no help center**: a paleta "paper/ink/moss/brass" do design atual
> diverge completamente do app. Essas cores foram escolhidas pelo agente anterior
> sem consultar a identidade de marca real. **Remova-as ao refatorar.**
> Em particular: `#EFF1EC`, `#12140F`, `#1F2A24`, `#2F6F4E`, `#C9A227` não
> pertencem ao design system Gestify.

---

## 2. Tipografia

### App (referência canônica)

```css
font-family: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

| Uso | Classe Tailwind | Tamanho | Peso | Cor |
|-----|-----------------|---------|------|-----|
| Page title (Navbar) | `text-sm font-semibold` | 14px | 600 | zinc-900 |
| Section heading | `text-sm font-semibold` | 14px | 600 | zinc-700 |
| Card valor numérico grande | `text-2xl font-bold` | 24px | 700 | variado |
| Corpo / labels | `text-sm` | 14px | 400 | zinc-500 |
| Nav items | `text-[13px] font-medium` | 13px | 500 | zinc-400 / white |
| Badges / tags | `text-[11px] font-medium` | 11px | 500 | variado |
| Timestamps / meta | `text-xs` | 12px | 400 | zinc-400 |
| Labels de seção (uppercase) | `text-[10px] font-semibold uppercase tracking-widest` | 10px | 600 | zinc-600 |
| Monospace (horários, código) | `font-mono text-xs` | 12px | 400 | zinc-400/500 |

### Help center — tipografia correta

```
Font primária:   Inter (MESMA do app) — importar via next/font/google
Font display:    Inter bold (headings do help center NÃO usam serif)
Font mono:       IBM Plex Mono (ok manter para código inline)
```

> ⚠️ **Fraunces (serif display) não faz parte do design system Gestify.**
> O app usa exclusivamente Inter. Remova Fraunces ao refatorar o help center.
> IBM Plex Mono pode ser mantida apenas para blocos de código.

---

## 3. Componentes de UI — Especificações

### 3.1 Cards

```jsx
// Padrão canônico (do Dashboard e Navbar)
<div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-sm">
  {/* conteúdo */}
</div>

// Card clicável / com hover
<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5
                transition-all hover:shadow-md">

// Card com ring de foco ativo
<div className="bg-white rounded-xl border ring-2 ring-indigo-300 border-transparent shadow-sm p-5">
```

**Regras:**
- `rounded-xl` (12px) — nunca `rounded-lg` para card principal
- `border border-zinc-200` — borda padrão sutil
- `shadow-sm` — sombra suave em repouso; `shadow-xl` apenas em modais flutuantes
- `p-5` — padding interno padrão; `p-4` para cards compactos
- Sem background colorido nos cards (apenas `bg-white`)

### 3.2 Botões

```jsx
// Primário (ação principal)
<button className="text-xs px-3 py-1.5 rounded-lg bg-zinc-900 text-white
                   hover:bg-zinc-800 transition-colors font-medium">
  Aplicar
</button>

// Primário indigo (ações de sistema, active tabs)
<button className="px-3 py-1.5 text-xs font-medium rounded-md
                   bg-indigo-600 text-white transition-all">
  Confirmar
</button>

// Secundário / outline
<button className="text-xs px-3 py-1.5 rounded-lg border border-zinc-200
                   text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300
                   transition-colors font-medium">
  Cancelar
</button>

// Ghost / nav
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-md
                   text-[13px] font-medium text-zinc-500
                   hover:bg-white/5 hover:text-zinc-300 transition-colors">
  Sair
</button>

// Destrutivo
<button className="text-xs px-3 py-1.5 rounded-lg bg-red-500 text-white
                   hover:bg-red-600 transition-colors font-medium">
  Excluir
</button>
```

**Regras:**
- Border radius: `rounded-md` (6px) para botões inline pequenos; `rounded-lg` (8px) para botões de ação maiores
- Tamanho de fonte: `text-xs` (12px) para maioria dos botões; `text-sm` apenas quando o contexto exige maior legibilidade
- Sem `rounded-full` exceto em badges/avatares circulares
- Sempre `transition-colors` ou `transition-all`

### 3.3 Badges e Status

```jsx
// StatusBadge (ativo/inativo/pendente) — componente canônico
// ativo
<span className="inline-flex items-center gap-1.5 text-[11px] font-medium
                 px-2 py-0.5 rounded-md
                 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60">
  <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-emerald-500" />
  Ativo
</span>

// pendente
<span className="... bg-amber-50 text-amber-700 ring-1 ring-amber-200/60">
  <span className="... bg-amber-400" />
  Pendente
</span>

// inativo / erro
<span className="... bg-red-50 text-red-600 ring-1 ring-red-200/60">
  <span className="... bg-red-400" />
  Inativo
</span>

// Badge de contagem (notificação)
<span className="bg-red-500 text-white text-[10px] font-bold leading-none
                 px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
  3
</span>

// Badge de contagem amber (avisos)
<span className="bg-amber-500 text-white text-[10px] font-bold ...">
```

### 3.4 Inputs e Formulários

```jsx
// Input texto padrão
<input
  type="text"
  className="w-full text-sm border border-zinc-200 rounded-lg px-3 py-2
             text-zinc-700 placeholder:text-zinc-400
             focus:outline-none focus:ring-2 focus:ring-zinc-400
             transition"
/>

// Input com label
<div className="flex items-center gap-2">
  <label className="text-xs text-zinc-500 shrink-0">De:</label>
  <input className="flex-1 text-sm border border-zinc-200 rounded-lg
                    px-2 py-1.5 text-zinc-700
                    focus:outline-none focus:ring-2 focus:ring-zinc-400" />
</div>
```

**Regras:**
- Focus ring: `ring-2 ring-zinc-400` no app interno; `ring-2 ring-indigo-500` em contexto público (help center)
- Border: `border-zinc-200` sempre
- `rounded-lg` para inputs
- Sem box-shadow extra nos inputs — usar apenas o ring de foco

### 3.5 Modais

```jsx
// Estrutura canônica (componente Modal.jsx do app)
<div className="fixed inset-0 z-50 flex items-center justify-center p-4"
     role="dialog" aria-modal="true">
  {/* Backdrop */}
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
  {/* Container */}
  <div className="relative bg-white rounded-xl border border-zinc-200
                  shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto
                  animate-fade-in">
    {/* Header */}
    <div className="flex items-center justify-between px-5 py-4
                    border-b border-zinc-100">
      <h2 className="text-sm font-semibold text-zinc-900">{title}</h2>
      <button className="p-1.5 rounded-md text-zinc-400
                         hover:text-zinc-600 hover:bg-zinc-100 transition">
        <X className="w-4 h-4" />
      </button>
    </div>
    {/* Body */}
    <div className="px-5 py-5">{children}</div>
  </div>
</div>
```

### 3.6 Tabelas

```jsx
<table className="w-full text-sm">
  <thead>
    <tr className="text-left text-xs text-zinc-400 uppercase tracking-wide
                   border-b border-zinc-100">
      <th className="pb-2 pr-4 font-medium">Coluna</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-zinc-50">
    <tr className="hover:bg-zinc-50 transition-colors">
      <td className="py-2.5 pr-4 font-medium text-zinc-800">Valor</td>
      <td className="py-2.5 pr-4 text-zinc-500">Secundário</td>
    </tr>
  </tbody>
</table>
```

### 3.7 Navigation items (sidebar)

```jsx
// Ativo
className="flex items-center gap-3 px-3 py-2 rounded-md text-[13px]
           font-medium bg-white/10 text-white no-underline"

// Inativo / hover
className="... text-zinc-400 hover:bg-white/5 hover:text-zinc-200 transition-colors"

// Ícone ativo
className="w-4 h-4 shrink-0 text-white"
// Ícone inativo
className="w-4 h-4 shrink-0 text-zinc-500"
```

### 3.8 Empty States

```jsx
// Componente EmptyState canônico
<div className="flex flex-col items-center justify-center py-16 text-center">
  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center
                  justify-center mb-4 text-zinc-400">
    {icon}
  </div>
  <h3 className="text-sm font-semibold text-zinc-700 mb-1">{title}</h3>
  <p className="text-xs text-zinc-400 max-w-xs">{description}</p>
</div>
```

### 3.9 Toast / Feedback

```jsx
// Toast container: fixed bottom-5 right-5 z-50
// Item de toast
<div className="flex items-start gap-3 px-4 py-3 bg-white rounded-lg
                border border-zinc-200 shadow-lg min-w-[280px] max-w-sm">
  {/* ícone success: CheckCircle2 emerald-600 */}
  {/* ícone error: XCircle red-500 */}
  <p className="flex-1 text-xs font-medium text-zinc-700 leading-relaxed">
    Mensagem
  </p>
</div>
```

### 3.10 Seções de Label uppercase (separadores de seção)

```jsx
// Cabeçalho de seção dentro de painéis ou sidebars
<p className="text-[10px] font-semibold uppercase tracking-widest
              text-zinc-600 px-3 mb-1">
  Em breve
</p>

// Versão com linha abaixo (em cards)
<h2 className="font-mono text-xs uppercase tracking-wider
               text-zinc-400 mb-4">
  Artigos recentes
</h2>
```

---

## 4. Layout e Espaçamento

### App interno

```
Layout geral:    sidebar (w-56, bg-zinc-950) + main content area
Main padding:    `p-5` ou `p-6` na página, `space-y-5` entre seções
Navbar height:   h-12, sticky top-0, bg-white border-b border-zinc-100
Grid de cards:   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
```

### Help center — layout correto

```
Max-width container:   max-w-5xl mx-auto px-6
Padding vertical:      py-12 a py-16 nas páginas
Gap entre seções:      mb-12 a mb-14
Grid de cards:         grid gap-4 sm:grid-cols-2
Header:                border-b border-zinc-200, bg-white, sticky top-0
```

---

## 5. Ícones

Biblioteca padrão: **lucide-react** (mesma versão do app: `^1.7.0`)

Tamanhos canônicos:
- Sidebar nav: `w-4 h-4`
- Navbar actions: `w-4 h-4` (ações) / `w-3.5 h-3.5` (links)
- Botão de fechar modal: `w-4 h-4`
- Empty state: `w-5 h-5` a `w-6 h-6` dentro do container `w-12 h-12`
- Inline em texto: `w-4 h-4` com `inline`

> Nunca usar FontAwesome, Heroicons ou outros ícones — o projeto usa exclusivamente lucide-react.

---

## 6. Animações

```css
/* Definidas em index.css — usar EXATAMENTE estas */
@keyframes slide-in {
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-slide-in  { animation: slide-in 0.2s ease-out; }
.animate-fade-in   { animation: fade-in 0.15s ease-out; }
```

**Regras:**
- Transições de cor/hover: `transition-colors` (150ms padrão Tailwind)
- Transições complexas (shadow, transform): `transition-all duration-150`
- Modais: `animate-fade-in`
- Drawers móveis: `animate-slide-in`
- Skeleton loading: `animate-pulse bg-zinc-100`
- Respeitar `prefers-reduced-motion` — já tratado no CSS global

---

## 7. Acessibilidade

Requisitos obrigatórios em todos os componentes:

```jsx
// Focus ring global (já definido em index.css)
:focus-visible {
  outline: 2px solid #6c8aff;
  outline-offset: 2px;
  border-radius: 4px;
}

// Botão de fechar
<button aria-label="Fechar" />

// Modal
<div role="dialog" aria-modal="true" aria-label={title} />

// Toast
<div role="status" aria-live="polite" />

// Notificações
aria-label={`Notificações${count > 0 ? ` (${count} não lidas)` : ''}`}
```

- Todos os botões de ícone precisam de `aria-label`
- Imagens decorativas: `aria-hidden="true"`
- Sempre incluir `reduced-motion` media query em animações custom

---

## 8. Tailwind — Configuração por Repositório

### App (studio-luxuosa) — Tailwind v4

```css
/* index.css */
@import "tailwindcss";
/* sem tailwind.config.js — usa detecção automática v4 */
```

Não há arquivo `tailwind.config.js` separado. Todas as classes usadas são utilitárias padrão Tailwind + classes customizadas definidas em `@layer` no próprio CSS.

### Help center (gestify-help-center) — Tailwind v3

```ts
// tailwind.config.ts — REFATORAR para alinhar com o design system
// Remover: paper, ink, moss, brass, surface-dark
// Adicionar: aliases semânticos do Gestify
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        // Aliases semânticos — mapeiam para zinc/indigo do Tailwind padrão
        "g-bg":        "#fafafa",   // zinc-50
        "g-surface":   "#ffffff",
        "g-border":    "#e4e4e7",   // zinc-200
        "g-border-sub":"#f4f4f5",   // zinc-100
        "g-text":      "#18181b",   // zinc-900
        "g-text-2":    "#52525b",   // zinc-600
        "g-text-3":    "#71717a",   // zinc-500
        "g-text-4":    "#a1a1aa",   // zinc-400
        "g-primary":   "#4f46e5",   // indigo-600
        "g-primary-h": "#4338ca",   // indigo-700
        "g-focus":     "#6c8aff",
      },
      fontFamily: {
        // Inter como fonte única — sem serif display
        body:    ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "0.75rem", // rounded-xl = 12px
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
```

---

## 9. Padrões de Nomenclatura e Código

### Arquivos

```
Componentes:   PascalCase   → PostCard.tsx, SearchBox.tsx
Páginas:       PascalCase   → page.tsx (Next.js App Router)
Services/lib:  camelCase    → posts.ts, api.js
```

### JSX/TSX

```jsx
// ✅ Correto
const [loading, setLoading] = useState(false);
const { data, error } = useFetch();

// ✅ Props com defaults
function Card({ title, className = "" }) { ... }

// ✅ Lucide icons com tamanho explícito
<Search size={14} />
// ou
<Search className="w-4 h-4" />

// ❌ Nunca
var x = 1;
console.log(x); // remover antes de commit
```

### Commits

Seguir Conventional Commits:
```
feat: nova página de categoria
fix: corrigir hover em PostCard mobile
style: alinhar cores do header com design system
refactor: remover paleta moss/brass do tailwind.config
docs: atualizar README do help center
```

---

## 10. Checklist antes de criar ou editar qualquer UI

Antes de gerar qualquer código de interface, responda:

- [ ] **Paleta**: estou usando zinc/indigo/emerald/amber/red — e **não** moss/brass/paper/ink?
- [ ] **Tipografia**: estou usando Inter (sem Fraunces/serif para headings)?
- [ ] **Ícones**: estou usando lucide-react exclusivamente?
- [ ] **Cards**: `bg-white rounded-xl border border-zinc-200`?
- [ ] **Botão primário**: `bg-zinc-900` ou `bg-indigo-600` (nunca `bg-moss-500`)?
- [ ] **Border radius**: `rounded-xl` em cards, `rounded-lg` em inputs/botões maiores, `rounded-md` em botões pequenos?
- [ ] **Focus ring**: `ring-2 ring-indigo-500` (contexto público) ou `ring-2 ring-zinc-400` (app interno)?
- [ ] **Acessibilidade**: aria-label nos botões de ícone, role/aria-modal nos diálogos?
- [ ] **Animações**: apenas `animate-fade-in`, `animate-slide-in`, `animate-pulse` — sem animações customizadas novas?
- [ ] **Dark mode** (help center): tokens zinc equivalentes, sem lógica dark adicional desnecessária?

---

## 11. Anti-padrões — O que NUNCA fazer

| ❌ Anti-padrão | ✅ Correto |
|----------------|-----------|
| `bg-moss-500` como CTA | `bg-indigo-600` |
| `font-display` com Fraunces/serif | `font-body` Inter |
| `text-ink` / `text-paper` | `text-zinc-900` / `bg-zinc-50` |
| `rounded-full` em botões de ação | `rounded-md` ou `rounded-lg` |
| `shadow-2xl` em cards comuns | `shadow-sm` em cards, `shadow-xl` só em modais |
| `border-brass` em tags | `border-zinc-200` ou `ring-1 ring-zinc-200/60` |
| `.stamp-tag` (classe do agente anterior) | badge padrão com `ring-1 ring-zinc-200/60` |
| `bg-surface-dark` | `bg-zinc-950` (sidebar) ou `bg-white` |
| Fontes sem importar via `next/font` | sempre `next/font/google` |
| `fetch()` direto em componente | sempre via service layer |
| `var` | `const` / `let` |
| `console.log` em componentes | remover antes de commit |

---

## 12. Referência Rápida de Classes Mais Usadas

```
Textos:      text-zinc-900 / text-zinc-700 / text-zinc-500 / text-zinc-400
Backgrounds: bg-white / bg-zinc-50 / bg-zinc-100 / bg-zinc-950 (sidebar)
Bordas:      border-zinc-200 / border-zinc-100
Primária:    bg-indigo-600 text-white / hover:bg-indigo-700
Sucesso:     bg-emerald-50 text-emerald-700
Aviso:       bg-amber-50 text-amber-700
Erro:        bg-red-50 text-red-600
Cards:       bg-white rounded-xl border border-zinc-200 shadow-sm p-5
Tabela th:   text-xs text-zinc-400 uppercase tracking-wide
Tabela td:   text-sm text-zinc-800 (primário) / text-zinc-500 (secundário)
Skeleton:    bg-zinc-100 rounded animate-pulse
Divisor:     h-px bg-zinc-100 (ou border-b border-zinc-100)
```
