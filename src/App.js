import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Bored Games</h1>
        </div>
        <p className="App-intro">
          <h3>Please fill out the form to find the perfect game</h3>
        </p>
        <form method="get">
          <h4>Number of players: <input type="number"></input></h4>
          <h4>Tryhard Rating: <input type='number' min='0' max='12'></input></h4>
          <h4>Game Type: <input type='text'></input></h4>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}
export default App;
