import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Scale } from './components/Scale';
import { NavBar } from './components/NavBar';
import { Reminder } from './Reminder'
import { Charts } from './components/Charts'
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

  const navigate = useNavigate();
  const navigateToScale = () => {
    navigate('/scale')
  }

  return (
    <Container fluid className="App">
      <header className="App-header">
        <NavBar />
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Connect with your Hunger</h3>
          <Button onClick={navigateToScale}>Start</Button>
        </Container>
      </header>
      <Routes>
        <Route path="charts" element={<Charts />}></Route>
        <Route path="scale" element={<Scale hungerInput={hungerInput} setHungerInput={setHungerInput} />} ></Route>
        <Route path="reminder" element={<Reminder />} />
        <Route path="calendar" element={<Calendar hungerInput={hungerInput} />} />
      </Routes>
    </Container>
  );
}

export default App;
