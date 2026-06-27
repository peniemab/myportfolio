"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ScrollReveal className="stagger-tags mt-6 flex flex-wrap justify-center gap-3">
      {tags.map((tag, index) => (
        <span
          key={tag}
          className="stagger-tag rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--fg)]"
          style={{ ["--tag-delay" as string]: `${index * 60}ms` }}
        >
          {tag}
        </span>
      ))}
    </ScrollReveal>
  );
}
