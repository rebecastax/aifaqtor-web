export default function ProblemaSection() {
  return (
    <section className="py-20 px-6" style={{ background: "#0f0f0f" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "#A7AABB",
            lineHeight: "1.7",
          }}
        >
          Muchos negocios siguen operando con libretas, Excel, WhatsApp y de
          memoria. Sin visibilidad de lo que vende, sin seguimiento de
          clientes, sin control de lo que entra y sale. El resultado:{" "}
          <span className="text-white font-medium">
            decisiones a ciegas, clientes perdidos y tiempo desperdiciado.
          </span>
        </p>
      </div>
    </section>
  );
}
