import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from './Carousel.js';


export default class Movie extends Component {
    constructor(props){
        super(props)
        this.state = {
          movies: [],
          store: [],
          posters: []
        }
      }

      componentDidMount(){
        const API_K = API_KEY;
          for(let i = 1; i < 3; i++){
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&primary_release_date.gte=1990&primary_release_date.lte=1999`)
              .then(json => {
              this.setState({movies:json.data, store: json.data})
              console.log(this.state.movies)
            })
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=1999`)
            .then((response) => {
              let posters = response.data.results;
              this.setState({ posters })
            })
          }
        }

    render(){

      return(

        <div>
          <h1><strong>Carousel of the Most Popular Movies of the Decade</strong></h1>
          <Carousel posters= {this.state.posters} />
        </div>
      )
    }
}
