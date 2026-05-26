// Descarga todos los assets de aifaqtor.com al public/ del proyecto
// Uso: node scripts/download-aifaqtor-assets.mjs

import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname } from 'node:path';

const ASSETS = [
  // [URL remota, ruta local destino]
  ['https://aifaqtor.com/wp-content/uploads/2026/01/Logo1-1.png', 'public/images/logo-square.png'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/LOGO-COMPLETO.png', 'public/images/logo-completo.png'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/about-us-image.jpg', 'public/images/about-us.jpg'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/Logo1.png', 'public/images/logo-alt.png'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/why-choose-img-1.png', 'public/images/why-choose.png'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/icon-sparkle-gradient.svg', 'public/icons/sparkle-gradient.svg'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/hero-image-2.jpg', 'public/images/hero.jpg'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/Servicios-Datos360-2.gif', 'public/images/servicios-visibilidad.gif'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/Servicios-escala-operativa-g.gif', 'public/images/servicios-escala.gif'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/2-servicios-Rentabilidad2.gif', 'public/images/servicios-rentabilidad.gif'],
  ['https://aifaqtor.com/wp-content/uploads/2025/07/project-1-1.jpg', 'public/images/projects/p1.jpg'],
  ['https://aifaqtor.com/wp-content/uploads/2025/07/project-2-3.jpg', 'public/images/projects/p2.jpg'],
  ['https://aifaqtor.com/wp-content/uploads/2025/07/project-3-1.jpg', 'public/images/projects/p3.jpg'],
  ['https://aifaqtor.com/wp-content/uploads/2025/07/project-4-1.jpg', 'public/images/projects/p4.jpg'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/faq-image-2.jpg', 'public/images/faq.jpg'],
  ['https://aifaqtor.com/wp-content/uploads/2025/07/section-bg-shape-2.png', 'public/images/section-bg-shape.png'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/Hero-2.png', 'public/images/hero-overlay.png'],
  ['https://aifaqtor.com/wp-content/uploads/2025/07/circle-arrow-white.svg', 'public/icons/arrow-circle.svg'],
  ['https://aifaqtor.com/wp-content/uploads/2025/07/footer-bg-img.png', 'public/images/footer-bg.png'],
  ['https://aifaqtor.com/wp-content/uploads/2026/01/icono-COMPLETO.png', 'public/favicon.png'],
];

async function download(url, dest) {
  if (existsSync(dest)) {
    console.log(`  ⏭  ya existe: ${dest}`);
    return { ok: true, skipped: true };
  }
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (clone-website skill)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`  ✓ ${dest} (${(buf.length / 1024).toFixed(1)} KB)`);
    return { ok: true };
  } catch (err) {
    console.error(`  ✗ ${dest} — ${err.message}`);
    return { ok: false, err: err.message };
  }
}

console.log(`📦 Descargando ${ASSETS.length} assets de aifaqtor.com...\n`);

const results = [];
// Batch en lotes de 4 paralelos
for (let i = 0; i < ASSETS.length; i += 4) {
  const batch = ASSETS.slice(i, i + 4);
  const batchResults = await Promise.all(batch.map(([url, dest]) => download(url, dest)));
  results.push(...batchResults);
}

const ok = results.filter(r => r.ok).length;
const fail = results.length - ok;
console.log(`\n✅ ${ok}/${results.length} OK${fail ? `  ❌ ${fail} fallaron` : ''}`);
