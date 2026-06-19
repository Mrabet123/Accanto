"use client";

import React from "react";
import Link from "next/link";
import { getContractCopy } from "@/lib/i18n/contract";
import { localizedPath } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  lang: Locale;
};

export default function ContractClient({ lang }: Props) {
  const t = getContractCopy(lang);
  const p = t.page;
  const requestHref = localizedPath(lang, "/request");

  return (
    <main className="contract-page" dir={t.dir}>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="eyebrow">{p.heroEyebrow}</div>
          <h1 className="page-title">
            {p.heroTitle.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </h1>
          <p className="page-sub">{p.heroSub}</p>
        </div>
      </div>

      <section className="section">
        <div className="inner">
          <div className="framing">
            <div className="framing-title">{p.framingTitle}</div>
            <p className="framing-text">{p.framingText}</p>
          </div>

          <div className="blocks-grid">
            {p.cards.map((card) => (
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
            <div className="eyebrow eyebrow-terra">{p.draftEyebrow}</div>
            <h2 className="draft-main-title">
              {p.draftMainTitle.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h2>
          </div>

          <div className="draft-wrapper">
            <div className="draft-header">
              <div>
                <div className="draft-title">{p.draftTitle}</div>
                <div className="draft-sub">{p.draftSub}</div>
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
                {p.readonlyBadge}
              </div>
            </div>

            <div className="draft-parties">
              <div className="party">
                <div className="party-label">{p.professionalLabel}</div>
                <div className="party-name">{p.professionalName}</div>
                {p.professionalDetail.map((line, i) => (
                  <div key={i} className="party-detail">{line}</div>
                ))}
              </div>
              <div className="party">
                <div className="party-label">{p.clientLabel}</div>
                <div className="party-field">{p.clientField1}</div>
                <div className="party-field">{p.clientField2}</div>
                <div className="party-field">{p.clientField3}</div>
                <div className="party-field">{p.clientField4}</div>
              </div>
            </div>

            <div className="draft-articles">
              {t.articles.map((article, index) => (
                <React.Fragment key={article.label}>
                  {index === 0 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{p.sections[0]}</div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{p.sections[1]}</div>
                    </div>
                  )}
                  {index === 5 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{p.sections[2]}</div>
                    </div>
                  )}
                  {index === 8 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{p.sections[3]}</div>
                    </div>
                  )}
                  {index === 10 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{p.sections[4]}</div>
                    </div>
                  )}
                  {index === 12 && (
                    <div className="draft-section-divider">
                      <div className="draft-section-divider-label">{p.sections[5]}</div>
                    </div>
                  )}
                  <div className="art-row">
                    <div className="art-row-header">
                      <span className="art-label">{article.label}</span>
                      <span className="art-title">{article.title}</span>
                    </div>
                    <p className="art-text">{article.text}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="closing-note">
            <p className="closing-note-text">{p.closingNote}</p>
          </div>

          <div className="cta-block">
            <div className="cta-title">{p.ctaTitle}</div>
            <p className="cta-sub">{p.ctaSub}</p>
            <Link
              href={requestHref}
              style={{
                backgroundColor: "#ffffff",
                color: "black",
                padding: "14px 28px",
                borderRadius: "12px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: 500,
                border: "1.5px solid #0f6e56",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              {p.ctaButton}
            </Link>
            <p className="cta-note">{p.ctaNote}</p>
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