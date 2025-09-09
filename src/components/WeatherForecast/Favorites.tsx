import React from 'react';
import { useSettings } from '../State/settingsStore.js';

interface Props {
  onSelect: (lat: number, lon: number, name: string) => void;
}

export const Favorites: React.FC<Props> = ({ onSelect }) => {
  const favorites = useSettings((s) => s.favorites);
  const removeFavorite = useSettings((s) => s.removeFavorite);

  if (favorites.length === 0) return null;

  return (
    <div className="panel">
      <h2>Favorites</h2>
      <div className="flex" style={{ flexWrap: 'wrap' }}>
        {favorites.map((f) => (
          <div
            key={f.name}
            style={{
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '.5rem .75rem',
              position: 'relative',
            }}
          >
            <button
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                margin: 0,
              }}
              onClick={() => onSelect(f.lat, f.lon, f.name)}
            >
              {f.name}
            </button>
            <button
              onClick={() => removeFavorite(f.name)}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'var(--danger)',
                border: 'none',
                color: '#fff',
                fontSize: '.65rem',
                padding: '.2rem .35rem',
              }}
              aria-label={`Remove ${f.name}`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
