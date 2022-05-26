import React, { useState } from "react";
import { Button, Table } from 'react-bootstrap'
import './Calendar.css'
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import getDaysInMonth from "date-fns/getDaysInMonth";
import { differenceInCalendarDays, endOfMonth, endOfWeek, getDay, getISODay, getMonth, getWeeksInMonth, isSameMonth, isThisMonth, isToday, subDays, subWeeks } from "date-fns";
import { add, startOfMonth, sub, getDate, startOfWeek } from "date-fns/esm";
import format from "date-fns/format";

interface CalendarRecord {
  day: number,
  checked: boolean,
  isCurrentDate: boolean,
  isCurrentMonth: boolean
}

// function getDaysArray(currentDate: Date) {
//   const numberOfDays = getDaysInMonth(currentDate)
//   const daysInMonth: (CalendarRecord)[] = []

//   //part 1: get days of previous month that belong to the first week of current month
//   const start = startOfMonth(currentDate) //date
//   let prevWeekDay = getDate(startOfWeek(start, { weekStartsOn: 1 }))
//   const firstDay = getISODay(startOfMonth(currentDate))//first weekday of the month

//   for (let i = 0; i < firstDay - 1; i++) {
//     daysInMonth.push( //push days of prev month that belong to the same week of the current month
//       {
//         day: prevWeekDay,
//         checked: false,
//         isCurrentDate: false,
//         isCurrentMonth: false
//       }
//     )
//     prevWeekDay += 1
//   }

//   //part 2: get days in month
//   for (let i = 1; i <= numberOfDays; i++) {
//     daysInMonth.push({
//       day: i,
//       checked: false,
//       isCurrentDate: getDate(currentDate) === i && isToday(currentDate),
//       isCurrentMonth: true
//     })
//   }

//   // part 3: get days of next month
//   const end = getISODay(endOfMonth(currentDate)) //get weekday where current month ends(1-7)
//   for (let i = end + 1; i <= 7; i++) {
//     daysInMonth.push({
//       day: i - end,
//       checked: false,
//       isCurrentDate: false,
//       isCurrentMonth: false
//     })

//   }

//   return daysInMonth
// }

function getDaysArray2(selectedMonth: Date): CalendarRecord[] {

  const start = startOfMonth(selectedMonth) //date
  const begginingOfWeek = startOfWeek(start, { weekStartsOn: 1 })

  const end = endOfMonth(selectedMonth)
  const endOfTheWeek = endOfWeek(end, { weekStartsOn: 1 })

  const daysCount = differenceInCalendarDays(endOfTheWeek, begginingOfWeek)
  const daysInMonth: CalendarRecord[] = []

  for (let i = 0; i <= daysCount; i++) {
    //frist day in the loop = begginingOfWeek
    const currentDate = add(begginingOfWeek, { days: i })

    daysInMonth.push({
      day: getDate(currentDate),
      checked: false,
      isCurrentDate: isToday(currentDate),
      isCurrentMonth: isSameMonth(currentDate, selectedMonth)
    })

  }

  return daysInMonth
}


function getWeeks(days: (CalendarRecord)[], currentDate: Date): (CalendarRecord)[][] {
  const numberOfWeeks = getWeeksInMonth(currentDate, { weekStartsOn: 1 })
  const month: (CalendarRecord)[][] = []
  let counter = 0
  //weeks
  for (let j = 1; j <= numberOfWeeks; j++) {
    const week = [] //array will be created 5 times, and will iterate the subloop 7 times every time (5 columns of 7 days each)

    //days
    for (let i = 0; i <= 6; i++) {
      week.push(days[counter])
      counter++
    };
    month.push(week)// x nº of arrays of numbers in total
  }
  return month
}

function Calendario() {

  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  const [currentDate, setCurrentDate] = useState(new Date())

  // const daysInMonth = getDaysArray(currentDate)
  const daysInMonth2 = getDaysArray2(currentDate)

  console.log(daysInMonth2)

  const rows = getWeeks(daysInMonth2, currentDate)

  function nextMonth() {
    setCurrentDate(add(currentDate, { months: 1 }))
  }

  function prevMonth() {
    setCurrentDate(sub(currentDate, { months: 1 }))
  }


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
                <td
                  key={day?.day}
                  className={`${day?.checked ? "bg-success text-white" : " "} ${day?.isCurrentDate ? "today" : ""} ${!day?.isCurrentMonth ? "notCurrent" : ""}`}
                >{day?.day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div >
  )
}

export default Calendario