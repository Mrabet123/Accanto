"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function RequestPage() {
  const [consent1, setConsent1] = useState(true);
  const [consent2, setConsent2] = useState(true);

  return (
    <main className="min-h-screen bg-[#fcfbf8] px-4 py-4 text-[#2b2723] md:px-8 md:py-6">
      <div className="mx-auto max-w-[1060px]">
        <div className="mb-6 md:mb-8">
          <h1 className="font-serif text-[28px] font-bold leading-tight text-[#111] md:text-[32px]">
            Evaluation Request
          </h1>
          <p className="mt-2 text-[13px] text-[#8d8176] md:text-[15px]">
            Lead qualification form · 4 sections · urgency filter pre-form
          </p>
        </div>

        <div className="mb-6 h-px w-full bg-[#d9d3c8]" />

        <SectionFrame title="Applicant's data">
          <div className="p-4 md:p-5">
            <div className="mb-5 grid gap-4 md:grid-cols-2">
              <SelectField
                label="Who are you?"
                required
                options={["Italian", "Expat"]}
                placeholder="Italian"
              />
            </div>

            <div className="mb-5">
              <p className="mb-3 text-[13px] text-[#2b2723] md:text-[14px]">
                Applicant&apos;s role <span className="text-[#c4763a]">*</span>
              </p>

              <div className="space-y-2 text-[13px] leading-5 text-[#2b2723] md:text-[14px]">
                <Radio name="role" label="Interested party directly" />
                <Radio name="role" label="Family" defaultChecked />
                <Radio name="role" label="Son / Daughter" />
                <Radio name="role" label="Relative" />
                <Radio name="role" label="Other" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name and surname" required placeholder="Mario Rossi" />
              <Field label="Telephone" required placeholder="+39 340 ..." type="tel" />
              <Field label="Email" required placeholder="mario@email.it" type="email" />
              <SelectField
                label="Preferred language"
                required
                options={["Italian", "English", "French", "Arabic", "German"]}
                placeholder="Italian"
              />
              <Field label="Municipality of residence" required placeholder="Colico" />
              <Field label="ZIP Code" required placeholder="23823" type="number" />
            </div>
          </div>
        </SectionFrame>

        <SectionFrame title="Profile of the person assisted">
          <div className="p-4 md:p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <SelectField
                label="Type of patient"
                required
                options={["Elderly", "Disabled person", "Minor", "Other"]}
                placeholder="Elderly"
              />
              <SelectField
                label="Age range"
                required
                options={[
                  "0–10 years",
                  "11–17 years",
                  "18–35 years",
                  "36–50 years",
                  "51–75 years",
                  "76+ years",
                ]}
                placeholder="66–80 years"
              />
            </div>

            <div className="mt-5">
              <p className="mb-3 text-[13px] text-[#2b2723] md:text-[14px]">
                Level of autonomy <span className="text-[#c4763a]">*</span>
              </p>

              <div className="space-y-2 text-[13px] leading-5 text-[#2b2723] md:text-[14px]">
                <Radio name="autonomy" label="Autonomous" />
                <Radio name="autonomy" label="Semi-autonomous" defaultChecked />
                <Radio name="autonomy" label="Not autonomous" />
              </div>
            </div>

            <div className="mt-5">
              <p className="mb-3 text-[13px] text-[#2b2723] md:text-[14px]">
                Requested activities <span className="text-[#c4763a]">*</span>
              </p>

              <div className="space-y-2 text-[13px] leading-5 text-[#2b2723] md:text-[14px]">
                <Check label="Personal hygiene and personal care" defaultChecked />
                <Check label="Mobilization and transfers" defaultChecked />
                <Check label="Power supply support" />
                <Check label="Company and cognitive stimulation" defaultChecked />
                <Check label="Home supervision and security" />
                <Check label="External accompaniment" />
                <Check label="Family communication / reporting" />
                <Check label="Cultural/linguistic mediation" />
              </div>
            </div>

            <div className="mt-5">
              <label className="block">
                <span className="mb-2 block text-[13px] text-[#2b2723] md:text-[14px]">
                  Description of activities and expectations <span className="text-[#c4763a]">*</span>
                </span>
                <textarea
                  rows={4}
                  placeholder="Please describe in detail the required activities, expected responsibilities, and any specific requirements..."
                  className="min-h-[96px] w-full rounded-[8px] border border-[#d8d1c4] bg-[#fcfbf8] px-3 py-3 text-[13px] text-[#2b2723] outline-none placeholder:text-[#b1a796] focus:border-[#111]"
                />
              </label>
            </div>
          </div>
        </SectionFrame>

        <SectionFrame title="Logistics and planning">
          <div className="p-4 md:p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <SelectField
                label="Days a week"
                required
                options={["1 day", "2 days", "3 days", "4 days", "5 days (Mon–Fri)", "6 days", "7 days"]}
                placeholder="5 days (Mon–Fri)"
              />
              <SelectField
                label="Hours per intervention"
                required
                options={["5 hours", "5–10 hours", "10+ hours"]}
                placeholder="5–10 hours"
              />
              <SelectField
                label="Time slot"
                required
                options={["Morning (7:00–13:00)", "Evening (13:00–20:00)", "Night"]}
                placeholder="Morning (7:00–13:00)"
              />
              <Field label="Start date" required placeholder="DD/MM/YYYY" type="date" />
            </div>

            <div className="mt-5 rounded-[8px] bg-[#f6e7c8] px-3 py-2.5 text-[12px] leading-5 text-[#7e5f26] md:text-[13px]">
              Night, holiday, or emergency interventions have different pricing conditions.
            </div>

            <div className="mt-3 space-y-2 text-[13px] leading-5 text-[#2b2723] md:text-[14px]">
              <Radio name="special-awareness" label="Yes, I understand" defaultChecked />
            </div>
          </div>
        </SectionFrame>

        <SectionFrame title="Duration and qualification">
          <div className="p-4 md:p-5">
            <div className="mb-5">
              <p className="mb-3 text-[13px] text-[#2b2723] md:text-[14px]">
                Expected support lifespan <span className="text-[#c4763a]">*</span>
              </p>

              <div className="space-y-2 text-[13px] leading-5 text-[#2b2723] md:text-[14px]">
                <Radio name="duration" label="Short (less than 1 month)" />
                <Radio name="duration" label="Medium term (1–3 months)" defaultChecked />
                <Radio name="duration" label="Long term (3+ months)" />
                <Radio name="duration" label="Not defined" />
              </div>
            </div>

            <div className="mb-5">
              <p className="mb-3 text-[13px] text-[#2b2723] md:text-[14px]">
                Have you already evaluated other professionals? <span className="text-[#c4763a]">*</span>
              </p>

              <div className="space-y-2 text-[13px] leading-5 text-[#2b2723] md:text-[14px]">
                <Radio name="other-professionals" label="Yes" />
                <Radio name="other-professionals" label="No, first assessment" defaultChecked />
              </div>
            </div>

            <div className="mb-5">
              <label className="block">
                <span className="mb-2 block text-[13px] text-[#2b2723] md:text-[14px]">
                  How did you find this site?
                </span>
                <SelectField
                  label=""
                  options={["Google Search", "Instagram", "Facebook", "WhatsApp", "Referral", "Other"]}
                  placeholder="Google Search"
                  hideLabel
                />
              </label>
            </div>

            <div className="mb-5">
              <p className="mb-3 text-[13px] text-[#2b2723] md:text-[14px]">
                Confirm urgency level <span className="text-[#c4763a]">*</span>
              </p>

              <div className="space-y-2 text-[13px] leading-5 text-[#2b2723] md:text-[14px]">
                <Radio name="confirm-urgency" label="Normal" />
                <Radio name="confirm-urgency" label="Priority" defaultChecked />
                <Radio name="confirm-urgency" label="Urgent" />
              </div>
            </div>
          </div>
        </SectionFrame>

        <SectionFrame title="Privacy and conditions">
          <div className="p-4 md:p-5">
            <div className="space-y-3 text-[13px] leading-5 text-[#2b2723] md:text-[14px]">
              <Check
                label="I consent to the processing of personal data pursuant to the GDPR (EU Regulation 2016/679)."
                checked={consent1}
                onChange={setConsent1}
              />
              <Check
                label="I declare that I have read and understood the terms of collaboration."
                checked={consent2}
                onChange={setConsent2}
              />
            </div>

            <div className="mt-6 rounded-[12px] bg-[#f4f1eb] px-4 py-6 text-center">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-[8px] border border-[#111] bg-white px-5 py-3 text-[15px] font-medium text-[#111] transition-colors hover:bg-[#fcfbf8] md:max-w-[720px]"
              >
                Submit my evaluation request
              </button>
              <p className="mt-3 text-[11px] text-[#8d8176] md:text-[12px]">
                You will receive a response within 48 business hours. Not all requests are accepted.
              </p>
            </div>
          </div>
        </SectionFrame>
      </div>
    </main>
  );
}

function SectionFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5 overflow-hidden rounded-[12px] border border-[#d8d1c4] bg-white">
      <div className="border-b border-[#d8d1c4] bg-[#f5f0e8] px-3 py-2.5 md:px-4">
        <h2 className="text-[13px] font-medium text-[#2f2a26]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  required,
  placeholder,
  type = "text",
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] text-[#2b2723] md:text-[14px]">
        {label} {required ? <span className="text-[#c4763a]">*</span> : null}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[40px] w-full rounded-[8px] border border-[#d8d1c4] bg-[#fcfbf8] px-3 text-[13px] text-[#2b2723] outline-none placeholder:text-[#b1a796] focus:border-[#111]"
      />
    </label>
  );
}

function SelectField({
  label,
  required,
  placeholder,
  options,
  hideLabel,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  options: string[];
  hideLabel?: boolean;
}) {
  const shouldShowPlaceholderOption = placeholder !== options[0];

  return (
    <label className="block">
      {!hideLabel ? (
        <span className="mb-2 block text-[13px] text-[#2b2723] md:text-[14px]">
          {label} {required ? <span className="text-[#c4763a]">*</span> : null}
        </span>
      ) : null}
      <select
        className="h-[40px] w-full rounded-[8px] border border-[#d8d1c4] bg-[#fcfbf8] px-3 text-[13px] text-[#2b2723] outline-none focus:border-[#111]"
        defaultValue={shouldShowPlaceholderOption ? "" : options[0]}
      >
        {shouldShowPlaceholderOption ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function Radio({
  name,
  label,
  defaultChecked,
}: {
  name: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name={name}
        className="h-3.5 w-3.5 accent-[#111]"
        defaultChecked={defaultChecked}
      />
      <span>{label}</span>
    </label>
  );
}

function Check({
  label,
  defaultChecked,
  checked,
  onChange,
}: {
  label: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}) {
  const controlled = typeof checked === "boolean" && onChange;

  return (
    <label className="flex items-start gap-2">
      <input
        type="checkbox"
        className="mt-1 h-3.5 w-3.5 accent-[#0f6e56]"
        defaultChecked={defaultChecked}
        checked={controlled ? checked : undefined}
        onChange={controlled ? (e) => onChange(e.target.checked) : undefined}
      />
      <span>{label}</span>
    </label>
  );
}