import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/clone/SectionWrapper";
import Eyebrow from "@/components/clone/Eyebrow";
import AnimateIn from "@/components/clone/AnimateIn";

const casos = [
  {
    titulo: "VoxIQ Voice Analytics Tool",
    categorias: ["Automation", "Voice AI"],
    img: "/images/aifaqtor/project-1.jpg",
  },
  {
    titulo: "InsightEdge Sales Predictor",
    categorias: ["AI-Generated", "Data Science"],
    img: "/images/aifaqtor/project-2.jpg",
  },
  {
    titulo: "AutoBot Smart Chat Assistant",
    categorias: ["Conversational AI"],
    img: "/images/aifaqtor/project-3.jpg",
  },
  {
    titulo: "DocuSort Legal Doc Classifier",
    categorias: ["Automation"],
    img: "/images/aifaqtor/project-4.jpg",
  },
];

export default function CasosExito() {
  return (
    <SectionWrapper id="casos" className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
        <div className="lg:col-span-7">
          <AnimateIn>
            <Eyebrow>Casos de Éxito</Eyebrow>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2
              className="mt-4 text-white font-semibold"
              style={{
                fontSize: "clamp(28px, 3.4vw, 44px)",
                lineHeight: 1.2,
              }}
            >
              Problemas resueltos con
              <br />
              <span className="ai-gradient-text">
                Ai · Datos · Automatizaciones
              </span>
            </h2>
          </AnimateIn>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {casos.map((c, i) => (
          <AnimateIn key={c.titulo} delay={0.05 * i}>
            <article className="group relative h-full rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] hover:border-[#0076C4]/50 transition-all duration-300">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#0076C4] group-hover:border-[#0076C4] transition-colors">
                  <ArrowUpRight size={18} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {c.categorias.map((cat) => (
                      <span
                        key={cat}
                        className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-semibold text-[17px] leading-tight">
                    {c.titulo}
                  </h3>
                </div>
              </div>
            </article>
          </AnimateIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
