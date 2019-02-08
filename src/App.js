import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top">
          <h1 id="logo">Simplify</h1>
        </nav>
        <div className="vertical-center">
          <Calendar></Calendar>
        </div>
      </div>
    );
  }
}

export default App;
