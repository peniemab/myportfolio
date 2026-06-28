import type { ReactNode } from "react";
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
          <dl className="w-full divide-y divide-[var(--border)]">
            {project.stack.map((group) => (
              <div
                key={group.category}
                className="grid gap-2 py-5 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-10"
              >
                <dt className="text-sm font-medium text-[var(--fg)]">
                  {group.category}
                </dt>
                <dd className="text-base leading-relaxed text-[var(--muted)]">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </DetailSection>
      )}

      {!hasRichContent && project.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm text-[var(--muted)]">
          {project.tags.map((tag, index) => (
            <span key={tag}>
              {index > 0 && <span className="mr-3 text-[var(--border)]">·</span>}
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
