import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from './config.js'


export default class Comedy extends Component {
    constructor(props){
        super(props)
        this.state = {
          comedyMovies: [],
          comedyStore: []
        }
     
      }
 

      componentDidMount(){
        const API_K = API_KEY;
         
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=1999&with_genres=35`)
        .then(json => {

          this.setState({comedyMovies:json.data, comedyStore: json.data})

          console.log(this.state.comedyMovies)
     
        })
       

    }
 
    render(){
     
return(
<h1>carosel of Top comedy of the decade</h1>

 )
 }
}