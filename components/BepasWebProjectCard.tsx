import { ArrowUpRight } from "lucide-react";
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

export function BepasWebProjectCard({ project }: { project: Project }) {
  const desktopImage = project.desktopImage ?? project.image;
  const mobileImage = project.mobileImage ?? project.image;

  return (
    <article>
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <div className="relative mt-4 overflow-hidden rounded-xl bg-white shadow-md">
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

      <p className="mt-4 text-gray-600">{project.description}</p>
      <ProjectTags tags={project.tags} />

      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-medium text-gray-800 hover:underline"
        >
          Voir le site <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </article>
  );
}
