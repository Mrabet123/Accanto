import type { Metadata } from "next";
import ContractClient from "@/components/contract/contractClient";

export const metadata: Metadata = {
  title: "Termini di collaborazione e contratto — Accanto Home Care OSS",
  description:
    "I miei termini di collaborazione professionale — pagamento anticipato, politica di cancellazione a 7 giorni, confini del perimetro OSS, conformità GDPR. Leggi prima di inviare la tua richiesta.",
  keywords: [
    "termini collaborazione OSS",
    "contratto assistenza domiciliare",
    "condizioni caregiver privato",
    "politica cancellazione assistenza domiciliare",
    "GDPR assistenza domiciliare Italia",
  ],
  authors: [{ name: "Ghassen Mansouri" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://accanto.care/contract",
    languages: {
      it: "https://accanto.care/contract",
      fr: "https://accanto.care/fr/contract",
      en: "https://accanto.care/en/contract",
      ar: "https://accanto.care/ar/contract",
    },
  },
  openGraph: {
    type: "website",
    url: "https://accanto.care/contract",
    title: "Termini di collaborazione e contratto — Accanto Home Care OSS",
    description:
      "Termini di collaborazione professionale — tariffe, politica di cancellazione, perimetro OSS, GDPR. Tutto è chiaro prima di iniziare.",
    siteName: "Accanto",
    locale: "it_IT",
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
    title: "Termini di collaborazione e contratto — Accanto Home Care OSS",
    description:
      "Termini di collaborazione professionale — tariffe, politica di cancellazione, perimetro OSS, GDPR.",
    images: ["https://accanto.care/Images/og-image.jpg"],
  },
  icons: {
    icon: "/Images/logo.png",
    apple: "/Images/apple-touch-icon.png",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Termini di collaborazione e contratto — Accanto Home Care",
              description:
                "Termini di collaborazione professionale per i servizi di assistenza domiciliare Accanto — pagamento, politica di cancellazione, perimetro OSS, GDPR.",
              url: "https://accanto.care/contract",
              mainEntity: {
                "@id": "https://accanto.care/#business",
              },
            },
            null,
            0,
          ).replace(/</g, "\\u003c"),
        }}
      />
      <ContractClient lang="it" />
    </>
  );
}