import React, { useState } from "react";
import { Button, Table } from 'react-bootstrap'
import './Calendar.css'
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import getDaysInMonth from "date-fns/getDaysInMonth";
import { getWeeksInMonth } from "date-fns";
import { add, startOfMonth, sub } from "date-fns/esm";
import format from "date-fns/format";



const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface CalendarRecord {
  day: number,
  checked: boolean,

}


function Calendario() {

  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
  const daysInMonth: CalendarRecord[] = []
  // const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentDate, setCurrentDate] = useState(new Date())
  const numberOfDays = getDaysInMonth(currentDate) //number
  const numberOfWeeks = getWeeksInMonth(currentDate)
  const monthBeginning = startOfMonth(currentDate)


  function getDaysArray(n: number) {
    for (let i = 1; i <= n; i++) {
      daysInMonth.push({
        day: i,
        checked: false
      })
    }
  }


  getDaysArray(numberOfDays)

  function getWeeks(days: CalendarRecord[], weeksCount: number): (CalendarRecord | undefined)[][] {
    const month: (CalendarRecord | undefined)[][] = []
    let counter = 0
    //weeks
    for (let j = 1; j <= weeksCount; j++) {
      const week = [] //array will be created 5 times, and will iterate the subloop 7 times every time (5 columns of 7 days each)

      //days
      for (let i = 0; i <= 6; i++) { //days of week
        week.push(days[counter]) //ich brauche ein index das uber die month days  - it does not exist yet
        counter++
      };

      month.push(week)//5 arrays of numbers in total

    }
    return month
  }


  const rows = getWeeks(daysInMonth, numberOfWeeks)

  function nextMonth() {
    setCurrentDate(add(currentDate, { months: 1 }))
  }

  function prevMonth() {
    setCurrentDate(sub(currentDate, { months: 1 }))
  }


  console.log("currentmonth: ", currentDate)


  return (
    <div>
      <Table style={{ backgroundColor: "white", width: 400, borderRadius: 20, margin: 20, }}>
        <thead>
          <tr>
            <th colSpan={7}>
              <div className="d-flex justify-content-between">
                <Button variant="light" onClick={prevMonth}><CaretLeft /></Button>
                {format(currentDate, 'MMM yyyy')}
                <Button variant="light" onClick={nextMonth} ><CaretRight /></Button>
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
            <tr key={row[0]?.day} >
              {row.map(day => (
                <td key={day?.day} className={day?.checked ? "bg-success text-white" : " "}>{day?.day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div >
  )
}

export default Calendario