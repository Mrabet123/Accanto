import type { Metadata } from "next";
import RequestClient from "./requestClient";

export const metadata: Metadata = {
  title: "Submit a Request — Accanto Home Care",
  description:
    "Submit your home care request to Ghassen Mansouri, certified OSS professional. I review every request personally within 48 hours. Como Lake · Lecco · Sondrio · Milan.",
  keywords: [
    "richiedere assistenza domiciliare Lecco",
    "contattare caregiver Como",
    "richiesta valutazione OSS",
    "home care request Lake Como",
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
    title: "Submit a Request — Accanto Home Care",
    description:
      "Submit your home care request. I review every request personally within 48 hours. Not all requests are accepted.",
    images: [
      {
        url: "/Images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Accanto Home Care",
      },
    ],
    locale: "en_GB",
    siteName: "Accanto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit an Request — Accanto Home Care",
    description:
      "I review every request personally within 48 hours. Como Lake · Lecco · Milan.",
    images: ["/Images/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Request — Accanto Home Care",
  description:
    "Submit a home care request to Ghassen Mansouri, certified OSS independent professional.",
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