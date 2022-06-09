import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BellFill, BookmarkHeartFill, CalendarCheckFill, BarChartFill, QuestionCircleFill, PlusCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom"
import intueative from '../intueative.svg'

export function NavBar() {
  return (

    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand to="/" as={Link}><img src={intueative} width="50"></img></Navbar.Brand>
        <Nav >
          <Nav.Item>
            <Nav.Link className="text-primary" as={Link} to="/instructions"><QuestionCircleFill /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-primary" to="/scale" as={Link} ><PlusCircleFill /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/reminder" as={Link} className="text-primary"><BellFill /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/charts" as={Link} className="text-primary"><BarChartFill /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/calendar" as={Link} className="text-primary"> <CalendarCheckFill /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/resources" as={Link} className="text-primary"><BookmarkHeartFill /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar >

  )
}