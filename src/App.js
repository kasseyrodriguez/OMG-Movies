import React, { Component } from 'react';

// import './App.css';
import LandingPage from './Components/Landing/Landing.js';
import NavbarFeatures from './Components/NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFeatures/>
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
