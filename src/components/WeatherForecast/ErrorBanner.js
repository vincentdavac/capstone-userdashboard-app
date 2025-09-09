import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ErrorBanner = ({ message, onRetry }) => (_jsxs("div", { className: "error flex", role: "alert", children: [_jsx("span", { children: message }), onRetry && _jsx("button", { onClick: onRetry, children: "Retry" })] }));
