import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Scale } from './Scale';
import { NavBar } from './NavBar';
import { Reminder } from './Reminder'
import Overview from './Overview'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Reminder />
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Connect with your Hunger</h3>
        <Scale />
        <Overview />
      </header>
    </div>
  );
}

export default App;
