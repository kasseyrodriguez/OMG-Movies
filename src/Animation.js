import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from './config.js'


export default class Animation extends Component {
    constructor(props){
        super(props)
        this.state = {
          animationMovies: [],
          animationStore: []
        }
     
      }
 

      componentDidMount(){
        const API_K = API_KEY;
          
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=1999&with_genres=16`)
        .then(json => {

          this.setState({animationMovies:json.data, animationStore: json.data})

          console.log(this.state.animationMovies)
     
        })
          

    }
 
    render(){
     
return(
<h1>hello</h1>

 )
 }
}