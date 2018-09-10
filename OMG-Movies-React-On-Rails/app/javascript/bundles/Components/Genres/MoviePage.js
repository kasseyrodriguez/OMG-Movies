import React, { Component } from "react";
import axios from 'axios';
import API_KEY from '../../config.js'
import Responsive from './Responsive.js';
import '../../css/MoviePage.css'

export default class MoviePage extends Component {
      constructor(){
        super();
        this.state = {
          thisMovie:{
            title:'',
            vote_average:'',
            overview:'',
            release_date:'',
            runtime: ''
          },
          giphyImage: [],
          video: []
        }
      }

      async componentDidMount(){
        const API_K = API_KEY;
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${API_K}&language=en-US`);
        let vid = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/videos?api_key=${API_K}&language=en-US`)
        let video = vid.data.results[0].key;
        // console.log(video.results[0].key)
        this.setState({video})
        console.log(this.state.video)
        let thisMovie = res.data;
        let movie_url = `/api/${thisMovie.title}`;
        console.log(thisMovie.title)
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
        <h1 className='title'>{this.state.thisMovie.title}</h1><hr/>
        <div className="media">
          <div>
            <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.state.thisMovie.poster_path}`} alt="#" style={{height:"450px", width: "300px"}} />
          </div>
          <div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.state.video}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div><hr/>
        <h1>Rating: {this.state.thisMovie.vote_average}</h1><hr/>
        <h1>Overview</h1><hr/>
        <h3>{this.state.thisMovie.overview}</h3><hr/>
        <h1>Release date: {this.state.thisMovie.release_date}</h1><hr/>
        <h1>Runtime: {this.state.thisMovie.runtime} Minutes</h1><hr/>
        <img src={this.state.giphyImage} alt="movie gif" style={{height:"300px", width: "300px"}}/><hr/>
     </div>

    );

  }
}
