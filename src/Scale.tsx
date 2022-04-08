import React, { useState } from "react"
import { Button, ButtonGroup, Card, Accordion, Container } from "react-bootstrap"
import { ChoiceInfo } from "./ChoiceInfo"

//interfaces are for objects
export interface HungerInput {
  date: string,
  hunger: number,
  time: string,
}

type Components = "Scale" | "ChoiceInfo"

export const hungerLevels = [
  {
    title: "Starving",
    description: "Feeling weak, nauseous, dizzy",
    reccommendations: ""
  },
  {
    title: "Extremely Hungry",
    description: "Could eat anything in sight; feeling irritable and no energy",
    reccommendations: ""
  },
  {
    title: "Pretty Hungry",
    description: "Strong desire to eat; stomach starts to rumble",
    reccommendations: "",
  },
  {
    title: "Slightly Hungry",
    description: "Starting to feel hungry: 'I could eat'",
    reccommendations: ""
  },
  {
    title: "Neutral",
    description: "Neither hungry nor full",
    reccommendations: "hola"
  },
  {
    title: "Mild fullness",
    description: "Stomach feels full but not feeling satisfied yet",
    reccommendations: ""
  },
  {
    title: "Satisfied",
    description: "No longer feeling hungry; pleasantly full; could eat more for pleasure",
    reccommendations: ""
  },
  {
    title: "Uncomfortably Full",
    description: "Beyond satisfied; feeling very full and slightly uncomfortable",
    reccommendations: ""
  },
  {
    title: "Stuffed",
    description: "feeling uncomfortable; in a food coma",
    reccommendations: ""
  },
  {
    title: "Painfully full",
    description: "Beyond full: stomach aches,  feeling sick and with no desire to look at food",
    reccommendations: ""
  }

]


export function Scale() {

  const today = new Date().toISOString()
  const date = today.slice(0, 10)
  const time = today.slice(11, 16)

  let [hungerInput, setHungerInput] = useState<HungerInput[]>([])

  function saveHungerInput(input: number) {
    setHungerInput(hungerInput.concat({
      date: date,
      hunger: input,
      time: time,
    }))
  }

  const [currentComponent, setCurrentComponent] = useState<Components>('Scale')

  return (
    <Container>
      {currentComponent === "Scale" && (
        <>
          <Card className="py-4 mb-3">
            <h3>How Hungry Are You? </h3>
            <ButtonGroup className="mx-2 mb-3" aria-label="First group">
              {hungerLevels.map(
                (_, index) => (<Button key={index + 1} onClick={() => {
                  saveHungerInput(index + 1)
                  setCurrentComponent('ChoiceInfo')
                }} >{index + 1}</Button>)
              )}
            </ButtonGroup>
          </Card>
          <Card>
            <h2>Hunger-Fullness Scale</h2>
            <Accordion>
              {hungerLevels.map(
                (level, index) => (
                  <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>{index + 1}# {level.title}</Accordion.Header>
                    <Accordion.Body>
                      {level.description}
                    </Accordion.Body>
                  </Accordion.Item>
                )
              )}
            </Accordion>
          </Card>
        </>
      )}
      {currentComponent === "ChoiceInfo" && <ChoiceInfo hungerInput={hungerInput} />}
    </Container>
  )
}