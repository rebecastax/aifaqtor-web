"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "@/components/clone/SectionWrapper";
import Eyebrow from "@/components/clone/Eyebrow";
import CtaPill from "@/components/clone/CtaPill";
import AnimateIn from "@/components/clone/AnimateIn";
import type { ManufacturaServicio } from "@/lib/types";

interface Props {
  servicios: ManufacturaServicio[];
}

type Grupo = "Visibilidad" | "Escala" | "Rentabilidad";

const TABS: {
  key: Grupo;
  label: string;
  descripcion: string;
  video: string;
}[] = [
  {
    key: "Visibilidad",
    label: "Visibilidad & Datos",
    descripcion:
      "Servicios que transforman datos dispersos en visibilidad clara y compartida de la operación, permitiendo decisiones oportunas y alineadas a objetivos de negocio.",
    video: "/images/servicios-visibilidad.mp4",
  },
  {
    key: "Escala",
    label: "Escala Operativa",
    descripcion:
      "Servicios que permiten crecer en volumen o complejidad sin perder control, calidad y gobernabilidad de la operación.",
    video: "/images/servicios-escala.mp4",
  },
  {
    key: "Rentabilidad",
    label: "Rentabilidad",
    descripcion:
      "Servicios enfocados en identificar, priorizar y reducir pérdidas operativas reales como scrap, paros y capacidad desperdiciada.",
    video: "/images/servicios-rentabilidad.mp4",
  },
];

export default function Servicios({ servicios }: Props) {
  const [active, setActive] = useState<Grupo>("Visibilidad");

  const grouped = useMemo(() => {
    const map: Record<Grupo, ManufacturaServicio[]> = {
      Visibilidad: [],
      Escala: [],
      Rentabilidad: [],
    };
    servicios
      .filter((s) => s.activo !== false)
      .forEach((s) => map[s.grupo]?.push(s));
    return map;
  }, [servicios]);

  const current = TABS.find((t) => t.key === active)!;
  const items = grouped[active] ?? [];

  return (
    <SectionWrapper id="servicios" className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
        <div className="lg:col-span-7">
          <AnimateIn>
            <Eyebrow>Nuestros Servicios</Eyebrow>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2
              className="mt-4 text-white font-semibold"
              style={{
                fontSize: "clamp(28px, 3.4vw, 44px)",
                lineHeight: 1.2,
              }}
            >
              Servicios que logran{" "}
              <span className="text-[#0076C4]">impacto operativo real</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p
              className="mt-5 max-w-[640px]"
              style={{ fontSize: 16, lineHeight: 1.6, color: "#A7AABB" }}
            >
              Soluciones a la medida, implementadas por etapas para resolver
              problemas operativos recurrentes en la operación manufacturera.
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3 border-b border-white/10 mb-10">
        {TABS.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`relative px-4 md:px-6 py-3 text-sm md:text-[15px] font-semibold transition-colors ${
                isActive ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
            >
              {t.label}
              {isActive && (
                <motion.span
                  layoutId="active-tab-underline"
                  className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#0076C4]"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-[16px] leading-relaxed mb-7"
                style={{ color: "#A7AABB" }}
              >
                {current.descripcion}
              </p>

              <ul className="flex flex-col gap-4">
                {items.length === 0 && (
                  <li className="text-white/60 text-sm italic">
                    Próximamente.
                  </li>
                )}
                {items.map((s) => (
                  <li
                    key={s.id}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#0076C4]/40 transition-colors"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0076C4]/15 border border-[#0076C4]/40 flex items-center justify-center text-[#0076C4] mt-0.5">
                      <Check size={14} />
                    </span>
                    <div>
                      <h3 className="text-white font-semibold text-[16px]">
                        {s.nombre}
                      </h3>
                      {s.descripcion && (
                        <p
                          className="mt-1 text-[14px] leading-relaxed"
                          style={{ color: "#A7AABB" }}
                        >
                          {s.descripcion}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaPill href="/manufactura/servicios" variant="primary">
                  Explora <ArrowRight size={16} />
                </CtaPill>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.video}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04]"
            >
              <video
                key={current.video}
                src={current.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
