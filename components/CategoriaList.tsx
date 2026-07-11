import Link from "next/link";

type Categoria = { slug: string; label: string; count: number };

export function CategoriaList({ categorias }: { categorias: Categoria[] }) {
  if (categorias.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {categorias.map((categoria) => (
        <Link
          key={categoria.slug}
          href={`/${categoria.slug}`}
          className="tag transition-colors hover:bg-accent/[0.14]"
        >
          {categoria.label}
          <span className="text-accent/60">{categoria.count}</span>
        </Link>
      ))}
    </div>
  );
}
