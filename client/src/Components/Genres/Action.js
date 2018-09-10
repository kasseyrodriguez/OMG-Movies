import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from './Carousel.js';
import Responsive from './Responsive.js';

export default class Action extends Component {
    constructor(props){
        super(props)
        this.state = {
          actionMovies: [],
       
        }
      }

      componentDidMount(){
        const API_K = API_KEY;
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=1999&with_genres=28`)
         .then(json => {
           this.setState({actionMovies:json.data.results})
         })

      }

    render(){

      return(

        <div className="actionCont">
          <h1><strong>Most Popular Action of the Decade</strong></h1>
          <Responsive posters= {this.state.actionMovies} />
        </div>
      )
    }
}
