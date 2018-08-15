import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from './config.js'
import View from './View.js'

import TheCarousel from './TheCarousel.js';



export default class Action extends Component {
    constructor(props){
        super(props)
        this.state = {
          actionMovies: [],
          actionStore: [],
          posters: []
        }
      }

      componentDidMount(){
        const API_K = API_KEY;
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=1999&with_genres=28`)
         .then(json => {
           this.setState({actionMovies:json.data.results, actionStore: json.data})
           console.log(this.state.actionMovies[0].title)
         })

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=1999&with_genres=28`)
         .then((response) => {
           let posters = response.data.results;
           this.setState({ posters })
         })
      }

    render(){



      return(

        <div>

            <h1>hello</h1>
            <TheCarousel posters= {this.state.posters} />
            <View actionMovies= {this.state.actionMovies} />
        </div>
      )
    }
}
