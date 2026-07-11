export function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-accent-solid text-[9px] font-extrabold text-body">
            G
          </div>
          <span className="text-[13px] font-semibold text-zinc-200">
            Gestify
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-xs text-zinc-600">
          <a
            href="https://gestify.app.br"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-zinc-400"
          >
            Início
          </a>
          <a
            href="https://gestify.app.br/termos"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-zinc-400"
          >
            Termos
          </a>
          <a
            href="https://gestify.app.br/privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-zinc-400"
          >
            Privacidade
          </a>
          <a
            href="https://ajuda.gestify.app.br"
            className="no-underline transition-colors hover:text-zinc-400"
          >
            Ajuda
          </a>
        </nav>

        <p className="text-[11px] text-zinc-700">
          &copy; {new Date().getFullYear()} FC Soluções Tecnológicas LTDA.
        </p>
      </div>
    </footer>
  );
}
