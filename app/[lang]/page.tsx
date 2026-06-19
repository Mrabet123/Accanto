import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/hero";
import Credentials from "@/components/credentials";
import AudienceSection from "@/components/audience";
import CompetitiveAdvantage from "@/components/competitive-advantage";
import HowWorkCta from "@/components/how-work-cta";
import { buildHomepageMetadata } from "@/lib/i18n/seo";
import { getHomepageCopy } from "@/lib/i18n/homepage";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales
    .filter((lang) => lang !== "it")
    .map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang) || lang === "it") return {};
  return buildHomepageMetadata(lang, "/");
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang) || lang === "it") {
    notFound();
  }

  const locale = lang as Locale;
  const copy = getHomepageCopy(locale);

  return (
    <main
      lang={locale}
      dir={copy.dir}
      className="min-h-screen bg-[var(--sand)] text-[var(--ink)]"
    >
      <Hero lang={locale} />
      <Credentials lang={locale} />
      <AudienceSection lang={locale} />
      <CompetitiveAdvantage lang={locale} />
      <HowWorkCta lang={locale} />
    </main>
  );
}