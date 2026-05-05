import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://accanto.care"),
  title: {
    default: "Accanto — OSS Home Care · Como Lake · Lecco · Milan",
    template: "%s | Accanto",
  },
  description:
    "I'm Ghassen Mansouri, certified OSS independent professional. Structured home care for elderly, disabled and children with special needs. 5 languages. Lake Como · Lecco · Milan.",
  keywords: [
    "OSS domiciliare Lecco",
    "assistenza anziani Como",
    "caregiver privato Lago di Como",
    "assistenza domiciliare privata Lecco",
    "home care Como Lake English",
    "OSS libero professionista Lecco",
    "assistenza domiciliare Milano",
    "caregiver multilingue Como",
    "OSS Sondrio",
    "assistenza domiciliare Valtellina",
  ],
  authors: [{ name: "Ghassen Mansouri" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://accanto.care/",
    title: "Accanto — OSS Home Care · Como Lake · Lecco · Milan",
    description:
      "Certified OSS independent professional. Structured home care for elderly, disabled and children. 5 languages. Lake Como · Lecco · Milan.",
    siteName: "Accanto",
    locale: "en_GB",
    alternateLocale: ["it_IT", "fr_FR"],
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
  icons: {
    icon: "/Images/logo.svg",
    apple: "/Images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${cormorant.variable} bg-[var(--sand)] text-[var(--ink)] antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}