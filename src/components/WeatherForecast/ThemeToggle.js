import { jsx as _jsx } from "react/jsx-runtime";
import { useSettings } from "../state/settingsStore.js";
export const ThemeToggle = () => {
    const theme = useSettings((s) => s.theme);
    const toggleTheme = useSettings((s) => s.toggleTheme);
    return (_jsx("button", { onClick: toggleTheme, "aria-label": "Toggle theme", children: theme === "light" ? "🌙 Dark" : "🌞 Light" }));
};
