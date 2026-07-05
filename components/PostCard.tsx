import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

function formatDate(iso: string) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/${post.categoriaSlug}/${post.slug}`}
      className="group block rounded-card border border-ink/10 bg-surface p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-moss-500/50 dark:border-ink-dark/10 dark:bg-surface-dark"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="stamp-tag">{post.categoria}</span>
        <time
          dateTime={post.date}
          className="font-mono text-xs text-ink/40 dark:text-ink-dark/40"
        >
          {formatDate(post.date)}
        </time>
      </div>

      <h3 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-moss-600 dark:text-ink-dark dark:group-hover:text-moss-300">
        {post.title}
      </h3>

      {post.description && (
        <p className="mt-2 text-sm text-ink/60 dark:text-ink-dark/60">
          {post.description}
        </p>
      )}
    </Link>
  );
}
