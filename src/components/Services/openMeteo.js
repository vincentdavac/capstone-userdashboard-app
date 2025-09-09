import { cachedFetch } from "./cache.js";
const API_URL = "https://api.open-meteo.com/v1/forecast";
export async function fetchWeather(lat, lon) {
    const data = await cachedFetch(API_URL, {
        latitude: lat,
        longitude: lon,
        current_weather: true,
        hourly: ["temperature_2m", "relativehumidity_2m", "precipitation_probability"].join(","),
        daily: ["temperature_2m_max", "temperature_2m_min", "precipitation_probability_max"].join(","),
        forecast_days: 7,
        timezone: "auto",
    });
    return {
        current: {
            ...data.current_weather,
        },
        hourly: data.hourly,
        daily: data.daily,
        units: { temp: "°C" },
        latitude: data.latitude,
        longitude: data.longitude,
        resolvedName: `${lat.toFixed(2)}, ${lon.toFixed(2)}`,
    };
}
