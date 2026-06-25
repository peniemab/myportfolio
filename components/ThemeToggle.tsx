"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-[72px] shrink-0" aria-hidden />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Mode clair" : "Mode sombre"}
      className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1"
    >
      <span
        className={`rounded-full p-1.5 transition ${
          theme === "light" ? "bg-[var(--fg)] text-[var(--bg)]" : "text-[var(--muted)]"
        }`}
      >
        <Sun className="h-4 w-4" />
      </span>
      <span
        className={`rounded-full p-1.5 transition ${
          theme === "dark" ? "bg-[var(--fg)] text-[var(--bg)]" : "text-[var(--muted)]"
        }`}
      >
        <Moon className="h-4 w-4" />
      </span>
    </button>
  );
}
