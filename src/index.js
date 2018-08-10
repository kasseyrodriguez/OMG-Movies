import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Testing from './Testing';
import {BrowserRouter, Route} from "react-router-dom"


const Root=()=>{

  return(
  <nav>
    <BrowserRouter>
      <div>
      <Route path ='/' component={Home}/>
      <Route exact path ='/testing' component={Testing}/>
      </div>
    </BrowserRouter>
  </nav>
  )

}
ReactDOM.render(<App />, document.getElementById('root'));
