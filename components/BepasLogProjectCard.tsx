import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Project } from "@/lib/projects";

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-3">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function BepasLogProjectCard({ project }: { project: Project }) {
  const mobileImages = project.mobileImages ?? [];
  const desktopImages = project.desktopImages ?? [];
  const mobilePreview = mobileImages[0];
  const desktopPreview = desktopImages[0];
  const detailHref = `/projets/${project.id}`;

  return (
    <article>
      <h3 className="text-xl font-semibold">{project.title}</h3>

      {/* Desktop : aperçu + lien galerie */}
      <div className="mt-4 hidden md:block">
        {desktopPreview && (
          <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={desktopPreview}
              alt={`Aperçu desktop ${project.title}`}
              className="aspect-video w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        )}
        <p className="mt-4 text-gray-600">{project.description}</p>
        {desktopImages.length > 1 && (
          <Link
            href={detailHref}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
          >
            Voir toutes les captures
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
        <ProjectTags tags={project.tags} />
      </div>

      {/* Mobile : aperçu + lien vers la page détail */}
      <div className="mt-4 md:hidden">
        {mobilePreview && (
          <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mobilePreview}
              alt="BEPAS Log sur mobile, aperçu"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <p className="mt-4 text-gray-600">
          {project.shortDescription ?? project.description}
        </p>
        <Link
          href={detailHref}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
        >
          Voir plus
          <ChevronRight className="h-4 w-4" />
        </Link>
        <ProjectTags tags={project.tags} />
      </div>
    </article>
  );
}
