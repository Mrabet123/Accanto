import Link from "next/link";
import React from "react";

const educationCards = [
  {
    title: "8 years",
    subtitle: "Social and health sector",
    description:
      "Elderly, disabled, patients recovering in public and sheltered facilities.",
    borderColor: "border-t-[#15a16b]",
    tags: ["Public hospital", "RSA", "RSD", "Sheltered housing"],
  },
  {
    title: "10 years",
    subtitle: "Hospitality & customer experience",
    description:
      "High-standard relational environments, international clientele, high operational pressure.",
    borderColor: "border-t-[#185FA5]",
    tags: ["Cruise lines", "duty free", "Luxury brands", "IT SaaS", "Travel & Leisure"],
  },
];

const languages = [
  {
    language: "Arabic",
    badge: "Native language",
    badgeBg: "bg-[#dff3ec]",
    badgeText: "text-[#1a8a68]",
    line: "bg-[#1a8a68]",
  },
  {
    language: "Italian",
    badge: "Fluent",
    badgeBg: "bg-[#e6eefc]",
    badgeText: "text-[#4b79d8]",
    line: "bg-[#4b79d8]",
  },
  {
    language: "French",
    badge: "Fluent",
    badgeBg: "bg-[#e6eefc]",
    badgeText: "text-[#4b79d8]",
    line: "bg-[#4b79d8]",
  },
  {
    language: "English",
    badge: "Fluent",
    badgeBg: "bg-[#e6eefc]",
    badgeText: "text-[#4b79d8]",
    line: "bg-[#4b79d8]",
  },
  {
    language: "German",
    badge: "Professional",
    badgeBg: "bg-[#ece7fb]",
    badgeText: "text-[#7b68c8]",
    line: "bg-[#c4b2ff]",
  },
];

const methodologyCards = [
  {
    title: "Structured onboarding",
    text: "First dedicated visit: habits, routines, preferences, limitations. Personal form completed before the first procedure.",
  },
  {
    title: "Care diary",
    text: "Every intervention is documented. Activities performed, conditions observed, and changes. Shared with the family according to the agreed frequency.",
  },
  {
    title: "Proactive communication with family",
    text: "Regular updates in your preferred language (EN / IT / AR / DE). No surprises. Any changes are communicated immediately.",
  },
  {
    title: "Punctuality and operational reliability",
    text: "Each service begins and ends as agreed. Changes are communicated in advance whenever possible.",
  },
  {
    title: "Clarity of professional boundaries",
    text: "Operations performed exclusively within the OSS perimeter. Clinical situations are reported and directed to the appropriate professional.",
  },
];

const philosophyParagraphs = [
  "A professional caregiver protects tools. A conscious caregiver respects the person they're caring for — with structure, method, and the ability to understand what's truly needed, even before it is said.",
  "My measure of success is not the current duration of an intervention. It is the moment the person I care for stops asking me as a passing professional and starts considering me part of their daily life. That is the real progress in every care journey.",
  "The world values empathy, structure, and clear boundaries. In every field, the longer you serve, the more people remember how you made them feel. A professional caregiver offers both. A conscious caregiver recognizes that the value of care lives in calm, continuity, and trust.",
];

const discoveryCards = [
  {
    title: "Operational base",
    text: "Dervio-Lecco",
    subtext: "Starting point for every intervention.",
    accent: "border-t-[#1fb57a]",
    pill: "bg-[#eef8f3] text-[#1a8a68]",
  },
  {
    title: "Main area",
    text: "LECCO-COMO LAKE / Valtellina",
    subtext: "Primary intervention area.",
    accent: "border-t-[#3f72d8]",
    pill: "bg-[#eef4ff] text-[#4b79d8]",
  },
  {
    title: "Emerging market",
    text: "Milan",
    subtext: "Expat clientele and international families. Accepted upon evaluation.",
    accent: "border-t-[#f29a2e]",
    pill: "bg-[#fff3e6] text-[#c47a25]",
  },
  {
    title: "Minimal intervention",
    text: "5 hours per session",
    subtext: "Minimum duration for each intervention. No exceptions. Defined contractually.",
    accent: "border-t-[#e2c48b]",
    pill: "bg-[#f4f1eb] text-[#8d8176]",
  },
];

