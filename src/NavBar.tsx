import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Bell, BookmarkHeartFill, Calendar2Check, GraphUp, InfoCircle } from "react-bootstrap-icons";

export function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">IntuEATive</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><InfoCircle /></Nav.Link>
          <Nav.Link href="#reminders"><Bell /></Nav.Link>
          <Nav.Link href="#overview"><GraphUp /></Nav.Link>
          <Nav.Link href="#calendar"> <Calendar2Check /></Nav.Link>
          <Nav.Link href="#resources"><BookmarkHeartFill /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}