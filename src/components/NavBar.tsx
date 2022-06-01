import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Bell, BookmarkHeartFill, Calendar2Check, GraphUp, InfoCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom"

export function NavBar() {
  return (

    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand to="/" as={Link}>IntuEATive</Navbar.Brand>
        <Nav >
          <Nav.Item>
            <Nav.Link><InfoCircle /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/reminder" as={Link}><Bell /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/charts" as={Link}><GraphUp /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/calendar" as={Link}> <Calendar2Check /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/resources" as={Link}><BookmarkHeartFill /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar >

  )
}