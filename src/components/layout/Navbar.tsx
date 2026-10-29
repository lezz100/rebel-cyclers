"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rides", label: "Rides" },
  { href: "/members", label: "Members" },
  { href: "/achievements", label: "Achievements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/5">
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                    active
                      ? "text-[#FF6B00]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-4 py-2 bg-[#FF6B00] text-white text-sm font-semibold rounded hover:bg-[#e55f00] transition-colors"
        >
          Join the Club
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#161616] border-t border-white/5">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                      active
                        ? "text-[#FF6B00] bg-[#FF6B00]/10"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 bg-[#FF6B00] text-white text-sm font-semibold rounded hover:bg-[#e55f00] transition-colors"
              >
                Join the Club
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
