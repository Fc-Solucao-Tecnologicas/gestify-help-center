import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-body/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 h-14">
        <a
          href="https://gestify.app.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200 no-underline shrink-0 tracking-tight"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-solid text-[11px] font-extrabold text-body">
            G
          </div>
          Gestify
        </a>

        <nav className="flex items-center gap-2">
          <Link
            href="/busca"
            className="flex h-9 items-center gap-2 rounded-lg border border-white/10 px-3 text-[13px] font-medium text-zinc-400 transition-colors hover:border-white/20 hover:text-zinc-200"
          >
            <Search size={13} />
            Buscar
          </Link>

          <a
            href="https://gestify.app.br/login"
            className="flex items-center gap-1.5 rounded-lg bg-accent-solid px-[18px] py-[7px] text-sm font-semibold text-body transition-colors hover:bg-accent-hover"
          >
            Entrar
          </a>
        </nav>
      </div>
    </header>
  );
}
