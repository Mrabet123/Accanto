import type { Metadata } from "next";
import ProfileClient from "./profileClient";

export const metadata: Metadata = {
  title: "Ghassen Mansouri — Certified OSS Professional · Accanto",
  description:
    "I'm Ghassen Mansouri — certified OSS, 8 years in social healthcare, 10 in international hospitality. I speak Italian, English, French, Arabic and German. Based in Dervio, Lecco.",
  keywords: [
    "Ghassen Mansouri OSS",
    "operatore socio sanitario Lecco",
    "OSS certificato Como",
    "caregiver bilingue Lago di Como",
    "professionista OSS partita IVA",
    "OSS multilingue italiano inglese francese arabo tedesco",
    "assistenza domiciliare professionale Lecco",
  ],
  authors: [{ name: "Ghassen Mansouri" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/profile",
  },
  openGraph: {
    type: "profile",
    url: "https://accanto.care/profile",
    title: "Ghassen Mansouri — Certified OSS Professional · Accanto",
    description:
      "8 years in social healthcare, 10 in hospitality. Certified OSS, BLSD, HACCP. Italian, English, French, Arabic, German. Based in Lecco, Lake Como.",
    images: [
      {
        url: "/Images/ghassen.jpg",
        width: 800,
        height: 800,
        alt: "Ghassen Mansouri",
      },
    ],
    siteName: "Accanto",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghassen Mansouri — Certified OSS Professional · Accanto",
    description:
      "8 years in social healthcare, 10 in hospitality. OSS certified. 5 languages. Lake Como · Lecco.",
    images: ["/Images/ghassen.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@id": "https://accanto.care/#person",
  },
  url: "https://accanto.care/profile",
  name: "Ghassen Mansouri — OSS Independent Professional",
  description:
    "Professional profile page for Ghassen Mansouri, certified OSS independent professional based in Dervio, Lecco.",
};

export default function ProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ProfileClient />
    </>
  );
}