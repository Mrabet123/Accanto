import type { Metadata } from "next";
import RequestClient from "./requestClient";

export const metadata: Metadata = {
  title: "Invia una richiesta — Accanto Home Care",
  description:
    "Invia la tua richiesta di assistenza domiciliare a Ghassen Mansouri, professionista OSS certificato. Valuto personalmente ogni richiesta entro 48 ore. Lago di Como · Lecco · Sondrio · Milano.",
  keywords: [
    "richiedere assistenza domiciliare Lecco",
    "contattare OSS Como",
    "richiesta valutazione OSS",
    "richiesta assistenza domiciliare Lago di Como",
    "caregiver privato contatto Lecco",
  ],
  authors: [{ name: "Ghassen Mansouri" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/request",
  },
  openGraph: {
    type: "website",
    url: "https://accanto.care/request",
    title: "Invia una richiesta — Accanto Home Care",
    description:
      "Invia la tua richiesta di assistenza domiciliare. Valuto personalmente ogni richiesta entro 48 ore. Non tutte le richieste vengono accettate.",
    images: [
      {
        url: "/Images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Accanto Home Care",
      },
    ],
    locale: "it_IT",
    siteName: "Accanto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invia una richiesta — Accanto Home Care",
    description:
      "Valuto personalmente ogni richiesta entro 48 ore. Lago di Como · Lecco · Milano.",
    images: ["/Images/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Richiesta — Accanto Home Care",
  description:
    "Invia una richiesta di assistenza domiciliare a Ghassen Mansouri, professionista OSS indipendente certificato.",
  url: "https://accanto.care/request",
  mainEntity: {
    "@id": "https://accanto.care/#business",
  },
};

export default function RequestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <RequestClient />
    </>
  );
}