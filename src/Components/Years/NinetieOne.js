import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'



export default class NinetieOne extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetieOneMovies: [],
          NinetieOneRomance: [],
          NinetieOneAction: [],
          NinetieOneDrama: [],
          NinetieOneAnimation: [],
          NinetieOneHorror: [],
          NinetieOneComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991`)
        .then(json => {

          this.setState({NinetieOneMovies:json.data.results})

          // console.log(this.state.NinetieOneMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=10749`)
        .then(json => {

          this.setState({NinetieOneRomance:json.data.results})

          // console.log(this.state.NinetieOneRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=28`)
        .then(json => {

          this.setState({NinetieOneAction:json.data.results})

          // console.log(this.state.NinetieOneAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=18`)
        .then(json => {

          this.setState({NinetieOneDrama:json.data.results})

          // console.log(this.state.NinetieOneDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=16`)
        .then(json => {

          this.setState({NinetieOneAnimation:json.data.results})

          // console.log(this.state.NinetieOneAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=27`)
        .then(json => {

          this.setState({NinetieOneHorror:json.data.results})

          // console.log(this.state.NinetieOneHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=35`)
        .then(json => {

          this.setState({NinetieOneComedy:json.data.results})

          // console.log(this.state.NinetieOneComedy)

        })

    }



    render(){

      return(
        
        <div>
        <h1>Most popular movies of 1991</h1>
          <Carousel posters= {this.state.NinetieOneMovies} />

           <h1>Most popular Comedy of of 1991</h1>
          <Carousel posters= {this.state.NinetieOneComedy} />

          <h1>Most popular romance of of 1991</h1>
          <Carousel posters= {this.state.NinetieOneRomance} />

          <h1>Most popular horror of of 1991</h1>
          <Carousel posters= {this.state.NinetieOneHorror} />

          <h1>Most popular animation of of 1991</h1>
          <Carousel posters= {this.state.NinetieOneAnimation} />

          <h1>Most popular action of of 1991</h1>
          <Carousel posters= {this.state.NinetieOneAction} />

          <h1>Most popular drama of of 1991</h1>
          <Carousel posters= {this.state.NinetieOneDrama} /> 
          
        </div>

      )
    }
}
