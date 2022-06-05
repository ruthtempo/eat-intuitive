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
import { add, format, getDaysInMonth, getMonth, sub } from "date-fns";
import isSameDay from "date-fns/isSameDay";
import { Button } from "react-bootstrap";


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
      text: 'Monthly Hunger Overview',
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

  const [currentDate, setCurrentDate] = useState(new Date())
  const labels = getDays(currentDate)


  const data = {
    labels: labels.map(label => label.getDate()), //get just the day of the month
    datasets: [
      {
        label: 'Hunger Inputs',
        data: labels.map(label =>
          p.hungerInput.find(input => isSameDay(input.date, label))?.hunger
        ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        spanGaps: true
      },
    ],
  };



  function nextMonth() {
    setCurrentDate(add(currentDate, { months: 1 }))
  }

  function prevMonth() {
    setCurrentDate(sub(currentDate, { months: 1 }))
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-3">
        <Button variant="light" onClick={prevMonth}> Previous Month</Button>
        {format(currentDate, 'MMMM yyyy')}
        <Button variant="light" onClick={nextMonth} >Next Month</Button>
      </div>
      <Line options={options} data={data} />
    </>
  )
}

