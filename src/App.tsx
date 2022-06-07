import React, { useState } from 'react';

import './App.css';
import { Scale } from './components/Scale';
import { NavBar } from './components/NavBar';
import { Reminder } from './Reminder'
import { Charts } from './components/Charts'
import { Home } from './components/Home';
import Calendar from './components/Calendar';
import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap';
import { parseISO } from 'date-fns';


export interface HungerInput {
  date: Date,
  hunger: number,
}


function getSavedHungerInputs() {
  const text = localStorage.getItem('hungerInput')
  const savedHungerInputs: any[] = text !== null ? JSON.parse(text) : []

  const hungerInputsWithDateType = savedHungerInputs.map(i => ({
    date: parseISO(i.date),
    hunger: i.hunger
  })
  )

  return hungerInputsWithDateType
}

function App() {

  const [hungerInput, setHungerInput] = useState<HungerInput[]>(getSavedHungerInputs())

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Container>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="charts" element={<Charts hungerInput={hungerInput} />}></Route>
          <Route path="scale" element={<Scale hungerInput={hungerInput} setHungerInput={setHungerInput} />} ></Route>
          <Route path="reminder" element={<Reminder />} />
          <Route path="calendar" element={<Calendar hungerInput={hungerInput} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
