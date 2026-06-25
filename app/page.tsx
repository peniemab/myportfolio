import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ScrollTop } from "@/components/ScrollTop";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="page-shell">
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ContactForm />
        </main>
        <Footer />
      </div>
      <ScrollTop />
    </>
  );
}
