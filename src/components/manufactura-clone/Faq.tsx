"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "@/components/clone/SectionWrapper";
import Eyebrow from "@/components/clone/Eyebrow";
import AnimateIn from "@/components/clone/AnimateIn";
import type { ManufacturaFAQ } from "@/lib/types";

const PHONE_DISPLAY = "+ (55) 2936 4524";
const PHONE_TEL = "+525529364524";

interface Props {
  faqs: ManufacturaFAQ[];
}

export default function Faq({ faqs }: Props) {
  const active = (faqs ?? [])
    .filter((f) => f.activo !== false)
    .sort((a, b) => (a.orden ?? 0) - (b.orden ?? 0));

  const [open, setOpen] = useState(0);

  return (
    <SectionWrapper id="faq" className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left CTA card */}
        <div className="lg:col-span-5">
          <AnimateIn>
            <div className="rounded-3xl overflow-hidden border border-white/10 relative">
              <Image
                src="/images/faq.jpg"
                alt=""
                width={900}
                height={1100}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <h3
                  className="text-white font-semibold"
                  style={{
                    fontSize: "clamp(24px, 2.8vw, 36px)",
                    lineHeight: 1.2,
                  }}
                >
                  Iniciemos la conversación
                </h3>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-5 inline-flex items-center gap-3 text-white hover:text-[#0076C4] transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-[#0076C4]/20 border border-[#0076C4]/40 flex items-center justify-center text-[#0076C4]">
                    <Phone size={16} />
                  </span>
                  <span className="text-[20px] font-semibold tracking-tight">
                    {PHONE_DISPLAY}
                  </span>
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Right FAQ */}
        <div className="lg:col-span-7">
          <AnimateIn>
            <Eyebrow>Preguntas Frecuentes</Eyebrow>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2
              className="mt-4 text-white font-semibold"
              style={{
                fontSize: "clamp(28px, 3.2vw, 40px)",
                lineHeight: 1.2,
              }}
            >
              Respuestas a las preguntas más comunes sobre{" "}
              <span className="text-[#0076C4]">cómo trabajamos</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p
              className="mt-5 max-w-[640px]"
              style={{ fontSize: 16, lineHeight: 1.6, color: "#A7AABB" }}
            >
              Sabemos que adoptar una cultura de datos, operaciones digitales e
              inteligencia artificial en entornos manufactureros genera
              preguntas legítimas. Aquí abordamos las más comunes.
            </p>
          </AnimateIn>

          <div className="mt-10 flex flex-col gap-3">
            {active.length === 0 && (
              <p className="text-white/50 italic">Próximamente.</p>
            )}
            {active.map((f, i) => {
              const isOpen = i === open;
              return (
                <AnimateIn key={f.pregunta} delay={0.04 * i}>
                  <div
                    className={`rounded-2xl border transition-colors ${
                      isOpen
                        ? "border-[#0076C4]/50 bg-white/[0.05]"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-white font-semibold text-[16px] md:text-[17px] leading-snug">
                        {f.pregunta}
                      </span>
                      <span
                        className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                          isOpen
                            ? "bg-[#0076C4] text-white"
                            : "bg-white/10 text-white/70"
                        }`}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p
                            className="px-6 pb-6 text-[15px] leading-relaxed"
                            style={{ color: "#A7AABB" }}
                          >
                            {f.respuesta}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
