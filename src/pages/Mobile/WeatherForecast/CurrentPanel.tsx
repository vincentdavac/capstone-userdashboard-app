const CurrentPanel: React.FC = () => {
  return (
    <>
      <div className="w-full mb-2 max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Current
          </h2>
          <button className="text-yellow-500 hover:text-yellow-600 transition-colors">
            ☆ Favorite
          </button>
        </div>

        {/* Temperature */}
        <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          28.5°C
        </div>

        {/* Weather condition */}
        <div className="text-gray-500 dark:text-gray-400 mb-4">
          Partly Cloudy
        </div>

        {/* Extra info */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
          <span>💨 Wind: 5.2 m/s</span>
          <span>💧 Humidity: 68%</span>
          <span>📍 Coords: 14.60, 121.00</span>
        </div>
      </div>
    </>
  );
};

export default CurrentPanel;
