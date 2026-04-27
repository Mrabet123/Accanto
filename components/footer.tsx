import Link from "next/link";

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
    <footer className="border-t border-[var(--border)] bg-[var(--sand)]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-[var(--green)]">Accanto</p>
            <p className="mt-3 max-w-sm text-sm text-[var(--ink)]/70">
              A calm, trustworthy portfolio for a sitter working in care and hospitality.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-[var(--ink)]">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--ink)]/70 transition-colors hover:text-[var(--green)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-[var(--ink)]">Contact</h4>
            <ul className="space-y-2 text-sm text-[var(--ink)]/70">
              <li>
                <a href="mailto:hello@accanto.care" className="hover:text-[var(--green)]">
                  hello@accanto.care
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-[var(--green)]">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6 text-sm text-[var(--ink)]/65">
          © {currentYear} Accanto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}