// ============================================================
// CONFIGURACIÓN DEL CLIENTE
// Este es el único archivo que necesitas editar para adaptar
// la plantilla a un negocio nuevo: textos, colores, contacto,
// mapa y hoja de tarifas.
// ============================================================

const siteConfig = {
  // --- Identidad del negocio ---
  business: {
    name: "El Cepillo",
    tagline: "El bar del porve",
    description:
      "El bar del barrio clásico, para los de siempre. Más de 20 años cuidando del paladar de nuestro barrio.",
    logoText: "El Cepillo", // se usa mientras hasLogo esté en false
},

// --- Imágenes ---
// Sube los archivos a la carpeta /public con estos nombres exactos:
// logo.png y hero.jpg. Luego activa cada uno poniendo "true".
media: {
    hasLogo: true, // true cuando hayas subido public/logo.png
    hasHeroImage: true, // true cuando hayas subido public/hero.jpg
},
  // --- Colores de marca ---
  // Cambia solo estos 4 valores y toda la web se adapta.
  colors: {
    primary: "#2F5D50", // color principal (botones, enlaces, acentos)
    primaryDark: "#1F3F37", // variante oscura (hover, header)
    accent: "#C9A227", // color secundario (detalles, precios destacados)
    ink: "#16241F", // color del texto principal
  },

  // --- Servicios que se muestran en la portada ---
  // Si rellenas "servicesSheetCsvUrl" con un enlace CSV de Google Sheets,
  // el cliente podrá editar estos textos él mismo desde ahí. Si lo dejas
  // vacío (""), se usará la lista fija de "services" de aquí abajo.
  servicesSheetCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSZrfvMlIPiFi84KMVA1JEBjRdW7ZEcU8KQcQEax3w5pLh8SKYfjHJLYTHn5NCezdV86X0HKMteJkM/pub?gid=125530377&single=true&output=csv",

  services: [
    {
      title: "Vasos helados",
      description: "Cerveza bien fría.",
    },
    {
      title: "La carne buena habla por sí sola",
      description: "Cada corte, una experiencia. Cada bocado, un motivo para volver.",
    },
    {
      title: "Se chapa por la noche",
      description: "Permitidos los fumadores.",
    },
    {
      title: "Disfruta de la compañía de la mejor compañía",
      description: "Gran presencia de gente icónica del barrio.",
    },
  ],

  // --- Datos de contacto ---
contact: {
    email: "elcepillo@gmail.com",
    phone: "+34 600 000 000",
    whatsapp: "34600000000", // solo números, con prefijo de país
    address: "Calle Colombia 10, 41013 Sevilla",
    // Clave de acceso de Web3Forms (web3forms.com) para este cliente.
    // Se genera gratis, sin dominio, en web3forms.com con el email
    // donde quieres que lleguen las consultas de ESTE negocio.
    web3formsAccessKey: "fedcbd47-54eb-476d-8c11-09cc5b17e597",
},

  // --- Ubicación para el mapa ---
  // Puedes obtener el enlace embed en Google Maps:
  // botón "Compartir" > "Insertar un mapa" > copiar la URL del src del iframe.
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179.3407290979445!2d-5.982272446627945!3d37.36978969490043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c280526992d%3A0xa7f529db2ca09505!2sYvonne%20Infantil!5e1!3m2!1ses!2ses!4v1783789095579!5m2!1ses!2ses",
  },

  // --- Redes sociales (opcional, deja "" si no aplica) ---
  social: {
    instagram: "https://instagram.com/elcepo",
    facebook: "",
  },

  // --- Hoja de tarifas ---
  // 1. Crea una Google Sheet con columnas: Categoria, Servicio, Descripcion, Precio
  // 2. Archivo > Compartir > Publicar en la Web > selecciona la hoja > formato CSV
  // 3. Pega aquí la URL que te da Google (termina en "output=csv")
  pricingSheetCsvUrl:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSZrfvMlIPiFi84KMVA1JEBjRdW7ZEcU8KQcQEax3w5pLh8SKYfjHJLYTHn5NCezdV86X0HKMteJkM/pub?gid=0&single=true&output=csv",

  // --- SEO básico ---
  seo: {
    title: "El Cepillo | EL bar del Porvenir",
    description:
      "Más de 20 años cuidando del paladar de nuestro barrio.",
    locale: "es_ES",
    city: "Sevilla",
  },
};

module.exports = siteConfig;
