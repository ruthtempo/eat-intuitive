import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";





export function Reminder(p: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}) {


  const [value, setValue] = useState(30)




  const setTimer = (v: number) => {
    setTimeout(() => {
      p.setShow(true)
    }, v * 60 * 1000)

  }


  return (
    <>
      <Form>
        <Form.Label>Check again with my hunger in...</Form.Label>
        <Form.Select value={value} onChange={e => setValue(parseInt(e.target.value))}>
          <option value={30}>30 min</option>
          <option value={60}>1 h</option>
          <option value={120}>2 h</option>
        </Form.Select>
        <Button className="text-white mt-4" onClick={() => { setTimer(value); console.log("value", value) }}>Remind me</Button>
      </Form>


    </>

  )
}