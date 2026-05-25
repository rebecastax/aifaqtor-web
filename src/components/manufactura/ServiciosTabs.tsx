"use client";

import { useState } from "react";
import Link from "next/link";
import type { ManufacturaServicio } from "@/lib/types";

interface Props {
  servicios: ManufacturaServicio[];
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

const tabs = [
  {
    id: "Visibilidad",
    label: "Visibilidad & Datos",
    description:
      "Servicios que transforman datos dispersos en visibilidad clara y compartida de la operación, permitiendo decisiones oportunas y alineadas a objetivos de negocio.",
  },
  {
    id: "Escala",
    label: "Escala Operativa",
    description:
      "Servicios que permiten crecer en volumen o complejidad sin perder control, calidad y gobernabilidad de la operación.",
  },
  {
    id: "Rentabilidad",
    label: "Rentabilidad",
    description:
      "Servicios enfocados en identificar, priorizar y reducir pérdidas operativas reales como scrap, paros y capacidad instalada ociosa.",
  },
] as const;

type TabId = "Visibilidad" | "Escala" | "Rentabilidad";

export default function ServiciosTabs({ servicios }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>("Visibilidad");

  const activeTabData = tabs.find((t) => t.id === activeTab)!;
  const activeServicios = servicios.filter((s) => s.grupo === activeTab);

  return (
    <section
      id="servicios"
      style={{ background: "#060606", padding: "100px 0" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div
          className="flex flex-col lg:flex-row lg:items-end gap-6 mb-12"
          style={{ gap: "24px" }}
        >
          <div className="flex-1">
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
                Nuestros Servicios
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 600,
                lineHeight: "1.25em",
                letterSpacing: "-0.02em",
                color: "white",
              }}
            >
              Servicios que logran{" "}
              <GradientText>impacto operativo real</GradientText>
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "#A7AABB",
              lineHeight: "1.6",
              maxWidth: "420px",
            }}
          >
            Soluciones a la medida, implementadas por etapas para resolver
            problemas operativos recurrentes en la operación manufacturera.
          </p>
        </div>

        {/* Tabs panel */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Tab buttons */}
          <div
            className="flex flex-col sm:flex-row"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 py-5 px-6 text-sm font-semibold transition-all duration-200 text-left sm:text-center"
                style={{
                  background:
                    activeTab === tab.id
                      ? "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)"
                      : "transparent",
                  color: activeTab === tab.id ? "white" : "#A7AABB",
                  border: "none",
                  cursor: "pointer",
                  borderRight:
                    tab.id !== "Rentabilidad"
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left: description + CTA */}
              <div className="flex-1 flex flex-col gap-6">
                <p style={{ fontSize: "15px", color: "#A7AABB", lineHeight: "1.7" }}>
                  {activeTabData.description}
                </p>

                {/* Service list from CMS */}
                <ul className="flex flex-col gap-4">
                  {activeServicios.length > 0 ? (
                    activeServicios.map((s) => (
                      <li key={s.id} className="flex flex-col gap-1">
                        <div className="flex items-start gap-3">
                          <span
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                            style={{ background: "rgba(0,118,196,0.15)" }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: "#0076C4" }}
                            />
                          </span>
                          <div>
                            <div className="text-white font-medium text-sm">{s.nombre}</div>
                            {s.quickwin && (
                              <div className="text-xs mt-0.5" style={{ color: "#A7AABB" }}>
                                ⚡ {s.quickwin}
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    /* Fallback content if no CMS data */
                    <li style={{ color: "#A7AABB", fontSize: "14px" }}>
                      Servicios disponibles próximamente.
                    </li>
                  )}
                </ul>

                <div className="mt-2">
                  <Link
                    href="/manufactura/contacto"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all"
                    style={{
                      background: "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
                      borderRadius: "100px",
                      padding: "14px 24px",
                    }}
                  >
                    Explora
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right: visual card */}
              <div className="flex-shrink-0" style={{ width: "380px", maxWidth: "100%" }}>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #0a1628 0%, #1a0a28 100%)",
                    border: "1px solid rgba(0,118,196,0.15)",
                    padding: "24px",
                  }}
                >
                  <div
                    className="text-sm font-semibold mb-4"
                    style={{ color: "#0076C4" }}
                  >
                    {activeTabData.label}
                  </div>
                  {/* Mini dashboard */}
                  <div className="flex flex-col gap-3">
                    {(activeServicios.length > 0
                      ? activeServicios.slice(0, 3)
                      : [{ nombre: "—", indicadores: "" }]
                    ).map((s, i) => (
                      <div
                        key={i}
                        className="rounded-lg p-4"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div className="text-white text-sm font-medium mb-1">{s.nombre}</div>
                        {s.indicadores && (
                          <div className="text-xs" style={{ color: "#A7AABB" }}>
                            {s.indicadores}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
