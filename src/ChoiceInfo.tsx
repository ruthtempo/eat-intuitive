import React from "react";
import { Container, Card } from "react-bootstrap";

export function ChoiceInfo() {
  return (
    <Container>
      <Card>
        <Card.Title>
          You are feeling...hungertitle
        </Card.Title>
        <Card.Text>
          longerdescription/reccommendations
        </Card.Text>
      </Card>
    </Container>
  )
}