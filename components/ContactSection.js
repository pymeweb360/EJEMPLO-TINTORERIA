import ContactForm from "./ContactForm";
import MapEmbed from "./MapEmbed";

export default function ContactSection() {
  return (
    <section id="contacto" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="eyebrow">Contacto</p>
        <h2 className="mt-3 font-display text-2xl font-600 text-ink sm:text-3xl">
          Escríbenos o ven a vernos
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <ContactForm />
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
