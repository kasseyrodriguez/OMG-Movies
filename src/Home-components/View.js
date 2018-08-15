import React, { Component } from 'react';



export default class View extends Component {
    constructor(props) {
        super(props);
      }

    render(){

        let actionMoviesvariable = this.props.actionMovies.map((element, index )=> {
     console.log(element);
     let infor = element.results;
        });

  console.log(actionMoviesvariable)

      return(

     <div>
      <h1>hello </h1>
    </div>

      )
    }
}
