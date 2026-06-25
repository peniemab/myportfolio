export function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--fg)]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
