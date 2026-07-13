import siteConfig from "../config/site.config";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-lg border border-line">
      <iframe
        src={siteConfig.map.embedUrl}
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Ubicación de ${siteConfig.business.name}`}
      />
      <p className="border-t border-line bg-white px-4 py-3 text-sm text-ink/70">
        {siteConfig.contact.address}
      </p>
    </div>
  );
}
