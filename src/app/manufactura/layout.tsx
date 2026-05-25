import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AiFaqtor Manufactura — Datos e Inteligencia Artificial para Maquiladoras",
  description:
    "Controla tu operación en tiempo real y mejora resultados con datos e inteligencia artificial aplicada. Menos paros, menos scrap y más control en planta.",
};

export default function ManufacturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={
        {
          "--accent": "#0076C4",
          "--accent-secondary": "#6B3890",
          "--accent-gradient": "linear-gradient(90deg, #0076C4 0%, #6B3890 100%)",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
