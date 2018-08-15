import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../Home-components/config.js'


export default class NinetieTwo extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetieTwoMovies: [],
          NinetieTwoStore: [],
          NinetieTwoRomance: [],
          NinetieTwoAction: [],
          NinetieTwoDrama: [],
          NinetieTwoAnimation: [],
          NinetieTwoHorror: [],
          NinetieTwoComedy: [],
        }
     
      }

      componentDidMount(){
        const API_K = API_KEY;
          
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992`)
        .then(json => {

          this.setState({NinetieTwoMovies:json.data, NinetieTwoStore: json.data})

          console.log(this.state.NinetieTwoMovies)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=10749`)
        .then(json => {

          this.setState({NinetieTwoRomance:json.data})

          console.log(this.state.NinetieTwoRomance)
     
        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=28`)
        .then(json => {

          this.setState({NinetieTwoAction:json.data})

          console.log(this.state.NinetieTwoAction)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=18`)
        .then(json => {

          this.setState({NinetieTwoDrama:json.data})

          console.log(this.state.NinetieTwoDrama)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=16`)
        .then(json => {

          this.setState({NinetieTwoAnimation:json.data})

          console.log(this.state.NinetieTwoAnimation)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=27`)
        .then(json => {

          this.setState({NinetieTwoHorror:json.data})

          console.log(this.state.NinetieTwoHorror)
     
        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1992&with_genres=35`)
        .then(json => {

          this.setState({NinetieTwoComedy:json.data})

          console.log(this.state.NinetieTwoComedy)
     
        })
        
    }

 
    render(){
     
return(
    <div>
<h1>Most popular movies of 1992</h1>
<h1>Most popular Comedy of of 1992</h1>
<h1>Most popular romance of of 1992</h1>
<h1>Most popular horror of of 1992</h1>
<h1>Most popular animation of of 1992</h1>
<h1>Most popular action of of 1992</h1>
<h1>Most popular drama of of 1992</h1>
</div>

 )
 }
}