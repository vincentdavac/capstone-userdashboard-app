export default function MobileForecast() {
  const forecastData = [
    { date: 'Mon, Jun 19', icon: '🌤️', temp: '28°C', desc: 'Partly Cloudy' },
    { date: 'Tue, Jun 20', icon: '🌧️', temp: '26°C', desc: 'Light Rain' },
    { date: 'Wed, Jun 21', icon: '⛈️', temp: '25°C', desc: 'Thunderstorms' },
    { date: 'Thu, Jun 22', icon: '🌧️', temp: '26°C', desc: 'Heavy Rain' },
    { date: 'Fri, Jun 23', icon: '🌦️', temp: '27°C', desc: 'Showers' },
    { date: 'Sat, Jun 24', icon: '🌤️', temp: '29°C', desc: 'Partly Cloudy' },
    { date: 'Sun, Jun 25', icon: '☀️', temp: '30°C', desc: 'Sunny' },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Box wrapper */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Weather Forecast
        </h2>

        {/* Forecast scroll (horizontal on mobile, grid on sm+) */}
        <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 sm:gap-4 no-scrollbar">
          {forecastData.map((day, index) => (
            <div
              key={index}
              className="min-w-[135px] sm:min-w-0 flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm"
            >
              <div className="text-xs font-medium text-gray-600 dark:text-gray-300">
                {day.date}
              </div>
              <div className="text-3xl my-2">{day.icon}</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {day.temp}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {day.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
