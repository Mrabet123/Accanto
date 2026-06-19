"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LANGUAGE_COOKIE_NAME } from "@/lib/i18n/language-preference";
import { locales, type Locale } from "@/lib/i18n/config";

const LABELS: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  fr: "Français",
  ar: "العربية",
};

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; path=/; max-age=${maxAge}; samesite=lax`;
}

export default function LanguagePreferenceModal() {
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved =
      window.localStorage.getItem(LANGUAGE_COOKIE_NAME) ||
      getCookie(LANGUAGE_COOKIE_NAME);
    if (!saved || !locales.includes(saved as Locale)) {
      setOpen(true);
    }
  }, []);

  const chooseLanguage = (lang: Locale) => {
    setCookie(LANGUAGE_COOKIE_NAME, lang);
    window.localStorage.setItem(LANGUAGE_COOKIE_NAME, lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    setOpen(false);

    const destination = lang === "it" ? "/" : `/${lang}`;
    if (pathname !== destination) {
      router.replace(destination);
    }
  };

  if (!mounted || !open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-5 backdrop-blur-sm">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-[var(--sand)] shadow-2xl ring-1 ring-black/5">
        {/* Decorative top bar */}
        <div className="h-1.5 w-full bg-[var(--green)]" />

        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--green)]/10 text-2xl">
              🌐
            </div>
            <h2 className="text-2xl font-bold text-[var(--ink)] md:text-3xl">
              Scegli la tua lingua
            </h2>
          </div>

          <p className="mt-4 text-base text-[var(--ink)]/80">
            Benvenuto su <strong className="text-[var(--green)]">Accanto</strong>.
          </p>
          <p className="mt-1 text-base text-[var(--ink)]/70">
            Seleziona la lingua che preferisci. La tua scelta verrà ricordata per
            le prossime visite.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {locales.map((lang) => (
              <button
                key={lang}
                onClick={() => chooseLanguage(lang)}
                className="
                  group
                  relative
                  rounded-2xl
                  border-2
                  border-[var(--ink)]/10
                  bg-white/80
                  px-4
                  py-4
                  text-center
                  text-base
                  font-medium
                  text-[var(--ink)]
                  shadow-sm
                  transition-all
                  duration-200
                  hover:border-[var(--green)]
                  hover:bg-white
                  hover:shadow-md
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[var(--green)]/40
                "
              >
                <span className="block text-xl leading-none">{LABELS[lang]}</span>
                <span className="mt-1 block text-xs uppercase tracking-wider text-[var(--ink)]/40">
                  {lang}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[var(--ink)]/50">
            Potrai cambiare lingua in qualsiasi momento.
          </p>
        </div>
      </div>
    </div>
  );
}