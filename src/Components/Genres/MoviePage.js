import React, { Component } from "react";
import axios from 'axios';
import API_KEY from '../../config.js'


export default class MoviePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            movie: []
     
        }
      }

      componentDidMount(){
        const API_K = API_KEY;
      

         axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${API_K}&language=en-US`)
         .then(json => {
        
          this.setState({movie:json.data})
          console.log(this.state.movie)

        })

    }
  render() {
    return (
      <div>
        hello
    
      </div>
    );
  }
}
