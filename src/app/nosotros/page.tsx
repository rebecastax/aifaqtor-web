import type { Metadata } from "next";
import Link from "next/link";
import { getEquipo } from "@/lib/sheets";
import type { EquipoMiembro } from "@/lib/types";

export const metadata: Metadata = {
  title: "Nosotros — AiFaqtor",
  description:
    "Conoce al equipo detrás de AiFaqtor. Tecnología implementada para manufactura y negocios en México y San Diego.",
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

export default async function NosotrosPage() {
  let equipo: EquipoMiembro[] = [];
  try {
    equipo = await getEquipo();
  } catch {
    console.warn("CMS unavailable");
  }

  return (
    <div
      className="min-h-screen px-6 py-20"
      style={{ background: "#060606" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-20">
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
              Quiénes somos
            </span>
          </div>
          <h1
            className="text-white font-bold mb-6"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
            }}
          >
            El equipo <GradientText>AiFaqtor</GradientText>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#A7AABB",
              lineHeight: "1.7",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Una firma especializada en datos, analítica, automatización e
            inteligencia artificial — dos unidades, un solo compromiso.
          </p>
        </div>

        {/* Mission cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {[
            {
              label: "Propósito",
              text: "Acelerar la transformación de la industria manufacturera, mejorando la ventaja competitiva de las empresas y la calidad de vida de las personas, a través de un ecosistema de soluciones inteligentes diseñadas a la medida.",
              color: "#0076C4",
            },
            {
              label: "Visión",
              text: "Ser líder en la aplicación de inteligencia artificial para la industria manufacturera en México, aumentando de forma sostenible su rentabilidad y productividad.",
              color: "#6B3890",
            },
            {
              label: "Misión",
              text: "Ofrecer servicios integrados de consultoría, inteligencia artificial, analítica de datos y automatización, para elevar la productividad y estabilidad operativa de la industria manufacturera.",
              color: "#0076C4",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-7"
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest block mb-4"
                style={{ color: item.color }}
              >
                {item.label}
              </span>
              <p
                style={{
                  fontSize: "14px",
                  color: "#A7AABB",
                  lineHeight: "1.75",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2
            className="text-white font-bold text-center mb-10"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
          >
            El equipo
          </h2>
          {equipo.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {equipo.map((m) => (
                <div
                  key={m.nombre}
                  className="rounded-2xl p-7 text-center"
                  style={{
                    background: "#0f0f0f",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {m.foto_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.foto_url}
                      alt={m.nombre}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                  ) : (
                    <div
                      className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, #0076C4 0%, #6B3890 100%)",
                      }}
                    >
                      {m.nombre.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-white font-bold mb-1">{m.nombre}</h3>
                  <p
                    className="mb-3 text-sm font-medium"
                    style={{ color: "#0076C4" }}
                  >
                    {m.cargo}
                  </p>
                  {m.bio && (
                    <p style={{ fontSize: "13px", color: "#A7AABB", lineHeight: "1.6" }}>
                      {m.bio}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div
              className="text-center py-12 rounded-2xl"
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p style={{ color: "#A7AABB", fontStyle: "italic" }}>
                Próximamente — el equipo está en camino.
              </p>
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/manufactura"
            className="px-6 py-3 font-semibold text-white rounded-xl text-sm text-center transition-opacity hover:opacity-85"
            style={{
              background: "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
            }}
          >
            Ver soluciones para manufactura →
          </Link>
          <Link
            href="/negocios-latinos"
            className="px-6 py-3 font-semibold text-white rounded-xl text-sm text-center transition-opacity hover:opacity-85"
            style={{ background: "#16A34A" }}
          >
            Ver soluciones para negocios →
          </Link>
        </div>
      </div>
    </div>
  );
}
