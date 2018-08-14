import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../Home-components/config.js'


export default class NinetieFour extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetieFourMovies: [],
          NinetieFourStore: [],
          NinetieFourRomance: [],
          NinetieFourtAction: [],
          NinetieFourDrama: [],
          NinetieFourAnimation: [],
          NinetieFourHorror: [],
          NinetieFourComedy: [],
        }
     
      }

      componentDidMount(){
        const API_K = API_KEY;
          
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994`)
        .then(json => {

          this.setState({NinetieFourMovies:json.data, NinetieFourStore: json.data})

          console.log(this.state.NinetieFourMovies)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=10749`)
        .then(json => {

          this.setState({NinetieFourRomance:json.data})

          console.log(this.state.NinetieFourRomance)
     
        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=28`)
        .then(json => {

          this.setState({NinetieFourtAction:json.data})

          console.log(this.state.NinetieFourtAction)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=18`)
        .then(json => {

          this.setState({NinetieFourDrama:json.data})

          console.log(this.state.NinetieFourDrama)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=16`)
        .then(json => {

          this.setState({NinetieFourAnimation:json.data})

          console.log(this.state.NinetieFourAnimation)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1995&with_genres=27`)
        .then(json => {

          this.setState({NinetieFourHorror:json.data})

          console.log(this.state.NinetieFourHorror)
     
        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1994&with_genres=35`)
        .then(json => {

          this.setState({NinetieFourComedy:json.data})

          console.log(this.state.NinetieFourComedy)
     
        })
        
    }



 
    render(){
     
return(
    <div>
<h1>Most popular movies of 1994</h1>
<h1>Most popular Comedy of of 1994</h1>
<h1>Most popular romance of of 1994</h1>
<h1>Most popular horror of of 1994</h1>
<h1>Most popular animation of of 1994</h1>
<h1>Most popular action of of 1994</h1>
<h1>Most popular drama of of 1994</h1>
</div>

 )
 }
}