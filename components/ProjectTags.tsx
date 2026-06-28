"use client";

import { TechPillList } from "@/components/TechPill";

export function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <TechPillList className="mt-6" items={tags} animate staggerDelay={60} />
  );
}
