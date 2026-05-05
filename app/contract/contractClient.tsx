"use client";

import React from "react";
import Link from "next/link";

const cards = [
  {
    num: "Section 1",
    title: "Who I am and how I work",
    desc: "I operate as a fully autonomous independent professional — not an employee. I am a certified OSS with P.IVA, providing structured home care within a defined professional scope. Sessions are planned flexibly between us, but the duration per session is fixed contractually. The minimum is always 5 consecutive hours.",
    tags: ["Autonomous professional", "OSS certified", "5h minimum", "Flexible calendar"],
    green: true,
  },
  {
    num: "Section 2",
    title: "Compensation and payment",
    desc: "My rates are agreed and documented before any contract is signed. Payment is made in advance — before the sessions of the agreed period begin. No advance payment means no confirmed collaboration. I invoice electronically via Aruba within 12 days of receiving payment. Only bank transfer or cash are accepted.",
    tags: ["Advance payment", "Bank transfer · Cash", "Electronic invoice", "€ only"],
    terra: true,
  },
  {
    num: "Section 3",
    title: "Cancellations and withdrawal",
    desc: "Cancellations are governed by a single clear threshold. More than 7 days notice before the start of the period: full reimbursement. Less than 7 days: the full advance payment is retained. No exceptions. Withdrawal by the client requires 15 days written notice. I can withdraw only for serious cause, completing all already-paid sessions first.",
    tags: ["7-day threshold", "15-day notice", "Written only", "No exceptions"],
    terra: true,
  },
  {
    num: "Section 4",
    title: "My OSS professional scope",
    desc: "I operate exclusively within the certified OSS perimeter defined by Italian law (Legge 42/1999, D.M. 520/2001). The following are outside my scope and will always be declined: medication administration, medical procedures, clinical diagnosis, wound care, psychological sessions, and 24h live-in care. Refusal of out-of-scope requests is never non-compliance.",
    tags: ["No medication", "No clinical acts", "No 24h live-in", "OSS certified scope only"],
    terra: true,
  },
  {
    num: "Section 5",
    title: "Confidentiality and personal data",
    desc: "All information relating to the assisted person and the family is treated with absolute professional confidentiality, in compliance with Italian professional secrecy law (art. 622 c.p.) and EU GDPR Regulation 2016/679. Data is processed exclusively for the purpose of the collaboration and never shared with third parties. The confidentiality obligation extends 3 years beyond the end of the contract.",
    tags: ["GDPR compliant", "No third-party sharing", "Art. 622 c.p.", "3-year obligation"],
    green: true,
  },
  {
    num: "Section 6",
    title: "Applicable law and disputes",
    desc: "This contract is governed exclusively by Italian law under artt. 2229–2237 of the Codice Civile. Before any legal action, both parties commit to an amicable resolution attempt and, if needed, civil mediation (D.Lgs. 28/2010). The competent court for any unresolved dispute is the Tribunale di Lecco.",
    tags: ["Italian law", "Mandatory conciliation", "Tribunale di Lecco", "Art. 2229–2237 c.c."],
  },
];

