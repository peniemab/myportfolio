"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { pageContainer } from "@/lib/layout";
import { site } from "@/lib/site";

export function ContactForm() {
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const nom = String(data.get("nom") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const sujet = String(data.get("sujet") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!nom || !email || !sujet || !message) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    const texte = `Bonjour, je vous contacte depuis votre portfolio.

Nom : ${nom}
Email : ${email}
Sujet : ${sujet}

Message :
${message}`;

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texte)}`;
    window.open(url, "_blank");
    form.reset();
  }

  return (
    <section id="contact" className="border-t border-[var(--border)] bg-[var(--bg)] py-24">
      <div className={pageContainer}>
        <div className="mb-16 text-center">
          <p className="text-outline text-display-lg font-bold tracking-tight">
            Contactez
          </p>
          <h2 className="text-gradient text-display-lg font-bold tracking-tight">
            moi
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[var(--muted)]">
            Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour
            en discuter.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-[var(--fg)]">
              Informations de contact
            </h3>
            <ul className="space-y-4">
              <li className="flex flex-wrap items-center gap-1 text-[var(--muted)]">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-[var(--accent)]" />
                Email:
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-[var(--fg)] hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex flex-wrap items-center gap-1 text-[var(--muted)]">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-[var(--accent)]" />
                Téléphone:
                <a
                  href={site.phoneHref}
                  className="text-[var(--fg)] hover:underline"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-[var(--muted)]">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                <span>Localisation: {site.location}</span>
              </li>
            </ul>
          </div>

          <div className="min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="nom"
                  className="mb-2 block font-medium text-[var(--fg)]"
                >
                  Nom complet
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 text-[var(--fg)] focus:ring-2 focus:ring-[var(--accent)] focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-[var(--fg)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 text-[var(--fg)] focus:ring-2 focus:ring-[var(--accent)] focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="sujet"
                  className="mb-2 block font-medium text-[var(--fg)]"
                >
                  Sujet
                </label>
                <input
                  id="sujet"
                  name="sujet"
                  type="text"
                  placeholder="Sujet de votre message"
                  className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 text-[var(--fg)] focus:ring-2 focus:ring-[var(--accent)] focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-[var(--fg)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="h-32 w-full resize-y rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 text-[var(--fg)] focus:ring-2 focus:ring-[var(--accent)] focus:outline-none"
                />
              </div>
              {error && <p className="text-sm text-[var(--accent)]">{error}</p>}
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-white transition hover:opacity-90 md:w-auto"
              >
                Envoyer le message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
