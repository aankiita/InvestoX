import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",  //change text from chart.js Bar chart that was in react document to Holding as we are making graph for holding
    },
  },
};

export function VerticalGraph({ data }) {   //hum apna data pass kar rahe hai(as a prop) jo ki humara data hum Holding mai create karenge taki data ka ye graph bana kar de
  return <Bar options={options} data={data} />;
}

//call the VerticalGraph in Holding.js