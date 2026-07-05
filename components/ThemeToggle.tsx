"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className="flex h-9 w-9 items-center justify-center rounded-card border border-ink/10 text-ink/70 transition-colors hover:border-moss-500 hover:text-moss-600 dark:border-ink-dark/15 dark:text-ink-dark/70 dark:hover:border-moss-300 dark:hover:text-moss-300"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
