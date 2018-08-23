import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'


export default class NinetieEight extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetieEightMovies: [],
          NinetieEightStore: [],
          NinetieEightRomance: [],
          NinetieEightAction: [],
          NinetieEightDrama: [],
          NinetieEightAnimation: [],
          NinetieEightHorror: [],
          NinetieEightComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998`)
        .then(json => {

          this.setState({NinetieEightMovies:json.data.results, NinetieEightStore: json.data})

          // console.log(this.state.NinetieEightMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=10749`)
        .then(json => {

          this.setState({NinetieEightRomance:json.data.results})

          // console.log(this.state.NinetieEightRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=28`)
        .then(json => {

          this.setState({NinetieEightAction:json.data.results})

          // console.log(this.state.NinetieEightAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=18`)
        .then(json => {

          this.setState({NinetieEightDrama:json.data.results})

          // console.log(this.state.NinetieEightDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=16`)
        .then(json => {

          this.setState({NinetieEightAnimation:json.data.results})

          // console.log(this.state.NinetieEightAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=27`)
        .then(json => {

          this.setState({NinetieEightHorror:json.data.results})

          // console.log(this.state.NinetieEightHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1998&with_genres=35`)
        .then(json => {

          this.setState({NinetieEightComedy:json.data.results})

          // console.log(this.state.NinetieEightComedy)

        })

    }

    render(){

      return(
        
        <div>
          <h1>Most popular movies of 1998</h1>
          <Carousel posters= {this.state.NinetieEightMovies} />

          <h1>Most popular Comedy of of 1998</h1>
          <Carousel posters= {this.state.NinetieEightComedy} />

          <h1>Most popular romance of of 1998</h1>
          <Carousel posters= {this.state.NinetieEightRomance} />

          <h1>Most popular horror of of 1998</h1>
          <Carousel posters= {this.state.NinetieEightHorror} />

          <h1>Most popular animation of of 1998</h1>
          <Carousel posters= {this.state.NinetieEightAnimation} />

          <h1>Most popular action of of 1998</h1>
          <Carousel posters= {this.state.NinetieEightAction} />

          <h1>Most popular drama of of 1998</h1>
          <Carousel posters= {this.state.NinetieEightDrama} />

        </div>
      )
    }
}
