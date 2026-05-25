"use client";

import { useState } from "react";
import Link from "next/link";
import { WA_LINKS } from "@/lib/constants";

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

const inputCls =
  "w-full rounded-xl px-4 py-3 text-white text-sm placeholder-[#A7AABB] focus:outline-none focus:ring-2 focus:ring-[#0076C4] transition-all";
const inputStyle = {
  background: "#0f0f0f",
  border: "1px solid rgba(255,255,255,0.1)",
};

export default function ManufacturaContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    email: "",
    tel: "",
    num_plantas: "",
    empleados: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          unidad: "manufactura",
          origin_page: "/manufactura/contacto",
        }),
      });
    } catch {
      // Silent fail — still show success to user
    }
    setSent(true);
    setLoading(false);
  }

  if (sent) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: "#060606" }}
      >
        <div className="text-center max-w-md">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: "linear-gradient(135deg, #0076C4 0%, #6B3890 100%)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-white font-bold text-2xl mb-3">
            ¡Mensaje recibido!
          </h2>
          <p style={{ color: "#A7AABB" }} className="mb-8">
            Revisamos tu caso y te contactamos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINKS.manufactura}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-semibold text-white rounded-xl text-sm text-center transition-opacity hover:opacity-85"
              style={{
                background: "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
              }}
            >
              💬 Escríbenos por WhatsApp
            </a>
            <Link
              href="/manufactura"
              className="px-6 py-3 font-semibold text-white rounded-xl text-sm text-center transition-all hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-6 py-20"
      style={{ background: "#060606" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span style={{ color: "#0076C4", fontSize: "14px" }}>✦</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#0076C4",
              }}
            >
              Manufactura
            </span>
          </div>
          <h1
            className="text-white font-bold mb-4"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            Hablemos de tu <GradientText>operación</GradientText>
          </h1>
          <p style={{ fontSize: "17px", color: "#A7AABB", lineHeight: "1.7" }}>
            Cuéntanos tu caso — respondemos en menos de 24 horas con un análisis inicial sin costo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <a
              href={WA_LINKS.manufactura}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl transition-all hover:opacity-85"
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(0,118,196,0.3)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(0,118,196,0.15)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                    fill="#0076C4"
                  />
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.929 9.929 0 01-4.744-1.204L3 18.88l1.243-4.54A9.955 9.955 0 012.07 9.96C2.07 4.433 6.502 0 12.029 0s9.96 4.433 9.96 9.96-4.432 9.92-9.96 9.92z"
                    fill="#0076C4"
                    opacity="0.3"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-0.5">WhatsApp directo</p>
                <p style={{ fontSize: "13px", color: "#A7AABB" }}>Respuesta en minutos</p>
              </div>
            </a>

            <div
              className="p-5 rounded-2xl"
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-white font-semibold text-sm mb-1">Email</p>
              <p style={{ fontSize: "13px", color: "#0076C4" }}>contacto@aifaqtor.com</p>
            </div>

            <div
              className="p-5 rounded-2xl"
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-white font-semibold text-sm mb-3">Lo que recibirás</p>
              <ul className="flex flex-col gap-2">
                {[
                  "Análisis inicial de tu operación",
                  "Casos similares en manufactura",
                  "Roadmap con ROI estimado",
                  "Sin compromiso ni costo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: "#0076C4", fontSize: "12px" }}>✓</span>
                    <span style={{ fontSize: "13px", color: "#A7AABB" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 rounded-2xl p-7 flex flex-col gap-4"
            style={{
              background: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                className={inputCls}
                style={inputStyle}
                placeholder="Nombre completo *"
                value={form.nombre}
                onChange={(e) => update("nombre", e.target.value)}
              />
              <input
                required
                className={inputCls}
                style={inputStyle}
                placeholder="Empresa *"
                value={form.empresa}
                onChange={(e) => update("empresa", e.target.value)}
              />
              <input
                className={inputCls}
                style={inputStyle}
                placeholder="Cargo"
                value={form.cargo}
                onChange={(e) => update("cargo", e.target.value)}
              />
              <input
                required
                type="email"
                className={inputCls}
                style={inputStyle}
                placeholder="Correo corporativo *"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
              <input
                className={inputCls}
                style={inputStyle}
                placeholder="WhatsApp / Teléfono"
                value={form.tel}
                onChange={(e) => update("tel", e.target.value)}
              />
              <input
                className={inputCls}
                style={inputStyle}
                placeholder="Número de plantas"
                value={form.num_plantas}
                onChange={(e) => update("num_plantas", e.target.value)}
              />
            </div>

            <select
              className={inputCls}
              style={inputStyle}
              value={form.empleados}
              onChange={(e) => update("empleados", e.target.value)}
            >
              <option value="">Número de empleados (rango)</option>
              <option value="100-500">100 – 500</option>
              <option value="500-1000">500 – 1,000</option>
              <option value="1000-3000">1,000 – 3,000</option>
              <option value="3000+">3,000+</option>
            </select>

            <textarea
              required
              className={inputCls}
              style={{ ...inputStyle, resize: "none", height: "120px" }}
              placeholder="¿Qué problema quieres resolver? *"
              value={form.mensaje}
              onChange={(e) => update("mensaje", e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 font-semibold text-white rounded-xl text-sm transition-opacity hover:opacity-85 disabled:opacity-50"
              style={{
                background: "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
              }}
            >
              {loading ? "Enviando..." : "Conectemos →"}
            </button>

            <p style={{ fontSize: "12px", color: "#A7AABB", textAlign: "center" }}>
              Respondemos en menos de 24 horas · Sin spam ni compromisos
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
