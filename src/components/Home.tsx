import React from "react";
import { Container, Button } from "react-bootstrap";
import intueative from '../intueative_lon.png';
import '../App.css';
import { useNavigate } from "react-router-dom";

export function Home() {

  const navigate = useNavigate();
  const navigateToScale = () => {
    navigate('/scale')
  }

  return (
    <>
      <Container className=" my-2 d-flex flex-column justify-content-between text-center">
        <img src={intueative} alt="logo" />
        <h3>Connect with your Hunger</h3>
        <Button onClick={navigateToScale}>Start</Button>
      </Container>
    </>
  )
}