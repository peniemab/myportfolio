import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { ProjectTags } from "@/components/ProjectTags";
import { pageContainer } from "@/lib/layout";
import { featuredProjects, type Project } from "@/lib/projects";

function projectName(title: string) {
  return title.split(",")[0].trim().toUpperCase();
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.id === "bepas-web") {
    const desktopImage = project.desktopImage ?? project.image;
    const mobileImage = project.mobileImage ?? project.image;

    return (
      <div className="mt-10 w-full overflow-hidden rounded-2xl border border-[var(--border)] shadow-2xl">
        {desktopImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={desktopImage}
            alt={`Aperçu desktop ${project.title}`}
            className="hidden aspect-video w-full object-cover object-top md:block"
            loading="lazy"
          />
        )}
        {mobileImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={mobileImage}
            alt={`Aperçu ${project.title}`}
            className="aspect-video w-full object-cover md:hidden"
            loading="lazy"
          />
        )}
      </div>
    );
  }

  if (project.id === "bepas-log") {
    const mobilePreview = project.mobileImages?.[0];
    const desktopPreview = project.desktopImages?.[0];
    const detailHref = `/projets/${project.id}`;

    return (
      <>
        <div className="mt-10 w-full overflow-hidden rounded-2xl border border-[var(--border)] shadow-2xl">
          {desktopPreview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={desktopPreview}
              alt={`Aperçu desktop ${project.title}`}
              className="hidden aspect-video w-full object-cover object-top md:block"
              loading="lazy"
            />
          )}
          {mobilePreview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={mobilePreview}
              alt="BEPAS Log sur mobile, aperçu"
              className="w-full object-cover md:hidden"
              loading="lazy"
            />
          )}
        </div>
        <Link
          href={detailHref}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-2.5 text-sm font-medium text-[var(--fg)] transition hover:bg-[var(--surface)]"
        >
          <span className="md:hidden">Voir plus</span>
          <span className="hidden md:inline">Voir toutes les captures</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </>
    );
  }

  const previewImage = project.desktopImage ?? project.image;
  if (previewImage) {
    return (
      <div className="mt-10 w-full overflow-hidden rounded-2xl border border-[var(--border)] shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={previewImage}
          alt={`Aperçu ${project.title}`}
          className="aspect-video w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    );
  }

  return null;
}

function FeaturedProject({ project }: { project: Project }) {
  const description =
    project.id === "bepas-log"
      ? (project.shortDescription ?? project.description)
      : project.description;

  return (
    <article className="flex min-h-screen items-center py-24">
      <div className={`${pageContainer} text-center`}>
        <p className="text-sm font-medium tracking-widest text-[var(--accent)] uppercase">
          Projet
        </p>
        <h3 className="mt-4 text-balance text-3xl font-bold tracking-tight break-words text-[var(--fg)] sm:text-4xl lg:text-5xl">
          {projectName(project.title)}
        </h3>
        <p className="mt-2 text-lg text-[var(--muted)]">
          {project.title.split(",").slice(1).join(",").trim()}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-[var(--muted)]">{description}</p>
        <ProjectTags tags={project.tags} />
        <ProjectMedia project={project} />
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Voir le site <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projets" className="bg-[var(--bg)]">
      <div className={`${pageContainer} py-24 text-center`}>
        <p className="text-outline text-display-lg font-bold tracking-tight">
          Mes
        </p>
        <h2 className="text-gradient text-display-lg font-bold tracking-tight">
          Projets
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[var(--muted)]">
          Une sélection de réalisations full stack, du site vitrine à
          l&apos;application métier.
        </p>
      </div>

      <div>
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
