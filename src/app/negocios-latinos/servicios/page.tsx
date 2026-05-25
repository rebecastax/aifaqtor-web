import type { Metadata } from "next";
import Link from "next/link";
import { getNegociosServicios } from "@/lib/sheets";
import type { NegocioServicio } from "@/lib/types";
import { WA_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios para Negocios Latinos — AiFaqtor San Diego",
  description:
    "Páginas web, CRM, dashboards y apps para pequeños negocios latinos en San Diego. Tecnología simple, sin complicaciones.",
};

const FALLBACK: NegocioServicio[] = [
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
      "Reportes claros y fáciles de entender",
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
      "Reservaciones o citas",
      "Integración con redes sociales",
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

function ServicioCard({ s }: { s: NegocioServicio }) {
  return (
    <div
      className="rounded-2xl p-7 flex flex-col"
      style={{
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <h3
        className="text-white font-bold mb-1"
        style={{ fontSize: "19px", fontWeight: 700 }}
      >
        {s.titulo}
      </h3>
      <p
        className="mb-5 font-medium"
        style={{ fontSize: "14px", color: "#16A34A" }}
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
            <span style={{ fontSize: "14px", color: "#A7AABB" }}>{b}</span>
          </li>
        ))}
      </ul>
      <p
        className="mt-auto"
        style={{ fontSize: "12px", color: "#A7AABB", opacity: 0.7 }}
      >
        Para: {s.paraQuien}
      </p>
    </div>
  );
}

export default async function NegociosServiciosPage() {
  let servicios: NegocioServicio[] = [];
  try {
    servicios = await getNegociosServicios();
  } catch {
    console.warn("CMS unavailable, usando fallback");
  }
  const displayServicios = servicios.length > 0 ? servicios : FALLBACK;

  return (
    <div
      className="min-h-screen px-6 py-20"
      style={{ background: "#060606" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div className="text-center mb-14">
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
              Negocios Latinos · San Diego
            </span>
          </div>
          <h1
            className="text-white font-bold mb-5"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
            }}
          >
            ¿Cómo podemos{" "}
            <span style={{ color: "#16A34A" }}>ayudarte?</span>
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "#A7AABB",
              lineHeight: "1.7",
              maxWidth: "580px",
              margin: "0 auto",
            }}
          >
            Tecnología simple, sin palabras complicadas, para que tu negocio
            crezca con más control y menos estrés.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {displayServicios.map((s) => (
            <ServicioCard key={s.id} s={s} />
          ))}
        </div>

        {/* Formas de trabajar recap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {[
            {
              titulo: "Pago Único",
              desc: "Te entregamos el proyecto terminado. El proyecto es completamente tuyo.",
              ideal: "Ya tienes quien te dé soporte o solo necesitas el desarrollo inicial.",
            },
            {
              titulo: "Suscripción Mensual",
              desc: "Nos encargamos de todo: soporte, actualizaciones, monitoreo y seguridad.",
              ideal: "No quieres preocuparte por la tecnología y necesitas ayuda continua.",
            },
          ].map((op) => (
            <div
              key={op.titulo}
              className="rounded-2xl p-7"
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(22,163,74,0.2)",
              }}
            >
              <h3
                className="text-white font-bold mb-2"
                style={{ fontSize: "18px" }}
              >
                {op.titulo}
              </h3>
              <p
                className="mb-3"
                style={{ fontSize: "14px", color: "#A7AABB", lineHeight: "1.7" }}
              >
                {op.desc}
              </p>
              <p style={{ fontSize: "13px", color: "#A7AABB" }}>
                <span style={{ color: "#16A34A", fontWeight: 600 }}>
                  Ideal si:{" "}
                </span>
                {op.ideal}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(22,163,74,0.2)",
          }}
        >
          <h2
            className="text-white font-bold mb-3"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
          >
            Agenda una consulta — sin costo, sin compromiso
          </h2>
          <p
            className="mb-8"
            style={{
              color: "#A7AABB",
              fontSize: "16px",
              maxWidth: "460px",
              margin: "0 auto 2rem",
            }}
          >
            Te explicamos qué necesita tu negocio y cuánto costaría. En 15 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINKS.negociosContacto}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 font-semibold text-white rounded-xl text-sm text-center transition-opacity hover:opacity-85"
              style={{ background: "#16A34A" }}
            >
              💬 Escríbenos por WhatsApp
            </a>
            <Link
              href="/negocios-latinos/contacto"
              className="px-8 py-3.5 font-semibold text-white rounded-xl text-sm text-center transition-all hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Enviar mensaje →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
