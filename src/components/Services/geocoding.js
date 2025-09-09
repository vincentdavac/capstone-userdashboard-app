import { cachedFetch } from "./cache.js";
const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
export async function searchCity(q, limit = 5) {
    if (!q.trim())
        return [];
    const data = await cachedFetch(GEO_URL, {
        name: q,
        count: limit,
        language: "en",
        format: "json",
    });
    return data.results || [];
}
