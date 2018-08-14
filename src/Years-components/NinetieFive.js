import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../Home-components/config.js'



export default class NinetieFive extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetieFiveMovies: [],
          NinetieFiveStore: [],
          NinetieFiveRomance: [],
          NinetieFivetAction: [],
          NinetieFiveDrama: [],
          NinetieFiveAnimation: [],
          NinetieFiveHorror: [],
          NinetieFiveComedy: [],
        }
     
      }

      componentDidMount(){
        const API_K = API_KEY;
          
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995`)
        .then(json => {

          this.setState({NinetieFiveMovies:json.data, NinetieFiveStore: json.data})

          console.log(this.state.NinetieFiveMovies)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=10749`)
        .then(json => {

          this.setState({NinetieFiveRomance:json.data})

          console.log(this.state.NinetieFiveRomance)
     
        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=28`)
        .then(json => {

          this.setState({NinetieFivetAction:json.data})

          console.log(this.state.NinetieFivetAction)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=18`)
        .then(json => {

          this.setState({NinetieFiveDrama:json.data})

          console.log(this.state.NinetieFiveDrama)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=16`)
        .then(json => {

          this.setState({NinetieFiveAnimation:json.data})

          console.log(this.state.NinetieFiveAnimation)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=27`)
        .then(json => {

          this.setState({NinetieFiveHorror:json.data})

          console.log(this.state.NinetieFiveHorror)
     
        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=35`)
        .then(json => {

          this.setState({NinetieFiveComedy:json.data})

          console.log(this.state.NinetieFiveComedy)
     
        })
        
    }


 
    render(){
     
return(
    <div>
<h1>Most popular movies of 1995</h1>
<h1>Most popular Comedy of of 1995</h1>
<h1>Most popular romance of of 1995</h1>
<h1>Most popular horror of of 1995</h1>
<h1>Most popular animation of of 1995</h1>
<h1>Most popular action of of 1995</h1>
<h1>Most popular drama of of 1995</h1>
</div>

 )
 }
}