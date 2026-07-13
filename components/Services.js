import siteConfig from "../config/site.config";
import { getServicesData } from "../lib/sheets";

export default async function Services() {
  // Si hay una hoja de Sheets configurada, se usa esa.
  // Si no, o si falla la lectura, se usa la lista fija de site.config.js.
  const sheetServices = await getServicesData(siteConfig.servicesSheetCsvUrl);
  const services = sheetServices && sheetServices.length > 0
    ? sheetServices
    : siteConfig.services;

  return (
    <section className="border-t border-line bg-white/40">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="eyebrow">Qué ofrecemos</p>
        <h2 className="mt-3 font-display text-2xl font-600 text-ink sm:text-3xl">
          Nuestros servicios
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-line bg-paper p-6"
            >
              <h3 className="font-display text-lg font-600 text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
