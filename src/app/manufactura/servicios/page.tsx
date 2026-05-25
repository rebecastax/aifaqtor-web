import type { Metadata } from "next";
import Link from "next/link";
import { getManufacturaServicios } from "@/lib/sheets";
import type { ManufacturaServicio } from "@/lib/types";

export const metadata: Metadata = {
  title: "Servicios para Manufactura — AiFaqtor",
  description:
    "IA, datos y automatización para plantas de manufactura en México. Visibilidad operativa, escala digital y rentabilidad con inteligencia artificial.",
};

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

const GRUPOS = ["Visibilidad", "Escala", "Rentabilidad"] as const;

const GRUPO_META: Record<
  string,
  { desc: string; color: string; icon: string }
> = {
  Visibilidad: {
    desc: "Datos centralizados y dashboards en vivo para tomar decisiones con certeza.",
    color: "#0076C4",
    icon: "👁",
  },
  Escala: {
    desc: "Digitalización de procesos críticos para crecer sin perder control.",
    color: "#6B3890",
    icon: "⚡",
  },
  Rentabilidad: {
    desc: "IA aplicada directamente a reducir scrap, paros y costos operativos.",
    color: "#0076C4",
    icon: "📈",
  },
};

const FALLBACK: ManufacturaServicio[] = [
  {
    id: 1,
    nombre: "Manufacturing Command Room",
    descripcion:
      "Control visual de paros, cumplimiento y trazabilidad en planta.",
    quickwin: "Dashboard en vivo en 4 semanas",
    indicadores: "Paros reducidos 20%, OEE visible",
    grupo: "Visibilidad",
    activo: true,
  },
  {
    id: 2,
    nombre: "Data Hub 360°",
    descripcion:
      "Integración de datos de producción, calidad y logística en una sola fuente.",
    quickwin: "Primer pipeline en 6 semanas",
    indicadores: "Datos unificados en tiempo real",
    grupo: "Visibilidad",
    activo: true,
  },
  {
    id: 3,
    nombre: "Diagnóstico Acelerado IA",
    descripcion:
      "Evaluación de madurez operativa y roadmap priorizado con ROI.",
    quickwin: "Diagnóstico en 2 semanas",
    indicadores: "Roadmap defendible con ROI por iniciativa",
    grupo: "Visibilidad",
    activo: true,
  },
  {
    id: 4,
    nombre: "MES Ligero",
    descripcion:
      "Digitalización de órdenes de producción y trazabilidad.",
    quickwin: "Primera orden digital en 3 semanas",
    indicadores: "Trazabilidad 100% en línea",
    grupo: "Escala",
    activo: true,
  },
  {
    id: 5,
    nombre: "Control de Piso Digital",
    descripcion:
      "Estandarización de procesos críticos que hoy viven en papel o Excel.",
    quickwin: "Proceso piloto en 2 semanas",
    indicadores: "Variabilidad reducida 30%",
    grupo: "Escala",
    activo: true,
  },
  {
    id: 6,
    nombre: "Agente IA de Operaciones",
    descripcion:
      "Copiloto IA para supervisores con alertas y recomendaciones en tiempo real.",
    quickwin: "Primeras alertas en 2 semanas",
    indicadores: "Decisiones 40% más rápidas",
    grupo: "Escala",
    activo: true,
  },
  {
    id: 7,
    nombre: "Automatización RPA",
    descripcion:
      "Eliminación de tareas manuales repetitivas y captura de datos.",
    quickwin: "Primera tarea automatizada en 2 semanas",
    indicadores: "20hrs/semana recuperadas por proceso",
    grupo: "Escala",
    activo: true,
  },
  {
    id: 8,
    nombre: "Machine Vision",
    descripcion: "Detección automática de defectos en línea de producción.",
    quickwin: "Cámara piloto en 4 semanas",
    indicadores: "Scrap reducido 25%",
    grupo: "Rentabilidad",
    activo: true,
  },
  {
    id: 9,
    nombre: "Predicción de Mantenimiento",
    descripcion:
      "Anticipar fallas en equipos antes de que paren la producción.",
    quickwin: "Modelo piloto en 3 semanas",
    indicadores: "Paros no programados -30%",
    grupo: "Rentabilidad",
    activo: true,
  },
  {
    id: 10,
    nombre: "Optimización de Inventarios",
    descripcion:
      "Reducción de inventario en exceso con modelos de predicción.",
    quickwin: "Modelo piloto en 4 semanas",
    indicadores: "Capital liberado 15%",
    grupo: "Rentabilidad",
    activo: true,
  },
];

