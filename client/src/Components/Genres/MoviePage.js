import React, { Component } from "react";
import axios from 'axios';
import API_KEY from '../../config.js'


export default class MoviePage extends Component {
      constructor(){
        super();
        this.state = {thisMovie:{
          title:'',
          vote_average:'',
          overview:'',
          release_date:'',
          runtime: ''
        },
        giphyImage: []
      }

      }

      async componentDidMount(){
        const API_K = API_KEY;
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${API_K}&language=en-US`);
        let thisMovie = res.data;
        let movie_url = `/api/${thisMovie.title}`;
        console.log(movie_url);
        let giphy = await axios.get(movie_url);
        let picture= giphy.data.data[0].images.original.url;
        this.setState({thisMovie});
        this.setState({giphyImage: picture})
        console.log(this.state.giphyImage)
      }

  render() {

    return (

      <div className="container">
        <h1>{this.state.thisMovie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.state.thisMovie.poster_path}`} alt="#" />
        <h1>Rating: {this.state.thisMovie.vote_average}</h1>
        <h1>Overview</h1>
        <h3>{this.state.thisMovie.overview}</h3>
        <h1>Release date: {this.state.thisMovie.release_date}</h1>
        <h1>Runtime: {this.state.thisMovie.runtime} Minutes</h1>
        <img src={this.state.giphyImage} alt="movie gif"/>
     </div>

    );

  }
}
