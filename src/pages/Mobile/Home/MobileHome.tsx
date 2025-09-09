import { Sun } from 'lucide-react';

const MobileHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col gap-4">
      {/* Risk Card */}
      <div className="w-full bg-white rounded-2xl shadow-md p-6 text-center">
        <div className="flex justify-center mb-2">
          <Sun className="text-yellow-400 w-8 h-8" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Moderate Risk</h2>
        <p className="text-sm text-gray-500">Monitor for changing conditions</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <p className="text-sm text-gray-500">Wind Speed</p>
          <h3 className="text-xl font-bold text-gray-800">18 km/h</h3>
          <p className="text-xs text-red-500">↑ Increasing</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <p className="text-sm text-gray-500">Wave Height</p>
          <h3 className="text-xl font-bold text-gray-800">1.2 m</h3>
          <p className="text-xs text-green-500">Normal</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <p className="text-sm text-gray-500">Water Level</p>
          <h3 className="text-xl font-bold text-gray-800">0.8 m</h3>
          <p className="text-xs text-green-500">Normal</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <p className="text-sm text-gray-500">Rainfall</p>
          <h3 className="text-xl font-bold text-gray-800">15 %</h3>
          <p className="text-xs text-blue-500">Light Rain</p>
        </div>
      </div>

      {/* Advisory */}
      <div className="w-full bg-white rounded-2xl shadow-md p-4 border-l-4 border-yellow-400">
        <h4 className="font-semibold text-gray-800 mb-1">Weather Advisory</h4>
        <p className="text-sm text-gray-600">
          Tropical Cyclone #3 is approaching. Expect heavy rains starting
          tonight. Secure loose outdoor items and prepare flashlights.
        </p>
      </div>
    </div>
  );
};

export default MobileHome;
