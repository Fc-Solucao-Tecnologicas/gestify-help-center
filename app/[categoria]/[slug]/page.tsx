import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    categoria: post.categoriaSlug,
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { categoria: string; slug: string };
}) {
  const post = getPostBySlug(params.categoria, params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Central de Ajuda Gestify`,
    description: post.description,
  };
}

function formatDate(iso: string) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export default function PostPage({
  params,
}: {
  params: { categoria: string; slug: string };
}) {
  const post = getPostBySlug(params.categoria, params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 pb-20 pt-28">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-400 transition-colors hover:text-zinc-200"
      >
        <ArrowLeft size={13} />
        Voltar para o início
      </Link>

      <div className="mb-4 flex items-center gap-3">
        <Link href={`/${post.categoriaSlug}`} className="tag hover:bg-accent/20 transition-colors">
          {post.categoria}
        </Link>
        {post.date && (
          <time dateTime={post.date} className="text-[11px] text-zinc-600">
            {formatDate(post.date)}
          </time>
        )}
      </div>

      <h1
        className="text-[30px] font-extrabold leading-tight tracking-tight text-zinc-100 sm:text-[34px]"
        style={{ letterSpacing: "-0.03em" }}
      >
        {post.title}
      </h1>

      {post.description && (
        <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
          {post.description}
        </p>
      )}

      <div className="prose prose-lg mt-10 max-w-none">
        <MDXRemote source={post.content} />
      </div>

      {post.tags.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-2 border-t border-white/5 pt-6">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
