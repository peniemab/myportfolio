import { Code2, Layout, Server, Zap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { pageContainer } from "@/lib/layout";
import { skills, technologies } from "@/lib/site";

const icons = {
  code: Code2,
  server: Server,
  layout: Layout,
  zap: Zap,
} as const;

export function Skills() {
  return (
    <>
      <section
        id="competences"
        className="border-t border-[var(--border)] bg-[var(--bg)] py-24"
      >
        <div className={pageContainer}>
          <SectionHeading title="Mes Compétences" variant="display" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skill) => {
              const Icon = icons[skill.icon];
              return (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className={`h-6 w-6 ${skill.color}`} />
                    <h2 className="text-xl font-semibold text-[var(--fg)]">
                      {skill.title}
                    </h2>
                  </div>
                  <p className="text-[var(--muted)]">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full border-t border-[var(--border)] bg-[var(--surface)] py-16">
        <div className={pageContainer}>
          <h2 className="mb-10 text-center text-2xl font-semibold text-[var(--fg)]">
            Technologies & Outils
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-[var(--fg)]"
            >
              {tech}
            </span>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
