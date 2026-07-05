import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts, getAllCategorias } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { CategoriaList } from "@/components/CategoriaList";

export default function HomePage() {
  const posts = getAllPosts();
  const categorias = getAllCategorias();
  const destaques = posts.slice(0, 6);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-14 max-w-2xl">
        <span className="stamp-tag mb-5">Central de Ajuda Gestify</span>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink dark:text-ink-dark sm:text-5xl">
          Encontre a resposta certa, sem precisar abrir um chamado.
        </h1>
        <p className="mt-5 text-lg text-ink/60 dark:text-ink-dark/60">
          Artigos organizados por categoria — do primeiro profissional
          cadastrado até o fechamento do mês no financeiro.
        </p>
        <Link
          href="/busca"
          className="mt-7 inline-flex items-center gap-2 rounded-card bg-moss-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-moss-600"
        >
          Buscar um artigo
          <ArrowRight size={16} />
        </Link>
      </section>

      {/* Categorias */}
      {categorias.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-ink/40 dark:text-ink-dark/40">
            Categorias
          </h2>
          <CategoriaList categorias={categorias} />
        </section>
      )}

      {/* Posts recentes */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-wider text-ink/40 dark:text-ink-dark/40">
            Artigos recentes
          </h2>
          <Link
            href="/busca"
            className="text-sm text-moss-600 hover:underline dark:text-moss-300"
          >
            Ver todos
          </Link>
        </div>

        {destaques.length === 0 ? (
          <p className="rounded-card border border-dashed border-ink/15 p-8 text-center text-sm text-ink/50 dark:border-ink-dark/15 dark:text-ink-dark/50">
            Nenhum artigo publicado ainda. Adicione arquivos .mdx em{" "}
            <code className="font-mono">content/posts</code>.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {destaques.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
