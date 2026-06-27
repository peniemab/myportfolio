import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { pageContainer } from "@/lib/layout";
import { featuredProjects, type Project } from "@/lib/projects";

function projectName(title: string) {
  return title.split(",")[0].trim().toUpperCase();
}

function ProjectMedia({ project }: { project: Project }) {
  const previewImage = project.desktopImage ?? project.image;
  if (!previewImage) return null;

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

function ProjectActions({ project }: { project: Project }) {
  if (!project.id && !project.href) return null;

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {project.id && (
        <Link
          href={`/projets/${project.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-2.5 text-sm font-medium text-[var(--fg)] transition hover:bg-[var(--surface)]"
        >
          Voir plus
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          Voir le site
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function FeaturedProject({
  project,
  isFirst = false,
}: {
  project: Project;
  isFirst?: boolean;
}) {
  return (
    <article className={isFirst ? "py-16" : "flex min-h-screen items-center py-24"}>
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
        <ProjectMedia project={project} />
        <ProjectActions project={project} />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projets" className="bg-[var(--bg)]">
      <div className={`${pageContainer} pb-5 pt-24 text-center`}>
        <p className="text-outline text-display-lg font-bold tracking-tight">
          Mes
        </p>
        <h2 className="text-gradient text-display-lg font-bold tracking-tight">
          Projets
        </h2>
      </div>

      <div>
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.title}
            project={project}
            isFirst={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
