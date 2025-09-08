// stock

// src/pages/Stock.js
import React from "react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500,],
    },
  ],
  options: {
    chart: {
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    colors: ["#2563eb"], // Tailwind blue-600
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 4,
      },
    },
    xaxis: {
      categories: ["Apples", "Bananas", "Juniper", "Dec"],
      labels: {
        style: { colors: "#6b7280", fontSize: "12px" }, // gray-500
      },
    },
    yaxis: {
      labels: {
        style: { colors: "#6b7280", fontSize: "12px" },
      },
    },
    grid: {
      borderColor: "#e5e7eb", // gray-200
      strokeDashArray: 4,
    },
    tooltip: { theme: "dark" },
  },
};

export default function Stock() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-blue-600 text-white p-3 rounded-lg">
          📊
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Bar Chart</h2>
          <p className="text-sm text-gray-500">
            Visualize your data in a simple way with ApexCharts.
          </p>
        </div>
      </div>

      {/* Chart */}
      <Chart {...chartConfig} />
    </div>
  );
}