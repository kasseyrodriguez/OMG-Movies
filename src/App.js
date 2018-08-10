import React, { Component } from 'react';
import './App.css';
import Home from "./Home.js"



class App extends Component {
  render() {
    return (
      <nav>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <Home />
      </div>
      </nav>
    );
  }
}

export default App;
