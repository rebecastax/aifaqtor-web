import { APPS_SCRIPT_URL } from './constants';
import type {
  SiteConfig,
  ManufacturaServicio,
  ManufacturaFAQ,
  NegocioServicio,
  EquipoMiembro,
  LeadManufactura,
  LeadNegocios,
} from './types';

const cache = new Map<string, { data: unknown; ts: number }>();
const CACHE_TTL = 5 * 60 * 1000;

async function fetchAction<T>(
  action: string,
  params: Record<string, string> = {}
): Promise<T> {
  const key = action + JSON.stringify(params);
  const cached = cache.get(key);
  if (cached && Date.now() - cached.ts < CACHE_TTL) return cached.data as T;

  const url = new URL(APPS_SCRIPT_URL);
  url.searchParams.set('action', action);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`Apps Script error: ${res.status}`);

  const data = (await res.json()) as T;
  cache.set(key, { data, ts: Date.now() });
  return data;
}

export const getConfig = () => fetchAction<SiteConfig>('config');

export const getManufacturaServicios = (grupo?: string) =>
  fetchAction<ManufacturaServicio[]>(
    'manufactura_servicios',
    grupo ? { grupo } : {}
  );

export const getManufacturaFAQ = () =>
  fetchAction<ManufacturaFAQ[]>('manufactura_faq');

export const getNegociosServicios = () =>
  fetchAction<NegocioServicio[]>('negocios_servicios');

export const getEquipo = () => fetchAction<EquipoMiembro[]>('equipo');

export async function submitLead(
  lead: LeadManufactura | LeadNegocios
): Promise<void> {
  await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'submit_lead', ...lead }),
  });
}
