import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class NinetyFour extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetyFourMovies: [],
          NinetyFourRomance: [],
          NinetyFourAction: [],
          NinetyFourDrama: [],
          NinetyFourAnimation: [],
          NinetyFourHorror: [],
          NinetyFourComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994`)
        .then(json => {

          this.setState({NinetyFourMovies:json.data.results})

          // console.log(this.state.NinetyFourMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=10749`)
        .then(json => {

          this.setState({NinetyFourRomance:json.data.results})

          // console.log(this.state.NinetyFourRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=28`)
        .then(json => {

          this.setState({NinetyFourAction:json.data.results})

          // console.log(this.state.NinetyFourtAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=18`)
        .then(json => {

          this.setState({NinetyFourDrama:json.data.results})

          // console.log(this.state.NinetyFourDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=16`)
        .then(json => {

          this.setState({NinetyFourAnimation:json.data.results})

          // console.log(this.state.NinetyFourAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=27`)
        .then(json => {

          this.setState({NinetyFourHorror:json.data.results})

          // console.log(this.state.NinetyFourHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=35`)
        .then(json => {

          this.setState({NinetyFourComedy:json.data.results})

          // console.log(this.state.NinetyFourComedy)

        })

    }

    render(){

      return(
        
        <div>
        <h1>Most popular movies of 1994</h1>
          <Carousel posters= {this.state.NinetyFourMovies} />

          <h1>Most popular Comedy of of 1994</h1>
          <Carousel posters= {this.state.NinetyFourComedy} />

          <h1>Most popular romance of of 1994</h1>
          <Carousel posters= {this.state.NinetyFourRomance} />

          <h1>Most popular horror of of 1994</h1>
          <Carousel posters= {this.state.NinetyFourHorror} />

          <h1>Most popular animation of of 1994</h1>
          <Carousel posters= {this.state.NinetyFourAnimation} />

          <h1>Most popular action of of 1994</h1>
          <Carousel posters= {this.state.NinetyFourAction} />

          <h1>Most popular drama of of 1994</h1>
          <Carousel posters= {this.state.NinetyFourDrama} />
        </div>

      )
    }
}
