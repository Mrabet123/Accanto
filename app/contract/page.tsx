import type { Metadata } from "next";
import ContractClient from "./contractClient";

export const metadata: Metadata = {
  title: "Collaboration Terms & Contract — Accanto Home Care OSS",
  description:
    "My professional collaboration terms — advance payment, 7-day cancellation policy, OSS scope boundaries, GDPR compliance. Read before submitting your evaluation request.",
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
  },

  openGraph: {
    type: "website",
    url: "https://accanto.care/contract",
    title: "Collaboration Terms & Contract — Accanto Home Care OSS",
    description:
      "Professional collaboration terms — rates, cancellation policy, OSS scope, GDPR. Everything is clear before we begin.",
    siteName: "Accanto",
    locale: "en_GB",
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
    title: "Collaboration Terms & Contract — Accanto Home Care OSS",
    description:
      "Professional collaboration terms — rates, cancellation policy, OSS scope, GDPR.",
    images: ["https://accanto.care/Images/og-image.jpg"],
  },

  icons: {
    icon: "/Images/logo.svg",
    apple: "/Images/apple-touch-icon.png",
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Collaboration Terms & Contract — Accanto Home Care",
            description:
              "Professional collaboration terms for Accanto home care services — payment, cancellation policy, OSS scope, GDPR.",
            url: "https://accanto.care/contract",
            mainEntity: {
              "@id": "https://accanto.care/#business",
            },
          }),
        }}
      />

      <ContractClient />
    </>
  );
}