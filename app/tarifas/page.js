import siteConfig from "../../config/site.config";
import { getPricingData } from "../../lib/sheets";
import PriceList from "../../components/PriceList";

export const metadata = {
  title: `Tarifas | ${siteConfig.business.name}`,
};

export default async function TarifasPage() {
  const groups = await getPricingData(siteConfig.pricingSheetCsvUrl);

  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <p className="eyebrow">Precios</p>
      <h1 className="mt-3 font-display text-3xl font-600 text-ink">
        Tarifas
      </h1>
      <p className="mt-3 text-ink/70">
        Precios actualizados. Si tienes dudas sobre algún servicio, escríbenos
        desde el formulario de contacto.
      </p>

      <div className="mt-10">
        <PriceList groups={groups} />
      </div>
    </section>
  );
}
