"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type TabType = "local" | "intl";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<TabType>("local");

  return (
    <main className="services-page">
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-eyebrow">Services</div>
          <h1 className="page-title">
            What I offer.
            <br />
            How I work. What is not included.
          </h1>
          <p className="page-subtitle">
            Every support session is structured, documented, and delivered
            within the certified OSS professional scope.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="tab-wrapper">
            <div className="tab-toggle">
              <button
                type="button"
                className={`tab-btn ${activeTab === "local" ? "active" : ""}`}
                onClick={() => setActiveTab("local")}
                aria-pressed={activeTab === "local"}
              >
                Local Families — Como Lake · Lecco · Valtellina
              </button>

              <button
                type="button"
                className={`tab-btn ${activeTab === "intl" ? "active" : ""}`}
                onClick={() => setActiveTab("intl")}
                aria-pressed={activeTab === "intl"}
              >
                International Clients — Expat & Temporary Stay
              </button>
            </div>
          </div>

          {activeTab === "local" ? (
            <div className="tab-content active">
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">Elderly People</div>
                  <h3 className="service-card-title">
                    Elderly Care Services ( for Seniors)
                  </h3>
                  <ul className="service-list">
                    <li>
                      Personal hygiene assistance for elderly (bathing,
                      grooming, oral care)
                    </li>
                    <li>
                      Dressing and mobility support for seniors (transfers,
                      walking assistance, fall prevention)
                    </li>
                    <li>
                      Medication reminders for elderly patients
                      (non-administration)
                    </li>
                    <li>
                      Meal preparation for seniors (diet-compliant, assisted
                      feeding if needed)
                    </li>
                    <li>
                      Companionship for elderly (reducing loneliness, cognitive
                      stimulation)
                    </li>
                    <li>
                      Monitoring vital signs (basic) (temperature, observation
                      of general condition)
                    </li>
                    <li>
                      Post-hospitalization support for seniors (recovery
                      assistance at home)
                    </li>
                    <li>
                      Alzheimer’s and dementia care support (routine assistance,
                      supervision)
                    </li>
                    <li>
                      Light housekeeping for elderly care (clean environment,
                      hygiene maintenance)
                    </li>
                    <li>
                      Assistance with daily living activities (ADLs)
                    </li>
                  </ul>
                </div>

                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">
                    People with Disabilities
                  </div>
                  <h3 className="service-card-title">
                    Disability Support Services ( Disabled Individuals)
                  </h3>
                  <ul className="service-list">
                    <li>
                      Personal care assistance for disabled individuals
                    </li>
                    <li>
                      Mobility support for people with disabilities (wheelchair
                      assistance, transfers)
                    </li>
                    <li>Daily living support (ADLs &amp; IADLs)</li>
                    <li>Support for independent living at home</li>
                    <li>Assistance with hygiene and continence care</li>
                    <li>Meal preparation adapted to specific needs</li>
                    <li>Emotional support and companionship</li>
                    <li>
                      Coordination with family and healthcare providers
                    </li>
                    <li>
                      Safe home environment maintenance (risk prevention)
                    </li>
                    <li>
                      Support for physical disability or reduced autonomy
                    </li>
                  </ul>
                </div>

                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">Minors</div>
                  <h3 className="service-card-title">
                    Special Needs Care for Minors (Non-Clinical Support)
                  </h3>
                  <ul className="service-list">
                    <li>Daily routine support for children with special needs</li>
                    <li>Personal hygiene assistance (age-appropriate)</li>
                    <li>Supervision and safety monitoring</li>
                    <li>
                      Support for developmental activities (non-therapeutic)
                    </li>
                    <li>Assistance with feeding and daily structure</li>
                    <li>Collaboration with parents and therapists</li>
                    <li>Emotional reassurance and structured companionship</li>
                    <li>
                      Support for children with autism or cognitive disabilities
                      (non-clinical)
                    </li>
                    <li>School preparation and routine assistance</li>
                    <li>Safe environment management at home</li>
                  </ul>
                </div>
              </div>
              
{/* Images inserted between "What is not included" and pricing section */}
              <div className="image-gallery">
                <div className="gallery-item">
                  <Image
                    src="/Images/2.jpg"
                    alt="Care professional assisting with daily activities"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-item">
                  <Image
                    src="/Images/5.jpg"
                    alt="Elderly person receiving companionship and support"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-item">
                  <Image
                    src="/Images/6.jpg"
                    alt="Warm care environment and professional support"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
              </div>
              <div className="oss-boundary">
                <div className="oss-boundary-title">
                  What is not included — professional boundaries
                  <span className="oss-badge">OSS perimeter</span>
                </div>
                <p className="oss-intro">
                  I operate exclusively within the certified OSS scope. The
                  following are outside my perimeter and will always be
                  declined:
                </p>
                <ul className="oss-list">
                  <li>Medication administration or management</li>
                  <li>Medical procedures of any kind</li>
                  <li>Clinical diagnosis or health assessment</li>
                  <li>Wound care or post-surgical treatment</li>
                  <li>Psychological or therapeutic sessions</li>
                  <li>
                    24h live-in care — this service falls outside my
                    professional scope and is not offered
                  </li>
                </ul>
                <p className="oss-note">
                  Any situation requiring clinical intervention will be
                  identified, reported to the family, and redirected to the
                  appropriate medical professional immediately.
                </p>
              </div>

              
            </div>
          ) : (
            <div className="tab-content active">
              <div className="intl-additions">
                <div className="intl-card">
                  <div className="intl-card-num">01</div>
                  <div className="intl-card-title">
                    Communication in your language
                  </div>
                  <div className="intl-card-desc">
                    All family updates delivered in your preferred language —
                    Italian, English, French, Arabic, or German. Written
                    reports shared remotely or onsite according to your
                    preference.
                  </div>
                </div>

                <div className="intl-card">
                  <div className="intl-card-num">02</div>
                  <div className="intl-card-title">
                    Remote family coordination
                  </div>
                  <div className="intl-card-desc">
                    Designed for families based abroad. You receive structured
                    updates at agreed intervals — no need to be present in
                    Italy to stay fully informed.
                  </div>
                </div>

                <div className="intl-card">
                  <div className="intl-card-num">03</div>
                  <div className="intl-card-title">Cultural awareness</div>
                  <div className="intl-card-desc">
                    18 years in international environments. I understand
                    different cultural approaches to care, privacy, and family
                    communication. No assumptions. No cultural friction.
                  </div>
                </div>

                <div className="intl-card">
                  <div className="intl-card-num">04</div>
                  <div className="intl-card-title">
                    Onboarding for non-resident families
                  </div>
                  <div className="intl-card-desc">
                    If you are not present in Italy at the start of the
                    collaboration, the onboarding process is adapted —
                    discovery call remote, documentation digital, first session
                    coordinated with a local contact if needed.
                  </div>
                </div>
              </div>

              <div className="services-grid">
                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">Elderly People</div>
                  <h3 className="service-card-title">
                    Elderly Care Services ( for Seniors)
                  </h3>
                  <ul className="service-list">
                    <li>
                      Personal hygiene assistance for elderly (bathing,
                      grooming, oral care)
                    </li>
                    <li>
                      Dressing and mobility support for seniors (transfers,
                      walking assistance, fall prevention)
                    </li>
                    <li>
                      Medication reminders for elderly patients
                      (non-administration)
                    </li>
                    <li>
                      Meal preparation for seniors (diet-compliant, assisted
                      feeding if needed)
                    </li>
                    <li>
                      Companionship for elderly (reducing loneliness, cognitive
                      stimulation)
                    </li>
                    <li>
                      Monitoring vital signs (basic) (temperature, observation
                      of general condition)
                    </li>
                    <li>
                      Post-hospitalization support for seniors (recovery
                      assistance at home)
                    </li>
                    <li>
                      Alzheimer’s and dementia care support (routine assistance,
                      supervision)
                    </li>
                    <li>
                      Light housekeeping for elderly care (clean environment,
                      hygiene maintenance)
                    </li>
                    <li>
                      Assistance with daily living activities (ADLs)
                    </li>
                  </ul>
                </div>

                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">
                    People with Disabilities
                  </div>
                  <h3 className="service-card-title">
                    Disability Support Services ( Disabled Individuals)
                  </h3>
                  <ul className="service-list">
                    <li>
                      Personal care assistance for disabled individuals
                    </li>
                    <li>
                      Mobility support for people with disabilities (wheelchair
                      assistance, transfers)
                    </li>
                    <li>Daily living support (ADLs &amp; IADLs)</li>
                    <li>Support for independent living at home</li>
                    <li>Assistance with hygiene and continence care</li>
                    <li>Meal preparation adapted to specific needs</li>
                    <li>Emotional support and companionship</li>
                    <li>
                      Coordination with family and healthcare providers
                    </li>
                    <li>
                      Safe home environment maintenance (risk prevention)
                    </li>
                    <li>
                      Support for physical disability or reduced autonomy
                    </li>
                  </ul>
                </div>

                <div className="service-card">
                  <div className="service-card-icon">OSS</div>
                  <div className="service-card-label">Minors</div>
                  <h3 className="service-card-title">
                    Special Needs Care for Minors (Non-Clinical Support)
                  </h3>
                  <ul className="service-list">
                    <li>Daily routine support for children with special needs</li>
                    <li>Personal hygiene assistance (age-appropriate)</li>
                    <li>Supervision and safety monitoring</li>
                    <li>
                      Support for developmental activities (non-therapeutic)
                    </li>
                    <li>Assistance with feeding and daily structure</li>
                    <li>Collaboration with parents and therapists</li>
                    <li>Emotional reassurance and structured companionship</li>
                    <li>
                      Support for children with autism or cognitive disabilities
                      (non-clinical)
                    </li>
                    <li>School preparation and routine assistance</li>
                    <li>Safe environment management at home</li>
                  </ul>
                </div>
              </div>

              <div className="oss-boundary">
                <div className="oss-boundary-title">
                  What is not included — professional boundaries
                  <span className="oss-badge">OSS perimeter</span>
                </div>
                <p className="oss-intro">
                  I operate exclusively within the certified OSS scope. The
                  following are outside my perimeter and will always be
                  declined:
                </p>
                <ul className="oss-list">
                  <li>Medication administration or management</li>
                  <li>Medical procedures of any kind</li>
                  <li>Clinical diagnosis or health assessment</li>
                  <li>Wound care or post-surgical treatment</li>
                  <li>Psychological or therapeutic sessions</li>
                  <li>
                    24h live-in care — this service falls outside my
                    professional scope and is not offered
                  </li>
                </ul>
                <p className="oss-note">
                  Any situation requiring clinical intervention will be
                  identified, reported to the family, and redirected to the
                  appropriate medical professional immediately.
                </p>
              </div>

              {/* Images inserted between "What is not included" and pricing section */}
              <div className="image-gallery">
                <div className="gallery-item">
                  <Image
                    src="/Images/2.jpg"
                    alt="Care professional assisting with daily activities"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-item">
                  <Image
                    src="/Images/5.jpg"
                    alt="Elderly person receiving companionship and support"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
                <div className="gallery-item">
                  <Image
                    src="/Images/6.jpg"
                    alt="Warm care environment and professional support"
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-eyebrow">Hourly rates</div>
          <h2 className="section-title">Transparent pricing framework.</h2>

          <div className="pricing-grid">
            <div className="pricing-section">
              <div className="pricing-title">Support session rates</div>
              <div className="pricing-sub">
                Defined before contract signature. No surprises.
              </div>

              <div className="pricing-row">
                <div>
                  <div className="pricing-label">Daytime support session</div>
                  <div className="pricing-label-sub">07:00 – 22:00</div>
                </div>
                <div className="pricing-value">From €28/h</div>
              </div>

              <div className="pricing-row">
                <div>
                  <div className="pricing-label">Night shift — passive</div>
                  <div className="pricing-label-sub">
                    22:00 – 07:00 · Person sleeps autonomously
                  </div>
                </div>
                <div className="pricing-value">€35/h</div>
              </div>

              <div className="pricing-row">
                <div>
                  <div className="pricing-label">Night shift — active</div>
                  <div className="pricing-label-sub">
                    22:00 – 07:00 · Interventions required
                  </div>
                </div>
                <div className="pricing-value">€40/h</div>
              </div>

              <div className="pricing-row">
                <div>
                  <div className="pricing-label">Complexity supplement</div>
                  <div className="pricing-label-sub">
                    High-dependency or complex care profile
                  </div>
                </div>
                <div className="pricing-value-eval">Defined at evaluation</div>
              </div>

              <div className="pricing-row">
                <div>
                  <div className="pricing-label">Distance supplement</div>
                  <div className="pricing-label-sub">
                    Outside primary zone (Dervio/Lecco)
                  </div>
                </div>
                <div className="pricing-value-eval">
                  Evaluated on overall mission scope
                </div>
              </div>

              <p className="pricing-note">
                Minimum 5 consecutive hours per support session. No exceptions.
                Sundays and public holidays charged as regular days. All
                supplements are communicated to the client before contract
                signature.
              </p>
            </div>

            <div className="pricing-side">
              <div className="info-card">
                <div className="info-card-title">Level of autonomy</div>
                <p>
                  Autonomous / Semi-autonomous / Non-autonomous — affects the
                  base rate. Defined during the evaluation phase.
                </p>
              </div>

              <div className="info-card">
                <div className="info-card-title">Required activities</div>
                <p>
                  Complexity and intensity of interventions required —
                  evaluated case by case during the discovery call.
                </p>
              </div>

              <div className="info-card">
                <div className="info-card-title">Support duration</div>
                <p>
                  Short / Medium / Long term — evaluated case by case.
                  Long-term collaborations receive a structured continuity plan.
                </p>
              </div>
            </div>
          </div>

          <div className="cta-strip">
            <div className="cta-strip-text">Ready to reach out ?</div>
            <Link
              href="/request"
              style={{
                all: "unset",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                color: "#1c1c1a",
                padding: "5px 15px",
                minHeight: "48px",
                borderRadius: "14px",
                fontSize: "15px",
                fontWeight: 450,
                lineHeight: 1,
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.08)",
                border: "1px solid #ffffff",
                textDecoration: "none",
              }}
            >
              <span>Submit your request →</span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
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
          --border-dark: #ccc8c0;
          --white: #ffffff;
          --font-display: "Cormorant Garamond", serif;
          --font-body: "DM Sans", sans-serif;
          --radius: 10px;
          --radius-lg: 16px;
          --shadow: 0 2px 12px rgba(28, 28, 26, 0.08);

          background: var(--white);
          margin: 0;
          font-family: var(--font-body);
          color: var(--ink);
          font-size: 15px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .services-page * {
          box-sizing: border-box;
        }

        .services-page a {
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
          max-width: 1100px;
          margin: 0 auto;
        }

        .page-eyebrow,
        .section-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .page-eyebrow {
          color: var(--green);
        }

        .section-eyebrow {
          color: var(--terra);
        }

        .page-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 300;
          line-height: 1.15;
          color: var(--ink);
          margin: 0 0 12px;
        }

        .page-subtitle {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 560px;
          margin: 0;
        }

        .section {
          padding: 64px 5%;
        }

        .section-alt {
          background: var(--sand);
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 300;
          line-height: 1.2;
          color: var(--ink);
          margin: 0 0 32px;
        }

        .tab-wrapper {
          margin-bottom: 40px;
        }

        .tab-toggle {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tab-btn {
          padding: 12px 18px;
          border-radius: 14px;
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
          cursor: pointer;
          border: 1px solid #1c1c1a;
          background: var(--white);
          transition: all 0.2s ease;
          font-family: var(--font-body);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .tab-btn:hover {
          background: #f7f7f7;
          transform: translateY(-1px);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
        }

        .tab-btn.active {
          background: var(--ink);
          color: var(--white);
          border-color: var(--ink);
          box-shadow: 0 4px 14px rgba(28, 28, 26, 0.18);
        }
        .tab-btn:focus-visible {
          outline: 2px solid var(--green);
          outline-offset: 2px;
        }
        .tab-content {
          display: block;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .service-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px;
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .service-card:hover {
          box-shadow: var(--shadow);
          transform: translateY(-2px);
        }

        .service-card-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius);
          background: var(--green-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 500;
          color: var(--green);
          margin-bottom: 16px;
        }

        .service-card-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 8px;
        }

        .service-card-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 300;
          color: var(--ink);
          margin: 0 0 16px;
        }

        .service-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin: 0;
          padding: 0;
        }

        .service-list li {
          font-size: 13px;
          color: var(--text-muted);
          padding-left: 16px;
          position: relative;
          line-height: 1.5;
        }

        .service-list li::before {
          content: "·";
          position: absolute;
          left: 0;
          color: var(--green);
          font-weight: 600;
        }

        .oss-boundary {
          background: var(--sand);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px 28px;
          margin-top: 8px;
        }

        .oss-boundary-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .oss-badge {
          background: var(--terra-light);
          color: var(--terra);
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 99px;
          border: 1px solid rgba(196, 118, 58, 0.25);
        }

        .oss-intro {
          font-size: 13px;
          color: var(--text-muted);
          margin: 0 0 12px;
        }

        .oss-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 24px;
          margin: 0;
          padding: 0;
        }

        .oss-list li {
          font-size: 13px;
          color: var(--text-muted);
          padding-left: 18px;
          position: relative;
          line-height: 1.5;
        }

        .oss-list li::before {
          content: "✕";
          position: absolute;
          left: 0;
          color: var(--terra);
          font-size: 10px;
          top: 3px;
        }

        .oss-note {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 12px;
          line-height: 1.6;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }

        /* Image gallery styles */
        .image-gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          margin-top: 32px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .gallery-item {
          flex: 1;
          min-width: 220px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.2s, box-shadow 0.2s;
          background: var(--white);
        }

        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -12px rgba(0, 0, 0, 0.2);
        }

        .gallery-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .intl-additions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 28px;
        }

        .intl-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px 22px;
        }

        .intl-card-num {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 300;
          color: var(--green);
          margin-bottom: 6px;
        }

        .intl-card-title {
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 6px;
        }

        .intl-card-desc {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
          align-items: start;
        }

        .pricing-section {
          background: var(--ink);
          border-radius: var(--radius-lg);
          padding: 36px;
        }

        .pricing-title {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 300;
          color: var(--white);
          margin-bottom: 6px;
        }

        .pricing-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 28px;
        }

        .pricing-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 18px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .pricing-row:last-of-type {
          border-bottom: none;
        }

        .pricing-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        .pricing-label-sub {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.45);
          margin-top: 2px;
        }

        .pricing-value {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 300;
          color: var(--white);
          white-space: nowrap;
        }

        .pricing-value-eval {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          font-family: var(--font-body);
          white-space: nowrap;
        }

        .pricing-note {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
          margin: 20px 0 0;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          line-height: 1.6;
        }

        .pricing-side {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
        }

        .info-card-title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 12px;
        }

        .info-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .cta-strip {
          background: var(--green);
          border-radius: var(--radius-lg);
          padding: 36px;
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .cta-strip-text {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 300;
          color: var(--white);
          line-height: 1.3;
        }

        .btn-white {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #1c1c1a;
          padding: 14px 28px;
          min-height: 48px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 400;
          line-height: 1;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
          transition: transform 0.18s ease, box-shadow 0.18s ease,
            background 0.18s ease;
        }

        .btn-white:hover {
          background: #f7f7f7;
          transform: translateY(-1px);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
        }

        .btn-white:active {
          transform: translateY(0);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .cta-strip {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .page-hero,
          .section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .services-grid,
          .intl-additions,
          .oss-list,
          .image-gallery {
            grid-template-columns: 1fr;
          }

          .image-gallery {
            flex-direction: column;
            align-items: center;
          }

          .gallery-item {
            max-width: 100%;
          }

          .tab-toggle {
            display: flex;
            width: 100%;
          }

          .tab-btn {
            flex: 1 1 100%;
          }

          .service-card,
          .pricing-section,
          .info-card,
          .intl-card,
          .oss-boundary,
          .cta-strip {
            padding: 20px;
          }

          .pricing-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .pricing-value,
          .pricing-value-eval {
            white-space: normal;
          }

          .cta-strip-text {
            font-size: 20px;
          }

          .btn-white {
            width: 100%;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 30px;
          }

          .section-title,
          .pricing-title {
            font-size: 24px;
          }

          .service-card-title {
            font-size: 20px;
          }
        }
      `}</style>
    </main>
  );
}