"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { ParallaxImage } from "@/components/ParallaxImage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { pageContainer } from "@/lib/layout";
import type { Project } from "@/lib/projects";

function projectName(title: string) {
  return title.split(",")[0].trim().toUpperCase();
}

function ProjectMedia({ project }: { project: Project }) {
  const previewImage = project.desktopImage ?? project.image;
  if (!previewImage) return null;

  return (
    <ParallaxImage
      src={previewImage}
      alt={`Aperçu ${project.title}`}
    />
  );
}

function ProjectActions({ project }: { project: Project }) {
  if (!project.id && !project.href) return null;

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {project.id && (
        <Link
          href={`/projets/${project.id}`}
          className="btn-interactive inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-2.5 text-sm font-medium text-[var(--fg)] hover:bg-[var(--surface)]"
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
          className="btn-interactive inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          Voir le site
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

export function FeaturedProject({
  project,
  isFirst = false,
}: {
  project: Project;
  isFirst?: boolean;
}) {
  return (
    <article className={isFirst ? "py-16" : "flex min-h-screen items-center py-24"}>
      <div className={`${pageContainer} text-center`}>
        <ScrollReveal>
          <h3 className="text-balance text-3xl font-bold tracking-tight break-words text-[var(--fg)] sm:text-4xl lg:text-5xl">
            {projectName(project.title)}
          </h3>
          <p className="mt-2 text-lg text-[var(--muted)]">
            {project.title.split(",").slice(1).join(",").trim()}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <ProjectMedia project={project} />
          <ProjectActions project={project} />
        </ScrollReveal>
      </div>
    </article>
  );
}
