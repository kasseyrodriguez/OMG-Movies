import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class NinetyThree extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetyThreeMovies: [],
          NinetyThreeRomance: [],
          NinetyThreeAction: [],
          NinetyThreeDrama: [],
          NinetyThreeAnimation: [],
          NinetyThreeHorror: [],
          NinetyThreeComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993`)
        .then(json => {

          this.setState({NinetyThreeMovies:json.data.results})

          // console.log(this.state.NinetyThreeMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=10749`)
        .then(json => {

          this.setState({NinetyThreeRomance:json.data.results})

          // console.log(this.state.NinetyThreeRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=28`)
        .then(json => {

          this.setState({NinetyThreeAction:json.data.results})

          // console.log(this.state.NinetyThreeAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=18`)
        .then(json => {

          this.setState({NinetyThreeDrama:json.data.results})

          // console.log(this.state.NinetyThreeDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=16`)
        .then(json => {

          this.setState({NinetyThreeAnimation:json.data.results})

          // console.log(this.state.NinetyThreeAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=27`)
        .then(json => {

          this.setState({NinetyThreeHorror:json.data.results})

          // console.log(this.state.NinetyThreeHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=35`)
        .then(json => {

          this.setState({NinetyThreeComedy:json.data.results})

          // console.log(this.state.NinetyThreeComedy)

        })

    }



    render(){

      return(

        <div>
           <h1>Most popular movies of 1993</h1>
          <Carousel posters= {this.state.NinetyThreeMovies} />

           <h1>Most popular Comedy of of 1993</h1>
          <Carousel posters= {this.state.NinetyThreeComedy} />

          <h1>Most popular romance of of 1993</h1>
          <Carousel posters= {this.state.NinetyThreeRomance} />

          <h1>Most popular horror of of 1993</h1>
          <Carousel posters= {this.state.NinetyThreeHorror} />

          <h1>Most popular animation of of 1993</h1>
          <Carousel posters= {this.state.NinetyThreeAnimation} />

          <h1>Most popular action of of 1993</h1>
          <Carousel posters= {this.state.NinetyThreeAction} />

          <h1>Most popular drama of of 1993</h1>
          <Carousel posters= {this.state.NinetyThreeDrama} /> 
        </div>

      )
    }
}
