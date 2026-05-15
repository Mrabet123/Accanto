import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/services" },
  { label: "Profilo", href: "/profile" },
  { label: "Richiesta", href: "/request" },
  { label: "Contratto", href: "/contract" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--sand)] px-[5%] py-12 pb-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10 grid gap-12 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="mb-6 inline-block"
            >
              <Image
                src="/Images/logo.png"
                alt="Logo Accanto"
                width={140}
                height={140}
                className="w-[200px] object-contain"
                priority={false}
              />
            </Link>

            <p className="max-w-[260px] text-[13px] leading-7 text-[var(--text-muted)]">
              Professionista OSS indipendente · Lago di Como – Lecco / Valtellina / Milano
            </p>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--terra)]">
              Navigazione
            </div>

            <ul className="flex flex-wrap gap-5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--green)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--terra)]">
              Contatti
            </div>

            <div className="mb-2 text-[13px] text-[var(--text-muted)]">
              <a
                href="mailto:ghassenmansouri@mail.com"
                className="transition-colors hover:text-[var(--green)]"
              >
                ghassenmansouri@mail.com
              </a>
            </div>

            <div className="mb-2 text-[13px] text-[var(--text-muted)]">
              <a
                href="tel:+393792306809"
                className="transition-colors hover:text-[var(--green)]"
              >
                +39 379 230 6809
              </a>
            </div>

            <a
              href="https://wa.me/393792306809"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center rounded-full bg-[var(--green)] px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#0a5a44]"
            >
              WhatsApp →
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
          <span className="text-[12px] text-[var(--text-light)]">
            © {currentYear} Accanto. Tutti i diritti riservati.
          </span>

          <span className="text-[12px] text-[var(--text-light)]">
            P.IVA 01103920144
          </span>
        </div>
      </div>
    </footer>
  );
}