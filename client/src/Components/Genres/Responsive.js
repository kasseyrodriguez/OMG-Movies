import React, { Component } from "react";
import Slider from "react-slick";
import "../../css/slick.css"; 
import "../../css/slick-theme.css";


export default class Responsive extends Component {

  viewMovie() {

    window.location.href = `/movie/${this.id}`;
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow:3,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      

      <div className="carouselCont">
        <Slider {...settings}>
          {
            this.props.posters.map( (poster) => {
              return(
                <div class="card mb-5">
        <div key={poster.id} class="view overlay">
          <img class="card-img-top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster.poster_path}`} alt="Card image cap" style={{width: '99%'}}  onClick={this.viewMovie.bind(poster)}/>
        </div>
      </div>
              )
            })
           }
        </Slider>
      </div>
    );
  }
}