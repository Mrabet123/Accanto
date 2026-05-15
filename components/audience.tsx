import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

const leftTags = [
  "Anziani",
  "Persone con disabilità",
  "Minori",
  "Igiene",
  "Mobilizzazione",
  "Compagnia",
  "Sorveglianza",
];

const rightTags = [
  "Genitori anziani",
  "Disabilità",
  "Bambini",
  "Soggiorni temporanei",
  "Report alla famiglia",
  "Italiano",
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
            A chi mi rivolgo
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <AudienceCard
            badge="Famiglie del territorio — Lago di Como / Lecco / Valtellina"
            title="Famiglie italiane sul territorio"
            description="Per famiglie italiane che cercano un professionista dedicato per assistere anziani, persone con disabilità o minori con bisogni speciali nelle attività quotidiane."
            tags={leftTags}
            linkText="Scopri i servizi →"
            accentClassName="border-t-[3px] border-t-[#15a16b]"
          />

          <AudienceCard
            badge="Clienti internazionali — expat e soggiorni temporanei"
            title="Assistenza strutturata senza barriere linguistiche"
            description="Per famiglie expat che cercano un professionista attento e affidabile per un supporto domiciliare sul Lago di Como, a Lecco o a Milano."
            tags={rightTags}
            linkText="Vai ai servizi →"
            accentClassName="border-t-[3px] border-t-[#2f78d6]"
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
          <div className="h-[260px] w-[380px] overflow-hidden rounded-2xl border border-[#d9d3c8] shadow-md">
            <Image
              src="/Images/1.jpg"
              alt="Assistenza domiciliare per anziani sul Lago di Como"
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
              alt="Professionista OSS per supporto familiare e assistenza domiciliare"
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