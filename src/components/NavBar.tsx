import { Container, Nav, Navbar } from "react-bootstrap";
import {
  BarChartFill,
  BellFill,
  BookmarkHeartFill,
  CalendarCheckFill,
  PlusCircleFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import intueative from "../intueative.svg";

export function NavBar() {
  return (
    <Navbar bg="light" variant="light" className="flex-grow-0">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          <img src={intueative} width="50" alt="logo"></img>
        </Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link className="text-primary" to="/scale" as={Link}>
              <PlusCircleFill className="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/reminder" as={Link} className="text-primary">
              <BellFill className="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/charts" as={Link} className="text-primary">
              <BarChartFill className="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/calendar" as={Link} className="text-primary">
              {" "}
              <CalendarCheckFill className="icon" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/resources" as={Link} className="text-primary">
              <BookmarkHeartFill className="icon" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
