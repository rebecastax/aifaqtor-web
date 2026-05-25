import type { NegocioServicio } from "@/lib/types";

interface Props {
  servicios: NegocioServicio[];
}

// Fallback data if CMS is unavailable
const fallbackServicios: NegocioServicio[] = [
  {
    id: 1,
    titulo: "Dashboards y Análisis de Datos",
    subheadline: "Entiende qué está pasando en tu negocio",
    beneficios: [
      "Ver cuáles clientes te compran más",
      "Saber cuáles productos venden mejor",
      "Identificar días y temporadas con más ventas",
      "Control de ingresos y gastos",
      "Flujo de efectivo automático",
    ],
    paraQuien: "Restaurantes · Tiendas · Salones de belleza · Negocios familiares",
    orden: 1,
    activo: true,
  },
  {
    id: 2,
    titulo: "CRM y Organización de Clientes",
    subheadline: "¿Pierdes clientes porque se te olvidó dar seguimiento?",
    beneficios: [
      "Información de clientes guardada y organizada",
      "Recordatorios automáticos de seguimiento",
      "Historial de compras por cliente",
      "Agenda y citas integradas",
      "Contacto rápido desde un solo lugar",
    ],
    paraQuien: "Servicios profesionales · Clínicas · Consultores",
    orden: 2,
    activo: true,
  },
  {
    id: 3,
    titulo: "Páginas Web Profesionales",
    subheadline: "Tu negocio necesita presencia en internet",
    beneficios: [
      "Información de tu negocio",
      "Fotos y servicios",
      "Botón de WhatsApp directo",
      "Formulario de contacto",
      "Ubicación y horarios",
      "Catálogo de productos",
    ],
    paraQuien: "Todos los tipos de negocio",
    orden: 3,
    activo: true,
  },
  {
    id: 4,
    titulo: "Apps y Sistemas Personalizados",
    subheadline: "¿Quieres algo más avanzado?",
    beneficios: [
      "Apps móviles para tu negocio",
      "Sistemas internos a tu medida",
      "Plataformas para clientes",
      "Automatización de procesos",
      "Herramientas personalizadas",
    ],
    paraQuien: "Emprendedores · Negocios en crecimiento",
    orden: 4,
    activo: true,
  },
];

export default function ServiciosBlocks({ servicios }: Props) {
  const displayServicios = servicios.length > 0 ? servicios : fallbackServicios;

  return (
    <section
      id="servicios"
      className="py-20 px-6"
      style={{ background: "#060606" }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
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
              Nuestros Servicios
            </span>
          </div>
          <h2
            className="text-white font-bold"
            style={{
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            ¿Cómo podemos ayudarte?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {displayServicios.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl p-7"
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3
                className="text-white font-semibold mb-1"
                style={{ fontSize: "18px" }}
              >
                {s.titulo}
              </h3>
              <p
                className="mb-5"
                style={{ fontSize: "14px", color: "#16A34A", fontWeight: 500 }}
              >
                {s.subheadline}
              </p>
              <ul className="flex flex-col gap-2.5 mb-5">
                {s.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "#16A34A", fontSize: "14px" }}
                    >
                      ✓
                    </span>
                    <span style={{ fontSize: "14px", color: "#A7AABB" }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: "12px", color: "#A7AABB", opacity: 0.7 }}>
                Para: {s.paraQuien}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
