import { Sun } from 'lucide-react';

const MobileHome = () => {
  return (
    <div className="min-h-screen p-4 flex flex-col gap-4 ">
      {/* Risk Card */}
      <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 text-center">
        <div className="flex justify-center mb-2">
          <Sun className="text-yellow-400 w-8 h-8" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Moderate Risk
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Monitor for changing conditions
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Wind Speed</p>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            18 km/h
          </h3>
          <p className="text-xs text-red-500">↑ Increasing</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Wave Height
          </p>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            1.2 m
          </h3>
          <p className="text-xs text-green-500">Normal</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Water Level
          </p>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            0.8 m
          </h3>
          <p className="text-xs text-green-500">Normal</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Rainfall</p>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            15 %
          </h3>
          <p className="text-xs text-blue-500">Light Rain</p>
        </div>
      </div>

      {/* Advisory */}
      <div className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 border-l-4 border-yellow-400">
        <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
          Weather Advisory
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Tropical Cyclone #3 is approaching. Expect heavy rains starting
          tonight. Secure loose outdoor items and prepare flashlights.
        </p>
      </div>
    </div>
  );
};

export default MobileHome;
