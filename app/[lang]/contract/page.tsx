import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContractClient from "@/components/contract/contractClient";

const supportedLangs = ["fr", "en", "ar"] as const;
type Lang = (typeof supportedLangs)[number];

const titles: Record<Lang, string> = {
  fr: "Conditions de collaboration et contrat — Accanto Home Care OSS",
  en: "Collaboration terms and contract — Accanto Home Care OSS",
  ar: "شروط التعاون والعقد — Accanto Home Care OSS",
};

const descriptions: Record<Lang, string> = {
  fr: "Conditions de collaboration professionnelle — paiement anticipé, politique d’annulation à 7 jours, périmètre OSS, conformité GDPR.",
  en: "Professional collaboration terms — upfront payment, 7-day cancellation policy, OSS scope, GDPR compliance.",
  ar: "شروط التعاون المهنية — الدفع المسبق، سياسة الإلغاء قبل 7 أيام، نطاق OSS، والامتثال للائحة GDPR.",
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
      canonical: `https://accanto.care/${locale}/contract`,
      languages: {
        it: "https://accanto.care/contract",
        fr: "https://accanto.care/fr/contract",
        en: "https://accanto.care/en/contract",
        ar: "https://accanto.care/ar/contract",
      },
    },
    openGraph: {
      type: "website",
      url: `https://accanto.care/${locale}/contract`,
      title: titles[locale],
      description: descriptions[locale],
      siteName: "Accanto",
      locale: locale === "fr" ? "fr_FR" : locale === "ar" ? "ar_AR" : "en_US",
      images: [
        {
          url: "https://accanto.care/Images/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descriptions[locale],
      images: ["https://accanto.care/Images/og-image.jpg"],
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

  return <ContractClient lang={lang as Lang} />;
}