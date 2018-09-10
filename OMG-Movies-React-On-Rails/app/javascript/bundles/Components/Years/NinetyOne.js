import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'
import Carousel from '../Genres/Carousel.js'



export default class NinetyOne extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetyOneMovies: [],
          NinetyOneRomance: [],
          NinetyOneAction: [],
          NinetyOneDrama: [],
          NinetyOneAnimation: [],
          NinetyOneHorror: [],
          NinetyOneComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991`)
        .then(json => {

          this.setState({NinetyOneMovies:json.data.results})

          // console.log(this.state.NinetyOneMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=10749`)
        .then(json => {

          this.setState({NinetyOneRomance:json.data.results})

          // console.log(this.state.NinetyOneRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=28`)
        .then(json => {

          this.setState({NinetyOneAction:json.data.results})

          // console.log(this.state.NinetyOneAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=18`)
        .then(json => {

          this.setState({NinetyOneDrama:json.data.results})

          // console.log(this.state.NinetyOneDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=16`)
        .then(json => {

          this.setState({NinetyOneAnimation:json.data.results})

          // console.log(this.state.NinetyOneAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=27`)
        .then(json => {

          this.setState({NinetyOneHorror:json.data.results})

          // console.log(this.state.NinetyOneHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1991&with_genres=35`)
        .then(json => {

          this.setState({NinetyOneComedy:json.data.results})

          // console.log(this.state.NinetyOneComedy)

        })

    }



    render(){

      return(
        
        <div>
        <h1>Most popular movies of 1991</h1>
          <Carousel posters= {this.state.NinetyOneMovies} />

           <h1>Most popular Comedy of of 1991</h1>
          <Carousel posters= {this.state.NinetyOneComedy} />

          <h1>Most popular romance of of 1991</h1>
          <Carousel posters= {this.state.NinetyOneRomance} />

          <h1>Most popular horror of of 1991</h1>
          <Carousel posters= {this.state.NinetyOneHorror} />

          <h1>Most popular animation of of 1991</h1>
          <Carousel posters= {this.state.NinetyOneAnimation} />

          <h1>Most popular action of of 1991</h1>
          <Carousel posters= {this.state.NinetyOneAction} />

          <h1>Most popular drama of of 1991</h1>
          <Carousel posters= {this.state.NinetyOneDrama} /> 
          
        </div>

      )
    }
}
