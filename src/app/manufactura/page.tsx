import NavBarManufactura from "@/components/manufactura/NavBarManufactura";
import HeroSection from "@/components/manufactura/HeroSection";
import SobreNosotrosSection from "@/components/manufactura/SobreNosotrosSection";
import CapacidadesSection from "@/components/manufactura/CapacidadesSection";
import ServiciosTabs from "@/components/manufactura/ServiciosTabs";
import ContactoSection from "@/components/manufactura/ContactoSection";
import FAQSection from "@/components/manufactura/FAQSection";
import ManufacturaFooter from "@/components/manufactura/ManufacturaFooter";
import { getManufacturaServicios, getManufacturaFAQ } from "@/lib/sheets";
import type { ManufacturaServicio, ManufacturaFAQ } from "@/lib/types";

export default async function ManufacturaPage() {
  // Fetch CMS data — graceful fallback if CMS is unavailable
  let servicios: ManufacturaServicio[] = [];
  let faqs: ManufacturaFAQ[] = [];

  try {
    [servicios, faqs] = await Promise.all([
      getManufacturaServicios(),
      getManufacturaFAQ(),
    ]);
  } catch {
    // CMS unavailable — components use their fallback data
    console.warn("CMS unavailable, using fallback data");
  }

  return (
    <>
      <NavBarManufactura />
      <main>
        <HeroSection />
        <SobreNosotrosSection />
        <CapacidadesSection />
        <ServiciosTabs servicios={servicios} />
        <ContactoSection />
        <FAQSection faqs={faqs} />
      </main>
      <ManufacturaFooter />
    </>
  );
}
