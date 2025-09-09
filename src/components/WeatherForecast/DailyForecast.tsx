import React from 'react';
import type { WeatherBundle } from '../Types/weather.js';
import { convertTemperature } from '../Utils/units.js';
import { useSettings } from '../State/settingsStore.js';
import { formatDay } from '../Utils/format.js';

export const DailyForecast: React.FC<{ data: WeatherBundle }> = ({ data }) => {
  const unit = useSettings((s) => s.unit);
  return (
    <div className="panel">
      <h2>7-Day Forecast</h2>
      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))' }}
      >
        {data.daily.time.map((t, idx) => {
          const max = convertTemperature(
            data.daily.temperature_2m_max[idx],
            unit,
          ).toFixed(0);
          const min = convertTemperature(
            data.daily.temperature_2m_min[idx],
            unit,
          ).toFixed(0);
          return (
            <div
              key={t}
              style={{
                padding: '.5rem',
                border: '1px solid var(--border)',
                borderRadius: 8,
              }}
            >
              <div style={{ fontWeight: 600 }}>{formatDay(t)}</div>
              <div style={{ fontSize: '.9rem' }}>
                {max}° / {min}°
              </div>
              {data.daily.precipitation_probability_max && (
                <div style={{ fontSize: '.75rem', color: 'var(--muted)' }}>
                  Rain: {data.daily.precipitation_probability_max[idx] ?? 0}%
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
