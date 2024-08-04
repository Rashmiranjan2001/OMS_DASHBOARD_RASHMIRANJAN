import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Barchart.css"; // Import the CSS file

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Barchart = () => {
  const data = {
    labels: Array.from({ length: 27 }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        label: "",
        data: [
          5000, 7000, 3000, 9000, 12000, 8000, 6000, 4000, 10000, 9000, 3000,
          5000, 8000, 7000, 10000, 6000, 4000, 11000, 9000, 15000, 12000, 10000,
          8000, 7000, 9000, 6000, 5000,
        ],
        backgroundColor: "#688df7",
        borderRadius: 20,
        barThickness: 13,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff", // Color of y-axis text
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Color of y-axis grid lines
        },
      },
      x: {
        ticks: {
          color: "#fff", // Color of x-axis text
          callback: function (value, index) {
            // Show sparse labels: only the specific indices
            const sparseLabels = [
              2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26,
            ];
            return sparseLabels.includes(index)
              ? this.getLabelForValue(value)
              : "";
          },
        },
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-view">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Barchart;
