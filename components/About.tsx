import Image from "next/image";
import { pageContainer } from "@/lib/layout";

export function About() {
  return (
    <section
      id="apropos"
      className="border-t border-[var(--border)] bg-[var(--surface)] py-24"
    >
      <div className={pageContainer}>
        <div className="mb-16 text-center">
          <p className="text-outline text-display-lg font-bold tracking-tight">
            À propos
          </p>
          <h2 className="text-display-lg font-bold tracking-tight text-[var(--fg)]">
            de moi
          </h2>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] shadow-xl">
            <Image
              src="/images/workspace-peniel.png"
              alt="Espace de travail de Peniel Mabanza"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="text-lg leading-relaxed text-[var(--muted)]">
            <p className="mb-6">
              Passionné par le code et par l&apos;innovation digitale, j&apos;aime
              concevoir des solutions complètes qui allient esthétique, fluidité
              et fonctionnalité. Je travaille avec les technologies JavaScript
              modernes pour garantir des projets fiables et évolutifs.
            </p>
            <p>
              Que ce soit pour un site vitrine, une application web, un tableau de
              bord ou une refonte totale, j&apos;apporte mon savoir-faire pour
              transformer vos idées en un produit professionnel et efficace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
