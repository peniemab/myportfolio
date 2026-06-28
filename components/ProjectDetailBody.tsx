import type { ReactNode } from "react";
import { TechPillList } from "@/components/TechPill";
import type { Project } from "@/lib/projects";

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-16">
      <h2 className="mb-8 border-b border-[var(--border)] pb-3 text-sm font-medium tracking-wide text-[var(--fg)]">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function ProjectDetailBody({ project }: { project: Project }) {
  const hasRichContent =
    (project.features?.length ?? 0) > 0 || (project.stack?.length ?? 0) > 0;

  return (
    <>
      <div className="mt-8 w-full space-y-5 text-lg leading-relaxed text-[var(--muted)]">
        {project.description.split("\n\n").map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      {project.features && project.features.length > 0 && (
        <DetailSection title="Fonctionnalités">
          <ol className="grid gap-x-12 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <li
                key={feature}
                className="flex gap-4 border-b border-[var(--border)] py-4"
              >
                <span
                  className="w-7 shrink-0 pt-0.5 text-right text-xs tabular-nums text-[var(--accent)]"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-[var(--fg)]">
                  {feature}
                </span>
              </li>
            ))}
          </ol>
        </DetailSection>
      )}

      {project.stack && project.stack.length > 0 && (
        <DetailSection title="Stack technique">
          <TechPillList
            items={project.stack.flatMap((group) => group.items)}
            align="start"
          />
        </DetailSection>
      )}

      {!hasRichContent && project.tags.length > 0 && (
        <TechPillList className="mt-8" items={project.tags} align="start" />
      )}
    </>
  );
}
