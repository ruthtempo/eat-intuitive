import React from "react"
import { Button, Toast, ToastContainer } from "react-bootstrap"
import { PlusCircleFill } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import icon from '../logo.png'

export const AlertHunger = (p: {
  toggleShow: () => void,
  show: boolean
}
) => {
  const navigate = useNavigate()
  return (
    <>
      <ToastContainer position="top-end" style={{ zIndex: 99 }}>

        <Toast show={p.show} onClose={p.toggleShow} className="mb-4" >
          <Toast.Header>
            <img src={icon} style={{ width: 30, height: 30 }} className="rounded me-2" alt="" />
            <strong className="me-auto">IntUeative</strong>
          </Toast.Header>
          <Toast.Body>
            It's time! Connect with your Hunger NOW.
            <Button className="text-white ms-2" onClick={() => { navigate("/scale"); p.toggleShow() }}><PlusCircleFill /></Button>
          </Toast.Body>

        </Toast>
      </ToastContainer>
    </>
  )
}