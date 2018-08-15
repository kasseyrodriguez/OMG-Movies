import React, { Component } from 'react';
import { element } from 'prop-types';


export default class View extends Component {
    constructor() {
        super();
      }

    render(){

        let actionMoviesvariable = this.props.actionMovies.map((element, index )=> {
     console.log(element);
     let infor = element.results;
        });

console.log(actionMoviesvariable)

      return(

     <div>
      <h1>Hello, my name is: {this.props.actionMovies} </h1>
    </div>

      )
    }
}
