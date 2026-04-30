import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Profile", href: "/profile" },
  { label: "Request", href: "/request" },
  { label: "Contract", href: "/contract" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(246,241,232,0.92)] backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Images/logo.svg"
            alt="Accanto logo"
            width={170}
            height={110}
            className="h-[95px] w-[95px] object-contain"
            priority
          />
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