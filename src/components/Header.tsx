"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Manufactura",
    href: "/manufactura",
    accent: "#0076C4",
    dropdown: [
      { label: "Servicios", href: "/manufactura/servicios" },
      { label: "Contacto", href: "/manufactura/contacto" },
    ],
  },
  {
    label: "Negocios Latinos",
    href: "/negocios-latinos",
    accent: "#16A34A",
    dropdown: [
      { label: "Servicios", href: "/negocios-latinos/servicios" },
      { label: "Contacto", href: "/negocios-latinos/contacto" },
    ],
  },
  { label: "Nosotros", href: "/nosotros", accent: "#A7AABB", dropdown: [] },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNegocios = pathname.startsWith("/negocios-latinos");
  const accentGradient = isNegocios
    ? "#16A34A"
    : "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)";

  function isActive(href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,6,6,0.95)" : "rgba(6,6,6,0.70)",
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
        <Link href="/" className="flex items-center gap-2">
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
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.dropdown.length > 0 && setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 pb-0.5"
                style={{
                  color: isActive(item.href) ? item.accent : "#A7AABB",
                  borderBottom: isActive(item.href)
                    ? `2px solid ${item.accent}`
                    : "2px solid transparent",
                }}
              >
                {item.label}
                {item.dropdown.length > 0 && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ opacity: 0.6, marginTop: "1px" }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.dropdown.length > 0 && openDropdown === item.href && (
                <div
                  className="absolute top-full left-0 mt-2 w-44 rounded-xl py-1.5 overflow-hidden"
                  style={{
                    background: "rgba(15,15,15,0.98)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-2.5 text-sm transition-colors"
                      style={{ color: "#A7AABB" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "white")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#A7AABB")
                      }
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href={isNegocios ? "/negocios-latinos/contacto" : "/manufactura/contacto"}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white"
            style={{
              background: accentGradient,
              borderRadius: "100px",
              padding: "11px 20px",
            }}
          >
            {isNegocios ? "Agendar consulta" : "Iniciar diagnóstico"}
          </Link>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {mobileOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 py-4"
          style={{
            background: "rgba(6,6,6,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {navItems.map((item) => (
            <div key={item.href} className="mb-4">
              <Link
                href={item.href}
                className="block text-white font-medium py-1.5"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="block py-1 pl-4 text-sm"
                  style={{ color: "#A7AABB" }}
                  onClick={() => setMobileOpen(false)}
                >
                  └ {sub.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href={isNegocios ? "/negocios-latinos/contacto" : "/manufactura/contacto"}
            className="inline-flex items-center justify-center w-full text-sm font-semibold text-white mt-2"
            style={{
              background: accentGradient,
              borderRadius: "100px",
              padding: "14px 22px",
            }}
            onClick={() => setMobileOpen(false)}
          >
            {isNegocios ? "Agendar consulta" : "Iniciar diagnóstico"}
          </Link>
        </div>
      )}
    </header>
  );
}
