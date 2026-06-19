import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { defaultLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getHomepageCopy } from "@/lib/i18n/homepage";

export default function Hero({ lang = defaultLocale }: { lang?: Locale }) {
  const t = getHomepageCopy(lang);
  const titleLines = t.hero.title.split("\n");

  return (
    <section className="bg-[#f7f3ee] px-4 py-6 md:px-8 md:py-10">
      <div className="p-4 md:p-6">
        <div className="rounded-[24px] border border-[#d9d3c8] bg-white px-6 py-7 md:px-12 md:py-12">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-12">
            <div className="max-w-[680px] flex-1">
              <p className="text-[13px] uppercase tracking-[0.24em] text-[#8d8176]">
                {t.hero.eyebrow}
              </p>

              <h1 className="mt-5 max-w-[720px] font-serif text-[34px] leading-[1.1] text-[#141414] md:text-[48px]">
                {titleLines.map((line, index) => (
                  <Fragment key={line + index}>
                    {line}
                    {index < titleLines.length - 1 ? <br /> : null}
                  </Fragment>
                ))}
              </h1>

              <p className="mt-5 max-w-[690px] text-[17px] leading-8 text-[#3f3a35]">
                {t.hero.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {t.hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full px-4 py-2 text-[15px] leading-none shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-black/5 bg-white text-[#4b4b4b]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={localizedPath(lang, "/request")}
                  className="inline-flex items-center justify-center rounded-[14px] border border-[#2a2a2a] bg-white px-7 py-4 text-[18px] font-medium text-[#111] transition-colors hover:bg-[#f6f1ea]"
                >
                  {t.hero.cta}
                </Link>
              </div>
            </div>

            <div className="ml-auto flex w-full justify-center md:w-[360px] md:justify-end">
              <div className="relative h-[400px] w-full max-w-[340px] overflow-hidden rounded-[24px] border border-[#d9d3c8] bg-[#f4efe7] shadow-md">
                <Image
                  src="/Images/5.jpg"
                  alt={t.hero.imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 340px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}