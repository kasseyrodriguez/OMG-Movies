import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class NinetySeven extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetySevenMovies: [],
          NinetySevenRomance: [],
          NinetySevenAction: [],
          NinetySevenDrama: [],
          NinetySevenAnimation: [],
          NinetySevenHorror: [],
          NinetySevenComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997`)
        .then(json => {

          this.setState({NinetySevenMovies:json.data.results})

          // console.log(this.state.NinetySevenMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=10749`)
        .then(json => {

          this.setState({NinetySevenRomance:json.data.results})

          // console.log(this.state.NinetySevenRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=28`)
        .then(json => {

          this.setState({NinetySevenAction:json.data.results})

          // console.log(this.state.NinetySevenAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=18`)
        .then(json => {

          this.setState({NinetySevenDrama:json.data.results})

          // console.log(this.state.NinetySevenDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=16`)
        .then(json => {

          this.setState({NinetySevenAnimation:json.data.results})

          // console.log(this.state.NinetySevenAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=27`)
        .then(json => {

          this.setState({NinetySevenHorror:json.data.results})

          // console.log(this.state.NinetySevenHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=35`)
        .then(json => {

          this.setState({NinetySevenComedy:json.data.results})

          // console.log(this.state.NinetySevenComedy)

        })

    }



    render(){

      return(
        <div>
          <h1>Most popular movies of 1997</h1>
          <Carousel posters= {this.state.NinetySevenMovies} />

           <h1>Most popular Comedy of of 1997</h1>
          <Carousel posters= {this.state.NinetySevenComedy} />

          <h1>Most popular romance of of 1997</h1>
          <Carousel posters= {this.state.NinetySevenRomance} />

          <h1>Most popular horror of of 1997</h1>
          <Carousel posters= {this.state.NinetySevenHorror} />

          <h1>Most popular animation of of 1997</h1>
          <Carousel posters= {this.state.NinetySevenAnimation} />

          <h1>Most popular action of of 1997</h1>
          <Carousel posters= {this.state.NinetySevenAction} />

          <h1>Most popular drama of of 1997</h1>
          <Carousel posters= {this.state.NinetySevenDrama} /> 
        </div>

      )
    }
}
