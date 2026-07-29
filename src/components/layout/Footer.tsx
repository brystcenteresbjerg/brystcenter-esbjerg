import Link from "next/link";
import { site } from "@/data/site";

const services = [
  { label: "Brystforstørrelse med eget fedt", href: "/behandlinger/bfo-eget-fedt-lipofilling" },
  { label: "Brystforstørrelse med implantat", href: "/behandlinger/bfo-implantat" },
  { label: "Brystløft", href: "/behandlinger/brystloeft" },
  { label: "Brystreduktion", href: "/behandlinger/brystreduktion" },
  { label: "Implantatudskiftning", href: "/behandlinger/udskiftning-af-protese" },
  { label: "Second Opinion", href: "/behandlinger/second-opinion" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="block w-56 mb-5 shrink-0">
            <img src="/logos/logo_nude.svg" alt="Brystcenter Esbjerg Logo" />
          </Link>
          <p className="font-sans text-base leading-relaxed">Specialister i regenerativ brystkirurgi i Esbjerg.</p>
        </div>

        {/* Ydelser */}
        <div>
          <p className="font-sans text-sm uppercase font-medium tracking-widest text-on-primary/80 mb-5">Behandlinger</p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="font-sans text-base  hover:text-on-primary transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-on-primary/80 mb-5">Kontakt</p>
          <address className="not-italic font-sans text-base leading-relaxed space-y-1">
            <p className="">Brystcenter Esbjerg</p>
            <p>En del af {site.partner.name}</p>
            <p>{site.address.street}</p>
            <p>{site.address.city}</p>
            <p>CVR: {site.cvr}</p>
          </address>
          <div className="mt-4 font-sans text-base space-y-1">
            <p>
              <a href={`tel:${site.phone.href.replace("tel:", "")}`} className="hover:text-on-primary/80 transition-colors">
                Tlf. {site.footerPhone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-on-primary/80 transition-colors">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-5 border-t border-on-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="font-sans text-xs text-on-primary/30">
          © {new Date().getFullYear()} Brystcenter Esbjerg. Alle rettigheder forbeholdes.
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-1">
          <a
            href="https://www.privathospitaletkollund.com/web/beskyttelse-af-personoplysninger/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-on-primary/70 hover:text-on-primary transition-colors"
          >
            Privatlivspolitik & GDPR
          </a>
          <a
            href="https://www.privathospitaletkollund.com/web/klager"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-on-primary/70 hover:text-on-primary transition-colors"
          >
            Klager & Patienterstatning
          </a>
          <a
            href="https://www.privathospitaletkollund.com/web/wp-content/uploads/2021/05/Tilsynsrapport-paraklinisk-Kollund-dec-2019.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs text-on-primary/70 hover:text-on-primary transition-colors"
          >
            Tilsynsrapport
          </a>
        </nav>
      </div>
    </footer>
  );
}
