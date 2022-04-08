import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Scale } from './Scale';
import { NavBar } from './NavBar';
import { Reminder } from './Reminder'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Reminder />
        <img src={logo} className="App-logo" alt="logo" />
        <Scale />
      </header>
    </div>
  );
}

export default App;
