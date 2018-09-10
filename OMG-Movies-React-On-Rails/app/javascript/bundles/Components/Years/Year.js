import React, { Component } from 'react';
import Home from "../Home";
import {BrowserRouter, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Ninety from './Ninety'
import NinetyOne from './NinetyOne'
import NinetyTwo from './NinetyTwo'
import NinetyThree from './NinetyThree'
import NinetyFour from './NinetyFour'
import NinetyFive from './NinetyFive'
import NinetySix from './NinetySix'
import NinetySeven from './NinetySeven'
import NinetyEight from './NinetyEight'
import NinetyNine from './NinetyNine'
import LandingPage from '../../Components/Landing.js'
import NavbarFeatures from '../../Components/NavBar.js'
import MoviePage from '../Genres/MoviePage';import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';



export default class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false,
          dropdownOpen: false
      };
  this.onClick = this.onClick.bind(this);
  this.toggle = this.toggle.bind(this);
  }

  onClick(){
      this.setState({
          collapse: !this.state.collapse,
      });
  }

  toggle() {
      this.setState({
          dropdownOpen: !this.state.dropdownOpen
      });
  }

  render() {

    return (

      <BrowserRouter>
        <div>
          <Navbar color="pink accent-2" dark expand="md" scrolling>
            <NavbarNav left>
              <NavItem>
                <NavLink to ="/Home" exact activeStyle= {{color:'red'}}>Home</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle nav caret>Years</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="#"><NavLink to ="/1990" exact activeStyle= {{color:'red'}}>1990</NavLink></DropdownItem>
                    <DropdownItem href="#"><NavLink to ="/1991" exact activeStyle= {{color:'red'}}>1991</NavLink></DropdownItem>
                    <DropdownItem href="#"><NavLink to ="/1992" exact activeStyle= {{color:'red'}}>1992</NavLink></DropdownItem>
                    <DropdownItem href="#"><NavLink to ="/1993" exact activeStyle= {{color:'red'}}>1993</NavLink></DropdownItem>
                    <DropdownItem href="#"><NavLink to ="/1994" exact activeStyle= {{color:'red'}}>1994</NavLink></DropdownItem>
                    <DropdownItem href="#"><NavLink to ="/1995" exact activeStyle= {{color:'red'}}>1995</NavLink></DropdownItem>
                    <DropdownItem href="#"><NavLink to ="/1996" exact activeStyle= {{color:'red'}}>1996</NavLink></DropdownItem>
                    <DropdownItem href="#"><NavLink to ="/1997" exact activeStyle= {{color:'red'}}>1997</NavLink></DropdownItem>
                    <DropdownItem href="#"><NavLink to ="/1998" exact activeStyle= {{color:'red'}}>1998</NavLink></DropdownItem>
                    <DropdownItem href="#"><NavLink to ="/1999" exact activeStyle= {{color:'red'}}>1999</NavLink></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </NavbarNav>
        </Navbar>


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
            return (<Ninety/>)
            }
          }/>
         <Route path= "/1991" exact render = {() => {
           return (<NinetyOne/>)
           }
          }/>
         <Route path= "/1992" exact render = {() => {
           return (<NinetyTwo/>)
           }
          }/>
          <Route path= "/1993" exact render = {() => {
            return (<NinetyThree/>)
            }
          }/>
          <Route path= "/1994" exact render = {() => {
            return (<NinetyFour/>)
            }
          }/>
          <Route path= "/1995" exact render = {() => {
            return (<NinetyFive/>)
            }
          }/>
         <Route path= "/1996" exact render = {() => {
           return (<NinetySix/>)
           }
          }/>
         <Route path= "/1997" exact render = {() => {
           return (<NinetySeven/>)
          }
         }/>
         <Route path= "/1998" exact render = {() => {
           return (<NinetyEight/>)
           }
         }/>
         <Route path= "/1999" exact render = {() => {
           return (<NinetyNine/>)
           }
         }/>

        <Route path="/movie/:movieId" component={ MoviePage } />

      </div>
    </BrowserRouter>
    );
  }
}
