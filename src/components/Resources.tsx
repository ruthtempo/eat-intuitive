import React from "react"
import { Routes, Route } from "react-router-dom"
import { ResourceIntuCheck } from "./ResourceIntuCheck"
import { ResourceRaisin } from "./ResourceRaisin"
import { ResourcesNav } from "./ResourcesNav"

export const Resources = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ResourcesNav />}></Route>
        <Route path="raisin-med" element={<ResourceRaisin />}></Route>
        <Route path="intu-check" element={<ResourceIntuCheck />}></Route>
      </Routes>
    </>
  )
}