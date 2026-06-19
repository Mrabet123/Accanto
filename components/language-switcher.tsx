"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, Languages } from "lucide-react";
import {
  defaultLocale,
  isLocale,
  localeLabels,
  localizedPath,
  stripLocale,
  locales,
  type Locale,
} from "@/lib/i18n/config";

function LanguageSwitcherInner() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const searchParams = useSearchParams();
  const menuRef = useRef<HTMLDivElement>(null);

  const currentLocale: Locale = (() => {
    const first = pathname.split("/")[1];
    return isLocale(first) ? first : defaultLocale;
  })();

  const [open, setOpen] = useState(false);
  const basePath = stripLocale(pathname);
  const query = searchParams.toString();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (nextLocale: Locale) => {
    const target = localizedPath(nextLocale, basePath);
    setOpen(false);
    router.push(query ? `${target}?${query}` : target);
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-2 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--green)] hover:text-[var(--green)]"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Languages className="h-4 w-4" />
        <span>{localeLabels[currentLocale]}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg">
          {locales.map((locale) => {
            const active = locale === currentLocale;
            return (
              <button
                key={locale}
                type="button"
                onClick={() => changeLanguage(locale)}
                className={[
                  "flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors",
                  active
                    ? "bg-[var(--sand)] font-semibold text-[var(--green)]"
                    : "text-[var(--ink)] hover:bg-[var(--sand)]",
                ].join(" ")}
              >
                <span>{localeLabels[locale]}</span>
                {active ? <span>✓</span> : null}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function LanguageSwitcher() {
  return (
    <Suspense fallback={null}>
      <LanguageSwitcherInner />
    </Suspense>
  );
}