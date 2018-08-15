import React, { Component } from 'react';



export default class View extends Component {
    constructor(props) {
        super(props);
      }

    render(){

        let actionMoviesvariable = this.props.actionMovies.map((element, index )=> {
     let infor = element;
     let title = infor.title;
 
     console.log(title)

        });

  console.log(actionMoviesvariable)

      return(

     <div>
      <h1>hello </h1>
    </div>

      )
    }
}
