"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

const pillClassName =
  "rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-[var(--fg)]";

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

  return (
    <span className={`${pillClassName} ${staggerClass} ${className}`.trim()} style={style}>
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
