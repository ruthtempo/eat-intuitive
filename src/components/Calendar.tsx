import React, { useState } from "react";
import { Button, Table, Container } from 'react-bootstrap'
import '../Calendar.css'
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import { differenceInCalendarDays, endOfMonth, endOfWeek, getWeeksInMonth, isSameDay, isSameMonth, isThisMonth, isToday, subDays, subWeeks } from "date-fns";
import { add, startOfMonth, sub, getDate, startOfWeek } from "date-fns/esm";
import format from "date-fns/format";
import { HungerInput } from "../App";
import { DayLogs } from "./DayLogs"


interface CalendarRecord {
  day: Date,
  checked: boolean,
  isCurrentDate: boolean,
  isCurrentMonth: boolean
}


function isThereLog(date: Date, input: HungerInput[]): boolean {
  for (let i = 0; i < input.length; i++) {
    if (isSameDay(date, input[i].date)) {
      return true
    }
  }
  return false
}

function getDaysArray(selectedMonth: Date, hungerInput: HungerInput[]): CalendarRecord[] {

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
      day: currentDate,
      checked: isThereLog(currentDate, hungerInput),
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

function Calendar(p: { hungerInput: HungerInput[] }) {

  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  const [currentDate, setCurrentDate] = useState(new Date())

  const daysInMonth = getDaysArray(currentDate, p.hungerInput)

  const rows = getWeeks(daysInMonth, currentDate)

  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined)

  function nextMonth() {
    setCurrentDate(add(currentDate, { months: 1 }))
  }

  function prevMonth() {
    setCurrentDate(sub(currentDate, { months: 1 }))
  }



  return (
    <>
      <div className="fs-2 text-center">Calendar</div>
      {selectedDay ? (
        <DayLogs hungerInput={p.hungerInput} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      ) : (
        <Table style={{ backgroundColor: "white", maxWidth: 400 }} className="rounded">
          <thead>
            <tr>
              <th colSpan={7}>
                <div className="d-flex justify-content-between align-items-center">
                  <Button variant="light" onClick={prevMonth}><CaretLeft /></Button>
                  {format(currentDate, 'MMMM yyyy')}
                  <Button variant="light" onClick={nextMonth} ><CaretRight /></Button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {weekdays.map(weekday => (
                <td className="px-0 text-center" key={weekday}><small>{weekday}</small></td>
              ))}
            </tr>
            {rows.map(row => (
              <tr key={row[0].day.toISOString()} >
                {row.map(day => (
                  <td
                    key={day.day.toISOString()}
                    className={`px-0 text-center ${day.checked ? "bg-success text-white" : " "} ${day.isCurrentDate ? "today" : ""} ${!day.isCurrentMonth ? "notCurrent" : ""}`}
                    onClick={() => { setSelectedDay(day.day) }}
                  >
                    {getDate(day.day)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )
      }
    </ >
  )
}

export default Calendar