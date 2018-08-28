import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class Ninety extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetyMovies: [],
          NinetyRomance: [],
          NinetyAction: [],
          NinetyDrama: [],
          NinetyAnimation: [],
          NinetyHorror: [],
          NinetyComedy: [],

        }
      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990`)
        .then(json => {

          this.setState({NinetyMovies:json.data.results})


        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=10749`)
        .then(json => {

          this.setState({NinetyRomance:json.data.results})


        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=28`)
        .then(json => {

          this.setState({NinetyAction:json.data.results})


        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=18`)
        .then(json => {

          this.setState({NinetyDrama:json.data.results})


        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=16`)
        .then(json => {

          this.setState({NinetyAnimation:json.data.results})


        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=27`)
        .then(json => {

          this.setState({NinetyHorror:json.data.results})


        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1990&with_genres=35`)
        .then(json => {

          this.setState({NinetyComedy:json.data.results})


        })

    }

    render(){

      return(
        <div>
          <h1>Most popular movies of 1990</h1>
          <Carousel posters= {this.state.NinetyMovies} />

          <h1>Most popular Comedy of of 1990</h1>
          <Carousel posters= {this.state.NinetyComedy} />

          <h1>Most popular romance of of 1990</h1>
          <Carousel posters= {this.state.NinetyRomance} />

          <h1>Most popular horror of of 1990</h1>
          <Carousel posters= {this.state.NinetyHorror} />

          <h1>Most popular animation of of 1990</h1>
          <Carousel posters= {this.state.NinetyAnimation} />

          <h1>Most popular action of of 1990</h1>
          <Carousel posters= {this.state.NinetyAction} />

          <h1>Most popular drama of of 1990</h1>
          <Carousel posters= {this.state.NinetyDrama} />

        </div>
      )
    }
}
