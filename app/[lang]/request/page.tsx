import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RequestClient from "@/components/request/requestClient";

const supportedLangs = ["fr", "en", "ar"] as const;
type Lang = (typeof supportedLangs)[number];

const titles: Record<Lang, string> = {
  fr: "Envoyer une demande — Accanto Home Care",
  en: "Send a request — Accanto Home Care",
  ar: "إرسال طلب — Accanto Home Care",
};

const descriptions: Record<Lang, string> = {
  fr: "Envoyez votre demande d’assistance à domicile à Ghassen Mansouri, professionnel OSS certifié. J’examine personnellement chaque demande sous 48 heures. Lac de Côme · Lecco · Sondrio · Milan.",
  en: "Send your home-care request to Ghassen Mansouri, a certified OSS professional. I personally review each request within 48 hours. Lake Como · Lecco · Sondrio · Milan.",
  ar: "أرسل طلب الرعاية المنزلية إلى Ghassen Mansouri، وهو محترف OSS معتمد. أراجع كل طلب شخصيًا خلال 48 ساعة. بحيرة كومو · ليكو · سوندريو · ميلانو.",
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

  if (!supportedLangs.includes(lang as Lang)) {
    notFound();
  }

  const locale = lang as Lang;

  return {
    title: titles[locale],
    description: descriptions[locale],
    authors: [{ name: "Ghassen Mansouri" }],
    robots: "index, follow",
    alternates: {
      canonical: `https://www.accanto-care.com/${locale}/request`,
      languages: {
        "x-default": "https://www.accanto-care.com/request",
        it: "https://www.accanto-care.com/request",
        fr: "https://www.accanto-care.com/fr/request",
        en: "https://www.accanto-care.com/en/request",
        ar: "https://www.accanto-care.com/ar/request",
      },
    },
    openGraph: {
      type: "website",
      url: `https://www.accanto-care.com/${locale}/request`,
      title: titles[locale],
      description: descriptions[locale],
      siteName: "Accanto",
      locale: locale === "fr" ? "fr_FR" : locale === "ar" ? "ar_AR" : "en_US",
      images: [
        {
          url: "https://www.accanto-care.com/Images/og-image.jpg",
          width: 1200,
          height: 630,
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

  if (!supportedLangs.includes(lang as Lang)) {
    notFound();
  }

  return <RequestClient lang={lang as Lang} />;
}