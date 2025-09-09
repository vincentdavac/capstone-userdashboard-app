export function formatTime(iso: string, options: Intl.DateTimeFormatOptions = {}) {
  return new Date(iso).toLocaleString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    ...options
  });
}

export function formatDay(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}

export function weatherCodeToText(code: number): string {
  const map: Record<number, string> = {
    0: 'Clear',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Cloudy',
    45: 'Fog',
    48: 'Rime Fog',
    51: 'Light Drizzle',
    61: 'Rain',
    80: 'Showers',
    95: 'Thunderstorm'
  };
  return map[code] || `Code ${code}`;
}