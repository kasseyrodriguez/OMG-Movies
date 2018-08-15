import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
//import './carousel.css'

export default class TheCarousel extends Component {


  render(){
    // const { posters } = this.state;

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
                  <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster.poster_path}`} alt="pic" style={{height: '150px', width: '100%'}}/>
                </div>
              )
            })
           }
          </Coverflow>
        </StyleRoot>
    <h1>carosel of Most popular Comedy of the decade</h1>
    </div>

  )
}
}