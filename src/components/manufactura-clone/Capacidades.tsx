import { Brain, Database, Cog, Factory } from "lucide-react";
import SectionWrapper from "@/components/clone/SectionWrapper";
import Eyebrow from "@/components/clone/Eyebrow";
import AnimateIn from "@/components/clone/AnimateIn";

const capacidades = [
  {
    icon: Brain,
    titulo: "Acelerador de Inteligencia Artificial",
    descripcion:
      "Evaluamos procesos, datos y madurez operativa para identificar dónde se pierde dinero, qué iniciativas generan mayor impacto y en qué orden ejecutarlas, con un roadmap claro y un caso de negocio defendible.",
    subitems: ["Diagnóstico", "Blueprint"],
  },
  {
    icon: Database,
    titulo: "Datos 360°",
    descripcion:
      "Integramos datos de diferentes áreas para ofrecer una visión operativa confiable, compartida y accionable en el día a día.",
    subitems: [
      "Ingeniería de Datos",
      "Ingesta de datos ETL/ELT",
      "Tableros dinámicos en tiempo real",
      "Analítica de datos",
      "Gobernanza de datos",
    ],
  },
  {
    icon: Cog,
    titulo: "Operaciones Digitales",
    descripcion:
      "Digitalizamos y estandarizamos procesos críticos que hoy viven en Excel o papel, para lograr una operación repetible, gobernable y menos dependiente de personas clave.",
    subitems: [
      "Aplicaciones internas",
      "Automatización de flujos operativos / Admin",
      "Estandarización de captación de datos",
    ],
  },
  {
    icon: Factory,
    titulo: "Manufactura Inteligente",
    descripcion:
      "Aplicamos modelos de IA y analítica avanzada directamente en piso para anticipar paros, reducir scrap y elevar el desempeño de líneas y procesos críticos.",
    subitems: [
      "Modelos predictivos de calidad",
      "Optimización de OEE",
      "Visión artificial en línea",
    ],
  },
];

export default function Capacidades() {
  return (
    <SectionWrapper id="capacidades" className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
        <div className="lg:col-span-5">
          <AnimateIn>
            <Eyebrow>Nuestras Capacidades</Eyebrow>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2
              className="mt-4 text-white font-semibold"
              style={{
                fontSize: "clamp(28px, 3.4vw, 44px)",
                lineHeight: 1.2,
              }}
            >
              Convertimos ineficiencias
              <br />
              operativas en{" "}
              <span className="text-[#0076C4]">ventaja competitiva</span>
            </h2>
          </AnimateIn>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {capacidades.map((c, i) => {
          const Icon = c.icon;
          return (
            <AnimateIn key={c.titulo} delay={0.05 * i}>
              <article className="h-full p-8 md:p-10 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#0076C4]/50 hover:bg-white/[0.06] transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0076C4]/15 border border-[#0076C4]/40 flex items-center justify-center text-[#0076C4]">
                    <Icon size={26} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-[20px] leading-snug">
                      {c.titulo}
                    </h3>
                  </div>
                </div>

                <p
                  className="mt-5 text-[15px] leading-relaxed"
                  style={{ color: "#A7AABB" }}
                >
                  {c.descripcion}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {c.subitems.map((s) => (
                    <span
                      key={s}
                      className="text-[12px] font-medium px-3 py-1.5 rounded-full border border-white/10 text-white/80 bg-white/[0.03]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </AnimateIn>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
