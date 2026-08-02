import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicesClient from "@/components/services/servicesClient";
import {
  hreflangByLocale,
  localizedPath,
  locales,
  ogLocaleByLocale,
  type Locale,
} from "@/lib/i18n/config";

const supportedLangs = ["fr", "en", "ar"] as const;
type SupportedLang = (typeof supportedLangs)[number];

const titles: Record<SupportedLang, string> = {
  fr: "Services — Accanto Home Care OSS",
  en: "Services — Accanto Home Care OSS",
  ar: "الخدمات — Accanto Home Care OSS",
};

const descriptions: Record<SupportedLang, string> = {
  fr: "Services d’assistance à domicile structurés pour personnes âgées, personnes en situation de handicap et mineurs avec besoins spécifiques.",
  en: "Structured home-care services for elderly people, people with disabilities, and minors with special needs.",
  ar: "خدمات رعاية منزلية منظمة لكبار السن والأشخاص ذوي الإعاقة والقاصرين ذوي الاحتياجات الخاصة.",
};

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!supportedLangs.includes(lang as SupportedLang)) {
    notFound();
  }

  const locale = lang as SupportedLang;
  const pathname = "/services";

  return {
    metadataBase: new URL("https://www.accanto-care.com"),
    title: titles[locale],
    description: descriptions[locale],
    keywords: [
      "assistenza domiciliare",
      "OSS",
      "elderly care",
      "care at home",
      "home care services",
      "الرعاية المنزلية",
    ],
    authors: [{ name: "Ghassen Mansouri" }],
    robots: "index, follow",
    alternates: {
      canonical: `https://www.accanto-care.com${localizedPath(locale, pathname)}`,
      languages: {
  "x-default": "https://www.accanto-care.com/services",
  ...Object.fromEntries(
    locales.map((l) => [
      hreflangByLocale[l],
      `https://www.accanto-care.com${localizedPath(l, pathname)}`,
    ]),
  ),
},
    },
    openGraph: {
      type: "website",
      locale: ogLocaleByLocale[locale as Locale],
      siteName: "Accanto",
      url: `https://www.accanto-care.com${localizedPath(locale, pathname)}`,
      title: titles[locale],
      description: descriptions[locale],
      images: [
        {
          url: "https://www.accanto-care.com/Images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Accanto services preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descriptions[locale],
      images: ["https://www.accanto-care.com/Images/og-image.jpg"],
    },
    icons: {
      icon: "/Images/logo.png",
      apple: "/Images/apple-touch-icon.png",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!supportedLangs.includes(lang as SupportedLang)) {
    notFound();
  }

  const locale = lang as Locale;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: titles[lang as SupportedLang],
              description: descriptions[lang as SupportedLang],
              url: `https://www.accanto-care.com${localizedPath(locale, "/services")}`,
              mainEntity: {
                "@id": "https://www.accanto-care.com/#business",
              },
            },
            null,
            0,
          ).replace(/</g, "\\u003c"),
        }}
      />
      <ServicesClient lang={locale} />
    </>
  );
}