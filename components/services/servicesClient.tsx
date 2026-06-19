"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getServicesCopy } from "@/lib/i18n/services";
import type { Locale } from "@/lib/i18n/config";

type TabType = "local" | "intl";

type Props = {
  lang: Locale;
};

const galleryImages = ["/Images/2.jpg", "/Images/5.jpg"] as const;

export default function ServicesClient({ lang }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>("local");
  const copy = getServicesCopy(lang);
  const requestHref = lang === "it" ? "/request" : `/${lang}/request`;

  return (
    <main className="services-page" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-eyebrow">{copy.hero.eyebrow}</div>
          <h1 className="page-title">
            {copy.hero.title[0]}
            <br />
            {copy.hero.title[1]}
          </h1>
          <p className="page-subtitle">{copy.hero.subtitle}</p>
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
                {copy.tabs.local}
              </button>

              <button
                type="button"
                className={`tab-btn ${activeTab === "intl" ? "active" : ""}`}
                onClick={() => setActiveTab("intl")}
                aria-pressed={activeTab === "intl"}
              >
                {copy.tabs.intl}
              </button>
            </div>
          </div>

          {activeTab === "local" ? (
  <div className="tab-content active">
    <div className="services-grid">
      {copy.local.cards.map((card) => (
        <div className="service-card" key={card.title}>
          <div className="service-card-icon">{card.icon}</div>
          <div className="service-card-label">{card.label}</div>
          <h3 className="service-card-title">{card.title}</h3>
          <ul className="service-list">
            {card.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="image-gallery">
      {copy.local.galleryAlt.slice(0, 2).map((alt, index) => (
        <div className="gallery-item" key={alt}>
          <Image
            src={galleryImages[index]}
            alt={alt}
            width={400}
            height={300}
            className="gallery-image"
          />
        </div>
      ))}
    </div>

    <div className="oss-boundary">
      <div className="oss-boundary-title">
        {copy.local.boundary.title}
        <span className="oss-badge">{copy.local.boundary.badge}</span>
      </div>
      <p className="oss-intro">{copy.local.boundary.intro}</p>
      <ul className="oss-list">
        {copy.local.boundary.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="oss-note">{copy.local.boundary.note}</p>
    </div>
  </div>
) : (
  <div className="tab-content active">
    <div className="intl-additions">
      {copy.intl.additions.map((item) => (
        <div className="intl-card" key={item.num}>
          <div className="intl-card-num">{item.num}</div>
          <div className="intl-card-title">{item.title}</div>
          <div className="intl-card-desc">{item.desc}</div>
        </div>
      ))}
              </div>

              <div className="services-grid">
                {copy.local.cards.map((card) => (
                  <div className="service-card" key={card.title}>
                    <div className="service-card-icon">{card.icon}</div>
                    <div className="service-card-label">{card.label}</div>
                    <h3 className="service-card-title">{card.title}</h3>
                    <ul className="service-list">
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="oss-boundary">
                <div className="oss-boundary-title">
                  {copy.local.boundary.title}
                  <span className="oss-badge">{copy.local.boundary.badge}</span>
                </div>
                <p className="oss-intro">{copy.local.boundary.intro}</p>
                <ul className="oss-list">
                  {copy.local.boundary.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="oss-note">{copy.local.boundary.note}</p>
              </div>

              <div className="image-gallery">
                {copy.local.galleryAlt.map((alt, index) => (
                  <div className="gallery-item" key={alt}>
                    <Image
                      src={galleryImages[index]}
                      alt={alt}
                      width={400}
                      height={300}
                      className="gallery-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-eyebrow">{copy.pricing.eyebrow}</div>
          <h2 className="section-title">{copy.pricing.title}</h2>

          <div className="pricing-grid">
            <div className="pricing-section">
              <div className="pricing-title">Tariffe delle sessioni di assistenza</div>
              <div className="pricing-sub">{copy.pricing.subtitle}</div>

              {copy.pricing.rows.map((row) => (
                <div className="pricing-row" key={row.label}>
                  <div>
                    <div className="pricing-label">{row.label}</div>
                    <div className="pricing-label-sub">{row.sub}</div>
                  </div>
                  <div className={row.eval ? "pricing-value-eval" : "pricing-value"}>
                    {row.value}
                  </div>
                </div>
              ))}

              <p className="pricing-note">{copy.pricing.note}</p>
            </div>

            <div className="pricing-side">
              <div className="info-card">
                <div className="info-card-title">{copy.pricing.side.autonomy.title}</div>
                <p>{copy.pricing.side.autonomy.text}</p>
              </div>

              <div className="info-card">
                <div className="info-card-title">{copy.pricing.side.activity.title}</div>
                <p>{copy.pricing.side.activity.text}</p>
              </div>

              <div className="info-card">
                <div className="info-card-title">{copy.pricing.side.duration.title}</div>
                <p>{copy.pricing.side.duration.text}</p>
              </div>
            </div>
          </div>

          <div className="cta-strip">
            <div className="cta-strip-text">{copy.cta.text}</div>
            <Link
              href={requestHref}
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
              <span>{copy.cta.button}</span>
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

          .cta-strip > a {
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