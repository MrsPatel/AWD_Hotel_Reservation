import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
//import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="">
            <div className="collapse"id="contact"></div>
            <h2>Welcome to AWD Hotel!</h2>
        </nav>
        <Carousel><Carousel.Item>
          <img className="d-block w-100" src="homesplash.jpg" alt="First slide"/>
          <Carousel.Caption>
            <h3 style={{font: 'black'}}>Your next stay is here</h3>
            <p>Within a few clicks you will be booking a stay in a premier hotel.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="home2.jpg" alt="Second slide"/>
          <Carousel.Caption>
            <h3>Located by the Inner Harbor</h3>
            <p>Many attractions just minutes away.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="home3.jpg" alt="Third slide"/>
          <Carousel.Caption>
            <h3>Rated the best in Maryland</h3>
            <p>Rated the best hotel on Yelp</p>
          </Carousel.Caption>
        </Carousel.Item></Carousel>
      </div>

      );
    }    
}
