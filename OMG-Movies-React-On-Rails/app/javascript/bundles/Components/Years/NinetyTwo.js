import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class NinetyTwo extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetyTwoMovies: [],
          NinetyTwoRomance: [],
          NinetyTwoAction: [],
          NinetyTwoDrama: [],
          NinetyTwoAnimation: [],
          NinetyTwoHorror: [],
          NinetyTwoComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992`)
        .then(json => {

          this.setState({NinetyTwoMovies:json.data.results})

          // console.log(this.state.NinetyTwoMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=10749`)
        .then(json => {

          this.setState({NinetyTwoRomance:json.data.results})

          // console.log(this.state.NinetyTwoRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=28`)
        .then(json => {

          this.setState({NinetyTwoAction:json.data.results})

          // console.log(this.state.NinetyTwoAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=18`)
        .then(json => {

          this.setState({NinetyTwoDrama:json.data.results})

          // console.log(this.state.NinetyTwoDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=16`)
        .then(json => {

          this.setState({NinetyTwoAnimation:json.data.results})

          // console.log(this.state.NinetyTwoAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=27`)
        .then(json => {

          this.setState({NinetyTwoHorror:json.data.results})

          // console.log(this.state.NinetyTwoHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=35`)
        .then(json => {

          this.setState({NinetyTwoComedy:json.data.results})

          // console.log(this.state.NinetyTwoComedy)

        })

    }

    render(){

      return(
        <div>
           <h1>Most popular movies of 1992</h1>
          <Carousel posters= {this.state.NinetyTwoMovies} />

           <h1>Most popular Comedy of of 1992</h1>
          <Carousel posters= {this.state.NinetyTwoComedy} />

          <h1>Most popular romance of of 1992</h1>
          <Carousel posters= {this.state.NinetyTwoRomance} />

          <h1>Most popular horror of of 1992</h1>
          <Carousel posters= {this.state.NinetyTwoHorror} />

          <h1>Most popular animation of of 1992</h1>
          <Carousel posters= {this.state.NinetyTwoAnimation} />

          <h1>Most popular action of of 1992</h1>
          <Carousel posters= {this.state.NinetyTwoAction} />

          <h1>Most popular drama of of 1992</h1>
          <Carousel posters= {this.state.NinetyTwoDrama} /> 
        </div>
      )
    }
}
