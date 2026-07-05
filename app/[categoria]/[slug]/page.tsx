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
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-ink/50 hover:text-moss-600 dark:text-ink-dark/50 dark:hover:text-moss-300"
      >
        <ArrowLeft size={14} />
        Voltar para o início
      </Link>

      <div className="mb-4 flex items-center gap-3">
        <Link
          href={`/${post.categoriaSlug}`}
          className="stamp-tag hover:bg-brass/20"
        >
          {post.categoria}
        </Link>
        {post.date && (
          <time
            dateTime={post.date}
            className="font-mono text-xs text-ink/40 dark:text-ink-dark/40"
          >
            {formatDate(post.date)}
          </time>
        )}
      </div>

      <h1 className="font-display text-3xl font-semibold leading-tight text-ink dark:text-ink-dark sm:text-4xl">
        {post.title}
      </h1>

      {post.description && (
        <p className="mt-4 text-lg text-ink/60 dark:text-ink-dark/60">
          {post.description}
        </p>
      )}

      <div className="prose prose-lg mt-10 max-w-none dark:prose-invert">
        <MDXRemote source={post.content} />
      </div>

      {post.tags.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-2 border-t border-ink/10 pt-6 dark:border-ink-dark/10">
          {post.tags.map((tag) => (
            <span key={tag} className="stamp-tag">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
