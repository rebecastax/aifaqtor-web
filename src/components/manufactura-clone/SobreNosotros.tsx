import Image from "next/image";
import { Sparkles, Handshake, Layers, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/clone/SectionWrapper";
import Eyebrow from "@/components/clone/Eyebrow";
import CtaPill from "@/components/clone/CtaPill";
import AnimateIn from "@/components/clone/AnimateIn";
import Marquee from "@/components/clone/Marquee";

const puntos = [
  {
    icon: Sparkles,
    titulo: "Soluciones a la medida",
    texto:
      "Desarrollamos soluciones basadas en tus procesos reales, datos de planta y nivel actual de madurez operativa.",
  },
  {
    icon: Handshake,
    titulo: "Acompañamiento de punta a punta",
    texto:
      "Desde el diagnóstico hasta la adopción en piso, trabajamos como un socio operativo y técnico.",
  },
  {
    icon: Layers,
    titulo: "Implementación incremental, sin detener la operación",
    texto:
      "Evolución por etapas: visibilidad → control → optimización.",
  },
  {
    icon: TrendingUp,
    titulo: "Impacto medible en productividad",
    texto:
      "Adopción real en piso → Maximizar el retorno medible de la inversión.",
  },
];

export default function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="py-20 md:py-28 overflow-hidden">
      <AnimateIn>
        <Marquee text="Conócenos" durationSec={28} />
      </AnimateIn>

      <SectionWrapper className="mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <AnimateIn>
              <div className="rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/about-us.jpg"
                  alt="Sobre AiFaqtor"
                  width={900}
                  height={1100}
                  className="w-full h-auto"
                />
              </div>
            </AnimateIn>
          </div>

          <div className="lg:col-span-7">
            <AnimateIn>
              <Eyebrow>Sobre Nosotros</Eyebrow>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2
                className="mt-4 text-white font-semibold"
                style={{
                  fontSize: "clamp(28px, 3.2vw, 40px)",
                  lineHeight: 1.25,
                }}
              >
                Reimagina tu operación con IA diseñada para maximizar el
                desempeño de tu equipo.
              </h2>
            </AnimateIn>

            <ul className="mt-10 flex flex-col gap-7">
              {puntos.map((p, i) => {
                const Icon = p.icon;
                return (
                  <AnimateIn key={p.titulo} delay={0.05 * i}>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#0076C4]/15 border border-[#0076C4]/40 flex items-center justify-center text-[#0076C4]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-[17px]">
                          {p.titulo}
                        </h3>
                        <p
                          className="mt-1.5 text-[15px] leading-relaxed"
                          style={{ color: "#A7AABB" }}
                        >
                          {p.texto}
                        </p>
                      </div>
                    </li>
                  </AnimateIn>
                );
              })}
            </ul>

            <AnimateIn delay={0.3}>
              <div className="mt-10">
                <CtaPill href="/manufactura/servicios" variant="primary">
                  Conocer más
                </CtaPill>
              </div>
            </AnimateIn>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
