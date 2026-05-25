import Link from "next/link";

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

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
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
      {text}
    </span>
  </div>
);

const features = [
  "Implementacion incremental, sin detener la operación",
  "Evolución por etapas: visibilidad → control → optimización",
  "Impacto medible en productividad",
  "Adopción real en piso",
  "Maximizar el retorno medible de la inversión",
];

export default function SobreNosotrosSection() {
  return (
    <section
      id="nosotros"
      className="relative"
      style={{ background: "#060606", padding: "100px 0" }}
    >
      <div
        className="ai-container flex flex-col lg:flex-row gap-16 items-center"
        style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}
      >
        {/* Left: Visual */}
        <div className="flex-shrink-0 relative" style={{ width: "420px", maxWidth: "100%" }}>
          {/* Top image — logo card */}
          <div
            className="relative rounded-2xl overflow-hidden mb-4"
            style={{
              height: "200px",
              background: "linear-gradient(135deg, #0d1a2e 0%, #1a0d28 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl"
                style={{
                  background: "linear-gradient(135deg, #0076C4 0%, #6B3890 100%)",
                }}
              >
                Ai
              </div>
            </div>
            {/* Glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(107,56,144,0.2) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Bottom image — abstract waves */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              height: "260px",
              background:
                "linear-gradient(135deg, #0a1628 0%, #12063a 50%, #0a1628 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Wave lines */}
            <svg
              className="w-full h-full"
              viewBox="0 0 400 260"
              preserveAspectRatio="xMidYMid slice"
            >
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <path
                  key={i}
                  d={`M-50,${100 + i * 25} Q100,${60 + i * 20} 200,${100 + i * 15} T450,${90 + i * 20}`}
                  fill="none"
                  stroke={i % 2 === 0 ? "#0076C4" : "#6B3890"}
                  strokeWidth="1"
                  strokeOpacity={0.3 - i * 0.04}
                />
              ))}
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6B3890" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#060606" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx="200" cy="130" rx="180" ry="120" fill="url(#glow)" />
            </svg>
          </div>

          {/* Rotating circular badge */}
          <div className="absolute -bottom-4 -left-4 w-[88px] h-[88px]">
            <div
              className="w-full h-full rounded-full flex items-center justify-center relative"
              style={{
                background: "linear-gradient(135deg, #0076C4 0%, #6B3890 100%)",
              }}
            >
              {/* Rotating text */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 88 88"
                style={{ animation: "rotate-badge 12s linear infinite" }}
              >
                <defs>
                  <path
                    id="circle-path"
                    d="M44,44 m-32,0 a32,32 0 1,1 64,0 a32,32 0 1,1 -64,0"
                  />
                </defs>
                <text
                  fontSize="7.5"
                  fill="white"
                  fontWeight="600"
                  letterSpacing="2"
                >
                  <textPath href="#circle-path">
                    Conócenos • Conócenos • Conócenos •
                  </textPath>
                </text>
              </svg>
              {/* Arrow icon center */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>

          <style>{`
            @keyframes rotate-badge {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>

        {/* Right: Text */}
        <div className="flex-1 flex flex-col gap-8">
          <SectionLabel text="Sobre Nosotros" />

          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 40px)",
              fontWeight: 600,
              lineHeight: "1.25em",
              letterSpacing: "-0.02em",
              color: "white",
            }}
          >
            Reimagina tu operación con IA diseñada para maximizar el{" "}
            <GradientText>desempeño de tu equipo.</GradientText>
          </h2>

          {/* Feature boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "rgba(0,118,196,0.1)", border: "1px solid rgba(0,118,196,0.2)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0076C4" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Soluciones a la medida</h3>
              <p style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.6" }}>
                Desarrollamos soluciones basadas en tus procesos reales, datos de planta y nivel actual de madurez operativa.
              </p>
            </div>

            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "rgba(107,56,144,0.1)", border: "1px solid rgba(107,56,144,0.2)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B3890" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Acompañamiento de punta a punta</h3>
              <p style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.6" }}>
                Desde el diagnóstico hasta la adopción en piso, trabajamos como un socio operativo y técnico.
              </p>
            </div>
          </div>

          {/* Feature list */}
          <ul className="flex flex-col gap-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: "#0076C4", flexShrink: 0, marginTop: "2px", fontSize: "14px" }}>✦</span>
                <span style={{ fontSize: "15px", color: "#A7AABB", lineHeight: "1.5" }}>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div>
            <Link
              href="/manufactura#servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "100px",
                padding: "14px 24px",
              }}
            >
              Conocer más
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
