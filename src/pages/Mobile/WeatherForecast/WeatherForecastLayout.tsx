import CurrentPanel from './CurrentPanel';
import { HourlyChart } from './HourlyChart';
import SearchBar from './SearchBar';
import MobileWeatherForecast from './WeatherForecast';

const MobileWeatherForecastLayout: React.FC = () => {
  return (
    <div>
      {/* Left column */}
      <div className="space-y-6 lg:col-span-2">
        <SearchBar />
        <CurrentPanel />
        <HourlyChart />
      </div>

      {/* Right column */}
      <div>
        <MobileWeatherForecast />
      </div>
    </div>
  );
};

export default MobileWeatherForecastLayout;