const discoverySteps = [
  "Fill out the evaluation request",
  "Individual analysis within 48 working hours",
  "If compatible: a calendar link will be shared with you",
  "Choose date and time · 20–30 min · phone or video",
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] px-3 py-3 text-[#2b2723] md:px-4 md:py-4">
      <div className="mx-auto max-w-[1060px] space-y-4">
        <SectionBlock title="Professional identity">
          <div className="p-4 md:p-5">
            <div className="flex gap-4">
              <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-[#d8d1c4] bg-[#f5efe4] font-serif text-[22px] text-[#6c5b45] md:h-[58px] md:w-[58px]">
                G
              </div>

              <div className="min-w-0 flex-1">
                <h1 className="font-serif text-[20px] font-bold leading-tight text-[#111] md:text-[22px]">
                  Ghassen Mansouri
                </h1>

                <p className="mt-1 text-[11px] text-[#7f7367] md:text-[12px]">
                  Self employed caregiver · COMO LAKE-Lecco / Valtellina
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill tone="green">Certified OSS</Pill>
                  <Pill tone="blue">5 languages</Pill>
                  <Pill tone="amber">18 years exp.</Pill>
                  <Pill tone="neutral">BLSD · HACCP</Pill>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[8px] bg-[#f4f1eb] px-4 py-4 text-[13px] leading-6 text-[#5a5147]">
              Certified OSS with 8 years in the healthcare and social care field and 10 years in
              customer experience and international hospitality. Professional communication in
              Italian, English, French, Arabic, and German. Human approach, professional structure,
              no compromises.
            </div>
          </div>
        </SectionBlock>

        <SectionBlock title="Profesisonal path">
          <div className="p-4 md:p-5">
            <div className="grid gap-3 md:grid-cols-2">
              {educationCards.map((card) => (
                <article
                  key={card.title}
                  className={`rounded-[14px] border border-[#d8d1c4] border-t-[3px] ${card.borderColor} bg-white p-4 md:p-5`}
                >
                  <h3 className="font-serif text-[20px] font-bold leading-tight text-[#111] md:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium text-[#111]">{card.subtitle}</p>
                  <p className="mt-2 text-[13px] leading-6 text-[#6e6256]">{card.description}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#e5ddd0] bg-[#faf8f4] px-2.5 py-1 text-[10px] text-[#aa9d8c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Pill tone="neutral">● OSS — Social Health Worker</Pill>
              <Pill tone="neutral">● BLSD — Cardiopulmonary resuscitation</Pill>
              <Pill tone="neutral">● HACCP — Food Safety</Pill>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock title="Linguistic capacity">
          <div className="p-4 md:p-5">
            <div className="grid gap-3 md:grid-cols-5">
              {languages.map((item) => (
                <article
                  key={item.language}
                  className="rounded-[12px] border border-[#d8d1c4] bg-white p-3.5"
                >
                  <h3 className="text-[15px] font-medium text-[#111]">{item.language}</h3>

                  <div className="mt-2">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] leading-none ${item.badgeBg} ${item.badgeText}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div className={`mt-3 h-[2px] w-full ${item.line}`} />

                  <ul className="mt-3 list-disc space-y-1 pl-4 text-[12px] leading-5 text-[#8a7d70]">
                    <li>Writing</li>
                    <li>Reading</li>
                    <li>Speaking</li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </SectionBlock>

        <SectionBlock title="Working methodology">
          <div className="p-4 md:p-5">
            <div className="grid gap-3">
              {methodologyCards.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[10px] border border-[#d8d1c4] bg-white px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4f1eb] text-[10px] font-semibold text-[#9a8f82]">
                      {index + 1}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[13px] font-semibold text-[#2b2723]">{item.title}</h3>
                      <p className="mt-1 text-[11px] leading-5 text-[#7f7367]">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionBlock>

        <SectionBlock title="Philosophy and values">
          <div className="p-4 md:p-5">
            <div className="rounded-[10px] bg-[#f4f1eb] px-4 py-4">
              <p className="text-[13px] leading-7 italic text-[#5f5549]">
                “{philosophyParagraphs[0]}”
              </p>
              <div className="my-4 h-px bg-[#e2dbcf]" />
              <p className="text-[13px] leading-7 italic text-[#5f5549]">
                “{philosophyParagraphs[1]}”
              </p>
              <div className="my-4 h-px bg-[#e2dbcf]" />
              <p className="text-[13px] leading-7 italic text-[#5f5549]">
                “{philosophyParagraphs[2]}”
              </p>
            </div>

            <p className="mt-4 text-center font-serif text-[16px] italic text-[#2d2a27] md:text-[18px]">
              "I don't just pass through the lives of people. I become part of them."
            </p>
          </div>
        </SectionBlock>

        <SectionBlock title="Intervention area">
          <div className="p-4 md:p-5">
            <div className="grid gap-3 md:grid-cols-2 md:gap-4">
              {discoveryCards.map((card) => (
                <article
                  key={card.title}
                  className={`rounded-[12px] border border-[#d8d1c4] border-t-[2px] ${card.accent} bg-white p-4 md:p-5`}
                >
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-[10px] leading-none ${card.pill}`}
                  >
                    {card.title}
                  </span>

                  <h3 className="mt-3 text-[14px] font-medium text-[#111] md:text-[15px]">
                    {card.text}
                  </h3>

                  <p className="mt-2 text-[12px] leading-5 text-[#7f7367]">{card.subtext}</p>
                </article>
              ))}
            </div>

            <div className="mt-4 rounded-[12px] bg-[#f4f1eb] px-4 py-4 md:px-5 md:py-5">
              <p className="text-[13px] font-semibold text-[#111]">
                How the discovery session works
              </p>

              <ol className="mt-4 space-y-2">
                {discoverySteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-[12px] leading-5 text-[#5f5549]"
                  >
                    <span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eaf2ff] text-[11px] font-medium text-[#4b79d8]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-3 rounded-[10px] border border-[#d8d1c4] bg-white px-4 py-3 text-[11px] text-[#8d8176]">
              The calendar remains private. It is accessible only to approved requests.
            </div>
          </div>
        </SectionBlock>

        <section className="overflow-hidden rounded-[14px] border border-[#d8d1c4] bg-white">
          <div className="p-4 md:p-5">
            <div className="rounded-[14px] bg-[#f4f1eb] px-6 py-14 md:px-10 md:py-16">
              <div className="text-center">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#8d8176] md:text-[13px]">
                  YOU&apos;VE READ ENOUGH
                </p>

                <h2 className="mt-6 font-serif text-[28px] font-bold leading-tight text-[#111] md:text-[32px]">
                  Submit your request. I&apos;ll evaluate it personally.
                </h2>

                <p className="mx-auto mt-5 max-w-[860px] text-[15px] leading-7 text-[#3f3a35] md:text-[16px]">
                  Every case is different. I review each request individually. If there&apos;s a fit,
                  I&apos;ll contact you in your language.
                </p>

                <div className="mt-8">
                  <Link
                    href="/request"
                    className="inline-flex items-center justify-center rounded-[12px] border border-[#2a2a2a] bg-transparent px-10 py-4 text-[18px] font-medium text-[#111] transition-colors hover:bg-white"
                  >
                    Submit your evaluation request →
                  </Link>
                </div>

                <p className="mt-8 text-[14px] text-[#8d8176]">
                  No obligation. No automatic responses. Just a professional assessment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-[14px] border border-[#d8d1c4] bg-white">
      <div className="border-b border-[#d8d1c4] bg-[#f5f0e8] px-3 py-2.5">
        <h2 className="text-[13px] font-medium text-[#2f2a26]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "green" | "blue" | "amber";
}) {
  const tones: Record<string, string> = {
    neutral: "bg-white text-[#8e8578] border-[#e2dbcf]",
    green: "bg-[#eef8f3] text-[#1a8a68] border-[#cfeadf]",
    blue: "bg-[#eef4ff] text-[#4b79d8] border-[#d9e4fb]",
    amber: "bg-[#fff6e8] text-[#b46a22] border-[#f1dfbf]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] leading-none ${tones[tone]}`}
    >
      {children}
    </span>
  );
}