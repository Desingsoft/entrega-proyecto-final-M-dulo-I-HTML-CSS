document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('mainNavbar');
  const backToTop = document.getElementById('backToTop');
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const sections = document.querySelectorAll('main section[id]');

  const handleScroll = () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
    backToTop?.classList.toggle('show', window.scrollY > 500);

    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) current = section.id;
    });
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Cierra el menú de Bootstrap después de seleccionar una opción en móviles.
  navLinks.forEach(link => link.addEventListener('click', () => {
    const menu = document.getElementById('navbarContent');
    if (menu?.classList.contains('show') && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  }));

  // Animación de aparición al entrar al viewport.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  // Los servicios se abren en una página dedicada mediante un identificador.
  document.querySelectorAll('[data-service]').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = `servicio.html?id=${encodeURIComponent(card.dataset.service)}`;
    });
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.location.href = `servicio.html?id=${encodeURIComponent(card.dataset.service)}`;
      }
    });
  });

  // Formulario: genera un mensaje de WhatsApp con los datos ingresados.
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('nombre')?.value.trim() || '';
    const email = document.getElementById('correo')?.value.trim() || '';
    const phone = document.getElementById('telefono')?.value.trim() || '';
    const service = document.getElementById('servicio')?.value || '';
    const message = document.getElementById('mensaje')?.value.trim() || '';
    const text = `Hola, soy ${name}.%0A%0AServicio: ${service}%0ACorreo: ${email}%0ATeléfono: ${phone}%0A%0ANecesito: ${message}`;
    window.open(`https://wa.me/573181898681?text=${text}`, '_blank', 'noopener,noreferrer');
  });
});
