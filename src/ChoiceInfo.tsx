import React from "react";
import { Container, Card, Button, Navbar } from "react-bootstrap";
import { hungerLevels, HungerInput } from "./Scale";


export function ChoiceInfo(p: {
  hungerInput: HungerInput[],
}) {
  //latest object saved (hungerinput)
  const latestHungerInput = p.hungerInput[p.hungerInput.length - 1]
  //object according to its index position
  const hungerLevel = latestHungerInput ? hungerLevels[latestHungerInput.hunger - 1] : undefined

  return (
    <Container>
      <Card>
        <Card.Title>
          You are feeling {hungerLevel?.title}
        </Card.Title>
        <Card.Text>
          {hungerLevel?.reccommendations}
        </Card.Text>
      </Card>
      <Button>
        Home
      </Button>
    </Container>
  )
}