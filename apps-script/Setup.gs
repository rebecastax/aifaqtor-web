// Setup.gs — Inicializa la estructura completa del Sheet "Web aifaqtor 2.0"
// EJECUTAR UNA SOLA VEZ desde el editor de Apps Script:
//   1. Abrir el editor
//   2. Seleccionar la función `setupSheets` en el dropdown
//   3. Click en ▶ Ejecutar
//   4. Autorizar permisos cuando lo pida
//   5. Verificar el Sheet — deben aparecer 6 pestañas pobladas

function setupSheets() {
  const ss = SpreadsheetApp.openById('1MSPe60HioVQVh1kseQ22YFWD5k3FAlekKPDUHHQXnBY');

  // 1. CONFIG
  setupTab(ss, 'Config', ['key', 'value'], [
    ['whatsapp_manufactura', '5281801133554'],
    ['whatsapp_negocios',    '5281801133554'],
    ['email_contacto',       'contacto@aifaqtor.com'],
    ['phone_display',        '+52 81 8011 3354'],
    ['linkedin_url',         'https://www.linkedin.com/company/aifaqtor'],
  ]);

  // 2. MANUFACTURA_SERVICIOS
  setupTab(ss, 'Manufactura_Servicios',
    ['id', 'nombre', 'descripcion', 'quickwin', 'indicadores', 'grupo', 'activo'],
    [
      [1, 'Manufacturing Command Room', 'Control visual de paros, cumplimiento y trazabilidad en planta', 'Dashboard en vivo en 4 semanas', 'Paros reducidos 20%, OEE visible', 'Visibilidad', true],
      [2, 'Data Hub 360°', 'Integración de datos de producción, calidad y logística en una sola fuente', 'Primer pipeline en 6 semanas', 'Datos unificados en tiempo real', 'Visibilidad', true],
      [3, 'Diagnóstico Acelerado IA', 'Evaluación de madurez operativa y roadmap priorizado con ROI', 'Diagnóstico en 2 semanas', 'Roadmap defendible con ROI por iniciativa', 'Visibilidad', true],
      [4, 'MES Ligero', 'Digitalización de órdenes de producción y trazabilidad', 'Primera orden digital en 3 semanas', 'Trazabilidad 100% en línea', 'Escala', true],
      [5, 'Control de Piso Digital', 'Estandarización de procesos críticos que hoy viven en papel o Excel', 'Proceso piloto en 2 semanas', 'Variabilidad reducida 30%', 'Escala', true],
      [6, 'Agente IA de Operaciones', 'Copiloto IA para supervisores con alertas y recomendaciones en tiempo real', 'Primeras alertas en 2 semanas', 'Decisiones 40% más rápidas', 'Escala', true],
      [7, 'Automatización RPA', 'Eliminación de tareas manuales repetitivas y captura de datos', 'Primera tarea automatizada en 2 semanas', '20hrs/semana recuperadas por proceso', 'Escala', true],
      [8, 'Machine Vision', 'Detección automática de defectos en línea de producción', 'Cámara piloto en 4 semanas', 'Scrap reducido 25%', 'Rentabilidad', true],
      [9, 'Predicción de Mantenimiento', 'Anticipar fallas en equipos antes de que paren la producción', 'Modelo piloto en 3 semanas', 'Paros no programados -30%', 'Rentabilidad', true],
      [10, 'Optimización de Inventarios', 'Reducción de inventario en exceso con modelos de predicción', 'Modelo piloto en 4 semanas', 'Capital liberado 15%', 'Rentabilidad', true],
    ]
  );

  // 3. MANUFACTURA_FAQ
  setupTab(ss, 'Manufactura_FAQ',
    ['pregunta', 'respuesta', 'orden', 'activo'],
    [
      ['¿Necesitamos tener un equipo técnico o de IA para trabajar con AiFaqtor?', 'No. Nuestro trabajo parte del entendimiento del proceso operativo y del contexto del negocio. Nos adaptamos al nivel actual de la organización y trabajamos de forma coordinada con operaciones, ingeniería y TI cuando aplica.', 1, true],
      ['¿AiFaqtor reemplaza sistemas o se integra a los existentes?', 'Nos integramos a los sistemas existentes. No reemplazamos — complementamos y conectamos lo que ya tienen para agregar visibilidad e inteligencia encima.', 2, true],
      ['¿Qué tan seguro es el manejo de nuestra información?', 'Toda la información se maneja con acuerdos de confidencialidad (NDA) y bajo estándares de seguridad de datos industriales. Los datos de planta nunca salen de infraestructura controlada.', 3, true],
      ['¿Cómo inicia normalmente un proyecto con AiFaqtor?', 'Iniciamos con un diagnóstico de 2 semanas donde evaluamos procesos, datos disponibles y madurez operativa. Con ese diagnóstico entregamos un roadmap priorizado con ROI estimado por iniciativa.', 4, true],
    ]
  );

  // 4. NEGOCIOS_SERVICIOS
  setupTab(ss, 'Negocios_Servicios',
    ['id', 'titulo', 'subheadline', 'beneficios', 'paraQuien', 'orden', 'activo'],
    [
      [1, 'Dashboards y Análisis de Datos', 'Entiende qué está pasando en tu negocio',
        'Ver cuáles clientes te compran más|Saber cuáles productos venden mejor|Identificar días y temporadas con más ventas|Control de ingresos y gastos|Flujo de efectivo automático|Reportes claros y fáciles de entender',
        'Restaurantes · Tiendas · Salones de belleza · Negocios familiares', 1, true],
      [2, 'CRM y Organización de Clientes', '¿Pierdes clientes porque se te olvidó dar seguimiento?',
        'Información de clientes guardada y organizada|Recordatorios automáticos de seguimiento|Historial de compras por cliente|Agenda y citas integradas|Contacto rápido desde un solo lugar',
        'Servicios profesionales · Clínicas · Consultores', 2, true],
      [3, 'Páginas Web Profesionales', 'Tu negocio necesita presencia en internet',
        'Información de tu negocio|Fotos y servicios|Botón de WhatsApp directo|Formulario de contacto|Ubicación y horarios|Catálogo de productos|Reservaciones o citas|Integración con redes sociales',
        'Todos los tipos de negocio', 3, true],
      [4, 'Apps y Sistemas Personalizados', '¿Quieres algo más avanzado?',
        'Apps móviles para tu negocio|Sistemas internos a tu medida|Plataformas para clientes|Automatización de procesos|Herramientas personalizadas',
        'Emprendedores · Negocios en crecimiento', 4, true],
    ]
  );

  // 5. NOSOTROS_EQUIPO (placeholder vacío, activo = false)
  setupTab(ss, 'Nosotros_Equipo',
    ['nombre', 'cargo', 'bio', 'foto_url', 'orden', 'activo'],
    [
      ['Nombre Placeholder', 'Cargo', 'Bio breve del miembro del equipo.', '', 1, false],
    ]
  );

  // 6. LEADS (solo headers — se llena con formularios del sitio)
  setupTab(ss, 'Leads',
    ['timestamp', 'unidad', 'nombre', 'empresa', 'cargo', 'email', 'tel', 'num_plantas', 'empleados', 'tipo_negocio', 'whatsapp', 'mensaje', 'origin_page'],
    []
  );

  // Eliminar la pestaña "Hoja 1" / "Sheet1" si existe vacía
  const defaultSheet = ss.getSheetByName('Hoja 1') || ss.getSheetByName('Sheet1');
  if (defaultSheet && ss.getSheets().length > 1) {
    ss.deleteSheet(defaultSheet);
  }

  SpreadsheetApp.flush();
  Logger.log('✓ Setup completo — 6 pestañas creadas/actualizadas');
}

/**
 * Helper: crea o reemplaza una pestaña con headers + data + formato.
 */
function setupTab(ss, name, headers, rows) {
  let sheet = ss.getSheetByName(name);
  if (sheet) {
    sheet.clear();
  } else {
    sheet = ss.insertSheet(name);
  }

  // Headers
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#0076C4')
    .setFontColor('#ffffff')
    .setHorizontalAlignment('left');

  // Data
  if (rows.length > 0) {
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }

  // Freeze header row + auto-resize columns
  sheet.setFrozenRows(1);
  for (let i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }

  Logger.log('  • Pestaña "' + name + '" → ' + rows.length + ' filas');
}
