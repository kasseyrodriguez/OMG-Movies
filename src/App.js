import React, { Component } from 'react';
import './App.css';
import Home from "./Home.js";
import {BrowserRouter, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
     <div>

       <ul>
         <li>
         <NavLink to ="/" exact activeStyle= {{color:'green'}}>Home</NavLink>

         </li>
         <li>
         <NavLink to ="/about" exact activeStyle= {{color:'green'}}>About</NavLink>
         </li>

       </ul>
   

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
