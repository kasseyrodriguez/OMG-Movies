import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class Ninetie extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetieMovies: [],
          NinetieStore: [],
          NinetieRomance: [],
          NinetieAction: [],
          NinetieDrama: [],
          NinetieAnimation: [],
          NinetieHorror: [],
          NinetieComedy: [],
      
        }
      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990`)
        .then(json => {

          this.setState({NinetieMovies:json.data.results, NinetieStore: json.data})

     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=10749`)
        .then(json => {

          this.setState({NinetieRomance:json.data.results})


        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=28`)
        .then(json => {

          this.setState({NinetieAction:json.data.results})


        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=18`)
        .then(json => {

          this.setState({NinetieDrama:json.data.results})


        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=16`)
        .then(json => {

          this.setState({NinetieAnimation:json.data.results})


        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=27`)
        .then(json => {

          this.setState({NinetieHorror:json.data.results})


        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=35`)
        .then(json => {

          this.setState({NinetieComedy:json.data.results})


        })

    }

    render(){

      return(
        <div>
          <h1>Most popular movies of 1990</h1>
          <Carousel posters= {this.state.NinetieMovies} />

          <h1>Most popular Comedy of of 1990</h1>
          <Carousel posters= {this.state.NinetieComedy} />

          <h1>Most popular romance of of 1990</h1>
          <Carousel posters= {this.state.NinetieRomance} />

          <h1>Most popular horror of of 1990</h1>
          <Carousel posters= {this.state.NinetieHorror} />

          <h1>Most popular animation of of 1990</h1>
          <Carousel posters= {this.state.NinetieAnimation} />

          <h1>Most popular action of of 1990</h1>
          <Carousel posters= {this.state.NinetieAction} />

          <h1>Most popular drama of of 1990</h1>
          <Carousel posters= {this.state.NinetieDrama} />

        </div>
      )
    }
}
