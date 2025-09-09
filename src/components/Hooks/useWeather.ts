import { useEffect, useState, useCallback } from 'react';
import { fetchWeather } from '../Services/openMeteo.js';
import type { WeatherBundle } from '../Types/weather.js';
import { fetchOWMCurrent } from '../Services/openWeatherMap.js';

interface State {
  loading: boolean;
  error: string | null;
  data: WeatherBundle | null;
}

export function useWeather(lat: number | null, lon: number | null) {
  const [state, setState] = useState<State>({
    loading: false,
    error: null,
    data: null,
  });

  const load = useCallback(async () => {
    if (lat == null || lon == null) return;
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const bundle = await fetchWeather(lat, lon);
      const owm = await fetchOWMCurrent(lat, lon).catch(() => null);
      if (owm) {
        bundle.current.temperature = owm.main.temp;
        bundle.current.relativehumidity = owm.main.humidity;
        bundle.current.windspeed = owm.wind.speed;
        bundle.resolvedName = owm.weather[0]?.description
          ? `${bundle.resolvedName}`
          : bundle.resolvedName;
      }
      setState({ loading: false, error: null, data: bundle });
    } catch (e: any) {
      setState({
        loading: false,
        error: e.message || 'Failed to load',
        data: null,
      });
    }
  }, [lat, lon]);

  useEffect(() => {
    load();
  }, [load]);

  return { ...state, reload: load };
}
