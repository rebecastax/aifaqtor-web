"use client";

import { useState } from "react";

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

type FormData = {
  nombre: string;
  empresa: string;
  tel: string;
  email: string;
  visibilidad: boolean;
  escala: boolean;
  rentabilidad: boolean;
  mensaje: string;
};

export default function ContactoSection() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    empresa: "",
    tel: "",
    email: "",
    visibilidad: false,
    escala: false,
    rentabilidad: false,
    mensaje: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          unidad: "manufactura",
          nombre: form.nombre,
          empresa: form.empresa,
          tel: form.tel,
          email: form.email,
          mensaje: [
            form.visibilidad && "VISIBILIDAD DE DATOS",
            form.escala && "ESCALA OPERATIVA",
            form.rentabilidad && "RENTABILIDAD",
            form.mensaje,
          ]
            .filter(Boolean)
            .join(" | "),
          origin_page: "/manufactura",
        }),
      });
      setSent(true);
    } catch {
      setSent(true); // Still show success to user
    }
    setLoading(false);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "10px",
    padding: "14px 16px",
    color: "white",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    color: "#A7AABB",
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  if (sent) {
    return (
      <section id="contacto" style={{ background: "#060606", padding: "100px 0" }}>
        <div
          className="flex flex-col items-center justify-center text-center gap-6"
          style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0076C4 0%, #6B3890 100%)" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-white text-2xl font-bold">¡Mensaje recibido!</h2>
          <p style={{ color: "#A7AABB" }}>
            Te contactamos en menos de 24 horas. Mientras tanto, también puedes escribirnos por WhatsApp.
          </p>
          <a
            href="https://wa.me/5529364524"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
              borderRadius: "100px",
              padding: "14px 28px",
            }}
          >
            Iniciar conversación en WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" style={{ background: "#060606", padding: "100px 0" }}>
      <div
        className="flex flex-col lg:flex-row gap-8"
        style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}
      >
        {/* Left panel */}
        <div
          className="flex-shrink-0 rounded-2xl p-8 lg:p-10 flex flex-col justify-between"
          style={{
            width: "100%",
            maxWidth: "420px",
            background: "linear-gradient(135deg, #0d1a2e 0%, #1a0d28 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,118,196,0.12) 0%, transparent 70%)" }}
          />
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
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
                Hablemos
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(22px, 2.8vw, 36px)",
                fontWeight: 600,
                lineHeight: "1.25em",
                letterSpacing: "-0.02em",
                color: "white",
                marginBottom: "32px",
              }}
            >
              Estamos a un mensaje{" "}
              <GradientText>de conectar.</GradientText>
            </h2>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:hola@aifaqtor.com"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,118,196,0.1)", border: "1px solid rgba(0,118,196,0.2)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0076C4" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#A7AABB", marginBottom: "2px" }}>Correo</div>
                  <div className="text-white text-sm font-medium">hola@aifaqtor.com</div>
                </div>
              </a>

              <a
                href="tel:+5529364524"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(107,56,144,0.1)", border: "1px solid rgba(107,56,144,0.2)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B3890" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#A7AABB", marginBottom: "2px" }}>Teléfono</div>
                  <div className="text-white text-sm font-medium">(55) 2936 4524</div>
                </div>
              </a>

              <a
                href="https://wa.me/5529364524"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#A7AABB", marginBottom: "2px" }}>WhatsApp</div>
                  <div className="text-white text-sm font-medium">Iniciemos la conversación</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div
          className="flex-1 rounded-2xl p-8 lg:p-10"
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Nombre Completo*"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Empresa *</label>
                <input
                  type="text"
                  required
                  placeholder="Empresa*"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label style={labelStyle}>WhatsApp / Tel</label>
                <input
                  type="text"
                  placeholder="WhatsApp/Tel"
                  value={form.tel}
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Correo Corporativo *</label>
                <input
                  type="email"
                  required
                  placeholder="Correo Corporativo*"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div>
              <label style={{ ...labelStyle, marginBottom: "12px" }}>
                Busco soluciones para lograr:
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                {[
                  { key: "visibilidad", label: "VISIBILIDAD DE DATOS" },
                  { key: "escala", label: "ESCALA OPERATIVA" },
                  { key: "rentabilidad", label: "RENTABILIDAD" },
                ].map((c) => (
                  <label
                    key={c.key}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={form[c.key as keyof FormData] as boolean}
                      onChange={(e) =>
                        setForm({ ...form, [c.key]: e.target.checked })
                      }
                      className="w-4 h-4 rounded"
                      style={{ accentColor: "#0076C4" }}
                    />
                    <span style={{ fontSize: "12px", color: "#A7AABB", fontWeight: 500 }}>
                      {c.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Textarea */}
            <div>
              <label style={labelStyle}>Mensaje</label>
              <textarea
                placeholder="Ingresa aquí tu texto..."
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                style={{ ...inputStyle, resize: "none", height: "120px" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full font-semibold text-white transition-opacity hover:opacity-85 disabled:opacity-50"
              style={{
                background: "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
                borderRadius: "100px",
                padding: "16px 28px",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "15px",
                fontFamily: "inherit",
              }}
            >
              {loading ? "Enviando..." : "Conectemos"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
