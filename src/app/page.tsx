import type { Metadata } from "next";
import HeroBifurcadora from "@/components/home/HeroBifurcadora";
import QuienesSomos from "@/components/home/QuienesSomos";

export const metadata: Metadata = {
  title: "AiFaqtor — IA y Tecnología para Industria y Negocios",
  description:
    "Soluciones de inteligencia artificial para maquiladoras en México y servicios digitales para pequeños negocios latinos en San Diego.",
};

export default function HomePage() {
  return (
    <>
      <HeroBifurcadora />
      <QuienesSomos />
    </>
  );
}
