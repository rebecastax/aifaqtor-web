"use client";

import Link from "next/link";

export default function HeroBifurcadora() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
      style={{ background: "#060606" }}
    >
      <div className="text-center mb-16 max-w-3xl">
        <h1
          className="text-white font-bold mb-5"
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            lineHeight: "1.15em",
            letterSpacing: "-0.02em",
          }}
        >
          Soluciones de IA y tecnología digital
          <br className="hidden md:block" /> para industria y negocios
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#A7AABB",
            lineHeight: "1.6",
          }}
        >
          Dos especialidades. Un mismo compromiso: resultados medibles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full">
        {/* Card Manufactura */}
        <Link
          href="/manufactura"
          className="group block rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(0,118,196,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.06)";
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "#0076C4" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#0076C4" }}
            >
              Manufactura
            </span>
          </div>
          <h2
            className="text-white font-bold mb-3"
            style={{ fontSize: "22px" }}
          >
            Manufactura & Maquiladoras
          </h2>
          <p
            className="mb-6"
            style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.7" }}
          >
            IA, datos y automatización para plantas de 500+ empleados en México
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["IA Aplicada", "Datos 360°", "Ops Digital"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(0,118,196,0.10)",
                  color: "#0076C4",
                  border: "1px solid rgba(0,118,196,0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className="text-sm font-semibold"
            style={{ color: "#0076C4" }}
          >
            Ver soluciones →
          </span>
        </Link>

        {/* Card Negocios Latinos */}
        <Link
          href="/negocios-latinos"
          className="group block rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(22,163,74,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.06)";
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "#16A34A" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#16A34A" }}
            >
              San Diego
            </span>
          </div>
          <h2
            className="text-white font-bold mb-3"
            style={{ fontSize: "22px" }}
          >
            Negocios Latinos · San Diego
          </h2>
          <p
            className="mb-6"
            style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.7" }}
          >
            Tecnología simple para restaurantes, tiendas y servicios
            profesionales
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Páginas web", "CRM", "Dashboards"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(22,163,74,0.10)",
                  color: "#16A34A",
                  border: "1px solid rgba(22,163,74,0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className="text-sm font-semibold"
            style={{ color: "#16A34A" }}
          >
            Ver soluciones →
          </span>
        </Link>
      </div>
    </section>
  );
}
