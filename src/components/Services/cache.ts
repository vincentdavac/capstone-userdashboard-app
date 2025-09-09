interface CacheEntry<T> {
  data: T;
  expiry: number;
}

const memory = new Map<string, CacheEntry<unknown>>();
const DEFAULT_TTL = 1000 * 60 * 5;

export function cacheKey(url: string, params?: Record<string, any>) {
  return url + '::' + JSON.stringify(params || {});
}

export async function cachedFetch<T>(
  url: string,
  params?: Record<string, any>,
  ttl = DEFAULT_TTL
): Promise<T> {
  const key = cacheKey(url, params);
  const now = Date.now();

  const existing = memory.get(key) as CacheEntry<T> | undefined;
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
  if (!resp.ok) throw new Error(`Request failed: ${resp.status}`);
  const json = (await resp.json()) as T;

  memory.set(key, { data: json, expiry: now + ttl });
  try {
    sessionStorage.setItem(key, JSON.stringify({ data: json, expiry: now + ttl }));
  } catch {}
  return json;
}

export function primeFromSession() {
  for (let i = 0; i < sessionStorage.length; i++) {
    const k = sessionStorage.key(i);
    if (!k) continue;
    try {
      const raw = sessionStorage.getItem(k);
      if (!raw) continue;
      const parsed = JSON.parse(raw);
      if (parsed.expiry > Date.now()) memory.set(k, parsed);
    } catch {}
  }
}