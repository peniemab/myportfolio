import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { navLinks, site } from "@/lib/site";
import { pageContainer } from "@/lib/layout";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 pt-16 text-gray-300">
      <div className={`grid items-start gap-12 md:grid-cols-3 ${pageContainer}`}>
        <div>
          <h3 className="mb-3 text-xl font-semibold text-white">{site.name}</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Développeur full stack passionné par la création de solutions
            numériques modernes, performantes et orientées utilisateur.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-medium text-white">Navigation</h4>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="whitespace-nowrap hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className={`mt-14 flex flex-col items-center justify-between border-t border-white/10 py-6 text-xs text-gray-400 md:flex-row ${pageContainer}`}>
        <p>
          © {year} {site.name}, Kinshasa, RDC
        </p>
        <div className="mt-3 flex gap-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Mentions légales
          </a>
          <a href="#" className="hover:text-white">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
