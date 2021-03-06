import React from "react"
import { isSameDay, format } from "date-fns"
import { Button, Container, ListGroup } from "react-bootstrap"
import { HungerInput } from "../App"



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
    <Container className="d-flex flex-column justify-content-center ">
      <h4>Your Logs on {format(p.selectedDay, "ccc, MMM d, y")}</h4>
      <ListGroup as="ol" numbered>
        {dayLogs.map((input, index) => (
          <ListGroup.Item
            key={index}
            as="li"
            className="d-flex justify-content-between align-items-start bg-secondary text-white mb-2"
          >
            <div className=" ps-2 me-auto">
              <div className="fw-bold">{format(input.date, "H:mm:ss a")}</div>
              <h5>Hunger Level: {input.hunger}</h5>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button onClick={restoreSelection} className="text-white">Back to Calendar</Button>
    </Container >

  )
}