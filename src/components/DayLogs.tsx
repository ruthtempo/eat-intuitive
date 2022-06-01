import react from "react"
import { formatISO, isSameDay, format } from "date-fns"
import { Button, Container, ListGroup } from "react-bootstrap"
import { HungerInput } from "../App"
import { Link } from "react-router-dom"
import { useState } from "react"


//view day logs at different times of the day


function seeDayLogs(selectedDay: Date, hungerInput: HungerInput[]) {

  const dayLogs: HungerInput[] = hungerInput.filter(input =>
    isSameDay(input.date, selectedDay)
  )

  return dayLogs
}

export const DayLogs = (p: {
  hungerInput: HungerInput[]
  selectedDay: Date
  setSelectedDay: React.Dispatch<React.SetStateAction<Date | undefined>>
}) => {

  function restoreSelection() {
    p.setSelectedDay(undefined)
  }

  const dayLogs = seeDayLogs(p.selectedDay, p.hungerInput);

  return (
    <Container>
      <h1>Your Logs on {format(p.selectedDay, "ccc, MMM d, y")}</h1>
      <ListGroup className="my-2 col justify-content-center" as="ol" numbered>
        {dayLogs.map((input, index) => (
          <ListGroup.Item
            key={index}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{format(input.date, "H:mm:ss a")}</div>
              <h5>Hunger Level: {input.hunger}</h5>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button onClick={restoreSelection}>Back to Calendar</Button>
    </Container >

  )
}