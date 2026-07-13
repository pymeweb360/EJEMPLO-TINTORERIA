import siteConfig from "../config/site.config";

export default function Hero() {
  const { business, contact, media, seo } = siteConfig;

  // Enlace de "Cómo llegar": abre Google Maps con la dirección del negocio
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.address
  )}`;

  return (
    <section
      className="relative flex min-h-[420px] items-center justify-center overflow-hidden sm:min-h-[480px]"
      style={
        media.hasHeroImage
          ? {
              backgroundImage: "url(/hero.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { backgroundColor: "var(--color-primary-dark)" }
      }
    >
      {/* Capa oscura sobre la foto para que el texto blanco se lea bien */}
      {media.hasHeroImage && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(10, 10, 8, 0.45)" }}
        />
      )}

      <div className="relative mx-auto max-w-2xl px-5 py-16 text-center">
        <p className="text-sm font-600 uppercase tracking-wide text-white/85">
          {seo.city}
        </p>

        <h1 className="mt-3 font-display text-4xl font-600 leading-tight text-white sm:text-5xl">
          {business.name}
        </h1>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="btn-primary"
          >
            Llamar
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-md border border-white/50 px-5 py-3 font-medium text-white hover:border-white"
          >
            Preguntas
          </a>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/50 px-5 py-3 font-medium text-white hover:border-white"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
}
