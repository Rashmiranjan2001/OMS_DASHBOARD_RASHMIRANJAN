import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Product 1', 'Product 2'],
  datasets: [
    {
      label: '',
      data: [70, 30],
      backgroundColor: ['#3f7de0', '#253b5e'],
      borderWidth: 0,
    },
  ],
};

export const options = {
  responsive: true,
  cutout: '75%', // Further adjusted cutout percentage
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: '',
    },
  },
};

const Donutchart = () => {
  const [chartData] = useState(data);

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-2 rounded-lg flex items-center px-6">
      <div className="flex flex-col items-start mr-4">
        <div className="text-sm">Net Profit</div>
        <div className="text-2xl font-bold my-1">$6759.25</div>
        <div className="text-green-500 text-xs">▲ 3%</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24"> {/* Doughnut size */}
          <Doughnut options={options} data={chartData} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xxs font-bold">70%</div> {/* Further reduced font size */}
              <div style={{ fontSize: '7px' }} className="text-gray-400">Goal Completed</div> {/* Font size set to 7px */}
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-1">*The values here have been rounded off.</div>
      </div>
    </div>
  );
};

export default Donutchart;
