import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'



export default class NinetyFive extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetyFiveMovies: [],
          NinetyFiveRomance: [],
          NinetyFiveAction: [],
          NinetyFiveDrama: [],
          NinetyFiveAnimation: [],
          NinetyFiveHorror: [],
          NinetyFiveComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995`)
        .then(json => {

          this.setState({NinetyFiveMovies:json.data.results})

          // console.log(this.state.NinetyFiveMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=10749`)
        .then(json => {

          this.setState({NinetyFiveRomance:json.data.results})

          // console.log(this.state.NinetyFiveRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=28`)
        .then(json => {

          this.setState({NinetyFiveAction:json.data.results})

          // console.log(this.state.NinetyFivetAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=18`)
        .then(json => {

          this.setState({NinetyFiveDrama:json.data.results})

          // console.log(this.state.NinetyFiveDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=16`)
        .then(json => {

          this.setState({NinetyFiveAnimation:json.data.results})

          // console.log(this.state.NinetyFiveAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=27`)
        .then(json => {

          this.setState({NinetyFiveHorror:json.data.results})

          // console.log(this.state.NinetyFiveHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=35`)
        .then(json => {

          this.setState({NinetyFiveComedy:json.data.results})

          // console.log(this.state.NinetyFiveComedy)

        })

    }

    render(){

      return(
        
        <div>
        <h1>Most popular movies of 1995</h1>
          <Carousel posters= {this.state.NinetyFiveMovies} />

          <h1>Most popular Comedy of of 1995</h1>
          <Carousel posters= {this.state.NinetyFiveComedy} />

          <h1>Most popular romance of of 1995</h1>
          <Carousel posters= {this.state.NinetyFiveRomance} />

          <h1>Most popular horror of of 1995</h1>
          <Carousel posters= {this.state.NinetyFiveHorror} />

          <h1>Most popular animation of of 1995</h1>
          <Carousel posters= {this.state.NinetyFiveAnimation} />

          <h1>Most popular action of of 1995</h1>
          <Carousel posters= {this.state.NinetyFiveAction} />

          <h1>Most popular drama of of 1995</h1>
          <Carousel posters= {this.state.NinetyFiveDrama} />
        </div>

      )



      
    }
}