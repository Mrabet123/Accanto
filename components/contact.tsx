"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-[var(--pale-green)]">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--ink-60)]">
            Contact
          </p>
          <h2 className="font-serif text-4xl text-[var(--green)] md:text-5xl">
            Let’s build something refined.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--ink)]/80">
            Share a little about your project and I’ll get back with a thoughtful response.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
            <Field label="Email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" type="email" />
          </div>

          <Field label="Subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project details" />

          <div>
            <label htmlFor="message" className="mb-2 block font-semibold text-[var(--ink)]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              placeholder="Tell me about your project..."
              className="w-full rounded-[14px] border border-[var(--sand-border)] bg-[var(--sand)] px-4 py-3 text-[var(--ink)] placeholder:text-[var(--ink-60)] outline-none transition-shadow focus:ring-2 focus:ring-[var(--green)]/30"
            />
          </div>

          <button
  type="submit"
  className="w-full inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--green)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-[var(--green)] hover:bg-[var(--pale-green)] hover:text-[var(--green)]"
>
  Send Message
</button>
        </form>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <InfoCard title="Email" value="hello@accanto.care" href="mailto:hello@accanto.care" emoji="📧" />
          <InfoCard title="LinkedIn" value="linkedin.com/in/accanto" href="#" emoji="💼" />
          <InfoCard title="Twitter" value="@accanto" href="#" emoji="🐦" />
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-semibold text-[var(--ink)]">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full rounded-[14px] border border-[var(--sand-border)] bg-[var(--sand)] px-4 py-3 text-[var(--ink)] placeholder:text-[var(--ink-60)] outline-none transition-shadow focus:ring-2 focus:ring-[var(--green)]/30"
      />
    </div>
  );
}

function InfoCard({
  title,
  value,
  href,
  emoji,
}: {
  title: string;
  value: string;
  href: string;
  emoji: string;
}) {
  return (
    <div className="rounded-[20px] border border-[var(--sand-border)] bg-[var(--sand)] p-6 text-center">
      <div className="mb-2 text-2xl">{emoji}</div>
      <h3 className="font-semibold text-[var(--ink)]">{title}</h3>
      <a href={href} className="mt-1 inline-block text-[var(--green)] transition-colors hover:text-[var(--teal-d)]">
        {value}
      </a>
    </div>
  );
}