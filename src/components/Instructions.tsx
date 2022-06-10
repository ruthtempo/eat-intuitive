import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import back1 from '../background-lila.png'
import slide1 from '../1.png'
import slide2 from '../2.png'
import slide3 from '../3.png'
import slide4 from '../4.png'
import slide5 from '../5.png'



export const Instructions = () => {


  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Connect</h3>
            <p> Assess your hunger along the day</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Set Reminders</h3>
            <p>Keep track of your daily logs </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Keep Track</h3>
            <p>Keep track of your daily logs </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3> Be Conciouss</h3>
            <p> Identify your patterns and evolution</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3> Develop Intueation</h3>
            <p>  Develop a sense when to eat and when to stop </p>
            <p>  Keep your energy levels more stable through the day</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

