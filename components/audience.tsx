import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { defaultLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getHomepageCopy } from "@/lib/i18n/homepage";

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-[10px] border border-[#dfd7ca] bg-[#f3efe7] px-3 py-2 text-[14px] text-[#4a4239]">
      {children}
    </span>
  );
}

function AudienceCard({
  badge,
  title,
  description,
  tags,
  linkText,
  accentClassName,
  lang,
}: {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  linkText: string;
  accentClassName: string;
  lang: Locale;
}) {
  return (
    <article
      className={`rounded-[20px] border border-[#d9d3c8] bg-white p-5 md:p-6 ${accentClassName}`}
    >
      <div className="inline-flex rounded-full bg-[#edf4ee] px-4 py-2 text-[14px] text-[#176b48]">
        {badge}
      </div>

      <h2 className="mt-4 font-serif text-[28px] leading-tight text-[#111] md:text-[32px]">
        {title}
      </h2>

      <p className="mt-3 max-w-[560px] text-[17px] leading-8 text-[#3f3a35]">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <Link
        href={localizedPath(lang, "/services")}
        className="mt-6 inline-flex text-[17px] text-[#111] transition-colors hover:text-[#176b48]"
      >
        {linkText}
      </Link>
    </article>
  );
}

export default function AudienceSection({ lang = defaultLocale }: { lang?: Locale }) {
  const t = getHomepageCopy(lang);

  return (
    <section className="bg-white px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-[1060px]">
        <div className="mb-5">
          <p className="text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
            {t.audience.eyebrow}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <AudienceCard
            lang={lang}
            badge={t.audience.left.badge}
            title={t.audience.left.title}
            description={t.audience.left.description}
            tags={t.audience.left.tags}
            linkText={t.audience.left.linkText}
            accentClassName="border-t-[3px] border-t-[#15a16b]"
          />

          <AudienceCard
            lang={lang}
            badge={t.audience.right.badge}
            title={t.audience.right.title}
            description={t.audience.right.description}
            tags={t.audience.right.tags}
            linkText={t.audience.right.linkText}
            accentClassName="border-t-[3px] border-t-[#2f78d6]"
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
          <div className="h-[260px] w-[380px] overflow-hidden rounded-2xl border border-[#d9d3c8] shadow-md">
            <Image
              src="/Images/1.jpg"
              alt={t.audience.images.leftAlt}
              width={380}
              height={260}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 380px"
              quality={85}
            />
          </div>
          <div className="h-[260px] w-[380px] overflow-hidden rounded-2xl border border-[#d9d3c8] shadow-md">
            <Image
              src="/Images/3.jpg"
              alt={t.audience.images.rightAlt}
              width={380}
              height={260}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 380px"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}