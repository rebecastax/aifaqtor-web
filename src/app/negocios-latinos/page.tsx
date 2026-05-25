import type { Metadata } from "next";
import NegociosHero from "@/components/negocios/NegociosHero";
import ProblemaSection from "@/components/negocios/ProblemaSection";
import ServiciosBlocks from "@/components/negocios/ServiciosBlocks";
import FormasTrabajar from "@/components/negocios/FormasTrabajar";
import ParaQuien from "@/components/negocios/ParaQuien";
import { getNegociosServicios } from "@/lib/sheets";
import type { NegocioServicio } from "@/lib/types";

export const metadata: Metadata = {
  title: "AiFaqtor — Tecnología Simple para Negocios Latinos en San Diego",
  description:
    "Páginas web, CRM y dashboards para pequeños negocios latinos en San Diego. Sin complicaciones. Escríbenos por WhatsApp.",
};

export default async function NegociosLatinosPage() {
  let servicios: NegocioServicio[] = [];
  try {
    servicios = await getNegociosServicios();
  } catch {
    console.warn("CMS unavailable, using fallback data");
  }

  return (
    <>
      <NegociosHero />
      <ProblemaSection />
      <ServiciosBlocks servicios={servicios} />
      <FormasTrabajar />
      <ParaQuien />
    </>
  );
}
