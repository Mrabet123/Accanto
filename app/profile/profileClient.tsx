import Head from "next/head";
import Image from "next/image";

export default function ProfilePage() {
  const css = `
    .profile-page {
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

    .profile-page *,
    .profile-page *::before,
    .profile-page *::after {
      box-sizing: border-box;
    }

    .profile-page a {
      color: inherit;
      text-decoration: none;
    }

    .profile-page img {
      max-width: 100%;
      display: block;
    }

    .profile-hero {
      background: var(--sand);
      padding: 56px 5% 64px;
      border-bottom: 1px solid var(--border);
    }

    .profile-hero-inner,
    .section-inner {
      max-width: 1100px;
      margin: 0 auto;
    }

    .profile-hero-inner {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 48px;
      align-items: center;
    }

    .profile-photo-wrap {
      position: relative;
      width: 160px;
      height: 160px;
      flex-shrink: 0;
    }

    .profile-photo {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center top;
      border: 3px solid var(--white);
      box-shadow: var(--shadow);
    }

    .profile-eyebrow,
    .section-eyebrow,
    .cta-you-label,
    .area-tag,
    .lang-level {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--terra);
      margin-bottom: 12px;
    }

    .profile-name,
    .section-title,
    .cta-you-title,
    .area-title,
    .lang-name,
    .philosophy-quote,
    .path-num,
    .method-num,
    .discovery-num {
      font-family: var(--font-display);
      font-weight: 300;
    }

    .profile-name {
      font-size: clamp(32px, 4vw, 48px);
      line-height: 1.1;
      color: var(--ink);
      margin-bottom: 8px;
    }

    .profile-role {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 16px;
    }

    .profile-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      margin-bottom: 20px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      font-size: 12px;
      padding: 4px 12px;
      border-radius: 99px;
      border: 1px solid var(--border);
      background: var(--white);
      color: var(--text-muted);
    }

    .chip-accent {
      background: var(--green-light);
      border-color: var(--green-mid);
      color: var(--green);
      font-weight: 500;
    }

    .profile-bio {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.75;
      max-width: 580px;
    }

    .section {
      padding: 56px 5%;
    }

    .section-alt {
      background: var(--sand);
    }

    .section-title {
      font-size: clamp(24px, 3vw, 36px);
      line-height: 1.2;
      color: var(--ink);
      margin-bottom: 28px;
    }

    .path-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    .path-card,
    .lang-card,
    .area-card {
      background: var(--white);
      border: 1px solid var(--border);
    }

    .path-card {
      border-radius: var(--radius-lg);
      padding: 28px;
    }

    .path-num {
      font-size: 44px;
      color: var(--green);
      line-height: 1;
      margin-bottom: 8px;
    }

    .path-label,
    .method-title,
    .cert-name {
      font-size: 14px;
      font-weight: 500;
      color: var(--ink);
    }

    .path-label {
      margin-bottom: 4px;
    }

    .path-sub,
    .area-desc,
    .method-desc,
    .discovery-text,
    .cta-you-sub {
      color: var(--text-muted);
    }

    .path-sub {
      font-size: 13px;
      margin-bottom: 14px;
      line-height: 1.5;
    }

    .path-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }

    .path-tag {
      font-size: 11px;
      padding: 3px 9px;
      border-radius: 99px;
      border: 1px solid var(--border);
      color: var(--text-muted);
      background: var(--sand);
    }

    .certs-row {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .cert-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 10px 16px;
    }

    .cert-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green);
      flex-shrink: 0;
    }

    .cert-name {
      font-size: 13px;
    }

    .cert-desc {
      font-size: 11px;
      color: var(--text-muted);
      margin-left: 4px;
    }

    .langs-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
    }

    .lang-card {
      border-radius: var(--radius);
      padding: 20px 16px;
      text-align: center;
    }

    .lang-name {
      font-size: 20px;
      color: var(--ink);
      margin-bottom: 4px;
    }

    .lang-level {
      color: var(--green);
      margin-bottom: 10px;
    }

    .lang-skills {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .lang-skill {
      font-size: 11px;
      color: var(--text-muted);
    }

    .method-list,
    .philosophy-block {
      display: flex;
      flex-direction: column;
    }

    .method-item {
      display: flex;
      gap: 20px;
      align-items: flex-start;
      padding: 20px 0;
      border-bottom: 1px solid var(--border);
    }

    .method-item:last-child,
    .philosophy-item:last-child {
      border-bottom: none;
    }

    .method-num,
    .discovery-num {
      color: var(--green);
      line-height: 1;
      flex-shrink: 0;
    }

    .method-num {
      font-size: 28px;
      width: 36px;
    }

    .method-body {
      flex: 1;
    }

    .method-desc {
      font-size: 13px;
      line-height: 1.6;
      margin-bottom: 5px;
    }

    .method-benefit {
      font-size: 12px;
      color: var(--green);
      font-style: italic;
    }

    .philosophy-item {
      padding: 24px 0;
      border-bottom: 1px solid var(--border);
    }

    .philosophy-quote {
      font-size: 20px;
      font-style: italic;
      color: var(--ink);
      line-height: 1.5;
    }

    .philosophy-text {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.8;
      margin: 0;
      max-width: 820px;
    }

    .area-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .area-card {
      border-radius: var(--radius-lg);
      padding: 22px;
    }

    .area-tag {
      font-size: 10px;
      margin-bottom: 8px;
    }

    .area-title {
      font-size: 20px;
      color: var(--ink);
      margin-bottom: 6px;
      line-height: 1.2;
    }

    .area-desc {
      font-size: 12px;
      line-height: 1.5;
    }

    .narrow {
      max-width: 600px;
      margin: 0 auto;
    }

    .centered {
      text-align: center;
    }

    .discovery-steps {
      display: flex;
      flex-direction: column;
      gap: 0;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .discovery-step {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 18px 22px;
      border-bottom: 1px solid var(--border);
    }

    .discovery-step:last-child {
      border-bottom: none;
    }

    .discovery-num {
      font-size: 22px;
      width: 28px;
    }

    .discovery-text {
      font-size: 13px;
      line-height: 1.6;
    }

    .discovery-note {
      font-size: 12px;
      color: var(--text-light);
      margin-top: 12px;
      font-style: italic;
    }

    .cta-you {
      background: var(--ink);
      border-radius: var(--radius-lg);
      padding: 40px;
      text-align: center;
      margin-top: 40px;
    }

    .cta-you-label {
      color: var(--terra);
      margin-bottom: 12px;
    }

    .cta-you-title {
      font-size: 32px;
      color: var(--white);
      margin-bottom: 12px;
      line-height: 1.2;
    }

    .cta-you-sub {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.55);
      margin-bottom: 28px;
      line-height: 1.7;
    }

    .btn-terra {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--terra);
      color: var(--white);
      padding: 13px 26px;
      border-radius: var(--radius);
      font-size: 14px;
      font-weight: 500;
      transition: background 0.2s;
      border: none;
      cursor: pointer;
    }

    .btn-terra:hover {
      background: #a8622e;
    }

    .cta-note {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.35);
      margin-top: 14px;
    }

    @media (max-width: 1024px) {
      .langs-grid,
      .area-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .profile-hero {
        padding: 40px 5% 48px;
      }

      .profile-hero-inner,
      .path-grid,
      .area-grid,
      .langs-grid {
        grid-template-columns: 1fr;
      }

      .profile-hero-inner {
        gap: 24px;
        justify-items: center;
        text-align: center;
      }

      .profile-chips,
      .certs-row {
        justify-content: center;
      }

      .method-item {
        gap: 14px;
      }

      .cta-you {
        padding: 30px 20px;
      }

      .cta-you-title {
        font-size: 26px;
      }
    }

    @media (max-width: 480px) {
      .section,
      .profile-hero {
        padding-left: 16px;
        padding-right: 16px;
      }

      .path-card,
      .lang-card,
      .area-card {
        padding: 18px;
      }

      .philosophy-quote {
        font-size: 18px;
      }

      .method-item,
      .discovery-step {
        padding-left: 16px;
        padding-right: 16px;
      }
    }
  `;

  return (
    <>
      <Head>
        <title>
          Certified OSS · Independent Healthcare Support Professional · Como Lake –
                Lecco / Valtellina / Milan
        </title>
        <meta
          name="description"
          content="Certified OSS with 8+ years in the healthcare and social care field, with over a decade in customer experience and international hospitality."
        />
      </Head>

      <style>{css}</style>

      <main className="profile-page">
        <section className="profile-hero">
          <div className="profile-hero-inner">
            <div className="profile-photo-wrap">
              <Image
                src="/Images/ghassen.jpg"
                alt="Ghassen Mansouri"
                width={160}
                height={160}
                className="profile-photo"
                priority
              />
            </div>

            <div>
              <div className="profile-eyebrow">Professional identity</div>
              <h1 className="profile-name">Ghassen Mansouri</h1>
              <div className="profile-role">
                Certified OSS · Independent Healthcare Support Professional · Como Lake –
                Lecco / Valtellina / Milan
              </div>
              <div className="profile-chips">
                <span className="chip chip-accent">OSS · Independent professional</span>
                <span className="chip">5 languages</span>
                <span className="chip">8+ years healthcare</span>
                <span className="chip">10+ years hospitality</span>
                <span className="chip">BLSD · HACCP</span>
              </div>
              <p className="profile-bio">
                Certified OSS with 8+ years in the healthcare and social care field with over
                a decade in customer experience and international hospitality. Professional
                communication in Italian, English, French, Arabic, and German. Human approach,
                field proven structure, no compromises.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-eyebrow">Professional path</div>
            <h2 className="section-title">
              Two professional worlds.
              <br />
              One integrated approach to care.
            </h2>
            <div className="path-grid">
              <div className="path-card">
                <div className="path-num">8+</div>
                <div className="path-label">years — Social and health sector</div>
                <div className="path-sub">
                  Elderly, disabled, patients recovering in public and sheltered facilities.
                </div>
                <div className="path-tags">
                  <span className="path-tag">Public hospital</span>
                  <span className="path-tag">RSA</span>
                  <span className="path-tag">RSD</span>
                  <span className="path-tag">Sheltered housing</span>
                </div>
              </div>
              <div className="path-card">
                <div className="path-num">10+</div>
                <div className="path-label">years — Hospitality & customer experience</div>
                <div className="path-sub">
                  High-standard relational environments, international clientele, high operational
                  pressure.
                </div>
                <div className="path-tags">
                  <span className="path-tag">Cruise lines</span>
                  <span className="path-tag">Duty free</span>
                  <span className="path-tag">Luxury brands</span>
                  <span className="path-tag">IT SaaS</span>
                  <span className="path-tag">Travel & Leisure</span>
                </div>
              </div>
            </div>
            <div className="certs-row">
              <div className="cert-badge">
                <div className="cert-dot" />
                <span className="cert-name">OSS</span>
                <span className="cert-desc">Social Health Worker</span>
              </div>
              <div className="cert-badge">
                <div className="cert-dot" />
                <span className="cert-name">BLSD</span>
                <span className="cert-desc">Cardiopulmonary resuscitation</span>
              </div>
              <div className="cert-badge">
                <div className="cert-dot" />
                <span className="cert-name">HACCP</span>
                <span className="cert-desc">Food Safety</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-inner">
            <div className="section-eyebrow">Linguistic capacity</div>
            <h2 className="section-title">Five languages. No communication barriers.</h2>
            <div className="langs-grid">
              <div className="lang-card">
                <div className="lang-name">Arabic</div>
                <div className="lang-level">Native</div>
                <div className="lang-skills">
                  <div className="lang-skill">Writing</div>
                  <div className="lang-skill">Reading</div>
                  <div className="lang-skill">Speaking</div>
                </div>
              </div>
              <div className="lang-card">
                <div className="lang-name">Italian</div>
                <div className="lang-level">Fluent</div>
                <div className="lang-skills">
                  <div className="lang-skill">Writing</div>
                  <div className="lang-skill">Reading</div>
                  <div className="lang-skill">Speaking</div>
                </div>
              </div>
              <div className="lang-card">
                <div className="lang-name">French</div>
                <div className="lang-level">Fluent</div>
                <div className="lang-skills">
                  <div className="lang-skill">Writing</div>
                  <div className="lang-skill">Reading</div>
                  <div className="lang-skill">Speaking</div>
                </div>
              </div>
              <div className="lang-card">
                <div className="lang-name">English</div>
                <div className="lang-level">Fluent</div>
                <div className="lang-skills">
                  <div className="lang-skill">Writing</div>
                  <div className="lang-skill">Reading</div>
                  <div className="lang-skill">Speaking</div>
                </div>
              </div>
              <div className="lang-card">
                <div className="lang-name">German</div>
                <div className="lang-level">Professional</div>
                <div className="lang-skills">
                  <div className="lang-skill">Writing</div>
                  <div className="lang-skill">Reading</div>
                  <div className="lang-skill">Speaking</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-eyebrow">Working methodology</div>
            <h2 className="section-title">How every collaboration is built.</h2>
            <div className="method-list">
              <div className="method-item">
                <div className="method-num">1</div>
                <div className="method-body">
                  <div className="method-title">Professional communication</div>
                  <div className="method-desc">
                    Professional communication in Italian, English, French, Arabic, and German.
                  </div>
                  <div className="method-benefit">
                    Human approach, field proven structure, no compromises.
                  </div>
                </div>
              </div>
              <div className="method-item">
                <div className="method-num">2</div>
                <div className="method-body">
                  <div className="method-title">Care diary</div>
                  <div className="method-desc">
                    Every intervention is documented. Activities performed, conditions observed, and
                    changes noted. Shared with the family according to the agreed frequency.
                  </div>
                  <div className="method-benefit">
                    You always know what happened during the session, even when you weren&apos;t
                    there.
                  </div>
                </div>
              </div>
              <div className="method-item">
                <div className="method-num">3</div>
                <div className="method-body">
                  <div className="method-title">Proactive communication with family</div>
                  <div className="method-desc">
                    Regular updates in your preferred language (EN / IT / FR / AR / DE). No surprises.
                    Any changes are communicated immediately.
                  </div>
                  <div className="method-benefit">
                    Families abroad receive the same level of information as families who are present.
                  </div>
                </div>
              </div>
              <div className="method-item">
                <div className="method-num">4</div>
                <div className="method-body">
                  <div className="method-title">Punctuality and operational reliability</div>
                  <div className="method-desc">
                    Each support session begins and ends as agreed. Changes are communicated in
                    advance whenever possible.
                  </div>
                  <div className="method-benefit">
                    Your planning is never disrupted by uncertainty or last-minute surprises.
                  </div>
                </div>
              </div>
              <div className="method-item">
                <div className="method-num">5</div>
                <div className="method-body">
                  <div className="method-title">Clarity of professional boundaries</div>
                  <div className="method-desc">
                    Operations performed exclusively within the OSS / Healthcare support perimeter. Clinical situations are
                    reported and directed to the appropriate professional.
                  </div>
                  <div className="method-benefit">
                    You always know exactly what I do and don&apos;t do — nothing is left ambiguous.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-inner">
            <div className="section-eyebrow">Philosophy and values</div>
            <h2 className="section-title">What guides this work.</h2>
            <div className="philosophy-block">
              <div className="philosophy-item">
                <div className="philosophy-quote">Structured care. Human approach.</div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-quote">
                  “Professional support means more than completing tasks—it means understanding
                  needs, often before they are expressed.”
                  <br />
                  “My approach combines method, consistency, and genuine respect for each
                  individual’s rhythm, habits, and wellbeing.”
                  
                </div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-quote">
                  “My measure of success is not the duration of an intervention. It is the moment
                  the person I care for stops seeing me as a passing professional and starts
                  considering me part of their daily life. That is the real progress in every care
                  journey.”
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="section-eyebrow">Intervention area</div>
            <h2 className="section-title">Where I operate.</h2>
            <div className="area-grid">
              <div className="area-card">
                <div className="area-tag">Operational base</div>
                <div className="area-title">Dervio – Lecco</div>
                <div className="area-desc">Starting point for every intervention.</div>
              </div>
              <div className="area-card">
                <div className="area-tag">Main area</div>
                <div className="area-title">Lecco – Como Lake / Valtellina</div>
                <div className="area-desc">Primary intervention area.</div>
              </div>
              <div className="area-card">
                <div className="area-tag">Emerging market</div>
                <div className="area-title">Milan</div>
                <div className="area-desc">
                  Expat clientele and international families. Accepted upon evaluation.
                </div>
              </div>
              <div className="area-card">
                <div className="area-tag">Minimum per support session</div>
                <div className="area-title">5 hours</div>
                <div className="area-desc">
                  Minimum duration for each intervention. No exceptions. Defined contractually.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="section-inner narrow">
            <div className="section-eyebrow centered">How the discovery session works</div>
            <h2 className="section-title centered">
              Four steps between your request
              <br />
              and our first conversation.
            </h2>
            <div className="discovery-steps">
              <div className="discovery-step">
                <div className="discovery-num">1</div>
                <div className="discovery-text">Fill out the request online.</div>
              </div>
              <div className="discovery-step">
                <div className="discovery-num">2</div>
                <div className="discovery-text">Individual analysis within 48 working hours.</div>
              </div>
              <div className="discovery-step">
                <div className="discovery-num">3</div>
                <div className="discovery-text">
                  If compatible: a calendar link will be shared with you.
                </div>
              </div>
              <div className="discovery-step">
                <div className="discovery-num">4</div>
                <div className="discovery-text">Choose date and time · 20–30 min · phone or video.</div>
              </div>
            </div>
            <div className="discovery-note centered-note">
              The calendar remains private. It is accessible only to approved requests.
            </div>

            <div className="cta-you">
              <h3 className="cta-you-title">
                Submit your request.
                <br />
                I&apos;ll evaluate it personally.
              </h3>
              <p className="cta-you-sub">
                Every case is different. I review each request individually.
                <br />
                If there&apos;s a fit, I&apos;ll contact you in your language.
              </p>
              <a href="/request" className="btn-terra">
                Submit your  request →
              </a>
              <p className="cta-note">
                No obligation. No automatic responses. Just a professional assessment.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}