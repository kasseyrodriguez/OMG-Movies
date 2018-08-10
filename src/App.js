import React, { Component } from 'react';
import './App.css';
import Api from "./Api.js"
import Comedy from './Comedy';
import Romance from './Romance';
import Horror from './Horror';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Api />
        <Comedy />
        <Romance />
        <Horror />
      </div>
    );
  }
}

export default App;
