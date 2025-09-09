const memory = new Map();
const DEFAULT_TTL = 1000 * 60 * 5;
export function cacheKey(url, params) {
    return url + '::' + JSON.stringify(params || {});
}
export async function cachedFetch(url, params, ttl = DEFAULT_TTL) {
    const key = cacheKey(url, params);
    const now = Date.now();
    const existing = memory.get(key);
    if (existing && existing.expiry > now) {
        return existing.data;
    }
    const query = params
        ? '?' +
            Object.entries(params)
                .filter(([, v]) => v !== undefined && v !== null)
                .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
                .join('&')
        : '';
    const resp = await fetch(url + query);
    if (!resp.ok)
        throw new Error(`Request failed: ${resp.status}`);
    const json = (await resp.json());
    memory.set(key, { data: json, expiry: now + ttl });
    try {
        sessionStorage.setItem(key, JSON.stringify({ data: json, expiry: now + ttl }));
    }
    catch { }
    return json;
}
export function primeFromSession() {
    for (let i = 0; i < sessionStorage.length; i++) {
        const k = sessionStorage.key(i);
        if (!k)
            continue;
        try {
            const raw = sessionStorage.getItem(k);
            if (!raw)
                continue;
            const parsed = JSON.parse(raw);
            if (parsed.expiry > Date.now())
                memory.set(k, parsed);
        }
        catch { }
    }
}
