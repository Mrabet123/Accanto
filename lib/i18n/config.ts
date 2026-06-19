export const locales = ["it", "en", "fr", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export const localeLabels: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export const hreflangByLocale: Record<Locale, string> = {
  it: "it-IT",
  en: "en-US",
  fr: "fr-FR",
  ar: "ar",
};

export const ogLocaleByLocale: Record<Locale, string> = {
  it: "it_IT",
  en: "en_US",
  fr: "fr_FR",
  ar: "ar_AR",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function normalizePath(pathname: string) {
  if (!pathname || pathname === "") return "/";
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function stripLocale(pathname: string) {
  const path = normalizePath(pathname);
  const parts = path.split("/");
  const maybeLocale = parts[1];

  if (!isLocale(maybeLocale)) return path.replace(/\/+$/, "") || "/";

  const rest = parts.slice(2).join("/");
  return rest ? `/${rest}` : "/";
}

export function localizedPath(locale: Locale, pathname: string) {
  const clean = stripLocale(pathname);

  if (locale === defaultLocale) return clean;

  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}