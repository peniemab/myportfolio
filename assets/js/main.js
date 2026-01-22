/* ===== NAVBAR ===== */
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

/* ===== CONTACT ===== */
document.getElementById("send-whatsapp").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const text = encodeURIComponent(`Bonjour, je suis ${name}. ${message}`);
  window.open(`https://wa.me/243832138096?text=${text}`, "_blank");
});

document.getElementById("send-email").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Contact depuis le portfolio");
  const body = encodeURIComponent(
    `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href =
    `mailto:makuntimapeniel80@gmail.com?subject=${subject}&body=${body}`;
});
