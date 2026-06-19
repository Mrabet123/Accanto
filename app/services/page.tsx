import type { Metadata } from "next";
import ServicesClient from "@/components/services/servicesClient";
import { buildServicesMetadata } from "@/lib/i18n/services";

export const metadata: Metadata = buildServicesMetadata("it", "/services");

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
              name: "Servizi — Accanto Home Care OSS",
              description:
                "Servizi di assistenza domiciliare strutturati per anziani, persone con disabilità e minori con bisogni speciali.",
              url: "https://accanto.care/services",
              mainEntity: {
                "@id": "https://accanto.care/#business",
              },
            },
            null,
            0,
          ).replace(/</g, "\\u003c"),
        }}
      />
      <ServicesClient lang="it" />
    </>
  );
}