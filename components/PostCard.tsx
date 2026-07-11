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
      className="card group block p-5 transition-all hover:-translate-y-0.5 hover:border-accent/30"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="tag text-[10px]">
          {post.categoria}
        </span>
        <time dateTime={post.date} className="text-[11px] text-zinc-600">
          {formatDate(post.date)}
        </time>
      </div>

      <h3 className="text-[15px] font-semibold leading-snug text-zinc-200 transition-colors group-hover:text-accent">
        {post.title}
      </h3>

      {post.description && (
        <p className="mt-2 text-[13px] leading-relaxed text-zinc-600">
          {post.description}
        </p>
      )}
    </Link>
  );
}
