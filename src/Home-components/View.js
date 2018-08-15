import React, { Component } from 'react';


export default class View extends Component {
    constructor(props) {
        super(props);
      }

    render(){
      return(

     <div>
      <h1>Hello, my name is: {this.props.actionMovies} </h1>
    </div>

      )
    }
}
