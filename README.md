# Plantilla web para negocios locales

Plantilla reutilizable en Next.js para crear webs de pequeños negocios
(peluquerías, bares, talleres, comercios...) de forma rápida. Incluye:

- Página de inicio con presentación, servicios, formulario de contacto y mapa.
- Página de tarifas conectada a una Google Sheet (sin backend ni base de datos).
- Envío de emails del formulario mediante Resend.
- Diseño responsive, colores centralizados en un solo archivo.
- SEO básico (metadatos + datos estructurados LocalBusiness).

## 1. Requisitos previos

- Node.js 18 o superior instalado.
- Una cuenta en [Vercel](https://vercel.com) (gratis).
- Una cuenta en [Resend](https://resend.com) (gratis, para el email del formulario).
- Una cuenta de Google (para la hoja de tarifas).

## 2. Instalación en local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre `http://localhost:3000` para ver la web.

## 3. Personalizar la web para un cliente nuevo

**Edita únicamente `config/site.config.js`.** Ahí cambias:

- Nombre del negocio, descripción y textos.
- Los 4 colores de marca (`primary`, `primaryDark`, `accent`, `ink`).
- La lista de servicios que aparecen en portada.
- Teléfono, email, dirección y redes sociales.
- El enlace del mapa de Google (ver punto 4).
- El enlace CSV de la hoja de tarifas (ver punto 5).

Para el logo: si el cliente tiene un logo en imagen, colócalo en `/public/logo.png`
y sustituye el texto del `Header.js` por un `<Image>`. Si no tiene logo, se usa
el texto de `business.logoText` (ya viene así por defecto, no requiere cambios).

## 4. Obtener el enlace del mapa

1. Busca el negocio en [Google Maps](https://maps.google.com).
2. Clic en "Compartir" → pestaña "Insertar un mapa".
3. Copia la URL que aparece dentro de `src="..."`.
4. Pégala en `map.embedUrl` dentro de `config/site.config.js`.

## 5. Configurar la hoja de tarifas (Google Sheets)

1. Crea una Google Sheet con estas columnas exactas en la primera fila:
   `Categoria | Servicio | Descripcion | Precio`
2. Rellena una fila por cada servicio. La columna `Categoria` agrupa los
   servicios en bloques (ej. "Cortes", "Color", "Tratamientos").
3. Ve a **Archivo → Compartir → Publicar en la Web**.
4. Selecciona la hoja correspondiente y el formato **CSV**.
5. Copia el enlace generado y pégalo en `pricingSheetCsvUrl` dentro de
   `config/site.config.js`.

A partir de aquí, **cualquier cambio en la hoja se refleja solo en la web**
(la página de tarifas revisa los datos cada 5 minutos), sin tocar código
ni volver a desplegar nada.

## 6. Configurar el envío de emails (Resend)

1. Crea una cuenta gratuita en [resend.com](https://resend.com).
2. Genera una API key en el panel.
3. Añádela como variable de entorno `RESEND_API_KEY` (en local en `.env.local`,
   en producción en Vercel, ver punto 7).
4. Por defecto los emails se envían desde `onboarding@resend.dev`, que
   funciona sin verificar nada — perfecto para empezar. Si más adelante el
   cliente quiere un remitente con su propio dominio (`info@sunegocio.es`),
   se verifica el dominio en Resend y se cambia el `from` en
   `app/api/contact/route.js`.

## 7. Desplegar en Vercel (subdominio gratuito .vercel.app)

1. Sube este proyecto a un repositorio de GitHub.
2. En Vercel: **Add New Project** → selecciona el repositorio → Vercel
   detecta que es Next.js automáticamente → **Deploy**.
3. Ve a **Settings → Environment Variables** y añade:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (el email del cliente donde deben llegar las consultas)
4. Ve a **Settings → Domains** y cambia el nombre del subdominio a algo
   limpio, por ejemplo `peluqueriamarina.vercel.app`.
5. Listo. Cada vez que hagas `git push`, Vercel redespliega solo en ~1 minuto.

## 8. Crear la web de un cliente nuevo a partir de esta plantilla

1. En GitHub, usa el botón **"Use this template"** sobre este repositorio
   para crear uno nuevo (ej. `web-peluqueria-marina`).
2. Edita `config/site.config.js` con los datos del nuevo cliente.
3. Sigue los pasos 4, 5, 6 y 7 de este README para ese cliente.

Tiempo estimado por cliente, una vez familiarizado con el proceso: 1-2 horas.

## Estructura del proyecto

```
config/site.config.js   → único archivo a editar por cliente
app/
  layout.js              → inyecta colores/tipografía y el SEO
  page.js                → página de inicio
  tarifas/page.js         → página de tarifas (lee la Google Sheet)
  api/contact/route.js    → envío de emails del formulario
components/               → Header, Hero, Services, ContactForm, MapEmbed, Footer, PriceList
lib/sheets.js              → lee y parsea el CSV de Google Sheets
```
