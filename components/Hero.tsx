import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen w-full">
      <div className="hero-inner">
        <h1 className="text-display-xl font-bold tracking-tight text-[var(--fg)]">
          {site.name}
        </h1>
        <p className="mt-4 text-display-xl font-bold tracking-tight text-[var(--fg)]">
          {site.title.split(" ").slice(0, 1)[0]}
        </p>
        <h2 className="text-gradient text-display-xl font-bold tracking-tight">
          {site.title.split(" ").slice(1).join(" ")}
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-[var(--muted)]">
          {site.description}
        </p>

        <div className="mt-10 flex flex-nowrap justify-center gap-2 sm:gap-4">
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:px-8 sm:py-3 sm:text-base"
          >
            Me contacter
          </a>
          <a
            href="#projets"
            className="whitespace-nowrap rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--fg)] transition hover:bg-[var(--surface)] sm:px-8 sm:py-3 sm:text-base"
          >
            Voir mes projets
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-6 text-2xl text-[var(--muted)]">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--fg)]"
            aria-label="GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="transition hover:text-[var(--accent)]"
            aria-label="Email"
          >
            <Mail />
          </a>
        </div>
      </div>

      <a
        href="#apropos"
        className="hero-scroll text-[var(--muted)] transition hover:text-[var(--fg)]"
        aria-label="Aller a la section a propos"
      >
        <ArrowDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
