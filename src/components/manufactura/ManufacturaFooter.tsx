import Link from "next/link";

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

export default function ManufacturaFooter() {
  return (
    <footer
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Main footer body */}
      <div
        className="flex flex-col lg:flex-row gap-12 py-16 px-6"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        {/* Brand column */}
        <div className="flex-1 max-w-xs">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-5">
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
          </div>

          <h3
            style={{
              fontSize: "clamp(16px, 1.8vw, 22px)",
              fontWeight: 600,
              lineHeight: "1.3",
              marginBottom: "12px",
            }}
          >
            AiFaqtor —{" "}
            <GradientText>ecosistema de soluciones para maquiladoras.</GradientText>
          </h3>
          <p style={{ fontSize: "13px", color: "#A7AABB", lineHeight: "1.7" }}>
            AiFaqtor es una firma de consultoría especializada en datos,
            analítica, automatización e inteligencia artificial para la
            industria manufacturera.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h4
            className="text-white font-semibold mb-4"
            style={{ fontSize: "13px", letterSpacing: "0.08em" }}
          >
            Links rápidos
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Inicio", href: "/manufactura" },
              { label: "Servicios", href: "/manufactura#servicios" },
              { label: "Contacto", href: "/manufactura#contacto" },
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

        {/* Servicios */}
        <div>
          <h4
            className="text-white font-semibold mb-4"
            style={{ fontSize: "13px", letterSpacing: "0.08em" }}
          >
            Servicios
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Visibilidad y datos", href: "/manufactura#servicios" },
              { label: "Escala Operativa", href: "/manufactura#servicios" },
              { label: "Rentabilidad", href: "/manufactura#servicios" },
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
            style={{ fontSize: "13px", letterSpacing: "0.08em" }}
          >
            Contacto
          </h4>
          <div className="flex flex-col gap-4">
            <a
              href="tel:+5529364524"
              className="flex flex-col gap-0.5 hover:opacity-80 transition-opacity"
            >
              <span style={{ fontSize: "11px", color: "#A7AABB" }}>Teléfono</span>
              <span className="text-white text-sm">+ (55) 2936 4524</span>
            </a>
            <a
              href="mailto:hola@aifaqtor.com"
              className="flex flex-col gap-0.5 hover:opacity-80 transition-opacity"
            >
              <span style={{ fontSize: "11px", color: "#A7AABB" }}>
                Correo electrónico
              </span>
              <span className="text-white text-sm">hola@aifaqtor.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-6"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span style={{ fontSize: "13px", color: "#A7AABB" }}>
          Copyright © 2026 All Rights Reserved.
        </span>
        <a
          href="https://mx.linkedin.com/in/georginaguzmanrasillo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          style={{ color: "#A7AABB", fontSize: "13px" }}
        >
          Nos leemos en Linkedin
          <div
            className="w-7 h-7 rounded flex items-center justify-center"
            style={{ background: "#0077B5" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        </a>
      </div>
    </footer>
  );
}
