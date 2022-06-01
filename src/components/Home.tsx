import React from "react";
import { Container, Button } from "react-bootstrap";
import logo from '../logo.svg';
import '../App.css';
import { useNavigate } from "react-router-dom";

export function Home() {

  const navigate = useNavigate();
  const navigateToScale = () => {
    navigate('/scale')
  }

  return (
    <>
      <Container className=" my-4 d-flex flex-column justify-content-between text-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Connect with your Hunger</h3>
        <Button onClick={navigateToScale}>Start</Button>
      </Container>
    </>
  )
}