import Hero from "@/components/manufactura-clone/Hero";
import SobreNosotros from "@/components/manufactura-clone/SobreNosotros";
import Capacidades from "@/components/manufactura-clone/Capacidades";
import Servicios from "@/components/manufactura-clone/Servicios";
import ContactoForm from "@/components/manufactura-clone/ContactoForm";
import Faq from "@/components/manufactura-clone/Faq";
import { getManufacturaServicios, getManufacturaFAQ } from "@/lib/sheets";
import type { ManufacturaServicio, ManufacturaFAQ } from "@/lib/types";

export default async function ManufacturaPage() {
  let servicios: ManufacturaServicio[] = [];
  let faqs: ManufacturaFAQ[] = [];

  try {
    [servicios, faqs] = await Promise.all([
      getManufacturaServicios(),
      getManufacturaFAQ(),
    ]);
  } catch {
    console.warn("CMS unavailable, using empty fallback");
  }

  return (
    <>
      <Hero />
      <SobreNosotros />
      <Capacidades />
      <Servicios servicios={servicios} />
      <ContactoForm />
      <Faq faqs={faqs} />
    </>
  );
}
