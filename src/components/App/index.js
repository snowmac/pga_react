import React, { Component } from 'react';
import './App.css';
import Leaderboard from '../Leaderboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to PGA Leader Board!</h1>
        </header>

        <Leaderboard />
      </div>
    );
  }
}

export default App;
