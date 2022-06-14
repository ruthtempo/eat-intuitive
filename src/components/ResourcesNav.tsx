import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export const ResourcesNav = () => {
  return (
    <Container className="d-flex flex-column">
      <div className="d-flex justify-content-center mb-3">
        <h3>Resources</h3>
      </div>
      <Link className=" btn btn-primary text-white mb-2" to="raisin-med" > Raisin Meditation </Link>
      <Link className=" btn btn-primary text-white mb-2" to="intu-check" > Quick Intuition Check-in</Link>
    </Container>
  )
}