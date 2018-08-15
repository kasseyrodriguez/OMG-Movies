import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from './config.js'


export default class Animation extends Component {
    constructor(props){
        super(props)
        this.state = {
          animationMovies: [],
          animationStore: [],
          posters: []
        }
      }

      componentDidMount(){
        const API_K = API_KEY;
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=1999&with_genres=16`)
         .then(json => {
          this.setState({animationMovies:json.data, animationStore: json.data})
          console.log(this.state.animationMovies)
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990&primary_release_date.lte=1999&with_genres=16`)
        .then((response) => {
          let posters = response.data.results;
          this.setState({ posters })
        })

    }

    render(){
      const { posters } = this.state;

      return(

        <div className="container">
          <h1><strong>Carousel of Most Popular Animation of the Decade</strong></h1>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <img src="https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg" alt="pic" style={{height: '500px', width: '100%'}} />
              </div>
                {
                  posters.map( (poster) => {
                    return(
                      <div key={poster.id} className="item">
                        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster.poster_path}`} alt="pic" style={{height: '500px', width: '100%'}}/>
                      </div>
                    )
                  })
                 }
              </div>
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

        )
      }
}
