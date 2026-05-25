export const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL!;

export const WHATSAPP = {
  manufactura: process.env.NEXT_PUBLIC_WHATSAPP ?? '5281801133554',
  negocios: process.env.NEXT_PUBLIC_WHATSAPP ?? '5281801133554',
};

export const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? 'contacto@aifaqtor.com';

export const WA_LINKS = {
  manufactura: `https://wa.me/${WHATSAPP.manufactura}?text=${encodeURIComponent('Hola, me gustaría saber más sobre sus soluciones para manufactura')}`,
  negocios: `https://wa.me/${WHATSAPP.negocios}?text=${encodeURIComponent('Hola, me gustaría una consulta sobre servicios para mi negocio')}`,
  negociosContacto: `https://wa.me/${WHATSAPP.negocios}?text=${encodeURIComponent('Hola, quiero agendar una consulta para mi negocio')}`,
  home: `https://wa.me/${WHATSAPP.negocios}?text=${encodeURIComponent('Hola, me gustaría saber más sobre sus soluciones')}`,
};
