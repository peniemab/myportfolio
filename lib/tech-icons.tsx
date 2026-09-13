import type { IconType } from "react-icons";
import {
  SiAppwrite,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNeon,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type TechIconConfig = {
  icon: IconType;
  color: string;
  darkColor?: string;
};

const techIcons: Record<string, TechIconConfig> = {
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Supabase: { icon: SiSupabase, color: "#3FCF8E" },
  Appwrite: { icon: SiAppwrite, color: "#FD366E" },
  Neon: { icon: SiNeon, color: "#00E699" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
};

const techAliases: Record<string, keyof typeof techIcons> = {
  "Next.js 16": "Next.js",
  "React 19": "React",
  "Tailwind CSS 4": "Tailwind CSS",
  "Supabase Auth": "Supabase",
};

export function getTechIcon(name: string): TechIconConfig | null {
  const key = techAliases[name] ?? name;
  return techIcons[key] ?? null;
}
