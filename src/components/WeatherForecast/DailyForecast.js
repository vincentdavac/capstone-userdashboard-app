import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { convertTemperature } from "../utils/units.js";
import { useSettings } from "../state/settingsStore.js";
import { formatDay } from "../utils/format.js";
export const DailyForecast = ({ data }) => {
    const unit = useSettings((s) => s.unit);
    return (_jsxs("div", { className: "panel", children: [_jsx("h2", { children: "7-Day Forecast" }), _jsx("div", { className: "grid", style: { gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))" }, children: data.daily.time.map((t, idx) => {
                    const max = convertTemperature(data.daily.temperature_2m_max[idx], unit).toFixed(0);
                    const min = convertTemperature(data.daily.temperature_2m_min[idx], unit).toFixed(0);
                    return (_jsxs("div", { style: { padding: ".5rem", border: "1px solid var(--border)", borderRadius: 8 }, children: [_jsx("div", { style: { fontWeight: 600 }, children: formatDay(t) }), _jsxs("div", { style: { fontSize: ".9rem" }, children: [max, "\u00B0 / ", min, "\u00B0"] }), data.daily.precipitation_probability_max && (_jsxs("div", { style: { fontSize: ".75rem", color: "var(--muted)" }, children: ["Rain: ", data.daily.precipitation_probability_max[idx] ?? 0, "%"] }))] }, t));
                }) })] }));
};
