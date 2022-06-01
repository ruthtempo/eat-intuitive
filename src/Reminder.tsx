import React from "react";
import { Toast } from "react-bootstrap";


export function Reminder() {
  return (
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">IntuEATive</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>It's time! Connect with your Hunger NOW.</Toast.Body>
    </Toast>
  )
}