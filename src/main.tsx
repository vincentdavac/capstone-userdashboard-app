import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';

// ✅ Import AlertProvider
import { AlertProvider } from './pages/UiElements/AlertContext';

// Suppress the known Google reCAPTCHA console error
const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("recaptcha/api2/pat")
  ) {
    // Ignore this known Google error
    return;
  }
  originalConsoleError(...args);
};

window.addEventListener("unhandledrejection", (event) => {
  if (String(event.reason).toLowerCase().includes("recaptcha")) {
    event.preventDefault();
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router basename="/coastella">
      {/* ✅ Wrap App with AlertProvider */}
      <AlertProvider>
        <App />
      </AlertProvider>
    </Router>
  </React.StrictMode>,
);
