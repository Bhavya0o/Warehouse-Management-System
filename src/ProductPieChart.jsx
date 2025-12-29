import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ProductPieChart({ orders }) {
  // Count product occurrences
  const productCount = orders.reduce((acc, order) => {
    acc[order.product] = (acc[order.product] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(productCount),
    datasets: [
      {
        label: "Products",
        data: Object.values(productCount),
        backgroundColor: [
          "#4f46e5",
          "#22c55e",
          "#f97316",
          "#ef4444",
          "#0ea5e9",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

export default ProductPieChart;
