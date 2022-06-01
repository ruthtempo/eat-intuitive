import React, { useState } from 'react';

import './App.css';
import { Scale } from './components/Scale';
import { NavBar } from './components/NavBar';
import { Reminder } from './Reminder'
import { Charts } from './components/Charts'
import { Home } from './components/Home';
import Calendar from './components/Calendar';
import { Routes, Route, useNavigate } from "react-router-dom"
import { Button, Container } from 'react-bootstrap';


export interface HungerInput {
  date: Date,
  hunger: number,
}

function App() {

  const [hungerInput, setHungerInput] = useState<HungerInput[]>([{
    date: new Date(2022, 4, 8),
    hunger: 7,
  },
  {
    date: new Date(2022, 4, 8, 12, 12, 2),
    hunger: 5,
  }
  ])



  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <Container>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="charts" element={<Charts />}></Route>
          <Route path="scale" element={<Scale hungerInput={hungerInput} setHungerInput={setHungerInput} />} ></Route>
          <Route path="reminder" element={<Reminder />} />
          <Route path="calendar" element={<Calendar hungerInput={hungerInput} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
