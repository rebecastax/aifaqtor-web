import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center"
      style={{
        minHeight: "calc(100vh - 72px)",
        paddingTop: "40px",
        background: "#060606",
        overflow: "hidden",
      }}
    >
      {/* Background subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,118,196,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,118,196,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="relative w-full flex flex-col lg:flex-row items-center gap-12 px-6 py-16"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-7 z-10">
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 600,
              lineHeight: "1.2em",
              letterSpacing: "-0.02em",
              maxWidth: "640px",
            }}
          >
            Controla tu operación en tiempo real y mejora resultados con datos e{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              inteligencia artificial aplicada
            </span>
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#A7AABB",
              lineHeight: "1.7em",
              maxWidth: "520px",
            }}
          >
            Menos paros, menos scrap y más control en planta. Te ayudamos a ver
            lo que realmente pasa en tu operación y habilitar soluciones
            diseñadas para optimizar el desempeño de tus procesos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            {/* Primary CTA */}
            <Link
              href="/manufactura#contacto"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-85"
              style={{
                background:
                  "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
                borderRadius: "100px",
                padding: "16px 28px",
                alignSelf: "flex-start",
              }}
            >
              Iniciar diagnóstico
            </Link>

            {/* Ghost CTA */}
            <Link
              href="/manufactura#servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all hover:border-[#0076C4] hover:text-[#0076C4]"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "100px",
                padding: "16px 28px",
                alignSelf: "flex-start",
              }}
            >
              Ver Servicios
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right: Visual */}
        <div
          className="flex-1 w-full relative"
          style={{ minHeight: "420px", maxWidth: "600px" }}
        >
          {/* Main visual card — manufacturing dashboard placeholder */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #1a0a28 100%)",
              border: "1px solid rgba(0,118,196,0.2)",
            }}
          >
            {/* Dashboard mockup header */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div
                className="flex-1 h-6 rounded"
                style={{ background: "rgba(255,255,255,0.05)" }}
              />
            </div>

            {/* Dashboard mockup body */}
            <div className="p-6 grid grid-cols-2 gap-4">
              {/* KPI card */}
              <div
                className="col-span-2 rounded-xl p-5"
                style={{ background: "rgba(0,118,196,0.08)", border: "1px solid rgba(0,118,196,0.15)" }}
              >
                <div className="text-xs font-medium mb-2" style={{ color: "#0076C4" }}>
                  OEE General de Planta
                </div>
                <div className="text-4xl font-bold text-white mb-1">84.7%</div>
                <div className="text-xs" style={{ color: "#A7AABB" }}>
                  ↑ +2.3% vs semana pasada
                </div>
                {/* Mini chart bars */}
                <div className="flex items-end gap-1 mt-4 h-12">
                  {[60, 75, 68, 82, 78, 85, 80, 90, 84, 88, 82, 87].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background:
                            i === 11
                              ? "linear-gradient(180deg, #0076C4, #6B3890)"
                              : "rgba(0,118,196,0.3)",
                        }}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Small KPI 1 */}
              <div
                className="rounded-xl p-4"
                style={{ background: "rgba(107,56,144,0.08)", border: "1px solid rgba(107,56,144,0.15)" }}
              >
                <div className="text-xs mb-2" style={{ color: "#6B3890" }}>
                  Paros no planeados
                </div>
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-xs mt-1" style={{ color: "#A7AABB" }}>
                  ↓ -40% este turno
                </div>
              </div>

              {/* Small KPI 2 */}
              <div
                className="rounded-xl p-4"
                style={{ background: "rgba(0,118,196,0.06)", border: "1px solid rgba(0,118,196,0.12)" }}
              >
                <div className="text-xs mb-2" style={{ color: "#0076C4" }}>
                  Scrap rate
                </div>
                <div className="text-2xl font-bold text-white">1.2%</div>
                <div className="text-xs mt-1" style={{ color: "#A7AABB" }}>
                  Meta: &lt;2.0%
                </div>
              </div>
            </div>

            {/* Gradient overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,6,6,0.8), transparent)",
              }}
            />
          </div>

          {/* Glow effect */}
          <div
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(107,56,144,0.15) 0%, transparent 70%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
