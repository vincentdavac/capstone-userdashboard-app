import React from 'react';
import { useSettings } from '../State/settingsStore.js';

export const UnitToggle: React.FC = () => {
  const unit = useSettings((s) => s.unit);
  const setUnit = useSettings((s) => s.setUnit);
  return (
    <div className="flex">
      <button
        aria-pressed={unit === 'C'}
        onClick={() => setUnit('C')}
        style={
          unit === 'C' ? { background: 'var(--accent)', color: '#fff' } : {}
        }
      >
        °C
      </button>
      <button
        aria-pressed={unit === 'F'}
        onClick={() => setUnit('F')}
        style={
          unit === 'F' ? { background: 'var(--accent)', color: '#fff' } : {}
        }
      >
        °F
      </button>
    </div>
  );
};
