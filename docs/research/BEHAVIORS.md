# aifaqtor.com — Behaviors Bible

Interacciones, animaciones y comportamientos a replicar pixel-perfect.

## Stack de animación detectado

El original usa **GSAP 3 + ScrollTrigger + SplitText** con un custom `SmoothScroll.js`. Para el clon en Next.js + React, equivalencias modernas:

| Original | Clon Next.js |
|---|---|
| GSAP ScrollTrigger fade-up | Framer Motion `whileInView` |
| GSAP SplitText (letras con stagger) | Framer Motion children stagger |
| Custom SmoothScroll | **Lenis** (`@studio-freight/lenis`) |
| ElementsKit accordion | shadcn `<Accordion>` |
| Magic cursor | **OMITIR** (cursor nativo) |
| Fancy scrollbar | **OMITIR** (scrollbar nativo) |

## Lista de behaviors por sección

### Marquee "Conócenos *" (sección 2)
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  gap: 2rem;
  animation: marquee 20s linear infinite;
  width: max-content;
}
```
- Duplicar el contenido para loop infinito sin saltos
- `Conócenos * Conócenos * Conócenos *` — el asterisco es el separador visual

### Tabs de Servicios (sección 4)
- **Click-driven** (no scroll)
- 3 tabs: Visibilidad & Datos / Escala Operativa / Rentabilidad
- Default: Visibilidad activo
- Transición entre tabs: opacity fade ~300ms
- Cambia: heading, descripción, lista de servicios, GIF lateral
- Activa actual: texto blanco; inactiva: gris `#A7AABB`
- Indicador: línea o pill bg debajo del texto activo

### FAQ Accordion (sección 7)
- shadcn `<Accordion type="single" defaultValue="item-0" collapsible>`
- Pregunta 1 abierta por default
- Una a la vez (no multi)
- Icono + ↔ × al expandir
- Transición altura suave (200-300ms ease-out)

### Animaciones de entrada (todas las secciones con contenido)
Usar `<AnimateIn>` wrapper:
```tsx
import { motion } from 'framer-motion';

export function AnimateIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

### Hover states
- **CTAs (pill buttons):** `scale-105` + leve sombra azul, transition 200ms
- **Cards capacidades:** elevación con sombra azul tenue, border highlight
- **Nav links:** underline animado de izq-der

### Header en scroll (a verificar)
Hipótesis (común en sitios oscuros):
- Posición fija desde scroll > 100px
- Fondo: `rgba(6,6,6,0.85)` con `backdrop-filter: blur(12px)`
- Padding vertical se reduce
- Transición 300ms

Implementar con IntersectionObserver de un sentinel al top, o `useScroll` de Framer Motion.

### Smooth scroll (Lenis setup)
```tsx
// src/components/manufactura-clone/SmoothScroll.tsx
'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return null;
}
```
Incluir en `src/app/manufactura/layout.tsx`.

## Responsive (pendiente sweep)

Original WP+Elementor typically breaks at:
- Desktop: 1024px+
- Tablet: 768-1024px
- Mobile: <768px

Hipótesis para el clon:
- Tabs Servicios mobile → dropdown o stack
- Cards Capacidades 1 col mobile, 2 tablet, 4 desktop
- Hero stack en mobile, side-by-side desktop

**Acción para sesión nueva:** abrir aifaqtor.com en Chrome MCP a 390px y 768px, capturar diferencias, actualizar esta sección.

## Notas sobre el contenido dinámico (CMS)

- **Servicios** y **FAQs** vienen del Google Sheet vía `lib/sheets.ts`
- El clon NO debe hardcodear esos textos en el componente — usar los datos del CMS
- Antes del build, actualizar el Sheet con los textos verbatim de RECON-DOSSIER.md
