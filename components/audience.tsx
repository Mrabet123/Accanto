import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

const leftTags = [
  "Elderly people",
  "Disabled",
  "Minors",
  "Hygiene",
  "Mobilization",
  "Company",
  "Supervision",
];

const rightTags = [
  "Elderly parents",
  "Disabilities",
  "Children",
  "Temporary stay",
  "Family reporting",
  "EN · FR · AR · DE",
];

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
}: {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  linkText: string;
  accentClassName: string;
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
        href="/services"
        className="mt-6 inline-flex text-[17px] text-[#111] transition-colors hover:text-[#176b48]"
      >
        {linkText}
      </Link>
    </article>
  );
}

export default function AudienceSection() {
  return (
    <section className="bg-white px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-[1060px]">
        <div className="mb-5">
          <p className="text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
            Who I address
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <AudienceCard
            badge="Local Families — Como Lake / Lecco / Valtellina"
            title="Local Italian families — Como Lake, Lecco / Valtellina"
            description="For Italian families seeking a dedicated professional to assist the elderly, disabled, or minors with special needs with their daily needs."
            tags={leftTags}
            linkText="Discover the services →"
            accentClassName="border-t-[3px] border-t-[#15a16b]"
          />

          <AudienceCard
            badge="International clients — Expat & temporary stay"
            title="Structured care with no language barrier"
            description="For expat families seeking a culturally aware, multilingual professional, for care assistance on Como Lake - Lecco / Milano."
            tags={rightTags}
            linkText="View services →"
            accentClassName="border-t-[3px] border-t-[#2f78d6]"
          />
        </div>

        {/* Images - larger and closer together */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
          <div className="w-[380px] h-[260px] rounded-2xl overflow-hidden shadow-md border border-[#d9d3c8]">
            <Image
              src="/Images/1.jpg"
              alt="Care professional assisting elderly person"
              width={380}
              height={260}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[380px] h-[260px] rounded-2xl overflow-hidden shadow-md border border-[#d9d3c8]">
            <Image
              src="/Images/3.jpg"
              alt="Supportive care environment"
              width={380}
              height={260}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}