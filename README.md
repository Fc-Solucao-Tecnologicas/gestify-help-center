# Central de Ajuda Gestify

Help center construído com **Next.js 14 (App Router)**, **Tailwind CSS** e **MDX**, com deploy pensado para a **Vercel**. Conteúdo baseado no guia `gestify-blog-ajuda.md`.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** + `@tailwindcss/typography`
- **MDX** via `next-mdx-remote` (conteúdo em `content/posts/<categoria>/*.mdx`)
- **next-themes** para modo escuro
- Busca client-side simples (sem serviço externo)

## Estrutura de URLs

Segue exatamente as slugs sugeridas no guia de conteúdo:

```
/                                              → home
/busca                                         → busca de artigos
/primeiros-passos                              → listagem da categoria
/primeiros-passos/como-cadastrar-profissional  → artigo
/agendamento/agendamento-online-pix            → artigo
/financeiro/taxa-gestify                       → artigo
...
```

## Categorias já configuradas (6, com 18 artigos)

| Categoria | Pasta | Artigos |
|---|---|---|
| Primeiros Passos | `content/posts/primeiros-passos` | 3 |
| Agendamento | `content/posts/agendamento` | 6 |
| Financeiro | `content/posts/financeiro` | 4 |
| Equipe e Acesso | `content/posts/equipe` | 2 |
| Painel e Relatórios | `content/posts/painel` | 3 |
| Integrações | `content/posts/integracoes` | 1 |

Os rótulos de exibição de cada categoria ficam centralizados em `lib/posts.ts`, na constante `CATEGORIA_LABELS`.

## Rodando localmente

**Você precisa ter Node.js 18+ instalado.** Se ainda não tem, baixe em [nodejs.org](https://nodejs.org) (versão LTS).

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

> Este projeto foi montado sem acesso à internet no ambiente de geração, então `npm install` e `npm run build` ainda não foram validados de ponta a ponta. Rode `npm run dev` localmente e revise antes do primeiro deploy — se algo quebrar, o erro do terminal costuma apontar exatamente o arquivo.

## Como adicionar um novo artigo

1. Escolha a categoria (pasta já existente) ou crie uma nova pasta em `content/posts/`.
2. Se for uma categoria nova, adicione o rótulo em `CATEGORIA_LABELS` (`lib/posts.ts`).
3. Crie o arquivo `.mdx`, seguindo o padrão do guia:

```mdx
---
title: "Como fazer X"
description: "Resumo curto que aparece nos cards e na busca."
date: "2026-07-04"
tags: ["exemplo"]
---

### O que você vai aprender
...

### Antes de começar
...

### Passo a passo
1. ...

### Resultado esperado
...

### Dúvidas relacionadas
- [Outro artigo](/categoria/slug-do-artigo)
```

O artigo aparece automaticamente na home, na busca e na página da categoria.

## Subindo para o repositório

O repositório de destino é:
`https://github.com/Fc-Solucao-Tecnologicas/gestify-help-center.git`

Como o repositório está vazio, dentro da pasta do projeto (depois de extrair o zip):

```bash
git init
git add .
git commit -m "Setup inicial da Central de Ajuda Gestify"
git branch -M main
git remote add origin https://github.com/Fc-Solucao-Tecnologicas/gestify-help-center.git
git push -u origin main
```

Se o repositório exigir autenticação, o GitHub vai pedir usuário/token (ou abrir o fluxo do Git Credential Manager) na hora do `push`.

## Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e importe `Fc-Solucao-Tecnologicas/gestify-help-center`.
2. Framework preset: **Next.js** (detectado automaticamente).
3. Nenhuma variável de ambiente é necessária para o conteúdo atual.
4. Clique em **Deploy**.
5. Depois, em **Settings → Domains**, adicione `ajuda.gestify.app.br` (domínio sugerido no guia) e aponte o DNS conforme instruído pela Vercel.

Cada push na branch `main` gera um novo deploy automaticamente.

## Próximos passos sugeridos

- Ajustar cores/fontes em `tailwind.config.ts` caso já exista uma identidade visual definida do Gestify.
- Configurar o domínio `ajuda.gestify.app.br`.
- Se o volume de artigos crescer muito, considerar Algolia ou Pagefind para busca full-text mais robusta.
- Manter este README e o guia de conteúdo atualizados conforme novas features do Gestify forem lançadas.
