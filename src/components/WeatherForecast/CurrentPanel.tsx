import React from 'react';

export const CurrentPanel: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Current
        </h2>
        <button className="text-yellow-500 hover:text-yellow-600">
          ☆ Favorite
        </button>
      </div>

      {/* Temperature */}
      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
        28.5°C
      </div>

      {/* Condition */}
      <div className="text-gray-500 dark:text-gray-400 mb-4">Partly Cloudy</div>

      {/* Extra info */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
        <span>Wind: 3.4 m/s</span>
        <span>Humidity: 65%</span>
        <span>Coords: 14.60, 121.00</span>
      </div>
    </div>
  );
};
