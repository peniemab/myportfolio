 // fleche vers le bas
//  document.getElementById("scrollToAbout").addEventListener("click", function () {
//         const aboutSection = document.getElementById("apropos");
        
//         if (aboutSection) {
//             aboutSection.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start"
//             });
//         }
//     });
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

    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconBurger = document.getElementById('icon-burger');
    const iconClose = document.getElementById('icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    let isOpen = false;

    menuButton.addEventListener('click', () => {
        isOpen = !isOpen;

        // Toggle menu visibility
        mobileMenu.classList.toggle('hidden');

        // Toggle icons
        iconBurger.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');

        // Prevent scrolling when menu open
        document.body.classList.toggle('overflow-hidden');
    });

    // fermeture auto du menu, une fois un lien cliqué
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            iconClose.classList.add('hidden');
            iconBurger.classList.remove('hidden');
            document.body.classList.remove('overflow-hidden');
            isOpen = false;
        });
    });

  // Active link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const top = section.offsetTop - 80;
      if (scrollY >= top) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });

    mobileNavLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });