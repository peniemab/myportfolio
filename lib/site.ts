export const site = {
  name: "Peniel Mabanza",
  title: "D\u00e9veloppeur Full Stack",
  email: "makuntimapeniel80@gmail.com",
  phone: "+243 832 138 096",
  phoneHref: "tel:+243832138096",
  whatsapp: "243832138096",
  location: "Kinshasa, R\u00e9publique D\u00e9mocratique du Congo",
  github: "https://github.com/peniemab",
  description:
    "Je cr\u00e9e des exp\u00e9riences num\u00e9riques exceptionnelles en combinant design moderne et d\u00e9veloppement performant. Passionn\u00e9 par l'innovation et l'attention aux d\u00e9tails.",
} as const;

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "\u00c0 propos" },
  { href: "#competences", label: "Comp\u00e9tences" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
] as const;

export const skills = [
  {
    title: "D\u00e9veloppement Frontend",
    description:
      "HTML5 & CSS3, JavaScript (ES6+), TailwindCSS, TypeScript, React, Next.js",
    color: "text-blue-600",
    icon: "code",
  },
  {
    title: "D\u00e9veloppement Backend",
    description: "Node.js, Next.js API, Supabase, PostgreSQL",
    color: "text-green-600",
    icon: "server",
  },
  {
    title: "Design UI/UX",
    description: "Figma, Canva",
    color: "text-purple-600",
    icon: "layout",
  },
  {
    title: "SEO & Performance",
    description: "Optimisation, Analytics, Accessibilit\u00e9",
    color: "text-red-600",
    icon: "zap",
  },
] as const;

export const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "React",
  "Next.js",
] as const;
