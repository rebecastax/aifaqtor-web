// Setup.gs — Inicializa la estructura completa del Sheet "Web aifaqtor 2.0"
// EJECUTAR UNA SOLA VEZ desde el editor de Apps Script:
//   1. Abrir el editor
//   2. Seleccionar la función `setupSheets` en el dropdown
//   3. Click en ▶ Ejecutar
//   4. Autorizar permisos cuando lo pida
//   5. Verificar el Sheet — deben aparecer 6 pestañas pobladas
//
// Para ACTUALIZAR solo los textos de Manufactura sin tocar Leads ni el resto,
// ejecutar `updateManufacturaContent` (no destruye otras pestañas).

// SHEET_ID ya declarado en Code.gs

// ─── Contenido verbatim Manufactura (clon aifaqtor.com homepage) ───────────
// Si actualizas estos arrays, ejecuta `updateManufacturaContent` para reflejar
// los cambios en el Sheet sin reescribir Leads u otras pestañas.

const MANUFACTURA_SERVICIOS_ROWS = [
  // Visibilidad & Datos
  [1, 'Control de Paros por Línea (Tiempo Real)',
    'Visibilidad en vivo de paros por línea y turno para reaccionar antes de que el problema escale.',
    'Tablero piloto en una línea en 4 semanas',
    'Paros visibles · MTTR ↓ · OEE',
    'Visibilidad', true],
  [2, 'Control Diario del Cumplimiento del Plan de Producción',
    'Comparativo plan vs. real por turno con causas de desviación para gobernar la operación día a día.',
    'Primer reporte diario en 3 semanas',
    'Cumplimiento de plan · Desviaciones por causa',
    'Visibilidad', true],
  [3, 'Trazabilidad Operativa para Contención de Calidad',
    'Trazabilidad de producto y proceso para contener calidad en minutos en lugar de días.',
    'Pilotear contención en una línea en 4 semanas',
    'Tiempo de contención · Lotes afectados · Reclamos',
    'Visibilidad', true],

  // Escala Operativa
  [4, 'Análisis de Variabilidad Operativa por Turno y Línea',
    'Detección de variabilidad entre turnos, líneas y operadores para estandarizar y replicar las mejores prácticas.',
    'Primer análisis en 3 semanas',
    'Variabilidad entre turnos · Gap vs. best shift',
    'Escala', true],
  [5, 'Rutinas Operativas por Turno (Digitales)',
    'Digitalización de rutinas y checklists por turno para asegurar ejecución consistente sin depender de personas clave.',
    'Primera rutina digital en 2 semanas',
    'Adherencia a rutina · Cumplimiento de checks',
    'Escala', true],
  [6, 'Control y Registro Digital de Eventos Operativos',
    'Captura digital de eventos relevantes (paros, scrap, intervenciones) con causa y responsable, lista para analizar.',
    'Primer flujo de captura en 2 semanas',
    'Eventos registrados · % captura digital · Tiempo de registro',
    'Escala', true],

  // Rentabilidad
  [7, 'Identificación y Priorización de Pérdidas Operativas',
    'Mapeo y costeo de pérdidas (scrap, paros, capacidad desperdiciada) para enfocar inversión donde más duele.',
    'Mapa de pérdidas costeado en 3 semanas',
    '$ pérdidas identificadas · Pérdidas evitables · ROI por iniciativa',
    'Rentabilidad', true],
  [8, 'Reducción Estructurada de Scrap y Reproceso',
    'Iniciativas focalizadas para reducir scrap y reproceso atacando causas raíz con datos en lugar de intuición.',
    'Primera ola de reducción en 6 semanas',
    '% scrap · % reproceso · Costo por unidad',
    'Rentabilidad', true],
  [9, 'Recuperación de Capacidad Desperdiciada',
    'Recuperación de capacidad oculta por microparos, cambios y desbalanceos para producir más sin invertir en activos.',
    'Diagnóstico de capacidad en 4 semanas',
    'OEE · Capacidad recuperada (unidades/turno)',
    'Rentabilidad', true],
];

const MANUFACTURA_FAQ_ROWS = [
  ['¿Necesitamos tener un equipo técnico o de IA para trabajar con AiFaqtor?',
    'No. Nuestro trabajo parte del entendimiento del proceso operativo y del contexto del negocio, no de la madurez tecnológica del cliente. Nos adaptamos al nivel actual de la organización y trabajamos de forma coordinada con operaciones, ingeniería y TI cuando aplica.',
    1, true],
  ['¿AiFaqtor reemplaza sistemas o se integra a los existentes?',
    'Nos integramos a la realidad tecnológica de cada planta. Nuestras soluciones están pensadas para convivir con sistemas existentes (ERP, MES, hojas operativas, herramientas internas), evitando reemplazos innecesarios.',
    2, true],
  ['¿Qué tan seguro es el manejo de nuestra información?',
    'Tratamos los datos operativos con estrictos criterios de confidencialidad y gobierno. Trabajamos bajo acuerdos claros y diseñamos cada solución considerando los lineamientos de seguridad, acceso y cumplimiento definidos por la organización.',
    3, true],
  ['¿Cómo inicia normalmente un proyecto con AiFaqtor?',
    'Iniciamos con un diagnóstico operativo estructurado, que permite entender prioridades, dimensionar impacto y definir una ruta clara antes de cualquier implementación.',
    4, true],
];

/**
 * Actualiza SOLO las pestañas Manufactura_Servicios y Manufactura_FAQ
 * con el contenido verbatim de aifaqtor.com (sin tocar Leads ni otras).
 * Ejecutar desde el editor o vía `clasp run updateManufacturaContent`.
 */
function updateManufacturaContent() {
  const ss = SpreadsheetApp.openById(SHEET_ID);

  setupTab(ss, 'Manufactura_Servicios',
    ['id', 'nombre', 'descripcion', 'quickwin', 'indicadores', 'grupo', 'activo'],
    MANUFACTURA_SERVICIOS_ROWS
  );

  setupTab(ss, 'Manufactura_FAQ',
    ['pregunta', 'respuesta', 'orden', 'activo'],
    MANUFACTURA_FAQ_ROWS
  );

  SpreadsheetApp.flush();
  Logger.log('✓ Manufactura_Servicios (' + MANUFACTURA_SERVICIOS_ROWS.length + ') y Manufactura_FAQ (' + MANUFACTURA_FAQ_ROWS.length + ') actualizadas con contenido verbatim');
}

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
    MANUFACTURA_SERVICIOS_ROWS
  );

  // 3. MANUFACTURA_FAQ
  setupTab(ss, 'Manufactura_FAQ',
    ['pregunta', 'respuesta', 'orden', 'activo'],
    MANUFACTURA_FAQ_ROWS
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
