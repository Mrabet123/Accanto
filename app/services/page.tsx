import type { Metadata } from "next";
import ServicesClient from "./servicesClient";

export const metadata: Metadata = {
  title: "Home Care Services — Elderly, Disability, Children · Accanto",
  description:
    "My certified OSS home care services: elderly care, disability support, child care with special needs. From €28/h, minimum 5h per session. Como Lake · Lecco · Sondrio · Milan.",
  keywords: [
    "assistenza anziani Lecco",
    "supporto disabilità Como",
    "OSS servizi domiciliari",
    "assistenza minori bisogni speciali",
    "caregiver certificato Lecco",
    "servizi OSS Lago di Como",
    "home care services Como Lake",
    "disability care Lecco",
    "elderly care Lake Como",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "https://accanto.care/services",
    title: "Home Care Services — Elderly, Disability, Children · Accanto",
    description:
      "Certified OSS home care services. Elderly care, disability support, child care. From €28/h. Daytime and night sessions. Como · Lecco · Sondrio · Milan.",
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
    title: "Home Care Services — Elderly, Disability, Children · Accanto",
    description:
      "Certified OSS home care services. From €28/h. Como Lake · Lecco · Sondrio · Milan.",
    images: ["/Images/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Care Services — Accanto",
  provider: {
    "@id": "https://accanto.care/#business",
  },
  serviceType: "Home Care — OSS",
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