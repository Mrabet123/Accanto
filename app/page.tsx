import type { Metadata } from "next";
import Hero from "@/components/hero";
import Credentials from "@/components/credentials";
import AudienceSection from "@/components/audience";
import CompetitiveAdvantage from "@/components/competitive-advantage";
import HowWorkCta from "@/components/how-work-cta";
import { getHomepageCopy } from "@/lib/i18n/homepage";
import type { Locale } from "@/lib/i18n/config";

const lang: Locale = "it";
const copy = getHomepageCopy(lang);

export const metadata: Metadata = {
  metadataBase: new URL("https://accanto.care"),
  title: "Accanto — Assistenza domiciliare OSS a Lecco, Como e Milano",
  description:
    "Sono Ghassen Mansouri, OSS professionista indipendente. Assistenza domiciliare strutturata per anziani, persone con disabilità e minori con bisogni speciali nel Lago di Como, a Lecco, Sondrio e Milano.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Accanto",
    url: "https://accanto.care/",
    title: "Accanto — Assistenza domiciliare OSS a Lecco, Como e Milano",
    description:
      "OSS professionista indipendente. Assistenza domiciliare strutturata per anziani, persone con disabilità e minori con bisogni speciali nel Lago di Como, a Lecco, Sondrio e Milano.",
    images: [
      {
        url: "/Images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Accanto — Assistenza domiciliare OSS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accanto — Assistenza domiciliare OSS a Lecco, Como e Milano",
    description:
      "OSS professionista indipendente. Assistenza domiciliare strutturata per anziani, persone con disabilità e minori con bisogni speciali.",
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
        "OSS professionista indipendente che offre assistenza domiciliare strutturata per anziani, persone con disabilità e minori con bisogni speciali.",
      url: "https://accanto.care/",
      telephone: "+393792306809",
      email: "hello@accanto.care",
      vatID: "01103920144",
      foundingDate: "2024",
      currenciesAccepted: "EUR",
      paymentAccepted: "Contanti, bonifico bancario",
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
        "Assistenza domiciliare anziani",
        "Supporto persone con disabilità",
        "Assistenza minori con bisogni speciali",
        "Igiene personale",
        "Mobilizzazione",
        "Compagnia e sorveglianza",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servizi di assistenza domiciliare",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Assistenza anziani — Intervento diurno",
              description:
                "Igiene personale, mobilizzazione, preparazione dei pasti, stimolazione cognitiva e aggiornamento alla famiglia.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "28",
              priceCurrency: "EUR",
              unitText: "all'ora",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Supporto persone con disabilità",
              description:
                "Assistenza nelle attività quotidiane, supporto alla mobilità, accompagnamento, diario di cura e coordinamento con la famiglia.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "28",
              priceCurrency: "EUR",
              unitText: "all'ora",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Assistenza minori con bisogni speciali",
              description:
                "Supporto educativo, cura personale, attività supervisionate e accompagnamento a scuola.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "28",
              priceCurrency: "EUR",
              unitText: "all'ora",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://accanto.care/#person",
      name: "Ghassen Mansouri",
      jobTitle: "Operatore Socio-Sanitario — OSS professionista indipendente",
      description:
        "OSS certificato con 8 anni di esperienza in ambito socio-sanitario e oltre 10 anni in hospitality internazionale.",
      url: "https://accanto.care/profile",
      telephone: "+393792306809",
      email: "hello@accanto.care",
      image: "https://accanto.care/Images/ghassen.jpg",
      worksFor: {
        "@id": "https://accanto.care/#business",
      },
      knowsLanguage: ["it"],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "OSS — Operatore Socio-Sanitario",
          credentialCategory: "Certificazione professionale",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "BLSD — Rianimazione cardiopolmonare",
          credentialCategory: "Certificazione professionale",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "HACCP — Sicurezza alimentare",
          credentialCategory: "Certificazione professionale",
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
      <main
        lang={lang}
        dir={copy.dir}
        className="min-h-screen bg-[var(--sand)] text-[var(--ink)]"
      >
        <Hero lang={lang} />
        <Credentials lang={lang} />
        <AudienceSection lang={lang} />
        <CompetitiveAdvantage lang={lang} />
        <HowWorkCta lang={lang} />
      </main>
    </>
  );
}