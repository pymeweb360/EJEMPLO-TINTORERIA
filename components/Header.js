import Link from "next/link";
import Image from "next/image";
import siteConfig from "../config/site.config";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center">
          {siteConfig.media.hasLogo ? (
            <Image
              src="/logo.png"
              alt={siteConfig.business.name}
              width={140}
              height={40}
              style={{ height: "40px", width: "auto" }}
              priority
            />
          ) : (
            <span className="font-display text-lg font-600 tracking-tight text-ink">
              {siteConfig.business.logoText}
            </span>
          )}
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary">
            Inicio
          </Link>
          <Link href="/tarifas" className="hover:text-primary">
            Tarifas
          </Link>
        </nav>
      </div>
    </header>
  );
}
