import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfileClient from "@/components/profile/profileClient";
import { buildProfileMetadata } from "@/lib/i18n/profile";

const supportedLangs = ["fr", "en", "ar"] as const;
type SupportedLang = (typeof supportedLangs)[number];

export function generateStaticParams() {
  return supportedLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!supportedLangs.includes(lang as SupportedLang)) {
    notFound();
  }

  return buildProfileMetadata(lang as SupportedLang, "/profile");
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!supportedLangs.includes(lang as SupportedLang)) {
    notFound();
  }

  return <ProfileClient lang={lang as SupportedLang} />;
}