import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">IntuEATive</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Alerts</Nav.Link>
          <Nav.Link href="#features">Overview</Nav.Link>
          <Nav.Link href="#pricing">Resources</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}