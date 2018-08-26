import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from "./Carousel.js"


export default class Comedy extends Component {
    constructor(props){
        super(props)
        this.state = {
          comedyMovies: [],
          active: 0
        }
      }

      componentDidMount(){
        const API_K = API_KEY;
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=1999&with_genres=35`)
         .then(json => {
          this.setState({comedyMovies:json.data.results})
        
        })

    
      }

    render(){

        return(

          <div>
            <h1><strong>Most Popular Comedy of the Decade</strong></h1>
            <Carousel posters= {this.state.comedyMovies} />
          </div>

        )
      }
  }
