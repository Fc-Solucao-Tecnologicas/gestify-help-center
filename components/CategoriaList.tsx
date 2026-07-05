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
          className="stamp-tag transition-colors hover:bg-brass/20"
        >
          {categoria.label}
          <span className="text-brass-dark/60 dark:text-brass-light/60">
            {categoria.count}
          </span>
        </Link>
      ))}
    </div>
  );
}
