"use client";

import { useState } from "react";
import { Mail, Phone, Send, Loader2, Check } from "lucide-react";
import SectionWrapper from "@/components/clone/SectionWrapper";
import Eyebrow from "@/components/clone/Eyebrow";
import AnimateIn from "@/components/clone/AnimateIn";
import { EMAIL } from "@/lib/constants";

const PHONE_DISPLAY = "(55) 2936 45 24";
const PHONE_TEL = "+525529364524";

const OPCIONES = [
  "Visibilidad de datos",
  "Escala operativa",
  "Rentabilidad",
  "Otros",
];

export default function ContactoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const checks = fd.getAll("tipo_negocio").map(String);
    const payload = {
      unidad: "manufactura" as const,
      nombre: String(fd.get("nombre") ?? ""),
      empresa: String(fd.get("empresa") ?? ""),
      tel: String(fd.get("tel") ?? ""),
      email: String(fd.get("email") ?? ""),
      mensaje:
        String(fd.get("mensaje") ?? "") +
        (checks.length ? `\n\nIntereses: ${checks.join(" | ")}` : ""),
      origin_page: "/manufactura",
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("error");
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionWrapper id="hablemos" className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <AnimateIn>
            <Eyebrow>Hablemos</Eyebrow>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2
              className="mt-4 text-white font-semibold"
              style={{
                fontSize: "clamp(28px, 3.4vw, 44px)",
                lineHeight: 1.2,
              }}
            >
              Estamos a un mensaje de conectar.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-10 flex flex-col gap-5">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#0076C4] group-hover:border-[#0076C4]/50 transition-colors">
                  <Mail size={20} />
                </span>
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-white/50">
                    Email
                  </div>
                  <div className="text-white font-medium text-[17px]">
                    {EMAIL}
                  </div>
                </div>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#0076C4] group-hover:border-[#0076C4]/50 transition-colors">
                  <Phone size={20} />
                </span>
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-white/50">
                    Teléfono
                  </div>
                  <div className="text-white font-medium text-[17px]">
                    {PHONE_DISPLAY}
                  </div>
                </div>
              </a>
            </div>
          </AnimateIn>
        </div>

        <div className="lg:col-span-7">
          <AnimateIn delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field name="nombre" placeholder="Nombre Completo*" required />
                <Field name="empresa" placeholder="Empresa*" required />
                <Field name="tel" placeholder="WhatsApp / Tel" />
                <Field
                  name="email"
                  type="email"
                  placeholder="Correo Corporativo*"
                  required
                />
              </div>

              <fieldset className="mt-7">
                <legend className="text-[13px] uppercase tracking-wider text-white/60 mb-3">
                  Busco soluciones para lograr:
                </legend>
                <div className="flex flex-wrap gap-2">
                  {OPCIONES.map((op) => (
                    <label
                      key={op}
                      className="cursor-pointer text-[13px] text-white/80 px-4 py-2 rounded-full border border-white/15 hover:border-[#0076C4]/60 transition-colors has-[:checked]:bg-[#0076C4]/15 has-[:checked]:border-[#0076C4] has-[:checked]:text-white"
                    >
                      <input
                        type="checkbox"
                        name="tipo_negocio"
                        value={op}
                        className="sr-only"
                      />
                      {op}
                    </label>
                  ))}
                </div>
              </fieldset>

              <textarea
                name="mensaje"
                placeholder="Cuéntanos más"
                rows={5}
                className="mt-7 w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#0076C4]/60 resize-y"
              />

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending" || status === "ok"}
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#0076C4] px-7 py-4 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {status === "sending" && <Loader2 size={16} className="animate-spin" />}
                  {status === "ok" && <Check size={16} />}
                  {status === "idle" && <Send size={16} />}
                  {status === "error" && <Send size={16} />}
                  {status === "ok"
                    ? "¡Mensaje enviado!"
                    : status === "sending"
                    ? "Enviando..."
                    : "Enviar mensaje"}
                </button>
                {status === "error" && (
                  <span className="text-sm text-[#E65757]">
                    Error al enviar. Inténtalo de nuevo.
                  </span>
                )}
              </div>
            </form>
          </AnimateIn>
        </div>
      </div>
    </SectionWrapper>
  );
}

function Field({
  name,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#0076C4]/60"
    />
  );
}
