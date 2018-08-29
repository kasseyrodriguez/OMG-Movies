import React, { Component } from 'react';
import Movie from './Movie'
import Comedy from './Comedy';
import Romance from './Romance';
import Horror from './Horror';
import Animation from './Animation';
import Action from './Action';
import Drama from './Drama';
import "../../css/slick.css"; 
import "../../css/slick-theme.css";
import "../../css/Genre.css";


export default class Genre extends Component {
  render() {
    return (
      <div className="genrePage">
        <div className="genreSub">
          <Movie />
          <hr/>
          <Comedy />
          <hr/>
          <Romance />
          <hr/>
          <Horror />
          <hr/>
          <Animation />
          <hr/>
          <Action />
          <hr/>
          <Drama />
          <hr/>
        </div>
      </div>
    );
  }
}
