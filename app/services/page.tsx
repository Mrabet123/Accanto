"use client";

import { useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const [audience, setAudience] = useState<"it" | "intl">("it");

  return (
    <div className="bg-white px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1060px]">
        {/* Main Section Title */}
        <div className="mb-8 text-left">
          <h1 className="font-serif text-[28px] font-bold text-[#111] md:text-[32px]">
            Services
          </h1>
        </div>

        {/* Audience Toggle Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setAudience("it")}
              className={[
                "rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                audience === "it"
                  ? "bg-[#d9f0e8] text-[#0f6e56]"
                  : "bg-[#ece4d7] text-[#3f3a35]",
              ].join(" ")}
            >
              Local Families - COMO LAKE-LECCO / VALTELLINA
            </button>

            <button
              type="button"
              onClick={() => setAudience("intl")}
              className={[
                "rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                audience === "intl"
                  ? "bg-[#d9f0e8] text-[#0f6e56]"
                  : "bg-[#ece4d7] text-[#3f3a35]",
              ].join(" ")}
            >
              International Clients — Expat & Temporary Stay
            </button>
          </div>
        </div>

        {audience === "it" ? (
          <div className="mb-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[20px] border border-[#d9d3c8] border-t-[3px] border-t-[#15a16b] bg-white p-5 md:p-6">
                <p className="mb-1 text-[12px] uppercase text-[#0f6e56]">Elderly People</p>
                <h3 className="mb-2 text-[18px] font-semibold text-[#111]">Elderly care</h3>
                <ul className="list-inside list-disc space-y-1 text-[14px] text-[#3f3a35]">
                  <li>Personal hygiene and daily care (OSS)</li>
                  <li>Mobilization and transfers</li>
                  <li>Power supply support</li>
                  <li>Company and cognitive stimulation</li>
                  <li>Home supervision and security</li>
                  <li>Accompaniment to visits</li>
                  <li>Family Updates</li>
                </ul>
              </div>

              <div className="rounded-[20px] border border-[#d9d3c8] border-t-[3px] border-t-[#15a16b] bg-white p-5 md:p-6">
                <p className="mb-1 text-[12px] uppercase text-[#0f6e56]">People with Disabilities</p>
                <h3 className="mb-2 text-[18px] font-semibold text-[#111]">Disability support</h3>
                <ul className="list-inside list-disc space-y-1 text-[14px] text-[#3f3a35]">
                  <li>Personal care assistance (OSS)</li>
                  <li>Mobility support and aids</li>
                  <li>Activities of daily living (ADL)</li>
                  <li>External accompaniment</li>
                  <li>Communication support</li>
                  <li>Coordination with team and family</li>
                  <li>Care diary</li>
                </ul>
              </div>

              <div className="rounded-[20px] border border-[#d9d3c8] border-t-[3px] border-t-[#15a16b] bg-white p-5 md:p-6">
                <p className="mb-1 text-[12px] uppercase text-[#0f6e56]">Minors</p>
                <h3 className="mb-2 text-[18px] font-semibold text-[#111]">Child care</h3>
                <ul className="list-inside list-disc space-y-1 text-[14px] text-[#3f3a35]">
                  <li>Educational assistance OSS</li>
                  <li>Personal care and hygiene</li>
                  <li>Supervision and active presence</li>
                  <li>Support daily routines</li>
                  <li>School accompaniment</li>
                  <li>Constant communication with parents</li>
                  <li>Entertainment and socialization</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-[8px] bg-[#f4f1eb] p-3 text-[13px] italic text-[#7f7367]">
              I work exclusively within the OSS perimeter. I do not provide nursing or clinical services.
            </div>
          </div>
        ) : (
          <div className="mb-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[20px] border border-[#d9d3c8] border-t-[3px] border-t-[#185FA5] bg-white p-5 md:p-6">
                <p className="mb-1 text-[12px] uppercase text-[#185FA5]">Elderly relatives</p>
                <h3 className="mb-2 text-[18px] font-semibold text-[#111]">Care for elderly parents</h3>
                <ul className="list-inside list-disc space-y-1 text-[14px] text-[#3f3a35]">
                  <li>Personal care & hygiene (OSS)</li>
                  <li>Mobility & safe transfers</li>
                  <li>Nutritional support</li>
                  <li>Companionship & engagement</li>
                  <li>Family reporting in your language</li>
                  <li>Local health service coordination</li>
                </ul>
              </div>

              <div className="rounded-[20px] border border-[#d9d3c8] border-t-[3px] border-t-[#185FA5] bg-white p-5 md:p-6">
                <p className="mb-1 text-[12px] uppercase text-[#185FA5]">People with disabilities</p>
                <h3 className="mb-2 text-[18px] font-semibold text-[#111]">Disability support</h3>
                <ul className="list-inside list-disc space-y-1 text-[14px] text-[#3f3a35]">
                  <li>Personal care assistant (OSS)</li>
                  <li>Mobility & assistive device support</li>
                  <li>ADL support</li>
                  <li>Multilingual communication</li>
                  <li>Written care log & updates</li>
                </ul>
              </div>

              <div className="rounded-[20px] border border-[#d9d3c8] border-t-[3px] border-t-[#185FA5] bg-white p-5 md:p-6">
                <p className="mb-1 text-[12px] uppercase text-[#185FA5]">Children & minors</p>
                <h3 className="mb-2 text-[18px] font-semibold text-[#111]">Care for children</h3>
                <ul className="list-inside list-disc space-y-1 text-[14px] text-[#3f3a35]">
                  <li>Supervised care & daily support</li>
                  <li>Hygiene & personal care</li>
                  <li>School / therapy accompaniment</li>
                  <li>Parent communication EN/FR/AR</li>
                  <li>Cultural mediation & comfort</li>
                </ul>
              </div>

              <div className="rounded-[20px] border border-[#d9d3c8] border-t-[3px] border-t-[#185FA5] bg-white p-5 md:p-6">
                <p className="mb-1 text-[12px] uppercase text-[#185FA5]">Temporary stay & self-care</p>
                <h3 className="mb-2 text-[18px] font-semibold text-[#111]">Temporary stay</h3>
                <ul className="list-inside list-disc space-y-1 text-[14px] text-[#3f3a35]">
                  <li>Personal assistance during stay</li>
                  <li>Post-hospitalization support</li>
                  <li>Local navigation & logistics</li>
                  <li>Full multilingual interface</li>
                  <li>Flexible schedule, structured handover</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Hourly Rates Section */}
        <div className="mb-8">
          <p className="mb-3 text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
            Hourly Rates
          </p>

          <div className="rounded-[12px] bg-[#f4f1eb] px-5 py-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-[16px] text-[#3f3a35]">
                Starting from <span className="font-semibold text-[#111]">€28/hour</span>
              </p>
              <p className="text-[15px] text-[#8d8176]">
                The fee is defined during the evaluation phase of the request
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-[14px] bg-[#f4f1eb] p-4">
              <p className="text-[12px] uppercase tracking-[0.08em] text-[#8d8176]">
                Level of autonomy
              </p>
              <p className="mt-2 text-[15px] leading-6 text-[#3f3a35]">
                Autonomous / Semi / Non-autonomous
              </p>
              <p className="mt-2 text-[14px] text-[#c4763a]">It affects the tariff</p>
            </div>

            <div className="rounded-[14px] bg-[#f4f1eb] p-4">
              <p className="text-[12px] uppercase tracking-[0.08em] text-[#8d8176]">
                Required activities
              </p>
              <p className="mt-2 text-[15px] leading-6 text-[#3f3a35]">
                Complexity and intensity of interventions
              </p>
              <p className="mt-2 text-[14px] text-[#c4763a]">It affects the tariff</p>
            </div>

            <div className="rounded-[14px] bg-[#f4f1eb] p-4">
              <p className="text-[12px] uppercase tracking-[0.08em] text-[#8d8176]">
                Distance
              </p>
              <p className="mt-2 text-[15px] leading-6 text-[#3f3a35]">
                Area in relation to Dervio (LC)
              </p>
              <p className="mt-2 text-[14px] text-[#c4763a]">It affects the tariff</p>
            </div>

            <div className="rounded-[14px] bg-[#f4f1eb] p-4">
              <p className="text-[12px] uppercase tracking-[0.08em] text-[#8d8176]">
                Time slot
              </p>
              <p className="mt-2 text-[15px] leading-6 text-[#3f3a35]">
                Daytime / Evening / Nighttime / Holiday
              </p>
              <p className="mt-2 text-[14px] text-[#c4763a]">It affects the tariff</p>
            </div>

            <div className="rounded-[14px] bg-[#f4f1eb] p-4">
              <p className="text-[12px] uppercase tracking-[0.08em] text-[#8d8176]">
                Support duration
              </p>
              <p className="mt-2 text-[15px] leading-6 text-[#3f3a35]">
                Short / Medium / Long term
              </p>
              <p className="mt-2 text-[14px] text-[#8d8176]">
                Evaluated on a case-by-case basis
              </p>
            </div>

            <div className="rounded-[14px] bg-[#f4f1eb] p-4">
              <p className="text-[12px] uppercase tracking-[0.08em] text-[#8d8176]">
                Reference language
              </p>
              <p className="mt-2 text-[15px] leading-6 text-[#3f3a35]">
                Foreign language service
              </p>
              <p className="mt-2 text-[14px] text-[#0f6e56]">Added value included</p>
            </div>
          </div>
        </div>

        <div className="rounded-[18px] bg-[#f4efe7] px-6 py-14 md:px-10 md:py-16">
          <div className="text-center">
            <p className="text-[13px] uppercase tracking-[0.22em] text-[#8d8176]">
              Ready to evaluate your request
            </p>
            <div className="mt-8">
              <Link
                href="/request"
                className="inline-flex items-center justify-center rounded-[12px] border border-[#2a2a2a] bg-transparent px-8 py-4 text-[18px] font-medium text-[#111] transition-colors hover:bg-white"
              >
                Submit your evaluation request →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}