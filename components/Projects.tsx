import { FeaturedProject } from "@/components/FeaturedProject";
import { ScrollReveal } from "@/components/ScrollReveal";
import { pageContainer } from "@/lib/layout";
import { featuredProjects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projets" className="bg-[var(--bg)]">
      <div className={`${pageContainer} pb-5 pt-24 text-center`}>
        <ScrollReveal>
          <p className="text-outline text-display-lg font-bold tracking-tight">
            Mes
          </p>
          <h2 className="text-gradient text-display-lg font-bold tracking-tight">
            Projets
          </h2>
        </ScrollReveal>
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
