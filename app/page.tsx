import type { Metadata } from "next";
import Hero from "@/components/hero";
import Credentials from "@/components/credentials";
import AudienceSection from "@/components/audience";
import CompetitiveAdvantage from "@/components/competitive-advantage";
import HowWorkCta from "@/components/how-work-cta";

export const metadata: Metadata = {
  title: "Accanto — OSS Home Care · Como Lake · Lecco · Milan",
  description:
    "I'm Ghassen Mansouri, certified OSS independent professional. Structured home care for elderly, disabled and children with special needs. 5 languages. Lake Como · Lecco · Milan.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://accanto.care/",
    title: "Accanto — OSS Home Care · Como Lake · Lecco · Milan",
    description:
      "Certified OSS independent professional. Structured home care for elderly, disabled and children. 5 languages. Lake Como · Lecco · Milan.",
    images: [
      {
        url: "/Images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Accanto — OSS Home Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accanto — OSS Home Care · Como Lake · Lecco · Milan",
    description:
      "Certified OSS independent professional. Structured home care for elderly, disabled and children. 5 languages.",
    images: ["/Images/og-image.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://accanto.care/#business",
      name: "Accanto — Assistenza Domiciliare OSS",
      alternateName: "Accanto Home Care",
      description:
        "Certified OSS independent professional providing structured home care for elderly, disabled and children with special needs. Available in Italian, English, French, Arabic and German.",
      url: "https://accanto.care",
      telephone: "+393792306809",
      email: "hello@accanto.care",
      vatID: "01103920144",
      foundingDate: "2024",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Bank Transfer",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Dervio",
        addressLocality: "Dervio",
        addressRegion: "LC",
        postalCode: "23824",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 46.0763,
        longitude: 9.3348,
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Provincia di Lecco" },
        { "@type": "AdministrativeArea", name: "Provincia di Como" },
        { "@type": "AdministrativeArea", name: "Provincia di Sondrio" },
        { "@type": "AdministrativeArea", name: "Provincia di Milano" },
      ],
      serviceType: [
        "Elderly home care",
        "Disability support",
        "Child care with special needs",
        "Assistenza domiciliare anziani",
        "Supporto disabilità",
        "Assistenza minori bisogni speciali",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Home Care Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Elderly Care — Daytime session",
              description:
                "Personal hygiene, mobilization, meal preparation, cognitive stimulation, family updates.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "28",
              priceCurrency: "EUR",
              unitText: "per hour",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Disability Support",
              description:
                "ADL assistance, mobility support, accompaniment, care diary, family coordination.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "28",
              priceCurrency: "EUR",
              unitText: "per hour",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Child Care — Special Needs",
              description:
                "Educational assistance, personal care, supervised activities, school accompaniment.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "28",
              priceCurrency: "EUR",
              unitText: "per hour",
            },
          },
        ],
      },
      sameAs: ["https://accanto.care"],
    },
    {
      "@type": "Person",
      "@id": "https://accanto.care/#person",
      name: "Ghassen Mansouri",
      jobTitle: "Operatore Socio-Sanitario — OSS Independent Professional",
      description:
        "Certified OSS with 8 years in social healthcare and 10 years in international hospitality. Fluent in Italian, English, French, Arabic and German.",
      url: "https://accanto.care/profile",
      telephone: "+393792306809",
      email: "hello@accanto.care",
      image: "https://accanto.care/Images/ghassen.jpg",
      worksFor: {
        "@id": "https://accanto.care/#business",
      },
      knowsLanguage: ["it", "en", "fr", "ar", "de"],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "OSS — Operatore Socio-Sanitario",
          credentialCategory: "Professional Certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "BLSD — Cardiopulmonary Resuscitation",
          credentialCategory: "Professional Certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "HACCP — Food Safety",
          credentialCategory: "Professional Certification",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dervio",
        addressRegion: "LC",
        addressCountry: "IT",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
        <Hero />
        <Credentials />
        <AudienceSection />
        <CompetitiveAdvantage />
        <HowWorkCta />
      </main>
    </>
  );
}