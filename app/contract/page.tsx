"use client";

import React, { useState } from "react";

const clauses = [
  {
    art: "Art. 1",
    title: "Object of the service",
    desc: "Activities included, adapted to the specific profile agreed during the evaluation call.",
  },
  {
    art: "Art. 2",
    title: "Rate and payment",
    desc: "Bank transfer or cash. Rate defined and agreed before contract signature. 50% deposit on first session.",
  },
  {
    art: "Art. 3",
    title: "Duration and withdrawal",
    desc: "Open-ended collaboration. Either party may withdraw with 72 hours written notice.",
  },
  {
    art: "Art. 4",
    title: "Cancellation policy",
    desc: "More than 72h: 0% · 48–72h: 50% · Less than 48h: 100% of the agreed session fee.",
  },
  {
    art: "Art. 5",
    title: "Rate review",
    desc: "Change of care conditions triggers a rate revision. Client is informed with 24 hours notice.",
  },
  {
    art: "Art. 6",
    title: "OSS perimeter",
    desc: "No nursing or clinical action. Refusal of out-of-scope requests does not constitute non-compliance.",
  },
  {
    art: "Art. 7",
    title: "GDPR Privacy",
    desc: "EU Regulation 2016/679. All personal data processed within legal framework. No sharing with third parties.",
  },
  {
    art: "Art. 8",
    title: "Minimum support session",
    desc: "5 consecutive hours per support session. No exceptions. Defined contractually before start.",
  },
];

const articles = [
  {
    num: "Art. 1 — Object of the service",
    title: "Scope and activities included",
    text: "The professional agrees to provide home care assistance services within the certified OSS scope, as defined and agreed during the evaluation call and documented in the service profile attached to this contract. The activities included are those specifically agreed — no others. Any modification to the scope of activities must be agreed in writing.",
  },
  {
    num: "Art. 2 — Rate and payment",
    title: "Fees, payment method, and deposit",
    text: "The agreed hourly rate is defined before signature and stated on the signed contract. Payment is accepted by bank transfer or cash. A 50% deposit on the first support session fee is due before the first intervention. Subsequent sessions are invoiced at the end of each session or at the agreed billing interval. Late payment beyond 5 working days may result in service suspension.",
  },
  {
    num: "Art. 3 — Duration and withdrawal",
    title: "Contract duration and termination",
    text: "This contract is open-ended and remains in force until either party communicates withdrawal in writing. Either party may withdraw by providing 72 hours written notice via email or WhatsApp to the contact details provided at signing. Immediate withdrawal is only permitted in cases of force majeure or serious breach of contract terms.",
  },
  {
    num: "Art. 4 — Cancellation policy",
    title: "Session cancellation conditions",
    text: "Cancellations are subject to the following conditions: More than 72 hours notice: 0% of session fee charged. Between 48 and 72 hours notice: 50% of the agreed session fee is due. Less than 48 hours notice: 100% of the agreed session fee is due. In cases of documented medical emergency, conditions are evaluated individually.",
  },
  {
    num: "Art. 5 — Rate review",
    title: "Changes to agreed conditions",
    text: "Any significant change to the assisted person's care profile, autonomy level, or activity requirements that affects the complexity of service delivery may trigger a rate review. The client will be informed in writing with 24 hours notice before any rate adjustment takes effect.",
  },
  {
    num: "Art. 6 — OSS professional perimeter",
    title: "Scope boundaries and clinical limitations",
    text: "The professional operates exclusively within the certified OSS scope. The following are outside the professional perimeter and will always be declined: medication administration or management, medical procedures of any kind, clinical diagnosis or health assessment, wound care or post-surgical treatment, psychological or therapeutic sessions, and 24h live-in care — this service falls outside my professional scope and is not offered. Any refusal of out-of-scope requests does not constitute non-compliance with this contract. Any clinical situation identified during a session will be immediately reported to the family and redirected to the appropriate medical professional.",
    highlighted: true,
  },
  {
    num: "Art. 7 — Privacy and data protection",
    title: "GDPR compliance — EU Regulation 2016/679",
    text: "All personal and sensitive data relating to the client and the assisted person are processed exclusively for the purposes of the professional service described in this contract, in compliance with EU Regulation 2016/679 (GDPR). Data will not be shared with third parties without explicit written consent. The client has the right to access, rectify, or request erasure of their data at any time by contacting the professional in writing.",
  },
  {
    num: "Art. 8 — Minimum support session",
    title: "Minimum intervention duration",
    text: "The minimum duration for any support session is 5 consecutive hours. No exception will be made regardless of the nature of the intervention or the client profile. This minimum applies to all session types — daytime, passive night, and active night — and is reflected in all invoicing.",
  },
];

