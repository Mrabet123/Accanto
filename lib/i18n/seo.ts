import type { Metadata } from "next";
import { getHomepageCopy } from "./homepage";
import {
  hreflangByLocale,
  localizedPath,
  locales,
  ogLocaleByLocale,
  type Locale,
} from "./config";

const contractSeoCopy: Record<
  Locale,
  { title: string; description: string; ogAlt: string }
> = {
  it: {
    title: "Termini di collaborazione e contratto — Accanto Home Care OSS",
    description:
      "Termini di collaborazione professionale — pagamento anticipato, politica di cancellazione a 7 giorni, confini del perimetro OSS, conformità GDPR.",
    ogAlt: "Accanto Home Care contract preview",
  },
  en: {
    title: "Collaboration terms and contract — Accanto Home Care OSS",
    description:
      "Professional collaboration terms — upfront payment, 7-day cancellation policy, OSS scope, GDPR compliance.",
    ogAlt: "Accanto Home Care contract preview",
  },
  fr: {
    title: "Conditions de collaboration et contrat — Accanto Home Care OSS",
    description:
      "Conditions de collaboration professionnelle — paiement anticipé, politique d’annulation à 7 jours, périmètre OSS, conformité GDPR.",
    ogAlt: "Aperçu du contrat Accanto Home Care",
  },
  ar: {
    title: "شروط التعاون والعقد — Accanto Home Care OSS",
    description:
      "شروط التعاون المهنية — الدفع المسبق، سياسة الإلغاء قبل 7 أيام، نطاق OSS، والامتثال للائحة GDPR.",
    ogAlt: "معاينة عقد Accanto Home Care",
  },
};

export function buildHomepageMetadata(locale: Locale, pathname = "/"): Metadata {
  const copy = getHomepageCopy(locale).seo;

  return {
    metadataBase: new URL("https://accanto.care"),
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: localizedPath(locale, pathname),
      languages: Object.fromEntries(
        locales.map((l) => [hreflangByLocale[l], localizedPath(l, pathname)]),
      ),
    },
    openGraph: {
      type: "website",
      locale: ogLocaleByLocale[locale],
      siteName: "Accanto",
      url: `https://accanto.care${localizedPath(locale, pathname)}`,
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: "/Images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: copy.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/Images/og-image.jpg"],
    },
  };
}

export function buildContractMetadata(
  locale: Locale,
  pathname = "/contract",
): Metadata {
  const copy = contractSeoCopy[locale];
  const canonicalPath = localizedPath(locale, pathname);

  return {
    metadataBase: new URL("https://accanto.care"),
    title: copy.title,
    description: copy.description,
    robots: "index, follow",
    alternates: {
      canonical: canonicalPath,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangByLocale[l], localizedPath(l, pathname)]),
      ),
    },
    openGraph: {
      type: "website",
      locale: ogLocaleByLocale[locale],
      siteName: "Accanto",
      url: `https://accanto.care${canonicalPath}`,
      title: copy.title,
      description: copy.description,
      images: [
        {
          url: "/Images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: copy.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/Images/og-image.jpg"],
    },
  };
}