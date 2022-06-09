import React, { useState } from "react"
import { Button, ButtonGroup, Card, Accordion, Container } from "react-bootstrap"
import { ChoiceInfo } from "./ChoiceInfo"
import { HungerInput } from "../App"


//interfaces are for objects


export type Components = "Scale" | "ChoiceInfo"

export const hungerLevels = [
  {
    title: "Starving",
    description: "Feeling weak, nauseous, dizzy",
    background: "hsl(10, 100%, 66%)",
    reccommendations: "You waited too long and you feel awfully low. In order to avoid reaching this hunger level, make sure you have an nourishful snack with you at all times"
  },
  {
    title: "Extremely Hungry",
    description: "Could eat anything in sight; feeling irritable and no energy",
    background: "hsl(30, 100%, 66%)",
    reccommendations: "You are so hungry you could eat an elephant. You can't concentrate on anything but eating. In this state you might choose your meal poorly, and there is a good change you end up eating fast with no enjoyement, overeating and moving to the opposite end of the Hunger-Fullnes Scale."
  },
  {
    title: "Pretty Hungry",
    description: "Strong desire to eat; stomach starts to rumble",
    background: "hsl(50, 100%, 66%)",
    reccommendations: "It is a great time to eat. Don't leave your hunger unattended for much longer or you might lose control over what, how, and how much you eat.",
  },
  {
    title: "Slightly Hungry",
    description: "Starting to feel hungry: 'I could eat'",
    background: "hsl(70, 100%, 66%)",
    reccommendations: "It is a good time to grab a bite or start preparing yourself a whole meal. "
  },
  {
    title: "Neutral",
    description: "Neither hungry nor full",
    background: "hsl(100, 100%, 66%)",
    reccommendations: "It's no time to eat yet. Check in with your hunger in a bit."
  },
  {
    title: "Mild fullness",
    description: "Stomach feels full but not feeling satisfied yet",
    background: "hsl(70, 100%, 66%)",
    reccommendations: "It f you stop eating now, you will be hungry in short.It is advisable that you keep eating until feeling satisfied, "
  },
  {
    title: "Satisfied",
    description: "No longer feeling hungry; pleasantly full; could eat more for pleasure",
    background: "hsl(50, 100%, 66%)",
    reccommendations: "It is the perfect time to stop eating. You ate, you feel great, and you won't be needing to eat again for a while"
  },
  {
    title: "Uncomfortably Full",
    description: "Beyond satisfied; feeling very full and slightly uncomfortable",
    background: "hsl(30, 100%, 66%)",
    reccommendations: "You ate a little past your feeling satisfied. If you want to avoid feeling worse, it's time to stop."
  },
  {
    title: "Stuffed",
    description: "feeling uncomfortable; in a food coma",
    background: "hsl(10, 100%, 66%)",
    reccommendations: "You ate way too much and you might feel your energy levels dropping, maybe feeling like taking a nap"
  },
  {
    title: "Painfully full",
    description: "Beyond full: stomach aches,  feeling sick and with no desire to look at food",
    background: "hsl(10, 100%, 66%)",
    reccommendations: "You surpassed the limits of your stomach and your body is really letting you painfully know. Maybe next time wou'll remember how awful you felt and this will help you to avoid pushing your body so hard"
  }

]


export function Scale(p: {
  hungerInput: HungerInput[],
  setHungerInput: (input: HungerInput[]) => void
}) {

  function saveHungerInput(input: number) {
    const newHungerInput = p.hungerInput.concat({
      date: new Date(),
      hunger: input,
    })

    localStorage.setItem('hungerInput', JSON.stringify(newHungerInput))

    p.setHungerInput(newHungerInput)

  }

  const [currentComponent, setCurrentComponent] = useState<Components>('Scale')

  return (
    <>
      {currentComponent === "Scale" && (
        <>
          <Card className="my-3" >
            <Card.Header className="card text-center bg-primary text-white" >How Hungry Are You?</Card.Header>
            <Card.Body className="card text-center ">
              <ButtonGroup aria-label="First group" style={{ overflowY: "scroll" }}>
                {hungerLevels.map(
                  (l, index) => (<Button style={{ backgroundColor: l.background }} className="text-black border border-light" key={index + 1} onClick={() => {
                    saveHungerInput(index + 1)
                    setCurrentComponent('ChoiceInfo')
                  }} >{index + 1}</Button>)
                )}
              </ButtonGroup>
            </Card.Body>
          </Card>
          <Card >
            <Card.Header className="card text-center bg-primary text-white">
              Hunger-Fullness Scale
            </Card.Header>
            <Card.Body>
              <Accordion>
                {hungerLevels.map(
                  (level, index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                      <Accordion.Header>{index + 1}# {level.title}</Accordion.Header>
                      <Accordion.Body style={{ backgroundColor: level.background }}>
                        {level.description}
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                )}
              </Accordion>
            </Card.Body>
          </Card>
        </>
      )
      }
      {currentComponent === "ChoiceInfo" && <ChoiceInfo hungerInput={p.hungerInput} setCurrentComponent={setCurrentComponent} />}
    </>
  )
}