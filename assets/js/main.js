/* =========================
   NAVBAR MOBILE
========================= */
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

burger.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// =========================
//    CONTACT → WHATSAPP
// =========================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const sujet = document.getElementById("sujet").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!nom || !email || !sujet || !message) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  const texte = 
`Bonjour, je vous contacte depuis votre portfolio.

Nom : ${nom}
Email : ${email}
Sujet : ${sujet}

Message :
${message}`;

  const numeroWhatsApp = "243832138096";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texte)}`;

  window.open(url, "_blank");
});
// Mettre à jour automatiquement l'année dans le footer
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;