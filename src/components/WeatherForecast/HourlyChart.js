import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { useSettings } from "../state/settingsStore.js";
import { convertTemperature } from "../utils/units.js";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend } from "chart.js";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip, Legend);
export const HourlyChart = ({ data }) => {
    const unit = useSettings((s) => s.unit);
    const subsetCount = 24;
    const labels = data.hourly.time.slice(0, subsetCount).map((t) => new Date(t).toLocaleTimeString(undefined, { hour: "2-digit" }));
    const temps = data.hourly.temperature_2m.slice(0, subsetCount).map((v) => convertTemperature(v, unit));
    const chartData = useMemo(() => ({
        labels,
        datasets: [
            {
                data: temps,
                label: `Next 24h Temperature (°${unit})`,
                tension: 0.35,
                fill: true,
                borderColor: "#2563eb",
                backgroundColor: "rgba(37,99,235,0.25)",
                pointRadius: 3,
            },
        ],
    }), [labels, temps, unit]);
    return (_jsxs("div", { className: "panel", children: [_jsx("h2", { children: "Hourly" }), _jsx(Line, { data: chartData, options: {
                    responsive: true,
                    plugins: { legend: { display: true } },
                    scales: { y: { ticks: { callback: (v) => v + "°" } } },
                } })] }));
};
