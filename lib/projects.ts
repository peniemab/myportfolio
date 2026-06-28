export type ProjectStackGroup = {
  category: string;
  items: string[];
};

export type Project = {
  id?: string;
  title: string;
  description: string;
  shortDescription?: string;
  tags: string[];
  features?: string[];
  stack?: ProjectStackGroup[];
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
    title: "Application de gestion pour BEPAS",
    shortDescription:
      "Application de gestion pour BEPAS : souscription fonci\u00e8re, caisse, \u00e9ch\u00e9ances et recouvrement.",
    description:
      "Application de gestion pour BEPAS qui remplace des processus manuels (fiches papier, tableurs) par un syst\u00e8me unifi\u00e9 de gestion des dossiers de souscription fonci\u00e8re.\n\nLes \u00e9quipes peuvent enregistrer de nouveaux souscripteurs via des formulaires d\u00e9di\u00e9s (militaire / civil). La caisse permet d'encaisser les versements (acompte initial et mensualit\u00e9s) avec g\u00e9n\u00e9ration de re\u00e7us PDF. Le module recouvrement calcule les retards et dettes selon une logique m\u00e9tier sp\u00e9cifique. Les \u00e9ch\u00e9ances mensuelles offrent une vue op\u00e9rationnelle avec filtres (pay\u00e9, retard, partiel, attente acompte). Un tableau de bord agr\u00e8ge les indicateurs cl\u00e9s, et les rapports permettent des synth\u00e8ses par p\u00e9riode et par site.\n\nL'application int\u00e8gre aussi un CMS actualit\u00e9s, un journal d'audit, une corbeille (soft delete), la gestion des utilisateurs (r\u00f4les admin / agent / lecture seule + permissions fines), et une v\u00e9rification par QR code des fiches et re\u00e7us.",
    features: [
      "Inscription des souscripteurs (militaire / civil)",
      "Caisse : acompte, mensualit\u00e9s et re\u00e7us PDF",
      "Recouvrement et \u00e9ch\u00e9ances avec filtres op\u00e9rationnels",
      "Tableau de bord et rapports par p\u00e9riode / site",
      "CMS actualit\u00e9s partag\u00e9 avec le site web BEPAS",
      "PWA hors ligne, r\u00f4les utilisateurs et journal d'audit",
    ],
    stack: [
      {
        category: "Frontend",
        items: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS 4",
          "Lucide Icons",
        ],
      },
      {
        category: "Backend / BDD",
        items: ["Supabase", "PostgreSQL", "Auth", "RLS", "Storage"],
      },
    ],
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
