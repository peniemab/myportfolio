import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectTags } from "@/components/ProjectTags";
import { getProjectById } from "@/lib/projects";
import { pageContainer } from "@/lib/layout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [{ slug: "bepas-log" }];
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

  const mobileImages = project?.mobileImages ?? [];
  const desktopImages = project?.desktopImages ?? [];

  if (!project || (mobileImages.length === 0 && desktopImages.length === 0)) {
    notFound();
  }

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

        {desktopImages.length > 0 && (
          <div className="mt-8 hidden md:block">
            <Gallery images={desktopImages} title={project.title} />
          </div>
        )}

        {mobileImages.length > 0 && (
          <div className="mt-8 md:hidden">
            <Gallery images={mobileImages} title={project.title} />
          </div>
        )}

        <p className="mt-8 text-lg leading-relaxed text-[var(--muted)]">
          {project.description}
        </p>

        <ProjectTags tags={project.tags} />
      </main>
      <Footer />
    </>
  );
}
