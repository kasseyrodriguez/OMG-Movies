import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class NinetySix extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetySixMovies: [],
          NinetySixRomance: [],
          NinetySixAction: [],
          NinetySixDrama: [],
          NinetySixAnimation: [],
          NinetySixHorror: [],
          NinetySixComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996`)
        .then(json => {

          this.setState({NinetySixMovies:json.data.results})

          // console.log(this.state.NinetySixMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=10749`)
        .then(json => {

          this.setState({NinetySixRomance:json.data.results})

          // console.log(this.state.NinetySixRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=28`)
        .then(json => {

          this.setState({NinetySixAction:json.data.results})

          // console.log(this.state.NinetySixAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=18`)
        .then(json => {

          this.setState({NinetySixDrama:json.data.results})

          // console.log(this.state.NinetySixDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=16`)
        .then(json => {

          this.setState({NinetySixAnimation:json.data.results})

          // console.log(this.state.NinetySixAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=27`)
        .then(json => {

          this.setState({NinetySixHorror:json.data.results})

          // console.log(this.state.NinetySixHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1996&with_genres=35`)
        .then(json => {

          this.setState({NinetySixComedy:json.data.results})

          // console.log(this.state.NinetySixComedy)

        })

    }



    render(){

      return(
        <div>
        <h1>Most popular movies of 1996</h1>
          <Carousel posters= {this.state.NinetySixMovies} />

           <h1>Most popular Comedy of of 1996</h1>
          <Carousel posters= {this.state.NinetySixComedy} />

          <h1>Most popular romance of of 1996</h1>
          <Carousel posters= {this.state.NinetySixRomance} />

          <h1>Most popular horror of of 1996</h1>
          <Carousel posters= {this.state.NinetySixHorror} />

          <h1>Most popular animation of of 1996</h1>
          <Carousel posters= {this.state.NinetySixAnimation} />

          <h1>Most popular action of of 1996</h1>
          <Carousel posters= {this.state.NinetySixAction} />

          <h1>Most popular drama of of 1996</h1>
          <Carousel posters= {this.state.NinetySixDrama} /> 
        </div>

      )
    }
}
