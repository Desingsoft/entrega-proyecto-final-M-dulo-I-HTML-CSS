const SERVICES = {
  soporte: {
    title: 'Soporte Tecnológico', icon: 'bi-pc-display', intro: 'Mantenimiento, configuración y acompañamiento para equipos y sistemas tecnológicos.',
    sections: [
      ['Mantenimiento y optimización', ['Mantenimiento preventivo y correctivo para computadores de mesa y portátiles.', 'Formateo, instalación de programas y optimización del sistema operativo.', 'Limpieza y adecuación interna y externa de equipos.', 'Instalación de antivirus, Office, quemadores y reproductores.', 'Actualización, configuración y soporte de Windows.']],
      ['Sistemas y dispositivos', ['Instalación y configuración de Windows, macOS y Ubuntu.', 'Configuración de programas, drivers y componentes del sistema.', 'Soporte para impresoras, tablets y celulares.', 'Configuración y soporte de servidores, switches, UPS y UTR.']],
      ['Atención flexible', ['Servicio para hogares, microempresas y empresas de mayor tamaño.', 'Atención presencial a domicilio o asistencia virtual según la necesidad.']]
    ]
  },
  redes: {
    title: 'Redes e Infraestructura', icon: 'bi-diagram-3', intro: 'Diseñamos y configuramos redes y conectividad para hogares, negocios y empresas.',
    sections: [
      ['Diseño e instalación', ['Diseño de infraestructura de red según las necesidades del espacio.', 'Instalación de puntos cableados y acometidas de red.', 'Organización y configuración de conectividad.']],
      ['Equipos de red y energía', ['Implementación y configuración de módems, routers y switches.', 'Configuración de servidores y equipos de conectividad.', 'Implementación y configuración de UPS y UTR.']],
      ['Modalidades', ['Atención a domicilio y soporte virtual.', 'Soluciones escalables para hogares, microempresas y empresas de mayor tamaño.']]
    ]
  },
  cctv: {
    title: 'CCTV y Seguridad', icon: 'bi-camera-video', intro: 'Diseño, montaje, configuración y puesta en funcionamiento de sistemas de videovigilancia.',
    sections: [
      ['1. Visita técnica y diseño', ['Inspección del lugar para detectar puntos vulnerables, accesos y zonas sin visibilidad (puntos ciegos).', 'Definición de la ubicación de cada cámara considerando iluminación, altura y ángulo de cobertura.', 'Selección de tecnología adecuada: análoga HD, cámaras IP o sistemas inalámbricos.']],
      ['2. Montaje y cableado físico', ['Instalación de cámaras en paredes, techos o fachadas con fijación segura.', 'Tendido y canalización estética y segura de cable UTP o coaxial.', 'Instalación de fuentes de poder, conectores y cajas estancas para exteriores.']],
      ['3. Configuración del sistema de grabación', ['Instalación del equipo central DVR para cámaras análogas o NVR para cámaras IP.', 'Instalación y formateo del disco duro dimensionado según los días de grabación requeridos.']],
      ['4. Pruebas y configuración de red', ['Alineación, enfoque y campo de visión de cada cámara.', 'Configuración del acceso remoto desde aplicaciones móviles o PC.', 'Pruebas de visión nocturna, grabación continua y detección de movimiento.']]
    ]
  },
  software: {
    title: 'Software y Aplicaciones', icon: 'bi-code-square', intro: 'Desarrollamos y configuramos soluciones de software para PC, servidores, nube y dispositivos móviles.',
    sections: [
      ['Desarrollo', ['Programas locales para PC, internet o red.', 'Soluciones para servidores, Cloud y routers.', 'Aplicaciones móviles para publicación en Play Store o App Store.']],
      ['Datos e integración', ['Creación y conexión de bases de datos.', 'Análisis de datos.', 'Configuración e implementación de soluciones tecnológicas.']],
      ['Implementación', ['Configuración, cotización e instalación de programas o hardware según el proyecto.']]
    ]
  },
  web: {
    title: 'Desarrollo Web', icon: 'bi-globe2', intro: 'Creamos experiencias digitales modernas, funcionales y adaptadas a las necesidades de cada negocio.',
    sections: [
      ['Sitios y presencia digital', ['Creación, diseño e implementación de sitios web.', 'Landing pages y páginas informativas para emprendimientos.', 'Blogs y experiencias digitales adaptadas a la identidad de la marca.']],
      ['Negocios y plataformas', ['Tiendas e-commerce.', 'Sistemas ERP y CRM.', 'Integración de formularios, bases de datos y servicios según el proyecto.']],
      ['Enfoque', ['Diseño responsive para computador, tablet y celular.', 'Implementación orientada a usabilidad, rendimiento y objetivos del negocio.']]
    ]
  },
  videojuegos: {
    title: 'Videojuegos', icon: 'bi-controller', intro: 'Creamos conceptos y experiencias interactivas desde la idea inicial hasta su implementación.',
    sections: [
      ['Diseño creativo', ['Historia y concepto del videojuego.', 'Diseño de personajes y escenarios.', 'Diseño de niveles y progresión.']],
      ['Interactividad y tecnología', ['Mecánicas e interactividad de la plataforma.', 'Conexión a internet y funcionalidades en línea.', 'Implementación y configuración de servidores cuando el proyecto lo requiere.']]
    ]
  },
  ciberseguridad: {
    title: 'Ciberseguridad', icon: 'bi-shield-lock', intro: 'Protección, diagnóstico y buenas prácticas para reducir riesgos en equipos, redes, sitios web y aplicaciones.',
    sections: [
      ['Protección y prevención', ['Protección local y configuración de firewall.', 'Protección contra malware.', 'Detección de puertas traseras y configuraciones inseguras.', 'Recomendaciones para mejorar la seguridad de redes, sitios web y aplicaciones.']],
      ['Evaluación autorizada', ['Investigación cibernética y hacking ético únicamente con autorización del propietario o responsable del sistema.', 'Análisis de vulnerabilidades y recomendaciones de mitigación.']],
      ['Recuperación y asistencia', ['Recuperación de datos y orientación para recuperación de contraseñas.', 'Recuperación de cuentas o perfiles de redes sociales y correos electrónicos mediante procedimientos legítimos de recuperación.']]
    ]
  },
  tramites: {
    title: 'Trámites y Diligencias', icon: 'bi-clipboard-check', intro: 'Apoyo práctico para diligencias personales y gestiones que pueden realizarse de manera presencial o digital.',
    sections: [['Diligencias', ['Filas y diligencias personales.', 'Pago de servicios públicos.', 'Solicitud de citas médicas y apoyo con autorizaciones de órdenes.', 'Acompañamiento en trámites según disponibilidad y condiciones de cada entidad.']]]
  },
  marketing: {
    title: 'Marketing Digital y Multimedia', icon: 'bi-megaphone', intro: 'Impulsamos empresas, negocios y marcas personales con estrategia, contenido e identidad visual.',
    sections: [
      ['Marketing y redes', ['Manejo de redes sociales.', 'Estrategias para impulsar el potencial de negocios, marcas u organizaciones.', 'Contenido para las plataformas preferidas por la audiencia.']],
      ['Branding y contenido', ['Creación de logos e identidad comercial.', 'Creación y edición de videos y fotografías.', 'Reels y mini-clips.', 'Creación y apoyo para canales de YouTube.']]
    ]
  },
  ventas: {
    title: 'Ventas', icon: 'bi-bag', intro: 'Catálogo de productos bajo pedido con opciones para diferentes estilos y necesidades.',
    sections: [['Productos', ['Ropa para hombre y mujer, formal, informal y deportiva.', 'Tenis, zapatos, pijamas y sudaderas.', 'Accesorios para celulares y accesorios de ropa.', 'Productos de diferentes marcas bajo pedido.', 'Consulta disponibilidad, cotización y opciones de pago contra entrega según cobertura.']]]
  },
  ingles: {
    title: 'Cursos de Inglés', icon: 'bi-translate', intro: 'Orientación para encontrar cursos de inglés de acuerdo con el nivel y objetivo de aprendizaje.',
    sections: [['Niveles y asesoría', ['Contamos con convenios con plataformas de inglés.', 'Opciones desde niveles básicos hasta avanzados.', 'Te asesoramos para identificar una alternativa que se ajuste a tu necesidad y presupuesto.']]]
  },
  mentoria: {
    title: 'Asistencia y Mentoría', icon: 'bi-person-video3', intro: 'Acompañamiento tecnológico para personas que desean aprender, resolver tareas digitales o ganar autonomía.',
    sections: [
      ['Acompañamiento', ['Auditorías y mentorías para adultos y menores en el uso responsable de la tecnología.', 'Ayuda para realizar conexiones y configuraciones.', 'Configuración de programas y hardware.']],
      ['Vida digital', ['Orientación para pagos por internet.', 'Apoyo para publicar anuncios de casas o apartamentos en arriendo o venta.', 'Creación y configuración de redes sociales.', 'Apoyo en publicaciones y presencia digital.']]
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'soporte';
  const service = SERVICES[id] || SERVICES.soporte;

  document.title = `${service.title} | Capital Solutions Informatics`;
  document.getElementById('serviceTitle').textContent = service.title;
  document.getElementById('serviceIntro').textContent = service.intro;
  document.getElementById('serviceIcon').innerHTML = `<i class="bi ${service.icon}"></i>`;

  const container = document.getElementById('serviceSections');
  container.innerHTML = service.sections.map(([title, items]) => `
    <div class="col-12">
      <article class="detail-card">
        <h2 class="h4">${title}</h2>
        <ul class="mb-0">${items.map(item => `<li>${item}</li>`).join('')}</ul>
      </article>
    </div>
  `).join('');

  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
});
