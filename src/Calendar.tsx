import React, { useState } from "react";
import { Button, Table } from 'react-bootstrap'
import './Calendar.css'
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import getDaysInMonth from "date-fns/getDaysInMonth";

const date = new Date(2022, 1)
const numberOfDays = getDaysInMonth(date) //number

interface CalendarRecord {
  day: number,
  checked: boolean,

}


function Calendario() {
  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysInMonth: CalendarRecord[] = []
  let weeksInMonth: number[] = []

  function getDaysArray(n: number) {
    for (let i = 1; i <= n; i++) {
      daysInMonth.push({
        day: i,
        checked: false
      })
    }
    console.log(daysInMonth)

  }
  getDaysArray(numberOfDays)


  const rows = [[
    {
      day: 1,
      checked: false
    },
    {
      day: 2,
      checked: true
    },
    {
      day: 3,
      checked: true
    },
    {
      day: 4,
      checked: true
    },
    {
      day: 5,
      checked: true
    },
    {
      day: 6,
      checked: true
    },
    {
      day: 7,
      checked: true
    }], [
    {
      day: 8,
      checked: true
    },
    {
      day: 9,
      checked: true
    },
    {
      day: 10,
      checked: false
    },
    {
      day: 11,
      checked: true
    },
    {
      day: 12,
      checked: true
    },
    {
      day: 13,
      checked: true
    },
    {
      day: 14,
      checked: false
    }
  ], [
    {
      day: 15,
      checked: true
    },
    {
      day: 16,
      checked: true
    },
    {
      day: 17,
      checked: true
    },
    {
      day: 18,
      checked: false
    },
    {
      day: 19,
      checked: true
    },
    {
      day: 20,
      checked: false
    },
    {
      day: 21,
      checked: true
    }

  ]
  ]



  return (
    <div>
      <Table style={{ backgroundColor: "white", width: 400, borderRadius: 20, margin: 20, }}>
        <thead>
          <tr>
            <th colSpan={7}>
              <div className="d-flex justify-content-between">
                <Button variant="light"><CaretLeft /></Button>
                MAY 2022
                <Button variant="light"><CaretRight /></Button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {weekdays.map(weekday => (
              <td>{weekday}</td>
            ))}
          </tr>
          {rows.map(row => (
            <tr key={row[0].day} >
              {row.map(day => (
                <td key={day.day} className={day.checked ? "bg-success text-white" : " "}>{day.day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div >
  )
}

export default Calendario