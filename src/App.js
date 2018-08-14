import React, { Component } from 'react';
import LandingPage from './Components/Landing/Landing.js';
import NavbarFeatures from './Components/NavBar.js';
import './App.css';
import Home from "./Home-components/Home.js";
import {BrowserRouter, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';



class App extends Component {
  render() {
    return (

      <div className="App">
        <NavbarFeatures/>
        <LandingPage></LandingPage>
      </div>

      <BrowserRouter>
     <div>

       <ul>
     
         <li>
         <NavLink to ="/Home" exact activeStyle= {{color:'red'}}>Home</NavLink>

         </li>
         <li>
         <NavLink to ="/1990" exact activeStyle= {{color:'red'}}>1990</NavLink>
         </li>
         <li>
         <NavLink to ="/1991" exact activeStyle= {{color:'red'}}>1991</NavLink>
         </li>
         <li>
         <NavLink to ="/1992" exact activeStyle= {{color:'red'}}>1992</NavLink>
         </li>
         <li>
         <NavLink to ="/1993" exact activeStyle= {{color:'red'}}>1993</NavLink>
         </li>
         <li>
         <NavLink to ="/1994" exact activeStyle= {{color:'red'}}>1994</NavLink>
         </li>

     <li>
         <NavLink to ="/1995" exact activeStyle= {{color:'red'}}>1995</NavLink>
         </li>
         <li>
         <NavLink to ="/1996" exact activeStyle= {{color:'red'}}>1996</NavLink>
         </li>
         <li>
         <NavLink to ="/1997" exact activeStyle= {{color:'red'}}>1997</NavLink>
         </li>
         <li>
         <NavLink to ="/1998" exact activeStyle= {{color:'red'}}>1998</NavLink>
         </li>
         <li>
         <NavLink to ="/1999" exact activeStyle= {{color:'red'}}>1999</NavLink>
         </li>



       </ul>
   
       <Route path= "/" exact render = {() => {
         return (<h1>Landing Page</h1>)
       }
     }/>
     <Route path= "/Home" exact render = {() => {
         return (<Home />)
       }
     }/>
       
     <Route path= "/1990" exact render = {() => {
         return (<h1>Top movies of 1990</h1>)
       }
     }/>
         <Route path= "/1991" exact render = {() => {
         return (<h1>Top movies of 1991</h1>)
       }
     }/>

         <Route path= "/1992" exact render = {() => {
         return (<h1>Top movies of 1992</h1>)
       }
     }/>
     <Route path= "/1993" exact render = {() => {
         return (<h1>Top movies of 1993</h1>)
       }
     }/>
     <Route path= "/1994" exact render = {() => {
         return (<h1>Top movies of 1994</h1>)
       }
     }/>

   <Route path= "/1995" exact render = {() => {
         return (<h1>Top movies of 1995</h1>)
       }
     }/>
         <Route path= "/1996" exact render = {() => {
         return (<h1>Top movies of 1996</h1>)
       }
     }/>

         <Route path= "/1997" exact render = {() => {
         return (<h1>Top movies of 1997</h1>)
       }
     }/>
     <Route path= "/1998" exact render = {() => {
         return (<h1>Top movies of 1998</h1>)
       }
     }/>
     <Route path= "/1999" exact render = {() => {
         return (<h1>Top movies of 1999</h1>)
       }
     }/>







    </div>

      </BrowserRouter>

    );
  }
}

export default App;
