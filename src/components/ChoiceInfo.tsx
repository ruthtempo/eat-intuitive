import React from "react";
import { Card, Button } from "react-bootstrap";
import { hungerLevels, Components } from "./Scale";
import { HungerInput } from "../App"
import { useNavigate } from 'react-router-dom'



export function ChoiceInfo(p: {
  hungerInput: HungerInput[],
  setCurrentComponent: (component: Components) => void
}) {
  const navigate = useNavigate();
  //latest object saved (hungerinput)
  const latestHungerInput = p.hungerInput[p.hungerInput.length - 1];
  //object according to its index position
  const hungerLevel = latestHungerInput ? hungerLevels[latestHungerInput.hunger - 1] : undefined;

  return (
    <>
      <Card className="my-4">
        <Card.Body>
          <Card.Title>
            You are feeling {hungerLevel?.title}
          </Card.Title>
          <Card.Text>
            {hungerLevel?.reccommendations}
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-between">
        <Button className="text-white" onClick={() => p.setCurrentComponent('Scale')}>
          Back To Hunger Scale
        </Button>
        <Button className="text-white" onClick={() => navigate("/reminder")}>
          Set Alert
        </Button>
      </div>

    </>
  )
}