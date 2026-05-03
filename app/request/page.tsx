"use client";

import { useState } from "react";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4;

export default function RequestPage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [slot, setSlot] = useState<"Daytime" | "Night" | "">("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);

  const totalSteps = 4;
  const progress = Math.round((currentStep / totalSteps) * 100);

  const goStep = (step: Step) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitForm = () => {
    if (!gdprConsent || !termsConsent) {
      alert("Please accept the privacy policy and terms of collaboration to proceed.");
      return;
    }

    setShowSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="request-page">
      <div className="page-wrap">
        <div className="page-eyebrow">Evaluation Request</div>
        <h1 className="page-title">Lead qualification form</h1>
        <p className="page-subtitle">
          4 sections · Please complete carefully. I evaluate each request individually.
          <br />
          Not all requests are accepted.
        </p>

        {!showSuccess ? (
          <>
            <div className="progress-bar-wrap">
              <span className="progress-step-label">
                Section {currentStep} of {totalSteps}
              </span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span className="progress-pct">{progress}%</span>
            </div>

            <section className={`form-section ${currentStep === 1 ? "active" : ""}`} id="section-1">
              <div className="form-section-header">
                <div className="form-section-num">Section 1 of 4</div>
                <div className="form-section-title">Applicant&apos;s data</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Who are you? <span className="req">*</span>
                </label>
                <div className="radio-group">
                  <RadioButton name="who" id="who-it" value="Italian" label="Italian" />
                  <RadioButton name="who" id="who-ex" value="Expat" label="Expat / International" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Applicant&apos;s role <span className="req">*</span>
                </label>
                <select className="form-select" id="role" defaultValue="">
                  <option value="">Select your role…</option>
                  <option>Interested party directly</option>
                  <option>Family</option>
                  <option>Son / Daughter</option>
                  <option>Relative</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Name and surname <span className="req">*</span>
                  </label>
                  <input type="text" className="form-input" id="name" placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Telephone <span className="req">*</span>
                  </label>
                  <input type="tel" className="form-input" id="phone" placeholder="+39 / +33 / +44…" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Email <span className="req">*</span>
                  </label>
                  <input type="email" className="form-input" id="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Preferred language <span className="req">*</span>
                  </label>
                  <select className="form-select" id="lang" defaultValue="">
                    <option value="">Select language…</option>
                    <option>Italian</option>
                    <option>English</option>
                    <option>French</option>
                    <option>Arabic</option>
                    <option>German</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Municipality of residence <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    id="municipality"
                    placeholder="e.g. Lecco, Como, Milan…"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    ZIP Code <span className="req">*</span>
                  </label>
                  <input type="text" className="form-input" id="zip" placeholder="e.g. 23900" />
                </div>
              </div>

              <div className="form-nav">
                <div />
                <button type="button" className="btn-next" onClick={() => goStep(2)}>
                  Next → Profile of the person assisted
                </button>
              </div>
            </section>

            <section className={`form-section ${currentStep === 2 ? "active" : ""}`} id="section-2">
              <div className="form-section-header">
                <div className="form-section-num">Section 2 of 4</div>
                <div className="form-section-title">Profile of the person assisted</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Type of person assisted <span className="req">*</span>
                </label>
                <div className="radio-group">
                  <RadioButton name="type" id="type-elderly" value="Elderly" label="Elderly" />
                  <RadioButton
                    name="type"
                    id="type-disabled"
                    value="Disabled person"
                    label="Disabled person"
                  />
                  <RadioButton name="type" id="type-minor" value="Minor" label="Minor" />
                  <RadioButton name="type" id="type-other" value="Other" label="Other" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Age range <span className="req">*</span>
                </label>
                <select className="form-select" id="age" defaultValue="">
                  <option value="">Select age range…</option>
                  <option>6–17 years</option>
                  <option>18–35 years</option>
                  <option>36–55 years</option>
                  <option>56–70 years</option>
                  <option>71–85 years</option>
                  <option>86+ years</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Level of autonomy <span className="req">*</span>
                </label>
                <div className="radio-group">
                  <RadioButton name="autonomy" id="aut-auto" value="Autonomous" label="Autonomous" />
                  <RadioButton
                    name="autonomy"
                    id="aut-semi"
                    value="Semi-autonomous"
                    label="Semi-autonomous"
                  />
                  <RadioButton
                    name="autonomy"
                    id="aut-not"
                    value="Not autonomous"
                    label="Not autonomous"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Requested activities <span className="req">*</span>
                </label>
                <div className="checkbox-group">
                  <CheckBox
                    label="Personal hygiene and personal care"
                    name="activities"
                    value="Personal hygiene and personal care"
                  />
                  <CheckBox label="Mobilization and transfers" name="activities" value="Mobilization and transfers" />
                  <CheckBox
                    label="Meal preparation and feeding assistance"
                    name="activities"
                    value="Meal preparation and feeding assistance"
                  />
                  <CheckBox
                    label="Company and cognitive stimulation"
                    name="activities"
                    value="Company and cognitive stimulation"
                  />
                  <CheckBox
                    label="Home supervision and security"
                    name="activities"
                    value="Home supervision and security"
                  />
                  <CheckBox label="External accompaniment" name="activities" value="External accompaniment" />
                  <CheckBox
                    label="Family communication / reporting"
                    name="activities"
                    value="Family communication / reporting"
                  />
                  <CheckBox
                    label="Cultural/linguistic mediation"
                    name="activities"
                    value="Cultural/linguistic mediation"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Description of activities and expectations <span className="req">*</span>
                </label>
                <textarea
                  className="form-textarea"
                  id="description"
                  placeholder="Describe the situation, any specific needs, routines, expectations…"
                  rows={4}
                />
              </div>

              <div className="form-nav">
                <button type="button" className="btn-back" onClick={() => goStep(1)}>
                  ← Back
                </button>
                <button type="button" className="btn-next" onClick={() => goStep(3)}>
                  Next → Logistics and planning
                </button>
              </div>
            </section>

            <section className={`form-section ${currentStep === 3 ? "active" : ""}`} id="section-3">
              <div className="form-section-header">
                <div className="form-section-num">Section 3 of 4</div>
                <div className="form-section-title">Logistics and planning</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Days per week <span className="req">*</span>
                </label>
                <select className="form-select" id="days" defaultValue="">
                  <option value="">Select number of days…</option>
                  <option>1 day</option>
                  <option>2 days</option>
                  <option>3 days</option>
                  <option>4 days</option>
                  <option>5 days (Mon–Fri)</option>
                  <option>6 days</option>
                  <option>7 days</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Hours per support session <span className="req">*</span>
                </label>
                <select className="form-select" id="hours" defaultValue="">
                  <option value="">Select duration…</option>
                  <option>5 hours (minimum)</option>
                  <option>6–10 hours</option>
                  <option>10+ hours</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Time slot <span className="req">*</span>
                </label>
                <div className="radio-group">
                  <input
                    type="radio"
                    name="slot"
                    id="slot-day"
                    value="Daytime"
                    className="radio-option"
                    onChange={() => setSlot("Daytime")}
                  />
                  <label htmlFor="slot-day" className="radio-label">
                    Daytime (07:00–22:00)
                  </label>

                  <input
                    type="radio"
                    name="slot"
                    id="slot-night"
                    value="Night"
                    className="radio-option"
                    onChange={() => setSlot("Night")}
                  />
                  <label htmlFor="slot-night" className="radio-label">
                    Night (22:00–07:00)
                  </label>
                </div>

                <div className={`night-sub ${slot === "Night" ? "visible" : ""}`} id="night-sub">
                  <div className="night-sub-label">
                    Night shift type <span className="req">*</span>
                  </div>
                  <div className="radio-group">
                    <RadioButton
                      name="night-type"
                      id="nt-passive"
                      value="Passive night"
                      label="Passive — person sleeps autonomously, presence for sudden needs"
                    />
                    <RadioButton
                      name="night-type"
                      id="nt-active"
                      value="Active night"
                      label="Active — interventions required during the night session"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Requested start date <span className="req">*</span>
                </label>
                <input type="date" className="form-input" id="start-date" />
              </div>

              <div className="info-box">
                Night support sessions have specific pricing conditions (passive: €35/h · active: €40/h). These will be confirmed during the evaluation call.
              </div>

              <div className="form-nav">
                <button type="button" className="btn-back" onClick={() => goStep(2)}>
                  ← Back
                </button>
                <button type="button" className="btn-next" onClick={() => goStep(4)}>
                  Next → Duration and qualification
                </button>
              </div>
            </section>

            <section className={`form-section ${currentStep === 4 ? "active" : ""}`} id="section-4">
              <div className="form-section-header">
                <div className="form-section-num">Section 4 of 4</div>
                <div className="form-section-title">Duration and qualification</div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Expected support duration <span className="req">*</span>
                </label>
                <div className="radio-group">
                  <RadioButton
                    name="duration"
                    id="dur-short"
                    value="Short"
                    label="Short (less than 1 month)"
                  />
                  <RadioButton
                    name="duration"
                    id="dur-mid"
                    value="Medium"
                    label="Medium term (1–3 months)"
                  />
                  <RadioButton
                    name="duration"
                    id="dur-long"
                    value="Long"
                    label="Long term (3+ months)"
                  />
                  <RadioButton
                    name="duration"
                    id="dur-undef"
                    value="Not defined"
                    label="Not defined"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Have you already evaluated other professionals? <span className="req">*</span>
                </label>
                <div className="radio-group">
                  <RadioButton name="previous" id="prev-yes" value="Yes" label="Yes" />
                  <RadioButton
                    name="previous"
                    id="prev-no"
                    value="No, first assessment"
                    label="No, first assessment"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">How did you find this site?</label>
                <select className="form-select" id="source" defaultValue="">
                  <option value="">Select…</option>
                  <option>Google Search</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>WhatsApp</option>
                  <option>Referral</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Urgency level <span className="req">*</span>
                </label>
                <div className="radio-group">
                  <RadioButton name="urgency" id="urg-normal" value="Normal" label="Normal" />
                  <RadioButton name="urgency" id="urg-priority" value="Priority" label="Priority" />
                  <RadioButton name="urgency" id="urg-urgent" value="Urgent" label="Urgent" />
                </div>
              </div>

              <div className="privacy-block">
                <div className="privacy-title">Privacy and conditions</div>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    id="gdpr-consent"
                    checked={gdprConsent}
                    onChange={(e) => setGdprConsent(e.target.checked)}
                  />
                  <span>
                    I consent to the processing of personal data pursuant to the GDPR (EU Regulation 2016/679).
                  </span>
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    id="terms-consent"
                    checked={termsConsent}
                    onChange={(e) => setTermsConsent(e.target.checked)}
                  />
                  <span>
                    I declare that I have read and understood the{" "}
                    <Link href="/contract">terms of collaboration</Link>.
                  </span>
                </label>
              </div>

              <div className="form-nav submit-nav">
                <button type="button" className="btn-back" onClick={() => goStep(3)}>
                  ← Back
                </button>
                <button type="button" className="btn-submit" onClick={submitForm}>
                  Submit my evaluation request →
                </button>
              </div>

              <p className="submit-note">
                You will receive a response within 48 business hours.
                <br />
                Not all requests are accepted.
              </p>
            </section>
          </>
        ) : (
          <div className="success-box visible">
            <div className="success-icon">✓</div>
            <div className="success-title">Request received.</div>
            <p className="success-sub">
              Thank you for submitting your evaluation request.
              <br />
              I will review it personally and contact you within 48 business hours — in your preferred language.
              <br />
              <br />
              Not all requests lead to a collaboration. If there is a fit, you will hear from me directly.
            </p>
          </div>
        )}

        <div className="wa-alt">
          <div className="wa-alt-text">
            <strong>Prefer WhatsApp?</strong> Write to me directly and I&apos;ll get back to you personally.
          </div>
          <a href="https://wa.me/393792306809" className="btn-wa" target="_blank" rel="noopener noreferrer">
            WhatsApp →
          </a>
        </div>
      </div>

      <style jsx>{`
        .request-page {
          min-height: 100vh;
          background: var(--sand);
          color: var(--ink);
          font-family: var(--font-body);
        }

        .page-wrap {
          max-width: 780px;
          margin: 0 auto;
          padding: 48px 5% 72px;
        }

        .page-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 10px;
        }

        .page-title {
          font-family: var(--font-display);
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 300;
          line-height: 1.15;
          color: var(--ink);
          margin-bottom: 10px;
        }

        .page-subtitle {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .progress-bar-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 36px;
        }

        .progress-step-label {
          font-size: 12px;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .progress-bar {
          flex: 1;
          height: 3px;
          background: var(--border);
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--green);
          border-radius: 99px;
          transition: width 0.4s ease;
        }

        .progress-pct {
          font-size: 12px;
          font-weight: 500;
          color: var(--green);
          white-space: nowrap;
        }

        .form-section {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 32px;
          margin-bottom: 20px;
          display: none;
        }

        .form-section.active {
          display: block;
        }

        .form-section-header {
          margin-bottom: 24px;
        }

        .form-section-num {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 6px;
        }

        .form-section-title {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 300;
          color: var(--ink);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group:last-child {
          margin-bottom: 0;
        }

        .form-label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 6px;
          letter-spacing: 0.02em;
        }

        .form-label .req {
          color: var(--terra);
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--ink);
          background: var(--sand);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 10px 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: var(--green);
          box-shadow: 0 0 0 3px rgba(15, 110, 86, 0.08);
          background: var(--white);
        }

        .form-textarea {
          resize: vertical;
          min-height: 90px;
        }

        .form-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B6865' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
          cursor: pointer;
        }

        .radio-group {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .radio-option {
          display: none;
        }

        .radio-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          padding: 7px 14px;
          border-radius: 99px;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.2s;
          color: var(--text-muted);
          background: var(--white);
        }

        .radio-option:checked + .radio-label {
          background: var(--green-light);
          border-color: var(--green-mid);
          color: var(--green);
          font-weight: 500;
        }

        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .checkbox-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
        }

        .checkbox-item input[type="checkbox"] {
          width: 16px;
          height: 16px;
          accent-color: var(--green);
          cursor: pointer;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .checkbox-item span {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .night-sub {
          display: none;
          margin-top: 10px;
          background: var(--terra-light);
          border: 1px solid rgba(196, 118, 58, 0.2);
          border-radius: var(--radius);
          padding: 12px 14px;
        }

        .night-sub.visible {
          display: block;
        }

        .night-sub-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--terra);
          margin-bottom: 8px;
        }

        .info-box {
          background: var(--terra-light);
          border: 1px solid rgba(196, 118, 58, 0.2);
          border-radius: var(--radius);
          padding: 12px 16px;
          font-size: 12px;
          color: var(--terra);
          margin-top: 8px;
          line-height: 1.6;
        }

        .form-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 24px;
          gap: 16px;
        }

        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          color: var(--text-muted);
          padding: 11px 20px;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 500;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-back:hover {
          background: var(--sand);
          color: var(--ink);
        }

        .btn-next {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--green);
          color: var(--white);
          padding: 11px 24px;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-next:hover {
          background: #0a5a44;
        }

        .btn-submit {
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

        .btn-submit:hover {
          background: #a8622e;
        }

        .submit-note {
          font-size: 12px;
          color: var(--text-muted);
          text-align: center;
          margin-top: 16px;
          line-height: 1.6;
        }

        .wa-alt {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .wa-alt-text {
          font-size: 13px;
          color: var(--text-muted);
        }

        .wa-alt-text strong {
          color: var(--ink);
        }

        .btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--green);
          color: var(--white);
          padding: 9px 18px;
          border-radius: 99px;
          font-size: 13px;
          font-weight: 500;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .btn-wa:hover {
          background: #0a5a44;
        }

        .success-box {
          display: none;
          background: var(--white);
          border: 1px solid var(--green-mid);
          border-radius: var(--radius-lg);
          padding: 48px 32px;
          text-align: center;
          margin-bottom: 20px;
        }

        .success-box.visible {
          display: block;
        }

        .success-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--green-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 24px;
        }

        .success-title {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 300;
          color: var(--ink);
          margin-bottom: 10px;
        }

        .success-sub {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
        }

        .privacy-block {
          border-top: 1px solid var(--border);
          padding-top: 20px;
          margin-top: 8px;
        }

        .privacy-title {
          font-size: 12px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 12px;
          letter-spacing: 0.02em;
        }

        .privacy-block .checkbox-item {
          margin-bottom: 10px;
        }

        .privacy-block .checkbox-item span a {
          color: var(--green);
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        @media (max-width: 768px) {
          .page-wrap {
            padding-left: 16px;
            padding-right: 16px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-section,
          .success-box,
          .wa-alt {
            padding: 20px;
          }

          .form-nav {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-back,
          .btn-next,
          .btn-submit,
          .btn-wa {
            width: 100%;
            justify-content: center;
          }

          .wa-alt {
            flex-direction: column;
            align-items: flex-start;
          }

          .progress-bar-wrap {
            align-items: flex-start;
            flex-direction: column;
          }

          .progress-bar {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 28px;
          }

          .form-section-title,
          .success-title {
            font-size: 22px;
          }
        }
      `}</style>
    </main>
  );
}

function RadioButton({
  name,
  id,
  value,
  label,
}: {
  name: string;
  id: string;
  value: string;
  label: string;
}) {
  return (
    <>
      <input type="radio" name={name} id={id} value={value} className="radio-option" />
      <label htmlFor={id} className="radio-label">
        {label}
      </label>
    </>
  );
}

function CheckBox({
  label,
  name,
  value,
}: {
  label: string;
  name: string;
  value: string;
}) {
  return (
    <label className="checkbox-item">
      <input type="checkbox" name={name} value={value} />
      <span>{label}</span>
    </label>
  );
}