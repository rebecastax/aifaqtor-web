"use client";

import { useState } from "react";
import Link from "next/link";
import { WA_LINKS, EMAIL } from "@/lib/constants";

const inputCls =
  "w-full rounded-xl px-4 py-3 text-white text-sm placeholder-[#A7AABB] focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all";
const inputStyle = {
  background: "#0f0f0f",
  border: "1px solid rgba(255,255,255,0.1)",
};

export default function NegociosContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    tipo_negocio: "",
    whatsapp: "",
    email: "",
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
          unidad: "negocios-latinos",
          origin_page: "/negocios-latinos/contacto",
        }),
      });
    } catch {
      // Silent fail
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
            style={{ background: "#16A34A" }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-white font-bold text-2xl mb-3">
            ¡Listo! Te contactamos pronto.
          </h2>
          <p style={{ color: "#A7AABB" }} className="mb-8">
            Normalmente respondemos el mismo día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINKS.negociosContacto}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-semibold text-white rounded-xl text-sm text-center transition-opacity hover:opacity-85"
              style={{ background: "#16A34A" }}
            >
              💬 WhatsApp ahora
            </a>
            <Link
              href="/negocios-latinos"
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
      <div style={{ maxWidth: "560px", margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span style={{ color: "#16A34A", fontSize: "14px" }}>✦</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#16A34A",
              }}
            >
              Negocios Latinos · San Diego
            </span>
          </div>
          <h1
            className="text-white font-bold mb-3"
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            Agenda una consulta gratis
          </h1>
          <p style={{ fontSize: "16px", color: "#A7AABB", lineHeight: "1.7" }}>
            Te explicamos todo sin palabras complicadas. Sin compromiso.
          </p>
        </div>

        {/* WhatsApp CTA — primary */}
        <a
          href={WA_LINKS.negociosContacto}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-white text-base transition-opacity hover:opacity-85 mb-5"
          style={{ background: "#16A34A" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.929 9.929 0 01-4.744-1.204L3 18.88l1.243-4.54A9.955 9.955 0 012.07 9.96C2.07 4.433 6.502 0 12.029 0s9.96 4.433 9.96 9.96-4.432 9.92-9.96 9.92z" opacity=".5"/>
          </svg>
          Escríbenos directo por WhatsApp
        </a>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <span style={{ fontSize: "12px", color: "#A7AABB" }}>
            o déjanos tus datos
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl p-7"
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <input
            required
            className={inputCls}
            style={inputStyle}
            placeholder="Tu nombre *"
            value={form.nombre}
            onChange={(e) => update("nombre", e.target.value)}
          />
          <input
            required
            className={inputCls}
            style={inputStyle}
            placeholder="Tipo de negocio * (restaurante, tienda, etc.)"
            value={form.tipo_negocio}
            onChange={(e) => update("tipo_negocio", e.target.value)}
          />
          <input
            className={inputCls}
            style={inputStyle}
            placeholder="Tu WhatsApp (preferido)"
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
          />
          <input
            type="email"
            className={inputCls}
            style={inputStyle}
            placeholder="Correo electrónico"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          <textarea
            className={inputCls}
            style={{ ...inputStyle, resize: "none", height: "100px" }}
            placeholder="¿Qué necesitas? (campo libre)"
            value={form.mensaje}
            onChange={(e) => update("mensaje", e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 font-semibold text-white rounded-xl text-sm transition-opacity hover:opacity-85 disabled:opacity-50"
            style={{ background: "#16A34A" }}
          >
            {loading ? "Enviando..." : "Enviar mensaje →"}
          </button>
        </form>

        <p
          className="text-center mt-5"
          style={{ fontSize: "13px", color: "#A7AABB" }}
        >
          También puedes escribirnos a{" "}
          <a
            href={`mailto:${EMAIL}?subject=Consulta%20Servicios%20Negocios%20Latinos`}
            style={{ color: "#16A34A" }}
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}
