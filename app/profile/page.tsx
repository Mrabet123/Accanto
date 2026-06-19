import type { Metadata } from "next";
import ProfileClient from "@/components/profile/profileClient";

export const metadata: Metadata = {
  title: "Ghassen Mansouri — Professionista OSS certificato · Accanto",
  description:
    "Sono Ghassen Mansouri — OSS certificato, 8 anni in ambito socio-sanitario e 10 in hospitality internazionale. Parlo italiano, inglese, francese, arabo e tedesco. Basato a Dervio, Lecco.",
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
    title: "Ghassen Mansouri — Professionista OSS certificato · Accanto",
    description:
      "8 anni in ambito socio-sanitario, 10 in hospitality. OSS certificato, BLSD, HACCP. Italiano, inglese, francese, arabo e tedesco. Basato a Lecco, Lago di Como.",
    images: [
      {
        url: "/Images/ghassen.jpg",
        width: 800,
        height: 800,
        alt: "Ghassen Mansouri",
      },
    ],
    siteName: "Accanto",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghassen Mansouri — Professionista OSS certificato · Accanto",
    description:
      "8 anni in ambito socio-sanitario, 10 in hospitality. OSS certificato. 5 lingue. Lago di Como · Lecco.",
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
  name: "Ghassen Mansouri — Professionista OSS indipendente",
  description:
    "Pagina profilo professionale di Ghassen Mansouri, professionista OSS indipendente certificato con base a Dervio, Lecco.",
};

export default function ProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ProfileClient lang="it" />
    </>
  );
}