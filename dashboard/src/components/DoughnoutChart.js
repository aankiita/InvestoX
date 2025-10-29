//copy all code from the eact-chartjs-2.js.org for doughnut chart and go on stackBlitz and copy code for doughnut from App.tsx
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {  //pass data as props--> {data}  and import doughnut inside the watchlist.js
  return <Doughnut data={data} />; 
}