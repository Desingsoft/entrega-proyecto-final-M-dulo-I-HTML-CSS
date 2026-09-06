document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("mainNavbar");
  const backToTop = document.getElementById("backToTop");
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const sections = document.querySelectorAll("main section[id]");
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // Cambiar apariencia de navbar al hacer scroll
  const handleScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    backToTop.classList.toggle("show", window.scrollY > 500);

    // Marcar la sección activa
    let currentSection = "inicio";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentSection}`
      );
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Volver arriba
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Cerrar menú móvil después de seleccionar una opción
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navbarContent");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Formulario de demostración
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.classList.remove("d-none");
    contactForm.reset();

    setTimeout(() => {
      formMessage.classList.add("d-none");
    }, 5000);
  });
});
