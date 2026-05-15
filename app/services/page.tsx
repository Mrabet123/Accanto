import type { Metadata } from "next";
import ServicesClient from "./servicesClient";

export const metadata: Metadata = {
  title: "Servizi di assistenza domiciliare OSS — Anziani, disabilità, minori · Accanto",
  description:
    "I miei servizi di assistenza domiciliare OSS: assistenza anziani, supporto disabilità, assistenza minori con bisogni speciali. Da €28/ora, minimo 5 ore per sessione. Lago di Como · Lecco · Sondrio · Milano.",
  keywords: [
    "assistenza anziani Lecco",
    "supporto disabilità Como",
    "servizi OSS domiciliari",
    "assistenza minori bisogni speciali",
    "caregiver certificato Lecco",
    "servizi OSS Lago di Como",
    "assistenza domiciliare Como",
    "supporto disabilità Lecco",
    "assistenza anziani Lago di Como",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "https://accanto.care/services",
    title: "Servizi di assistenza domiciliare OSS — Anziani, disabilità, minori · Accanto",
    description:
      "Servizi OSS certificati di assistenza domiciliare. Assistenza anziani, supporto disabilità, assistenza minori. Da €28/ora. Fasce diurne e notturne. Como · Lecco · Sondrio · Milano.",
    images: [
      {
        url: "/Images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servizi di assistenza domiciliare OSS — Anziani, disabilità, minori · Accanto",
    description:
      "Servizi OSS certificati di assistenza domiciliare. Da €28/ora. Lago di Como · Lecco · Sondrio · Milano.",
    images: ["/Images/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servizi di assistenza domiciliare OSS — Accanto",
  provider: {
    "@id": "https://accanto.care/#business",
  },
  serviceType: "Assistenza domiciliare OSS",
  areaServed: ["Lecco", "Como", "Sondrio", "Milano"],
  url: "https://accanto.care/services",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <ServicesClient />
    </>
  );
}