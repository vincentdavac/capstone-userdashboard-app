import React from 'react';
import { useSettings } from '../State/settingsStore.js';

export const ThemeToggle: React.FC = () => {
  const theme = useSettings((s) => s.theme);
  const toggleTheme = useSettings((s) => s.toggleTheme);
  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? '🌙 Dark' : '🌞 Light'}
    </button>
  );
};
