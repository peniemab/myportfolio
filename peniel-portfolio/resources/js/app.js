
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
