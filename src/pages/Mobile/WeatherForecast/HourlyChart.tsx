import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

export const HourlyChart: React.FC = () => {
  const chartData = {
    labels: [
      '1 AM',
      '2 AM',
      '3 AM',
      '4 AM',
      '5 AM',
      '6 AM',
      '7 AM',
      '8 AM',
      '9 AM',
      '10 AM',
      '11 AM',
      '12 PM',
    ],
    datasets: [
      {
        label: 'Next 12h Temperature (°C)',
        data: [25, 24, 23, 22, 23, 24, 26, 28, 30, 29, 28, 27],
        tension: 0.35,
        fill: true,
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37,99,235,0.25)',
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: {
      y: {
        ticks: {
          callback: (v: number | string) => v + '°',
        },
      },
    },
  };

  return (
    <div className="w-full mb-2 max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Hourly
      </h2>
      <Line data={chartData} options={options} />
    </div>
  );
};
