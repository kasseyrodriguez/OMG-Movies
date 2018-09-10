import React, { Component } from 'react';
import Genre from './Genres/Genre'
import '../css/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <Genre />
      </div>
    );
  }
}
