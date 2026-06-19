import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { getHomepageCopy } from "@/lib/i18n/homepage";

export default function CompetitiveAdvantage({
  lang = defaultLocale,
}: {
  lang?: Locale;
}) {
  const t = getHomepageCopy(lang);

  return (
    <section className="bg-white px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1060px]">
        <div className="mb-5">
          <p className="text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
            {t.competitive.eyebrow}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {t.competitive.cards.map((card) => (
            <article key={card.title} className="rounded-[20px] border border-[#d9d3c8] bg-white p-6">
              <h2 className="font-serif text-[32px] leading-tight text-[#111]">
                {card.title}
              </h2>
              <p className="mt-4 text-[18px] text-[#111]">{card.subtitle}</p>
              {card.description.map((line) => (
                <p key={line} className="mt-3 text-[16px] leading-7 text-[#3f3a35]">
                  {line}
                </p>
              ))}
              <p className="mt-5 text-[15px] text-[#7f7367]">{card.footer}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center font-serif text-[22px] italic text-[#2f2b27] md:text-[24px]">
          {t.competitive.quote}
        </p>
      </div>
    </section>
  );
}