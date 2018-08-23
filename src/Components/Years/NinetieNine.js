import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class NinetieNine extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetieNineMovies: [],
          NinetieNineRomance: [],
          NinetieNineAction: [],
          NinetieNineDrama: [],
          NinetieNineAnimation: [],
          NinetieNineHorror: [],
          NinetieNineComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999`)
        .then(json => {

          this.setState({NinetieNineMovies:json.data.results})

          // console.log(this.state.NinetieNineMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=10749`)
        .then(json => {

          this.setState({NinetieNineRomance:json.data.results})

          // console.log(this.state.NinetieNineRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=28`)
        .then(json => {

          this.setState({NinetieNineAction:json.data.results})

          // console.log(this.state.NinetieNineAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=18`)
        .then(json => {

          this.setState({NinetieNineDrama:json.data.results})

          // console.log(this.state.NinetieNineDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=16`)
        .then(json => {

          this.setState({NinetieNineAnimation:json.data.results})

          // console.log(this.state.NinetieNineAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=27`)
        .then(json => {

          this.setState({NinetieNineHorror:json.data.results})

          // console.log(this.state.NinetieNineHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1999&with_genres=35`)
        .then(json => {

          this.setState({NinetieNineComedy:json.data.results})

          // console.log(this.state.NinetieNineComedy)

        })

    }

    render(){

      return(
        
        <div>
        <h1>Most popular movies of 1999</h1>
          <Carousel posters= {this.state.NinetieNineMovies} />

          <h1>Most popular Comedy of of 1999</h1>
          <Carousel posters= {this.state.NinetieNineComedy} />

          <h1>Most popular romance of of 1999</h1>
          <Carousel posters= {this.state.NinetieNineRomance} />

          <h1>Most popular horror of of 1999</h1>
          <Carousel posters= {this.state.NinetieNineHorror} />

          <h1>Most popular animation of of 1999</h1>
          <Carousel posters= {this.state.NinetieNineAnimation} />

          <h1>Most popular action of of 1999</h1>
          <Carousel posters= {this.state.NinetieNineAction} />

          <h1>Most popular drama of of 1999</h1>
          <Carousel posters= {this.state.NinetieNineDrama} />
        </div>

      )
    }
}
