import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen w-full">
      <div className="hero-inner">
        <p className="text-outline text-display-xl font-bold tracking-tight">
          Je suis
        </p>
        <h1 className="text-display-xl font-bold tracking-tight text-[var(--fg)]">
          {site.title.split(" ").slice(0, 1)[0]}
        </h1>
        <h2 className="text-gradient text-display-xl font-bold tracking-tight">
          {site.title.split(" ").slice(1).join(" ")}
        </h2>

        <p className="mt-8 text-lg font-medium text-[var(--fg)] lg:text-xl">
          {site.name}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
          {site.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-[var(--accent)] px-8 py-3 font-medium text-white transition hover:opacity-90"
          >
            Me contacter
          </a>
          <a
            href="#projets"
            className="rounded-full border border-[var(--border)] px-8 py-3 font-medium text-[var(--fg)] transition hover:bg-[var(--surface)]"
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
