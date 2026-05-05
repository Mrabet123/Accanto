"use client";

import { useState, useEffect } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 h-[92px] overflow-visible bg-[rgba(246,241,232,0.92)] backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Logo - now larger and properly contained */}
          <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <Image
  src="/Images/logo.png"
  alt="Accanto logo"
  width={110}   // increase this proportionally
  height={110}  // increase this proportionally
  className="h-[160px] w-[160px] object-contain md:h-[90px] md:w-[200px]"
  priority
/>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA Button */}
          <Link
            href="https://wa.me/393792306809"
            className="hidden items-center justify-center rounded-full border border-transparent bg-[var(--green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[var(--green)] hover:bg-[var(--sand)] hover:text-[var(--green)] md:inline-flex"
          >
            WhatsApp →
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-[var(--ink)] transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[var(--ink)] transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[var(--ink)] transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 top-[92px] z-40 transform bg-white shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
        style={{ maxHeight: "calc(100vh - 92px)", overflowY: "auto" }}
      >
        <nav className="flex flex-col p-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-base font-medium text-[var(--ink)] transition-colors hover:text-[var(--green)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/request"
            onClick={closeMenu}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--green)] px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[var(--sand)] hover:text-[var(--green)]"
          >
            Book a Request
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}