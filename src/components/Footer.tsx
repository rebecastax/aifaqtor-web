import Link from "next/link";
import { EMAIL } from "@/lib/constants";

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      background: "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    {children}
  </span>
);

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="flex flex-col lg:flex-row gap-12 py-16 px-6"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        {/* Brand */}
        <div className="flex-1" style={{ maxWidth: "340px" }}>
          <div className="flex items-center gap-2 mb-5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{
                background:
                  "linear-gradient(135deg, #0076C4 0%, #6B3890 100%)",
              }}
            >
              Ai
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              AiFaqtor
            </span>
          </div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "1.4",
              marginBottom: "10px",
            }}
          >
            AiFaqtor —{" "}
            <GradientText>
              ecosistema de soluciones para maquiladoras.
            </GradientText>
          </h3>
          <p style={{ fontSize: "13px", color: "#A7AABB", lineHeight: "1.7" }}>
            Consultoría especializada en datos, analítica, automatización e
            inteligencia artificial para la industria manufacturera y servicios
            digitales para negocios latinos.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h4
            className="text-white font-semibold mb-4"
            style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Soluciones
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Manufactura", href: "/manufactura" },
              { label: "Negocios Latinos", href: "/negocios-latinos" },
              { label: "Nosotros", href: "/nosotros" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#A7AABB" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios manufactura */}
        <div>
          <h4
            className="text-white font-semibold mb-4"
            style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Manufactura
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Visibilidad & Datos", href: "/manufactura/servicios" },
              { label: "Escala Operativa", href: "/manufactura/servicios" },
              { label: "Rentabilidad", href: "/manufactura/servicios" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#A7AABB" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios negocios */}
        <div>
          <h4
            className="text-white font-semibold mb-4"
            style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Negocios Latinos
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Páginas web", href: "/negocios-latinos/servicios" },
              { label: "CRM", href: "/negocios-latinos/servicios" },
              { label: "Dashboards", href: "/negocios-latinos/servicios" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#A7AABB" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4
            className="text-white font-semibold mb-4"
            style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Contacto
          </h4>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex flex-col gap-0.5 hover:opacity-80 transition-opacity"
            >
              <span style={{ fontSize: "11px", color: "#A7AABB" }}>Email</span>
              <span className="text-white text-sm">{EMAIL}</span>
            </a>
            <a
              href="https://mx.linkedin.com/in/georginaguzmanrasillo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-0.5 hover:opacity-80 transition-opacity"
            >
              <span style={{ fontSize: "11px", color: "#A7AABB" }}>LinkedIn</span>
              <span className="text-white text-sm">AiFaqtor</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 px-6"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span style={{ fontSize: "12px", color: "#A7AABB" }}>
          Copyright © 2026 AiFaqtor. All Rights Reserved.
        </span>
        <span style={{ fontSize: "12px", color: "#A7AABB" }}>
          AiFaqtor — ecosistema de soluciones para maquiladoras.
        </span>
      </div>
    </footer>
  );
}
