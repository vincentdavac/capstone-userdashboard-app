import React, { useState } from 'react';
import { searchCity } from '../Services/geocoding.js';
import type { GeoResult } from '../Types/geocoding.js';

interface Props {
  onSelect: (r: GeoResult) => void;
}

export const SearchBar: React.FC<Props> = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<GeoResult[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await searchCity(query);
      setResults(res);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="panel">
      <form
        onSubmit={handleSearch}
        className="flex"
        style={{ alignItems: 'stretch' }}
      >
        <input
          placeholder="Search city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search city"
        />
        <button type="submit" disabled={loading}>
          {loading ? '...' : 'Search'}
        </button>
      </form>
      {results.length > 0 && (
        <div style={{ marginTop: '.75rem' }}>
          {results.map((r) => (
            <button
              key={`${r.name}-${r.latitude}-${r.longitude}`}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                marginBottom: '.25rem',
              }}
              onClick={() => {
                onSelect(r);
                setResults([]);
              }}
            >
              {r.name} {r.admin1 ? `, ${r.admin1}` : ''}{' '}
              {r.country ? `(${r.country})` : ''}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
