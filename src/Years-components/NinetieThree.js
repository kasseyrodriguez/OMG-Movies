import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../Home-components/config.js'


export default class NinetieThree extends Component {
    constructor(props){
        super(props)
        this.state = {
          NinetieThreeMovies: [],
          NinetieThreeStore: [],
          NinetieThreeRomance: [],
          NinetieThreeAction: [],
          NinetieThreeDrama: [],
          NinetieThreeAnimation: [],
          NinetieThreeHorror: [],
          NinetieThreeComedy: [],
        }
     
      }

      componentDidMount(){
        const API_K = API_KEY;
          
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993`)
        .then(json => {

          this.setState({NinetieThreeMovies:json.data, NinetieThreeStore: json.data})

          console.log(this.state.NinetieThreeMovies)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=10749`)
        .then(json => {

          this.setState({NinetieThreeRomance:json.data})

          console.log(this.state.NinetieThreeRomance)
     
        })
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=28`)
        .then(json => {

          this.setState({NinetieThreeAction:json.data})

          console.log(this.state.NinetieThreeAction)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=18`)
        .then(json => {

          this.setState({NinetieThreeDrama:json.data})

          console.log(this.state.NinetieThreeDrama)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=16`)
        .then(json => {

          this.setState({NinetieThreeAnimation:json.data})

          console.log(this.state.NinetieThreeAnimation)
     
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=27`)
        .then(json => {

          this.setState({NinetieThreeHorror:json.data})

          console.log(this.state.NinetieThreeHorror)
     
        })


        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1993&with_genres=35`)
        .then(json => {

          this.setState({NinetieThreeComedy:json.data})

          console.log(this.state.NinetieThreeComedy)
     
        })
        
    }


 
    render(){
     
return(
    <div>
<h1>Most popular movies of 1993</h1>
<h1>Most popular Comedy of of 1993</h1>
<h1>Most popular romance of of 1993</h1>
<h1>Most popular horror of of 1993</h1>
<h1>Most popular animation of of 1993</h1>
<h1>Most popular action of of 1993</h1>
<h1>Most popular drama of of 1993</h1>
</div>

 )
 }
}