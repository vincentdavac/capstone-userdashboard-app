import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSettings } from "../state/settingsStore.js";
export const UnitToggle = () => {
    const unit = useSettings((s) => s.unit);
    const setUnit = useSettings((s) => s.setUnit);
    return (_jsxs("div", { className: "flex", children: [_jsx("button", { "aria-pressed": unit === "C", onClick: () => setUnit("C"), style: unit === "C" ? { background: "var(--accent)", color: "#fff" } : {}, children: "\u00B0C" }), _jsx("button", { "aria-pressed": unit === "F", onClick: () => setUnit("F"), style: unit === "F" ? { background: "var(--accent)", color: "#fff" } : {}, children: "\u00B0F" })] }));
};