const articles = [
  {
    label: "Art. 1",
    title: "Scope of the professional service",
    text: "I operate as a fully autonomous professional under artt. 2222 and 2230 c.c. — with no bond of subordination to the client and no employment relationship of any kind. I am a certified OSS with P.IVA 01103920144, providing home care assistance within the agreed professional scope, documented in the attached Task Schedule (Annex A). The specific care category applicable to this contract is: [Category A — Elderly care / Category B — Disability support / Category C — Children with special needs]. The Task Schedule may be updated by mutual written consent without requiring a full contract reissue.",
  },
  {
    label: "Art. 3",
    title: "Minimum session and scheduling",
    text: "The minimum duration per support session is 5 consecutive hours — no exceptions, regardless of care profile or session type. The agreed duration for this contract is [___] hours per session. The session calendar is flexible and agreed between both parties. What is contractually fixed is the session length, the number of sessions per period, and the session type (daytime 07:00–22:00 / passive night / active night). Changes to the time slot require 48 hours notice and my explicit agreement.",
  },
  {
    label: "Art. 2",
    title: "Hourly rate and advance payment",
    text: "Agreed hourly rate: € [___] / hour · Session type: [diurna / notturna passiva / notturna attiva]. Any complexity or distance supplement: € [___] / hour — [motivation]. Payment of the full compensation for the agreed period is due before the sessions begin — weekly by the Monday prior, or monthly by the first of the month. No advance payment = no confirmed collaboration. I accept payment exclusively by bank transfer (IBAN: [___]) or cash within legal limits. I issue electronic invoices via SDI within 12 days of receiving payment. All payments in Euro — international transfer fees are exclusively at the client's expense.",
  },
  {
    label: "Art. 8",
    title: "Travel expense reimbursement",
    text: "No travel supplement is applied within the primary operational zone (Dervio / province of Lecco and surrounding areas). For interventions outside the primary zone — including Milan — a distance supplement is agreed in writing before the collaboration begins and stated in Art. 2 above.",
  },
  {
    label: "Art. 9",
    title: "Rate revision",
    text: "The agreed rate remains fixed unless the care profile changes significantly — increased dependency, new care needs, change of session type, or geographic extension. I communicate any proposed rate revision in writing with a minimum of 7 days notice. The client may accept or refuse. If refused, the collaboration ends at the close of the current paid period with no penalty for either party.",
  },
  {
    label: "Art. 4",
    title: "Cancellation policy",
    text: "Cancellation policy — one threshold, no exceptions, regardless of the reason (including medical emergency or hospitalisation): More than 7 days notice before the start of the period → full reimbursement of the advance payment. Less than 7 days notice before the start of the period → the full advance payment is retained by me. Cancellation must be communicated in writing via email or WhatsApp. Verbal notice has no legal validity under this contract. Reimbursements due are returned within 5 working days by bank transfer.",
  },
  {
    label: "Art. 5",
    title: "Withdrawal from the contract",
    text: "Client withdrawal: The client may withdraw at any time with a minimum of 15 calendar days written notice. During the notice period, sessions of the current paid period continue as normal. Advance payment already received for sessions performed is retained. Unpaid future periods generate no obligation for either party. My withdrawal: I may withdraw only for serious cause (non-payment, dangerous behaviour, persistent out-of-scope requests, force majeure). I complete all sessions of the already-paid period before withdrawal takes effect, except in cases of immediate serious cause. Future unpaid periods require no notice — they were never activated.",
  },
  {
    label: "Art. 6",
    title: "Automatic termination clause",
    text: "The contract resolves automatically upon my written notice in the event of: non-payment after 5 working days, repeated out-of-scope requests after formal refusal, behaviour putting my safety at risk, false declarations at signing, serious confidentiality breach, or systematic unavailability by the client for two or more consecutive periods. No court judgment is required. The resolution is effective upon receipt of my written communication (art. 1456 c.c.).",
  },
  {
    label: "Art. 10",
    title: "OSS scope and liability limitation",
    text: "I operate exclusively within the certified OSS scope (Legge 42/1999, D.M. 520/2001). The following are permanently excluded and will always be declined — regardless of urgency or client request: medication administration or management, medical procedures of any kind, clinical diagnosis or health assessment, wound care or post-surgical treatment, psychological or therapeutic sessions, and 24h live-in care — this service falls outside my professional scope and is not offered. Any clinical situation I identify during a session is immediately reported to the family and redirected to the appropriate medical professional. I am not liable for outcomes requiring clinical intervention beyond my certified scope. I am also not responsible for damage caused by incomplete or incorrect information provided by the client at evaluation stage.",
  },
  {
    label: "Art. 7",
    title: "Service suspension",
    text: "I may suspend sessions temporarily — without being in breach — in cases of: non-payment (automatic, no notice required), unsafe environmental conditions at the client's home, my own temporary incapacity (notified as early as possible), or force majeure. Sessions suspended due to my incapacity are reimbursed or credited to the next period. Sessions suspended due to non-payment are governed by Art. 4.",
  },
  {
    label: "Art. 11",
    title: "Confidentiality and professional secrecy",
    text: "I maintain absolute confidentiality over all information relating to the assisted person, the family, health conditions, habits, and any other information I acquire in the course of my work. This information will never be shared in any form without the client's explicit written consent, except where required by law (e.g. emergency reporting). The confidentiality obligation applies to both parties and remains in force for 3 years after the end of the contract for any reason.",
  },
  {
    label: "Art. 12",
    title: "Personal data processing — GDPR",
    text: "Personal and sensitive data is processed exclusively for the purposes of this collaboration, in compliance with EU Regulation 2016/679 (GDPR) and D.Lgs. 101/2018. I am the Data Controller. Health data (special category under art. 9 GDPR) is processed only with the client's explicit consent. Data is retained for the duration of the collaboration, plus 10 years for fiscal obligations and 3 years for contractual disputes. The client has the right to access, rectify, and request erasure of their data at any time by contacting me in writing.",
  },
  {
    label: "Art. 13",
    title: "Force majeure and unforeseen events",
    text: "Force majeure events (natural disasters, declared pandemics, government restrictions, sudden documented illness) suspend my obligation to perform without constituting breach. I notify the client in writing as soon as possible. Advance payment for sessions not delivered during force majeure is fully reimbursed within 5 working days. If the event exceeds 30 days, either party may withdraw without penalty.",
  },
  {
    label: "Art. 14–15",
    title: "Competent court and conciliation",
    text: "This contract is governed exclusively by Italian law (artt. 2229–2237 c.c.). Before any legal action, both parties commit to an amicable resolution attempt (15 days) and, if needed, civil mediation under D.Lgs. 28/2010. The competent court for any unresolved dispute is exclusively the Tribunale di Lecco. This clause is expressly approved pursuant to artt. 1341–1342 c.c.",
  },
  {
    label: "Art. 17",
    title: "Specific approval of onerous clauses",
    text: "The client expressly and specifically approves the following clauses under artt. 1341–1342 c.c.: advance payment as activation condition (Art. 2) · cancellation policy — full retention under 7 days (Art. 4) · 15-day withdrawal notice (Art. 5) · automatic termination clause (Art. 6) · OSS scope exclusions (Art. 10) · exclusive jurisdiction — Tribunale di Lecco (Art. 14).",
  },
];

