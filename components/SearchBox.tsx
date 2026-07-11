"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { PostMeta } from "@/lib/posts";
import { PostCard } from "./PostCard";

export function SearchBox({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;

    return posts.filter((post) => {
      const haystack = [
        post.title,
        post.description,
        post.categoria,
        ...post.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query, posts]);

  return (
    <div>
      <div className="relative">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por palavra-chave, categoria ou tag..."
          className="w-full rounded-xl border border-white/10 bg-card py-3.5 pl-11 pr-4 text-sm text-zinc-200 outline-none transition-colors focus:border-accent/40 placeholder:text-zinc-600"
        />
      </div>

      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-600">
        {results.length}{" "}
        {results.length === 1 ? "artigo encontrado" : "artigos encontrados"}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {results.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
