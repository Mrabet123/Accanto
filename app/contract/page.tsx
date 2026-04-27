"use client";

import React, { useState } from "react";

const clauses = [
  {
    art: "Art. 1",
    title: "Object of the service",
    text: "Activities included, adapted to the profile.",
  },
  {
    art: "Art. 2",
    title: "Rate and payment",
    text: "Cash or bank transfer. 50% deposit if weekly.",
  },
  {
    art: "Art. 3",
    title: "Duration and withdrawal",
    text: "Permanent · 72 hours notice.",
  },
  {
    art: "Art. 4",
    title: "Cancellation",
    text: ">72h: 0% · 48–72h 50% · <48h 100%",
  },
  {
    art: "Art. 5",
    title: "Tariff review",
    text: "Change of conditions · 24h notice.",
  },
  {
    art: "Art. 6",
    title: "OSS Perimeter",
    text: "No nursing or clinical action.",
    highlighted: true,
  },
  {
    art: "Art. 7",
    title: "GDPR Privacy",
    text: "EU Regulation 2016/679. No sharing.",
  },
  {
    art: "Art. 8",
    title: "Minimum duration",
    text: "5 consecutive hours per session.",
  },
];

export default function ContractPage() {
  const [language, setLanguage] = useState<"it" | "en">("en");

  return (
    <main className="min-h-screen bg-[#fcfbf8] px-3 py-3 text-[#2b2723] md:px-4 md:py-4">
      <div className="mx-auto max-w-[1060px] space-y-5">
        <div className="mb-6 md:mb-8">
          <h1 className="font-serif text-[28px] font-bold leading-tight text-[#111] md:text-[32px]">
            Contract & Conditions
          </h1>
          <p className="mt-2 text-[13px] text-[#8d8176] md:text-[15px]">
            Legal transparency · Bilingual contract · Digital signature · FAQ
          </p>
        </div>

        <SectionBlock badge="S1" title="Framing text">
          <div className="p-4 md:p-5">
            <p className="text-[14px] leading-7 text-[#2b2723]">
              <span className="block font-medium">Transparency first and foremost</span>
              Before starting any work, a written contract is signed that precisely defines what I do, how I do it,
              how much it costs, and what happens if anything changes. It&apos;s not a bureaucratic formality—it&apos;s the
              foundation of a serious professional relationship.
              <br />
              It protects you as a client. It protects me as a professional.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock badge="S2" title="Clauses Overview">
          <div className="p-4 md:p-5">
            <div className="grid gap-3 md:grid-cols-4">
              {clauses.map((item) => (
                <article
                  key={item.art}
                  className={[
                    "rounded-[12px] border bg-white p-4",
                    item.highlighted ? "border-[#f29a2e]" : "border-[#d8d1c4]",
                  ].join(" ")}
                >
                  {item.highlighted ? (
                    <>
                      <p className="text-[11px] text-[#8d8176]">Prof. Border</p>
                      <p className="mt-1 text-[11px] text-[#8d8176]">{item.art}</p>
                    </>
                  ) : (
                    <p className="text-[11px] text-[#8d8176]">{item.art}</p>
                  )}
                  <h3 className="mt-1 text-[13px] font-semibold leading-5 text-[#111]">{item.title}</h3>
                  <p className="mt-1 text-[12px] leading-5 text-[#8d8176]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </SectionBlock>

        <SectionBlock badge="S3" title="Collaboration contract" note="Toggle IT / EN">
          <div className="p-4 md:p-5">
            <div className="mb-4 flex gap-2">
              <button
                type="button"
                onClick={() => setLanguage("it")}
                className={[
                  "rounded-[8px] border px-4 py-2 text-[12px] md:text-[13px]",
                  language === "it"
                    ? "border-[#111] bg-[#111] text-white"
                    : "border-[#d8d1c4] bg-white text-[#6e6256]",
                ].join(" ")}
              >
                Italian
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={[
                  "rounded-[8px] border px-4 py-2 text-[12px] md:text-[13px]",
                  language === "en"
                    ? "border-[#111] bg-[#111] text-white"
                    : "border-[#d8d1c4] bg-white text-[#6e6256]",
                ].join(" ")}
              >
                English
              </button>
            </div>

            {language === "it" ? (
              <div className="rounded-[12px] border border-[#d8d1c4] bg-[#fcfbf8] p-4 min-h-[420px]" />
            ) : (
              <div className="overflow-hidden rounded-[12px] border border-[#d8d1c4] bg-[#fcfbf8]">
                <div className="border-b border-[#d8d1c4] bg-[#f4efe2] px-4 py-3 md:px-5">
                  <div className="grid gap-3 md:grid-cols-[1.3fr_0.7fr]">
                    <div>
                      <p className="text-[14px] font-medium text-[#111]">Ghassen Mansouri</p>
                      <p className="mt-1 text-[11px] leading-5 text-[#6e6256]">
                        Freelance OSS · VAT number 0110320144
                        <br />
                        Dervio (LC) · Lake Como · Lecco · Sondrio · Milan
                      </p>
                    </div>

                    <div className="flex items-start justify-start md:justify-end">
                      <div className="rounded-[10px] bg-[#dff3ec] px-4 py-3 text-right">
                        <p className="text-[11px] font-medium text-[#1a8a68]">Standard Model 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <h2 className="font-serif text-[16px] font-bold leading-tight text-[#111] md:text-[18px]">
                      Professional Service Contract — Home Care Assistant (OSS)
                    </h2>
                    <p className="mt-1 text-[11px] text-[#8d8176]">Permanent model · updated 2025</p>
                  </div>
                </div>

                <div className="p-4 md:p-5">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-[8px] bg-[#f4f1eb] px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.08em] text-[#8d8176]">THE PROFESSIONAL</p>
                      <div className="mt-2 space-y-1 text-[11px] leading-5 text-[#6e6256]">
                        <p>
                          Name: <span className="text-[#111]">Ghassen Mansouri</span>
                        </p>
                        <p>
                          VAT number: <span className="text-[#111]">0110320144</span>
                        </p>
                        <p>
                          Site: <span className="text-[#111]">Dervio (LC)</span>
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[8px] bg-[#f4f1eb] px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.08em] text-[#8d8176]">THE CUSTOMER</p>
                      <div className="mt-2 space-y-1 text-[11px] leading-5 text-[#6e6256]">
                        <p>
                          Name: <span className="italic text-[#8d8176]">[Name and surname]</span>
                        </p>
                        <p>
                          Address: <span className="italic text-[#8d8176]">[Address]</span>
                        </p>
                        <p>
                          Assisted: <span className="italic text-[#8d8176]">[Name]</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    {clauses.map((item) => (
                      <div key={item.art} className="border-b border-[#d8d1c4] pb-4 last:border-b-0 last:pb-0">
                        <p className="text-[11px] text-[#8d8176]">{item.art}</p>
                        <h3 className="mt-1 text-[13px] font-semibold text-[#111]">{item.title}</h3>
                        <div className="mt-2 space-y-2">
                          <p className="text-[12px] leading-6 text-[#5f5549]">{item.text}</p>
                          {item.highlighted ? (
                            <div className="rounded-[10px] bg-[#fff1da] px-4 py-3">
                              <p className="text-[12px] leading-6 text-[#6a532f]">
                                Any request outside the OSS perimeter will be declined. Refusal does not constitute
                                non-compliance.
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#d8d1c4] pt-3 text-[10px] text-[#8d8176]">
                    <p>Ghassen Mansouri · Freelance OSS · VAT number 0110320144 · Dervio (LC) · Lake Como</p>
                    <p>Lecco · Como · Sondrio · Milan</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </SectionBlock>

        <SectionBlock badge="S4" title="Digital signature" note="Only for qualified and approved leads">
          <div className="p-4 md:p-5">
            <div className="rounded-[14px] bg-[#f4f1eb] px-4 py-5 md:px-5 md:py-6">
              <h3 className="text-[16px] font-medium text-[#111] md:text-[17px]">Signing of the collaboration contract</h3>
              <p className="mt-3 max-w-[820px] text-[13px] leading-6 text-[#6f6255] md:text-[14px]">
                Accessible only to customers whose profiles have been approved. A PDF copy is emailed to both parties.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2 md:gap-x-5 md:gap-y-3">
                <InputField label="Name and surname" placeholder="Name and surname" />
                <InputField label="Date of signature" placeholder="DD/MM/YYYY" type="date" />
                <InputField label="Agreed rate (€/hour)" placeholder="As agreed" />
                <InputField label="Start date" placeholder="DD/MM/YYYY" type="date" />
              </div>

              <div className="mt-4 space-y-3 text-[13px] leading-5 text-[#2b2723] md:text-[14px]">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 h-3.5 w-3.5 accent-[#111]" />
                  <span>I have read and fully accept the contract and all its clauses.</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 h-3.5 w-3.5 accent-[#111]" />
                  <span>I consent to the processing of my personal data (GDPR Reg. EU 2016/679).</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 h-3.5 w-3.5 accent-[#111]" />
                  <span>I confirm that the activities fall within the OSS scope.</span>
                </label>
              </div>

              <div className="mt-6 rounded-[8px] border border-[#d8d1c4] bg-white px-4 py-3">
                <p className="text-[12px] leading-5 text-[#8d8176] md:text-[13px]">
                  Legislative Decree 82/2005 — Digital signature with legal value equivalent to a handwritten
                  signature.
                </p>
              </div>

              <button
                type="button"
                className="mt-4 inline-flex h-[40px] w-full items-center justify-center rounded-[8px] border border-[#111] bg-white px-5 py-3 text-[15px] font-medium text-[#111] transition-colors hover:bg-[#fcfbf8] md:h-[44px]"
              >
                Sign and send the contract
              </button>

              <p className="mt-3 text-[11px] text-[#8d8176] md:text-[12px]">
                A signed copy will be automatically sent to the email address provided during the request.
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock badge="S6" title="Download PDF">
          <div className="p-4 md:p-5">
            <div className="rounded-[14px] bg-[#f4f1eb] px-4 py-5 md:px-5 md:py-6">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <p className="text-[14px] leading-6 text-[#5f5549] md:text-[15px]">
                  Read the contract carefully or share it with a family member.
                </p>
                <button
                  type="button"
                  className="inline-flex h-[40px] items-center justify-center rounded-[8px] border border-[#111] bg-white px-5 text-[14px] font-medium text-[#111] md:min-w-[220px]"
                >
                  Download PDF contract →
                </button>
              </div>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock badge="S7" title="Final CTA">
          <div className="p-4 md:p-5">
            <div className="rounded-[14px] bg-[#f4f1eb] px-4 py-10 text-center md:px-5 md:py-12">
              <p className="text-[12px] uppercase tracking-[0.14em] text-[#8d8176] md:text-[13px]">
                Everything clear, everything transparent
              </p>
              <h3 className="mt-4 font-serif text-[22px] font-bold leading-tight text-[#111] md:text-[28px]">
                Ready to take the first step?
              </h3>
              <p className="mx-auto mt-3 max-w-[760px] text-[13px] leading-6 text-[#5f5549] md:text-[14px]">
                The contract is signed only after your request has been evaluated and we have spoken to each other.
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  className="inline-flex h-[48px] items-center justify-center rounded-[10px] border border-[#111] bg-white px-7 text-[14px] font-medium text-[#111] md:min-w-[300px]"
                >
                  Submit your evaluation request →
                </button>
              </div>
              <p className="mt-4 text-[12px] text-[#8d8176] md:text-[13px]">
                No obligation. No automatic responses. Just a professional assessment.
              </p>
            </div>
          </div>
        </SectionBlock>
      </div>
    </main>
  );
}

function SectionBlock({
  badge,
  title,
  note,
  children,
}: {
  badge: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-[12px] border border-[#d8d1c4] bg-white">
      <div className="flex items-center justify-between gap-3 border-b border-[#d8d1c4] bg-[#f5f0e8] px-3 py-2.5 md:px-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#111] px-2 text-[10px] font-semibold leading-none text-white">
            {badge}
          </span>
          <h2 className="text-[13px] font-medium text-[#2f2a26]">{title}</h2>
        </div>
        {note ? <p className="hidden text-[11px] italic text-[#8d8176] md:block">{note}</p> : <span />}
      </div>
      {children}
    </section>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] text-[#2b2723] md:text-[14px]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[40px] w-full rounded-[8px] border border-[#d8d1c4] bg-[#fcfbf8] px-3 text-[13px] text-[#2b2723] outline-none placeholder:text-[#b1a796] focus:border-[#111]"
      />
    </label>
  );
}
