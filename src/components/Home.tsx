import React from "react";
import { Container, Button } from "react-bootstrap";
import intueative from '../intueative_lon.png';
import { useNavigate } from "react-router-dom";
import 'animate.css'

export function Home() {

  const navigate = useNavigate();
  const navigateToScale = () => {
    navigate('/scale')
  }

  return (
    <>
      <Container className=" my-2 d-flex flex-column justify-content-between text-center">
        <img src={intueative} alt="logo" className="animate__animated  animate__pulse" />
        <p>Connect with your Hunger</p>
        <Button onClick={navigateToScale} className="bg-primary text-white mt-4">Start</Button>
      </Container>
    </>
  )
}