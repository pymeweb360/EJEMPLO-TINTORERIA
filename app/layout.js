import "./globals.css";
import siteConfig from "../config/site.config";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    locale: siteConfig.seo.locale,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const { colors } = siteConfig;

  // Estas variables son las que Tailwind lee (ver tailwind.config.js)
  // Así, cambiar el color de toda la web es cambiar 4 valores en site.config.js
  const cssVars = {
    "--color-primary": colors.primary,
    "--color-primary-dark": colors.primaryDark,
    "--color-accent": colors.accent,
    "--color-ink": colors.ink,
    "--color-paper": "#FBFAF7",
    "--color-line": "#E4E1D8",
    "--font-display":
      "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
    "--font-body": "'Inter', ui-sans-serif, system-ui, sans-serif",
  };

  return (
    <html lang="es" style={cssVars}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Datos estructurados básicos para SEO local (LocalBusiness) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.business.name,
              description: siteConfig.business.description,
              telephone: siteConfig.contact.phone,
              email: siteConfig.contact.email,
              address: siteConfig.contact.address,
              areaServed: siteConfig.seo.city,
            }),
          }}
        />
      </head>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
