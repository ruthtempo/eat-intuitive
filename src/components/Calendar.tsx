import { isSameDay } from "date-fns";
import { getDate } from "date-fns/esm";
import format from "date-fns/format";
import React, { useState } from "react";
import { Button, Table } from 'react-bootstrap';
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import { Calendar as SimplestCalendar } from "react-simplest-calendar";
import { HungerInput } from "../App";
import '../Calendar.css';
import { DayLogs } from "./DayLogs";


function isThereLog(date: Date, input: HungerInput[]): boolean {
  for (let i = 0; i < input.length; i++) {
    if (isSameDay(date, input[i].date)) {
      return true
    }
  }
  return false
}


function Calendar(p: { hungerInput: HungerInput[] }) {
  const [toggleStyle, setToggleStyle] = useState(false)
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined)

  return (
    <>
      {selectedDay ? (
        <DayLogs hungerInput={p.hungerInput} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      ) : (
        <div className="d-flex flex-column align-items-center">
          <h3 className="fs-2 mb-3 text-center">Calendar</h3>
          <SimplestCalendar
            renderTable={(children) => <Table style={{ backgroundColor: "white", maxWidth: 400 }}>{children}</Table>}
            renderDay={(record) => {
              const hasLog = isThereLog(record.day, p.hungerInput)
              return (
                <td
                  key={record.day.toISOString()}
                  role={hasLog ? "button" : undefined}
                  className={`px-0 text-center ${hasLog ? "bg-info text-white" : " "} ${record.isCurrentDate ? "today" : ""} ${!record.isCurrentMonth ? "notCurrent" : ""}`}
                  onClick={() => { hasLog && setSelectedDay(record.day) }}
                >
                  {getDate(record.day)}
                </td>
              )
            }}
            renderMonthTitle={(currentDate, prevMonth, nextMonth) =>
              <div className="d-flex justify-content-between align-items-center fs-4">
                <Button
                  variant={toggleStyle ? "primary" : "secondary"}
                  className="text-white"
                  onClick={() => { prevMonth(); setToggleStyle(!toggleStyle) }}
                >
                  <CaretLeft />
                </Button>
                {format(currentDate, 'MMMM yyyy')}
                <Button
                  variant={toggleStyle ? "primary" : "secondary"}
                  className="text-white"
                  onClick={() => { nextMonth(); setToggleStyle(!toggleStyle) }}
                >
                  <CaretRight />
                </Button>
              </div>
            }
          />
        </div>
      )}
    </ >
  )
}

export default Calendar