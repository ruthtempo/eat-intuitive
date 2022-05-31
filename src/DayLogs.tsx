import react from "react"
import { formatISO, isSameDay, format } from "date-fns"
import { Button, Container, ListGroup } from "react-bootstrap"
import { HungerInput } from "./App"


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
}) => {


  const dayLogs = seeDayLogs(p.selectedDay, p.hungerInput);

  return (
    <Container>
      <h1>Your Logs on {format(p.selectedDay, "ccc, MMM d, y")}</h1>
      <ListGroup className="my-2" as="ol" numbered>
        {dayLogs.map((input, index) => (
          <ListGroup.Item
            key={index}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Time: {format(input.date, "H:mm:ss a")}</div>
              Hunger Level:{input.hunger}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button>Back to Calendar</Button>
    </Container>

  )
}