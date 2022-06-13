import React from "react";
import { Container, Button } from "react-bootstrap";
import intueative from '../intueative_lon.png';
import subtitle from '../untertitel.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import 'animate.css'

export function Home() {

  const navigate = useNavigate();
  const navigateToScale = () => {
    navigate('/scale')
  }

  const [pulse, setPulse] = useState(0)



  return (
    <>
      <Container className=" my-2 d-flex flex-column justify-content-between text-center">
        <img
          src={intueative}
          alt="logo"
          onClick={() => setPulse(1)}
          onAnimationEnd={() => setPulse(0)}
          className={pulse ? "animate__animated animate__pulse" : ""} />
        <img src={subtitle} alt="subtitle" />
        <Button onClick={navigateToScale} className="bg-primary text-white mt-4">Start</Button>
      </Container>
    </>
  )
}