import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Scale } from './Scale';
import { NavBar } from './NavBar';
import { Reminder } from './Reminder'
import Overview from './Overview'
import Calendario from './Calendar';

export interface HungerInput {
  date: Date,
  hunger: number,
}

function App() {

  const [hungerInput, setHungerInput] = useState<HungerInput[]>([{
    date: new Date(2022, 4, 8),
    hunger: 7,
  }])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Reminder />
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Connect with your Hunger</h3>
        <Scale hungerInput={hungerInput} setHungerInput={setHungerInput} />
        <Overview />
        <Calendario hungerInput={hungerInput} />
      </header>
    </div>
  );
}

export default App;
