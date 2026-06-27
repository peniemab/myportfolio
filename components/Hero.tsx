import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { site } from "@/lib/site";

export function Hero() {
  const roleFirst = site.title.split(" ").slice(0, 1)[0];
  const roleRest = site.title.split(" ").slice(1).join(" ");

  return (
    <section id="accueil" className="relative min-h-screen w-full">
      <div className="hero-inner">
        <h1
          className="hero-fade-up text-display-xl font-bold tracking-tight text-[var(--fg)]"
          style={{ ["--hero-delay" as string]: "0ms" }}
        >
          {site.name}
        </h1>
        <p
          className="hero-fade-up mt-4 text-display-xl font-bold tracking-tight text-[var(--fg)]"
          style={{ ["--hero-delay" as string]: "120ms" }}
        >
          {roleFirst}
        </p>
        <h2
          className="hero-fade-up text-gradient text-display-xl font-bold tracking-tight"
          style={{ ["--hero-delay" as string]: "240ms" }}
        >
          {roleRest}
        </h2>

        <p
          className="hero-fade-up mx-auto mt-8 max-w-xl text-[var(--muted)]"
          style={{ ["--hero-delay" as string]: "480ms" }}
        >
          {site.description}
        </p>

        <div
          className="hero-fade-up mt-10 flex flex-nowrap justify-center gap-2 sm:gap-4"
          style={{ ["--hero-delay" as string]: "600ms" }}
        >
          <a
            href="#contact"
            className="btn-interactive whitespace-nowrap rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 sm:px-8 sm:py-3 sm:text-base"
          >
            Me contacter
          </a>
          <a
            href="#projets"
            className="btn-interactive whitespace-nowrap rounded-full border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--fg)] hover:bg-[var(--surface)] sm:px-8 sm:py-3 sm:text-base"
          >
            Voir mes projets
          </a>
        </div>

        <div
          className="hero-fade-up mt-10 flex justify-center gap-6 text-2xl text-[var(--muted)]"
          style={{ ["--hero-delay" as string]: "720ms" }}
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-interactive transition hover:text-[var(--fg)]"
            aria-label="GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="icon-interactive transition hover:text-[var(--accent)]"
            aria-label="Email"
          >
            <Mail />
          </a>
        </div>
      </div>

      <a
        href="#apropos"
        className="hero-scroll icon-interactive text-[var(--muted)] transition hover:text-[var(--fg)]"
        aria-label="Aller a la section a propos"
      >
        <ArrowDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