function ServicioCard({ s }: { s: ManufacturaServicio }) {
  const meta = GRUPO_META[s.grupo] ?? GRUPO_META["Visibilidad"];
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div>
        <h3 className="text-white font-bold mb-1" style={{ fontSize: "17px" }}>
          {s.nombre}
        </h3>
        <p style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.65" }}>
          {s.descripcion}
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-auto">
        <div
          className="flex items-start gap-2 px-3 py-2 rounded-lg"
          style={{ background: "rgba(0,118,196,0.08)" }}
        >
          <span style={{ color: meta.color, fontSize: "12px", marginTop: "1px" }}>⚡</span>
          <span style={{ fontSize: "12px", color: "#A7AABB" }}>
            <span style={{ color: meta.color, fontWeight: 600 }}>Quick win: </span>
            {s.quickwin}
          </span>
        </div>
        <div
          className="flex items-start gap-2 px-3 py-2 rounded-lg"
          style={{ background: "rgba(107,56,144,0.08)" }}
        >
          <span style={{ color: "#6B3890", fontSize: "12px", marginTop: "1px" }}>📊</span>
          <span style={{ fontSize: "12px", color: "#A7AABB" }}>
            <span style={{ color: "#6B3890", fontWeight: 600 }}>Indicador: </span>
            {s.indicadores}
          </span>
        </div>
      </div>
    </div>
  );
}

export default async function ManufacturaServiciosPage() {
  let servicios: ManufacturaServicio[] = [];
  try {
    servicios = await getManufacturaServicios();
  } catch {
    console.warn("CMS unavailable, usando fallback");
  }
  const displayServicios = servicios.length > 0 ? servicios : FALLBACK;

  const grouped = GRUPOS.reduce(
    (acc, g) => {
      acc[g] = displayServicios.filter((s) => s.grupo === g);
      return acc;
    },
    {} as Record<string, ManufacturaServicio[]>
  );

  return (
    <div
      className="min-h-screen px-6 py-20"
      style={{ background: "#060606" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
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
              Manufactura
            </span>
          </div>
          <h1
            className="text-white font-bold mb-5"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
            }}
          >
            Soluciones de <GradientText>IA para Manufactura</GradientText>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#A7AABB",
              lineHeight: "1.7",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            10 servicios organizados en 3 grupos de impacto. Cada uno con un
            quick win medible en semanas, no en años.
          </p>
        </div>

        {/* Grupos */}
        {GRUPOS.map((grupo) => {
          const meta = GRUPO_META[grupo];
          const items = grouped[grupo] ?? [];
          if (items.length === 0) return null;
          return (
            <div key={grupo} className="mb-16">
              <div className="flex items-center gap-3 mb-7">
                <span style={{ fontSize: "22px" }}>{meta.icon}</span>
                <div>
                  <h2
                    className="text-white font-bold"
                    style={{ fontSize: "22px" }}
                  >
                    {grupo}
                  </h2>
                  <p style={{ fontSize: "14px", color: "#A7AABB" }}>
                    {meta.desc}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((s) => (
                  <ServicioCard key={s.id} s={s} />
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(0,118,196,0.2)",
          }}
        >
          <h2
            className="text-white font-bold mb-3"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
          >
            ¿Por cuál empezamos?
          </h2>
          <p
            className="mb-8"
            style={{
              color: "#A7AABB",
              fontSize: "16px",
              maxWidth: "480px",
              margin: "0 auto 2rem",
            }}
          >
            Iniciamos con un diagnóstico de 2 semanas y te decimos cuál
            servicio genera más ROI en tu operación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/manufactura/contacto"
              className="px-8 py-3.5 font-semibold text-white rounded-xl text-sm text-center transition-opacity hover:opacity-85"
              style={{
                background:
                  "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
              }}
            >
              Agendar diagnóstico →
            </Link>
            <Link
              href="/manufactura"
              className="px-8 py-3.5 font-semibold text-white rounded-xl text-sm text-center transition-all hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Ver portal manufactura
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
