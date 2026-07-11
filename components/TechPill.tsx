"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { getTechIcon } from "@/lib/tech-icons";

const pillClassName =
  "inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-[var(--fg)]";

type TechPillProps = {
  children: string;
  staggerIndex?: number;
  staggerDelay?: number;
  className?: string;
};

export function TechPill({
  children,
  staggerIndex,
  staggerDelay = 50,
  className = "",
}: TechPillProps) {
  const staggerClass = staggerIndex !== undefined ? "stagger-tag" : "";
  const style =
    staggerIndex !== undefined
      ? { ["--tag-delay" as string]: `${staggerIndex * staggerDelay}ms` }
      : undefined;
  const tech = getTechIcon(children);

  return (
    <span className={`${pillClassName} ${staggerClass} ${className}`.trim()} style={style}>
      {tech && (
        <tech.icon
          className="h-3.5 w-3.5 shrink-0 [color:var(--tech-icon)] dark:[color:var(--tech-icon-dark)]"
          style={{
            ["--tech-icon" as string]: tech.color,
            ["--tech-icon-dark" as string]: tech.darkColor ?? tech.color,
          }}
          aria-hidden
        />
      )}
      {children}
    </span>
  );
}

type TechPillListProps = {
  items: readonly string[];
  className?: string;
  align?: "center" | "start";
  animate?: boolean;
  staggerDelay?: number;
  revealDelay?: number;
};

export function TechPillList({
  items,
  className = "",
  align = "center",
  animate = false,
  staggerDelay = 50,
  revealDelay = 0,
}: TechPillListProps) {
  const alignClass = align === "center" ? "justify-center" : "justify-start";
  const listClassName = `flex flex-wrap gap-3 ${alignClass} ${className}`.trim();

  const pills = items.map((item, index) => (
    <TechPill
      key={item}
      staggerIndex={animate ? index : undefined}
      staggerDelay={staggerDelay}
    >
      {item}
    </TechPill>
  ));

  if (animate) {
    return (
      <ScrollReveal className={`stagger-tags ${listClassName}`} delay={revealDelay}>
        {pills}
      </ScrollReveal>
    );
  }

  return <div className={listClassName}>{pills}</div>;
}
