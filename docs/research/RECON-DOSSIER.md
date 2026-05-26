# aifaqtor.com — Dossier de Reconocimiento

**Generado:** 2026-05-25
**Para:** sesión nueva (build pixel-perfect del /manufactura)
**Skill aplicado:** clone-website (fase 1: recon)

---

## 🎯 Objetivo del build

Reemplazar el contenido actual de `/manufactura` en este proyecto con un clon pixel-perfect de **https://aifaqtor.com**. El sitio original ES la unidad manufactura — toda la página actual del dominio debe vivir bajo `/manufactura` en la nueva arquitectura.

**Conservar:**
- Integración con CMS (`src/lib/sheets.ts`) — los servicios y FAQ del clon deben leer del Sheet, no estar hardcoded
- Conexión con `/api/lead` para el formulario
- Header/Footer compartidos del proyecto (no son los de aifaqtor.com original, sino los del shell multi-unidad)

**Borrar / Reemplazar:**
- `src/app/manufactura/page.tsx` y `src/app/manufactura/servicios/page.tsx` (el clon malo anterior)
- Todos los componentes de `src/components/manufactura/*` (HeroSection, CapacidadesSection, ServiciosTabs, FAQSection, ContactoSection, SobreNosotrosSection, ManufacturaFooter, NavBarManufactura)
- Crear desde cero con base en las specs de este dossier

---

## 🧬 Stack original detectado

| Capa | Tecnología |
|---|---|
| CMS | WordPress (theme: `nextmind`) |
| Page builder | Elementor + ElementsKit |
| Animaciones | GSAP + ScrollTrigger + SplitText |
| Smooth scroll | Custom `SmoothScroll.js` (NO Lenis) |
| Cursor | `magiccursor.js` (custom — **SKIP en el clon**) |
| Scrollbar | `fancy-scrollbar` (custom — **SKIP en el clon**) |
| Form | Contact Form 7 (CF7) |
| Acordeón | ElementsKit accordion (`.elementskit-card`) |

**Equivalencias modernas para el clon (Next.js):**
- Smooth scroll → **Lenis** (`@studio-freight/lenis`)
- Animaciones de entrada → **Framer Motion** o GSAP (Framer es más natural en React)
- Animaciones de scroll-trigger → Framer Motion `whileInView` o IntersectionObserver
- Magic cursor → omitir (cursor nativo)
- Acordeón → shadcn `<Accordion>` (Radix bajo el capó)

---

## 🎨 Design Tokens (extraídos de getComputedStyle)

### Tipografía
- **Familia única:** `Sora, sans-serif` (todo el sitio)
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap`
- **H1 hero:** `56px`, weight `600`, line-height `67.2px` (ratio 1.2)
- **H2 section title:** ~`32-40px` weight `600` (eyebrow text uppercase `12-14px`)
- **Body:** `16px`, line-height `25.6px` (ratio 1.6), color `#A7AABB`
- **Tracking:** normal

### Colores

```css
--bg-black: #060606;        /* rgb(6,6,6) — fondo principal */
--bg-card: rgba(255,255,255,0.06); /* glassmorphism cards */
--bg-dark-1: #31 36 36;     /* rgb(49,54,54) — sección secundaria */
--bg-dark-2: #23 28 2D;     /* rgb(35,40,45) */
--text-primary: #FFFFFF;
--text-secondary: #A7AABB;  /* rgb(167,170,187) — gris azulado */
--text-muted: #BDBDBD;
--brand-blue: #0076C4;      /* rgb(0,118,196) — azul AiFaqtor */
--error-red: #E65757;       /* rgb(230,87,87) */
```

### Otros
- **Border radius CTAs:** `100px` (pill buttons)
- **Padding CTAs:** `16px 24px`
- **Color CTA secundario:** white bg, blue text — invertido del CTA primario
- **Padding lateral página:** `0px 20px` con `max-width: 1626px` desktop (~1632 viewport)

---

## 📐 Topología de la página (8 contenedores top-level)

| # | Sección | Top (px) | Alto (px) | Notas |
|---|---|---|---|---|
| 0 | Header / NavBar | 40 | 130 | Logo + nav + CTA "Iniciar diagnóstico" |
| 1 | Hero | 210 | 889 | H1 grande + sub + 2 CTAs + imagen hero |
| 2 | Sobre Nosotros | 1099 | 986 | Marquee "Conócenos *" + 4 puntos clave |
| 3 | Nuestras Capacidades | 2085 | 1119 | 4 cards: Acelerador IA, Datos 360°, Operaciones Digitales, Manufactura Inteligente |
| 4 | Nuestros Servicios | 3204 | 1055 | Tabs Visibilidad/Escala/Rentabilidad con cards |
| 5 | Casos de Éxito | hidden (h=0) | — | Slider oculto — VoxIQ Voice Analytics. **Pendiente investigar** |
| 6 | Hablemos (Form) | 4260 | 984 | Formulario CF7 + datos de contacto |
| 7 | FAQ + CTA Final | 5244 | 1038 | 4 preguntas en acordeón + tel + título |

