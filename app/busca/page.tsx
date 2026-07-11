import { getAllPosts } from "@/lib/posts";
import { SearchBox } from "@/components/SearchBox";

export const metadata = {
  title: "Buscar artigos — Central de Ajuda Gestify",
};

export default function BuscaPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-28">
      <h1
        className="mb-8 text-[30px] font-extrabold tracking-tight text-zinc-100"
        style={{ letterSpacing: "-0.03em" }}
      >
        Buscar artigos
      </h1>
      <SearchBox posts={posts} />
    </div>
  );
}
