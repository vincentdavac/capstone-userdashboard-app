import { useEffect, useState, useCallback } from "react";
import { fetchWeather } from "../services/openMeteo.js";
import { fetchOWMCurrent } from "../services/openWeatherMap.js";
export function useWeather(lat, lon) {
    const [state, setState] = useState({
        loading: false,
        error: null,
        data: null,
    });
    const load = useCallback(async () => {
        if (lat == null || lon == null)
            return;
        setState((s) => ({ ...s, loading: true, error: null }));
        try {
            const bundle = await fetchWeather(lat, lon);
            const owm = await fetchOWMCurrent(lat, lon).catch(() => null);
            if (owm) {
                bundle.current.temperature = owm.main.temp;
                bundle.current.relativehumidity = owm.main.humidity;
                bundle.current.windspeed = owm.wind.speed;
                bundle.resolvedName = owm.weather[0]?.description ? `${bundle.resolvedName}` : bundle.resolvedName;
            }
            setState({ loading: false, error: null, data: bundle });
        }
        catch (e) {
            setState({ loading: false, error: e.message || "Failed to load", data: null });
        }
    }, [lat, lon]);
    useEffect(() => {
        load();
    }, [load]);
    return { ...state, reload: load };
}
