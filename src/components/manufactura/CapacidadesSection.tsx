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
        textTransform: "uppercase" as const,
        color: "#0076C4",
      }}
    >
      {text}
    </span>
  </div>
);

const Tag = ({ label }: { label: string }) => (
  <span
    className="inline-flex items-center text-xs font-medium transition-all hover:border-[#0076C4] hover:text-[#0076C4] cursor-default"
    style={{
      padding: "5px 12px",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "100px",
      color: "#A7AABB",
      background: "rgba(255,255,255,0.02)",
    }}
  >
    {label}
  </span>
);

const BulletItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-2">
    <span
      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
      style={{ background: "#0076C4" }}
    />
    <span style={{ fontSize: "14px", color: "#A7AABB" }}>{text}</span>
  </li>
);

const DiamondItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-2">
    <span style={{ color: "#0076C4", fontSize: "12px" }}>✦</span>
    <span style={{ fontSize: "14px", color: "#A7AABB" }}>{text}</span>
  </li>
);

// App icons for the Acelerador card
const AppIcons = () => {
  const colors = [
    "#10a37f", // OpenAI green
    "#4285F4", // Google blue
    "#FF6B35", // Claude orange
    "#1DB954", // Spotify green
    "#4A154B", // Slack purple
    "#0052CC", // Jira blue
  ];
  const labels = ["GPT", "GCP", "Ai", "ML", "Data", "API"];
  return (
    <div className="relative mt-4 h-28">
      {/* Semicircle arc */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 110" fill="none">
        <path
          d="M20,105 Q70,20 140,10 Q210,20 260,105"
          stroke="rgba(0,118,196,0.2)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>
      {/* Icons on arc */}
      {colors.map((color, i) => {
        const angle = 180 + (i * 180) / (colors.length - 1);
        const rad = (angle * Math.PI) / 180;
        const cx = 140 + 100 * Math.cos(rad);
        const cy = 105 + 100 * Math.sin(rad) * 0.8;
        return (
          <div
            key={i}
            className="absolute flex items-center justify-center rounded-xl text-xs font-bold text-white"
            style={{
              width: "36px",
              height: "36px",
              left: `${(cx / 280) * 100}%`,
              top: `${(cy / 110) * 100}%`,
              transform: "translate(-50%, -50%)",
              background: color,
              boxShadow: `0 2px 8px ${color}40`,
              fontSize: "9px",
            }}
          >
            {labels[i]}
          </div>
        );
      })}
    </div>
  );
};

export default function CapacidadesSection() {
  return (
    <section
      id="capacidades"
      style={{ background: "#060606", padding: "100px 0" }}
    >
      <div
        style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 24px" }}
      >
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12">
          <SectionLabel text="Nuestras Capacidades" />
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 40px)",
              fontWeight: 600,
              lineHeight: "1.25em",
              letterSpacing: "-0.02em",
              color: "white",
              maxWidth: "640px",
            }}
          >
            Convertimos ineficiencias operativas en{" "}
            <GradientText>ventaja competitiva</GradientText>
          </h2>
        </div>

        {/* Bento grid */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
          }}
        >
          {/* Card 1: Acelerador IA — spans 2 rows */}
          <div
            className="rounded-2xl p-7 flex flex-col"
            style={{
              background: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.06)",
              gridRow: "span 2",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg, #0076C4 0%, #6B3890 100%)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>

            <h3
              className="text-white font-semibold mb-3"
              style={{ fontSize: "18px", lineHeight: "1.3" }}
            >
              Acelerador de Inteligencia Artificial
            </h3>
            <p style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.7", flexGrow: 1 }}>
              Evaluamos procesos, datos y madurez operativa para identificar dónde se pierde dinero, qué iniciativas generan mayor impacto y en qué orden ejecutarlas, con un roadmap claro y un caso de negocio defendible.
            </p>

            <ul className="flex flex-col gap-2 mt-5">
              <DiamondItem text="Diagnóstico" />
              <DiamondItem text="Blueprint" />
            </ul>

            <AppIcons />
          </div>

          {/* Card 2: Datos 360° */}
          <div
            className="rounded-2xl p-7"
            style={{
              background: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(0,118,196,0.12)", border: "1px solid rgba(0,118,196,0.2)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0076C4" strokeWidth="2">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-3" style={{ fontSize: "17px" }}>
              Datos 360°
            </h3>
            <p style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.7", marginBottom: "16px" }}>
              Integramos datos de diferentes áreas para ofrecer una visión operativa confiable compartida y accionable en el día a día.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Ingeniería de Datos",
                "Ingesta ETL / ELT",
                "Tableros en tiempo real",
                "Analítica datos",
                "Gobernanza de datos",
              ].map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>

          {/* Card 3: Manufactura Inteligente (right, spans 2 rows) */}
          <div
            className="rounded-2xl p-7 flex flex-col"
            style={{
              background: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.06)",
              gridRow: "span 2",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(107,56,144,0.12)", border: "1px solid rgba(107,56,144,0.2)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B3890" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-3" style={{ fontSize: "17px" }}>
              Manufactura Inteligente
            </h3>
            <p style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.7" }}>
              Aplicamos analítica avanzada e inteligencia artificial directamente sobre procesos reales para anticipar fallas, reducir pérdidas y mejorar el desempeño operativo.
            </p>
            <ul className="flex flex-col gap-2 mt-5">
              {[
                "Machine Vision",
                "Machine Learning",
                "Algoritmos de clasificación",
                "Algoritmos de predicción",
                "Algoritmos de optimización",
                "Algoritmos de detección",
              ].map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>

            {/* Manufactura image placeholder */}
            <div
              className="mt-6 rounded-xl overflow-hidden flex-1"
              style={{
                minHeight: "120px",
                background: "linear-gradient(135deg, #0a1a2e 0%, #1a0a2e 100%)",
                border: "1px solid rgba(255,255,255,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(107,56,144,0.4)" strokeWidth="1">
                <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
              </svg>
            </div>
          </div>

          {/* Card 4: Operaciones Digitales */}
          <div
            className="rounded-2xl p-7"
            style={{
              background: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(0,118,196,0.08)", border: "1px solid rgba(0,118,196,0.15)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0076C4" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-3" style={{ fontSize: "17px" }}>
              Operaciones Digitales
            </h3>
            <p style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.7", marginBottom: "16px" }}>
              Digitalizamos y estandarizamos procesos críticos que hoy viven en Excel o papel, para lograr una operación repetible, gobernable y menos dependiente de personas clave.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Aplicaciones internas",
                "Automatización de flujos",
                "Estandarización de datos",
              ].map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: single column override */}
        <style>{`
          @media (max-width: 1024px) {
            #capacidades .grid {
              grid-template-columns: 1fr !important;
            }
            #capacidades .grid > div[style*="span 2"] {
              grid-row: span 1 !important;
            }
          }
          @media (max-width: 768px) {
            #capacidades .grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
