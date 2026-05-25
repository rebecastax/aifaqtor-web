import { WA_LINKS, EMAIL } from "@/lib/constants";

export default function QuienesSomos() {
  return (
    <>
      <section className="py-20 px-6" style={{ background: "#0f0f0f" }}>
        <div
          className="max-w-3xl mx-auto text-center"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          <p
            style={{ fontSize: "18px", color: "#A7AABB", lineHeight: "1.7" }}
          >
            AiFaqtor implementa tecnología con propósito. Dos unidades
            especializadas,{" "}
            <span className="text-white font-medium">
              mismo equipo, mismo compromiso con resultados medibles.
            </span>
          </p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#060606" }}>
        <div
          className="mx-auto text-center"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <h2
            className="text-white font-bold mb-4"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600 }}
          >
            ¿No sabes por dónde empezar?
          </h2>
          <p
            style={{ fontSize: "16px", color: "#A7AABB", marginBottom: "32px" }}
          >
            Escríbenos — te orientamos en 15 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINKS.home}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-medium text-white rounded-xl transition-opacity hover:opacity-85 text-sm"
              style={{ background: "#16A34A" }}
            >
              💬 WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="px-6 py-3 font-medium text-white rounded-xl transition-all text-sm"
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
