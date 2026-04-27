import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Profile", href: "/profile" },
  { label: "Request", href: "/request" },
  { label: "Contract", href: "/contract" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(246,241,232,0.92)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--green)] text-sm font-bold text-white shadow-sm">
            A
          </div>
          <div>
            <p className="font-serif text-lg leading-none text-[var(--ink)]">Accanto</p>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink-60)]">
              Care & Hospitality
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[var(--ink)]/75 transition-colors hover:text-[var(--green)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/request"
          className="inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[var(--green)] hover:bg-[var(--sand)] hover:text-[var(--green)]"
        >
          Book a Request
        </Link>
      </div>
    </header>
  );
}