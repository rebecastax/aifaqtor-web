import Image from "next/image";
import { Play } from "lucide-react";
import SectionWrapper from "@/components/clone/SectionWrapper";
import CtaPill from "@/components/clone/CtaPill";
import AnimateIn from "@/components/clone/AnimateIn";

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="pt-12 pb-20 md:pt-20 md:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <AnimateIn>
            <h1
              className="text-white font-semibold tracking-tight"
              style={{
                fontSize: "clamp(36px, 5.5vw, 56px)",
                lineHeight: 1.2,
              }}
            >
              Controla tu operación en tiempo real y mejora resultados con
              datos e inteligencia artificial aplicada
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p
              className="mt-6 max-w-[640px]"
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "#A7AABB",
              }}
            >
              Menos paros, menos scrap y más control en planta. Te ayudamos a
              ver lo que realmente pasa en tu operación y habilitar soluciones
              diseñadas para optimizar el desempeño de tus procesos.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CtaPill href="/manufactura/contacto" variant="primary">
                Iniciar diagnóstico
              </CtaPill>
              <CtaPill href="/manufactura/servicios" variant="secondary">
                Ver Servicios
              </CtaPill>
              <a
                href="#"
                className="inline-flex items-center gap-2 ml-2 text-sm font-medium text-white hover:text-[#0076C4] transition-colors"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white/30">
                  <Play size={14} className="fill-white ml-0.5" />
                </span>
                Watch Video
              </a>
            </div>
          </AnimateIn>
        </div>

        <div className="lg:col-span-5">
          <AnimateIn delay={0.15} y={40}>
            <div className="relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10">
              <Image
                src="/images/hero.jpg"
                alt="Operación en planta"
                width={1200}
                height={1400}
                priority
                className="w-full h-auto"
              />
              <Image
                src="/images/hero-overlay.png"
                alt=""
                width={1200}
                height={1400}
                priority
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
