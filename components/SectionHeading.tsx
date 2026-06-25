export function SectionHeading({
  title,
  subtitle,
  variant = "default",
}: {
  title: string;
  subtitle?: string;
  variant?: "default" | "display";
}) {
  if (variant === "display") {
    const words = title.split(" ");
    const first = words[0] ?? title;
    const rest = words.slice(1).join(" ");

    return (
      <div className="mb-16 text-center">
        <p className="text-outline text-display-lg font-bold tracking-tight">
          {first}
        </p>
        {rest && (
          <h2 className="text-display-lg font-bold tracking-tight text-[var(--fg)]">
            {rest}
          </h2>
        )}
        {subtitle && (
          <p className="mx-auto mt-6 max-w-xl text-[var(--muted)]">{subtitle}</p>
        )}
      </div>
    );
  }

  return (
    <>
      <h2 className="mb-10 text-center text-3xl font-semibold text-[var(--fg)]">
        {title}
      </h2>
      <div className="mx-auto mb-12 h-px w-24 bg-[var(--border)]" />
      {subtitle && (
        <p className="mb-12 text-center text-[var(--muted)]">{subtitle}</p>
      )}
    </>
  );
}
