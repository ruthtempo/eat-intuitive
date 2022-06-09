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
import { Button, Card } from "react-bootstrap";
import { CaretLeft, CaretRight } from "react-bootstrap-icons";



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);





function getDays(currentMonth: Date) {
  const daysInMonth = getDaysInMonth(currentMonth)
  const month: Date[] = []

  for (let i = 1; i <= daysInMonth; i++) {
    month.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i))
  }

  return month
}

function getAverageHungerForDay(hungerInput: HungerInput[], date: Date) {
  const dayInputs = hungerInput.filter(input => isSameDay(input.date, date))

  let inputSum = 0
  for (let i = 0; i < dayInputs.length; i++) {
    inputSum += dayInputs[i].hunger
  }

  const average = inputSum / dayInputs.length

  return average
}



export function Charts(p: {
  hungerInput: HungerInput[]
}) {
  const options = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },

    },
    scales: {
      y: {
        min: 1,
        max: 10
      }
    },
    elements: {
      point: {
        // pointStyle: 'star',
        radius: 5,
      }
    }
  };

  const [currentDate, setCurrentDate] = useState(new Date())
  const labels = getDays(currentDate)
  // const average = getAverageHungerForDay(p.hungerInput, currentDate)

  const data = {
    labels: labels.map(label => label.getDate()), //get just the day of the month
    datasets: [
      {
        label: 'Your Hunger Logs (Daily Average)',
        data: labels.map(label => getAverageHungerForDay(p.hungerInput, label)
          // p.hungerInput.find(input => isSameDay(input.date, label))?.hunger
        ),
        borderColor: '#BAD9B5',
        backgroundColor: '#BAD9B5 ',
        spanGaps: true,
      },
    ],
  };


  const [toggleStyle, setToggleStyle] = useState(false)

  function nextMonth() {
    setToggleStyle(!toggleStyle)
    setCurrentDate(add(currentDate, { months: 1 }))
  }

  function prevMonth() {
    setToggleStyle(!toggleStyle)
    setCurrentDate(sub(currentDate, { months: 1 }))
  }

  return (
    <>
      <h3 className="fs-2 mb-3 text-center text-dark">Hunger Overview</h3>
      <Card>
        <Card.Header className={`d-flex justify-content-center align-items-center py-3 fs-4 ${toggleStyle ? "bg-primary text-white" : "bg-secondary text-white"}`} >
          <Button className="me-3 text-white" variant={toggleStyle ? "primary" : "secondary"} onClick={prevMonth}><CaretLeft /></Button>
          {format(currentDate, 'MMMM yyyy')}
          <Button className="ms-3 text-white" variant={toggleStyle ? "primary" : "secondary"} onClick={nextMonth} ><CaretRight /></Button>
        </Card.Header>
        <Card.Body>
          <Line options={options} data={data} />
        </Card.Body>
      </Card>
    </>
  )
}

