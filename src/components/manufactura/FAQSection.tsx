"use client";

import { useState } from "react";
import type { ManufacturaFAQ } from "@/lib/types";

interface Props {
  faqs: ManufacturaFAQ[];
}

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

// Fallback FAQ data if CMS is unavailable
const fallbackFAQs: ManufacturaFAQ[] = [
  {
    pregunta: "¿Necesitamos tener un equipo técnico o de IA para trabajar con AiFaqtor?",
    respuesta:
      "No. Nuestro trabajo parte del entendimiento del proceso operativo y del contexto del negocio, no de la tecnología. Nos adaptamos al nivel actual de la organización y trabajamos de forma coordinada con operaciones, ingeniería y TI cuando aplica.",
    orden: 1,
    activo: true,
  },
  {
    pregunta: "¿AiFaqtor reemplaza sistemas o se integra a los existentes?",
    respuesta:
      "Nos integramos a la realidad tecnológica de cada planta. Nuestras soluciones están pensadas para convivir con los sistemas existentes — no reemplazamos, complementamos y conectamos lo que ya tienen para agregar visibilidad e inteligencia encima.",
    orden: 2,
    activo: true,
  },
  {
    pregunta: "¿Qué tan seguro es el manejo de nuestra información?",
    respuesta:
      "Tratamos los datos operativos con estrictos criterios de confidencialidad y gobierno. Trabajamos bajo acuerdos claros y diseñamos cada solución considerando los lineamientos de seguridad de la organización.",
    orden: 3,
    activo: true,
  },
  {
    pregunta: "¿Cómo inicia normalmente un proyecto con AiFaqtor?",
    respuesta:
      "Iniciamos con un diagnóstico operativo estructurado, que permite entender prioridades, dimensionar impacto y diseñar un roadmap de implementación por etapas. El diagnóstico tarda entre 2 y 4 semanas.",
    orden: 4,
    activo: true,
  },
];

export default function FAQSection({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayFAQs = faqs.length > 0 ? faqs : fallbackFAQs;

  return (
    <section style={{ background: "#060606", padding: "100px 0" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: header */}
          <div className="flex-shrink-0" style={{ maxWidth: "380px" }}>
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
                Preguntas Frecuentes
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 2.8vw, 36px)",
                fontWeight: 600,
                lineHeight: "1.25em",
                letterSpacing: "-0.02em",
                color: "white",
                marginBottom: "16px",
              }}
            >
              Respuestas a las preguntas más comunes{" "}
              <GradientText>sobre cómo trabajamos</GradientText>
            </h2>
            <p style={{ fontSize: "15px", color: "#A7AABB", lineHeight: "1.7" }}>
              Sabemos que adoptar una cultura de datos, operaciones digitales e
              inteligencia artificial en entornos manufactureros genera dudas.
              Aquí respondemos las más comunes.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="flex-1 flex flex-col gap-3">
            {displayFAQs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  background: openIndex === i ? "rgba(0,118,196,0.05)" : "#0f0f0f",
                  border: openIndex === i
                    ? "1px solid rgba(0,118,196,0.2)"
                    : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span
                    className="font-medium pr-4"
                    style={{
                      fontSize: "15px",
                      color: openIndex === i ? "white" : "#A7AABB",
                      transition: "color 0.2s",
                    }}
                  >
                    {i + 1}. {faq.pregunta}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      background: openIndex === i
                        ? "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)"
                        : "rgba(255,255,255,0.06)",
                      transform: openIndex === i ? "rotate(45deg)" : "none",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                {openIndex === i && (
                  <div
                    className="px-6 pb-6"
                    style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.75" }}
                  >
                    {faq.respuesta}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
