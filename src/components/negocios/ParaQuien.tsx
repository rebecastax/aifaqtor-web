import { WA_LINKS, EMAIL } from "@/lib/constants";

const tipos = [
  "Restaurantes",
  "Tiendas",
  "Salones de belleza",
  "Negocios familiares",
  "Servicios profesionales",
  "Emprendedores",
];

export default function ParaQuien() {
  return (
    <>
      <section className="py-16 px-6" style={{ background: "#060606" }}>
        <div
          className="text-center"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          <h2
            className="text-white font-bold mb-8"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600 }}
          >
            ¿Para quién es?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tipos.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(22,163,74,0.08)",
                  border: "1px solid rgba(22,163,74,0.2)",
                  color: "#16A34A",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#0f0f0f" }}>
        <div
          className="text-center"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <h2
            className="text-white font-bold mb-4"
            style={{
              fontSize: "clamp(20px, 2.5vw, 30px)",
              fontWeight: 600,
              lineHeight: "1.3",
            }}
          >
            Agenda una consulta — te explicamos todo sin palabras complicadas.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={WA_LINKS.negociosContacto}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-semibold text-white rounded-xl text-sm transition-opacity hover:opacity-85"
              style={{ background: "#16A34A" }}
            >
              💬 Escríbenos por WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Consulta%20Servicios%20Negocios%20Latinos`}
              className="px-6 py-3 font-semibold text-white rounded-xl text-sm transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              ✉️ Envíanos un correo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
