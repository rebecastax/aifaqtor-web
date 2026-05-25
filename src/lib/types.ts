export interface SiteConfig {
  whatsapp_manufactura: string;
  whatsapp_negocios: string;
  email_contacto: string;
  phone_display: string;
  linkedin_url: string;
}

export interface ManufacturaServicio {
  id: number;
  nombre: string;
  descripcion: string;
  quickwin: string;
  indicadores: string;
  grupo: 'Visibilidad' | 'Escala' | 'Rentabilidad';
  activo: boolean;
}

export interface ManufacturaFAQ {
  pregunta: string;
  respuesta: string;
  orden: number;
  activo: boolean;
}

export interface NegocioServicio {
  id: number;
  titulo: string;
  subheadline: string;
  beneficios: string[];
  paraQuien: string;
  orden: number;
  activo: boolean;
}

export interface EquipoMiembro {
  nombre: string;
  cargo: string;
  bio: string;
  foto_url: string;
  orden: number;
  activo: boolean;
}

export interface LeadManufactura {
  unidad: 'manufactura';
  nombre: string;
  empresa: string;
  cargo?: string;
  email: string;
  tel?: string;
  num_plantas?: string;
  empleados?: string;
  mensaje: string;
  origin_page: string;
}

export interface LeadNegocios {
  unidad: 'negocios-latinos';
  nombre: string;
  tipo_negocio: string;
  whatsapp?: string;
  email?: string;
  mensaje?: string;
  origin_page: string;
}
