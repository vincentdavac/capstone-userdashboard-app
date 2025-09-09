import { cachedFetch } from './cache.js';
import type { WeatherBundle } from '../Types/weather.js';

interface RawForecast {
  latitude: number;
  longitude: number;
  timezone: string;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m?: number[];
    precipitation_probability?: number[];
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max?: number[];
  };
}

const API_URL = 'https://api.open-meteo.com/v1/forecast';

export async function fetchWeather(
  lat: number,
  lon: number,
): Promise<WeatherBundle> {
  const data = await cachedFetch<RawForecast>(API_URL, {
    latitude: lat,
    longitude: lon,
    current_weather: true,
    hourly: [
      'temperature_2m',
      'relativehumidity_2m',
      'precipitation_probability',
    ].join(','),
    daily: [
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_probability_max',
    ].join(','),
    forecast_days: 7,
    timezone: 'auto',
  });

  return {
    current: {
      ...data.current_weather,
    },
    hourly: data.hourly,
    daily: data.daily,
    units: { temp: '°C' },
    latitude: data.latitude,
    longitude: data.longitude,
    resolvedName: `${lat.toFixed(2)}, ${lon.toFixed(2)}`,
  };
}
