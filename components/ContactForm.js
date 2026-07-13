"use client";

import { useState } from "react";
import siteConfig from "../config/site.config";

const initialState = { name: "", email: "", phone: "", reason: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      // Envío directo a Web3Forms: no requiere backend ni dominio propio.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.contact.web3formsAccessKey,
          subject: `Nueva consulta de ${form.name} — ${siteConfig.business.name}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.reason,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error("Error en el envío");

      setStatus("sent");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="reason" className="mb-1 block text-sm font-medium">
          Motivo de la consulta
        </label>
        <textarea
          id="reason"
          name="reason"
          rows={4}
          required
          value={form.reason}
          onChange={handleChange}
          className="w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-fit disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar consulta"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-primary-dark">
          Mensaje enviado. Te responderemos lo antes posible.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          No se ha podido enviar. Prueba de nuevo o llámanos directamente.
        </p>
      )}
    </form>
  );
}
