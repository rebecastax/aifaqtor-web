const opciones = [
  {
    titulo: "Pago Único",
    descripcion:
      "Te entregamos el proyecto terminado: página web, app, sistema o dashboard. El proyecto es completamente tuyo.",
    ideal:
      "Ya tienes quien te dé soporte, o solo necesitas el desarrollo inicial.",
    color: "#16A34A",
  },
  {
    titulo: "Suscripción Mensual",
    descripcion:
      "Nos encargamos de soporte, actualizaciones, cambios pequeños, monitoreo y seguridad. Siempre disponibles cuando nos necesites.",
    ideal:
      "No quieres preocuparte por la tecnología y necesitas ayuda continua.",
    color: "#16A34A",
  },
];

export default function FormasTrabajar() {
  return (
    <section className="py-20 px-6" style={{ background: "#0f0f0f" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2
          className="text-white font-bold mb-10 text-center"
          style={{ fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 600 }}
        >
          Dos formas de trabajar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {opciones.map((op) => (
            <div
              key={op.titulo}
              className="rounded-2xl p-8"
              style={{
                background: "#060606",
                border: "1px solid rgba(22,163,74,0.25)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(22,163,74,0.1)",
                  border: "1px solid rgba(22,163,74,0.2)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#16A34A"
                  strokeWidth="2"
                >
                  {op.titulo === "Pago Único" ? (
                    <>
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </>
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="12 7 12 12 15 15" />
                    </>
                  )}
                </svg>
              </div>
              <h3
                className="text-white font-bold mb-3"
                style={{ fontSize: "20px" }}
              >
                {op.titulo}
              </h3>
              <p
                className="mb-4"
                style={{ fontSize: "15px", color: "#A7AABB", lineHeight: "1.7" }}
              >
                {op.descripcion}
              </p>
              <p style={{ fontSize: "14px", color: "#A7AABB" }}>
                <span style={{ color: "#16A34A", fontWeight: 600 }}>
                  Ideal si:{" "}
                </span>
                {op.ideal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
