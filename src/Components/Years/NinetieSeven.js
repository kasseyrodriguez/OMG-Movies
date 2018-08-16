import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../../config.js'


export default class NinetieSeven extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetieSevenMovies: [],
          NinetieSevenStore: [],
          NinetieSevenRomance: [],
          NinetieSevenAction: [],
          NinetieSevenDrama: [],
          NinetieSevenAnimation: [],
          NinetieSevenHorror: [],
          NinetieSevenComedy: [],
        }

      }

      componentDidMount(){
        const API_K = API_KEY;

         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997`)
        .then(json => {

          this.setState({NinetieSevenMovies:json.data, NinetieSevenStore: json.data})

          console.log(this.state.NinetieSevenMovies)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=10749`)
        .then(json => {

          this.setState({NinetieSevenRomance:json.data})

          console.log(this.state.NinetieSevenRomance)

        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=28`)
        .then(json => {

          this.setState({NinetieSevenAction:json.data})

          console.log(this.state.NinetieSevenAction)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=18`)
        .then(json => {

          this.setState({NinetieSevenDrama:json.data})

          console.log(this.state.NinetieSevenDrama)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=16`)
        .then(json => {

          this.setState({NinetieSevenAnimation:json.data})

          console.log(this.state.NinetieSevenAnimation)

        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=27`)
        .then(json => {

          this.setState({NinetieSevenHorror:json.data})

          console.log(this.state.NinetieSevenHorror)

        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1997&with_genres=35`)
        .then(json => {

          this.setState({NinetieSevenComedy:json.data})

          console.log(this.state.NinetieSevenComedy)

        })

    }



    render(){

      return(
        <div>
          <h1>Most popular movies of 1997</h1>
          <h1>Most popular Comedy of of 1997</h1>
          <h1>Most popular romance of of 1997</h1>
          <h1>Most popular horror of of 1997</h1>
          <h1>Most popular animation of of 1997</h1>
          <h1>Most popular action of of 1997</h1>
          <h1>Most popular drama of of 1997</h1>
        </div>

      )
    }
}
