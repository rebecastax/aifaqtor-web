import HeroSection from "@/components/manufactura/HeroSection";
import SobreNosotrosSection from "@/components/manufactura/SobreNosotrosSection";
import CapacidadesSection from "@/components/manufactura/CapacidadesSection";
import ServiciosTabs from "@/components/manufactura/ServiciosTabs";
import ContactoSection from "@/components/manufactura/ContactoSection";
import FAQSection from "@/components/manufactura/FAQSection";
import { getManufacturaServicios, getManufacturaFAQ } from "@/lib/sheets";
import type { ManufacturaServicio, ManufacturaFAQ } from "@/lib/types";

// NavBarManufactura y ManufacturaFooter removidos — Header/Footer global en layout.tsx

export default async function ManufacturaPage() {
  let servicios: ManufacturaServicio[] = [];
  let faqs: ManufacturaFAQ[] = [];

  try {
    [servicios, faqs] = await Promise.all([
      getManufacturaServicios(),
      getManufacturaFAQ(),
    ]);
  } catch {
    console.warn("CMS unavailable, using fallback data");
  }

  return (
    <>
      <HeroSection />
      <SobreNosotrosSection />
      <CapacidadesSection />
      <ServiciosTabs servicios={servicios} />
      <ContactoSection />
      <FAQSection faqs={faqs} />
    </>
  );
}
