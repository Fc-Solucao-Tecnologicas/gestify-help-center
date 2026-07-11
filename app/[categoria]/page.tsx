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
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-28">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-400 transition-colors hover:text-zinc-200"
      >
        <ArrowLeft size={13} />
        Voltar para o início
      </Link>

      <span className="tag mb-4">{label}</span>
      <h1
        className="mb-10 text-[30px] font-extrabold tracking-tight text-zinc-100"
        style={{ letterSpacing: "-0.03em" }}
      >
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
