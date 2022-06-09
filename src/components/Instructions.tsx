import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import back1 from '../background-lila.png'
import back2 from '../background-yellow.png'


export const Instructions = () => {


  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={back1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Connect with your Hunger</h3>
            <p> Assess your hunger as many times a day you need to.</p>
            <p>Set Reminders</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={back1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Track your Hunger</h3>
            <p>Keep track of your daily and monthly logs, identify your patterns and evolution </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={back1}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3> Develop Intueation & Find Balance</h3>
            <p> Learn to appreciate when to eat and when to stop </p>
            <p> Keep your energy levels and mood more stable along the day.  </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

