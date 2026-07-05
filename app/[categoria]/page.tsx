import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getAllCategorias,
  getPostsByCategoria,
  CATEGORIA_LABELS,
} from "@/lib/posts";
import { PostCard } from "@/components/PostCard";

export function generateStaticParams() {
  return getAllCategorias().map((c) => ({ categoria: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { categoria: string };
}) {
  const label = CATEGORIA_LABELS[params.categoria];
  if (!label) return {};
  return { title: `${label} — Central de Ajuda Gestify` };
}

export default function CategoriaPage({
  params,
}: {
  params: { categoria: string };
}) {
  const label = CATEGORIA_LABELS[params.categoria];
  if (!label) notFound();

  const posts = getPostsByCategoria(params.categoria);
  if (posts.length === 0) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-ink/50 hover:text-moss-600 dark:text-ink-dark/50 dark:hover:text-moss-300"
      >
        <ArrowLeft size={14} />
        Voltar para o início
      </Link>

      <span className="stamp-tag mb-4">{label}</span>
      <h1 className="mb-8 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
        Artigos sobre {label.toLowerCase()}
      </h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
