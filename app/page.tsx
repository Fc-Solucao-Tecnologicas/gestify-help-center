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
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-28">
      <section className="mb-16 max-w-2xl">
        <span className="tag mb-5">Central de Ajuda Gestify</span>
        <h1 className="text-[36px] font-extrabold leading-tight tracking-tight text-zinc-100 sm:text-[42px]" style={{ letterSpacing: "-0.03em" }}>
          Encontre a resposta certa, sem precisar abrir um chamado.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-zinc-600">
          Artigos organizados por categoria — do primeiro profissional
          cadastrado até o fechamento do mês no financeiro.
        </p>
        <Link
          href="/busca"
          className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent-solid px-5 py-[10px] text-sm font-semibold text-body transition-colors hover:bg-accent-hover"
        >
          Buscar um artigo
          <ArrowRight size={16} />
        </Link>
      </section>

      {categorias.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-600">
            Categorias
          </h2>
          <CategoriaList categorias={categorias} />
        </section>
      )}

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600">
            Artigos recentes
          </h2>
          <Link
            href="/busca"
            className="text-[13px] text-accent underline transition-colors hover:text-accent-solid"
          >
            Ver todos
          </Link>
        </div>

        {destaques.length === 0 ? (
          <div className="card flex items-center justify-center p-10">
            <p className="text-sm text-zinc-600">
              Nenhum artigo publicado ainda.
            </p>
          </div>
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
