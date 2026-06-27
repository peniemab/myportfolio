import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectTags } from "@/components/ProjectTags";
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

  return {
    title: `${project.title} | Peniel Mabanza`,
    description: project.description,
  };
}

function Gallery({ images, title }: { images: string[]; title: string }) {
  return (
    <div className="space-y-4">
      {images.map((src, index) => (
        <div
          key={src}
          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-lg"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${title}, capture ${index + 1}`}
            className="w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const desktopImages =
    project.desktopImages ??
    (project.desktopImage
      ? [project.desktopImage]
      : project.image
        ? [project.image]
        : []);
  const mobileImages =
    project.mobileImages ?? (project.mobileImage ? [project.mobileImage] : []);

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

        <h1 className="text-3xl font-semibold text-[var(--fg)]">
          {project.title}
        </h1>

        <p className="mt-8 text-lg leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        <ProjectTags tags={project.tags} />

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Voir le site
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}

        {desktopImages.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-6 text-xl font-semibold text-[var(--fg)]">Desktop</h2>
            <Gallery images={desktopImages} title={`${project.title} desktop`} />
          </section>
        )}

        {mobileImages.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-6 text-xl font-semibold text-[var(--fg)]">Mobile</h2>
            <Gallery images={mobileImages} title={`${project.title} mobile`} />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
