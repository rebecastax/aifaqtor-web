# aifaqtor.com — Page Topology

**Target route en este proyecto:** `/manufactura` (el sitio actual de aifaqtor.com ES la unidad manufactura)
**URL original:** https://aifaqtor.com/
**Stack original:** WordPress + Elementor
**Altura total:** 7147px (single-page con scroll)
**Tipografía:** Sora (Google Font), única familia en todo el sitio
**Paleta detectada:**
- Negro fondo: `#060606` (rgb 6,6,6)
- Blanco: `#FFFFFF`
- Azul AiFaqtor primario: `#0076C4` (rgb 0,118,196)
- Gris texto secundario: `#A7AABB` (rgb 167,170,187)
- Gris claro: `#BDBDBD` (rgb 189,189,189)
- Rojo error: `#E65757` (rgb 230,87,87)
- Gris dark UI: `#31 36 36`, `#23 28 2D`
- Blanco semi: `rgba(255,255,255,0.06)` (cards glassmorphism)

## Topología (top→bottom)

| # | Sección | Top (px) | Alto (px) | Descripción |
|---|---|---|---|---|
| 0 | Header / NavBar | 40 | 130 | Logo + nav (Inicio, Servicios, Contacto) + CTA "Iniciar diagnóstico" |
| 1 | Hero | 210 | 889 | H1: "Controla tu operación en tiempo real..." + subtítulo "Menos paros, menos scrap y más control en planta" + imagen Hero-2.png |
| 2 | Sobre Nosotros | 1099 | 986 | Marquee horizontal "Conócenos *" + título SOBRE NOSOTROS + texto "Reimagina tu operación con IA..." |
| 3 | Nuestras Capacidades | 2085 | 1119 | Tagline "Convertimos ineficiencias operativas en ventaja competitiva" + "Acelerador de Inteligencia Artificial" + 3 cards (Visibilidad/Escala/Rentabilidad) |
| 4 | Nuestros Servicios | 3204 | 1055 | Tabs por grupo: Visibilidad / Escala / Rentabilidad — cards de servicios por grupo |
| 5 | Casos de Éxito | (hidden) | 0 | **NOTA: h:0 — probablemente swiper/carousel oculto o accordion**. Contenido: "VoxIQ Voice Analytics Tool" — investigar interaction model |
| 6 | Hablemos (Formulario) | 4260 | 984 | "HABLEMOS — Estamos a un mensaje de conectar" + hola@aifaqtor.com + (55) 2936 45 24 + form (Nombre, Empresa, WhatsApp, Email, Busco soluciones para...) |
| 7 | FAQ + CTA Final | 5244 | 1038 | "Iniciemos la conversación" + tel + "PREGUNTAS FRECUENTES" (acordeón de preguntas) |

**Pendiente verificar:**
- Footer (después de container 7, hasta los 7147px hay ~865px sin mapear → footer)
- Container 5 (Casos de Éxito) está colapsado — ver si es slider o accordion

## Interacciones detectadas (preliminar — ampliar en BEHAVIORS.md)

- **Sección 2 — Marquee "Conócenos"**: animación continua de texto
- **Sección 4 — Servicios**: tabs Visibilidad/Escala/Rentabilidad (click-driven, cambian las cards)
- **Sección 5 — Casos de Éxito**: oculto, posible carousel
- **Sección 7 — FAQ**: acordeón (expand/collapse)
- **Header**: posible cambio en scroll (verificar)
- **Hover states**: en botones, cards de servicios, links de nav

## Assets clave detectados

- `Logo1-1.png` (216x230) — logo cuadrado
- `LOGO-COMPLETO.png` (216x76) — logo horizontal del nav
- `icono-COMPLETO.png` — favicon
- `Hero-2.png` — background del hero
- `circle-arrow-white.svg` — icono flecha en círculo (usado en CTAs)
- `footer-bg-img.png` — background del footer

Total imágenes detectadas: 35

## Mecánicas de interacción a investigar (sweep)

1. ¿El header cambia en scroll? (background, tamaño, shadow)
2. Tabs de Servicios — ¿click o scroll driven?
3. Cards "Visibilidad/Escala/Rentabilidad" — ¿hover effects?
4. Casos de Éxito — ¿slider con autoplay o navegación manual?
5. FAQ — ¿uno solo abierto a la vez (accordion) o multi-open?
6. Animaciones de entrada al scroll (fade-up, etc.)
7. ¿Hay smooth scroll library (Lenis)?

## Responsive

Pendiente: capturar a 768px (tablet) y 390px (mobile) y documentar qué cambia.
