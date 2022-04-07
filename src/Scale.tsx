import React, { useState } from "react"
import { Button, ButtonGroup, Card, Accordion, Container } from "react-bootstrap"


const hungerLevels = [
  {
    number: 1,
    title: "starving",
    description: "Feeling weak, nauseous, dizzy",
    reccommendations: ""
  },
  {
    number: 2,
    title: "Extremely Hungry",
    description: "Could eat anything in sight; feeling irritable and no energy",
    reccommendations: ""
  },
  {
    number: 3,
    title: "Pretty Hungry",
    description: "Strong desire to eat; stomach starts to rumble",
    reccommendations: "",
  },
  {
    number: 4,
    title: "Slightly Hungry",
    description: "Starting to feel hungry: 'I could eat'",
    reccommendations: ""
  },
  {
    number: 5,
    title: "Neutral",
    description: "Neither hungry nor full",
    reccommendations: ""
  },
  {
    number: 6,
    title: "Mild fullness",
    description: "Stomach feels full but not feeling satisfied yet",
    reccommendations: ""
  },
  {
    number: 7,
    title: "Satisfied",
    description: "No longer feeling hungry; pleasantly full; could eat more for pleasure",
    reccommendations: ""
  },
  {
    number: 8,
    title: "Uncomfortably Full",
    description: "Beyond satisfied; feeling very full and slightly uncomfortable",
    reccommendations: ""
  },
  {
    number: 9,
    title: "Stuffed",
    description: "feeling uncomfortable; in a food coma",
    reccommendations: ""
  },
  {
    number: 10,
    title: "Painfully full",
    description: "Beyond full: stomach aches,  feeling sick and with no desire to look at food",
    reccommendations: ""
  }

]


export function Scale() {

  return (
    <Container>
      <Card className="py-4 mb-3">
        <h3>How Hungry Are You? </h3>
        <ButtonGroup className="mx-2 mb-3" aria-label="First group">
          {hungerLevels.map(
            (level) => (<Button>{level.number}</Button>)
          )}
        </ButtonGroup>
      </Card>
      <Card>
        <h2>Hunger-Fullness Scale</h2>
        <Accordion>
          {hungerLevels.map(
            (level, index) => (
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{level.number}# {level.title}</Accordion.Header>
                <Accordion.Body>
                  {level.description}
                </Accordion.Body>
              </Accordion.Item>
            )
          )}
        </Accordion>
      </Card>
    </Container>
  )
}