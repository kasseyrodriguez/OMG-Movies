import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from './config.js'
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import './carousel.css'


export default class Movie extends Component {
    constructor(props){
        super(props)
        this.state = {
          movies: [],
          store: [],
          posters: []
        }
      }

      componentDidMount(){
        const API_K = API_KEY;
          for(let i = 1; i < 3; i++){
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&primary_release_date.gte=1990&primary_release_date.lte=1999`)
              .then(json => {
              this.setState({movies:json.data, store: json.data})
              console.log(this.state.movies)
            })
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=1999`)
            .then((response) => {
              let posters = response.data.results;
              this.setState({ posters })
            })
          }
        }

    render(){

      const { posters } = this.state

      return(

        <div>
          <h1>Carousel of the Most Popular Movies of the Decade</h1>
          <StyleRoot>
              <Coverflow
                displayQuantityOfSide={2}
                navigation
                infiniteScroll
                enableHeading
                media={{
                  '@media (max-width: 900px)': {
                    width: '600px',
                    height: '300px'
                  },
                  '@media (min-width: 900px)': {
                    width: '960px',
                    height: '600px'
                  }
                }}
              >
              {
                posters.map( (poster) => {
                  return(
                    <div key={poster.id} className="item">
                      <p><strong>{poster.title}</strong></p>
                      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster.poster_path}`} alt="pic" style={{height: '150px', width: '100%'}}/>
                    </div>
                  )
                })
               }
              </Coverflow>
            </StyleRoot>
        </div>
      )
    }
}
