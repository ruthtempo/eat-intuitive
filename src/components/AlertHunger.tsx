import React from "react"
import { Toast } from "react-bootstrap"
import icon from '../logo.png'

export const AlertHunger = (p: {
  toggleShow: () => void,
  show: boolean
}
) => {

  return (
    <>
      <Toast show={p.show} onClose={p.toggleShow}>
        <Toast.Header>
          <img src={icon} style={{ width: 30, height: 30 }} className="rounded me-2" alt="" />
          <strong className="me-auto">IntUeative</strong>
        </Toast.Header>
        <Toast.Body>It's time! Connect with your Hunger NOW.</Toast.Body>
      </Toast>
    </>
  )
}