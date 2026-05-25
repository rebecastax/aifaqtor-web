import { WA_LINKS } from "@/lib/constants";

export default function NegociosHero() {
  return (
    <section
      className="relative flex items-center"
      style={{
        minHeight: "calc(100vh - 72px)",
        background: "#060606",
        overflow: "hidden",
        padding: "40px 24px",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(22,163,74,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="relative w-full"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        <div style={{ maxWidth: "680px" }}>
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span style={{ color: "#16A34A", fontSize: "14px" }}>✦</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#16A34A",
              }}
            >
              Negocios Latinos · San Diego
            </span>
          </div>

          <h1
            className="text-white font-bold mb-6"
            style={{
              fontSize: "clamp(28px, 4.5vw, 52px)",
              fontWeight: 700,
              lineHeight: "1.15em",
              letterSpacing: "-0.02em",
            }}
          >
            Más control. Más ventas.{" "}
            <span style={{ color: "#16A34A" }}>Menos estrés.</span>
          </h1>

          <p
            className="mb-10"
            style={{
              fontSize: "18px",
              color: "#A7AABB",
              lineHeight: "1.65",
              maxWidth: "520px",
            }}
          >
            Tecnología simple y fácil para tu negocio — sin necesitar saber de
            tecnología.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINKS.negocios}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-semibold text-white transition-opacity hover:opacity-85"
              style={{
                background: "#16A34A",
                borderRadius: "100px",
                padding: "16px 28px",
                fontSize: "15px",
              }}
            >
              💬 Escríbenos por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 font-semibold text-white transition-all"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "100px",
                padding: "16px 28px",
                fontSize: "15px",
              }}
            >
              Ver servicios ↓
            </a>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}
