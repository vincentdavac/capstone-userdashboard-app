import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSettings } from "../state/settingsStore.js";
export const Favorites = ({ onSelect }) => {
    const favorites = useSettings((s) => s.favorites);
    const removeFavorite = useSettings((s) => s.removeFavorite);
    if (favorites.length === 0)
        return null;
    return (_jsxs("div", { className: "panel", children: [_jsx("h2", { children: "Favorites" }), _jsx("div", { className: "flex", style: { flexWrap: "wrap" }, children: favorites.map((f) => (_jsxs("div", { style: {
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        padding: ".5rem .75rem",
                        position: "relative",
                    }, children: [_jsx("button", { style: { background: "none", border: "none", padding: 0, margin: 0 }, onClick: () => onSelect(f.lat, f.lon, f.name), children: f.name }), _jsx("button", { onClick: () => removeFavorite(f.name), style: {
                                position: "absolute",
                                top: 0,
                                right: 0,
                                background: "var(--danger)",
                                border: "none",
                                color: "#fff",
                                fontSize: ".65rem",
                                padding: ".2rem .35rem",
                            }, "aria-label": `Remove ${f.name}`, children: "\u2715" })] }, f.name))) })] }));
};
