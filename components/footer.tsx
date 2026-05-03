// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Profile", href: "/profile" },
  { label: "Request", href: "/request" },
  { label: "Contract", href: "/contract" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Logo column – inline styles for bigger logo and margin */}
          <div>
            <Link href="/" className="footer-logo-link" style={{ display: "inline-block", marginBottom: "25px" }}>
              <Image
                src="/Images/logo.svg"
                alt="Accanto logo"
                width={140}
                height={140}
                style={{ width: "160px",  objectFit: "contain" }}
                priority={false}
              />
            </Link>
            <p className="footer-brand-desc">
              Professionista OSS indipendente — assistenza domiciliare, Lago di
              Como · Lecco · Milano.
            </p>
          </div>

          {/* Navigation column with horizontal links */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links-horizontal">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-item">
              <a href="mailto:hello@accanto.care">hello@accanto.care</a>
            </div>
            <div className="footer-contact-item">
              <a href="mailto:ghassenmansouri@mail.com">
                ghassenmansouri@mail.com
              </a>
            </div>
            <div className="footer-contact-item">
              <a href="tel:+393792306809">+39 379 230 6809</a>
            </div>
            <a
              href="https://wa.me/393792306809"
              className="footer-wa-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp →
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {currentYear} Accanto. All rights reserved.
          </span>
          <span className="footer-piva">P.IVA 01103920144</span>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: var(--sand);
          border-top: 1px solid var(--border);
          padding: 48px 5% 32px;
        }

        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 48px;
          margin-bottom: 40px;
        }

        .footer-brand-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 260px;
          margin: 0;
        }

        .footer-col-title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--terra);
          margin-bottom: 16px;
        }

        .footer-links-horizontal {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin: 0;
          padding: 0;
        }
        .footer-links-horizontal a {
          font-size: 13px;
          color: var(--text-muted);
          transition: color 0.2s;
          text-decoration: none;
        }
        .footer-links-horizontal a:hover {
          color: var(--green);
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 8px;
        }
        .footer-contact-item a {
          color: var(--text-muted);
          text-decoration: none;
        }
        .footer-contact-item a:hover {
          color: var(--green);
        }
        .footer-wa-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--green);
          color: #ffffff !important;
          padding: 7px 14px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 500;
          margin-top: 8px;
          text-decoration: none;
        }
        .footer-wa-link:hover {
          background: #0a5a44;
        }

        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copy,
        .footer-piva {
          font-size: 12px;
          color: var(--text-light);
        }

        @media (max-width: 640px) {
          .footer-top {
            gap: 32px;
          }
          .footer-brand-desc {
            max-width: 100%;
          }
          .footer-links-horizontal {
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
}