import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import '../../css/Carousel.css'
import MoviePage from './MoviePage.js'

export default class Carousel extends Component {
viewMovie() {

  window.location.href = `/movie/${this.id}`;
  

}
  render(){

  return(

    <div>
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
            this.props.posters.map( (poster) => {
              return(
                <div key={poster.id} className="item">
                  <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster.poster_path}`} alt="pic" style={{height: '300px', width: '100%'}}  onClick={this.viewMovie.bind(poster)}/>
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
