import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class NinetyEight extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetyEightMovies: [],
          NinetyEightRomance: [],
          NinetyEightAction: [],
          NinetyEightDrama: [],
          NinetyEightAnimation: [],
          NinetyEightHorror: [],
          NinetyEightComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998`)
        .then(json => {

          this.setState({NinetyEightMovies:json.data.results})

          // console.log(this.state.NinetyEightMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=10749`)
        .then(json => {

          this.setState({NinetyEightRomance:json.data.results})

          // console.log(this.state.NinetyEightRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=28`)
        .then(json => {

          this.setState({NinetyEightAction:json.data.results})

          // console.log(this.state.NinetyEightAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=18`)
        .then(json => {

          this.setState({NinetyEightDrama:json.data.results})

          // console.log(this.state.NinetyEightDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=16`)
        .then(json => {

          this.setState({NinetyEightAnimation:json.data.results})

          // console.log(this.state.NinetyEightAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=27`)
        .then(json => {

          this.setState({NinetyEightHorror:json.data.results})

          // console.log(this.state.NinetyEightHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=35`)
        .then(json => {

          this.setState({NinetyEightComedy:json.data.results})

          // console.log(this.state.NinetyEightComedy)

        })

    }

    render(){

      return(

        <div>
          <h1>Most popular movies of 1998</h1>
          <Carousel posters= {this.state.NinetyEightMovies} />

          <h1>Most popular Comedy of of 1998</h1>
          <Carousel posters= {this.state.NinetyEightComedy} />

          <h1>Most popular romance of of 1998</h1>
          <Carousel posters= {this.state.NinetyEightRomance} />

          <h1>Most popular horror of of 1998</h1>
          <Carousel posters= {this.state.NinetyEightHorror} />

          <h1>Most popular animation of of 1998</h1>
          <Carousel posters= {this.state.NinetyEightAnimation} />

          <h1>Most popular action of of 1998</h1>
          <Carousel posters= {this.state.NinetyEightAction} />

          <h1>Most popular drama of of 1998</h1>
          <Carousel posters= {this.state.NinetyEightDrama} />

        </div>
      )
    }
}
