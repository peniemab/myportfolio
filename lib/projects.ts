export type Project = {
  id?: string;
  title: string;
  description: string;
  shortDescription?: string;
  tags: string[];
  image?: string;
  desktopImage?: string;
  desktopImages?: string[];
  mobileImage?: string;
  mobileImages?: string[];
  video?: string;
  href?: string;
};

export const featuredProjects: Project[] = [
  {
    id: "bepas-web",
    title: "Site web dynamique, BEPAS SARL",
    description:
      "Site web dynamique d\u00e9velopp\u00e9 avec Next.js et TypeScript : architecture par pages (accueil, communes, offres, FAQ, impact), contenu \u00e9ditorial g\u00e9r\u00e9 via Supabase (CMS actualit\u00e9s), formulaire de contact et sections dynamiques (t\u00e9moignages, partenaires, chiffres cl\u00e9s).\n\nInterface responsive en Tailwind CSS, optimis\u00e9e SEO (m\u00e9tadonn\u00e9es, structure s\u00e9mantique, performance) et pens\u00e9e pour une navigation claire sur mobile, tablette et desktop.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    desktopImage: "/images/projects/bepas-web-desktop.png",
    mobileImage: "https://www.bepas-sarl.com/heroAccueil10.jpg",
    href: "https://www.bepas-sarl.com",
  },
  {
    id: "bepas-log",
    title: "BEPAS Log, Application m\u00e9tier",
    shortDescription:
      "Outil interne de gestion pour BEPAS : souscripteurs, caisse, \u00e9ch\u00e9ances et recouvrement.",
    description:
      "Outil interne de gestion : souscripteurs, caisse, \u00e9ch\u00e9ances, recouvrement, rapports PDF/Excel, CMS articles et journal d'audit. PWA installable pour le terrain.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "PWA", "TypeScript"],
    desktopImage: "/images/projects/bepas-log/desktop-01.png",
    desktopImages: [
      "/images/projects/bepas-log/desktop-01.png",
      "/images/projects/bepas-log/desktop-02.png",
      "/images/projects/bepas-log/desktop-03.png",
      "/images/projects/bepas-log/desktop-04.png",
      "/images/projects/bepas-log/desktop-05.png",
      "/images/projects/bepas-log/desktop-06.png",
      "/images/projects/bepas-log/desktop-07.png",
      "/images/projects/bepas-log/desktop-08.png",
    ],
    mobileImages: [
      "/images/ScreenshotAccueil.png",
      "/images/ScreenshotSB.png",
      "/images/ScreenshotSB2.png",
      "/images/ScreenshotTB.png",
      "/images/ScreenshotTB2.png",
    ],
  },
  {
    id: "aksantiship",
    title: "Aksantiship, Plateforme bourses",
    description:
      "Portail pour candidats africains : profil structur\u00e9, matching intelligent profil/bourse, filtrage par statut et parcours d'abonnement avec API interne.",
    tags: ["Next.js", "React", "TypeScript", "API Routes", "Tailwind CSS"],
    desktopImage: "/images/projects/aksantiship-desktop.png",
  },
  {
    id: "fondation-logistic",
    title: "Fondation Logistic App",
    description:
      "Application interne pour la gestion des souscriptions, versements, caisse et recouvrement (parcelles, fiches, mensualit\u00e9s) avec r\u00f4les, permissions et exports PDF.",
    tags: ["Next.js", "Supabase Auth", "PostgreSQL", "jsPDF", "TypeScript"],
    image: "/images/projects/fondation-logistic.svg",
  },
];

export function getProjectById(id: string): Project | undefined {
  return featuredProjects.find((project) => project.id === id);
}
