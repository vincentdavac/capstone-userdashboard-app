import React, { useEffect, useState } from 'react';
import { SearchBar } from '../../../components/WeatherForecast/SearchBar.js';
import { useWeather } from '../../../components/Hooks/useWeather.js';
import { Loader } from '../../../components/WeatherForecast/Loader.js';
import { ErrorBanner } from '../../../components/WeatherForecast/ErrorBanner.js';
import { CurrentPanel } from '../../../components/WeatherForecast/CurrentPanel.js';
import { HourlyChart } from '../../../components/WeatherForecast/HourlyChart.js';
import { DailyForecast } from '../../../components/WeatherForecast/DailyForecast.js';
import { UnitToggle } from '../../../components/WeatherForecast/UnitToggle.js';
import { ThemeToggle } from '../../../components/WeatherForecast/ThemeToggle.js';
import { Favorites } from '../../../components/WeatherForecast/Favorites.js';
import { primeFromSession } from '../../../components/Services/cache.js';
import { useSettings } from '../../../components/State/settingsStore.js';

export const SampleWeatherForecast: React.FC = () => {
  const hydrate = useSettings((s) => s.hydrate);
  const addFavorite = useSettings((s) => s.addFavorite);
  const [coords, setCoords] = useState<{
    lat: number;
    lon: number;
    name: string;
  } | null>(null);
  const { data, loading, error, reload } = useWeather(
    coords?.lat ?? null,
    coords?.lon ?? null,
  );

  useEffect(() => {
    primeFromSession();
    hydrate();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoords({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            name: 'Your Location',
          });
        },
        () => {},
      );
    }
  }, [hydrate]);

  return (
    <div className="container">
      <header
        className="flex"
        style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}
      >
        <h1 style={{ margin: 0 }}>Weather Dashboard</h1>
        <div className="flex">
          <UnitToggle />
          <ThemeToggle />
        </div>
      </header>

      <SearchBar
        onSelect={(r) => {
          setCoords({ lat: r.latitude, lon: r.longitude, name: r.name });
        }}
      />

      <Favorites onSelect={(lat, lon, name) => setCoords({ lat, lon, name })} />

      {error && <ErrorBanner message={error} onRetry={reload} />}

      {loading && <Loader />}

      {data && !loading && (
        <div
          className="grid"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}
        >
          <CurrentPanel
            data={data}
            onFavorite={() => {
              if (coords) addFavorite(coords);
            }}
          />
          <HourlyChart data={data} />
          <DailyForecast data={data} />
        </div>
      )}

      {!data && !loading && !error && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p>Search for a city to begin.</p>
        </div>
      )}
    </div>
  );
};

export default SampleWeatherForecast;