export default function ContractPage() {
  const [language, setLanguage] = useState<"it" | "en">("it");

  return (
    <>
      <main className="contract-page">
        <div className="page-hero">
          <div className="page-hero-inner">
            <div className="page-eyebrow">Contract & Conditions</div>
            <h1 className="page-title">
              Legal transparency.
              <br />
              Before anything begins.
            </h1>
            <p className="page-subtitle">
              Before starting any collaboration, a written contract is signed that defines precisely what I do, how
              I do it, how much it costs, and what happens if anything changes. It protects you as a client. It
              protects me as a professional.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="section-inner">
            <div className="framing-box">
              <div className="framing-title">Transparency first and foremost</div>
              <p className="framing-text">
                This is not a bureaucratic formality — it is the foundation of a serious professional relationship.
                The contract is signed only after your request has been evaluated and we have spoken to each other.
                No contract is issued to an unqualified or unapproved request.
              </p>
            </div>

            <div className="clauses-grid">
              {clauses.map((item) => (
                <article key={item.art} className="clause-card">
                  <div className="clause-art">{item.art}</div>
                  <div className="clause-title">{item.title}</div>
                  <div className="clause-desc">{item.desc}</div>
                </article>
              ))}
            </div>

            <div className="contract-doc">
              <div className="contract-doc-header">
                <div>
                  <div className="contract-doc-title">Professional Service Contract — Home Care OSS</div>
                  <div className="contract-doc-sub">Standard Model 2025 · Permanent model · updated 2025</div>
                </div>

                <div className="contract-lang-toggle">
                  <button
                    type="button"
                    className={language === "it" ? "lang-btn active" : "lang-btn"}
                    onClick={() => setLanguage("it")}
                  >
                    IT
                  </button>
                  <button
                    type="button"
                    className={language === "en" ? "lang-btn active" : "lang-btn"}
                    onClick={() => setLanguage("en")}
                  >
                    EN
                  </button>
                </div>
              </div>

              <div className="contract-parties">
                <div className="party-block">
                  <div className="party-label">The Professional</div>
                  <div className="party-name">Ghassen Mansouri</div>
                  <div className="party-detail">
                    Freelance OSS · P.IVA 01103920144
                    <br />
                    Dervio (LC) · Lago di Como · Lecco · Sondrio · Milan
                  </div>
                </div>
                <div className="party-block">
                  <div className="party-label">The Client</div>
                  <div className="party-name">[Name and surname]</div>
                  <div className="party-detail">
                    [Address]
                    <br />
                    Assisted: [Name]
                  </div>
                </div>
              </div>

              <div className="contract-articles">
                {articles.map((item) => (
                  <div key={item.num} className="article">
                    <div className="article-num">{item.num}</div>
                    <div className="article-title">{item.title}</div>
                    <div className="article-text">
                      {item.text}
                      {item.highlighted ? (
                        <div className="highlight-box">
                          Any request outside the OSS perimeter will be declined. Refusal does not constitute
                          non-compliance.
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="signature-box">
              <div className="signature-kicker">Digital signature — approved requests only</div>
              <p className="signature-note">
                The signature form is accessible only to clients whose evaluation request has been reviewed and
                approved. A signed PDF copy is automatically sent to the email address provided during the request
                process.
              </p>

              <div className="signature-form">
                <div className="form-group">
                  <label className="form-label">Name and surname</label>
                  <input type="text" className="form-input" placeholder="Full legal name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Date of signature</label>
                  <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Agreed rate (€/hour)</label>
                  <input type="text" className="form-input" placeholder="As agreed during evaluation call" />
                </div>
                <div className="form-group">
                  <label className="form-label">Collaboration start date</label>
                  <input type="date" className="form-input" />
                </div>
              </div>

              <div className="signature-checks">
                <label className="check-item">
                  <input type="checkbox" />
                  <span>I have read and fully accept the contract and all its clauses.</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" />
                  <span>I consent to the processing of my personal data pursuant to GDPR (EU Regulation 2016/679).</span>
                </label>
                <label className="check-item">
                  <input type="checkbox" />
                  <span>
                    I confirm that the requested activities fall within the <a href="/services">OSS professional scope</a>.
                  </span>
                </label>
              </div>

              <button
                type="button"
                className="btn-sign"
                onClick={() => {
                  window.alert("Signature submitted. A signed copy will be sent to your email.");
                }}
              >
                Sign and send the contract
              </button>

              <p className="sign-legal">
                Legislative Decree 82/2005 — Digital signature with legal value equivalent to a handwritten
                signature. A signed PDF copy will be automatically sent to the email address provided during the
                evaluation request.
              </p>
            </div>

            <div className="download-row">
              <div className="download-text">
                Read the contract carefully or share it with a family member before signing.
              </div>
              <button type="button" className="btn-download" onClick={() => window.print()}>
                Download PDF contract →
              </button>
            </div>

            <div className="cta-strip">
              <div className="cta-strip-title">Everything clear. Everything transparent.</div>
              <p className="cta-strip-sub">
                The contract is signed only after your request has been evaluated and we have spoken to each other.
              </p>
              <a href="/request" className="btn-white">
                Submit your evaluation request →
              </a>
              <p className="cta-note">No obligation. No automatic responses. Just a professional assessment.</p>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .contract-page {
          --green: #0f6e56;
          --green-light: #e8f7f2;
          --green-mid: #c5e8df;
          --ink: #1c1c1a;
          --sand: #f5f2ec;
          --terra: #c4763a;
          --text-muted: #6b6865;
          --text-light: #9b9895;
          --border: #e2ddd6;
          --white: #ffffff;
          --font-display: "Cormorant Garamond", serif;
          --font-body: "DM Sans", sans-serif;
          --radius: 10px;
          --radius-lg: 16px;
          --shadow: 0 2px 12px rgba(28, 28, 26, 0.08);

          font-family: var(--font-body);
          color: var(--ink);
          background: var(--white);
          font-size: 15px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .contract-page,
        .contract-page * {
          box-sizing: border-box;
        }

        .contract-page a {
          color: inherit;
          text-decoration: none;
        }

        .page-hero {
          background: var(--sand);
          padding: 56px 5% 48px;
          border-bottom: 1px solid var(--border);
        }

        .page-hero-inner,
        .section-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .page-eyebrow,
        .framing-title,
        .clause-art,
        .party-label,
        .signature-kicker,
        .cta-note {
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .page-eyebrow {
          font-size: 11px;
          font-weight: 500;
          color: var(--green);
          margin-bottom: 12px;
        }

        .page-title {
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 300;
          line-height: 1.15;
          color: var(--ink);
          margin-bottom: 12px;
        }

        .page-subtitle {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .section {
          padding: 56px 5%;
        }

        .framing-box {
          background: var(--green-light);
          border: 1px solid var(--green-mid);
          border-radius: var(--radius-lg);
          padding: 32px 36px;
          margin-bottom: 40px;
        }

        .framing-title {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 300;
          color: var(--green);
          margin-bottom: 12px;
          font-size: 11px;
          font-weight: 500;
        }

        .framing-text {
          font-size: 14px;
          color: var(--ink);
          line-height: 1.75;
        }

        .clauses-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 40px;
        }

        .clause-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 22px;
        }

        .clause-art {
          font-size: 11px;
          font-weight: 500;
          color: var(--terra);
          margin-bottom: 6px;
        }

        .clause-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 5px;
        }

        .clause-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .contract-doc {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 32px;
        }

        .contract-doc-header {
          background: var(--ink);
          padding: 24px 32px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
        }

        .contract-doc-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 300;
          color: var(--white);
        }

        .contract-doc-sub {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 4px;
        }

        .contract-lang-toggle {
          display: flex;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius);
          padding: 3px;
          gap: 3px;
        }

        .lang-btn {
          padding: 5px 14px;
          border-radius: 8px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          border: none;
          background: transparent;
          transition: all 0.2s;
        }

        .lang-btn.active {
          background: rgba(255, 255, 255, 0.15);
          color: var(--white);
          font-weight: 500;
        }

        .contract-parties {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border);
        }

        .party-block {
          padding: 20px 28px;
          border-right: 1px solid var(--border);
        }

        .party-block:last-child {
          border-right: none;
        }

        .party-label {
          font-size: 10px;
          font-weight: 500;
          color: var(--terra);
          margin-bottom: 8px;
        }

        .party-name {
          font-size: 15px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 3px;
        }

        .party-detail {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .contract-articles {
          padding: 24px 28px;
        }

        .article {
          padding: 16px 0;
          border-bottom: 1px solid var(--border);
        }

        .article:last-child {
          border-bottom: none;
        }

        .article-num {
          font-size: 11px;
          font-weight: 500;
          color: var(--terra);
          margin-bottom: 5px;
        }

        .article-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 6px;
        }

        .article-text {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .article-text strong {
          color: var(--ink);
          font-weight: 500;
        }

        .highlight-box {
          margin-top: 10px;
          background: #fff1da;
          border-radius: 10px;
          padding: 12px 14px;
          color: #6a532f;
          line-height: 1.6;
          font-size: 12px;
        }

        .signature-box {
          background: var(--sand);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 32px;
          margin-bottom: 24px;
        }

        .signature-kicker {
          font-size: 11px;
          font-weight: 500;
          color: var(--terra);
          margin-bottom: 12px;
        }

        .signature-note {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .signature-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 6px;
        }

        .form-input {
          width: 100%;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--ink);
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 10px 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-input:focus {
          border-color: var(--green);
        }

        .signature-checks {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
        }

        .check-item input[type="checkbox"] {
          width: 16px;
          height: 16px;
          accent-color: var(--green);
          cursor: pointer;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-item span {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .check-item a {
          color: var(--green);
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .btn-sign {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--green);
          color: var(--white);
          padding: 13px 26px;
          border-radius: var(--radius);
          font-size: 14px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-sign:hover {
          background: #0a5a44;
        }

        .sign-legal {
          font-size: 11px;
          color: var(--text-light);
          margin-top: 10px;
          line-height: 1.6;
        }

        .download-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 16px 20px;
          margin-bottom: 32px;
          gap: 16px;
        }

        .download-text {
          font-size: 13px;
          color: var(--text-muted);
        }

        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          color: var(--green);
          padding: 8px 16px;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 500;
          border: 1px solid var(--green);
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .btn-download:hover {
          background: var(--green-light);
        }

        .cta-strip {
          background: var(--green);
          border-radius: var(--radius-lg);
          padding: 36px;
          text-align: center;
        }

        .cta-strip-title {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 300;
          color: var(--white);
          margin-bottom: 10px;
        }

        .cta-strip-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 24px;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--white);
          color: var(--green);
          padding: 12px 24px;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }

        .btn-white:hover {
          background: var(--green-light);
        }

        .cta-note {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 14px;
        }

        @media (max-width: 768px) {
          .page-hero,
          .section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .clauses-grid,
          .contract-parties,
          .signature-form {
            grid-template-columns: 1fr;
          }

          .contract-doc-header,
          .download-row {
            flex-direction: column;
            align-items: stretch;
          }

          .party-block {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }

          .party-block:last-child {
            border-bottom: none;
          }

          .signature-box {
            padding: 22px;
          }

          .cta-strip {
            padding: 28px 18px;
          }

          .cta-strip-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .framing-box,
          .contract-articles {
            padding-left: 16px;
            padding-right: 16px;
          }

          .clause-card {
            padding: 18px;
          }
        }
      `}</style>
    </>
  );
}