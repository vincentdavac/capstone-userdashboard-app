import { cachedFetch } from '../Services/cache.js';
import type { GeoResponse, GeoResult } from '../Types/geocoding.js';

const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export async function searchCity(q: string, limit = 5): Promise<GeoResult[]> {
  if (!q.trim()) return [];
  const data = await cachedFetch<GeoResponse>(GEO_URL, {
    name: q,
    count: limit,
    language: 'en',
    format: 'json',
  });
  return data.results || [];
}
