import { Code2, Layout, Server, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechPillList } from "@/components/TechPill";
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
          <ScrollReveal>
            <SectionHeading title="Mes Compétences" variant="display" />
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = icons[skill.icon];
              return (
                <ScrollReveal key={skill.title} delay={index * 80}>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <Icon className={`h-6 w-6 ${skill.color}`} />
                      <h2 className="text-xl font-semibold text-[var(--fg)]">
                        {skill.title}
                      </h2>
                    </div>
                    <p className="text-[var(--muted)]">{skill.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full border-t border-[var(--border)] bg-[var(--surface)] py-16">
        <div className={pageContainer}>
          <ScrollReveal>
            <h2 className="mb-10 text-center text-2xl font-semibold text-[var(--fg)]">
              Technologies & Outils
            </h2>
          </ScrollReveal>
          <TechPillList items={technologies} animate revealDelay={100} />
        </div>
      </section>
    </>
  );
}
