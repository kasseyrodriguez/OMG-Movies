import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from './config.js'


export default class Api extends Component {
    constructor(props){
        super(props)
        this.state = {
          movies: [],
          store: []
        }
        this.tester = []
      }
 

      componentDidMount(){
        const API_K = API_KEY;
          for(let i = 1; i < 30; i++){
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&primary_release_date.gte=1990&primary_release_date.lte=1999`)
        .then(json => {
            this.tester.push( json.data )
            console.log(json.data)
        })
          }
    //  .then(json => json.data.map(data => (
    //     {
    //        title: data.Title
    //      })))
    //    .then(newData=> this.setState({movies: newData, store: newData}))
    //  .catch(error => alert(error))
      

    }
 
    render(){
        // console.log(this.state.users)
return(
<h1>hello</h1>

 )
 }
}