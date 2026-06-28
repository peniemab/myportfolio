import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PhotoCollage } from "@/components/PhotoCollage";
import { ProjectDetailBody } from "@/components/ProjectDetailBody";
import { featuredProjects, getProjectById } from "@/lib/projects";
import { pageContainer } from "@/lib/layout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return featuredProjects
    .filter((project) => project.id)
    .map((project) => ({ slug: project.id! }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  const summary =
    project.shortDescription ?? project.description.split("\n\n")[0] ?? project.description;

  return {
    title: `${project.title} | Peniel Mabanza`,
    description: summary,
  };
}

function PhotoCollageSection({
  images,
  title,
  label,
  className = "",
}: {
  images: string[];
  title: string;
  label: string;
  className?: string;
}) {
  if (images.length === 0) return null;

  return (
    <section className={`mt-14 ${className}`.trim()}>
      <h2 className="mb-6 text-sm font-semibold tracking-widest text-[var(--accent)] uppercase">
        Captures {label}
      </h2>
      <PhotoCollage images={images} title={title} />
    </section>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const desktopImages =
    project.id === "bepas-web"
      ? []
      : project.desktopImages ??
        (project.desktopImage
          ? [project.desktopImage]
          : project.image
            ? [project.image]
            : []);
  const mobileImages =
    project.id === "bepas-web"
      ? []
      : project.mobileImages ?? (project.mobileImage ? [project.mobileImage] : []);

  const subtitle = project.title.split(",").slice(1).join(",").trim();

  return (
    <>
      <Header />
      <main className={`page-shell pt-24 pb-16 ${pageContainer}`}>
        <Link
          href="/#projets"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--fg)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux projets
        </Link>

        <header className="w-full border-b border-[var(--border)] pb-8">
          <p className="text-sm font-medium tracking-widest text-[var(--accent)] uppercase">
            {project.id === "bepas-log" ? "Application de gestion pour BEPAS" : "Projet"}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[var(--fg)] sm:text-4xl">
            {project.title.split(",")[0].trim()}
          </h1>
          {subtitle && (
            <p className="mt-2 text-lg text-[var(--muted)]">{subtitle}</p>
          )}
        </header>

        <ProjectDetailBody project={project} />

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Voir le site
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}

        <PhotoCollageSection
          images={desktopImages}
          title={`${project.title} desktop`}
          label="desktop"
          className="hidden md:block"
        />

        <PhotoCollageSection
          images={mobileImages}
          title={`${project.title} mobile`}
          label="mobile"
        />
      </main>
      <Footer />
    </>
  );
}
