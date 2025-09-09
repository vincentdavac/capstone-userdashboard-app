// Optional: Integrate richer conditions via OpenWeatherMap
// Only used if VITE_OPENWEATHER_API_KEY present.
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE = "https://api.openweathermap.org/data/2.5/weather";
export async function fetchOWMCurrent(lat, lon) {
    if (!API_KEY)
        return null;
    const url = `${BASE}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const resp = await fetch(url);
    if (!resp.ok)
        throw new Error("OWM fetch failed");
    return (await resp.json());
}