**Altura total:** 7147px. Después del container 7 hay ~865px que debe ser el footer (no usa `<footer>` semántico).

---

## 📝 Contenido verbatim por sección

### Sección 0 — Header
**Nav:**
- Inicio
- Servicios
- Contacto

**CTAs (en orden):**
1. Botón con X (X = Twitter icon, link a perfil social) — bg blanco, color azul
2. "Iniciar diagnóstico" — bg blanco, color azul, `padding: 16px 24px`, `border-radius: 100px`

**Logo:** `LOGO-COMPLETO.png` (216x76, mostrado a 188px ancho)

---

### Sección 1 — Hero
**H1 (56px, white, weight 600):**
> Controla tu operación en tiempo real y mejora resultados con datos e inteligencia artificial aplicada

**Subtítulo (16px, #A7AABB):**
> Menos paros, menos scrap y más control en planta. Te ayudamos a ver lo que realmente pasa en tu operación y habilitar soluciones diseñadas para optimizar el desempeño de tus procesos.

**CTAs:**
1. **Iniciar diagnóstico** (primario — azul/blanco)
2. **Ver Servicios** (secundario — outline blanco)
3. **Watch Video** (link inline con play icon)

**Imagen hero:** `hero-image-2.jpg` (foto) + posible overlay `Hero-2.png` (PNG con UI mockup encima)

---

### Sección 2 — Sobre Nosotros

**Marquee superior (animación continua infinita):**
> Conócenos * Conócenos * Conócenos * Conócenos *

**Eyebrow:** `SOBRE NOSOTROS`

**Heading:**
> Reimagina tu operación con IA diseñada para maximizar el desempeño de tu equipo.

**4 puntos clave (lista vertical con íconos):**
1. **Soluciones a la medida** — Desarrollamos soluciones basadas en tus procesos reales, datos de planta y nivel actual de madurez operativa.
2. **Acompañamiento de punta a punta** — Desde el diagnóstico hasta la adopción en piso, trabajamos como un socio operativo y técnico.
3. **Implementación incremental, sin detener la operación** — Evolución por etapas: visibilidad → control → optimización
4. **Impacto medible en productividad** — Adopción real en piso → Maximizar el retorno medible de la inversión

**CTA:** "Conocer más"
**Imagen:** `about-us-image.jpg`

---

### Sección 3 — Nuestras Capacidades

**Eyebrow:** `NUESTRAS CAPACIDADES`

**Heading (multi-línea, con keyword destacado en azul):**
> Convertimos ineficiencias\noperativas en **ventaja competitiva**

**4 capacidades (cards):**

**1. Acelerador de Inteligencia Artificial**
> Evaluamos procesos, datos y madurez operativa para identificar dónde se pierde dinero, qué iniciativas generan mayor impacto y en qué orden ejecutarlas, con un roadmap claro y un caso de negocio defendible.
- Sub-items: Diagnóstico · Blueprint

**2. Datos 360°**
> Integramos datos de diferentes áreas para ofrecer una visión operativa confiable, compartida y accionable en el día a día.
- Sub-items: Ingeniería de Datos · Ingesta de datos ETL/ELT · Tableros dinámicos en tiempo real · Analítica de datos · Gobernanza de datos

**3. Operaciones Digitales**
> Digitalizamos y estandarizamos procesos críticos que hoy viven en Excel o papel, para lograr una operación repetible, gobernable y menos dependiente de personas clave.
- Sub-items: Aplicaciones internas · Automatización de flujos operativos / Admin · Estandarización de captación de datos

**4. Manufactura Inteligente** (texto cortado en la extracción — re-verificar en sesión nueva)
- Sub-items relacionados a manufactura/IA aplicada

---

### Sección 4 — Nuestros Servicios

**Eyebrow:** `NUESTROS SERVICIOS`

**Heading:**
> Servicios que logran **impacto operativo real**

**Subtítulo:**
> Soluciones a la medida, implementadas por etapas para resolver problemas operativos recurrentes en la operación manufacturera.

**Tabs (click-driven, cambian contenido):**

#### Tab 1 — Visibilidad & Datos
> Servicios que transforman datos dispersos en visibilidad clara y compartida de la operación, permitiendo decisiones oportunas y alineadas a objetivos de negocio.
- Control de Paros por Línea (Tiempo Real)
- Control Diario del Cumplimiento del Plan de Producción
- Trazabilidad Operativa para Contención de Calidad
- CTA: **Explora**

#### Tab 2 — Escala Operativa
> Servicios que permiten crecer en volumen o complejidad sin perder control, calidad y gobernabilidad de la operación.
- Análisis de Variabilidad Operativa por Turno y Línea
- Rutinas Operativas por Turno (Digitales)
- Control y Registro Digital de Eventos Operativos
- CTA: **Explora**

#### Tab 3 — Rentabilidad
> Servicios enfocados en identificar, priorizar y reducir pérdidas operativas reales como scrap, paros y capacidad desperdiciada.
- (servicios específicos — re-verificar en sesión nueva, output truncado)
- CTA: **Explora**

**GIFs animados** por tab:
- Tab 1 → `Servicios-Datos360-2.gif`
- Tab 2 → `Servicios-escala-operativa-g.gif`
- Tab 3 → `2-servicios-Rentabilidad2.gif`

**⚠️ Importante:** En el clon estos servicios vienen del CMS (`Manufactura_Servicios` sheet) con campo `grupo` = `Visibilidad`/`Escala`/`Rentabilidad`. Los textos verbatim de arriba deben sembrarse en el Sheet, no hardcodearse.

---

### Sección 5 — Casos de Éxito (oculto en homepage, h=0)

Contenido detectado (renderiza pero no se muestra):
- Eyebrow: `CASOS DE ÉXITO`
- Tagline: "Problemas resueltos con Ai · Datos · Automatizaciones"
- Caso destacado: **VoxIQ Voice Analytics Tool**
  - Project Name: Voice AI
  - Company: AI Agency
  - Client: Josefin H. Smith
- 4 proyectos detectados (project-1-1.jpg ... project-4-1.jpg)

**Decisión recomendada para el clon:** OMITIR esta sección (está oculta en producción) o convertirla en algo "Próximamente" si el cliente quiere mantener el espacio.

---

### Sección 6 — Hablemos (Formulario)

**Eyebrow:** `HABLEMOS`

**Heading:**
> Estamos a un mensaje de conectar.

**Datos de contacto laterales:**
- Email: **hola@aifaqtor.com**
- Teléfono: **(55) 2936 45 24**

**Campos del formulario (CF7):**
| Campo | Tipo | Placeholder | Requerido |
|---|---|---|---|
| `first-name` | text | Nombre Completo* | sí |
| `last-name` | text | Empresa* | sí (nota: el `name` está mal nombrado, es Empresa) |
| `phone` | text | WhatsApp/Tel | no |
| `email` | email | Correo Corporativo* | sí |
| `checkbox-286[]` | checkbox group | "Busco soluciones para lograr:" | — |
| `message` (textarea) | textarea | — | — |

**Opciones del checkbox:**
- VISIBILIDAD DE DATOS
- ESCALA OPERATIVA
- (otras opciones truncadas — verificar en sesión nueva)

**En el clon:** Usar los campos del API existente (`/api/lead`) con `unidad: 'manufactura'`. Mapear:
- `first-name` → `nombre`
- `last-name` → `empresa`
- `phone` → `tel`
- `email` → `email`
- `checkbox-286[]` → `tipo_negocio` (array unido con `|`)
- `message` → `mensaje`

---

### Sección 7 — FAQ + CTA Final

**Bloque izquierdo (CTA card):**
- Eyebrow superior: (decoración)
- Heading: **Iniciemos la conversación**
- Tel destacado: **+ (55) 2936 4524**
- Imagen: `faq-image-2.jpg`

**Bloque derecho (FAQ accordion):**

**Eyebrow:** `PREGUNTAS FRECUENTES`

**Heading:**
> Respuestas a las preguntas más comunes sobre **cómo trabajamos**

**Subtítulo:**
> Sabemos que adoptar una cultura de datos, operaciones digitales e inteligencia artificial en entornos manufactureros genera preguntas legítimas. Aquí abordamos las más comunes.

**Preguntas (4 — accordion, una abierta por defecto):**

1. **¿Necesitamos tener un equipo técnico o de IA para trabajar con AiFaqtor?** *(abierta por default)*
   > No. Nuestro trabajo parte del entendimiento del proceso operativo y del contexto del negocio, no de la madurez tecnológica del cliente. Nos adaptamos al nivel actual de la organización y trabajamos de forma coordinada con operaciones, ingeniería y TI cuando aplica.

2. **¿AiFaqtor reemplaza sistemas o se integra a los existentes?**
   > Nos integramos a la realidad tecnológica de cada planta. Nuestras soluciones están pensadas para convivir con sistemas existentes (ERP, MES, hojas operativas, herramientas internas), evitando reemplazos innecesarios.

3. **¿Qué tan seguro es el manejo de nuestra información?**
   > Tratamos los datos operativos con estrictos criterios de confidencialidad y gobierno. Trabajamos bajo acuerdos claros y diseñamos cada solución considerando los lineamientos de seguridad, acceso y cumplimiento definidos por la organización.

4. **¿Cómo inicia normalmente un proyecto con AiFaqtor?**
   > Iniciamos con un diagnóstico operativo estructurado, que permite entender prioridades, dimensionar impacto y definir una ruta clara antes de cualquier implementación.

**Componente shadcn:** `<Accordion type="single" defaultValue="item-0" collapsible>`

**⚠️ Importante:** Estas FAQs ya están en el CMS (`Manufactura_FAQ` sheet). Los textos verbatim de arriba deben actualizar las filas del Sheet (el setup inicial puso versiones genéricas — hay que reemplazar con estos textos exactos).

---

## 🎬 Behaviors / Interacciones críticas

### 1. Marquee "Conócenos" (sección 2)
- Texto horizontal infinito en loop con asteriscos como separador
- CSS: `animation: marquee Xs linear infinite;` o GSAP
- Implementación en clon: CSS keyframes con `transform: translateX()`

### 2. Tabs de Servicios (sección 4)
- **INTERACTION MODEL: click-driven** (NO scroll-driven, confirmado por estructura tab classic)
- Al click cambia: heading, descripción, lista de servicios, y GIF lateral
- Transición: probablemente opacity/fade
- Implementación en clon: shadcn `<Tabs>` o estado local con AnimatePresence

### 3. FAQ Accordion (sección 7)
- Una pregunta abierta a la vez (single, no multi)
- Pregunta 1 abierta por default
- Transición de altura suave
- Implementación: shadcn `<Accordion type="single" collapsible>`

### 4. Animaciones de entrada (todas las secciones)
- GSAP ScrollTrigger en el original
- En el clon: Framer Motion `<motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}}>`

### 5. SplitText en headings
- Letras de los H1/H2 entran con stagger
- En el clon: opcional — usar Framer Motion stagger o saltarse

### 6. Hover states
- CTAs: cambio de bg + scale leve
- Cards de capacidades: hover eleva con shadow
- Links nav: underline animado

### 7. Header en scroll
- **PENDIENTE VERIFICAR** en sesión nueva (las screenshots fallaron por GSAP busy)
- Probablemente: fondo se opaca al hacer scroll desde 0

### 8. Smooth scroll
- Usar Lenis: `import Lenis from '@studio-freight/lenis'`
- Configurar en `layout.tsx` o `<SmoothScroll>` component

---

## 🖼️ Assets a descargar (20 imágenes)

Todos los assets viven en `https://aifaqtor.com/wp-content/uploads/`. Lista completa:

```
2026/01/Logo1-1.png            -> public/images/logo-square.png
2026/01/LOGO-COMPLETO.png      -> public/images/logo-completo.png  (usar como logo principal)
2026/01/about-us-image.jpg     -> public/images/about-us.jpg
2026/01/Logo1.png              -> public/images/logo-alt.png
2026/01/why-choose-img-1.png   -> public/images/why-choose.png
2026/01/icon-sparkle-gradient.svg -> public/icons/sparkle-gradient.svg
2026/01/hero-image-2.jpg       -> public/images/hero.jpg
2026/01/Servicios-Datos360-2.gif        -> public/images/servicios-visibilidad.gif
2026/01/Servicios-escala-operativa-g.gif -> public/images/servicios-escala.gif
2026/01/2-servicios-Rentabilidad2.gif    -> public/images/servicios-rentabilidad.gif
2025/07/project-1-1.jpg        -> public/images/projects/p1.jpg
2025/07/project-2-3.jpg        -> public/images/projects/p2.jpg
2025/07/project-3-1.jpg        -> public/images/projects/p3.jpg
2025/07/project-4-1.jpg        -> public/images/projects/p4.jpg
2026/01/faq-image-2.jpg        -> public/images/faq.jpg
2025/07/section-bg-shape-2.png -> public/images/section-bg-shape.png
2026/01/Hero-2.png             -> public/images/hero-overlay.png (overlay UI mockup)
2025/07/circle-arrow-white.svg -> public/icons/arrow-circle.svg
2025/07/footer-bg-img.png      -> public/images/footer-bg.png
2026/01/icono-COMPLETO.png     -> public/favicon.png (favicon 32x32 + apple-touch)
```

**Script de descarga:** ver `/Users/rebe/Rebe Claude Code/aifaqtor-web/scripts/download-aifaqtor-assets.mjs`

---

## 🏗️ Estructura sugerida del clon

```
src/app/manufactura/
  layout.tsx        (envuelve con Lenis + dark theme)
  page.tsx          (importa todas las secciones)

src/components/manufactura-clone/
  Header.tsx              # nav (no usar el global)
  Hero.tsx                # H1 + CTAs + hero image
  SobreNosotros.tsx       # marquee + 4 puntos + image
  Marquee.tsx             # animación reusable
  Capacidades.tsx         # 4 cards
  CapacidadCard.tsx
  Servicios.tsx           # tabs con CMS data
  ServicioCard.tsx
  ContactoForm.tsx        # CF7-like, postea a /api/lead
  Faq.tsx                 # accordion (data del CMS)
  Footer.tsx              # footer custom (con footer-bg-img.png)

src/components/clone/
  CtaPill.tsx             # botón pill blanco/azul reusable
  Eyebrow.tsx             # texto uppercase pequeño antes de heading
  SectionWrapper.tsx      # wrapper con padding 0px 20px + max-width
  AnimateIn.tsx           # wrapper Framer Motion whileInView
```

**Tailwind v4 (extender en globals.css):**
```css
@theme {
  --color-bg-black: #060606;
  --color-bg-card: rgba(255,255,255,0.06);
  --color-text-secondary: #A7AABB;
  --color-brand-blue: #0076C4;
  --font-sora: 'Sora', sans-serif;
}

body {
  background: var(--color-bg-black);
  color: #fff;
  font-family: var(--font-sora);
}
```

---

## 📋 Plan de ejecución sugerido (sesión nueva)

**Antes de empezar:**
```bash
cd "/Users/rebe/Rebe Claude Code/aifaqtor-web"
git pull origin develop
node scripts/download-aifaqtor-assets.mjs   # descarga los 20 assets
npm install @studio-freight/lenis framer-motion
```

**Orden de implementación (cada paso = 1 commit en develop):**

1. **Foundation:** Sora + tokens en `globals.css`, Lenis wrapper en `layout.tsx`
2. **Componentes base reusables:** `CtaPill`, `Eyebrow`, `SectionWrapper`, `AnimateIn`, `Marquee`
3. **Hero** (sección 1)
4. **Sobre Nosotros** (sección 2)
5. **Capacidades** (sección 3)
6. **Servicios** con tabs + CMS (sección 4)
7. **Contacto / Form** (sección 6) — conectar a `/api/lead`
8. **FAQ** (sección 7) — leer del CMS
9. **Footer** custom
10. **Header** (sección 0)
11. **QA visual:** abrir aifaqtor.com en una pestaña y `localhost:3000/manufactura` en otra, ajustar diferencias
12. **Actualizar CMS:** poner los textos verbatim de servicios + FAQ en el Sheet
13. **Commit + push develop → Vercel preview**

---

## ⚠️ Riesgos / Áreas a re-verificar en sesión nueva

1. **Texto cortado en extracción:** sección 3 (Manufactura Inteligente) y sección 4 (Rentabilidad servicios específicos) — re-extraer con Chrome MCP
2. **Header en scroll:** screenshots fallaron, ver comportamiento al hacer scroll manual
3. **Casos de éxito (h=0):** decidir si omitir o reciclar
4. **Hero overlay:** verificar si `Hero-2.png` es overlay sobre `hero-image-2.jpg` o son dos hero alternos
5. **Mobile:** no se hizo sweep a 390px en esta recon (página nunca settled) — verificar breakpoints
6. **CF7 checkbox-286[]:** opciones completas truncadas — re-extraer

---

## ✅ Status de Fase 1

- [x] Topología mapeada (8 secciones)
- [x] Design tokens extraídos (colores + tipografía)
- [x] Contenido verbatim por sección (con caveats arriba)
- [x] Inventory de assets (20 imágenes)
- [x] Stack original identificado
- [x] Behaviors documentados
- [x] Script de descarga preparado
- [ ] Screenshots (fallaron por GSAP — el usuario los toma manualmente para QA final)
- [ ] Responsive sweep (no se pudo — re-hacer en sesión nueva con sleep entre acciones)
