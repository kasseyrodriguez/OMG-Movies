import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class NinetieSix extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetieSixMovies: [],
          NinetieSixRomance: [],
          NinetieSixAction: [],
          NinetieSixDrama: [],
          NinetieSixAnimation: [],
          NinetieSixHorror: [],
          NinetieSixComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996`)
        .then(json => {

          this.setState({NinetieSixMovies:json.data.results})

          // console.log(this.state.NinetieSixMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=10749`)
        .then(json => {

          this.setState({NinetieSixRomance:json.data.results})

          // console.log(this.state.NinetieSixRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=28`)
        .then(json => {

          this.setState({NinetieSixAction:json.data.results})

          // console.log(this.state.NinetieSixAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=18`)
        .then(json => {

          this.setState({NinetieSixDrama:json.data.results})

          // console.log(this.state.NinetieSixDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=16`)
        .then(json => {

          this.setState({NinetieSixAnimation:json.data.results})

          // console.log(this.state.NinetieSixAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=27`)
        .then(json => {

          this.setState({NinetieSixHorror:json.data.results})

          // console.log(this.state.NinetieSixHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=35`)
        .then(json => {

          this.setState({NinetieSixComedy:json.data.results})

          // console.log(this.state.NinetieSixComedy)

        })

    }



    render(){

      return(
        <div>
        <h1>Most popular movies of 1996</h1>
          <Carousel posters= {this.state.NinetieSixMovies} />

           <h1>Most popular Comedy of of 1996</h1>
          <Carousel posters= {this.state.NinetieSixComedy} />

          <h1>Most popular romance of of 1996</h1>
          <Carousel posters= {this.state.NinetieSixRomance} />

          <h1>Most popular horror of of 1996</h1>
          <Carousel posters= {this.state.NinetieSixHorror} />

          <h1>Most popular animation of of 1996</h1>
          <Carousel posters= {this.state.NinetieSixAnimation} />

          <h1>Most popular action of of 1996</h1>
          <Carousel posters= {this.state.NinetieSixAction} />

          <h1>Most popular drama of of 1996</h1>
          <Carousel posters= {this.state.NinetieSixDrama} /> 
        </div>

      )
    }
}
