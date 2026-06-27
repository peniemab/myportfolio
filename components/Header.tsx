"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks } from "@/lib/site";
import { pageContainer } from "@/lib/layout";

export function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md">
        <nav
          className={`grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-4 ${pageContainer}`}
        >
          <a
            href="#accueil"
            className="text-xl font-bold tracking-tight text-[var(--fg)]"
          >
            PM
          </a>

          <ul className="hidden min-w-0 items-center justify-center gap-4 font-medium lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[var(--muted)] transition hover:text-[var(--fg)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-3">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              className="text-2xl text-[var(--fg)] lg:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </nav>
      </header>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)] text-lg lg:hidden"
          >
            <div className={`absolute top-0 left-0 right-0 flex h-16 items-center justify-between ${pageContainer}`}>
              <ThemeToggle />
              <button
                type="button"
                aria-label="Fermer le menu"
                className="text-2xl text-[var(--fg)]"
                onClick={close}
              >
                <X />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="text-2xl font-medium text-[var(--fg)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>,
          document.body,
        )}
    </>
  );
}
