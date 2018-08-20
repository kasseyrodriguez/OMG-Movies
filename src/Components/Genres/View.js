import React, { Component } from "react";
import MoviePage from "./MoviePage.js";

export default class View extends Component {
  render() {
    const actionMoviesvariable = this.props.actionMovies.map(
      (element, index) => {
        return (
          <MoviePage
            title={element.title}
            overview={element.overview}
            rating={element.vote_average}
          />
        );
      }
    );

    return (
      <div>
        hello
        <MoviePage /> 
      </div>
    );
  }
}
