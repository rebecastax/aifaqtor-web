// Code.gs — AiFaqtor Web 2.0 CMS API
// Google Sheet: https://docs.google.com/spreadsheets/d/1MSPe60HioVQVh1kseQ22YFWD5k3FAlekKPDUHHQXnBY
const SHEET_ID = '1MSPe60HioVQVh1kseQ22YFWD5k3FAlekKPDUHHQXnBY';
const ss = SpreadsheetApp.openById(SHEET_ID);

function doGet(e) {
  // Guard: si se ejecuta desde el editor sin request HTTP
  if (!e || !e.parameter) {
    return jsonResponse({ error: 'Ejecuta via URL, no desde el editor. Ejemplo: ?action=config' });
  }
  const action = e.parameter.action;
  try {
    let data;
    switch (action) {
      case 'config':                data = getConfig(); break;
      case 'manufactura_servicios': data = getManufacturaServicios(e.parameter.grupo); break;
      case 'manufactura_faq':       data = getManufacturaFAQ(); break;
      case 'negocios_servicios':    data = getNegociosServicios(); break;
      case 'equipo':                data = getEquipo(); break;
      default:                      data = { error: 'action no válida: ' + action };
    }
    return jsonResponse(data);
  } catch (err) {
    return jsonResponse({ error: err.message });
  }
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    if (body.action === 'submit_lead') {
      submitLead(body);
      return jsonResponse({ ok: true });
    }
    return jsonResponse({ error: 'action no válida' });
  } catch (err) {
    return jsonResponse({ error: err.message });
  }
}

function getConfig() {
  const rows = ss.getSheetByName('Config').getDataRange().getValues();
  return rows.slice(1).reduce((acc, [key, value]) => {
    if (key) acc[key] = value;
    return acc;
  }, {});
}

function getManufacturaServicios(grupo) {
  const rows = ss.getSheetByName('Manufactura_Servicios').getDataRange().getValues();
  const [headers, ...data] = rows;
  return data
    .filter(r => r[6] === true)
    .filter(r => !grupo || r[5] === grupo)
    .map(r => headers.reduce((obj, h, i) => { obj[h] = r[i]; return obj; }, {}));
}

function getManufacturaFAQ() {
  const rows = ss.getSheetByName('Manufactura_FAQ').getDataRange().getValues();
  const [headers, ...data] = rows;
  return data
    .filter(r => r[3] === true)
    .sort((a, b) => a[2] - b[2])
    .map(r => headers.reduce((obj, h, i) => { obj[h] = r[i]; return obj; }, {}));
}

function getNegociosServicios() {
  const rows = ss.getSheetByName('Negocios_Servicios').getDataRange().getValues();
  const [headers, ...data] = rows;
  return data
    .filter(r => r[6] === true)
    .sort((a, b) => a[5] - b[5])
    .map(r => {
      const obj = headers.reduce((o, h, i) => { o[h] = r[i]; return o; }, {});
      obj.beneficios = obj.beneficios ? obj.beneficios.split('|').map(b => b.trim()) : [];
      return obj;
    });
}

function getEquipo() {
  const rows = ss.getSheetByName('Nosotros_Equipo').getDataRange().getValues();
  const [headers, ...data] = rows;
  return data
    .filter(r => r[5] === true)
    .sort((a, b) => a[4] - b[4])
    .map(r => headers.reduce((obj, h, i) => { obj[h] = r[i]; return obj; }, {}));
}

function submitLead(body) {
  const sheet = ss.getSheetByName('Leads');
  sheet.appendRow([
    new Date().toISOString(),
    body.unidad || '',
    body.nombre || '',
    body.empresa || '',
    body.cargo || '',
    body.email || '',
    body.tel || '',
    body.num_plantas || '',
    body.empleados || '',
    body.tipo_negocio || '',
    body.whatsapp || '',
    body.mensaje || '',
    body.origin_page || '',
  ]);
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
