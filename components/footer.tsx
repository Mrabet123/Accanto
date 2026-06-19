"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { defaultLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getHomepageCopy } from "@/lib/i18n/homepage";

const footerLinks = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "profile", href: "/profile" },
  { key: "request", href: "/request" },
  { key: "contract", href: "/contract" },
] as const;

type FooterKey = (typeof footerLinks)[number]["key"];

export default function Footer() {
  const pathname = usePathname() || "/";
  const currentLocale: Locale = (() => {
    const first = pathname.split("/")[1];
    return ["it", "en", "fr", "ar"].includes(first) ? (first as Locale) : defaultLocale;
  })();

  const t = getHomepageCopy(currentLocale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--sand)] px-[5%] py-12 pb-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10 grid gap-12 md:grid-cols-3">
          <div>
            <Link href={localizedPath(currentLocale, "/")} className="mb-6 inline-block">
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
              {t.footer.description}
            </p>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--terra)]">
              {t.footer.navigationTitle}
            </div>

            <ul className="flex flex-wrap gap-5">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={localizedPath(currentLocale, link.href)}
                    className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--green)]"
                  >
                    {t.nav[link.key as FooterKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--terra)]">
              {t.footer.contactTitle}
            </div>

            <div className="mb-2 text-[13px] text-[var(--text-muted)]">
              <a
                href="mailto:hello@accanto.care"
                className="transition-colors hover:text-[var(--green)]"
              >
                hello@accanto.care
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
              {t.nav.whatsapp} →
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
          <span className="text-[12px] text-[var(--text-light)]">
            {t.footer.copyright.replace("{year}", String(currentYear))}
          </span>

          <span className="text-[12px] text-[var(--text-light)]">
            {t.footer.vat}
          </span>
        </div>
      </div>
    </footer>
  );
}