import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfileClient from "@/components/profile/profileClient";
import { buildProfileMetadata } from "@/lib/i18n/profile";

const supportedLangs = ["fr", "en", "ar"] as const;
type SupportedLang = (typeof supportedLangs)[number];

const titles: Record<SupportedLang, string> = {
  fr: "Ghassen Mansouri — Professionnel OSS certifié · Accanto",
  en: "Ghassen Mansouri — Certified OSS Professional · Accanto",
  ar: "غسان منصوري — أخصائي OSS معتمد · Accanto",
};

const descriptions: Record<SupportedLang, string> = {
  fr: "Profil professionnel de Ghassen Mansouri, professionnel OSS indépendant certifié basé à Dervio, Lecco.",
  en: "Professional profile of Ghassen Mansouri, certified independent OSS professional based in Dervio, Lecco.",
  ar: "الملف المهني لغسان منصوري، أخصائي OSS مستقل معتمد ومقره في ديرفيو، ليكو.",
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

  return buildProfileMetadata(lang as SupportedLang, "/profile");
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

  const locale = lang as SupportedLang;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url: `https://www.accanto-care.com/${locale}/profile`,
            name: titles[locale],
            description: descriptions[locale],
            mainEntity: {
              "@type": "Person",
              "@id": "https://www.accanto-care.com/#person",
              name: "Ghassen Mansouri",
              jobTitle: "Operatore Socio Sanitario (OSS)",
              url: `https://www.accanto-care.com/${locale}/profile`,
              image: "https://www.accanto-care.com/Images/ghassen.jpg",
              worksFor: {
                "@type": "Organization",
                name: "Accanto",
              },
              knowsLanguage: [
                "Italian",
                "English",
                "French",
                "Arabic",
                "German",
              ],
            },
          }).replace(/</g, "\\u003c"),
        }}
      />

      <ProfileClient lang={locale} />
    </>
  );
}