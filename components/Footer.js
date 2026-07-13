import siteConfig from "../config/site.config";

export default function Footer() {
  const { business, contact, social } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-primary-dark text-white">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-600">{business.name}</p>
            <p className="mt-2 text-sm text-white/70">{business.tagline}</p>
          </div>

          <div className="text-sm text-white/80">
            <p>{contact.address}</p>
            <p className="mt-1">{contact.phone}</p>
            <p className="mt-1">{contact.email}</p>
          </div>

          <div className="flex gap-4 text-sm text-white/80 sm:justify-end">
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            )}
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            )}
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
          © {year} {business.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
