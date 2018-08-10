import React, { Component } from 'react';
import './App.css';
import Home from "./Home.js";
import {BrowserRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
     <div>
     <Route path= "/" exact render = {() => {
         return (<Home />)
       }
     }/>
       
     <Route path= "/about" exact render = {() => {
         return (<h1>about</h1>)
       }
     }/>

</div>

      </BrowserRouter>
    );
  }
}

export default App;
