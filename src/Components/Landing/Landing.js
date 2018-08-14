import React from 'react';
import './Landing.css';
// import  {Carousel, CarouselCaption, CarouselInner, CarouselItem} from 'mdbreact';
import { Mask, Row, Col, Button, View, Container} from 'mdbreact';




class LandingPage extends React.Component {

  render(){

    return (
      <div id="landingMain">
        <div class="row">
    <div class="col-sm-9">
    <img src="https://i.imgur.com/ZE2fwus.png" className="img-fluid" alt="landingImg"/>
            <div class="col-sm-9" id="insideTV">
            <img src="https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg" className="img-fluid" id="otdIMG" alt="landingMovieIMG"/>
            </div>

    </div>
</div>
      </div>
    );
  }
};

export default LandingPage;
