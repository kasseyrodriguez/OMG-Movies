import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class NinetyNine extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetyNineMovies: [],
          NinetyNineRomance: [],
          NinetyNineAction: [],
          NinetyNineDrama: [],
          NinetyNineAnimation: [],
          NinetyNineHorror: [],
          NinetyNineComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999`)
        .then(json => {

          this.setState({NinetyNineMovies:json.data.results})

          // console.log(this.state.NinetyNineMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=10749`)
        .then(json => {

          this.setState({NinetyNineRomance:json.data.results})

          // console.log(this.state.NinetyNineRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=28`)
        .then(json => {

          this.setState({NinetyNineAction:json.data.results})

          // console.log(this.state.NinetyNineAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=18`)
        .then(json => {

          this.setState({NinetyNineDrama:json.data.results})

          // console.log(this.state.NinetyNineDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=16`)
        .then(json => {

          this.setState({NinetyNineAnimation:json.data.results})

          // console.log(this.state.NinetyNineAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=27`)
        .then(json => {

          this.setState({NinetyNineHorror:json.data.results})

          // console.log(this.state.NinetyNineHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=35`)
        .then(json => {

          this.setState({NinetyNineComedy:json.data.results})

          // console.log(this.state.NinetyNineComedy)

        })

    }

    render(){

      return(
        
        <div>
        <h1>Most popular movies of 1999</h1>
          <Carousel posters= {this.state.NinetyNineMovies} />

          <h1>Most popular Comedy of of 1999</h1>
          <Carousel posters= {this.state.NinetyNineComedy} />

          <h1>Most popular romance of of 1999</h1>
          <Carousel posters= {this.state.NinetyNineRomance} />

          <h1>Most popular horror of of 1999</h1>
          <Carousel posters= {this.state.NinetyNineHorror} />

          <h1>Most popular animation of of 1999</h1>
          <Carousel posters= {this.state.NinetyNineAnimation} />

          <h1>Most popular action of of 1999</h1>
          <Carousel posters= {this.state.NinetyNineAction} />

          <h1>Most popular drama of of 1999</h1>
          <Carousel posters= {this.state.NinetyNineDrama} />
        </div>

      )
    }
}
