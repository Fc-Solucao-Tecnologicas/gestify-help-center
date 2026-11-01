import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

// Rótulo de exibição de cada categoria, indexado pelo slug da pasta.
// Mantenha isso em sincronia com os nomes de pasta dentro de content/posts.
export const CATEGORIA_LABELS: Record<string, string> = {
  "primeiros-passos": "Primeiros Passos",
  agendamento: "Agendamento",
  financeiro: "Financeiro",
  equipe: "Equipe e Acesso",
  painel: "Painel e Relatórios",
  integracoes: "Integrações",
  modulos: "Módulos",
};

export type PostMeta = {
  slug: string;
  categoriaSlug: string;
  categoria: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export type Post = PostMeta & {
  content: string;
};

function listCategoriaSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function readPostFile(categoriaSlug: string, slug: string): Post | null {
  const fullPath = path.join(POSTS_DIR, categoriaSlug, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    categoriaSlug,
    categoria: CATEGORIA_LABELS[categoriaSlug] ?? categoriaSlug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    tags: data.tags ?? [],
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const categorias = listCategoriaSlugs();

  const posts = categorias.flatMap((categoriaSlug) => {
    const dir = path.join(POSTS_DIR, categoriaSlug);
    return fs
      .readdirSync(dir)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const post = readPostFile(categoriaSlug, slug);
        if (!post) return null;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { content, ...meta } = post;
        return meta;
      })
      .filter((p): p is PostMeta => p !== null);
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(
  categoriaSlug: string,
  slug: string
): Post | null {
  return readPostFile(categoriaSlug, slug);
}

export function getAllCategorias(): { slug: string; label: string; count: number }[] {
  const posts = getAllPosts();
  const slugs = listCategoriaSlugs();

  return slugs
    .map((slug) => ({
      slug,
      label: CATEGORIA_LABELS[slug] ?? slug,
      count: posts.filter((p) => p.categoriaSlug === slug).length,
    }))
    .filter((c) => c.count > 0);
}

export function getPostsByCategoria(categoriaSlug: string): PostMeta[] {
  return getAllPosts().filter((p) => p.categoriaSlug === categoriaSlug);
}