export default function ContractPage() {
  return (
    <main className="contract-page">
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">Contract & Conditions</div>
          <h1 className="page-title">
            Legal transparency.
            <br />
            Before anything begins.
          </h1>
          <p className="page-sub">
            Before starting any collaboration, a written contract is signed that defines precisely what I do, how I
            do it, how much it costs, and what happens if anything changes. It protects you as a client. It protects me
            as a professional.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="inner">
          <div className="framing">
            <div className="framing-title">Transparency first and foremost</div>
            <p className="framing-text">
              This is not a bureaucratic formality — it is the foundation of a serious professional relationship. The
              contract is signed only after your request has been evaluated and we have spoken to each other. No
              contract is issued to an unqualified or unapproved request.
            </p>
          </div>

          <div className="blocks-grid">
            {cards.map((card) => (
              <article key={card.num} className="block-card">
                <div className="block-num">{card.num}</div>
                <h3 className="block-title">{card.title}</h3>
                <p className="block-desc">{card.desc}</p>
                <div className="block-tags">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className={[
                        "block-tag",
                        card.green ? "block-tag-green" : "",
                        card.terra ? "block-tag-terra" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sand">
        <div className="inner">
          <div className="draft-heading">
            <div className="eyebrow eyebrow-terra">Contract draft — read only</div>
            <h2 className="draft-main-title">
              An example of what is signed
              <br />
              before I begin.
            </h2>
          </div>

          <div className="draft-wrapper">
            <div className="draft-header">
              <div>
                <div className="draft-title">Professional Service Contract — Home Care OSS</div>
                <div className="draft-sub">Under artt. 2229–2237 of the Italian Civil Code · Standard Model 2025</div>
              </div>

              <div className="draft-readonly-badge">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <circle cx="5" cy="5" r="4.5" stroke="rgba(255,255,255,0.5)" />
                  <path
                    d="M3 5h4M5 3v4"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                Read only — example
              </div>
            </div>

            <div className="draft-parties">
              <div className="party">
                <div className="party-label">The Professional</div>
                <div className="party-name">Ghassen Mansouri</div>
                <div className="party-detail">
                  OSS Independent Professional · P.IVA 01103920144
                  <br />
                  Dervio (LC) · Lake Como · Lecco · Sondrio · Milan
                  <br />
                  hello@accanto.care · +39 379 230 6809
                </div>
              </div>

              <div className="party">
                <div className="party-label">The Client / Legal Representative</div>
                <div className="party-field">[Client full name]</div>
                <div className="party-field">[Address · Tax identification number]</div>
                <div className="party-field">Acting as: [legal role]</div>
                <div className="party-field">Assisted person: [Full name]</div>
              </div>
            </div>

            <div className="draft-articles">
              <div className="draft-section-divider">
                <div className="draft-section-divider-label">Section 1 — Who I am and how I work</div>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 1</span>
                  <span className="art-title">Scope of the professional service</span>
                </div>
                <p className="art-text">{articles[0].text}</p>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 3</span>
                  <span className="art-title">Minimum session and scheduling</span>
                </div>
                <p className="art-text">{articles[1].text}</p>
              </div>

              <div className="draft-section-divider">
                <div className="draft-section-divider-label">Section 2 — Compensation and payment</div>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 2</span>
                  <span className="art-title">Hourly rate and advance payment</span>
                </div>
                <p className="art-text">{articles[2].text}</p>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 8</span>
                  <span className="art-title">Travel expense reimbursement</span>
                </div>
                <p className="art-text">{articles[3].text}</p>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 9</span>
                  <span className="art-title">Rate revision</span>
                </div>
                <p className="art-text">{articles[4].text}</p>
              </div>

              <div className="draft-section-divider">
                <div className="draft-section-divider-label">Section 3 — Cancellations and withdrawal</div>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 4</span>
                  <span className="art-title">Cancellation policy</span>
                </div>
                <p className="art-text">{articles[5].text}</p>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 5</span>
                  <span className="art-title">Withdrawal from the contract</span>
                </div>
                <p className="art-text">{articles[6].text}</p>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 6</span>
                  <span className="art-title">Automatic termination clause</span>
                </div>
                <p className="art-text">{articles[7].text}</p>
              </div>

              <div className="draft-section-divider">
                <div className="draft-section-divider-label">Section 4 — OSS professional scope</div>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 10</span>
                  <span className="art-title">OSS scope and liability limitation</span>
                </div>
                <p className="art-text">{articles[8].text}</p>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 7</span>
                  <span className="art-title">Service suspension</span>
                </div>
                <p className="art-text">{articles[9].text}</p>
              </div>

              <div className="draft-section-divider">
                <div className="draft-section-divider-label">Section 5 — Confidentiality and personal data</div>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 11</span>
                  <span className="art-title">Confidentiality and professional secrecy</span>
                </div>
                <p className="art-text">{articles[10].text}</p>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 12</span>
                  <span className="art-title">Personal data processing — GDPR</span>
                </div>
                <p className="art-text">{articles[11].text}</p>
              </div>

              <div className="draft-section-divider">
                <div className="draft-section-divider-label">Section 6 — Applicable law and disputes</div>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 13</span>
                  <span className="art-title">Force majeure and unforeseen events</span>
                </div>
                <p className="art-text">{articles[12].text}</p>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 14–15</span>
                  <span className="art-title">Competent court and conciliation</span>
                </div>
                <p className="art-text">{articles[13].text}</p>
              </div>

              <div className="art-row">
                <div className="art-row-header">
                  <span className="art-label">Art. 17</span>
                  <span className="art-title">Specific approval of onerous clauses</span>
                </div>
                <p className="art-text">{articles[14].text}</p>
              </div>
            </div>
          </div>

          <div className="closing-note">
            <p className="closing-note-text">
              Il contratto completo, comprensivo degli allegati e delle clausole specifiche, viene trasmesso al Cliente
              via email in formato PDF firmato, successivamente all'approvazione della richiesta di valutazione.
            </p>
          </div>

          <div className="cta-block">
            <div className="cta-title">Everything clear. Everything transparent.</div>
            <p className="cta-sub">
              I only send the signed contract after I have evaluated your request and we have spoken to each other. No
              shortcuts.
            </p>
            <Link
  href="/request"
  style={{
    backgroundColor: "#ffffff",
    color: "black",
    padding: "14px 28px",            // bigger
    borderRadius: "12px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",               // slightly larger text
    fontWeight: 500,
    border: "1.5px solid #0f6e56",  // clean green border
    textDecoration: "none",
    transition: "all 0.2s ease",
  }}
>
  Submit your request →
</Link>
            <p className="cta-note">No obligation. No automatic responses. Just a professional assessment.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contract-page {
          --green: #0f6e56;
          --green-light: #e8f7f2;
          --green-mid: #c5e8df;
          --ink: #1c1c1a;
          --sand: #f5f2ec;
          --terra: #c4763a;
          --terra-light: #f7ede3;
          --text-muted: #6b6865;
          --text-light: #9b9895;
          --border: #e2ddd6;
          --white: #ffffff;
          --font-display: "Cormorant Garamond", serif;
          --font-body: "DM Sans", sans-serif;
          --radius: 10px;
          --radius-lg: 16px;
          --shadow: 0 2px 16px rgba(28, 28, 26, 0.09);

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
        .inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 12px;
        }

        .eyebrow-terra {
          color: var(--terra);
        }

        .page-title {
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 300;
          line-height: 1.15;
          color: var(--ink);
          margin-bottom: 12px;
        }

        .page-sub {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 640px;
        }

        .section {
          padding: 56px 5%;
        }

        .section-sand {
          background: var(--sand);
        }

        .framing {
          background: var(--green-light);
          border: 1px solid var(--green-mid);
          border-radius: var(--radius-lg);
          padding: 30px 34px;
          margin-bottom: 48px;
        }

        .framing-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 300;
          color: var(--green);
          margin-bottom: 10px;
        }

        .framing-text {
          font-size: 14px;
          color: var(--ink);
          line-height: 1.75;
        }

        .blocks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .block-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px 26px;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .block-card:hover {
          box-shadow: var(--shadow);
          transform: translateY(-2px);
        }

        .block-num {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 10px;
        }

        .block-title {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 300;
          color: var(--ink);
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .block-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 14px;
        }

        .block-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .block-tag {
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 99px;
          border: 1px solid var(--border);
          color: var(--text-muted);
          background: var(--sand);
        }

        .block-tag-green {
          background: var(--green-light);
          border-color: var(--green-mid);
          color: var(--green);
        }

        .block-tag-terra {
          background: var(--terra-light);
          border-color: rgba(196, 118, 58, 0.25);
          color: var(--terra);
        }

        .draft-heading {
          margin-bottom: 24px;
        }

        .draft-main-title {
          font-family: var(--font-display);
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 300;
          color: var(--ink);
          line-height: 1.2;
        }

        .draft-wrapper {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 32px;
        }

        .draft-header {
          background: var(--ink);
          padding: 22px 28px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .draft-title {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 300;
          color: var(--white);
        }

        .draft-sub {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.45);
          margin-top: 4px;
        }

        .draft-readonly-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 99px;
          padding: 4px 12px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          white-space: nowrap;
        }

        .draft-parties {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border);
        }

        .party {
          padding: 16px 24px;
          border-right: 1px solid var(--border);
        }

        .party:last-child {
          border-right: none;
        }

        .party-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 6px;
        }

        .party-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 2px;
        }

        .party-detail,
        .party-field {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .draft-articles {
          padding: 20px 24px;
        }

        .art-row {
          padding: 16px 0;
          border-bottom: 1px solid var(--border);
        }

        .art-row:last-child {
          border-bottom: none;
        }

        .art-row-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 8px;
        }

        .art-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--terra);
          flex-shrink: 0;
          padding-top: 2px;
          min-width: 80px;
        }

        .art-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
        }

        .art-text {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.65;
          padding-left: 96px;
        }

        .art-text strong {
          color: var(--ink);
          font-weight: 500;
        }

        .draft-section-divider {
          background: var(--sand);
          padding: 10px 24px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          margin: 0 -24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .draft-section-divider-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--green);
        }

        .closing-note {
          background: var(--sand);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px 28px;
          margin-bottom: 28px;
          text-align: center;
        }

        .closing-note-text {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.75;
          font-style: italic;
          max-width: 680px;
          margin: 0 auto;
        }

        .cta-block {
          background: var(--green);
          border-radius: var(--radius-lg);
          padding: 36px;
          text-align: center;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 300;
          color: var(--white);
          margin-bottom: 10px;
        }

        .cta-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 22px;
          line-height: 1.7;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--white) !important;
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
          margin-top: 13px;
        }

        @media (max-width: 768px) {
          .page-hero,
          .section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .blocks-grid,
          .draft-parties {
            grid-template-columns: 1fr;
          }

          .draft-header {
            flex-direction: column;
            align-items: stretch;
          }

          .party {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }

          .party:last-child {
            border-bottom: none;
          }

          .art-text {
            padding-left: 0;
          }

          .art-row-header {
            flex-direction: column;
            gap: 4px;
          }

          .art-label {
            min-width: unset;
          }

          .cta-block {
            padding: 28px 18px;
          }

          .cta-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .framing,
          .draft-articles {
            padding-left: 16px;
            padding-right: 16px;
          }

          .block-card {
            padding: 18px;
          }

          .draft-wrapper {
            border-radius: 14px;
          }
        }
      `}</style>
    </main>
  );
}