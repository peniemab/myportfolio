import { ArrowUp } from "lucide-react";

export function ScrollTop() {
  return (
    <div className="fixed right-4 bottom-4 z-40">
      <a
        href="#accueil"
        className="flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-3 text-[var(--fg)] shadow-lg transition hover:bg-[var(--accent)] hover:text-white"
        aria-label="Retour en haut"
      >
        <ArrowUp />
      </a>
    </div>
  );
}
