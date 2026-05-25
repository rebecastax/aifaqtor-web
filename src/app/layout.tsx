import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AiFaqtor — IA y Tecnología para Industria y Negocios",
  description:
    "Soluciones de inteligencia artificial para maquiladoras en México y servicios digitales para pequeños negocios latinos en San Diego.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aifaqtor.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${sora.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#060606] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
