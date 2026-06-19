"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./language-switcher";
import {
  defaultLocale,
  localizedPath,
  type Locale,
} from "@/lib/i18n/config";
import { getHomepageCopy } from "@/lib/i18n/homepage";

const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "profile", href: "/profile" },
  { key: "request", href: "/request" },
  { key: "contract", href: "/contract" },
] as const;

type NavKey = (typeof navItems)[number]["key"];

export default function Header() {
  const pathname = usePathname() || "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLocale: Locale = (() => {
    const first = pathname.split("/")[1];
    return ["it", "en", "fr", "ar"].includes(first) ? (first as Locale) : defaultLocale;
  })();

  const t = getHomepageCopy(currentLocale);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 h-[92px] overflow-visible bg-[rgba(246,241,232,0.92)] shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
          <Link
            href={localizedPath(currentLocale, "/")}
            className="flex shrink-0 items-center"
            onClick={closeMenu}
          >
            <Image
              src="/Images/logo.png"
              alt="Logo Accanto"
              width={110}
              height={110}
              className="h-[160px] w-[160px] object-contain md:h-[90px] md:w-[200px]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={localizedPath(currentLocale, item.href)}
                className="text-sm font-medium text-[var(--ink)]/75 transition-colors hover:text-[var(--green)]"
              >
                {t.nav[item.key as NavKey]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <a
              href="https://wa.me/393792306809"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[var(--green)] hover:bg-[var(--sand)] hover:text-[var(--green)]"
            >
              {t.nav.whatsapp} →
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
            aria-label="Apri menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-[var(--ink)] transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[var(--ink)] transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[var(--ink)] transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-[92px] z-40 transform bg-white shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
        style={{ maxHeight: "calc(100vh - 92px)", overflowY: "auto" }}
      >
        <nav className="flex flex-col p-6">
          <div className="mb-5">
            <LanguageSwitcher />
          </div>

          {navItems.map((item) => (
            <Link
              key={item.key}
              href={localizedPath(currentLocale, item.href)}
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-base font-medium text-[var(--ink)] transition-colors hover:text-[var(--green)]"
            >
              {t.nav[item.key as NavKey]}
            </Link>
          ))}

          <a
            href="https://wa.me/393792306809"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--green)] px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[var(--sand)] hover:text-[var(--green)]"
          >
            {t.nav.whatsapp} →
          </a>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}