import { getAllPosts } from "@/lib/posts";
import { SearchBox } from "@/components/SearchBox";

export const metadata = {
  title: "Buscar artigos — Central de Ajuda Gestify",
};

export default function BuscaPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
        Buscar artigos
      </h1>
      <SearchBox posts={posts} />
    </div>
  );
}
