import type { ReactNode } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { site } from "@/lib/site";

function RevealLine({
  children,
  className = "",
  delay,
}: {
  children: ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <span className={`reveal-line ${className}`.trim()} style={{ ["--line-delay" as string]: `${delay}ms` }}>
      <span className="reveal-line-inner">{children}</span>
    </span>
  );
}

export function Hero() {
  const roleFirst = site.title.split(" ").slice(0, 1)[0];
  const roleRest = site.title.split(" ").slice(1).join(" ");

  return (
    <section id="accueil" className="relative min-h-screen w-full">
      <div className="hero-inner">
        <h1 className="text-display-xl font-bold tracking-tight text-[var(--fg)]">
          <RevealLine delay={0}>{site.name}</RevealLine>
        </h1>
        <p className="mt-4 text-display-xl font-bold tracking-tight text-[var(--fg)]">
          <RevealLine delay={120}>{roleFirst}</RevealLine>
        </p>
        <h2 className="text-gradient text-display-xl font-bold tracking-tight">
          <RevealLine delay={240}>{roleRest}</RevealLine>
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
