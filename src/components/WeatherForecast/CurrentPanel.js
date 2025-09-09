import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSettings } from "../state/settingsStore.js";
import { convertTemperature } from "../utils/units.js";
import { weatherCodeToText } from "../utils/format.js";
export const CurrentPanel = ({ data, onFavorite }) => {
    const unit = useSettings((s) => s.unit);
    const temp = convertTemperature(data.current.temperature, unit);
    return (_jsxs("div", { className: "panel", children: [_jsxs("div", { className: "flex", style: { justifyContent: "space-between" }, children: [_jsx("h2", { children: "Current" }), onFavorite && _jsx("button", { onClick: onFavorite, children: "\u2606 Favorite" })] }), _jsxs("div", { style: { fontSize: "2.5rem", fontWeight: 600 }, children: [temp.toFixed(1), "\u00B0", unit] }), _jsx("div", { style: { color: "var(--muted)", marginBottom: ".5rem" }, children: weatherCodeToText(data.current.weathercode) }), _jsxs("div", { className: "flex", style: { flexWrap: "wrap" }, children: [_jsxs("span", { children: ["Wind: ", data.current.windspeed.toFixed(1), " m/s"] }), data.current.relativehumidity != null && _jsxs("span", { children: ["Humidity: ", data.current.relativehumidity, "%"] }), _jsxs("span", { children: ["Coords: ", data.latitude.toFixed(2), ", ", data.longitude.toFixed(2)] })] })] }));
};
