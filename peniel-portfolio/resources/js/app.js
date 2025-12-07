// ===========================
// SECTION PROJETS ANIMATION
// ===========================
  const elements = document.querySelectorAll(".project");
  const videos = document.querySelectorAll("video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
      }

      const video = entry.target.querySelector("video");
      if (video) {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0; 
        }
      }
    });
  }, { threshold: 0.5 });

  elements.forEach(el => observer.observe(el));
// ===========================
// MENU BURGER
// ===========================

const burgerBtn = document.querySelector("[command='--toggle']");
const mobileMenu = document.getElementById("mobile-menu");

burgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.hasAttribute("hidden") === false;

    if (isOpen) {
        mobileMenu.setAttribute("hidden", "");
        burgerBtn.setAttribute("aria-expanded", "false");
    } else {
        mobileMenu.removeAttribute("hidden");
        burgerBtn.setAttribute("aria-expanded", "true");
    }
});


// ===========================
// SCROLLING DES LIENS
// ===========================

// Map des liens -> sections
const linkMap = {
    "link-accueil": "accueil",
    "link-apropos": "apropos",
    "link-projets": "projets",
    "link-competences": "competences",
    "link-contact": "contact"
};

// Pour chaque lien, ajouter le comportement
Object.keys(linkMap).forEach((linkId) => {
    const link = document.getElementById(linkId);
    const sectionId = linkMap[linkId];

    link.addEventListener("click", () => {
        const section = document.getElementById(sectionId);

        // Scroll smooth
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Si menu mobile ouvert → fermer automatiquement
        if (window.innerWidth < 640) {
            mobileMenu.setAttribute("hidden", "");
            burgerBtn.setAttribute("aria-expanded", "false");
        }
    });
});
