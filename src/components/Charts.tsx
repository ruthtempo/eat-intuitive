import React, { useState } from "react";
import { Line } from "react-chartjs-2"
import { HungerInput } from "../App"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { getDaysInMonth, getMonth } from "date-fns";
import isSameDay from "date-fns/isSameDay";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    y: {
      min: 1,
      max: 10
    }
  }
};








function getDays(currentMonth: Date) {
  const daysInMonth = getDaysInMonth(currentMonth)
  const month: Date[] = []

  for (let i = 1; i <= daysInMonth; i++) {
    month.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i))
  }

  return month

}

export function Charts(p: {
  hungerInput: HungerInput[]
}) {


  const labels = getDays(new Date())


  const data = {
    labels: labels.map(label => label.getDate()),
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(label =>
          p.hungerInput.find(input => isSameDay(input.date, label))?.hunger
        ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        spanGaps: true
      },
    ],
  };


  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}

