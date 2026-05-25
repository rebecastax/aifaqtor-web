"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBarManufactura() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "/manufactura" },
    { label: "Servicios", href: "/manufactura#servicios" },
    { label: "Contacto", href: "/manufactura#contacto" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(6, 6, 6, 0.95)"
          : "rgba(6, 6, 6, 0.60)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div
        className="flex items-center justify-between h-[72px] px-6"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        {/* Logo */}
        <Link href="/manufactura" className="flex items-center gap-2">
          {/* Circular gradient logo mark */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{
              background: "linear-gradient(135deg, #0076C4 0%, #6B3890 100%)",
            }}
          >
            Ai
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            AiFaqtor
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{ color: "#A7AABB" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <Link
          href="/manufactura#contacto"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white"
          style={{
            background: "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
            borderRadius: "100px",
            padding: "12px 22px",
          }}
        >
          Iniciar diagnóstico
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            background: "rgba(6,6,6,0.97)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium"
              style={{ color: "#A7AABB" }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/manufactura#contacto"
            className="inline-flex items-center justify-center text-sm font-semibold text-white mt-2"
            style={{
              background: "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
              borderRadius: "100px",
              padding: "14px 22px",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Iniciar diagnóstico
          </Link>
        </div>
      )}
    </header>
  );
}
