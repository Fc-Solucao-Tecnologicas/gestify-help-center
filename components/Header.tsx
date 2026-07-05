import Link from "next/link";
import { Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const SITE_NAME = "Gestify Ajuda";

export function Header() {
  return (
    <header className="border-b border-ink/10 dark:border-ink-dark/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink dark:text-ink-dark"
        >
          {SITE_NAME}
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/busca"
            className="flex h-9 items-center gap-2 rounded-card border border-ink/10 px-3 text-sm text-ink/70 transition-colors hover:border-moss-500 hover:text-moss-600 dark:border-ink-dark/15 dark:text-ink-dark/70 dark:hover:border-moss-300 dark:hover:text-moss-300"
          >
            <Search size={14} />
            <span className="hidden sm:inline">Buscar</span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
