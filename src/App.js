import React, { Component } from 'react';
import LandingPage from './Components/Landing/Landing.js';
import NavbarFeatures from './Components/NavBar.js';
import './App.css';
import Home from "./Home-components/Home.js";
import {BrowserRouter, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Ninetie from './Years-components/Ninetie.js'
import NinetieOne from './Years-components/NinetieOne.js'
import NinetieTwo from './Years-components/NinetieTwo.js'
import NinetieThree from './Years-components/NinetieThree.js'
import NinetieFour from './Years-components/NinetieFour.js'
import NinetieFive from './Years-components/NinetieFive.js'
import NinetieSix from './Years-components/NinetieSix.js'
import NinetieSeven from './Years-components/NinetieSeven.js'
import NinetieEight from './Years-components/NinetieEight.js'
import NinetieNine from './Years-components/NinetieNine.js'



class App extends Component {
  render() {
    return (




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
         return (   <div className="App">
                     <NavbarFeatures/>
                     <LandingPage/>
                        </div>)
       }
     }/>
     <Route path= "/Home" exact render = {() => {
         return (<Home />)
       }
     }/>

     <Route path= "/1990" exact render = {() => {
         return (<Ninetie/>)
       }
     }/>
         <Route path= "/1991" exact render = {() => {
         return (<NinetieOne/>)
       }
     }/>

         <Route path= "/1992" exact render = {() => {
         return (<NinetieTwo/>)
       }
     }/>
     <Route path= "/1993" exact render = {() => {
         return (<NinetieThree/>)
       }
     }/>
     <Route path= "/1994" exact render = {() => {
         return (<NinetieFour/>)
       }
     }/>

   <Route path= "/1995" exact render = {() => {
         return (<NinetieFive/>)
       }
     }/>
         <Route path= "/1996" exact render = {() => {
         return (<NinetieSix/>)
       }
     }/>

         <Route path= "/1997" exact render = {() => {
         return (<NinetieSeven/>)
       }
     }/>
     <Route path= "/1998" exact render = {() => {
         return (<NinetieEight/>)
       }
     }/>
     <Route path= "/1999" exact render = {() => {
         return (<NinetieNine/>)
       }
     }/>

    </div>

      </BrowserRouter>

    );
  }
}

export default App;
